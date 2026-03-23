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
  const popularSkills = getPopularSkills(3);

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      {/* Related Skills */}
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

      {/* Popular Skills */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            🔥 Popular Skills
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
