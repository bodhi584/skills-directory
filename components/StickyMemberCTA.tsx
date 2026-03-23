'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { trackEvent } from '@/lib/analytics';

const hiddenPrefixes = ['/auth', '/submit', '/settings'];
const hiddenExactPaths = ['/', '/reviews'];

export default function StickyMemberCTA() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { data: session, status } = useSession();

    if (!pathname || hiddenExactPaths.includes(pathname) || hiddenPrefixes.some(prefix => pathname.startsWith(prefix))) {
        return null;
    }

    if (status === 'loading' || session?.user?.id) {
        return null;
    }

    const query = searchParams?.toString();
    const currentPath = `${pathname}${query ? `?${query}` : ''}`;
    const source = pathname.startsWith('/skill/') ? 'sticky_skill_cta' : 'sticky_site_cta';
    const signInUrl = `/auth/signin?source=${source}&redirect=${encodeURIComponent(currentPath)}`;

    const handleClick = () => {
        trackEvent('cta_click', {
            source,
            cta_type: 'sticky_member_cta',
            cta_text: 'Register Free'
        });
    };

    return (
        <div className="fixed inset-x-4 bottom-4 z-40 lg:left-[244px] lg:right-6">
            <div className="mx-auto max-w-5xl rounded-2xl border border-[#c26148]/20 bg-white/95 dark:bg-[#171717]/95 backdrop-blur shadow-xl">
                <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            Unlock full install guides and security review details
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Register free to access member-only setup steps, compatibility notes, and reviewed skill insights.
                        </p>
                    </div>
                    <Link
                        href={signInUrl}
                        onClick={handleClick}
                        className="inline-flex items-center justify-center rounded-xl bg-[#c26148] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#b0553e] transition-colors"
                    >
                        Register Free
                    </Link>
                </div>
            </div>
        </div>
    );
}
