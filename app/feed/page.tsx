import Link from 'next/link';
import { initialSkills } from '@/lib/data';
import SkillCard from '@/components/SkillCard';

export const metadata = {
    title: 'Feed - Latest AI Skills | Antigravity Skills',
    description: 'Stay updated with the latest AI skills for Claude, Cursor, Gemini and more.',
};

export default function FeedPage() {
    // Sort by created_at descending (newest first)
    const latestSkills = [...initialSkills]
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 20);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors">
            <div className="h-14 border-b border-gray-100 dark:border-gray-800 flex items-center justify-end px-6">
                <Link href="/submit" className="text-[#c26148] text-sm font-medium hover:opacity-80">
                    + Submit Skill
                </Link>
            </div>

            <div className="max-w-5xl mx-auto px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Feed</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-10">Latest skills and updates</p>

                <div className="space-y-4">
                    {latestSkills.map((skill, index) => (
                        <div key={skill.id} className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400">
                                {index + 1}
                            </div>
                            <div className="flex-1">
                                <SkillCard skill={skill} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/explore"
                        className="inline-flex items-center gap-2 text-[#c26148] font-medium hover:underline"
                    >
                        View all skills →
                    </Link>
                </div>
            </div>
        </div>
    );
}
