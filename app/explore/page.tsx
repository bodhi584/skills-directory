import { Metadata } from 'next';
import SearchBox from '@/components/SearchBox';
import SkillCard from '@/components/SkillCard';
import { getSkills, categories } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Explore Security-Reviewed AI Skills - Antigravity Skills',
    description: 'Browse and search security-reviewed AI skills with public previews for SEO and member-only install guides, compatibility notes, and safety reviews.',
};

interface PageProps {
    searchParams: Promise<{ q?: string; category?: string; platform?: string }>;
}

export default async function ExplorePage({ searchParams }: PageProps) {
    const params = await searchParams;
    const { skills, total } = getSkills({
        query: params.q,
        category: params.category,
        platform: params.platform,
    });

    return (
        <div className="min-h-screen py-12 bg-white dark:bg-[#0f0f0f] transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c26148]/10 text-[#c26148] text-xs font-semibold uppercase tracking-wide mb-4">
                        Security-reviewed discovery
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Explore Security-Reviewed AI Skills
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 max-w-3xl mx-auto">
                        Browse public previews for vetted AI skills across Claude Code, Cursor, Gemini CLI, and Antigravity. Register to unlock full install guides, compatibility details, and review notes.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">
                        {total} skills available
                    </p>
                    <SearchBox defaultValue={params.q} size="lg" />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">Category:</span>
                        <div className="flex flex-wrap gap-2">
                            <Link
                                href="/explore"
                                className={`px-3 py-1 rounded-full text-sm transition-colors ${!params.category
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                All
                            </Link>
                            {categories.map((cat) => (
                                <Link
                                    key={cat.slug}
                                    href={`/explore?category=${cat.slug}`}
                                    className={`px-3 py-1 rounded-full text-sm transition-colors ${params.category === cat.slug
                                        ? 'bg-purple-500 text-white'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    {cat.icon} {cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results */}
                {skills.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill) => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl text-white mb-2">No skills found</h3>
                        <p className="text-gray-400">
                            Try adjusting your search or filters
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
