'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/explore', label: 'Skills', icon: '⚡' },
    { href: '/categories', label: 'Categories', icon: '📁' },
    { href: '/tags', label: 'Tags', icon: '#️⃣' },
    { href: '/feed', label: 'Feed', icon: '📰' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-[220px] bg-[#f9fafb] border-r border-gray-200 flex flex-col z-50">
            {/* Logo */}
            <div className="h-16 flex items-center px-5 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        AG
                    </div>
                    <span className="font-bold text-base tracking-tight text-gray-900">Antigravity</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 px-3">
                {navItems.map((item) => {
                    const isActive = pathname === item.href ||
                        (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-lg transition-all mb-0.5 ${isActive
                                ? 'bg-[#c26148]/10 text-[#c26148] font-medium'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                        >
                            <span className="text-base">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="p-4 border-t border-gray-100 space-y-2">
                <Link
                    href="/settings"
                    className="flex items-center gap-3 px-3 py-2 text-[14px] text-gray-500 hover:text-gray-900 w-full rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <span>⚙️</span>
                    <span>Settings</span>
                </Link>
                <Link
                    href="/auth/signin"
                    className="flex items-center justify-center w-full py-2.5 rounded-lg bg-[#c26148] text-white text-[14px] font-medium hover:bg-[#b0553e] transition-all"
                >
                    Sign In
                </Link>
            </div>
        </aside>
    );
}
