'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';

const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/explore', label: 'Skills', icon: '⚡' },
    { href: '/categories', label: 'Categories', icon: '📁' },
    { href: '/tags', label: 'Tags', icon: '#️⃣' },
    { href: '/feed', label: 'Feed', icon: '📰' },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { data: session, status } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg"
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? (
                    <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 bottom-0 w-[220px] bg-[#f9fafb] dark:bg-[#1a1a1a] border-r border-gray-200 dark:border-gray-800 flex flex-col z-50 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}>
                {/* Logo */}
                <div className="h-16 flex items-center px-5 border-b border-gray-100 dark:border-gray-800">
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            AG
                        </div>
                        <span className="font-bold text-base tracking-tight text-gray-900 dark:text-white">Antigravity</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4 px-3 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== '/' && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-lg transition-all mb-0.5 ${isActive
                                    ? 'bg-[#c26148]/10 text-[#c26148] font-medium'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <span className="text-base">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
                    <Link
                        href="/settings"
                        className="flex items-center gap-3 px-3 py-2 text-[14px] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <span>⚙️</span>
                        <span>Settings</span>
                    </Link>

                    {status === 'loading' ? (
                        <div className="flex items-center justify-center w-full py-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-400 text-[14px]">
                            Loading...
                        </div>
                    ) : session ? (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 px-3 py-2">
                                {session.user?.image && (
                                    <img
                                        src={session.user.image}
                                        alt=""
                                        className="w-7 h-7 rounded-full"
                                    />
                                )}
                                <span className="text-sm text-gray-700 dark:text-gray-300 truncate flex-1">
                                    {session.user?.name || session.user?.email}
                                </span>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="flex items-center justify-center w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[14px] font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/auth/signin"
                            className="flex items-center justify-center w-full py-2.5 rounded-lg bg-[#c26148] text-white text-[14px] font-medium hover:bg-[#b0553e] transition-all"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </aside>
        </>
    );
}
