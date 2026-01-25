import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSkillBySlug, initialSkills } from '@/lib/data';
import CopyButton from '@/components/CopyButton';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return initialSkills.map((skill) => ({
        slug: skill.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const skill = getSkillBySlug(slug);

    if (!skill) {
        return { title: 'Skill Not Found - Antigravity Skills' };
    }

    // SEO-optimized title with trending keywords
    const seoTitle = `${skill.name} - AI Skill for Claude, Cursor & Gemini | Antigravity Skills`;

    // Rich description with keywords
    const seoDescription = `${skill.description} Learn how to use ${skill.name} skill with Claude Code, Cursor, Gemini CLI and Antigravity agents. Free download and installation guide.`;

    // Combine skill tags with trending keywords
    const seoKeywords = [
        skill.name.toLowerCase(),
        `${skill.name.toLowerCase()} skill`,
        `${skill.name.toLowerCase()} ai skill`,
        ...skill.tags,
        skill.category,
        // Trending keywords from search data
        'antigravity skills',
        'claude code skills',
        'gemini agent skills',
        'cursor skills',
        'ai skills',
        'agent skills',
        'mcp',
        'awesome skills',
    ];

    return {
        title: seoTitle,
        description: seoDescription,
        keywords: seoKeywords,
        openGraph: {
            title: `${skill.name} - AI Skill | Antigravity Skills`,
            description: seoDescription,
            url: `https://antigravityskills.org/skill/${skill.slug}`,
            type: 'article',
            siteName: 'Antigravity Skills',
        },
        twitter: {
            card: 'summary',
            title: `${skill.name} - AI Skill`,
            description: skill.description,
        },
        alternates: {
            canonical: `https://antigravityskills.org/skill/${skill.slug}`,
        },
    };
}

// 生成安装命令的帮助函数
function getInstallCommands(skill: ReturnType<typeof getSkillBySlug>) {
    if (!skill) return null;

    const isAntigravitySkill = skill.author_github?.includes('antigravity-awesome-skills');
    const skillPath = skill.slug.replace(/-/g, '-');

    if (isAntigravitySkill) {
        return {
            quick: `curl -fsSL https://antigravityskills.org/i/${skill.slug} | bash`,
            manual: [
                {
                    step: 1,
                    title: '创建 Skills 目录',
                    command: 'mkdir -p ~/.agent/skills',
                },
                {
                    step: 2,
                    title: '克隆 Skills 仓库',
                    command: 'git clone --depth 1 https://github.com/sickn33/antigravity-awesome-skills.git /tmp/ag-skills',
                },
                {
                    step: 3,
                    title: '复制此 Skill',
                    command: `cp -r /tmp/ag-skills/skills/${skillPath} ~/.agent/skills/`,
                },
                {
                    step: 4,
                    title: '清理临时文件',
                    command: 'rm -rf /tmp/ag-skills',
                },
            ],
            oneLiner: `git clone --depth 1 https://github.com/sickn33/antigravity-awesome-skills.git /tmp/ag-skills && mkdir -p ~/.agent/skills && cp -r /tmp/ag-skills/skills/${skillPath} ~/.agent/skills/ && rm -rf /tmp/ag-skills`,
        };
    }

    // 对于非 Antigravity 的外部工具
    return {
        quick: skill.install_command || '',
        manual: null,
        oneLiner: skill.install_command || '',
    };
}

// Helper function to format relative time
function getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}

export default async function SkillPage({ params }: PageProps) {
    const { slug } = await params;
    const skill = getSkillBySlug(slug);

    if (!skill) {
        notFound();
    }

    const installCommands = getInstallCommands(skill);
    const isAntigravitySkill = skill.author_github?.includes('antigravity-awesome-skills');

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-3xl mx-auto px-6">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm">
                    <ol className="flex items-center gap-2 text-gray-400">
                        <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
                        <li className="text-gray-300">/</li>
                        <li><Link href="/explore" className="hover:text-gray-900 transition-colors">Skills</Link></li>
                        <li className="text-gray-300">/</li>
                        <li className="text-gray-900">{skill.name}</li>
                    </ol>
                </nav>

                {/* Header - MCP.so style */}
                <div className="mb-8">
                    {/* Title row with Visit button */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            {/* Author Avatar */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                {skill.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{skill.name}</h1>
                                {skill.author_github && (
                                    <Link
                                        href={`https://github.com/${skill.author_github.split('/')[0]}`}
                                        className="text-gray-500 hover:text-gray-700 text-sm"
                                        target="_blank"
                                    >
                                        @{skill.author_github.split('/')[0]}
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Visit Client Button */}
                        <Link
                            href={skill.github_url || `https://github.com/search?q=${encodeURIComponent(skill.name)}`}
                            target="_blank"
                            className="flex items-center gap-1.5 text-[#c26148] hover:text-[#a85240] font-medium text-sm whitespace-nowrap"
                        >
                            Visit Skill
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>

                    {/* Meta row: time + category + tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        {/* Time ago */}
                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {getTimeAgo(skill.created_at)}
                        </span>

                        {/* Category pill */}
                        <Link
                            href={`/category/${skill.category}`}
                            className="px-3 py-1 rounded-full border border-[#c26148] text-[#c26148] text-xs font-medium hover:bg-[#c26148]/5"
                        >
                            {skill.category}
                        </Link>

                        {/* Tags */}
                        {skill.tags.slice(0, 5).map((tag) => (
                            <Link
                                key={tag}
                                href={`/explore?tag=${encodeURIComponent(tag)}`}
                                className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs hover:bg-gray-200"
                            >
                                # {tag}
                            </Link>
                        ))}
                    </div>

                    {/* Social Share Buttons */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-gray-400 text-xs mr-1">Share:</span>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://antigravityskills.org/skill/${skill.slug}`)}&text=${encodeURIComponent(`Check out ${skill.name} - an awesome AI skill!`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                            title="Share on X"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a
                            href={`https://www.reddit.com/submit?url=${encodeURIComponent(`https://antigravityskills.org/skill/${skill.slug}`)}&title=${encodeURIComponent(skill.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                            title="Share on Reddit"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://antigravityskills.org/skill/${skill.slug}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                            title="Share on Facebook"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a
                            href={`mailto:?subject=${encodeURIComponent(`Check out ${skill.name}`)}&body=${encodeURIComponent(`I found this awesome AI skill: https://antigravityskills.org/skill/${skill.slug}`)}`}
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                            title="Share via Email"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                </div>

                {/* Structured Content - MCP.so style */}
                <div className="space-y-12 mb-16">
                    {/* What is Section */}
                    <section id="what-is">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-[#c26148] rounded-full"></span>
                            What is {skill.name}?
                        </h2>
                        <div className="prose prose-gray max-w-none text-gray-600">
                            {skill.whatIs || skill.description}
                        </div>
                    </section>

                    {/* How to Use Section */}
                    {skill.howToUse && (
                        <section id="how-to-use">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-[#c26148] rounded-full"></span>
                                How to use {skill.name}?
                            </h2>
                            <div className="prose prose-gray max-w-none text-gray-600">
                                {skill.howToUse}
                            </div>
                        </section>
                    )}

                    {/* Key Features Section */}
                    {skill.features && skill.features.length > 0 && (
                        <section id="features">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-[#c26148] rounded-full"></span>
                                Key features of {skill.name}
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {skill.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <span className="text-green-500 mt-1">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Use Cases Section */}
                    {skill.useCases && skill.useCases.length > 0 && (
                        <section id="use-cases">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-[#c26148] rounded-full"></span>
                                Use cases of {skill.name}
                            </h2>
                            <ol className="space-y-4">
                                {skill.useCases.map((useCase, i) => (
                                    <li key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                                            {i + 1}
                                        </span>
                                        <span className="text-gray-700">{useCase}</span>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    )}
                </div>

                {/* Installation - Enhanced */}
                <div className="mb-8 p-6 rounded-2xl bg-white border border-gray-100">
                    <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">安装方式</h2>

                    {isAntigravitySkill ? (
                        <div className="space-y-6">
                            {/* Quick Install */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-600 border border-green-100">推荐</span>
                                    <span className="text-sm font-medium text-gray-700">一键安装</span>
                                </div>
                                <div className="relative">
                                    <pre className="p-4 rounded-xl bg-gray-900 text-green-400 font-mono text-sm overflow-x-auto">
                                        {installCommands?.oneLiner}
                                    </pre>
                                    <CopyButton text={installCommands?.oneLiner || ''} />
                                </div>
                            </div>

                            {/* Manual Steps */}
                            {installCommands?.manual && (
                                <div>
                                    <details className="group">
                                        <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                                            <span className="group-open:rotate-90 transition-transform">▶</span>
                                            分步安装
                                        </summary>
                                        <div className="mt-4 space-y-3 pl-4 border-l-2 border-gray-100">
                                            {installCommands.manual.map((step) => (
                                                <div key={step.step}>
                                                    <div className="text-xs text-gray-400 mb-1">
                                                        Step {step.step}: {step.title}
                                                    </div>
                                                    <div className="relative">
                                                        <pre className="p-3 rounded-lg bg-gray-50 text-gray-700 font-mono text-xs overflow-x-auto border border-gray-100">
                                                            {step.command}
                                                        </pre>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </details>
                                </div>
                            )}
                        </div>
                    ) : (
                        // 外部工具的简单安装命令
                        <div className="relative">
                            <pre className="p-4 rounded-xl bg-gray-900 text-green-400 font-mono text-sm overflow-x-auto">
                                {skill.install_command}
                            </pre>
                            <CopyButton text={skill.install_command || ''} />
                        </div>
                    )}
                </div>

                {/* Dependencies */}
                {skill.dependencies && Object.keys(skill.dependencies).length > 0 && (
                    <div className="mb-8 p-6 rounded-2xl bg-white border border-gray-100">
                        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">依赖要求</h2>
                        <div className="flex flex-wrap gap-3">
                            {Object.entries(skill.dependencies).map(([name, version]) => (
                                <span key={name} className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-sm border border-orange-100">
                                    {name} {version}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tags */}
                <div className="mb-8 p-6 rounded-2xl bg-white border border-gray-100">
                    <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">标签</h2>
                    <div className="flex flex-wrap gap-2">
                        {skill.tags.map(tag => (
                            <Link
                                key={tag}
                                href={`/explore?q=${tag}`}
                                className="px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 text-sm border border-gray-100 hover:border-gray-200 transition-colors"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Platforms */}
                <div className="mb-8 p-6 rounded-2xl bg-white border border-gray-100">
                    <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">支持平台</h2>
                    <div className="flex flex-wrap gap-2">
                        {skill.platforms.map(platform => (
                            <span
                                key={platform}
                                className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm border border-blue-100 capitalize"
                            >
                                {platform}
                            </span>
                        ))}
                    </div>
                </div>

                {/* MCP Server Config Section */}
                {skill.platforms.includes('antigravity') && (
                    <div className="mb-10 p-6 rounded-2xl bg-gray-900 border border-gray-800">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Server Config</h2>
                            <span className="text-[10px] text-gray-500 font-mono">config.json</span>
                        </div>
                        <div className="relative">
                            <pre className="p-4 rounded-xl bg-black/50 text-green-400 font-mono text-xs overflow-x-auto border border-white/5">
                                {JSON.stringify({
                                    mcpServers: {
                                        [skill.slug]: {
                                            command: "npx",
                                            args: ["-y", skill.slug]
                                        }
                                    }
                                }, null, 2)}
                            </pre>
                            <CopyButton text={JSON.stringify({
                                mcpServers: {
                                    [skill.slug]: {
                                        command: "npx",
                                        args: ["-y", skill.slug]
                                    }
                                }
                            }, null, 2)} />
                        </div>
                    </div>
                )}

                {/* GitHub Link */}
                {skill.github_url && (
                    <Link
                        href={skill.github_url}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                        </svg>
                        View on GitHub
                    </Link>
                )}
            </div>
        </div>
    );
}
