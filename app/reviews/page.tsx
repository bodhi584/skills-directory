import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Security Reviews - Antigravity Skills',
  description: 'Real-world security reviews and testing of AI Agent Skills before publication.',
};

// Get daily review files
function getDailyReviews() {
  const reviewsDir = path.join(process.cwd(), 'content/daily-reviews');
  const files = fs.readdirSync(reviewsDir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const content = fs.readFileSync(path.join(reviewsDir, file), 'utf-8');
    const date = file.replace('.md', '');
    
    // Extract title from frontmatter
    const titleMatch = content.match(/title:\s*["']?([^"'\n]+)["']?/);
    const title = titleMatch ? titleMatch[1] : `Daily Review ${date}`;
    
    return {
      slug: date,
      title: title,
      date: date,
      tags: ['Daily', 'Auto-generated'],
      readTime: '2 min',
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

const allReviews = [
  {
    slug: 'skill-reviews',
    title: 'OpenClaw Skills Hands-On Reviews',
    excerpt: 'Real usage notes and ongoing updates',
    date: '2026-02-02',
    tags: ['Reviews', 'OpenClaw', 'Testing'],
    readTime: '10 min',
  },
  {
    slug: 'review-framework',
    title: 'Review Framework Guide',
    excerpt: 'Review format standards for repeatable high-quality content',
    date: '2026-02-02',
    tags: ['Guide', 'Framework', 'Reviews'],
    readTime: '5 min',
  },
  {
    slug: 'review-todo',
    title: 'Review Task List',
    excerpt: 'Track progress and upcoming review plans',
    date: '2026-02-02',
    tags: ['Todo', 'Planning', 'Reviews'],
    readTime: '3 min',
  },
];

export default function ReviewsPage() {
  const dailyReviews = getDailyReviews();
  const totalTested = 8 + dailyReviews.length * 10;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">🛡️ Security Reviews</h1>
        <p className="text-gray-600 text-lg">
          Public security summaries, hands-on testing, and editorial reviews for AI skills before they are published.
          Register to unlock the full installation guide and deeper review details.
        </p>
      </header>

      {/* Daily Reviews Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">📅 Daily Reviews</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-2">🛡️ Security review pipeline</h3>
          <p className="text-gray-700 mb-4">
            Each candidate skill goes through repository inspection, editorial review, and publication checks. Public visitors see the summary, while registered members unlock the full install guide and review details.
          </p>
          <div className="text-sm text-gray-600 grid grid-cols-3 gap-4">
            <p>📊 Reviewed: {totalTested}+ Skills</p>
            <p>📦 Catalog monitored: 1200+ Skills</p>
            <p>⏰ New reviews: Daily</p>
          </div>
        </div>

        {/* Daily Review List */}
        {dailyReviews.length > 0 && (
          <div className="space-y-4">
            {dailyReviews.map((review) => (
              <article
                key={review.slug}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <span>{review.date}</span>
                      <span>•</span>
                      <span>{review.readTime}</span>
                    </div>
                    <Link
                      href={`/daily-reviews/${review.slug}`}
                      className="text-xl font-bold hover:text-blue-600"
                    >
                      {review.title}
                    </Link>
                  </div>
                  <Link
                    href={`/daily-reviews/${review.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* All Reviews */}
      <section>
        <h2 className="text-2xl font-bold mb-6">📚 All Reviews</h2>
        <div className="space-y-8">
          {allReviews.map((review) => (
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
        <p className="text-sm mt-2">🤖 Powered by OpenClaw Auto-Review System</p>
      </footer>
    </div>
  );
}
