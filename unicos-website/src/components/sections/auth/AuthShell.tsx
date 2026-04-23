'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { PAGE_SHELL_CLASS } from '@/config/pageShell';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const HEADING: React.CSSProperties = {
  fontFamily: "'Quiche Sans', Georgia, serif",
};

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  footerPrompt?: React.ReactNode;
  children: React.ReactNode;
};

export function AuthShell({ eyebrow, title, subtitle, footerPrompt, children }: Props) {
  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />

      <section className="pt-36 pb-24 max-[767px]:pt-28 max-[767px]:pb-16">
        <div className={PAGE_SHELL_CLASS}>
          <div className="mx-auto max-w-[520px]">
            <div className="flex flex-col gap-5 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                <span className="uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  {eyebrow}
                </span>
              </div>
              <h1
                className="m-0 text-[#64151F] tracking-[-0.02em]"
                style={{ ...HEADING, fontSize: 'clamp(2rem,3.8vw,2.75rem)', lineHeight: 1.08, fontWeight: 300 }}
              >
                {title}
              </h1>
              {subtitle ? (
                <p className="m-0 mx-auto max-w-[42ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55 }}>
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div
              className="mt-8 border border-[#EFE8DB]/20 bg-[#3B443A] p-8 text-[#EFE8DB] max-[767px]:p-6"
              style={{ borderRadius: '0px' }}
            >
              {children}
            </div>

            {footerPrompt ? (
              <p className="m-0 mt-6 text-center text-[#1A1010]/70" style={{ ...BODY, fontSize: '14px' }}>
                {footerPrompt}
              </p>
            ) : null}

            <p className="m-0 mt-6 text-center text-[#1A1010]/55" style={{ ...BODY, fontSize: '12px' }}>
              Registruodamiesi sutinkate su{' '}
              <Link href="#" className="text-[#64151F] underline underline-offset-2">privatumo politika</Link>.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

export const authInputClass =
  'h-12 w-full border bg-[rgba(239,232,219,0.08)] px-4 text-[#EFE8DB] placeholder:text-[#EFE8DB]/48 outline-none transition-[border-color,color] duration-200 focus:border-[#EFE8DB]/65';

export const authLabelClass = 'uppercase text-[#EFE8DB]';
export const authLabelStyle: React.CSSProperties = { ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 };

export default AuthShell;
