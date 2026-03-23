import { Metadata } from 'next';
import Link from 'next/link';
import SkillCard from '@/components/SkillCard';
import RegisterCTA from '@/components/RegisterCTA';
import { initialSkills } from '@/lib/data';

const claudeCodeSkills = initialSkills
    .filter(skill => ['agents', 'coding', 'productivity'].includes(skill.category))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 9);

export const metadata: Metadata = {
    title: 'Claude Code Skills - Security-Reviewed Skills Directory',
    description: 'Discover security-reviewed Claude Code skills with public previews and member-only install guides, compatibility notes, and safety reviews.',
    alternates: {
        canonical: 'https://www.antigravityskills.org/claude-code-skills',
    },
};

export default function ClaudeCodeSkillsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c26148]/10 text-[#c26148] text-xs font-semibold uppercase tracking-wide mb-4">
                        Claude Code SEO landing page
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Security-Reviewed <span className="text-[#c26148]">Claude Code Skills</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Browse high-trust skills for Claude Code workflows. Visitors can compare public previews and review summaries, then register free to unlock full install commands, compatibility notes, and detailed security reports.
                    </p>
                </section>

                <section className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Reviewed before publishing</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Each featured skill is positioned as part of a curated security-review workflow rather than an open upload directory.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Built for agent workflows</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Find skills for debugging, orchestration, code generation, review flows, and developer productivity inside Claude Code.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Member unlock</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Registered members unlock full installation steps, safety notes, and compatibility guidance before using a skill.</p>
                    </div>
                </section>

                <RegisterCTA
                    source="landing_claude_code"
                    title="Unlock the full Claude Code install guides"
                    description="Register free to access member-only setup steps, compatibility checks, and security review details for the highest-intent Claude Code skills."
                />

                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Top Claude Code skills</h2>
                        <Link href="/explore" className="text-[#c26148] text-sm font-medium hover:opacity-80">
                            Explore all skills →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {claudeCodeSkills.map(skill => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
