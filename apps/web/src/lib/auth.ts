export interface AuthUser {
  id: string;
  email: string;
  name: string;
  createdAt?: string;
}

export interface AuthSession {
  accessToken: string;
  user: AuthUser;
}

const AUTH_STORAGE_KEY = 'sunusuite.auth';

export function getStoredSession(): AuthSession | null {
  if (typeof window === 'undefined') return null;

  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function storeSession(session: AuthSession | null) {
  if (typeof window === 'undefined') return;

  if (!session) {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}

export function getLoginHref(next = '/'): string {
  return `/login?next=${encodeURIComponent(next)}`;
}

export function getSignupHref(next = '/'): string {
  return `/signup?next=${encodeURIComponent(next)}`;
}
