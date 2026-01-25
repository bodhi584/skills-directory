import { Skill, Category, SkillsResponse, SearchParams } from './types';

export const categories: Category[] = [
    { id: 1, slug: 'agents', name: 'AI Agents', description: 'Skills for building and orchestrating autonomous agents', icon: '🤖' },
    { id: 2, slug: 'coding', name: 'Coding', description: 'Skills for programming, debugging and architecture', icon: '💻' },
    { id: 3, slug: 'data', name: 'Data', description: 'Skills for data analysis, processing and visualization', icon: '📊' },
    { id: 4, slug: 'media', name: 'Media', description: 'Skills for image, video and audio creation', icon: '🎨' },
    { id: 5, slug: 'security', name: 'Security', description: 'Skills for ethical hacking and security testing', icon: '🛡️' },
    { id: 6, slug: 'marketing', name: 'Marketing', description: 'Skills for SEO, content creation and growth', icon: '📣' },
    { id: 7, slug: 'productivity', name: 'Productivity', description: 'Skills for workflow automation and efficiency', icon: '⚡' },
    { id: 8, slug: 'writing', name: 'Writing', description: 'Skills for copywriting, technical writing and editing', icon: '✍️' },
    { id: 9, slug: 'devops', name: 'DevOps', description: 'Skills for cloud, deployment and infrastructure', icon: '🚀' },
    { id: 10, slug: 'other', name: 'Other', description: 'Miscellaneous skills and tools', icon: '📦' },
];

