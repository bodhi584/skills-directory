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

    // --- ADDITIONAL AGENTS ---
    { id: 1004, slug: 'swarm-intelligence', name: 'Swarm Intelligence', description: 'Coordination patterns for large-scale agent swarms.', category: 'agents' },
    { id: 1005, slug: 'agent-orchestration', name: 'Agent Orchestration', description: 'Advanced workflow orchestration for multi-agent systems.', category: 'agents' },
    { id: 1006, slug: 'task-decomposition', name: 'Task Decomposition', description: 'Break complex tasks into manageable agent subtasks.', category: 'agents' },
    { id: 1007, slug: 'feedback-loop-agents', name: 'Feedback Loop Agents', description: 'Self-improving agents with feedback mechanisms.', category: 'agents' },
    { id: 1008, slug: 'hierarchical-agents', name: 'Hierarchical Agents', description: 'Manager-worker agent hierarchies.', category: 'agents' },

    // --- ADDITIONAL CODING ---
    { id: 1010, slug: 'rust-expert', name: 'Rust Expert', description: 'Systems programming with Rust safety guarantees.', category: 'coding' },
    { id: 1011, slug: 'go-microservices', name: 'Go Microservices', description: 'Building scalable microservices in Go.', category: 'coding' },
    { id: 1012, slug: 'api-design', name: 'API Design', description: 'RESTful and GraphQL API best practices.', category: 'coding' },
    { id: 1013, slug: 'design-patterns', name: 'Design Patterns', description: 'Classic Gang of Four patterns implementation.', category: 'coding' },
    { id: 1014, slug: 'code-review-automation', name: 'Code Review Automation', description: 'Automated code quality and style checking.', category: 'coding' },
    { id: 1015, slug: 'refactoring-master', name: 'Refactoring Master', description: 'Safe code refactoring techniques.', category: 'coding' },
    { id: 1016, slug: 'performance-optimization', name: 'Performance Optimization', description: 'Optimize code for speed and efficiency.', category: 'coding' },
    { id: 1017, slug: 'testing-strategies', name: 'Testing Strategies', description: 'Unit, integration, and E2E testing patterns.', category: 'coding' },
    { id: 1018, slug: 'dependency-injection', name: 'Dependency Injection', description: 'Loose coupling with DI containers.', category: 'coding' },
    { id: 1019, slug: 'domain-driven-design', name: 'Domain-Driven Design', description: 'DDD tactical patterns and bounded contexts.', category: 'coding' },

    // --- ADDITIONAL DATA ---
    { id: 1020, slug: 'data-pipelines', name: 'Data Pipelines', description: 'ETL and data pipeline orchestration.', category: 'data' },
    { id: 1021, slug: 'data-visualization', name: 'Data Visualization', description: 'Creating insightful charts and dashboards.', category: 'data' },
    { id: 1022, slug: 'machine-learning-pipelines', name: 'ML Pipelines', description: 'End-to-end ML workflow automation.', category: 'data' },
    { id: 1023, slug: 'feature-engineering', name: 'Feature Engineering', description: 'Creating impactful ML features.', category: 'data' },
    { id: 1024, slug: 'data-quality', name: 'Data Quality', description: 'Data validation and cleansing.', category: 'data' },
    { id: 1025, slug: 'streaming-analytics', name: 'Streaming Analytics', description: 'Real-time data stream processing.', category: 'data' },
    { id: 1026, slug: 'big-data-processing', name: 'Big Data Processing', description: 'Distributed computing patterns.', category: 'data' },
    { id: 1027, slug: 'graph-databases', name: 'Graph Databases', description: 'Neo4j and graph query patterns.', category: 'data' },
    { id: 1028, slug: 'data-lake-architecture', name: 'Data Lake Architecture', description: 'Modern data lake best practices.', category: 'data' },
    { id: 1029, slug: 'time-series-analysis', name: 'Time Series Analysis', description: 'Forecasting and trend analysis.', category: 'data' },

    // --- ADDITIONAL SECURITY ---
    { id: 1030, slug: 'api-security', name: 'API Security', description: 'Securing REST and GraphQL APIs.', category: 'security' },
    { id: 1031, slug: 'container-security', name: 'Container Security', description: 'Docker and K8s security hardening.', category: 'security' },
    { id: 1032, slug: 'identity-management', name: 'Identity Management', description: 'OAuth, OIDC, and SSO implementations.', category: 'security' },
    { id: 1033, slug: 'zero-trust-architecture', name: 'Zero Trust Architecture', description: 'Zero trust security principles.', category: 'security' },
    { id: 1034, slug: 'cryptography-fundamentals', name: 'Cryptography', description: 'Encryption and security primitives.', category: 'security' },
    { id: 1035, slug: 'incident-response', name: 'Incident Response', description: 'Security incident handling.', category: 'security' },
    { id: 1036, slug: 'compliance-auditing', name: 'Compliance Auditing', description: 'SOC2, ISO 27001 compliance checks.', category: 'security' },
    { id: 1037, slug: 'secrets-management', name: 'Secrets Management', description: 'Vault and secret rotation patterns.', category: 'security' },

    // --- ADDITIONAL PRODUCTIVITY ---
    { id: 1040, slug: 'meeting-notes', name: 'Meeting Notes', description: 'AI-powered meeting summarization.', category: 'productivity' },
    { id: 1041, slug: 'task-management', name: 'Task Management', description: 'Organize and prioritize work.', category: 'productivity' },
    { id: 1042, slug: 'email-automation', name: 'Email Automation', description: 'Smart email workflows.', category: 'productivity' },
    { id: 1043, slug: 'calendar-management', name: 'Calendar Management', description: 'Scheduling and time blocking.', category: 'productivity' },
    { id: 1044, slug: 'document-search', name: 'Document Search', description: 'Semantic document discovery.', category: 'productivity' },
    { id: 1045, slug: 'knowledge-management', name: 'Knowledge Management', description: 'Building and maintaining knowledge bases.', category: 'productivity' },
    { id: 1046, slug: 'personal-assistant', name: 'Personal Assistant', description: 'Your AI-powered personal helper.', category: 'productivity' },
    { id: 1047, slug: 'research-assistant', name: 'Research Assistant', description: 'Automated web research and synthesis.', category: 'productivity' },

    // --- ADDITIONAL WRITING ---
    { id: 1050, slug: 'technical-writing', name: 'Technical Writing', description: 'Documentation and API docs.', category: 'writing' },
    { id: 1051, slug: 'api-documentation', name: 'API Documentation', description: 'OpenAPI and doc generation.', category: 'writing' },
    { id: 1052, slug: 'user-guide-writing', name: 'User Guides', description: 'End-user documentation.', category: 'writing' },
    { id: 1053, slug: 'grant-writing', name: 'Grant Writing', description: 'Research proposal and grant writing.', category: 'writing' },
    { id: 1054, slug: 'legal-drafting', name: 'Legal Drafting', description: 'Contracts and legal documents.', category: 'writing' },
    { id: 1055, slug: 'translation', name: 'Translation', description: 'Multi-language content translation.', category: 'writing' },
    { id: 1056, slug: 'accessibility-writing', name: 'Accessibility Writing', description: 'WCAG-compliant content.', category: 'writing' },

    // --- ADDITIONAL MARKETING ---
    { id: 1060, slug: 'email-marketing', name: 'Email Marketing', description: 'Campaign automation and templates.', category: 'marketing' },
    { id: 1061, slug: 'social-media-management', name: 'Social Media Manager', description: 'Cross-platform social scheduling.', category: 'marketing' },
    { id: 1062, slug: 'content-strategy', name: 'Content Strategy', description: 'Content planning and calendar.', category: 'marketing' },
    { id: 1063, slug: 'conversion-optimization', name: 'CRO Specialist', description: 'A/B testing and conversion improvement.', category: 'marketing' },
    { id: 1064, slug: 'analytics-dashboard', name: 'Marketing Analytics', description: 'ROI and metric dashboards.', category: 'marketing' },
    { id: 1065, slug: 'brand-strategy', name: 'Brand Strategy', description: 'Brand identity and messaging.', category: 'marketing' },
    { id: 1066, slug: 'community-management', name: 'Community Manager', description: 'Discord and forum engagement.', category: 'marketing' },
    { id: 1067, slug: 'influencer-outreach', name: 'Influencer Outreach', description: 'Creator partnership automation.', category: 'marketing' },

    // --- ADDITIONAL DEVOPS ---
    { id: 1070, slug: 'kubernetes-master', name: 'Kubernetes Master', description: 'K8s cluster management.', category: 'devops' },
    { id: 1071, slug: 'terraform-infrastructure', name: 'Terraform Infrastructure', description: 'Infrastructure as Code.', category: 'devops' },
    { id: 1072, slug: 'monitoring-observability', name: 'Monitoring & Observability', description: 'Prometheus, Grafana, and tracing.', category: 'devops' },
    { id: 1073, slug: 'service-mesh', name: 'Service Mesh', description: 'Istio and traffic management.', category: 'devops' },
    { id: 1074, slug: 'chaos-engineering', name: 'Chaos Engineering', description: 'Resilience testing patterns.', category: 'devops' },
    { id: 1075, slug: 'gitops-workflows', name: 'GitOps Workflows', description: 'ArgoCD and flux patterns.', category: 'devops' },
    { id: 1076, slug: 'configuration-management', name: 'Configuration Management', description: 'Ansible and config orchestration.', category: 'devops' },
    { id: 1077, slug: 'log-aggregation', name: 'Log Aggregation', description: 'ELK stack and log analysis.', category: 'devops' },
    { id: 1078, slug: 'secrets-injection', name: 'Secrets Injection', description: 'Secure secret distribution.', category: 'devops' },
    { id: 1079, slug: 'blue-green-deployment', name: 'Blue-Green Deployment', description: 'Zero-downtime deployments.', category: 'devops' },

    // --- ADDITIONAL MEDIA ---
    { id: 1080, slug: 'image-generation', name: 'Image Generation', description: 'AI image creation and editing.', category: 'media' },
    { id: 1081, slug: 'video-editing', name: 'AI Video Editing', description: 'Automated video post-production.', category: 'media' },
    { id: 1082, slug: 'audio-processing', name: 'Audio Processing', description: 'Voice and music AI tools.', category: 'media' },
    { id: 1083, slug: '3d-modeling', name: '3D Modeling', description: 'AI-assisted 3D creation.', category: 'media' },
    { id: 1084, slug: 'podcast-production', name: 'Podcast Production', description: 'AI voice and editing.', category: 'media' },
    { id: 1085, slug: 'visual-effects', name: 'Visual Effects', description: 'VFX composition and rendering.', category: 'media' },
    { id: 1086, slug: 'motion-graphics', name: 'Motion Graphics', description: 'Animated graphics creation.', category: 'media' },
    { id: 1087, slug: 'branding-design', name: 'Branding Design', description: 'Logo and brand identity.', category: 'media' },
    { id: 1088, slug: 'presentation-design', name: 'Presentation Design', description: 'Slides and pitch decks.', category: 'media' },
    { id: 1089, slug: 'photo-retouching', name: 'Photo Retouching', description: 'AI photo enhancement.', category: 'media' },

    // --- MORE OTHER ---
    { id: 1090, slug: 'research-tools', name: 'Research Tools', description: 'Academic and scientific research.', category: 'other' },
    { id: 1091, slug: 'finance-tools', name: 'Finance Tools', description: 'Personal and business finance.', category: 'other' },
    { id: 1092, slug: 'legal-tools', name: 'Legal Tools', description: 'Legal research and documents.', category: 'other' },
    { id: 1093, slug: 'education-tools', name: 'Education Tools', description: 'Learning and tutoring assistants.', category: 'other' },
    { id: 1094, slug: 'healthcare-tools', name: 'Healthcare Tools', description: 'Medical and health AI.', category: 'other' },
    { id: 1095, slug: 'real-estate-tools', name: 'Real Estate Tools', description: 'Property analysis and listings.', category: 'other' },
    { id: 1096, slug: 'travel-planning', name: 'Travel Planning', description: 'Trip and itinerary planning.', category: 'other' },
    { id: 1097, slug: 'recipe-cooking', name: 'Recipe & Cooking', description: 'Recipe generation and meal planning.', category: 'other' },
    { id: 1098, slug: 'fitness-coaching', name: 'Fitness Coaching', description: 'Workout and nutrition planning.', category: 'other' },
    { id: 1099, slug: 'music-composition', name: 'Music Composition', description: 'AI music generation.', category: 'other' },

    // --- NEW SKILLS FROM CLAWHUB (2026-02-02) ---
    // Web & Frontend Development
    { id: 2001, slug: 'discord-skill', name: 'Discord', description: 'Control Discord from Clawdbot - send messages, react.', category: 'agents' },
    { id: 2002, slug: 'frontend-design', name: 'Frontend Design', description: 'Create production-grade frontend interfaces.', category: 'media' },
    { id: 2003, slug: 'slack-skill', name: 'Slack', description: 'Control Slack from Clawdbot.', category: 'agents' },
    { id: 2004, slug: 'ui-audit', name: 'UI Audit', description: 'Automated UI audits against UX principles.', category: 'media' },
    { id: 2005, slug: 'ux-audit', name: 'UX Audit', description: 'Automated design audits.', category: 'media' },
    
    // Coding Agents
    { id: 2010, slug: 'agentlens', name: 'AgentLens', description: 'Navigate codebases using hierarchical documentation.', category: 'coding' },
    { id: 2011, slug: 'claude-team', name: 'Claude Team', description: 'Orchestrate multiple Claude Code workers.', category: 'agents' },
    { id: 2012, slug: 'cursor-agent', name: 'Cursor Agent', description: 'Use Cursor CLI agent for coding tasks.', category: 'coding' },
    { id: 2013, slug: 'factory-ai', name: 'Factory AI', description: 'Factory AI droid CLI for software engineering.', category: 'coding' },
    
    // Git & GitHub
    { id: 2020, slug: 'conventional-commits', name: 'Conventional Commits', description: 'Format commits using Conventional Commits spec.', category: 'coding' },
    { id: 2021, slug: 'github-cli', name: 'GitHub CLI', description: 'Interact with GitHub using gh CLI.', category: 'coding' },
    { id: 2022, slug: 'github-pr', name: 'GitHub PR', description: 'Fetch, preview, merge, test PRs locally.', category: 'coding' },
    { id: 2023, slug: 'deepwiki', name: 'DeepWiki', description: 'Query GitHub repository documentation.', category: 'data' },
    
    // DevOps & Cloud
    { id: 2030, slug: 'azure-cli', name: 'Azure CLI', description: 'Manage Azure Cloud Platform.', category: 'devops' },
    { id: 2031, slug: 'cloudflare-wrangler', name: 'Cloudflare Workers', description: 'Manage Workers, KV, D1, R2 using Wrangler.', category: 'devops' },
    { id: 2032, slug: 'digital-ocean', name: 'Digital Ocean', description: 'Manage droplets, domains, infrastructure.', category: 'devops' },
    { id: 2033, slug: 'hetzner-cloud', name: 'Hetzner Cloud', description: 'Manage servers, volumes, firewalls, DNS.', category: 'devops' },
    { id: 2034, slug: 'kubectl-skill', name: 'Kubernetes kubectl', description: 'Execute and manage K8s clusters.', category: 'devops' },
    { id: 2035, slug: 'tailscale', name: 'Tailscale', description: 'Manage tailnet via CLI and API.', category: 'devops' },
    { id: 2036, slug: 'vercel-cli', name: 'Vercel CLI', description: 'Deploy and manage Vercel projects.', category: 'devops' },
    { id: 2037, slug: 'flyio-cli', name: 'Fly.io CLI', description: 'Deploy, logs, SSH, secrets, scaling.', category: 'devops' },
    { id: 2038, slug: 'portainer', name: 'Portainer', description: 'Control Docker via Portainer API.', category: 'devops' },
    { id: 2039, slug: 'supabase-skill', name: 'Supabase', description: 'Database operations, vector search, storage.', category: 'data' },
    
    // Browser & Automation
    { id: 2040, slug: 'agent-browser', name: 'Agent Browser', description: 'Rust-based headless browser automation.', category: 'agents' },
    { id: 2041, slug: 'browser-use', name: 'Browser Use', description: 'Cloud-based browser automation.', category: 'agents' },
    { id: 2042, slug: 'playwright-cli', name: 'Playwright CLI', description: 'Browser automation for testing.', category: 'agents' },
    
    // Image & Video
    { id: 2050, slug: 'comfyui-skill', name: 'ComfyUI', description: 'Install, manage, run ComfyUI instances.', category: 'media' },
    { id: 2051, slug: 'fal-ai', name: 'Fal.ai', description: 'Generate images, videos, audio.', category: 'media' },
    { id: 2052, slug: 'gamma-presentation', name: 'Gamma', description: 'AI-powered presentations and documents.', category: 'media' },
    { id: 2053, slug: 'pollinations-ai', name: 'Pollinations.ai', description: 'Text, images, videos, audio with 25+ models.', category: 'media' },
    { id: 2054, slug: 'veo-video', name: 'Google Veo', description: 'Generate video using Google Veo.', category: 'media' },
    { id: 2055, slug: 'venice-ai', name: 'Venice AI', description: 'Image/video generation, upscaling.', category: 'media' },
    { id: 2056, slug: 'figma-skill', name: 'Figma', description: 'Design analysis, asset export, audit.', category: 'media' },
    
    // Search & Research
    { id: 2060, slug: 'brave-search', name: 'Brave Search', description: 'Web search and content extraction.', category: 'productivity' },
    { id: 2061, slug: 'exa-search', name: 'Exa Search', description: 'Neural web search and code context.', category: 'productivity' },
    { id: 2062, slug: 'kagi-search', name: 'Kagi Search', description: 'Web search using Kagi API.', category: 'productivity' },
    { id: 2063, slug: 'tavily-search', name: 'Tavily Search', description: 'AI-optimized web search.', category: 'productivity' },
    { id: 2064, slug: 'perplexity-search', name: 'Perplexity', description: 'Web-grounded search with citations.', category: 'productivity' },
    { id: 2065, slug: 'youtube-summarizer', name: 'YouTube Summarizer', description: 'Fetch transcripts and generate summaries.', category: 'productivity' },
    { id: 2066, slug: 'arxiv-watcher', name: 'ArXiv Watcher', description: 'Search and summarize papers.', category: 'productivity' },
    { id: 2067, slug: 'news-aggregator', name: 'News Aggregator', description: 'News from Hacker News, GitHub Trending.', category: 'productivity' },
    
    // Apple Apps
    { id: 2070, slug: 'apple-contacts', name: 'Apple Contacts', description: 'Look up macOS Contacts.app.', category: 'productivity' },
    { id: 2071, slug: 'apple-music', name: 'Apple Music', description: 'Search, add songs, control playback.', category: 'media' },
    { id: 2072, slug: 'apple-photos', name: 'Apple Photos', description: 'List albums, browse, search photos.', category: 'media' },
    { id: 2073, slug: 'homebrew-skill', name: 'Homebrew', description: 'Manage macOS packages and casks.', category: 'devops' },
    { id: 2074, slug: 'apple-remind-me', name: 'Apple Reminders', description: 'Natural language reminders.', category: 'productivity' },
    { id: 2075, slug: 'apple-mail-search', name: 'Apple Mail Search', description: 'Fast mail search via SQLite.', category: 'productivity' },
    
    // Marketing & Sales
    { id: 2080, slug: 'apollo-io', name: 'Apollo.io', description: 'People/org enrichment, search, lists.', category: 'marketing' },
    { id: 2081, slug: 'twitter-bird', name: 'Twitter/X CLI', description: 'Read, search, post via CLI.', category: 'marketing' },
    { id: 2082, slug: 'bluesky-skill', name: 'Bluesky', description: 'Read, post, interact with Bluesky.', category: 'marketing' },
    { id: 2083, slug: 'reddit-skill', name: 'Reddit', description: 'Browse, search, post, moderate.', category: 'marketing' },
    { id: 2084, slug: 'ga4-analytics', name: 'GA4 Analytics', description: 'Query Google Analytics 4 data.', category: 'marketing' },
    { id: 2085, slug: 'gong-crm', name: 'Gong', description: 'Search calls, transcripts, intelligence.', category: 'marketing' },
    { id: 2086, slug: 'google-ads', name: 'Google Ads', description: 'Query, audit, optimize campaigns.', category: 'marketing' },
    { id: 2087, slug: 'gsc-seo', name: 'Google Search Console', description: 'SEO data - queries, CTR opportunities.', category: 'marketing' },
    { id: 2088, slug: 'hubspot-crm', name: 'HubSpot', description: 'CRM and CMS integration.', category: 'marketing' },
    { id: 2089, slug: 'otter-transcription', name: 'Otter.ai', description: 'Meeting transcription and sync.', category: 'productivity' },
    { id: 2090, slug: 'marketing-mode', name: 'Marketing Mode', description: '23 marketing playbooks covering CRO, SEO.', category: 'marketing' },
    
    // Productivity & Tasks
    { id: 2100, slug: 'linear-issue', name: 'Linear', description: 'Issue tracking CLI.', category: 'productivity' },
    { id: 2101, slug: 'basecamp-cli', name: 'Basecamp', description: 'Manage projects, to-dos, messages.', category: 'productivity' },
    { id: 2102, slug: 'bearblog', name: 'Bear Blog', description: 'Create and manage blog posts.', category: 'writing' },
    { id: 2103, slug: 'twenty-crm', name: 'Twenty CRM', description: 'Self-hosted CRM interaction.', category: 'marketing' },
    { id: 2104, slug: 'linkding-bookmarks', name: 'Linkding', description: 'Save URLs, search, tag bookmarks.', category: 'productivity' },
    
    // CLI Utilities
    { id: 2110, slug: 'duckdb-cli', name: 'DuckDB', description: 'SQL analysis, data processing.', category: 'data' },
    { id: 2111, slug: 'jq-json', name: 'JQ', description: 'Command-line JSON processor.', category: 'coding' },
    { id: 2112, slug: 'entr-file-watch', name: 'Entr', description: 'Run commands when files change.', category: 'coding' },
    { id: 2113, slug: 'gifgrep', name: 'GIF Grep', description: 'Search GIF providers.', category: 'media' },
    { id: 2114, slug: 'goplaces', name: 'Google Places', description: 'Query Google Places API.', category: 'productivity' },
    { id: 2115, slug: 'local-places', name: 'Local Places', description: 'Search restaurants, cafes.', category: 'productivity' },
    { id: 2116, slug: 'tmdb-movies', name: 'TMDb', description: 'Search movies/TV, cast, ratings.', category: 'entertainment' },
    { id: 2117, slug: 'xkcd-comic', name: 'XKCD', description: 'Fetch xkcd comics.', category: 'entertainment' },
    { id: 2118, slug: 'cat-fact', name: 'Cat Fact', description: 'Random cat facts.', category: 'entertainment' },
    { id: 2119, slug: 'sag-voice', name: 'SAG Voice', description: 'ElevenLabs text-to-speech.', category: 'media' },
    { id: 2120, slug: 'tmux-skill', name: 'Tmux', description: 'Remote-control tmux sessions.', category: 'agents' },
    { id: 2121, slug: 'process-watch', name: 'Process Watch', description: 'Monitor system processes.', category: 'devops' },
    { id: 2122, slug: 'tldr-man', name: 'TLDR', description: 'Simplified man pages.', category: 'productivity' },
    { id: 2123, slug: 'steam-library', name: 'Steam', description: 'Browse and discover games.', category: 'entertainment' },
    
    // iOS & macOS Development
    { id: 2130, slug: 'apple-docs', name: 'Apple Docs', description: 'Query Apple Developer Documentation.', category: 'coding' },
    { id: 2131, slug: 'ios-simulator', name: 'iOS Simulator', description: 'Automate iOS Simulator workflows.', category: 'coding' },
    { id: 2132, slug: 'swiftui-expert', name: 'SwiftUI Expert', description: 'SwiftUI views and components.', category: 'coding' },
    { id: 2133, slug: 'swift-concurrency', name: 'Swift Concurrency', description: 'Swift Concurrency review.', category: 'coding' },
    
    // Security
    { id: 2140, slug: 'skills-audit', name: 'Skills Audit', description: 'Audit skills for security issues.', category: 'security' },
    { id: 2141, slug: 'secrets-management', name: 'Secrets Management', description: 'Vault and secret rotation.', category: 'security' },
    
    // Notes & PKM
    { id: 2150, slug: 'triple-memory', name: 'Triple Memory', description: 'LanceDB + Git-Notes memory system.', category: 'productivity' },
    { id: 2151, slug: 'git-notes-memory', name: 'Git Notes Memory', description: 'Persistent memory across sessions.', category: 'productivity' },
    { id: 2152, slug: 'self-reflect', name: 'Self Reflect', description: 'Self-improvement through analysis.', category: 'productivity' },
    
    // Communication
    { id: 2160, slug: 'mcporter', name: 'MCPorter', description: 'List, configure, call MCP servers.', category: 'agents' },
    { id: 2161, slug: 'clawdhub-search', name: 'ClawdHub', description: 'Search, install, publish skills.', category: 'other' },
    { id: 2162, slug: 'skills-search', name: 'Skills Search', description: 'Search skills.sh registry.', category: 'other' },
    
    // Finance
    { id: 2170, slug: 'george-banking', name: 'George Banking', description: 'Online banking automation.', category: 'other' },
    
    // Smart Home & IoT
    { id: 2180, slug: 'smart-home', name: 'Smart Home', description: 'Control IoT devices.', category: 'other' },
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
