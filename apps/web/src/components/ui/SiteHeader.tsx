import { ArrowLeft, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';
import { getLoginHref, getSignupHref } from '@/lib/auth';
import { Button } from './Button';
import { AppLauncher } from './AppLauncher';

interface SiteHeaderProps {
  currentApp?: 'chat' | 'docs' | 'meet' | null;
  currentLabel?: string;
  backTo?: string;
  backLabel?: string;
  loginTarget?: string;
  signupTarget?: string;
  homeMode?: boolean;
}

function AppBadge({ label }: { label: string }) {
  return (
    <div className="hidden items-center gap-3 rounded-full border border-black/10 bg-white/90 px-3 py-2 shadow-sm md:inline-flex">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b6b3a] text-xs font-bold text-white">
        S
      </div>
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Espace actif</p>
        <p className="text-sm font-semibold text-slate-950">{label}</p>
      </div>
    </div>
  );
}

export function SiteHeader({
  currentLabel,
  backTo = '/',
  backLabel = 'Retour a SunuSuite',
  loginTarget = '/docs',
  signupTarget = '/docs',
  homeMode = false,
}: SiteHeaderProps) {
  const { session, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[linear-gradient(180deg,rgba(247,248,243,0.98),rgba(247,248,243,0.92))] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 rounded-[28px] border border-black/10 bg-white/75 px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur md:px-5">
          <div className="flex min-w-0 items-center gap-3">
            {homeMode ? (
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b6b3a] text-white shadow-sm">
                  <span className="text-lg font-bold">S</span>
                </div>
                <div>
                  <p className="font-bold tracking-tight text-slate-950">SunuSuite</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Suite numerique souveraine
                  </p>
                </div>
              </Link>
            ) : (
              <>
                <Link
                  to={backTo}
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-black/5 hover:bg-black/[0.03] hover:text-slate-950"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{backLabel}</span>
                </Link>
                {currentLabel ? <AppBadge label={currentLabel} /> : null}
              </>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <AppLauncher />

            {isAuthenticated && session ? (
              <>
                <div className="hidden items-center gap-3 rounded-full border border-black/10 bg-[#f7f8f3] px-3 py-2 md:inline-flex">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dbe9e0] text-xs font-bold text-[#0b6b3a]">
                    {session.user.name.slice(0, 1).toUpperCase()}
                  </div>
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Connecte</p>
                    <p className="text-sm font-semibold text-slate-950">{session.user.name}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full px-4 text-slate-700 hover:bg-black/5 hover:text-slate-950"
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Deconnexion</span>
                </Button>
              </>
            ) : (
              <>
                <Link to={getSignupHref(signupTarget)}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full px-4 text-slate-700 hover:bg-black/5 hover:text-slate-950"
                  >
                    Inscription
                  </Button>
                </Link>
                <Link to={getLoginHref(loginTarget)}>
                  <Button
                    size="sm"
                    className="rounded-full border-[#0b6b3a] bg-[#0b6b3a] px-5 text-white shadow-[0_12px_24px_rgba(11,107,58,0.18)] hover:bg-[#09592f]"
                  >
                    Se connecter
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