const rawSkills: any[] = [
    // --- TOP FEATURED SKILLS (DETAILED) ---
    {
        id: 1,
        slug: 'agent-manager-skill',
        name: 'Agent Manager',
        description: 'Manage multiple local CLI agents via tmux sessions.',
        category: 'agents',
        stars: 1250,
        whatIs: 'Agent Manager is a specialized skill for controlling and monitoring multiple AI agents running in terminal sessions using tmux.',
        howToUse: 'Use commands like "start agent", "stop agent session", or "list all running agents" to orchestrate your local fleet.',
        features: ['Session persistence via tmux', 'Concurrent agent execution', 'Real-time monitoring', 'Status reporting'],
        useCases: ['Running parallel test suites', 'Background data scraping', 'Multi-agent developer workflows'],
        dependencies: { tmux: '>=3.0' }
    },
    {
        id: 2,
        slug: 'systematic-debugging',
        name: 'Systematic Debugging',
        description: 'Debug systematically, not randomly. Find and fix bugs methodically.',
        category: 'coding',
        stars: 980,
        whatIs: 'A methodology-driven skill that guides AI agents through a rigorous process of hypothesis testing, observation, and isolation to fix complex software bugs.',
        howToUse: 'Ask the AI to "Debug this issue systematically" and let it follow the hypothesis-driven workflow.',
        features: ['Root cause analysis', 'Hypothesis testing', 'Regression testing integration', 'Isolation techniques'],
        useCases: ['Fixing intermittent production bugs', 'Debugging race conditions', 'Solving cryptic error messages']
    },
    {
        id: 3,
        slug: 'ethical-hacking-methodology',
        name: 'Ethical Hacking Methodology',
        description: 'Comprehensive guide and tools for ethical hacking and penetration testing.',
        category: 'security',
        stars: 2100,
        whatIs: 'A professional-grade penetration testing framework that defines a clear 8-phase workflow for security assessments.',
        howToUse: 'Invoke by asking for a "security audit of X" or "run the pentest methodology against Y".',
        features: ['Reconnaissance patterns', 'Vulnerability analysis', 'Exploitation mechanics', 'Reporting templates'],
        useCases: ['Web application security testing', 'Internal network audits', 'Vulnerability assessment'],
        dependencies: { kali: 'latest' }
    },
    {
        id: 4,
        slug: 'browser-automation',
        name: 'Browser Automation (Playwright)',
        description: 'Expert browser automation for cleaning scraping and reliable testing.',
        category: 'agents',
        stars: 1550,
        whatIs: 'Advanced browser automation skill focusing on Playwright for reliable, fast, and modern web manipulation.',
        howToUse: 'Ask to "Automate this web flow" or "Scrape data from site X" using Playwright best practices.',
        features: ['Auto-wait selectors', 'Network interception', 'Multi-browser support', 'Stealth mode scraping'],
        useCases: ['E2E testing for SaaS', 'Data extraction from SPAs', 'Automating social media tasks'],
        dependencies: { playwright: '>=1.40' }
    },
    {
        id: 5,
        slug: 'ui-ux-pro-max',
        name: 'UI/UX Pro Max',
        description: 'Professional UI/UX design with color, fonts, and layout expertise.',
        category: 'media',
        stars: 3400,
        whatIs: 'The definitive design skill for developers who want to build beautiful products with professional-grade aesthetics.',
        howToUse: 'Ask to "Redesign this interface following UI/UX Pro Max standards" or "Create a design system for my app".',
        features: ['Color theory expertise', 'Typography pairing', 'Grid systems', 'Motion design principles'],
        useCases: ['SaaS product redesigns', 'Landing page optimization', 'Building design systems from scratch']
    },

    // --- AGENTS ---
    { id: 101, slug: 'agent-evaluation', name: 'Agent Evaluation', description: 'Framework for testing and evaluating AI agent performance.', category: 'agents' },
    { id: 102, slug: 'agent-memory-mcp', name: 'Agent Memory MCP', description: 'Persistent memory system for agents using MCP.', category: 'agents' },
    { id: 103, slug: 'agent-memory-systems', name: 'Agent Memory Systems', description: 'Design patterns for building complex memory architectures.', category: 'agents' },
    { id: 104, slug: 'agent-tool-builder', name: 'Agent Tool Builder', description: 'Rapidly build tools for agents to use.', category: 'agents' },
    { id: 105, slug: 'autonomous-agents', name: 'Autonomous Agents', description: 'Patterns for fully autonomous planning and execution.', category: 'agents' },
    { id: 106, slug: 'computer-use-agents', name: 'Computer Use Agents', description: 'Control your computer like a human using AI.', category: 'agents' },
    { id: 107, slug: 'dispatching-parallel-agents', name: 'Parallel Dispatcher', description: 'Orchestrate teams of parallel workers.', category: 'agents' },
    { id: 108, slug: 'voice-agents', name: 'Voice Agents', description: 'Build voice-enabled conversational AI.', category: 'agents' },
    { id: 109, slug: 'crewai', name: 'CrewAI Specialist', description: 'Expert in the CrewAI agent framework.', category: 'agents' },
    { id: 110, slug: 'langgraph', name: 'LangGraph Expert', description: 'Build cyclic agent graphs with LangGraph.', category: 'agents' },

    // --- CODING ---
    { id: 201, slug: 'test-driven-development', name: 'TDD Workflow', description: 'Write tests before code to ensure quality.', category: 'coding' },
    { id: 202, slug: 'clean-code', name: 'Clean Code', description: 'Maintainable and readable code principles.', category: 'coding' },
    { id: 203, slug: 'architecture', name: 'Software Architecture', description: 'Design patterns for scalable systems.', category: 'coding' },
    { id: 204, slug: 'react-best-practices', name: 'React Best Practices', description: 'Modern React hooks and patterns.', category: 'coding' },
    { id: 205, slug: 'typescript-expert', name: 'TypeScript Expert', description: 'Advanced types and safety.', category: 'coding' },
    { id: 206, slug: 'nestjs-expert', name: 'NestJS Specialist', description: 'Enterprise Node.js applications.', category: 'coding' },
    { id: 207, slug: 'nextjs-best-practices', name: 'Next.js 15+ Patterns', description: 'App Router and RSC optimization.', category: 'coding' },
    { id: 208, slug: 'python-patterns', name: 'Pythonic Patterns', description: 'Writing idiomatic Python.', category: 'coding' },
    { id: 209, slug: 'javascript-mastery', name: 'JavaScript Mastery', description: 'Core JS engine and modern APIs.', category: 'coding' },
    { id: 210, slug: 'graphql', name: 'GraphQL Specialist', description: 'Schema design and query optimization.', category: 'coding' },

    // --- SECURITY ---
    { id: 301, slug: 'burp-suite-testing', name: 'Burp Suite Specialist', description: 'Web app security testing with Burp.', category: 'security' },
    { id: 302, slug: 'sql-injection-testing', name: 'SQLi Testing', description: 'Detect and prevent SQL injection.', category: 'security' },
    { id: 303, slug: 'xss-html-injection', name: 'XSS Defense', description: 'Cross-site scripting protection.', category: 'security' },
    { id: 304, slug: 'broken-authentication', name: 'Auth Security', description: 'Fixing authentication vulnerabilities.', category: 'security' },
    { id: 305, slug: 'metasploit-framework', name: 'Metasploit Expert', description: 'Professional exploitation framework.', category: 'security' },
    { id: 306, slug: 'cloud-penetration-testing', name: 'Cloud Pentesting', description: 'AWS/GCP/Azure security audits.', category: 'security' },
    { id: 307, slug: 'red-team-tactics', name: 'Red Team Tactics', description: 'Advanced adversary emulation.', category: 'security' },
    { id: 308, slug: 'vulnerability-scanner', name: 'Vulnerability Scanning', description: 'Automated security assessments.', category: 'security' },
    { id: 309, slug: 'wireshark-analysis', name: 'Packet Analysis', description: 'Network forensics with Wireshark.', category: 'security' },

    // --- PRODUCTIVITY ---
    { id: 401, slug: 'brainstorming', name: 'Brainstorming', description: 'Creative ideation and design thinking.', category: 'productivity' },
    { id: 402, slug: 'writing-plans', name: 'Plan Writing', description: 'Detailed implementation blueprints.', category: 'productivity' },
    { id: 403, slug: 'workflow-automation', name: 'Workflow Automation', description: 'No-code and code-based automation.', category: 'productivity' },
    { id: 404, slug: 'kaizen', name: 'Kaizen (Review)', description: 'Continuous improvement of tasks.', category: 'productivity' },
    { id: 405, slug: 'using-git-worktrees', name: 'Git Worktrees', description: 'Parallel tasking with isolated working dirs.', category: 'productivity' },
    { id: 406, slug: 'verification-before-completion', name: 'Work Verification', description: 'Checkpoints for task completion.', category: 'productivity' },

    // --- WRITING ---
    { id: 501, slug: 'doc-coauthoring', name: 'Document Co-Authoring', description: 'Collaborative writing with AI.', category: 'writing' },
    { id: 502, slug: 'copy-editing', name: 'Copy Editing', description: 'Refining and polishing text.', category: 'writing' },
    { id: 503, slug: 'content-creator', name: 'Content Creator', description: 'Social media and blog content.', category: 'writing' },
    { id: 504, slug: 'copywriting', name: 'Copywriting Specialist', description: 'High-conversion sales copy.', category: 'writing' },
    { id: 505, slug: 'internal-comms', name: 'Internal Comms', description: 'Corporate announcements and reports.', category: 'writing' },

    // --- DATA ---
    { id: 601, slug: 'database-design', name: 'Database Design', description: 'Schema normalization and optimization.', category: 'data' },
    { id: 602, slug: 'postgres-best-practices', name: 'Postgres Specialist', description: 'PostgreSQL performance and features.', category: 'data' },
    { id: 603, slug: 'clickhouse-io', name: 'ClickHouse Specialist', description: 'Real-time analytics and OLAP.', category: 'data' },
    { id: 604, slug: 'neon-postgres', name: 'Neon Serverless', description: 'Edge-ready Postgres databases.', category: 'data' },
    { id: 605, slug: 'nosql-expert', name: 'NoSQL Expert', description: 'MongoDB, Redis, and Key-Value stores.', category: 'data' },

    // --- MARKETING ---
    { id: 701, slug: 'launch-strategy', name: 'Launch Strategy', description: 'Go-to-market plans for new products.', category: 'marketing' },
    { id: 702, slug: 'programmatic-seo', name: 'Programmatic SEO', description: 'Large scale SEO automation.', category: 'marketing' },
    { id: 703, slug: 'paid-ads', name: 'Paid Ads Expert', description: 'Google, FB, and Twitter ad accounts.', category: 'marketing' },
    { id: 704, slug: 'micro-saas-launcher', name: 'Micro-SaaS Builder', description: 'Launch lean software products.', category: 'marketing' },
    { id: 705, slug: 'pricing-strategy', name: 'Pricing Strategy', description: 'Monetization and business models.', category: 'marketing' },

    // --- DEVOPS ---
    { id: 801, slug: 'docker-expert', name: 'Docker Expert', description: 'Containerization and orchestration.', category: 'devops' },
    { id: 802, slug: 'vercel-deployment', name: 'Vercel Specialist', description: 'Edge functions and static hosting.', category: 'devops' },
    { id: 803, slug: 'firebase', name: 'Firebase Backend', description: 'Realtime DB and Auth.', category: 'devops' },
    { id: 804, slug: 'aws-serverless', name: 'AWS Lambda / Serverless', description: 'Building with Lambda and DynamoDB.', category: 'devops' },
    { id: 805, slug: 'github-workflow-automation', name: 'GitHub Actions', description: 'CI/CD pipeline automation.', category: 'devops' },

    // --- MEDIA ---
    { id: 901, slug: 'algorithmic-art', name: 'Algorithmic Art', description: 'Visual art with p5.js and math.', category: 'media' },
    { id: 902, slug: 'canvas-design', name: 'Canvas Design', description: 'Creating posters and graphics.', category: 'media' },
    { id: 903, slug: 'remotion-best-practices', name: 'Remotion Specialist', description: 'Programmatic video with React.', category: 'media' },
    { id: 904, slug: 'mobile-design', name: 'Mobile UI/UX', description: 'iOS and Android app design.', category: 'media' },
    { id: 905, slug: 'game-development', name: 'Game Design', description: 'Core loops and mechanics.', category: 'media' },

    // --- SYSTEM EXTENSION ---
    { id: 1001, slug: 'mcp-builder', name: 'MCP Builder', description: 'Create Model Context Protocol servers.', category: 'other' },
    { id: 1002, slug: 'skill-creator', name: 'Skill Creator', description: 'Tools for creating new AI skills.', category: 'other' },
    { id: 1003, slug: 'writing-skills', name: 'Writing Skills', description: 'Syntax and validation for skill files.', category: 'other' },
];

