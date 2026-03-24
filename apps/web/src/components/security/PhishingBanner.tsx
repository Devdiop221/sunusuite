import { ShieldAlert, X } from 'lucide-react';
import { useState } from 'react';

interface PhishingBannerProps {
    url: string;
    domain: string;
    onDismiss?: () => void;
}

/**
 * PhishingBanner – Bannière d'alerte compacte affichée en haut de la page
 * lorsqu'un lien de phishing est détecté dans le contexte actuel.
 */
export function PhishingBanner({ url, domain, onDismiss }: PhishingBannerProps) {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    const handleDismiss = () => {
        setVisible(false);
        onDismiss?.();
    };

    return (
        <div
            role="alert"
            aria-live="assertive"
            className="sticky top-0 z-50 w-full bg-alert-600 text-white px-4 py-2.5 flex items-center gap-3 shadow-lg animate-slide-in"
        >
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <p className="flex-1 text-sm font-medium">
                ⚠️ <strong>Alerte phishing :</strong> le lien vers{' '}
                <code className="bg-white/15 px-1.5 py-0.5 rounded text-xs" title={url}>{domain}</code>{' '}
                a été bloqué par SunuSuite AI.
            </p>
            <button
                onClick={handleDismiss}
                aria-label="Fermer l'alerte"
                className="p-1 rounded hover:bg-white/20 transition-colors flex-shrink-0"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
