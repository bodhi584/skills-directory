import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Use Cases - Antigravity Skills',
  description: 'Real-world use cases and success stories showcasing AI Agent Skills in action.',
};

export default function UseCasesPage() {
  // Read the markdown content
  const content = fs.readFileSync(
    path.join(process.cwd(), 'app/use-cases/page.md'),
    'utf-8'
  );

  // Simple markdown to HTML conversion
  const lines = content.split('\n');
  const sections: string[] = [];
  let currentSection = '';
  let inCodeBlock = false;
  let codeContent: string[] = [];

  for (const {
    if ( line of lines)line.startsWith('```')) {
      if (inCodeBlock) {
        currentSection += `<pre class="ascii-art">${codeContent.join('\n')}</pre>`;
        codeContent = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
    } else if (inCodeBlock) {
      codeContent.push(line);
    } else if (line.startsWith('## ')) {
      if (currentSection) sections.push(currentSection);
      currentSection = `<section id="${line.slice(3).toLowerCase().replace(/[^a-z0-9]/g, '-')}">
        <h2>${line.slice(3)}</h2>`;
    } else if (line.startsWith('### ')) {
      currentSection += `<h3>${line.slice(4)}</h3>`;
    } else if (line.startsWith('- **')) {
      const match = line.match(/\*\*([^:]+)\*\*:?\s*(.*)/);
      if (match) {
        currentSection += `<div class="stat-item"><strong>${match[1]}</strong>: ${match[2]}</div>`;
      }
    } else if (line.startsWith('- ')) {
      currentSection += `<li>${line.slice(2)}</li>`;
    } else if (line.startsWith('🎯') || line.startsWith('🔍') || line.startsWith('🛡️') || 
               line.startsWith('📊') || line.startsWith('🚀') || line.startsWith('🎨') ||
               line.startsWith('📈') || line.startsWith('🏆')) {
      currentSection += `<div class="scenario-icon">${line}</div>`;
    } else if (line.trim() && !line.startsWith('---')) {
      currentSection += `<p>${line}</p>`;
    }
  }
  if (currentSection) sections.push(currentSection);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">🎯 Use Cases Gallery</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Real-world examples showing how AI Agent Skills transform workflows and boost productivity.
        </p>
      </header>

      <nav className="flex flex-wrap justify-center gap-4 mb-12">
        <a href="#场景一多代理协作开发" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition">🤖 Multi-Agent</a>
        <a href="#场景二智能代码审查" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition">🔍 Code Review</a>
        <a href="#场景三安全渗透测试" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">🛡️ Security</a>
        <a href="#场景四rag-知识库构建" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition">📊 RAG</a>
        <a href="#场景五devops-自动化部署" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition">🚀 DevOps</a>
        <a href="#场景六ai-ui-设计" className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition">🎨 UI Design</a>
      </nav>

      <div className="space-y-12">
        {sections.map((section, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
            dangerouslySetInnerHTML={{ __html: section }}
          />
        ))}
      </div>

      <footer className="mt-16 text-center">
        <a 
          href="/submit" 
          className="inline-block px-8 py-4 bg-[#c26148] text-white font-bold rounded-lg hover:bg-[#b0553e] transition"
        >
          📝 Submit Your Use Case
        </a>
        <p className="mt-4 text-gray-500">
          Share your success story with the community
        </p>
      </footer>

      <style jsx global>{`
        .ascii-art {
          background: #1a1a2e;
          color: #00ff88;
          padding: 1.5rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          font-family: monospace;
          font-size: 0.75rem;
          line-height: 1.2;
          margin: 1rem 0;
        }
        .stat-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }
        .scenario-icon {
          font-size: 2rem;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
}
