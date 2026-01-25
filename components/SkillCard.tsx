import Link from 'next/link';
import { Skill } from '@/lib/types';

interface SkillCardProps {
    skill: Skill;
}

const categoryIcons: Record<string, string> = {
    agents: '🤖',
    coding: '💻',
    data: '📊',
    media: '🎨',
    security: '🛡️',
    marketing: '📣',
    productivity: '⚡',
    writing: '✍️',
    devops: '🚀',
    other: '📦',
};

export default function SkillCard({ skill }: SkillCardProps) {
    const icon = categoryIcons[skill.category] || '📦';

    return (
        <Link
            href={`/skill/${skill.slug}`}
            className="group flex flex-col p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-[#c26148] hover:shadow-md transition-all h-full"
        >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-lg shrink-0">
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-[#c26148] transition-colors">
                        {skill.name}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">
                        @{skill.author_name || 'Antigravity'}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed flex-1">
                {skill.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-gray-800 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                    {skill.tags.slice(0, 2).map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {skill.stars > 0 && (
                    <span className="text-xs text-gray-400">
                        ⭐ {skill.stars >= 1000 ? `${(skill.stars / 1000).toFixed(0)}k` : skill.stars}
                    </span>
                )}
            </div>
        </Link>
    );
}
