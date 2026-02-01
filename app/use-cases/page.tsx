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
        <h2 className="text-2xl font-bold mb-4">场景一：多代理协作开发</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">使用的 Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Agent Manager - 管理多个代理</li>
            <li>Systematic Debugging - 系统化调试</li>
            <li>Browser Automation - 自动化测试</li>
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
│  │  前端开发   │  │  API设计    │  │  文档编写   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│  📊 总进度: ████████░░░░░░░░░░░░  66%                       │
│  ⏱️ 预计剩余: 15分钟                                         │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">3-5x</div>
            <div className="text-gray-600">开发周期缩短</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">60%↓</div>
            <div className="text-gray-600">沟通成本降低</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">40%↓</div>
            <div className="text-gray-600">Bug 数量减少</div>
          </div>
        </div>
      </section>

      {/* Scenario 2: Code Review */}
      <section id="code-review" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold mb-4">场景二：智能代码审查</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">使用的 Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>cursor-rules - 多语言编码规范</li>
            <li>Systematic Debugging - 审查清单</li>
            <li>ai-resource-manager - 版本化规则</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  📋 Code Review Report                                       │
├─────────────────────────────────────────────────────────────┤
│  ✅ 通过: 23项                                                │
│  ⚠️ 建议: 5项                                                 │
│  ❌ 修复: 2项                                                 │
│  ⭐ 代码健康度: 85/100                                        │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">83%↓</div>
            <div className="text-gray-600">审查时间</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">3x</div>
            <div className="text-gray-600">发现问题提升</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">代码规范达标</div>
          </div>
        </div>
      </section>

      {/* Scenario 3: Security */}
      <section id="security" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🛡️</div>
        <h2 className="text-2xl font-bold mb-4">场景三：安全渗透测试</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">使用的 Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Ethical Hacking Methodology - 渗透测试方法论</li>
            <li>Browser Automation - 自动化扫描</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  🛡️ Security Scan Results                                    │
├─────────────────────────────────────────────────────────────┤
│  🔴 高危: 0    🟠 中危: 2    🟡 低危: 5    🟢 安全: 18       │
│  ⏱️ 耗时: 12分钟                                             │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">10x</div>
            <div className="text-gray-600">扫描效率提升</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">80%↑</div>
            <div className="text-gray-600">覆盖率提升</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">90%↓</div>
            <div className="text-gray-600">误报率降低</div>
          </div>
        </div>
      </section>

      {/* Scenario 4: RAG */}
      <section id="rag" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">📊</div>
        <h2 className="text-2xl font-bold mb-4">场景四：RAG 知识库构建</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">使用的 Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>haiku.rag - 智能 RAG 框架</li>
            <li>flapi - 高性能 API</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  📚 RAG Knowledge Base                                       │
├─────────────────────────────────────────────────────────────┤
│  📁 文档数量: 1,247  |  📄 总字数: 5.2M  |  🔍 响应: 0.8秒   │
│  📈 相关度: 92%                                                │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">10x</div>
            <div className="text-gray-600">问答效率提升</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">360x+</div>
            <div className="text-gray-600">知识查找速度</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">92%</div>
            <div className="text-gray-600">回答准确率</div>
          </div>
        </div>
      </section>

      {/* Scenario 5: DevOps */}
      <section id="devops" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🚀</div>
        <h2 className="text-2xl font-bold mb-4">场景五：DevOps 自动化部署</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">使用的 Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>ksail - K8s 集群管理</li>
            <li>deploystack - MCP 部署</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  🚀 Deployment Pipeline                                      │
├─────────────────────────────────────────────────────────────┤
│  步骤: ✅ 构建 → ✅ 测试 → ✅ 镜像 → 🔄 部署 (75%)           │
│  📦 v2.4.1 → v2.4.2  |  ⏱️ 预计完成: 3分钟                  │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">73%↓</div>
            <div className="text-gray-600">部署时间</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">90%↓</div>
            <div className="text-gray-600">人工干预</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">分钟级</div>
            <div className="text-gray-600">回滚速度</div>
          </div>
        </div>
      </section>

      {/* Scenario 6: UI Design */}
      <section id="ui-design" className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="text-4xl mb-4">🎨</div>
        <h2 className="text-2xl font-bold mb-4">场景六：AI UI 设计</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">使用的 Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>lovable-boilerplate - AI UI 脚手架</li>
            <li>UI/UX Pro Max - 专业设计</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`
┌─────────────────────────────────────────────────────────────┐
│  🎨 AI Generated UI Preview                                  │
├─────────────────────────────────────────────────────────────┤
│  📝 需求: 仪表盘 (用户统计、销售图表、活动列表)              │
│  ⏱️ 生成: 2分15秒  |  ✅ 质量: A+  |  🎯 符合度: 95%        │
└─────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">120x</div>
            <div className="text-gray-600">设计效率提升</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">100%</div>
            <div className="text-gray-600">代码复用</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">50x</div>
            <div className="text-gray-600">迭代速度</div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">📈 综合效果对比</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">指标</th>
                <th className="p-3 text-left">使用前</th>
                <th className="p-3 text-left">使用后</th>
                <th className="p-3 text-left">提升</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">开发周期</td>
                <td className="p-3">3-5天</td>
                <td className="p-3">1天</td>
                <td className="p-3 text-green-600 font-bold">3-5x</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">代码审查</td>
                <td className="p-3">30分钟</td>
                <td className="p-3">5分钟</td>
                <td className="p-3 text-green-600 font-bold">83%↓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">部署时间</td>
                <td className="p-3">30分钟</td>
                <td className="p-3">8分钟</td>
                <td className="p-3 text-green-600 font-bold">73%↓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">知识查找</td>
                <td className="p-3">小时级</td>
                <td className="p-3">秒级</td>
                <td className="p-3 text-green-600 font-bold">360x+</td>
              </tr>
              <tr>
                <td className="p-3">UI 设计</td>
                <td className="p-3">4小时</td>
                <td className="p-3">2分钟</td>
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
