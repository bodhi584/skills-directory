export default function SkillCardSkeleton() {
    return (
        <div className="group flex flex-col p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl h-full animate-pulse">
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 shrink-0" />
                <div className="flex-1 min-w-0">
                    <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                </div>
            </div>

            {/* Description */}
            <div className="space-y-2 mb-4 flex-1">
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-gray-800">
                <div className="flex gap-1.5">
                    <div className="h-5 w-12 bg-gray-200 dark:bg-gray-800 rounded" />
                    <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                </div>
                <div className="h-4 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
            </div>
        </div>
    );
}
