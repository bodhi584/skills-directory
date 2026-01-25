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

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">{skill.name}</h1>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                        {skill.author_name && (
                            <span>
                                by{' '}
                                {skill.author_github ? (
                                    <Link
                                        href={`https://github.com/${skill.author_github}`}
                                        className="text-blue-500 hover:text-blue-600"
                                        target="_blank"
                                    >
                                        {skill.author_name}
                                    </Link>
                                ) : (
                                    skill.author_name
                                )}
                            </span>
                        )}
                        {skill.stars > 0 && (
                            <span>★ {skill.stars.toLocaleString()}</span>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="mb-12">
                    <p className="text-gray-600 text-lg leading-relaxed">{skill.description}</p>
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
