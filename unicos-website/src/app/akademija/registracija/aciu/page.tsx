'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CtaLink } from '@/components/ui/CtaLink';
import { PAGE_SHELL_CLASS } from '@/config/pageShell';
import { SfCheck, SfEnvelope, SfCalendar } from '@/components/icons/feather';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const HEADING: React.CSSProperties = {
  fontFamily: "'Quiche Sans', Georgia, serif",
};

export default function AkademijaRegistracijaAciuPage() {
  const highlights = [
    {
      Icon: SfEnvelope,
      title: 'Patvirtinimai išsiųsti',
      body: 'Kiekvienam dalyviui ką tik išsiuntėme registracijos patvirtinimą su renginio detalėmis.',
    },
    {
      Icon: SfCalendar,
      title: 'Įsikvepkite į kalendorių',
      body: 'Prie laiško pridėjome kalendoriaus kvietimą — vienu paspaudimu įsikelkite į savo planą.',
    },
    {
      Icon: SfCheck,
      title: 'Sąskaita',
      body: 'Oficialią sąskaitą el. paštu gausite per artimiausią darbo dieną.',
    },
  ] as const;

  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />

      <section className="pt-40 pb-16 max-[767px]:pt-28 max-[767px]:pb-12">
        <div className={PAGE_SHELL_CLASS}>
          <div className="mx-auto max-w-[720px] text-center">
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center border border-[#3B443A]/20 bg-[#E8EDE9] text-[#3B443A]"
              style={{ borderRadius: '999px' }}
              aria-hidden
            >
              <SfCheck size={28} strokeWidth={2.25} />
            </div>

            <h1
              className="m-0 mt-6 text-[#64151F]"
              style={{ ...HEADING, fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', lineHeight: 1.05, fontWeight: 300 }}
            >
              <span className="font-medium">Ačiū </span>
              <span className="font-light">— registracija priimta.</span>
            </h1>
            <p className="m-0 mx-auto mt-5 max-w-[56ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '17px', lineHeight: 1.6 }}>
              Jūsų apmokėjimas gautas. Laukiame Jūsų mokymuose — jei iškyla klausimų, visada galite parašyti vadybininkui.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 max-[767px]:pb-16">
        <div className={PAGE_SHELL_CLASS}>
          <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-4 min-[768px]:grid-cols-3">
            {highlights.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="flex flex-col gap-4 border border-[#1A1010]/10 bg-white/60 p-6 max-[767px]:p-5"
                style={{ borderRadius: '0px' }}
              >
                <div
                  className="grid h-12 w-12 place-items-center border border-[#3B443A]/20 bg-[#3B443A]/10 text-[#3B443A]"
                  style={{ borderRadius: '0px' }}
                >
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h2 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '16px', fontWeight: 500, lineHeight: 1.3 }}>
                  {title}
                </h2>
                <p className="m-0 text-[#1A1010]/72" style={{ ...BODY, fontSize: '14px', lineHeight: 1.55 }}>
                  {body}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-[960px] flex-wrap items-center justify-center gap-4">
            <CtaLink href="/akademija" variant="primary" className="min-w-[220px] justify-center">
              Daugiau mokymų
            </CtaLink>
            <CtaLink href="/" variant="outline" className="min-w-[220px] justify-center">
              Grįžti į pradinį
            </CtaLink>
            <Link href="/kontaktai#kontaktai-forma" className="text-[#1A1010]/65 underline underline-offset-2 transition-colors hover:text-[#64151F]" style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}>
              Turiu klausimą
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
