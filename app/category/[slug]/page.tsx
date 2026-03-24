import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SkillCard from '@/components/SkillCard';
import { getSkills, categories } from '@/lib/data';
import Link from 'next/link';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return categories.map((cat) => ({
        slug: cat.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        return { title: 'Category Not Found - Antigravity Skills' };
    }

    return {
        title: `${category.name} Security-Reviewed AI Skills - Antigravity Skills`,
        description: `Browse ${category.name} security-reviewed AI skills with public previews and member-only install guides. ${category.description}`,
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    const { skills, total } = getSkills({ category: slug });
    const relatedTags = Array.from(new Set(skills.flatMap((skill) => skill.tags))).slice(0, 8);
    const commonPlatforms = Array.from(new Set(skills.flatMap((skill) => skill.platforms))).slice(0, 6);

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-6xl mb-4 block">{category.icon}</span>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c26148]/10 text-[#c26148] text-xs font-semibold uppercase tracking-wide mb-4">
                        Security-reviewed category
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {category.name} Security-Reviewed Skills
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        {category.description}. Browse public previews first, then register to unlock full install instructions, compatibility checks, and review details. • {total} skills
                    </p>
                </div>

                {/* Breadcrumb */}
                <nav className="mb-8 text-sm">
                    <ol className="flex items-center gap-2 text-gray-400">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li>/</li>
                        <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
                        <li>/</li>
                        <li className="text-white">{category.name}</li>
                    </ol>
                </nav>

                {(relatedTags.length > 0 || commonPlatforms.length > 0) && (
                    <section className="mb-8 grid gap-6 lg:grid-cols-2">
                        {relatedTags.length > 0 && (
                            <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                                <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Related Tags</h2>
                                <div className="flex flex-wrap gap-2">
                                    {relatedTags.map((tag) => (
                                        <Link
                                            key={tag}
                                            href={`/tag/${tag}`}
                                            className="px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm border border-gray-100 dark:border-gray-700 hover:border-[#c26148] hover:bg-[#c26148]/5 transition-colors"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {commonPlatforms.length > 0 && (
                            <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                                <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Common Platforms</h2>
                                <div className="flex flex-wrap gap-2">
                                    {commonPlatforms.map((platform) => (
                                        <span
                                            key={platform}
                                            className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm border border-blue-100 capitalize"
                                        >
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                                    Public previews help you compare fit before unlocking member-only setup, compatibility, and review notes.
                                </p>
                            </div>
                        )}
                    </section>
                )}

                {/* Skills Grid */}
                {skills.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill) => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">📭</div>
                        <h3 className="text-xl text-white mb-2">No skills in this category yet</h3>
                        <p className="text-gray-400">
                            Be the first to <Link href="/submit" className="text-purple-400 hover:text-purple-300">submit a skill</Link>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
