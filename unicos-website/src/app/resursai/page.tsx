'use client';

import * as React from 'react';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { FooterSection } from '@/components/sections/FooterSection';
import { PAGE_SHELL_CLASS } from '@/config/pageShell';
import { CtaLink } from '@/components/ui/CtaLink';
import { CtaButton } from '@/components/ui/CtaButton';
import {
  SfActivity,
  SfLayers,
  SfAward,
  SfArrowDown,
  SfChevronDown,
  SfSearch,
  SfLock,
  SfArrowRight,
  SfEnvelope,
  SfCheck,
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

const EXTRA_PLACEHOLDERS: ResourceCard[] = Array.from({ length: 6 }).map((_, i) => ({
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
  const [showMore, setShowMore] = React.useState(false);

  const resources = showMore ? [...BASE_RESOURCES, ...EXTRA_PLACEHOLDERS] : BASE_RESOURCES;

  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />
      <section className="pt-32 pb-16 max-[767px]:pt-24 max-[767px]:pb-12 min-[768px]:pt-40 min-[768px]:pb-20">
        <Shell>
          <div className="grid grid-cols-1 gap-10 min-[992px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] min-[992px]:items-center">
            <div>
              <span
                className="inline-flex border border-solid border-[#64151F] bg-[#64151F] px-3 py-1 text-[#EFE8DB]"
                style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', borderRadius: '0px' }}
              >
                PROFESIONALŲ ŽINIŲ ERDVĖ
              </span>
              <h1
                className="m-0 mt-6 text-[#64151F]"
                style={{ ...HEADING, fontSize: 'clamp(2.3rem, 4.5vw, 4rem)', lineHeight: 1.03, fontWeight: 300 }}
              >
                Naudinga
                <br />
                informacija
                <br />
                profesionalams
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

            <div className="relative min-h-[280px] w-full overflow-hidden border border-solid border-[#1A1010]/15 min-[992px]:min-h-[360px]" style={{ borderRadius: '0px' }}>
              <img
                src="/Professional Woman Indoors.png"
                alt=""
                className="h-full w-full min-h-[280px] object-cover min-[992px]:min-h-[360px]"
                loading="eager"
                sizes="(max-width: 991px) 100vw, 42vw"
              />
            </div>
          </div>
        </Shell>
      </section>

      <section className="sticky top-0 z-20 border-b border-solid border-[#1A1010]/10 bg-[#EFE8DB] py-3 min-[768px]:py-4">
        <Shell>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#1A1010]/50" style={{ ...BODY, fontSize: '14px' }}>
              <SfSearch size={14} className="-mt-px" strokeWidth={2.5} /> Filtruoti:
            </span>
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
                onClick={() => setActiveFilter((prev) => (prev === id ? null : (id as 'tipas' | 'segmentas' | 'zenklas' | 'lygis')))}
                className={`flex h-[40px] items-center gap-1.5 border border-solid px-4 text-sm transition-colors ${
                  isActive
                    ? 'border-[#64151F] bg-[#64151F] text-[#EFE8DB]'
                    : 'border-[rgba(26,16,16,0.25)] bg-transparent text-[#1A1010]'
                }`}
                style={{ ...BODY, borderRadius: '0px' }}
              >
                {label} <SfChevronDown size={14} strokeWidth={2.5} className="-mt-px" />
              </button>
              );
            })}
            <div className="ml-auto min-w-[240px] flex-1 max-w-[340px]">
              <input
                type="text"
                placeholder="Ieškoti dokumento..."
                className="h-[40px] w-full border border-solid border-[rgba(26,16,16,0.25)] bg-[#EFE8DB] px-3 text-[#1A1010] placeholder:text-[#1A1010]/40 focus:border-[#64151F] focus:outline-none"
                style={{ ...BODY, fontSize: '14px', borderRadius: '0px' }}
              />
            </div>
          </div>
        </Shell>
      </section>

      <section id="resursai-turinys" className="py-16 min-[768px]:py-24">
        <Shell>
          <div className="relative isolate overflow-hidden">
            <div className="grid grid-cols-1 gap-4 min-[992px]:grid-cols-3 min-[768px]:grid-cols-2">
            {resources.map((card, idx) => {
              const badgeClass =
                card.access === 'NEMOKAMA'
                  ? 'border-[#3B443A] bg-[#3B443A] text-[#EFE8DB]'
                  : card.access === 'PARTNERIAMS'
                    ? 'border-[#64151F] bg-[#64151F] text-[#EFE8DB]'
                    : 'border-[#64151F] bg-[#EFE8DB] text-[#64151F]';
              return (
                <article
                  key={`${card.title}-${idx}`}
                  className="group border border-solid border-[#1A1010]/15 bg-[#EFE8DB] p-8 transition-[background-color,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#64151F] hover:bg-[#64151F] motion-reduce:transition-none"
                  style={{ borderRadius: '0px' }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`border border-solid px-2 py-1 transition-colors duration-300 ${badgeClass} group-hover:border-[#EFE8DB]/45 group-hover:bg-[#EFE8DB]/14 group-hover:text-[#EFE8DB]`}
                      style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', borderRadius: '0px' }}
                    >
                      {card.access}
                    </span>
                    <span
                      className="uppercase text-[#1A1010]/40 transition-colors duration-300 group-hover:text-[#EFE8DB]/55"
                      style={{ ...BODY, fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}
                    >
                      PDF
                    </span>
                  </div>
                  <h3
                    className="m-0 mt-5 text-[#1A1010] transition-colors duration-300 group-hover:text-[#EFE8DB]"
                    style={{ ...HEADING, fontSize: '28px', lineHeight: 1.15, fontWeight: 300 }}
                  >
                    {card.title}
                  </h3>
                  <p className="m-0 mt-3 text-[#1A1010]/70 transition-colors duration-300 group-hover:text-[#EFE8DB]/88" style={{ ...BODY, fontSize: '14px', lineHeight: 1.6 }}>
                    {card.description}
                  </p>
                  <div className="mt-5 border-t border-solid border-[#1A1010]/10 pt-4 transition-colors duration-300 group-hover:border-[#EFE8DB]/22">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="uppercase text-[#1A1010]/50 transition-colors duration-300 group-hover:text-[#EFE8DB]/65"
                        style={{ ...BODY, fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}
                      >
                        {card.tags[0]} | {card.tags[1]}
                      </span>
                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-[#64151F] underline underline-offset-2 transition-colors duration-300 group-hover:text-[#EFE8DB]"
                        style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}
                      >
                        {card.ctaLabel}
                        {card.ctaIcon === 'download' ? <SfArrowDown size={14} strokeWidth={2.5} className="-mt-0.5" /> : card.ctaIcon === 'lock' ? <SfLock size={14} className="-mt-0.5" /> : <SfArrowRight size={14} strokeWidth={2.5} className="-mt-0.5" />}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
            </div>

            {/* Paywall: store „stiklo“+tamsinimas ant kortelių, tekstas ant vientiso tamsaus bloko (skaitoma). */}
            <div
              className="absolute inset-x-0 bottom-0 z-[2] flex min-h-[min(520px,70%)] flex-col justify-end min-[768px]:min-h-[min(440px,58%)]"
              role="region"
              aria-label="Pilna metodinė bazė skirta partneriams"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f120f] via-[#0f120f]/88 to-[#0f120f]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl backdrop-saturate-100"
                aria-hidden
              />

              <div className="relative z-[1] w-full border-t-2 border-[#EFE8DB]/25 bg-[#3B443A] px-4 py-8 shadow-[0_-20px_50px_rgba(0,0,0,0.45)] min-[768px]:px-10 min-[768px]:py-10">
                <div className="mx-auto w-full max-w-[860px] text-center">
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center border border-solid border-[#EFE8DB]/40 bg-[#1A1010]/25 text-[#EFE8DB]"
                    style={{ ...BODY, fontSize: '18px', borderRadius: '999px' }}
                  >
                    <SfLock size={20} strokeWidth={2.5} className="-mt-0.5" />
                  </div>
                  <h2
                    className="m-0 mt-5 text-balance text-[#EFE8DB] [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]"
                    style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', lineHeight: 1.1, fontWeight: 400 }}
                  >
                    Norite pilnos metodinės bazės?
                  </h2>
                  <p
                    className="m-0 mt-4 max-w-[58ch] text-[#EFE8DB] [text-shadow:0_1px_1px_rgba(0,0,0,0.2)] md:mx-auto"
                    style={{ ...BODY, fontSize: '16px', lineHeight: 1.6 }}
                  >
                    Partneriams suteikiame prieigą prie išplėstinių protokolų, video mokymų medžiagos ir praktinių darbo sistemų, kurios atnaujinamos kas ketvirtį.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-4">
                    <CtaLink href="/tapkite-partneriu" variant="primary" className="justify-center px-6">
                      Tapti partneriu
                    </CtaLink>
                    <CtaLink href="/kontaktai" variant="outlineLight" className="justify-center px-6">
                      Gauti konsultaciją
                    </CtaLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-[3] mt-8 text-center">
            <CtaButton
              type="button"
              variant="outline"
              labelMode="static"
              onClick={() => setShowMore((p) => !p)}
              className="inline-flex items-center gap-2 px-8"
            >
              {showMore ? 'Rodyti mažiau' : 'Rodyti daugiau'}
              <SfChevronDown
                size={14}
                strokeWidth={2.5}
                className={`shrink-0 text-current transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
              />
            </CtaButton>
          </div>
        </Shell>
      </section>

      <div className="border-t border-solid border-[#1A1010]/10">
        <ResponsibleBeautySection
          cardsOnly
          showGuidanceRow={false}
          surfaceClassName="bg-[#EFE8DB]"
          accent="maroon"
          cards={[
            {
              title: 'CENTRALIZUOTA BAZĖ',
              description: 'Visi dokumentai vienoje vietoje, pasiekiami 24/7.',
              Icon: SfLayers,
            },
            {
              title: 'NUOLATINIS ATNAUJINIMAS',
              description: 'Naujausi protokolai tiesiai iš gamintojų.',
              Icon: SfActivity,
            },
            {
              title: 'PATIKRINTA EKSPERTŲ',
              description: 'Tik saugios ir patvirtintos metodikos.',
              Icon: SfCheck,
            },
          ]}
        />
      </div>

      <section className="pt-16 pb-20 min-[768px]:pt-24 min-[768px]:pb-28">
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
