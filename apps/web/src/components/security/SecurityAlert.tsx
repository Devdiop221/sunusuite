import { useState } from 'react';
import { AlertTriangle, X, ShieldAlert, ExternalLink, Copy, Check } from 'lucide-react';
import clsx from 'clsx';

// ── Types ─────────────────────────────────────────────────────────────────────

export type ThreatLevel = 'safe' | 'suspicious' | 'dangerous';

export interface SecurityAlertProps {
    /** Niveau de menace retourné par l'API SecurityAI */
    threatLevel: ThreatLevel;
    /** Le lien ou message malveillant détecté */
    content: string;
    /** Raisons détectées par l'IA */
    reasons?: string[];
    /** Score de confiance de 0 à 1 */
    confidenceScore?: number;
    /** Callback quand l'alerte est fermée */
    onDismiss?: () => void;
    /** Callback quand l'utilisateur signale le contenu */
    onReport?: (content: string) => void;
}

// ── Configuration des niveaux de menace ───────────────────────────────────────

const THREAT_CONFIG = {
    dangerous: {
        label: 'Lien malveillant détecté',
        sublabel: 'Ce contenu a été bloqué automatiquement par SunuSuite AI',
        borderClass: 'border-alert-500',
        bgClass: 'bg-alert-500/8',
        iconBg: 'bg-alert-500/15',
        iconClass: 'text-alert-500',
        titleClass: 'text-alert-500',
        badgeClass: 'bg-alert-500/20 text-alert-500 border-alert-500/30',
        pulseClass: 'bg-alert-500',
        icon: ShieldAlert,
    },
    suspicious: {
        label: 'Contenu suspect',
        sublabel: 'Vérifiez la source avant de cliquer',
        borderClass: 'border-yellow-500',
        bgClass: 'bg-yellow-500/8',
        iconBg: 'bg-yellow-500/15',
        iconClass: 'text-yellow-400',
        titleClass: 'text-yellow-400',
        badgeClass: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
        pulseClass: 'bg-yellow-500',
        icon: AlertTriangle,
    },
    safe: {
        label: 'Contenu sûr',
        sublabel: 'Aucune menace détectée',
        borderClass: 'border-brand-500',
        bgClass: 'bg-brand-500/8',
        iconBg: 'bg-brand-500/15',
        iconClass: 'text-brand-400',
        titleClass: 'text-brand-400',
        badgeClass: 'bg-brand-500/20 text-brand-400 border-brand-500/30',
        pulseClass: 'bg-brand-500',
        icon: Check,
    },
} satisfies Record<ThreatLevel, object>;

// ── Component ─────────────────────────────────────────────────────────────────

export function SecurityAlert({
    threatLevel,
    content,
    reasons = [],
    confidenceScore,
    onDismiss,
    onReport,
}: SecurityAlertProps) {
    const [copied, setCopied] = useState(false);
    const [visible, setVisible] = useState(true);

    const config = THREAT_CONFIG[threatLevel];
    const Icon = config.icon;

    const handleDismiss = () => {
        setVisible(false);
        onDismiss?.();
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!visible) return null;

    return (
        <div
            role="alert"
            aria-live="assertive"
            className={clsx(
                'relative rounded-2xl border p-5 animate-slide-in',
                'shadow-lg backdrop-blur-sm',
                config.borderClass,
                config.bgClass,
            )}
        >
            {/* ── Pulsing indicator ─────────────────────────────────────────────── */}
            {threatLevel === 'dangerous' && (
                <span className="absolute top-4 right-4">
                    <span className="relative flex h-3 w-3">
                        <span
                            className={clsx(
                                'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                                config.pulseClass,
                            )}
                        />
                        <span
                            className={clsx('relative inline-flex rounded-full h-3 w-3', config.pulseClass)}
                        />
                    </span>
                </span>
            )}

            {/* ── Dismiss button ────────────────────────────────────────────────── */}
            {onDismiss && (
                <button
                    onClick={handleDismiss}
                    aria-label="Fermer l'alerte"
                    className={clsx(
                        'absolute top-3 right-3 p-1.5 rounded-lg',
                        'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50',
                        'transition-colors duration-150',
                        threatLevel === 'dangerous' && 'top-3 right-8',
                    )}
                >
                    <X className="w-4 h-4" />
                </button>
            )}

            {/* ── Header ───────────────────────────────────────────────────────── */}
            <div className="flex items-start gap-4">
                <div className={clsx('w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0', config.iconBg)}>
                    <Icon className={clsx('w-6 h-6', config.iconClass)} />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className={clsx('font-bold text-base', config.titleClass)}>
                            🚨 {config.label}
                        </h3>
                        {confidenceScore !== undefined && (
                            <span
                                className={clsx(
                                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border',
                                    config.badgeClass,
                                )}
                            >
                                Confiance : {Math.round(confidenceScore * 100)}%
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-400">{config.sublabel}</p>
                </div>
            </div>

            {/* ── Detected content ─────────────────────────────────────────────── */}
            <div className="mt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Contenu bloqué
                </p>
                <div className="flex items-center gap-2">
                    <code
                        className={clsx(
                            'flex-1 block truncate text-sm px-3 py-2 rounded-lg',
                            'bg-gray-950/60 border border-gray-800',
                            threatLevel === 'dangerous' ? 'text-alert-400' : 'text-yellow-300',
                        )}
                    >
                        {content}
                    </code>
                    <button
                        onClick={handleCopy}
                        aria-label="Copier le lien"
                        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 transition-colors"
                    >
                        {copied ? <Check className="w-4 h-4 text-brand-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* ── Reasons ──────────────────────────────────────────────────────── */}
            {reasons.length > 0 && (
                <div className="mt-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Indicateurs détectés par l'IA
                    </p>
                    <ul className="space-y-1.5">
                        {reasons.map((reason, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-300"
                            >
                                <span className={clsx('mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0', config.pulseClass)} />
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* ── Action buttons ───────────────────────────────────────────────── */}
            {threatLevel !== 'safe' && (
                <div className="mt-5 flex items-center gap-3 flex-wrap">
                    {onReport && (
                        <button
                            onClick={() => onReport(content)}
                            className={clsx(
                                'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium',
                                'bg-alert-500/20 text-alert-400 border border-alert-500/30',
                                'hover:bg-alert-500/30 transition-colors duration-150',
                            )}
                        >
                            <AlertTriangle className="w-4 h-4" />
                            Signaler
                        </button>
                    )}
                    <a
                        href="https://www.arc.sn/cybersecurite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Signaler à l'ARC Sénégal
                    </a>
                </div>
            )}

            {/* ── Footer ───────────────────────────────────────────────────────── */}
            <p className="mt-4 text-xs text-gray-600">
                Analysé par <strong className="text-gray-500">SunuSuite AI · PhishingDetectionService</strong>
            </p>
        </div>
    );
}
