'use client';

import * as React from 'react';

/** Kol nėra backendo — laikykim tik dvi roles: self-registered user ir patvirtintas partner. */
export type UserRole = 'user' | 'partner';

export type AuthUser = {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  company?: string;
  role: UserRole;
  createdAt: string;
};

export type SignUpInput = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isPartner: boolean;
  /** `false` kol hidratavom iš localStorage — nenaudok šito render'iui. */
  isHydrated: boolean;
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signUp: (input: SignUpInput & { password: string }) => Promise<AuthUser>;
  signOut: () => void;
  updateProfile: (patch: Partial<Omit<AuthUser, 'id' | 'createdAt'>>) => void;
  /** Demo tool'as — persimeta tarp user ↔ partner, kad matytųsi skirtingi `/resursai` vaizdai. */
  setRole: (role: UserRole) => void;
};

const STORAGE_KEY = 'unicos-auth-user';

const AuthContext = React.createContext<AuthContextValue | null>(null);

function makeId() {
  return `u_${Math.random().toString(36).slice(2, 10)}`;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const [isHydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AuthUser;
        if (parsed && typeof parsed.email === 'string') setUser(parsed);
      }
    } catch {
      /* noop */
    }
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!isHydrated) return;
    try {
      if (user) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  }, [user, isHydrated]);

  const signIn = React.useCallback<AuthContextValue['signIn']>(async (email) => {
    await new Promise((r) => setTimeout(r, 650));
    const nextUser: AuthUser = {
      id: makeId(),
      email,
      fullName: email.split('@')[0] || 'Naudotojas',
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    setUser(nextUser);
    return nextUser;
  }, []);

  const signUp = React.useCallback<AuthContextValue['signUp']>(async (input) => {
    await new Promise((r) => setTimeout(r, 650));
    const nextUser: AuthUser = {
      id: makeId(),
      email: input.email,
      fullName: input.fullName,
      phone: input.phone,
      company: input.company,
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    setUser(nextUser);
    return nextUser;
  }, []);

  const signOut = React.useCallback(() => setUser(null), []);

  const updateProfile = React.useCallback<AuthContextValue['updateProfile']>((patch) => {
    setUser((u) => (u ? { ...u, ...patch } : u));
  }, []);

  const setRole = React.useCallback<AuthContextValue['setRole']>((role) => {
    setUser((u) => (u ? { ...u, role } : u));
  }, []);

  const value = React.useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isPartner: user?.role === 'partner',
      isHydrated,
      signIn,
      signUp,
      signOut,
      updateProfile,
      setRole,
    }),
    [user, isHydrated, signIn, signUp, signOut, updateProfile, setRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be called inside <AuthProvider>');
  return ctx;
}
