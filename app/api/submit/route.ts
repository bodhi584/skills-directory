import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Validate required fields
        if (!data.name || !data.githubUrl || !data.description) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // GitHub repository info
        const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'sickn33';
        const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME || 'antigravity-awesome-skills';
        const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

        if (!GITHUB_TOKEN) {
            console.error('GITHUB_TOKEN is not set');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Create issue body
        const issueBody = `
## Skill Submission

**Name:** ${data.name}
**Type:** ${data.type || 'skill'}
**Category:** ${data.category || 'other'}

### GitHub URL
${data.githubUrl}

### Description
${data.description}

### Tags
${data.tags || 'N/A'}

### Author
${data.author || 'Anonymous'}

---
*This submission was created via the Antigravity Skills directory.*
        `.trim();

        // Create GitHub Issue
        const response = await fetch(
            `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/issues`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github+json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: `[Submission] ${data.name}`,
                    body: issueBody,
                    labels: ['skill-submission', data.category],
                }),
            }
        );

        if (!response.ok) {
            const error = await response.text();
            console.error('GitHub API error:', error);
            return NextResponse.json(
                { error: 'Failed to create submission' },
                { status: response.status }
            );
        }

        const issue = await response.json();

        return NextResponse.json({
            success: true,
            issueUrl: issue.html_url,
            issueNumber: issue.number,
        });

    } catch (error) {
        console.error('Submit API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
