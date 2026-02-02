import Link from 'next/link';

export const metadata = {
  title: 'Skill Reviews - Antigravity Skills',
  description: 'Real-world reviews and testing of AI Agent Skills.',
};

const reviews = [
  {
    slug: 'skill-reviews',
    title: 'OpenClaw Skills 体验评测',
    excerpt: '真实使用体验 • 持续更新',
    date: '2026-02-02',
    tags: ['Reviews', 'OpenClaw', 'Testing'],
    readTime: '10 min',
  },
  {
    slug: 'review-framework',
    title: 'Review 框架规范',
    excerpt: 'Review格式规范 • 持续产出高质量内容',
    date: '2026-02-02',
    tags: ['Guide', 'Framework', 'Reviews'],
    readTime: '5 min',
  },
  {
    slug: 'review-todo',
    title: 'Review 待办清单',
    excerpt: '追踪进度和计划',
    date: '2026-02-02',
    tags: ['Todo', 'Planning', 'Reviews'],
    readTime: '3 min',
  },
];

export default function ReviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">📝 Skill Reviews</h1>
        <p className="text-gray-600 text-lg">
          Real-world reviews and testing of AI Agent Skills.
          真实使用体验 • 每天更新10个Skills
        </p>
      </header>

      {/* Daily Reviews Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">📅 Daily Reviews</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-2">🤖 自动评测系统已上线!</h3>
          <p className="text-gray-700 mb-4">
            每天晚上10点自动测试10个新的Skills，并生成评测报告。
          </p>
          <div className="text-sm text-gray-600">
            <p>📊 已测试: 8+ Skills</p>
            <p>📦 技能库: 1200+ Skills</p>
            <p>⏰ 下次更新: 明天早上</p>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section>
        <h2 className="text-2xl font-bold mb-6">📚 All Reviews</h2>
        <div className="space-y-8">
          {reviews.map((review) => (
            <article
              key={review.slug}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{review.date}</span>
                <span>•</span>
                <span>{review.readTime}</span>
              </div>

              <Link
                href={`/blog/${review.slug}`}
                className="text-2xl font-bold hover:text-blue-600 block mb-2"
              >
                {review.title}
              </Link>

              <p className="text-gray-600 mb-4">{review.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${review.slug}`}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-12 pt-8 border-t text-center text-gray-500">
        <p>More reviews coming soon...</p>
      </footer>
    </div>
  );
}
