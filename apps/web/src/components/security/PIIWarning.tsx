import { Eye, AlertTriangle } from 'lucide-react';

interface PIIField {
    type: 'cni' | 'phone' | 'bank_account' | 'email' | 'address';
    value: string;
    position: number;
}

interface PIIWarningProps {
    detectedFields: PIIField[];
    onContinue?: () => void;
    onCancel?: () => void;
}

const PII_LABELS: Record<PIIField['type'], string> = {
    cni: 'Numéro de carte d\'identité nationale',
    phone: 'Numéro de téléphone',
    bank_account: 'Numéro de compte bancaire',
    email: 'Adresse e-mail',
    address: 'Adresse postale',
};

/**
 * PIIWarning – Avertissement lorsque des données personnelles sensibles (PII)
 * sont détectées dans un document ou un message avant envoi.
 * Le service NLP du microservice ai-agent identifie ces informations.
 */
export function PIIWarning({ detectedFields, onContinue, onCancel }: PIIWarningProps) {
    return (
        <div
            role="dialog"
            aria-labelledby="pii-title"
            className="rounded-2xl border border-yellow-500/30 bg-yellow-500/8 p-5 space-y-4"
        >
            <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/15 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                    <h3 id="pii-title" className="font-bold text-yellow-400 mb-1">
                        Données personnelles détectées
                    </h3>
                    <p className="text-sm text-gray-400">
                        Notre IA de protection (module PII) a identifié{' '}
                        <strong className="text-yellow-300">{detectedFields.length}</strong> information(s)
                        sensible(s) dans votre document.
                    </p>
                </div>
            </div>

            {/* Detected fields */}
            <ul className="space-y-2">
                {detectedFields.map((field, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <AlertTriangle className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                        <span className="font-medium text-yellow-300">{PII_LABELS[field.type]}</span>
                        <code className="ml-auto text-xs bg-yellow-500/10 px-2 py-0.5 rounded text-yellow-200 border border-yellow-500/20">
                            {field.value.replace(/./g, '•').slice(0, 8)}***
                        </code>
                    </li>
                ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
                {onCancel && (
                    <button
                        onClick={onCancel}
                        className="flex-1 px-4 py-2 rounded-xl bg-gray-800 text-gray-300 text-sm font-medium hover:bg-gray-700 transition-colors border border-gray-700"
                    >
                        Annuler l'envoi
                    </button>
                )}
                {onContinue && (
                    <button
                        onClick={onContinue}
                        className="flex-1 px-4 py-2 rounded-xl bg-yellow-500/20 text-yellow-400 text-sm font-medium hover:bg-yellow-500/30 transition-colors border border-yellow-500/30"
                    >
                        Envoyer quand même
                    </button>
                )}
            </div>
        </div>
    );
}
