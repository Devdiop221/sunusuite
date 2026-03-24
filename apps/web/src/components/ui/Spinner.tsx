import clsx from 'clsx';

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const SIZES = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-10 h-10' };

export function Spinner({ size = 'md', className }: SpinnerProps) {
    return (
        <svg
            className={clsx('animate-spin text-brand-400', SIZES[size], className)}
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Chargement..."
        >
            <circle
                cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeDasharray="60" strokeDashoffset="20"
                className="opacity-25"
            />
            <path
                d="M12 2a10 10 0 0 1 10 10"
                stroke="currentColor" strokeWidth="3" strokeLinecap="round"
            />
        </svg>
    );
}
