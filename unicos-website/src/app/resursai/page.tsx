'use client';

import * as React from 'react';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { PlatformSplitSection } from '@/components/sections/PlatformSplitSection';
import { CtaLink } from '@/components/ui/CtaLink';
import { CtaButton } from '@/components/ui/CtaButton';
import {
  SfClock,
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

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1440px] px-8 max-[767px]:px-6 max-[479px]:px-4">{children}</div>;
}

export default function ResursaiPage() {
  const [activeFilter, setActiveFilter] = React.useState<'tipas' | 'segmentas' | 'zenklas' | 'lygis' | null>(null);
  const [showMore, setShowMore] = React.useState(false);

  const resources = showMore ? [...BASE_RESOURCES, ...EXTRA_PLACEHOLDERS] : BASE_RESOURCES;

  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />
      <section className="pt-40 pb-24 max-[767px]:pt-28 max-[767px]:pb-16 max-[479px]:pt-24">
        <Container>
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
                Naudinga informacija profesionalams
              </h1>
              <p className="m-0 mt-5 max-w-[64ch] text-[#1A1010]/80" style={{ ...BODY, fontSize: '17px', lineHeight: 1.6 }}>
                Protokolai, metodikos ir praktinės gairės, skirtos saugiam ir užtikrintam darbui.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="#resursai-turinys" variant="primary" labelMode="static" className="justify-center px-6">
                  Peržiūrėti išteklius
                </CtaLink>
                <CtaLink href="/tapkite-partneriu" variant="outline" labelMode="static" className="justify-center px-6">
                  Tapti partneriu
                </CtaLink>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="min-h-[360px] border border-solid border-[#3B443A] bg-[#3B443A] p-6" style={{ borderRadius: '0px' }}>
                <div className="h-3 w-[78%] bg-[#EFE8DB]/20" style={{ borderRadius: '0px' }} />
                <div className="mt-3 h-3 w-[65%] bg-[#EFE8DB]/20" style={{ borderRadius: '0px' }} />
                <div className="mt-3 h-3 w-[82%] bg-[#EFE8DB]/20" style={{ borderRadius: '0px' }} />
                <div className="mt-3 h-3 w-[58%] bg-[#EFE8DB]/20" style={{ borderRadius: '0px' }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="min-h-[96px] border border-solid border-[#1A1010]/15 bg-[#EFE8DB]" style={{ borderRadius: '0px' }} />
                <div className="min-h-[96px] border border-solid border-[#1A1010]/15 bg-[#EFE8DB]" style={{ borderRadius: '0px' }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="sticky top-0 z-20 border-b border-solid border-[#1A1010]/10 bg-[#EFE8DB] py-4">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#1A1010]/50" style={{ ...BODY, fontSize: '14px' }}>
              <SfSearch size={14} className="-mt-px" strokeWidth={2.5} /> Filtruoti:
            </span>
            {[
              ['tipas', 'Tipas'],
              ['segmentas', 'Segmentas'],
              ['zenklas', 'Prekės ženklas'],
              ['lygis', 'Lygis'],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter((prev) => (prev === id ? null : (id as 'tipas' | 'segmentas' | 'zenklas' | 'lygis')))}
                className={`flex items-center gap-1.5 border border-solid px-4 py-2 text-sm transition-colors ${
                  activeFilter === id ? 'border-[#64151F] bg-[#64151F]/8 text-[#64151F]' : 'border-[#1A1010]/20 bg-transparent text-[#1A1010]'
                }`}
                style={{ ...BODY, borderRadius: '0px' }}
              >
                {label} <SfChevronDown size={14} strokeWidth={2.5} className="-mt-px" />
              </button>
            ))}
            <div className="ml-auto min-w-[240px] flex-1 max-w-[340px]">
              <input
                type="text"
                placeholder="Ieškoti dokumento..."
                className="h-[42px] w-full border border-solid border-[#1A1010]/20 bg-transparent px-3 text-[#1A1010] placeholder:text-[#1A1010]/45 focus:border-[#64151F] focus:outline-none"
                style={{ ...BODY, fontSize: '14px', borderRadius: '0px' }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="resursai-turinys" className="py-24 max-[767px]:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-4 min-[992px]:grid-cols-3 min-[768px]:grid-cols-2">
            {resources.map((card, idx) => {
              const badgeClass =
                card.access === 'NEMOKAMA'
                  ? 'border-[#3B443A] bg-[#3B443A] text-[#EFE8DB]'
                  : card.access === 'PARTNERIAMS'
                    ? 'border-[#64151F] bg-[#64151F] text-[#EFE8DB]'
                    : 'border-[#64151F] bg-[#EFE8DB] text-[#64151F]';
              return (
                <article key={`${card.title}-${idx}`} className="border border-solid border-[#1A1010]/15 bg-[#EFE8DB] p-8" style={{ borderRadius: '0px' }}>
                  <div className="flex items-center justify-between gap-3">
                    <span className={`border border-solid px-2 py-1 ${badgeClass}`} style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', borderRadius: '0px' }}>
                      {card.access}
                    </span>
                    <span className="uppercase text-[#1A1010]/40" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}>
                      PDF
                    </span>
                  </div>
                  <h3 className="m-0 mt-5 text-[#1A1010]" style={{ ...HEADING, fontSize: '28px', lineHeight: 1.15, fontWeight: 300 }}>
                    {card.title}
                  </h3>
                  <p className="m-0 mt-3 text-[#1A1010]/70" style={{ ...BODY, fontSize: '14px', lineHeight: 1.6 }}>
                    {card.description}
                  </p>
                  <div className="mt-5 border-t border-solid border-[#1A1010]/10 pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="uppercase text-[#1A1010]/50" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}>
                        {card.tags[0]} | {card.tags[1]}
                      </span>
                      <button className="flex items-center gap-1.5 text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}>
                        {card.ctaLabel}
                        {card.ctaIcon === 'download' ? <SfArrowDown size={14} strokeWidth={2.5} className="-mt-0.5" /> : card.ctaIcon === 'lock' ? <SfLock size={14} className="-mt-0.5" /> : <SfArrowRight size={14} strokeWidth={2.5} className="-mt-0.5" />}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <CtaButton
              type="button"
              variant="outline"
              onClick={() => setShowMore((p) => !p)}
              className="inline-flex items-center gap-2 px-8"
            >
              {showMore ? 'Rodyti mažiau' : 'Rodyti daugiau'}
              <SfChevronDown size={14} strokeWidth={2.5} className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
            </CtaButton>
          </div>
        </Container>
      </section>

      <section className="bg-[#3B443A] py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[860px] text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-solid border-[#EFE8DB]/30 text-[#EFE8DB]" style={{ ...BODY, fontSize: '18px', borderRadius: '999px' }}>
              <SfLock size={20} strokeWidth={2.5} className="-mt-0.5" />
            </div>
            <h2 className="m-0 mt-5 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.06, fontWeight: 300 }}>
              Norite pilnos metodinės bazės?
            </h2>
            <p className="m-0 mt-4 text-[#EFE8DB]/70" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
              Partneriams suteikiame prieigą prie išplėstinių protokolų, video mokymų medžiagos ir praktinių darbo sistemų, kurios atnaujinamos kas ketvirtį.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <CtaLink href="/tapkite-partneriu" variant="primary" labelMode="static" className="justify-center px-6">
                Tapti partneriu
              </CtaLink>
              <CtaLink href="/kontaktai" variant="outlineLight" labelMode="static" className="justify-center px-6">
                Gauti konsultaciją
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="border-t border-solid border-[#1A1010]/10 pt-10">
            <div className="grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
              {[
                { label: 'CENTRALIZUOTA BAZĖ', body: 'Visi dokumentai vienoje vietoje, pasiekiami 24/7.', Icon: SfLayers },
                { label: 'NUOLATINIS ATNAUJINIMAS', body: 'Naujausi protokolai tiesiai iš gamintojų.', Icon: SfActivity },
                { label: 'PATIKRINTA EKSPERTŲ', body: 'Tik saugios ir patvirtintos metodikos.', Icon: SfCheck },
              ].map(({ label, body, Icon }, idx) => (
                <div key={label} className={`px-6 py-10 text-center ${idx < 2 ? 'min-[992px]:border-r min-[992px]:border-solid min-[992px]:border-[#1A1010]/10' : ''}`}>
                  <div className="mx-auto flex h-10 w-10 items-center justify-center bg-[#64151F]" style={{ borderRadius: '0px' }}>
                    <Icon size={20} strokeWidth={2} className="text-[#EFE8DB]" />
                  </div>
                  <p className="m-0 mt-4 uppercase text-[#1A1010]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>
                    {label}
                  </p>
                  <p className="m-0 mt-3 text-[#1A1010]/72" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
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
        </Container>
      </section>
      <FooterSection />
    </main>
  );
}
