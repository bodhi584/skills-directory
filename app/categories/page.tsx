import Link from 'next/link';
import { getCategoriesWithCount } from '@/lib/data';

export const metadata = {
    title: 'Browse Security-Reviewed AI Skills by Category - Antigravity Skills',
    description: 'Browse security-reviewed AI skills by category. Find Claude, Cursor, and Gemini skills for agents, coding, security, productivity, and more. Register to unlock full install guides.',
};

export default function CategoriesPage() {
    const categories = getCategoriesWithCount();

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
                        Security-reviewed discovery
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Browse Skills by Category</h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                        Every category features security-reviewed skills. Browse public previews, then register free to access full install guides, compatibility notes, and review reports.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(category => (
                        <Link
                            key={category.slug}
                            href={`/category/${category.slug}`}
                            className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#c26148]/30 hover:shadow-lg transition-all bg-white dark:bg-gray-900"
                        >
                            <div className="text-4xl mb-4">{category.icon}</div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#c26148] transition-colors mb-2">
                                {category.name}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{category.description}</p>
                            <span className="text-xs font-medium text-[#c26148] bg-[#c26148]/10 px-2.5 py-1 rounded-full">
                                {category.count} skills
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
