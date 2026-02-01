import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'what-are-ai-agent-skills' },
    { slug: '5-skills-10x-productivity' },
    { slug: 'create-your-first-skill' },
  ];
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const titles = {
    'what-are-ai-agent-skills': 'What Are AI Agent Skills? A Complete Guide for 2025',
    '5-skills-10x-productivity': '5 AI Agent Skills That Will 10x Your Productivity',
    'create-your-first-skill': 'How to Create Your First AI Agent Skill',
  };
  
  return {
    title: `${titles[slug]} - Antigravity Skills Blog`,
    description: 'Read our latest articles about AI Agent Skills.',
  };
}

export default async function BlogPost({ params }) {
  const slug = params.slug;
  
  const posts = {
    'what-are-ai-agent-skills': {
      title: 'What Are AI Agent Skills? A Complete Guide for 2025',
      date: '2026-02-01',
      readTime: '5 min',
      tags: ['AI Agents', 'Tutorial', 'Basics'],
      content: `## The Rise of AI Agents

2025 marks the year when AI agents finally broke free from the lab and entered production. With platforms like Claude Code, Cursor, Google Antigravity, and Gemini CLI leading the charge, we're witnessing a fundamental shift in how we interact with AI.

But here's the problem: **A raw AI model is like a brilliant mind without tools.** It can think, reason, and generate text—but it can't execute real-world tasks without additional capabilities.

Enter **AI Agent Skills**.

## What Are AI Agent Skills?

Think of skills as **modular capability packages** that transform a general-purpose AI into a specialized worker.

### Analogy Time 🧠

\`\`\`
Traditional AI = A very smart consultant who gives advice
AI with Skills = That same consultant + a toolbox + a laptop + access to your systems
\`\`\`

### Technical Definition

A skill is a structured package containing:
- **System prompts** that define the skill's personality and approach
- **Tools/APIs** the AI can call
- **Examples** and context for better performance
- **Configuration files** for customization

## Why Skills Matter

### 1. **Reusability**
Write once, use everywhere. A well-crafted skill can work across Claude Code, Cursor, and Antigravity.

### 2. **Specialization**
Don't want your AI to just chat? Add:
- 🔐 Security skills for penetration testing
- 🎨 Design skills for UI/UX creation  
- 📊 Data skills for analysis
- 🚀 DevOps skills for deployment

### 3. **Quality Assurance**
Curated skills are tested and optimized. No more prompting roulette.

## The Antigravity Skills Ecosystem

At AntigravitySkills.org, we've curated **68+ skills** across categories:

| Category | Count | Examples |
|----------|-------|----------|
| 🤖 Agents | 12 | Agent Manager, OpenCode Auth |
| 💻 Coding | 11 | Cursor Rules, Debugging |
| 🛡️ Security | 10 | Ethical Hacking, Penetration Testing |

## Featured Skills You Should Try

### 1. **Agent Manager** ⭐ 1k
> Manage multiple local CLI agents via tmux sessions.

### 2. **Browser Automation (Playwright)** ⭐ 2k
> Expert browser automation for cleaning, scraping, and reliable testing.

### 3. **Systematic Debugging** ⭐ 980
> Debug systematically, not randomly. Find and fix bugs methodically.

### 4. **OpenCode Antigravity Auth** 🔥
> Borrow Google's developer channel to call top-tier models for free.

## Get Started Today

Visit **[AntigravitySkills.org](https://www.antigravityskills.org)** and start exploring!`,
    },
    '5-skills-10x-productivity': {
      title: '5 AI Agent Skills That Will 10x Your Productivity',
      date: '2026-02-01',
      readTime: '4 min',
      tags: ['Productivity', 'Skills', 'Tutorial'],
      content: `## The Productivity Problem

Every developer knows this cycle:
1. Start a new task
2. Get stuck on something repetitive
3. Lose context switching
4. Spend hours on "easy" tasks

**AI Agent Skills are the antidote.**

Here are 5 skills that will save you 10+ hours per week.

## 1. Agent Manager ⭐ 1,000

**What it does:** Manages multiple local CLI agents via tmux sessions.

**Time saved:** 8-10 hours per refactoring sprint

## 2. Systematic Debugging ⭐ 980

**What it does:** Debug systematically, not randomly.

**Before:**
\`\`\`
Me: "Why is this not working???"
*Changes random lines*
*Still broken*
*Panic*
\`\`\`

**After:**
\`\`\`
Me: "Expected: POST returns 200"
Skill: "Test case created. Bug found at line 47."
\`\`\`

**Time saved:** 50% debugging time

## 3. Browser Automation (Playwright) ⭐ 2,000

**What it does:** Expert browser automation for cleaning, scraping, and testing.

**Time saved:** 5+ hours per testing cycle

## 4. Skill Share ⭐ 306

**What it does:** Sync skills across all AI CLI tools with one command.

**Time saved:** 2 hours per onboarding + consistent quality

## 5. AI Resource Manager ⭐ 20

**What it does:** Package manager for AI rules and prompts with semantic versioning.

**Time saved:** No more "which version of the prompt was this?"

## The Stack That Changes Everything

Combine these skills for maximum effect and report:
- **40% faster debugging**
- **60% less context switching**
- **100% consistent coding standards**
- **Zero "works on my machine" problems**

## Getting Started

Visit **[AntigravitySkills.org](https://www.antigravityskills.org)** and search for these skills.`,
    },
    'create-your-first-skill': {
      title: 'How to Create Your First AI Agent Skill',
      date: '2026-02-01',
      readTime: '7 min',
      tags: ['Tutorial', 'Development', 'Custom Skills'],
      content: `## Why Create Custom Skills?

The skills in our directory are great, but **your workflow is unique**. Creating a skill lets you package your expertise into something reusable.

## Anatomy of a Skill

Every skill is a directory with this structure:

\`\`\`
my-awesome-skill/
├── SKILL.md          # Main configuration & documentation
├── scripts/          # Helper scripts (optional)
├── data/             # Static data (optional)
└── assets/           # Images, templates (optional)
\`\`\`

## Step-by-Step: Creating a "Code Reviewer" Skill

### Step 1: Create the Directory

\`\`\`bash
mkdir -p code-reviewer
cd code-reviewer
\`\`\`

### Step 2: Write SKILL.md

\`\`\`markdown
# Code Reviewer Skill

## What It Does
Performs systematic code reviews following your team's standards.

## When to Use
Before submitting PRs, after major refactoring, or during peer review.

## Standards Checklist

### Code Quality
- [ ] Variable naming follows conventions
- [ ] Functions are small and do one thing
- [ ] No magic numbers or strings

### Security
- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] SQL injection prevention
\`\`\`

### Step 3: Add Helper Scripts

\`\`\`bash
#!/bin/bash
# Quick security scan
echo "🔍 Running security checks..."
\`\`\`

### Step 4: Test Your Skill

\`\`\`bash
claude "Review this function using the Code Reviewer skill"
\`\`\`

## Best Practices

1. **Be Specific, Not Generic**
   ❌ Bad: "Write good code"  
   ✅ Good: "Check that all API calls have timeout handling"

2. **Include Checklists**
   Checklists force systematic thinking.

3. **Make It Platform-Avoidant**
   Write prompts that work across Claude, Cursor, and Antigravity.

## Submit Your Skill to Antigravity

1. Fork our [skills-directory repo](https://github.com/bodhi584/skills-directory)
2. Add your skill to the \`data/\` directory
3. Create a PR
4. Our team will review and publish

## What's Next?

1. Browse AntigravitySkills.org for inspiration
2. Identify a repetitive task in your workflow
3. Package it as a skill
4. Share it with the community

The best skills come from solving your own problems.`,
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  // Simple markdown rendering
  const lines = post.content.split('\n');
  const paragraphs = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('## ')) {
      paragraphs.push(`<h2 class="text-2xl font-bold mt-8 mb-4">${line.slice(3)}</h2>`);
    } else if (line.startsWith('### ')) {
      paragraphs.push(`<h3 class="text-xl font-bold mt-6 mb-3">${line.slice(4)}</h3>`);
    } else if (line.startsWith('- ')) {
      paragraphs.push(`<li class="ml-4 mb-2">${line.slice(2)}</li>`);
    } else if (line.startsWith('```')) {
      // Code block start - skip to end
      let j = i + 1;
      const codeLines = [];
      while (j < lines.length && !lines[j].startsWith('```')) {
        codeLines.push(lines[j]);
        j++;
      }
      paragraphs.push(`<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>${codeLines.join('\n')}</code></pre>`);
      i = j;
    } else if (line.trim() && !line.startsWith('---')) {
      paragraphs.push(`<p class="mb-4 leading-relaxed">${line}</p>`);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: paragraphs.join('') }}
        />
      </article>

      <footer className="mt-12 pt-8 border-t">
        <p className="text-gray-500 mb-4">Share this article:</p>
        <div className="flex gap-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://www.antigravityskills.org/blog/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.antigravityskills.org/blog/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
