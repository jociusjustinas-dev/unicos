'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthShell, authInputClass, authLabelClass, authLabelStyle } from '@/components/sections/auth/AuthShell';
import { CtaButton } from '@/components/ui/CtaButton';
import { useAuth } from '@/lib/auth';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export default function PrisijungtiPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signIn, isAuthenticated } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setSubmitting] = React.useState(false);

  const redirectTo = searchParams.get('next') || '/profilis';

  React.useEffect(() => {
    if (isAuthenticated) router.replace(redirectTo);
  }, [isAuthenticated, redirectTo, router]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Įveskite galiojantį el. pašto adresą.');
      return;
    }
    if (password.length < 4) {
      setError('Slaptažodis per trumpas.');
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await signIn(email, password);
      router.replace(redirectTo);
    } catch {
      setError('Prisijungti nepavyko. Bandykite dar kartą.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthShell
      eyebrow="Prisijungimas"
      title={
        <>
          <span className="font-light">Sveiki sugrįžę į </span>
          <span className="font-medium">UNICOS</span>
        </>
      }
      subtitle="Prisijunkite, kad matytumėte savo mokymus, paraiškas ir partneriams skirtus išteklius."
      footerPrompt={
        <>
          Dar neturite paskyros?{' '}
          <Link href="/sukurti-paskyra" className="text-[#64151F] underline underline-offset-2">
            Sukurkite dabar
          </Link>
          .
        </>
      }
    >
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
        {error ? (
          <div
            role="alert"
            className="border border-[#F3C8CE]/40 bg-[rgba(243,200,206,0.12)] px-4 py-3 text-[#F3C8CE]"
            style={{ ...BODY, borderRadius: '0px', fontSize: '13px', lineHeight: 1.45 }}
          >
            {error}
          </div>
        ) : null}

        <div className="flex flex-col gap-2">
          <label htmlFor="login-email" className={authLabelClass} style={authLabelStyle}>
            El. paštas
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className={`${authInputClass} border-[#EFE8DB]/12`}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
            placeholder="vardas@imone.lt"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="login-password" className={authLabelClass} style={authLabelStyle}>
            Slaptažodis
          </label>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isSubmitting}
            className={`${authInputClass} border-[#EFE8DB]/12`}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
            placeholder="••••••••"
          />
          <Link
            href="/atkurti-slaptazodi"
            className="self-end text-[#EFE8DB]/70 underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ ...BODY, fontSize: '12px' }}
          >
            Pamiršote slaptažodį?
          </Link>
        </div>

        <CtaButton type="submit" variant="lightFill" disabled={isSubmitting} className="mt-2 w-full justify-center">
          {isSubmitting ? 'Jungiamasi…' : 'Prisijungti'}
        </CtaButton>
      </form>
    </AuthShell>
  );
}
