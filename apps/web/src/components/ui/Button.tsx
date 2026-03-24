import type { ReactNode, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    isLoading?: boolean;
}

const VARIANTS = {
    primary:
        'border border-brand-300/20 bg-brand-500 text-white shadow-lg shadow-brand-800/20 hover:-translate-y-0.5 hover:bg-brand-400 focus:ring-brand-400',
    secondary:
        'border border-white/10 bg-white/5 text-gray-100 hover:-translate-y-0.5 hover:bg-white/10 focus:ring-gray-500',
    danger:
        'border border-alert-500/30 bg-alert-500/15 text-alert-100 hover:-translate-y-0.5 hover:bg-alert-500/25 focus:ring-alert-500',
    ghost:
        'border border-transparent text-gray-300 hover:bg-white/5 hover:text-white focus:ring-gray-500',
};

const SIZES = {
    sm: 'min-h-10 px-3.5 py-2 text-xs rounded-xl',
    md: 'min-h-11 px-4 py-2.5 text-sm rounded-2xl',
    lg: 'min-h-14 px-6 py-3.5 text-base rounded-[1.35rem]',
};

export function Button({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    children,
    className,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled ?? isLoading}
            className={clsx(
                'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium',
                'transition-all duration-200 active:scale-[0.98]',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950',
                'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
                VARIANTS[variant],
                SIZES[size],
                className,
            )}
        >
            {isLoading && (
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="60" strokeDashoffset="20" />
                </svg>
            )}
            {children}
        </button>
    );
}
