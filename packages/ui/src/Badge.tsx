import type { ReactNode } from 'react';

export interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'danger';
    className?: string;
}

const VARIANT_CLASSES: Record<NonNullable<BadgeProps['variant']>, string> = {
    default: 'bg-gray-800 text-gray-300 border-gray-700',
    success: 'bg-green-500/15 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
    danger: 'bg-red-500/15 text-red-400 border-red-500/30',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${VARIANT_CLASSES[variant]} ${className}`}
        >
            {children}
        </span>
    );
}
