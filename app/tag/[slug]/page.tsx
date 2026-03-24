import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SkillCard from '@/components/SkillCard';
import { getSkillsByTag, getAllTags, getTagMetadata, categories } from '@/lib/data';
import Link from 'next/link';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const tags = getAllTags();
    return tags.map((t) => ({
        slug: t.tag,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const metadata = getTagMetadata(slug);

    if (!metadata) {
        return { title: 'Tag Not Found - Antigravity Skills' };
    }

    return {
        title: metadata.title,
        description: metadata.description,
    };
}

export default async function TagPage({ params }: PageProps) {
    const { slug } = await params;
    const skills = getSkillsByTag(slug);

    if (skills.length === 0) {
        notFound();
    }

    // Extract related categories from skills with this tag
    const relatedCategories = Array.from(
        new Set(skills.map(s => s.category))
    ).map(catSlug => categories.find(c => c.slug === catSlug)).filter(Boolean);

    // Extract related tags (tags that frequently co-occur with this tag)
    const tagCooccurrence: Record<string, number> = {};
    skills.forEach(skill => {
        skill.tags.forEach(tag => {
            if (tag !== slug) {
                tagCooccurrence[tag] = (tagCooccurrence[tag] || 0) + 1;
            }
        });
    });
    const relatedTags = Object.entries(tagCooccurrence)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([tag]) => tag);

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c26148]/10 text-[#c26148] text-xs font-semibold uppercase tracking-wide mb-4">
                        Security-reviewed tag
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        #{slug} Security-Reviewed Skills
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Browse {skills.length} security-reviewed AI skills tagged with "{slug}". Public previews available; register to unlock full install guides, compatibility checks, and safety reviews.
                    </p>
                </div>

                {/* Breadcrumb */}
                <nav className="mb-8 text-sm">
                    <ol className="flex items-center gap-2 text-gray-400">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li>/</li>
                        <li><Link href="/tags" className="hover:text-white">Tags</Link></li>
                        <li>/</li>
                        <li className="text-white">#{slug}</li>
                    </ol>
                </nav>

                {/* Related Categories */}
                {relatedCategories.length > 0 && (
                    <section className="mb-8 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Related Categories</h2>
                        <div className="flex flex-wrap gap-3">
                            {relatedCategories.map((cat) => cat && (
                                <Link
                                    key={cat.slug}
                                    href={`/category/${cat.slug}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#c26148] hover:bg-[#c26148]/5 transition-all"
                                >
                                    <span className="text-2xl">{cat.icon}</span>
                                    <span className="text-gray-700 dark:text-gray-200 font-medium">{cat.name}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Related Tags */}
                {relatedTags.length > 0 && (
                    <section className="mb-8 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
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
                    </section>
                )}

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}
