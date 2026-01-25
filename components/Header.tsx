import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-semibold text-gray-900 tracking-tight">
                            Antigravity Skills
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/explore" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                            Explore
                        </Link>
                        <Link href="/categories" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                            Categories
                        </Link>
                        <Link href="/docs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                            Docs
                        </Link>
                    </nav>

                    {/* CTA */}
                    <Link
                        href="/submit"
                        className="px-4 py-2 text-sm font-medium rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                    >
                        Submit
                    </Link>
                </div>
            </div>
        </header>
    );
}
