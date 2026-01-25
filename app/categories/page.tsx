import Link from 'next/link';
import { getCategoriesWithCount } from '@/lib/data';

export const metadata = {
    title: 'Categories - Antigravity Skills',
    description: 'Browse AI skills by category: Agents, Coding, Security, Productivity, and more.',
};

export default function CategoriesPage() {
    const categories = getCategoriesWithCount();

    return (
        <div className="min-h-screen bg-white">
            <div className="h-14 border-b border-gray-100 flex items-center justify-end px-6">
                <Link href="/submit" className="text-[#c26148] text-sm font-medium hover:opacity-80">
                    + Submit Skill
                </Link>
            </div>

            <div className="max-w-5xl mx-auto px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Categories</h1>
                <p className="text-gray-500 mb-10">Browse skills by category</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(category => (
                        <Link
                            key={category.slug}
                            href={`/category/${category.slug}`}
                            className="group p-6 rounded-2xl border border-gray-100 hover:border-[#c26148]/30 hover:shadow-lg transition-all bg-white"
                        >
                            <div className="text-4xl mb-4">{category.icon}</div>
                            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#c26148] transition-colors mb-2">
                                {category.name}
                            </h2>
                            <p className="text-sm text-gray-500 mb-3">{category.description}</p>
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
