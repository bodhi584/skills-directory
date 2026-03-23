import { Metadata } from 'next';
import Link from 'next/link';
import SkillCard from '@/components/SkillCard';
import RegisterCTA from '@/components/RegisterCTA';
import { initialSkills } from '@/lib/data';

const cursorSkills = initialSkills
    .filter(skill => ['coding', 'agents', 'devops'].includes(skill.category))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 9);

export const metadata: Metadata = {
    title: 'Cursor Skills - Security-Reviewed AI Skills for Cursor',
    description: 'Browse security-reviewed Cursor skills with public previews and member-only access to install guides, safety reviews, and compatibility details.',
    alternates: {
        canonical: 'https://www.antigravityskills.org/cursor-skills',
    },
};

export default function CursorSkillsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c26148]/10 text-[#c26148] text-xs font-semibold uppercase tracking-wide mb-4">
                        Cursor SEO landing page
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Best <span className="text-[#c26148]">Cursor Skills</span> With Security Reviews
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Discover trusted Cursor skills for coding, automation, testing, and developer workflows. Compare public previews first, then register to unlock full installation guidance and audit details.
                    </p>
                </section>

                <section className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Cursor-first discovery</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">This page targets high-intent developers searching for Cursor-compatible AI skills and agent tooling.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Security-reviewed positioning</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">The site emphasizes verification, safety checks, and compatibility notes rather than just listing repositories.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Registration conversion</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Members unlock the highest-value content: install commands, setup caveats, and deeper operational guidance.</p>
                    </div>
                </section>

                <RegisterCTA
                    source="landing_cursor"
                    title="Register to unlock verified Cursor skill setup"
                    description="Turn SEO traffic into registrations by offering public previews up front and member-only setup details where intent is strongest."
                />

                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Cursor-compatible skills</h2>
                        <Link href="/explore?sort=popular" className="text-[#c26148] text-sm font-medium hover:opacity-80">
                            View more →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {cursorSkills.map(skill => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
