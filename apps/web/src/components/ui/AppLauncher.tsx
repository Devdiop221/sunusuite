import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid3X3, MessageSquare, FileText, Video, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const APPS = [
  {
    name: 'SunuChat',
    description: 'Messagerie',
    href: '/chat',
    icon: MessageSquare,
    accent: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'SunuDocs',
    description: 'Documents',
    href: '/docs',
    icon: FileText,
    accent: 'bg-lime-100 text-lime-700',
  },
  {
    name: 'SunuMeet',
    description: 'Visioconference',
    href: '/meet',
    icon: Video,
    accent: 'bg-amber-100 text-amber-700',
  },
];

export function AppLauncher() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f8f3] px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0b6b3a] shadow-sm">
          <Grid3X3 className="h-3.5 w-3.5" />
        </span>
        <span className="hidden sm:inline">Applications</span>
        <ChevronDown className={clsx('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[21rem] rounded-[1.8rem] border border-black/10 bg-white/95 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between px-2 py-1">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Suite Sunu</p>
              <p className="text-sm font-semibold text-slate-950">Basculer entre les espaces</p>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {APPS.map((app) => {
              const isActive = location.pathname === app.href;
              return (
                <Link
                  key={app.name}
                  to={app.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    'rounded-[1.25rem] border p-3 transition-all',
                    isActive
                      ? 'border-[#0b6b3a]/20 bg-[#0b6b3a]/6 shadow-sm'
                      : 'border-black/10 bg-[#fbfcf8] hover:-translate-y-0.5 hover:bg-slate-50',
                  )}
                >
                  <div className={clsx('inline-flex rounded-xl p-2', app.accent)}>
                    <app.icon className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-950">{app.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{app.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
