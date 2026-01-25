import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-gray-50/50 mt-24">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Antigravity Skills
                        </h3>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                            The largest collection of AI Skills. Enhance your AI assistant with powerful capabilities.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link href="/explore" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">All Skills</Link></li>
                            <li><Link href="/category/agents" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">AI Agents</Link></li>
                            <li><Link href="/category/coding" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Coding</Link></li>
                            <li><Link href="/category/security" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Security</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link href="/docs" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Documentation</Link></li>
                            <li><Link href="/submit" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Submit Skill</Link></li>
                            <li><Link href="https://github.com/sickn33/antigravity-awesome-skills" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">GitHub</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2026 Antigravity Skills
                    </p>
                </div>
            </div>
        </footer>
    );
}
