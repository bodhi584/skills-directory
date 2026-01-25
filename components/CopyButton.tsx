'use client';

interface CopyButtonProps {
    text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white text-xs transition-all"
        >
            Copy
        </button>
    );
}
