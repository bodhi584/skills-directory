import Link from 'next/link';
import SearchBox from '@/components/SearchBox';
import SkillCard from '@/components/SkillCard';
import { getFeaturedSkills, getLatestSkills, getCategoriesWithCount, initialSkills } from '@/lib/data';

export default function Home() {
  const featuredSkills = getFeaturedSkills();
  const latestSkills = getLatestSkills();
  const categories = getCategoriesWithCount();
  const totalSkills = initialSkills.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="h-14 border-b border-gray-100 flex items-center justify-end px-6">
        <Link
          href="/submit"
          className="text-[#c26148] text-sm font-medium hover:opacity-80"
        >
          + Submit Skill
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Hero - SEO Optimized */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Find Awesome <span className="text-[#c26148]">AI Agent Skills</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Antigravity Skills is the #1 curated directory with <span className="text-[#c26148] font-semibold">{totalSkills}+</span> awesome skills for <strong>Claude Code</strong>, <strong>Cursor</strong>, <strong>Gemini CLI</strong> and <strong>Google Antigravity</strong> agents.
          </p>

          <div className="max-w-xl mx-auto mb-8">
            <SearchBox placeholder="Search AI skills, MCP servers, agent tools..." />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-1 border-b border-gray-100">
            <Link href="/" className="px-4 py-3 border-b-2 border-[#c26148] text-[#c26148] font-medium text-sm">
              🔥 Today
            </Link>
            <Link href="/explore?sort=featured" className="px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 text-sm">
              ⭐ Featured
            </Link>
            <Link href="/explore?sort=latest" className="px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 text-sm">
              🕐 Latest
            </Link>
            <Link href="/category/agents" className="px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 text-sm">
              🤖 Agents
            </Link>
            <Link href="/category/coding" className="px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 text-sm">
              💻 Coding
            </Link>
          </div>
        </div>

        {/* Featured Skills */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Featured Skills</h2>
            <Link href="/explore" className="text-[#c26148] text-sm font-medium hover:opacity-80">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSkills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map(cat => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#c26148] hover:shadow-sm transition-all text-center"
              >
                <span className="text-2xl mb-2">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                {cat.count !== undefined && cat.count > 0 && (
                  <span className="text-xs text-gray-400 mt-0.5">{cat.count} skills</span>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Skills */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Latest Skills</h2>
            <Link href="/explore?sort=latest" className="text-[#c26148] text-sm font-medium hover:opacity-80">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestSkills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
