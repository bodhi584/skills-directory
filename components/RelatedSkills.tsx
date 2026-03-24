'use client';

import Link from 'next/link';
import SkillCard from './SkillCard';
import type { Skill } from '@/lib/types';
import { getRelatedSkills, getPopularSkills } from '@/lib/data';

interface RelatedSkillsProps {
  currentSkill: Skill;
}

export default function RelatedSkills({ currentSkill }: RelatedSkillsProps) {
  const relatedSkills = getRelatedSkills(currentSkill);
  const popularSkills = getPopularSkills(6).filter(skill => skill.id !== currentSkill.id).slice(0, 3);
  const topTags = currentSkill.tags.slice(0, 4);

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <section className="mb-10 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Keep exploring this topic
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/category/${currentSkill.category}`} className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-[#c26148] hover:bg-[#c26148]/5">
            More {currentSkill.category} skills
          </Link>
          {topTags.map((tag) => (
            <Link key={tag} href={`/tag/${tag}`} className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:border-[#c26148] hover:bg-[#c26148]/5">
              #{tag}
            </Link>
          ))}
          <Link href="/use-cases" className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:border-[#c26148] hover:bg-[#c26148]/5">
            Use cases
          </Link>
        </div>
      </section>

      {relatedSkills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Related Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedSkills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Popular Skills
          </h2>
          <Link href="/explore?sort=popular" className="text-[#c26148] text-sm font-medium hover:opacity-80">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularSkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
