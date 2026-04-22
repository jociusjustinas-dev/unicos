'use client';

import * as React from 'react';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { PAGE_SHELL_CLASS } from '@/config/pageShell';
import { CtaLink } from '@/components/ui/CtaLink';
import { CtaButton } from '@/components/ui/CtaButton';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import {
  SfArrowDown,
  SfSearch,
  SfLock,
  SfArrowRight,
  SfEnvelope,
} from '@/components/icons/feather';

const BODY = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
} as const;

const HEADING = {
  fontFamily: "'Quiche Sans', Georgia, serif",
} as const;

type ResourceCard = {
  access: 'NEMOKAMA' | 'REGISTRUOTIEMS' | 'PARTNERIAMS';
  title: string;
  description: string;
  tags: [string, string];
  ctaLabel: string;
  ctaIcon: 'download' | 'lock' | 'arrow';
};

const BASE_RESOURCES: ResourceCard[] = [
  {
    access: 'NEMOKAMA',
    title: 'Cheminio pilingo taikymo protokolas: Bazinės taisyklės',
    description: 'Pagrindiniai žingsniai ir saugumo reikalavimai atliekant paviršinius pilingus.',
    tags: ['Neostrata', 'Oda'],
    ctaLabel: 'Atsisiųsti',
    ctaIcon: 'download',
  },
  {
    access: 'REGISTRUOTIEMS',
    title: 'Mezoterapijos kokteilių parinkimas pagal odos tipą',
    description: 'Išsamus gidas su veikliųjų medžiagų suderinamumo lentelėmis.',
    tags: ['Fillmed', 'Estetinė'],
    ctaLabel: 'Gauti PDF',
    ctaIcon: 'lock',
  },
  {
    access: 'PARTNERIAMS',
    title: 'Klinikos higienos standartas ir procedūrų pasiruošimas',
    description: 'Oficialus UNICOS partnerių higienos ir darbo vietos paruošimo vadovas.',
    tags: ['UNICOS', 'Bendra'],
    ctaLabel: 'Tapti partneriu',
    ctaIcon: 'arrow',
  },
  {
    access: 'NEMOKAMA',
    title: 'NCTF 135HA: Produkto sudėties analizė',
    description: 'Techninė specifikacija ir klinikiniai tyrimai.',
    tags: ['Fillmed', 'Estetinė'],
    ctaLabel: 'Atsisiųsti',
    ctaIcon: 'download',
  },
  {
    access: 'PARTNERIAMS',
    title: 'Sudėtingų aknės atvejų gydymo algoritmai',
    description: 'Dermatologų patvirtintos schemos darbui su uždegimine akne.',
    tags: ['Exuviance', 'Dermatologija'],
    ctaLabel: 'Tapti partneriu',
    ctaIcon: 'arrow',
  },
  {
    access: 'REGISTRUOTIEMS',
    title: 'Plaukų slinkimo gydymo protokolai su peptidais',
    description: 'Dr. CYJ užpildų taikymo metodika ir kursų sudarymas.',
    tags: ['Caregen', 'Plaukai'],
    ctaLabel: 'Gauti PDF',
    ctaIcon: 'lock',
  },
];

/** 3 papildomos kortelės — viso su BASE_RESOURCES = 9 kortelių (3 eilės desktop). */
const EXTRA_PLACEHOLDERS: ResourceCard[] = Array.from({ length: 3 }).map((_, i) => ({
  access: i % 3 === 0 ? 'NEMOKAMA' : i % 3 === 1 ? 'REGISTRUOTIEMS' : 'PARTNERIAMS',
  title: `Papildomas metodinis dokumentas ${i + 1}`,
  description: 'Atnaujinta gairių versija profesionaliam kasdieniam darbui.',
  tags: ['UNICOS', 'Metodika'],
  ctaLabel: i % 3 === 0 ? 'Atsisiųsti' : i % 3 === 1 ? 'Gauti PDF' : 'Tapti partneriu',
  ctaIcon: i % 3 === 0 ? 'download' : i % 3 === 1 ? 'lock' : 'arrow',
}));

function Shell({ children }: { children: React.ReactNode }) {
  return <div className={PAGE_SHELL_CLASS}>{children}</div>;
}

