import { Metadata } from 'next';
import Link from 'next/link';
import SkillCard from '@/components/SkillCard';
import RegisterCTA from '@/components/RegisterCTA';
import { initialSkills } from '@/lib/data';

const reviewedSkills = initialSkills
    .filter(skill => skill.verified)
    .sort((a, b) => (b.securityScore || 0) - (a.securityScore || 0))
    .slice(0, 9);

export const metadata: Metadata = {
    title: 'Security-Reviewed AI Skills - Verified Skill Directory',
    description: 'Browse security-reviewed AI skills with public summaries and member-only access to full install guides, compatibility checks, and safety reports.',
    alternates: {
        canonical: 'https://www.antigravityskills.org/security-reviewed-skills',
    },
};

export default function SecurityReviewedSkillsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <section className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c26148]/10 text-[#c26148] text-xs font-semibold uppercase tracking-wide mb-4">
                        Security-reviewed SEO landing page
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        <span className="text-[#c26148]">Security-Reviewed</span> AI Skills
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Explore AI skills that are positioned around review summaries, compatibility validation, and gated operational guidance. Public visitors see the overview. Registered members unlock the full implementation details.
                    </p>
                </section>

                <section className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Public trust signals</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Reviewed skills show visible trust cues, summaries, and safer discovery language for search visitors.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Member-only depth</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Installation commands, compatibility notes, and detailed reports stay behind login to support conversion without leaking full value.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900">
                        <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Editorial positioning</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">This landing page reinforces the platform as a curated security-review destination instead of a raw listing site.</p>
                    </div>
                </section>

                <RegisterCTA
                    source="landing_security_reviewed"
                    title="Unlock full review details for verified skills"
                    description="Register free to access the install workflow, compatibility checks, and deeper safety notes for the reviewed skills with the highest buyer intent."
                />

                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Verified skills</h2>
                        <Link href="/reviews" className="text-[#c26148] text-sm font-medium hover:opacity-80">
                            Read review framework →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {reviewedSkills.map(skill => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
