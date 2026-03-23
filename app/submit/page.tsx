'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SubmitPage() {
    const [formData, setFormData] = useState({
        type: 'skill',
        name: '',
        githubUrl: '',
        description: '',
        category: 'agents',
        tags: '',
        author: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [issueUrl, setIssueUrl] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit');
            }

            setIssueUrl(data.issueUrl);
            setSubmitStatus('success');

            // Reset form after 5 seconds
            setTimeout(() => {
                setFormData({
                    type: 'skill',
                    name: '',
                    githubUrl: '',
                    description: '',
                    category: 'agents',
                    tags: '',
                    author: '',
                });
                setSubmitStatus('idle');
                setIssueUrl('');
            }, 5000);
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors py-12 pt-20 lg:pt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Submit a Skill for Security Review
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Recommend a skill for the Antigravity review queue. Every submission is checked before publication, and only approved skills are published with member-only install and safety details.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#c26148] transition-colors"
                                    required
                                >
                                    <option value="skill">AI Skill</option>
                                    <option value="mcp-server">MCP Server</option>
                                    <option value="tool">Command-line Tool</option>
                                </select>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g., Systematic Debugging"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c26148] transition-colors"
                                    required
                                />
                            </div>

                            {/* GitHub URL */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    GitHub URL <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="url"
                                    value={formData.githubUrl}
                                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                                    placeholder="https://github.com/username/repo"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c26148] transition-colors"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Describe what this skill does and how it helps users..."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c26148] transition-colors resize-none"
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#c26148] transition-colors"
                                    required
                                >
                                    <option value="agents">🤖 Agents</option>
                                    <option value="coding">💻 Coding</option>
                                    <option value="data">📊 Data</option>
                                    <option value="media">🎨 Media</option>
                                    <option value="security">🛡️ Security</option>
                                    <option value="marketing">📣 Marketing</option>
                                    <option value="productivity">⚡ Productivity</option>
                                    <option value="writing">✍️ Writing</option>
                                    <option value="devops">🚀 DevOps</option>
                                    <option value="other">📦 Other</option>
                                </select>
                            </div>

                            {/* Tags */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tags
                                </label>
                                <input
                                    type="text"
                                    value={formData.tags}
                                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                    placeholder="debugging, testing, automation (comma-separated)"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c26148] transition-colors"
                                />
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Separate multiple tags with commas
                                </p>
                            </div>

                            {/* Author */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Name / GitHub Username
                                </label>
                                <input
                                    type="text"
                                    value={formData.author}
                                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    placeholder="@username"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c26148] transition-colors"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3.5 rounded-lg bg-[#c26148] hover:bg-[#b0553e] text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Skill'}
                            </button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                    <p className="text-green-800 dark:text-green-200 text-sm mb-2">
                                        ✅ Thank you! Your submission has entered the review queue and will go through security screening before publication.
                                    </p>
                                    {issueUrl && (
                                        <a
                                            href={issueUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-green-700 dark:text-green-300 hover:underline inline-flex items-center gap-1"
                                        >
                                            View on GitHub
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                    <p className="text-red-800 dark:text-red-200 text-sm">
                                        ❌ {errorMessage || 'Failed to submit. Please try again.'}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Guidelines */}
                        <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                📋 Review Requirements
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex gap-2">
                                    <span>✓</span>
                                    <span>Must be open source on GitHub</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>✓</span>
                                    <span>Must include clear documentation and setup steps</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>✓</span>
                                    <span>Should be useful for AI assistants in real workflows</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>✓</span>
                                    <span>Publication happens only after security review and editorial approval</span>
                                </li>
                            </ul>
                        </div>

                        {/* Info */}
                        <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                💡 Need Help?
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Check out our documentation for creating and submitting skills.
                            </p>
                            <Link
                                href="https://github.com/sickn33/antigravity-awesome-skills"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm text-[#c26148] hover:underline"
                            >
                                View Documentation
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
