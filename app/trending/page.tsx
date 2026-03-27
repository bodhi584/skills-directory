'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import trendingData from '@/data/trending-latest.json';
import { initialSkills } from '@/lib/data';
import type { TrendingDataset, TrendingRepo, Skill } from '@/lib/types';

const data = trendingData as TrendingDataset;

const publishedSkillByGithub = new Map<string, Skill>(
  initialSkills
    .filter((skill) => skill.github_url)
    .map((skill) => [skill.github_url as string, skill])
);

function TrendingRepoCard({ repo }: { repo: TrendingRepo }) {
  const publishedSkill = publishedSkillByGithub.get(repo.url);

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-[#c26148] hover:shadow-sm transition-all"
    >
      <div className="flex items-start gap-3 mb-2">
        <img
          src={repo.owner_avatar}
          alt={repo.owner}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">
              {repo.name}
            </h3>
            {publishedSkill && (
              <Link
                href={`/skill/${publishedSkill.slug}`}
                className="px-2 py-0.5 text-[11px] font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded"
                onClick={(e) => e.stopPropagation()}
              >
                Published
              </Link>
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {repo.full_name}
          </p>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
          <span>⭐</span>
          <span>{repo.stars.toLocaleString()}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
        {repo.description}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        {repo.language && (
          <span className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
            {repo.language}
          </span>
        )}
        {repo.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="px-2 py-0.5 text-xs bg-[#c26148]/10 text-[#c26148] rounded"
          >
            {topic}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function TrendingPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'trending' | 'latest' | 'essential'>('all');
  const [sortBy, setSortBy] = useState<'stars' | 'updated'>('stars');
  const [languageFilter, setLanguageFilter] = useState<string>('all');

  const allRepos = useMemo(() => {
    const repos = [
      ...data.categories.trending,
      ...data.categories.latest,
      ...data.categories.essential,
    ];
    const uniqueRepos = Array.from(
      new Map(repos.map((r) => [r.id, r])).values()
    );
    return uniqueRepos;
  }, []);

  const languages = useMemo(() => {
    const langs = new Set(allRepos.map((r) => r.language).filter(Boolean));
    return Array.from(langs).sort();
  }, [allRepos]);

  const filteredRepos = useMemo(() => {
    let repos = allRepos;

    if (selectedCategory !== 'all') {
      repos = data.categories[selectedCategory] || [];
    }

    if (languageFilter !== 'all') {
      repos = repos.filter((r) => r.language === languageFilter);
    }

    repos = [...repos].sort((a, b) => {
      if (sortBy === 'stars') {
        return b.stars - a.stars;
      } else {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }
    });

    return repos;
  }, [allRepos, selectedCategory, languageFilter, sortBy]);

  const topTrending = data.categories.trending.slice(0, 5);
  const topLatest = data.categories.latest.slice(0, 5);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors">
      <div className="h-14 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-4 sm:px-6 pt-16 lg:pt-0">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          🔥 Trending Skills Discovery
        </h1>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Updated: {new Date(data.generated_at).toLocaleDateString()}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Summary */}
        <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Discovered <strong className="text-[#c26148]">{data.summary.total}</strong> trending repositories
            ({data.summary.trending} trending, {data.summary.latest} latest, {data.summary.essential} essential)
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Green <span className="font-medium text-emerald-600 dark:text-emerald-400">Published</span> labels indicate items already promoted into the site catalog.
          </p>
        </div>

        {/* Top 5 Trending */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            🔥 Top 5 Trending Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topTrending.map((repo) => (
              <TrendingRepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>

        {/* Top 5 Latest */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            🆕 Top 5 Latest Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topLatest.map((repo) => (
              <TrendingRepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>

        {/* Full List with Filters */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              All Trending Skills
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredRepos.length} results
            </span>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as 'all' | 'trending' | 'latest' | 'essential')}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200"
            >
              <option value="all">All Categories</option>
              <option value="trending">Trending</option>
              <option value="latest">Latest</option>
              <option value="essential">Essential</option>
            </select>

            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200"
            >
              <option value="all">All Languages</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'stars' | 'updated')}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200"
            >
              <option value="stars">Sort by Stars</option>
              <option value="updated">Sort by Updated</option>
            </select>
          </div>

          <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300">Project</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300">Category</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300">Language</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300">Stars</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300">Updated</th>
                </tr>
              </thead>
              <tbody>
                {filteredRepos.map((repo) => (
                  <tr
                    key={repo.id}
                    className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/60"
                  >
                    <td className="px-4 py-3">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="font-medium text-gray-900 dark:text-white">{repo.name}</div>
                          {publishedSkillByGithub.get(repo.url) && (
                            <Link
                              href={`/skill/${publishedSkillByGithub.get(repo.url)!.slug}`}
                              className="px-2 py-0.5 text-[11px] font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Published
                            </Link>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[320px]">
                          {repo.description}
                        </div>
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                        {repo.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                      {repo.language || '-'}
                    </td>
                    <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">
                      ⭐ {repo.stars.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}


