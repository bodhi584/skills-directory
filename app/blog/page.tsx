import Link from 'next/link';

export const metadata = {
  title: 'Blog - Antigravity Skills',
  description: 'Articles about AI Agent Skills, tutorials, and guides.',
};

const blogPosts = [
  {
    slug: 'what-are-ai-agent-skills',
    title: 'What Are AI Agent Skills? A Complete Guide for 2025',
    excerpt: 'The rise of AI agents demands a new paradigm for capability management. Learn what skills are and why they matter.',
    date: '2026-02-01',
    tags: ['AI Agents', 'Tutorial', 'Basics'],
    readTime: '5 min',
  },
  {
    slug: '5-skills-10x-productivity',
    title: '5 AI Agent Skills That Will 10x Your Productivity',
    excerpt: 'Stop wasting time on repetitive tasks. These 5 skills will save you 10+ hours per week.',
    date: '2026-02-01',
    tags: ['Productivity', 'Skills', 'Tutorial'],
    readTime: '4 min',
  },
  {
    slug: 'create-your-first-skill',
    title: 'How to Create Your First AI Agent Skill',
    excerpt: 'Step-by-step guide to creating custom skills for your AI agents. Package your expertise into reusable modules.',
    date: '2026-02-01',
    tags: ['Tutorial', 'Development', 'Custom Skills'],
    readTime: '7 min',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">📰 Blog</h1>
        <p className="text-gray-600 text-lg">
          Articles, tutorials, and guides about AI Agent Skills.
        </p>
      </header>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-bold hover:text-blue-600 block mb-2"
            >
              {post.title}
            </Link>

            <p className="text-gray-600 mb-4">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      <footer className="mt-12 pt-8 border-t text-center text-gray-500">
        <p>More articles coming soon...</p>
      </footer>
    </div>
  );
}
