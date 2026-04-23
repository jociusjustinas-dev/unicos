'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthShell, authInputClass, authLabelClass, authLabelStyle } from '@/components/sections/auth/AuthShell';
import { CtaButton } from '@/components/ui/CtaButton';
import { useAuth } from '@/lib/auth';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export default function SukurtiPaskyraPage() {
  const router = useRouter();
  const { signUp, isAuthenticated } = useAuth();
  const [values, setValues] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
  });
  const [errors, setErrors] = React.useState<Partial<Record<string, string>>>({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isAuthenticated) router.replace('/profilis');
  }, [isAuthenticated, router]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<string, string>> = {};
    if (!values.fullName.trim()) next.fullName = 'Nurodykite vardą ir pavardę.';
    if (!/\S+@\S+\.\S+/.test(values.email)) next.email = 'Įveskite galiojantį el. paštą.';
    if (values.password.length < 6) next.password = 'Slaptažodis turi būti bent 6 simbolių.';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      await signUp(values);
      router.replace('/profilis');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthShell
      eyebrow="Nauja paskyra"
      title={
        <>
          <span className="font-light">Susikurkite </span>
          <span className="font-medium">paskyrą</span>
        </>
      }
      subtitle="Paskyra skirta ir individualiems klientams, kurie registruojasi į mokymus, ir būsimiems partneriams."
      footerPrompt={
        <>
          Jau turite paskyrą?{' '}
          <Link href="/prisijungti" className="text-[#64151F] underline underline-offset-2">
            Prisijunkite
          </Link>
          .
        </>
      }
    >
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="su-name" className={authLabelClass} style={authLabelStyle}>
            Vardas ir pavardė
          </label>
          <input
            id="su-name"
            value={values.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
            required
            autoComplete="name"
            disabled={isSubmitting}
            className={`${authInputClass} ${errors.fullName ? 'border-[#F3C8CE]' : 'border-[#EFE8DB]/12'}`}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
            placeholder="Vardenis Pavardenis"
          />
          {errors.fullName ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px' }}>{errors.fullName}</p> : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="su-email" className={authLabelClass} style={authLabelStyle}>
            El. paštas
          </label>
          <input
            id="su-email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            required
            autoComplete="email"
            disabled={isSubmitting}
            className={`${authInputClass} ${errors.email ? 'border-[#F3C8CE]' : 'border-[#EFE8DB]/12'}`}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
            placeholder="vardas@pastas.lt"
          />
          {errors.email ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px' }}>{errors.email}</p> : null}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="su-phone" className={authLabelClass} style={authLabelStyle}>
              Telefonas (neprivaloma)
            </label>
            <input
              id="su-phone"
              type="tel"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              autoComplete="tel"
              disabled={isSubmitting}
              className={`${authInputClass} border-[#EFE8DB]/12`}
              style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
              placeholder="+370 600 00000"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="su-company" className={authLabelClass} style={authLabelStyle}>
              Įmonė (neprivaloma)
            </label>
            <input
              id="su-company"
              value={values.company}
              onChange={(e) => setValues({ ...values, company: e.target.value })}
              disabled={isSubmitting}
              className={`${authInputClass} border-[#EFE8DB]/12`}
              style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
              placeholder="UAB Grožis"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="su-password" className={authLabelClass} style={authLabelStyle}>
            Slaptažodis
          </label>
          <input
            id="su-password"
            type="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            required
            minLength={6}
            autoComplete="new-password"
            disabled={isSubmitting}
            className={`${authInputClass} ${errors.password ? 'border-[#F3C8CE]' : 'border-[#EFE8DB]/12'}`}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
            placeholder="Bent 6 simboliai"
          />
          {errors.password ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px' }}>{errors.password}</p> : null}
        </div>

        <CtaButton type="submit" variant="lightFill" disabled={isSubmitting} className="mt-2 w-full justify-center">
          {isSubmitting ? 'Kuriama paskyra…' : 'Sukurti paskyrą'}
        </CtaButton>

        <p className="m-0 text-center text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '12px', lineHeight: 1.5 }}>
          Norite tapti partneriu?{' '}
          <Link href="/tapkite-partneriu" className="text-[#EFE8DB] underline underline-offset-2">
            Užpildykite paraišką
          </Link>{' '}
          — patvirtinus, paskyra automatiškai atpažįstama.
        </p>
      </form>
    </AuthShell>
  );
}
