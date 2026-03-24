import Link from 'next/link';
import { initialSkills } from '@/lib/data';

export const metadata = {
    title: 'Tags - Security-Reviewed AI Skills Directory',
    description: 'Browse security-reviewed AI skills by tags: agent, security, automation, testing, coding, and more. Public previews available; register to unlock install guides.',
};

export default function TagsPage() {
    // Extract all unique tags with counts
    const tagCounts: Record<string, number> = {};
    initialSkills.forEach(skill => {
        skill.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    // Sort by count descending
    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1]);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors">
            <div className="h-14 border-b border-gray-100 dark:border-gray-800 flex items-center justify-end px-6">
                <Link href="/submit" className="text-[#c26148] text-sm font-medium hover:opacity-80">
                    + Submit Skill
                </Link>
            </div>

            <div className="max-w-5xl mx-auto px-8 py-12">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c26148]/10 text-[#c26148] text-xs font-semibold uppercase tracking-wide mb-4">
                        Browse by tag
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Security-Reviewed Skill Tags</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover vetted AI skills by topic or technology. Tags help you find public previews in specific areas. Register to unlock complete setup instructions and safety notes.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                        {sortedTags.length} tags
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {sortedTags.map(([tag, count]) => (
                        <Link
                            key={tag}
                            href={`/explore?tag=${encodeURIComponent(tag)}`}
                            className="group px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#c26148] hover:bg-[#c26148]/5 transition-all flex items-center gap-2 bg-white dark:bg-gray-900"
                        >
                            <span className="text-gray-400 group-hover:text-[#c26148]">#</span>
                            <span className="text-gray-700 dark:text-gray-200 group-hover:text-[#c26148] font-medium">{tag}</span>
                            <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">{count}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
