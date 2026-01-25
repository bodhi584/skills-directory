'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBoxProps {
    defaultValue?: string;
    placeholder?: string;
    size?: 'md' | 'lg';
}

export default function SearchBox({
    defaultValue = '',
    placeholder = 'Search with keywords',
    size = 'md'
}: SearchBoxProps) {
    const [query, setQuery] = useState(defaultValue);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/explore?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className={`w-full ${size === 'lg' ? 'py-4 px-6 text-lg' : 'py-3.5 px-5'} rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c26148] transition-colors`}
                />
                <button
                    type="submit"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c26148] transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </form>
    );
}
