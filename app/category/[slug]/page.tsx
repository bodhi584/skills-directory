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
        title: `${category.name} AI Skills - Antigravity Skills`,
        description: `Browse ${category.name} skills. ${category.description}`,
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    const { skills, total } = getSkills({ category: slug });

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-6xl mb-4 block">{category.icon}</span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        {category.name} Skills
                    </h1>
                    <p className="text-gray-400">
                        {category.description} • {total} skills
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
