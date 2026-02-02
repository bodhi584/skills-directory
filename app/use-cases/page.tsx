export const metadata = {
  title: 'Use Cases - Antigravity Skills',
  description: 'Real-world use cases and success stories showcasing AI Agent Skills in action.',
};

export default function UseCasesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">🎯 Use Cases Gallery</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Real-world examples showing how AI Agent Skills transform workflows and boost productivity.
        </p>
      </header>

      <nav className="flex flex-wrap justify-center gap-4 mb-12">
        <a href="#multi-agent" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition">🤖 Multi-Agent</a>
        <a href="#code-review" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition">🔍 Code Review</a>
        <a href="#security" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">🛡️ Security</a>
        <a href="#rag" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition">📊 RAG</a>
        <a href="#devops" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition">🚀 DevOps</a>
        <a href="#ui-design" className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition">🎨 UI Design</a>
      </nav>

      {/* Scenario 1: Multi-Agent */}
      <section id="multi-agent" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🤖</div>
        <h2 className="text-2xl font-bold mb-4">Scenario 1: Multi-Agent Collaborative Development</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Skills Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Agent Manager - Manage multiple agents</li>
            <li>Systematic Debugging - Systematic debugging</li>
            <li>Browser Automation - Automated testing</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  🤖 Agent Manager Dashboard                                  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Agent 1    │  │  Agent 2    │  │  Agent 3    │         │
│  │  🔄 Running │  │  ✅ Done    │  │  ⏳ Pending │         │
│  │  Frontend  │  │  API Design │  │  Docs       │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│  📊 Progress: ████████░░░░░░░░░░░░  66%                      │
│  ⏱️ ETA: 15 minutes                                         │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">3-5x</div>
            <div className="text-gray-600">Faster Development Cycles</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">60%↓</div>
            <div className="text-gray-600">Reduced Communication</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">40%↓</div>
            <div className="text-gray-600">Fewer Bugs</div>
          </div>
        </div>
      </section>

      {/* Scenario 2: Code Review */}
      <section id="code-review" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold mb-4">Scenario 2: Intelligent Code Review</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Skills Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>cursor-rules - Multi-language coding standards</li>
            <li>Systematic Debugging - Review checklist</li>
            <li>ai-resource-manager - Versioned rules</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  📋 Code Review Report                                       │
├─────────────────────────────────────────────────────────────┤
│  ✅ Passed: 23                                               │
│  ⚠️ Suggestions: 5                                           │
│  ❌ Fixes Required: 2                                        │
│  ⭐ Code Health: 85/100                                      │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">83%↓</div>
            <div className="text-gray-600">Review Time</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">3x</div>
            <div className="text-gray-600">More Issues Found</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">Code Standards Met</div>
          </div>
        </div>
      </section>

      {/* Scenario 3: Security */}
      <section id="security" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🛡️</div>
        <h2 className="text-2xl font-bold mb-4">Scenario 3: Security Penetration Testing</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Skills Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Ethical Hacking Methodology - Penetration testing framework</li>
            <li>Browser Automation - Automated scanning</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  🛡️ Security Scan Results                                    │
├─────────────────────────────────────────────────────────────┤
│  🔴 Critical: 0    🟠 Medium: 2    🟡 Low: 5    🟢 Safe: 18  │
│  ⏱️ Duration: 12 minutes                                     │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">10x</div>
            <div className="text-gray-600">Faster Scanning</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">80%↑</div>
            <div className="text-gray-600">Coverage Improved</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">90%↓</div>
            <div className="text-gray-600">False Positives</div>
          </div>
        </div>
      </section>

      {/* Scenario 4: RAG */}
      <section id="rag" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">📊</div>
        <h2 className="text-2xl font-bold mb-4">Scenario 4: RAG Knowledge Base</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Skills Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>haiku.rag - Intelligent RAG framework</li>
            <li>flapi - High-performance API</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  📚 RAG Knowledge Base                                       │
├─────────────────────────────────────────────────────────────┤
│  📁 Docs: 1,247  |  📄 Total Words: 5.2M  |  🔍 Response: 0.8s│
│  📈 Relevance: 92%                                          │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">10x</div>
            <div className="text-gray-600">Q&A Efficiency</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">360x+</div>
            <div className="text-gray-600">Knowledge Search Speed</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">92%</div>
            <div className="text-gray-600">Answer Accuracy</div>
          </div>
        </div>
      </section>

      {/* Scenario 5: DevOps */}
      <section id="devops" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🚀</div>
        <h2 className="text-2xl font-bold mb-4">Scenario 5: DevOps Automated Deployment</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Skills Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>ksail - K8s cluster management</li>
            <li>deploystack - MCP deployment</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  🚀 Deployment Pipeline                                      │
├─────────────────────────────────────────────────────────────┤
│  Steps: ✅ Build → ✅ Test → ✅ Image → 🔄 Deploy (75%)      │
│  📦 v2.4.1 → v2.4.2  |  ⏱️ ETA: 3 minutes                  │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">73%↓</div>
            <div className="text-gray-600">Deployment Time</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">90%↓</div>
            <div className="text-gray-600">Manual Intervention</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">Minutes</div>
            <div className="text-gray-600">Rollback Speed</div>
          </div>
        </div>
      </section>

      {/* Scenario 6: UI Design */}
      <section id="ui-design" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🎨</div>
        <h2 className="text-2xl font-bold mb-4">Scenario 6: AI UI Design</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Skills Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>lovable-boilerplate - AI UI scaffold</li>
            <li>UI/UX Pro Max - Professional design</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  🎨 AI Generated UI Preview                                  │
├─────────────────────────────────────────────────────────────┤
│  📝 Requirement: Dashboard (User stats, Sales charts, etc.) │
│  ⏱️ Generated: 2m 15s  |  ✅ Quality: A+  |  🎯 Match: 95%  │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">120x</div>
            <div className="text-gray-600">Design Efficiency</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">100%</div>
            <div className="text-gray-600">Code Reuse</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">50x</div>
            <div className="text-gray-600">Iteration Speed</div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">📈 Performance Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Metric</th>
                <th className="p-3 text-left">Before</th>
                <th className="p-3 text-left">After</th>
                <th className="p-3 text-left">Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Development Cycle</td>
                <td className="p-3">3-5 days</td>
                <td className="p-3">1 day</td>
                <td className="p-3 text-green-600 font-bold">3-5x</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Code Review</td>
                <td className="p-3">30 minutes</td>
                <td className="p-3">5 minutes</td>
                <td className="p-3 text-green-600 font-bold">83%↓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Deployment Time</td>
                <td className="p-3">30 minutes</td>
                <td className="p-3">8 minutes</td>
                <td className="p-3 text-green-600 font-bold">73%↓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Knowledge Search</td>
                <td className="p-3">Hours</td>
                <td className="p-3">Seconds</td>
                <td className="p-3 text-green-600 font-bold">360x+</td>
              </tr>
              <tr>
                <td className="p-3">UI Design</td>
                <td className="p-3">4 hours</td>
                <td className="p-3">2 minutes</td>
                <td className="p-3 text-green-600 font-bold">120x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
    </div>
  );
}