export const initialSkills: Skill[] = rawSkills.map(skill => ({
    ...skill,
    author_name: skill.author_name || 'Antigravity',
    author_github: skill.author_github || 'sickn33/antigravity-awesome-skills',
    github_url: skill.github_url || `https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/${skill.slug}`,
    install_command: skill.install_command || `git clone --depth 1 https://github.com/sickn33/antigravity-awesome-skills.git /tmp/ag-skills && cp -r /tmp/ag-skills/skills/${skill.slug} ~/.agent/skills/`,
    platforms: skill.platforms || ['antigravity', 'claude', 'cursor'],
    stars: skill.stars || Math.floor(Math.random() * 500) + 50,
    tags: skill.tags || [skill.category, 'skill', 'ai'],
    dependencies: skill.dependencies || null,
    created_at: skill.created_at || new Date().toISOString(),
    updated_at: skill.updated_at || new Date().toISOString(),
    whatIs: skill.whatIs || `A powerful skill for ${skill.name.toLowerCase()} that enhances your AI assistant's capabilities in ${skill.category} tasks.`,
    howToUse: skill.howToUse || `Simply invoke this skill by asking your AI to perform a task related to ${skill.name.toLowerCase()}.`,
    features: skill.features || [
        `${skill.name} core logic`,
        `Advanced ${skill.category} patterns`,
        'Error prevention and recovery'
    ],
    useCases: skill.useCases || [
        `Automating ${skill.name.toLowerCase()} workflows`,
        `Improving ${skill.category} performance`,
        `Standardizing ${skill.name.toLowerCase()} outputs`
    ]
}));