export default function ResursaiPage() {
  const [activeFilter, setActiveFilter] = React.useState<'tipas' | 'segmentas' | 'zenklas' | 'lygis' | null>(null);

  /** Visada renderinam visas korteles: pirma eilė — pilnai, antra — pusiau, likusios — po paywall gradient. */
  const resources = [...BASE_RESOURCES, ...EXTRA_PLACEHOLDERS];

  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />
      <section className="pt-32 pb-16 max-[767px]:pt-24 max-[767px]:pb-12 min-[768px]:pt-40 min-[768px]:pb-20">
        <Shell>
          <div className="grid grid-cols-1 gap-10 min-[992px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] min-[992px]:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                <span className="uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}>
                  Profesionalų žinių erdvė
                </span>
              </div>
              <h1
                className="m-0 mt-6 text-[#64151F]"
                style={{ ...HEADING, fontSize: 'clamp(2.3rem, 4.5vw, 4rem)', lineHeight: 1.03, fontWeight: 300 }}
              >
                <span style={{ fontWeight: 300 }}>Naudinga</span>
                <br />
                <span style={{ fontWeight: 300 }}>informacija</span>
                <br />
                <span style={{ fontWeight: 500 }}>profesionalams</span>
              </h1>
              <p className="m-0 mt-5 max-w-[64ch] text-[#1A1010]/80" style={{ ...BODY, fontSize: '17px', lineHeight: 1.6 }}>
                Protokolai, metodikos ir praktinės gairės, skirtos saugiam ir užtikrintam darbui.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="#resursai-turinys" variant="primary" className="justify-center px-6">
                  Peržiūrėti išteklius
                </CtaLink>
                <CtaLink href="/tapkite-partneriu" variant="outline" className="justify-center px-6">
                  Tapti partneriu
                </CtaLink>
              </div>
            </div>

            <div
              className="relative w-full overflow-hidden border border-solid border-[#1A1010]/15 aspect-[4/5] min-[768px]:aspect-[4/3] min-[992px]:aspect-auto min-[992px]:min-h-[360px]"
              style={{ borderRadius: '0px' }}
            >
              <ParallaxImage
                src="/Professional Woman Indoors.png"
                alt=""
                asImage
                loading="eager"
                objectPosition="center"
                distance={40}
              />
            </div>
          </div>
        </Shell>
      </section>

      <section className="sticky top-0 z-20 border-b border-solid border-[#1A1010]/10 bg-[#EFE8DB] py-3 min-[768px]:py-4">
        <Shell>
          <div className="flex flex-wrap items-center gap-2">
            {[
              ['tipas', 'Tipas'],
              ['segmentas', 'Segmentas'],
              ['zenklas', 'Prekės ženklas'],
              ['lygis', 'Lygis'],
            ].map(([id, label]) => {
              const isActive = activeFilter === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter((prev) => (prev === id ? null : (id as 'tipas' | 'segmentas' | 'zenklas' | 'lygis')))}
                  className={`border px-5 py-2.5 transition-colors duration-200 ${
                    isActive
                      ? 'border-[#64151F] bg-[#64151F] text-[#EFE8DB]'
                      : 'border-[#1A1010]/10 bg-[#ECE2D3]/75 text-[#1A1010] hover:border-[#64151F]/45'
                  }`}
                  style={{ ...BODY, fontSize: '13px', fontWeight: 500, borderRadius: '0px' }}
                >
                  {label}
                </button>
              );
            })}
            <div className="ml-auto relative min-w-[240px] flex-1 max-w-[340px]">
              <SfSearch
                size={16}
                strokeWidth={2}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1010]/45"
                aria-hidden
              />
              <input
                type="text"
                placeholder="Ieškoti dokumento..."
                aria-label="Ieškoti dokumento"
                className="h-[40px] w-full border border-solid border-[#1A1010]/10 bg-[#ECE2D3]/75 pl-10 pr-3 text-[#1A1010] placeholder:text-[#1A1010]/40 focus:border-[#64151F] focus:outline-none"
                style={{ ...BODY, fontSize: '13px', fontWeight: 500, borderRadius: '0px' }}
              />
            </div>
          </div>
        </Shell>
      </section>

      <section id="resursai-turinys" className="relative pt-16 pb-0 min-[768px]:pt-20 min-[768px]:pb-0">
        <Shell>
          <div className="relative isolate">
            <div className="relative z-[1] grid grid-cols-1 gap-4 min-[992px]:grid-cols-3 min-[768px]:grid-cols-2">
            {resources.map((card, idx) => {
              const badgeClass =
                card.access === 'NEMOKAMA'
                  ? 'border-[#3B443A]/25 bg-[#3B443A] text-[#EFE8DB]'
                  : card.access === 'PARTNERIAMS'
                    ? 'border-[#64151F]/25 bg-[#64151F] text-[#EFE8DB]'
                    : 'border-[#64151F]/25 bg-[#EFE8DB] text-[#64151F]';
              return (
                <article
                  key={`${card.title}-${idx}`}
                  className="group/card flex flex-col gap-4 border border-solid border-[#1A1010]/10 bg-[#ECE2D3]/90 p-6 text-[#1A1010] transition-[transform,border-color] duration-500 ease-in-out hover:-translate-y-[1px] hover:border-[#64151F]/25 max-[767px]:p-5"
                  style={{ borderRadius: '0px' }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`uppercase border ${badgeClass}`}
                      style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', borderRadius: '0px', padding: '6px 10px' }}
                    >
                      {card.access}
                    </span>
                    <span
                      className="uppercase text-[#1A1010]/48"
                      style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500 }}
                    >
                      PDF
                    </span>
                  </div>
                  <h3
                    className="m-0"
                    style={{ ...BODY, fontSize: '22px', lineHeight: 1.2, fontWeight: 500 }}
                  >
                    {card.title}
                  </h3>
                  <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5, fontWeight: 400 }}>
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="uppercase border border-[#3B443A]/30 bg-[#3B443A]/10 px-2 py-1 text-[#3B443A]"
                        style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', borderRadius: '0px' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 border-t border-solid border-[#1A1010]/10 pt-4">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-2 text-[#64151F] transition-opacity duration-300 hover:opacity-80"
                      style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}
                    >
                      <span className="underline underline-offset-2">{card.ctaLabel}</span>
                      {card.ctaIcon === 'download' ? <SfArrowDown size={14} strokeWidth={2.5} /> : card.ctaIcon === 'lock' ? <SfLock size={14} /> : <SfArrowRight size={14} strokeWidth={2.5} />}
                    </button>
                  </div>
                </article>
              );
            })}
            </div>

            {/**
             * Paywall: pilno pločio (edge-to-edge) haze sluoksnis ant korteliu tinklelio,
             * dengiantis kraštus ir blukinant viduryje. Centre — tvarkingas tamsus
             * panelis su H2 ir CTA.
             */}
            {/**
             * Paywall: pirma eilė korteliu matoma pilnai, antra — tik iki pusės, nuo ten
             * prasideda kremo gradientas + blur, po juo — tolesnės eilės. Centre — tamsus
             * panelis su antrašte ir CTA.
             */}
            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              role="region"
              aria-label="Pilna metodinė bazė skirta partneriams"
            >
              <div
                aria-hidden
                className="absolute top-0 bottom-0 left-1/2 w-screen -translate-x-1/2"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, rgba(239,232,219,0) 0%, rgba(239,232,219,0) 24%, rgba(239,232,219,0.35) 38%, rgba(239,232,219,0.78) 52%, rgba(239,232,219,0.96) 70%, rgba(239,232,219,1) 100%)',
                }}
              />
              <div
                aria-hidden
                className="absolute top-0 bottom-0 left-1/2 w-screen -translate-x-1/2 backdrop-blur-xl backdrop-saturate-110"
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%)',
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%)',
                }}
              />

              <div className="absolute inset-x-0 top-[58%] flex -translate-y-1/2 justify-center px-6 max-[767px]:top-[62%] max-[767px]:px-4">
                <div className="pointer-events-auto relative w-full max-w-[960px] border border-[#EFE8DB]/20 bg-[#64151F] px-10 py-12 text-center text-[#EFE8DB] shadow-[0_28px_72px_rgba(26,16,16,0.4)] max-[767px]:px-6 max-[767px]:py-10">
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center border border-solid border-[#EFE8DB]/45 bg-[#1A1010]/25 text-[#EFE8DB]"
                    style={{ ...BODY, fontSize: '18px', borderRadius: '999px' }}
                  >
                    <SfLock size={20} strokeWidth={2.5} className="-mt-0.5" />
                  </div>
                  <h2
                    className="m-0 mt-5 text-balance text-[#EFE8DB]"
                    style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', lineHeight: 1.1, fontWeight: 400 }}
                  >
                    Norite pilnos metodinės bazės?
                  </h2>
                  <p
                    className="m-0 mx-auto mt-4 max-w-[58ch] text-[#EFE8DB]/88"
                    style={{ ...BODY, fontSize: '16px', lineHeight: 1.6 }}
                  >
                    Partneriams suteikiame prieigą prie išplėstinių protokolų, video mokymų medžiagos ir praktinių darbo sistemų, kurios atnaujinamos kas ketvirtį.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-4">
                    <CtaLink href="/tapkite-partneriu" variant="lightFill" className="justify-center px-6">
                      Tapti partneriu
                    </CtaLink>
                    <CtaLink href="/kontaktai#kontaktai-forma" variant="outlineLight" className="justify-center px-6">
                      Gauti konsultaciją
                    </CtaLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Shell>
      </section>

      <section className="pb-20 min-[768px]:pb-28">
        <Shell>
          <div className="mx-auto max-w-[560px] text-center">
            <div className="mx-auto flex justify-center text-[#64151F]">
              <SfEnvelope size={32} strokeWidth={2} />
            </div>
            <h2 className="m-0 mt-4 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.06, fontWeight: 300 }}>
              Gaukite naujus protokolus pirmieji
            </h2>
            <p className="m-0 mt-4 text-[#1A1010]/75" style={{ ...BODY, fontSize: '16px', lineHeight: 1.6 }}>
              Naujausios metodikos ir gairės tiesiai į Jūsų el. paštą.
            </p>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="El. paštas"
                className="min-h-[var(--btn-height)] min-w-0 flex-1 border border-solid border-[#1A1010]/20 bg-[#EFE8DB] px-4 text-[#1A1010] placeholder:text-[#1A1010]/45 focus:border-[#64151F] focus:outline-none"
                style={{ ...BODY, fontSize: '15px', borderRadius: '0px' }}
              />
              <CtaButton type="button" variant="primary" className="shrink-0 px-6">
                Prenumeruoti
              </CtaButton>
            </div>
            <p className="m-0 mt-3 text-[#1A1010]/40" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.02em' }}>
              Skirta tik profesionalams
            </p>
          </div>
        </Shell>
      </section>
      <FooterSection />
    </main>
  );
}
