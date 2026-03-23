'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface RegisterCTAProps {
    source: string;
    title: string;
    description: string;
    primaryLabel?: string;
    secondaryLabel?: string;
}

export default function RegisterCTA({
    source,
    title,
    description,
    primaryLabel = 'Register Free',
    secondaryLabel = 'Browse Reviews'
}: RegisterCTAProps) {
    const handlePrimaryClick = () => {
        trackEvent('cta_click', {
            source,
            cta_type: 'register_primary',
            cta_text: primaryLabel
        });
    };

    const handleSecondaryClick = () => {
        trackEvent('cta_click', {
            source,
            cta_type: 'register_secondary',
            cta_text: secondaryLabel
        });
    };

    const currentPath = typeof window !== 'undefined'
        ? `${window.location.pathname}${window.location.search}`
        : '';
    const signInUrl = `/auth/signin?source=${source}&redirect=${encodeURIComponent(currentPath)}`;

    return (
        <div className="rounded-3xl border border-[#c26148]/20 bg-gradient-to-br from-[#fff7f4] to-white dark:from-[#231915] dark:to-[#111111] p-8 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c26148]/10 text-[#c26148] text-xs font-semibold uppercase tracking-wide mb-4">
                    SEO traffic → registration
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href={signInUrl}
                        onClick={handlePrimaryClick}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c26148] hover:bg-[#b0553e] text-white font-medium transition-colors"
                    >
                        {primaryLabel}
                    </Link>
                    <Link
                        href="/reviews"
                        onClick={handleSecondaryClick}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                        {secondaryLabel}
                    </Link>
                </div>
            </div>
        </div>
    );
}
