'use client';

import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import { useEffect, useState } from 'react';

function ThemeSelect() {
    const { theme, setTheme } = useTheme();

    return (
        <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c26148]"
        >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </select>
    );
}

export default function SettingsPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <div className="h-14 border-b border-gray-100 dark:border-gray-800 flex items-center justify-end px-6">
                <Link href="/submit" className="text-[#c26148] text-sm font-medium hover:opacity-80">
                    + Submit Skill
                </Link>
            </div>

            <div className="max-w-2xl mx-auto px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-10">Manage your preferences</p>

                <div className="space-y-6">
                    {/* Theme Setting */}
                    <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Appearance</h2>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700 dark:text-gray-200">Theme</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred theme</p>
                            </div>
                            {mounted ? (
                                <ThemeSelect />
                            ) : (
                                <div className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 w-24 h-10 animate-pulse" />
                            )}
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h2>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700 dark:text-gray-200">Email Updates</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates about new skills</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c26148]"></div>
                            </label>
                        </div>
                    </div>

                    {/* Account */}
                    <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">Sign in to sync your preferences and saved skills.</p>
                        <Link
                            href="/auth/signin"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#c26148] text-white font-medium hover:bg-[#b0553e] transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Sign in with Google
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
