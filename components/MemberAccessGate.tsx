'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface MemberAccessGateProps {
    title?: string;
    description?: string;
    source?: string;
}

export default function MemberAccessGate({
    title = "Member-Only Content",
    description = "Sign in to unlock full installation guides, security reports, and compatibility details.",
    source = "member_gate"
}: MemberAccessGateProps) {
    const handleSignInClick = () => {
        trackEvent('cta_click', {
            source,
            cta_type: 'member_gate',
            cta_text: 'Sign In to Unlock'
        });
    };

    const currentPath = typeof window !== 'undefined'
        ? `${window.location.pathname}${window.location.search}`
        : '';
    const signInUrl = `/auth/signin?source=${source}&redirect=${encodeURIComponent(currentPath)}`;

    return (
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700">
            <div className="text-center max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c26148]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#c26148]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {description}
                </p>
                <Link
                    href={signInUrl}
                    onClick={handleSignInClick}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c26148] hover:bg-[#b0553e] text-white font-medium transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In to Unlock
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                    Free registration • Instant access
                </p>
            </div>
        </div>
    );
}
