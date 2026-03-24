import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

const SIZES = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
};

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Panel */}
            <div
                className={clsx(
                    'relative w-full bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl',
                    'animate-slide-in',
                    SIZES[size],
                )}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                    <h2 id="modal-title" className="font-semibold text-white">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        aria-label="Fermer"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 py-5">{children}</div>
            </div>
        </div>
    );
}
