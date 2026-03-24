import { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, User2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { useAuth } from '@/components/auth/AuthProvider';
import { getLoginHref, getSignupHref, type AuthSession } from '@/lib/auth';

type AuthMode = 'login' | 'signup';

interface AuthPageProps {
  mode: AuthMode;
}

function normalizeError(error: unknown): string {
  if (error instanceof Error) return error.message;
  return 'Une erreur est survenue. Veuillez reessayer.';
}

function extractMessage(payload: unknown, fallback: string): string {
  if (!payload || typeof payload !== 'object') return fallback;

  const message = (payload as { message?: unknown }).message;
  if (typeof message === 'string') return message;
  if (Array.isArray(message)) return message.join(', ');
  return fallback;
}

export default function AuthPage({ mode }: AuthPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSession } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const next = query.get('next') || '/';

  const title =
    mode === 'login' ? 'Connectez-vous a votre espace SunuSuite' : 'Créez votre compte SunuSuite';
  const description =
    mode === 'login'
      ? 'Accedez a vos outils et retrouvez votre environnement de travail depuis votre identite professionnelle.'
      : 'Demandez votre acces a la suite et preparez votre environnement de travail numerique souverain.';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      if (mode === 'signup') {
        const registerResponse = await fetch('/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!registerResponse.ok) {
          const payload = await registerResponse.json().catch(() => null);
          throw new Error(extractMessage(payload, 'Impossible de creer le compte.'));
        }

        setSuccess('Compte cree avec succes. Connexion automatique en cours...');
      }

      const loginResponse = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      if (!loginResponse.ok) {
        const payload = await loginResponse.json().catch(() => null);
        throw new Error(extractMessage(payload, 'Connexion impossible.'));
      }

      const payload = (await loginResponse.json()) as AuthSession;
      setSession(payload);
      navigate(next, { replace: true });
    } catch (submitError) {
      setError(normalizeError(submitError));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f8f3] text-slate-900">
      <header className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to={next}
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Link>

          <div className="flex items-center gap-3">
            <Link to={mode === 'login' ? getSignupHref(next) : getLoginHref(next)}>
              <Button variant="ghost" size="sm" className="text-slate-700 hover:bg-black/5 hover:text-slate-950">
                {mode === 'login' ? 'Inscription' : 'Connexion'}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <section>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0b6b3a]/20 bg-[#0b6b3a]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6b3a]">
            <Lock className="h-3.5 w-3.5" />
            {mode === 'login' ? 'Connexion securisee' : 'Inscription'}
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-slate-950">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{description}</p>

          <div className="mt-10 space-y-4">
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-sm font-semibold text-slate-950">Acces simple</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Un meme compte vous permet d’acceder a SunuDocs, SunuChat et SunuMeet.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <p className="text-sm font-semibold text-slate-950">Session conservee localement</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Une fois connecte, votre session reste active dans ce navigateur jusqu’a deconnexion.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-800">Nom complet</span>
                <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#f7f8f3] px-4 py-3">
                  <User2 className="h-4 w-4 text-slate-500" />
                  <input
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Fatou Diallo"
                  />
                </div>
              </label>
            )}

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-800">Adresse e-mail</span>
              <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#f7f8f3] px-4 py-3">
                <Mail className="h-4 w-4 text-slate-500" />
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="vous@organisation.sn"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-800">Mot de passe</span>
              <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#f7f8f3] px-4 py-3">
                <Lock className="h-4 w-4 text-slate-500" />
                <input
                  required
                  type="password"
                  minLength={8}
                  value={formData.password}
                  onChange={(event) => setFormData((current) => ({ ...current, password: event.target.value }))}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Au moins 8 caracteres"
                />
              </div>
            </label>

            {error && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            )}

            {success && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {success}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full border-[#0b6b3a] bg-[#0b6b3a] text-white hover:bg-[#09592f]"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner size="sm" className="text-white" /> : null}
              {mode === 'login' ? 'Se connecter' : 'Creer mon compte'}
            </Button>

            <p className="text-sm text-slate-600">
              {mode === 'login' ? 'Pas encore de compte ? ' : 'Vous avez deja un compte ? '}
              <Link
                to={mode === 'login' ? getSignupHref(next) : getLoginHref(next)}
                className="font-medium text-[#0b6b3a] hover:underline"
              >
                {mode === 'login' ? 'S’inscrire' : 'Se connecter'}
              </Link>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
