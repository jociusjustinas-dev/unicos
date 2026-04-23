'use client';

import * as React from 'react';
import Link from 'next/link';
import { AuthShell, authInputClass, authLabelClass, authLabelStyle } from '@/components/sections/auth/AuthShell';
import { CtaButton } from '@/components/ui/CtaButton';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export default function AtkurtiSlaptazodiPage() {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 650));
    setSubmitting(false);
    setSent(true);
  };

  return (
    <AuthShell
      eyebrow="Slaptažodžio atkūrimas"
      title={
        <>
          <span className="font-light">Pamiršote </span>
          <span className="font-medium">slaptažodį?</span>
        </>
      }
      subtitle="Įveskite el. paštą — atsiųsime nuorodą atkurti slaptažodį."
      footerPrompt={
        <>
          <Link href="/prisijungti" className="text-[#64151F] underline underline-offset-2">
            Grįžti prie prisijungimo
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="flex flex-col gap-3 text-[#EFE8DB]">
          <p className="m-0" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55 }}>
            Jei <strong>{email}</strong> priskirtas paskyrai, per kelias minutes gausite el. laišką su atkūrimo nuoroda.
          </p>
          <p className="m-0 text-[#EFE8DB]/72" style={{ ...BODY, fontSize: '13px', lineHeight: 1.55 }}>
            Negavote? Patikrinkite „spam“ aplanką arba{' '}
            <Link href="/kontaktai#kontaktai-forma" className="text-[#EFE8DB] underline underline-offset-2">
              susisiekite su komanda
            </Link>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="reset-email" className={authLabelClass} style={authLabelStyle}>
              El. paštas
            </label>
            <input
              id="reset-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className={`${authInputClass} border-[#EFE8DB]/12`}
              style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
              placeholder="vardas@pastas.lt"
            />
          </div>
          <CtaButton type="submit" variant="lightFill" disabled={isSubmitting} className="w-full justify-center">
            {isSubmitting ? 'Siunčiama…' : 'Siųsti nuorodą'}
          </CtaButton>
        </form>
      )}
    </AuthShell>
  );
}