// 数据操作函数
export function getSkills(params: SearchParams = {}): SkillsResponse {
    let filtered = [...initialSkills];

    if (params.query) {
        const q = params.query.toLowerCase();
        filtered = filtered.filter(s =>
            s.name.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q) ||
            s.tags.some(t => t.toLowerCase().includes(q))
        );
    }

    if (params.category) {
        filtered = filtered.filter(s => s.category === params.category);
    }

    if (params.platform) {
        filtered = filtered.filter(s => s.platforms.includes(params.platform!));
    }

    if (params.tag) {
        filtered = filtered.filter(s => s.tags.includes(params.tag!));
    }

    // Default sorting by stars
    filtered.sort((a, b) => b.stars - a.stars);

    const page = params.page || 1;
    const pageSize = params.pageSize || 100;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return {
        skills: filtered.slice(start, end),
        total: filtered.length,
        page,
        pageSize,
    };
}

export function getSkillBySlug(slug: string): Skill | undefined {
    return initialSkills.find(s => s.slug === slug);
}

export function getFeaturedSkills(): Skill[] {
    return [...initialSkills].sort((a, b) => b.stars - a.stars).slice(0, 6);
}

export function getLatestSkills(): Skill[] {
    return [...initialSkills].sort((a, b) => b.id - a.id).slice(0, 6);
}

export function getCategoriesWithCount(): Category[] {
    return categories.map(cat => ({
        ...cat,
        count: initialSkills.filter(s => s.category === cat.slug).length,
    }));
}
