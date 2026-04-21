'use client';

import * as React from 'react';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';

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
  cta: string;
};

const BASE_RESOURCES: ResourceCard[] = [
  {
    access: 'NEMOKAMA',
    title: 'Cheminio pilingo taikymo protokolas: Bazinės taisyklės',
    description: 'Pagrindiniai žingsniai ir saugumo reikalavimai atliekant paviršinius pilingus.',
    tags: ['Neostrata', 'Oda'],
    cta: 'Atsisiųsti ↓',
  },
  {
    access: 'REGISTRUOTIEMS',
    title: 'Mezoterapijos kokteilių parinkimas pagal odos tipą',
    description: 'Išsamus gidas su veikliųjų medžiagų suderinamumo lentelėmis.',
    tags: ['Fillmed', 'Estetinė'],
    cta: 'Gauti PDF 🔒',
  },
  {
    access: 'PARTNERIAMS',
    title: 'Klinikos higienos standartas ir procedūrų pasiruošimas',
    description: 'Oficialus UNICOS partnerių higienos ir darbo vietos paruošimo vadovas.',
    tags: ['UNICOS', 'Bendra'],
    cta: 'Tapti partneriu →',
  },
  {
    access: 'NEMOKAMA',
    title: 'NCTF 135HA: Produkto sudėties analizė',
    description: 'Techninė specifikacija ir klinikiniai tyrimai.',
    tags: ['Fillmed', 'Estetinė'],
    cta: 'Atsisiųsti ↓',
  },
  {
    access: 'PARTNERIAMS',
    title: 'Sudėtingų aknės atvejų gydymo algoritmai',
    description: 'Dermatologų patvirtintos schemos darbui su uždegimine akne.',
    tags: ['Exuviance', 'Dermatologija'],
    cta: 'Tapti partneriu →',
  },
  {
    access: 'REGISTRUOTIEMS',
    title: 'Plaukų slinkimo gydymo protokolai su peptidais',
    description: 'Dr. CYJ užpildų taikymo metodika ir kursų sudarymas.',
    tags: ['Caregen', 'Plaukai'],
    cta: 'Gauti PDF 🔒',
  },
];

const EXTRA_PLACEHOLDERS: ResourceCard[] = Array.from({ length: 6 }).map((_, i) => ({
  access: i % 3 === 0 ? 'NEMOKAMA' : i % 3 === 1 ? 'REGISTRUOTIEMS' : 'PARTNERIAMS',
  title: `Papildomas metodinis dokumentas ${i + 1}`,
  description: 'Atnaujinta gairių versija profesionaliam kasdieniam darbui.',
  tags: ['UNICOS', 'Metodika'],
  cta: i % 3 === 0 ? 'Atsisiųsti ↓' : i % 3 === 1 ? 'Gauti PDF 🔒' : 'Tapti partneriu →',
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
      <section className="py-24 max-[767px]:py-16">
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
                <button className="h-[52px] border-0 bg-[#64151F] px-6 text-[#EFE8DB]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, borderRadius: '0px' }}>
                  Peržiūrėti išteklius
                </button>
                <button className="h-[52px] border border-solid border-[#64151F] bg-transparent px-6 text-[#64151F]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, borderRadius: '0px' }}>
                  Tapti partneriu
                </button>
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
            <span className="text-[#1A1010]/50" style={{ ...BODY, fontSize: '14px' }}>
              ⚲ Filtruoti:
            </span>
            {[
              ['tipas', 'Tipas ▾'],
              ['segmentas', 'Segmentas ▾'],
              ['zenklas', 'Prekės ženklas ▾'],
              ['lygis', 'Lygis ▾'],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter((prev) => (prev === id ? null : (id as 'tipas' | 'segmentas' | 'zenklas' | 'lygis')))}
                className={`border border-solid px-4 py-2 text-sm transition-colors ${
                  activeFilter === id ? 'border-[#64151F] bg-[#64151F]/8 text-[#64151F]' : 'border-[#1A1010]/20 bg-transparent text-[#1A1010]'
                }`}
                style={{ ...BODY, borderRadius: '0px' }}
              >
                {label}
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

      <section className="py-24 max-[767px]:py-16">
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
                      <button className="text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}>
                        {card.cta}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore((p) => !p)}
              className="h-[44px] border border-solid border-[#64151F] bg-transparent px-8 text-[#64151F]"
              style={{ ...BODY, fontSize: '14px', fontWeight: 500, borderRadius: '0px' }}
            >
              {showMore ? 'Rodyti mažiau ▴' : 'Rodyti daugiau ▾'}
            </button>
          </div>
        </Container>
      </section>

      <section className="bg-[#3B443A] py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[860px] text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-solid border-[#EFE8DB]/30 text-[#EFE8DB]" style={{ ...BODY, fontSize: '18px', borderRadius: '999px' }}>
              🔒
            </div>
            <h2 className="m-0 mt-5 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.06, fontWeight: 300 }}>
              Norite pilnos metodinės bazės?
            </h2>
            <p className="m-0 mt-4 text-[#EFE8DB]/70" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
              Partneriams suteikiame prieigą prie išplėstinių protokolų, video mokymų medžiagos ir praktinių darbo sistemų, kurios atnaujinamos kas ketvirtį.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <button className="h-[52px] border-0 bg-[#64151F] px-6 text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                Tapti partneriu
              </button>
              <button className="h-[52px] border border-solid border-[#EFE8DB] bg-transparent px-6 text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                Gauti konsultaciją
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="border-t border-solid border-[#1A1010]/10 pt-10">
            <div className="grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
              {[
                ['CENTRALIZUOTA BAZĖ', 'Visi dokumentai vienoje vietoje, pasiekiami 24/7.'],
                ['NUOLATINIS ATNAUJINIMAS', 'Naujausi protokolai tiesiai iš gamintojų.'],
                ['PATIKRINTA EKSPERTŲ', 'Tik saugios ir patvirtintos metodikos.'],
              ].map(([label, body], idx) => (
                <div key={label} className={`px-6 py-10 text-center ${idx < 2 ? 'min-[992px]:border-r min-[992px]:border-solid min-[992px]:border-[#1A1010]/10' : ''}`}>
                  <div className="mx-auto h-8 w-8 bg-[#64151F]" style={{ borderRadius: '0px' }} />
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
            <div className="mx-auto text-[#64151F]" style={{ ...BODY, fontSize: '30px' }}>
              ✉
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
                className="h-[52px] min-w-0 flex-1 border border-solid border-[#1A1010]/20 bg-[#EFE8DB] px-4 text-[#1A1010] placeholder:text-[#1A1010]/45 focus:border-[#64151F] focus:outline-none"
                style={{ ...BODY, fontSize: '15px', borderRadius: '0px' }}
              />
              <button className="h-[52px] border border-solid border-[#64151F] bg-[#64151F] px-6 text-[#EFE8DB]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, borderRadius: '0px' }}>
                Prenumeruoti
              </button>
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
