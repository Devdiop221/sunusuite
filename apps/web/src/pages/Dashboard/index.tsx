import { Link } from 'react-router-dom';
import { FileText, MessageSquare, Video, Shield, Zap, Globe } from 'lucide-react';
import clsx from 'clsx';

// ── Types ─────────────────────────────────────────────────────────────────────

interface AppCard {
    id: string;
    name: string;
    tagline: string;
    href: string;
    icon: React.ElementType;
    gradient: string;
    iconBg: string;
    isReady: boolean;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const APPS: AppCard[] = [
    {
        id: 'docs',
        name: 'SunuDocs',
        tagline: 'Créez, partagez et collaborez sur vos documents',
        href: '/docs',
        icon: FileText,
        gradient: 'from-brand-500/20 to-brand-600/5',
        iconBg: 'bg-brand-500/15 text-brand-400',
        isReady: true,
    },
    {
        id: 'chat',
        name: 'SunuChat',
        tagline: 'Messagerie instantanée chiffrée de bout en bout',
        href: '/chat',
        icon: MessageSquare,
        gradient: 'from-blue-500/20 to-blue-600/5',
        iconBg: 'bg-blue-500/15 text-blue-400',
        isReady: true,
    },
    {
        id: 'meet',
        name: 'SunuMeet',
        tagline: 'Visioconférence souveraine hébergée au Sénégal',
        href: '/meet',
        icon: Video,
        gradient: 'from-purple-500/20 to-purple-600/5',
        iconBg: 'bg-purple-500/15 text-purple-400',
        isReady: true,
    },
];

const STATS = [
    { label: 'Modules actifs', value: '5', icon: Zap },
    { label: 'Protection IA', value: '2 couches', icon: Shield },
    { label: 'Hébergement', value: '🇸🇳 Dakar', icon: Globe },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 animate-fade-in">
            <div className="pointer-events-none absolute inset-0 panel-grid opacity-20" />
            <div className="pointer-events-none absolute left-[-10rem] top-12 h-72 w-72 rounded-full bg-brand-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute right-[-6rem] top-32 h-64 w-64 rounded-full bg-gold-500/10 blur-[110px]" />

            <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500 to-gold-500">
                            <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <div>
                            <h1 className="font-bold text-white leading-tight">SunuSuite</h1>
                            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Suite bureautique souveraine</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="badge badge-safe">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Système opérationnel
                        </span>
                    </div>
                </div>
            </header>

            <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
                <div className="mb-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <span className="badge badge-safe mb-5 text-sm px-3 py-1">
                        🏆 iSAFE Hackathon 2026
                        </span>
                        <h2 className="mb-4 text-5xl font-bold leading-[0.95] text-white">
                            Votre cockpit
                            <span className="block text-brand-300">de collaboration</span>
                        </h2>
                        <p className="max-w-2xl text-lg text-gray-300">
                            Une vue claire sur les modules, la protection active et l’infrastructure
                            locale. Le tableau de bord devient un point d’entrée, pas juste une page de liens.
                        </p>
                    </div>

                    <div className="card grid gap-4 p-6">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">Statut plateforme</p>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {STATS.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <Icon className="mb-4 h-4 w-4 text-brand-300" />
                                    <p className="text-xl font-bold text-white">{value}</p>
                                    <p className="mt-1 text-xs text-gray-500">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {APPS.map((app) => {
                        const Icon = app.icon;
                        return (
                            <Link
                                key={app.id}
                                to={app.href}
                                className={clsx(
                                    'group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/20 p-7',
                                    'hover:scale-[1.02] hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10',
                                    'transition-all duration-300 cursor-pointer no-underline',
                                )}
                            >
                                {/* Gradient background */}
                                <div
                                    className={clsx('absolute inset-0 bg-gradient-to-br opacity-50', app.gradient)}
                                />

                                <div className="relative z-10">
                                    <div
                                        className={clsx(
                                            'mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10',
                                            'group-hover:scale-110 transition-transform duration-300',
                                            app.iconBg,
                                        )}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="font-bold text-xl text-white mb-2">{app.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{app.tagline}</p>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
                                        <span>Ouvrir l'application</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 pb-16">
                <div className="card border-brand-500/20 bg-gradient-to-br from-brand-500/10 via-white/[0.03] to-transparent">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start">
                        <div className="w-12 h-12 rounded-xl bg-brand-500/15 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-brand-400" />
                        </div>
                        <div>
                            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-brand-200/70">Protection active</p>
                            <h3 className="font-semibold text-white mb-2">
                                Protection IA activée
                            </h3>
                            <p className="max-w-3xl text-sm leading-6 text-gray-300">
                                <strong className="text-gray-200">PhishingDetectionService</strong> et{' '}
                                <strong className="text-gray-200">DeepfakeGuardService</strong> surveillent
                                vos communications en temps réel. Toute menace est bloquée avant transmission.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
