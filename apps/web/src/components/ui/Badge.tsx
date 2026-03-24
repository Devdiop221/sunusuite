import type { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'danger';
    dot?: boolean;
    className?: string;
}

const VARIANTS = {
    default: 'bg-white/5 text-gray-200 border-white/10',
    success: 'bg-brand-500/10 text-brand-100 border-brand-500/25',
    warning: 'bg-gold-500/10 text-yellow-100 border-gold-500/25',
    danger: 'bg-alert-500/15 text-alert-100 border-alert-500/30',
};

const DOT_COLORS = {
    default: 'bg-gray-300',
    success: 'bg-brand-300',
    warning: 'bg-gold-300',
    danger: 'bg-alert-300',
};

export function Badge({ children, variant = 'default', dot = false, className }: BadgeProps) {
    return (
        <span
            className={clsx(
                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold tracking-[0.02em]',
                VARIANTS[variant],
                className,
            )}
        >
            {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', DOT_COLORS[variant])} />}
            {children}
        </span>
    );
}
