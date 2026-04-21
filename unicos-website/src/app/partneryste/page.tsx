'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { PlatformSplitSection } from '@/components/sections/PlatformSplitSection';
import { SfClock, SfActivity, SfLayers, SfAward } from '@/components/icons/feather';

const BODY = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
} as const;

const HEADING = {
  fontFamily: "'Quiche Sans', Georgia, serif",
} as const;

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1440px] px-8 max-[767px]:px-6 max-[479px]:px-4">{children}</div>;
}

function SectionTitle({ title, subtitle, align = 'center' }: { title: string; subtitle?: string; align?: 'center' | 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-[920px] text-center' : 'max-w-[920px] text-left'}>
      <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.06, fontWeight: 300 }}>
        {title}
      </h2>
      {subtitle ? (
        <p className="m-0 mt-4 text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function PartnerystePage() {
  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />
      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
            <span className="inline-flex border border-solid border-[#64151F] bg-[#64151F] px-2 py-1 text-[#EFE8DB]" style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', borderRadius: '0px' }}>
              PARTNERYSTE
            </span>
            <h1 className="m-0 mt-6 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', lineHeight: 1.02, fontWeight: 300 }}>
              Augkime kartu.
            </h1>
            <p className="m-0 mt-5 max-w-[760px] text-[#1A1010]/80" style={{ ...BODY, fontSize: '17px', lineHeight: 1.65 }}>
              UNICOS partneryste - tai ne tik produktu tiekimas. Tai asmeninis palaikymas, zinios ir irankiai, padedantys Jusu verslui klesteti kiekviena diena.
            </p>

            <div className="mt-8 flex flex-wrap items-start justify-center gap-3">
              <div className="flex flex-col items-center">
                <button className="h-[52px] border-0 bg-[#64151F] px-6 text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                  Tapti partneriu
                </button>
                <span className="mt-2 text-[#1A1010]/58" style={{ ...BODY, fontSize: '12px' }}>
                  Patvirtinimas per 24 val.
                </span>
              </div>
              <div className="flex flex-col items-center">
                <button className="h-[52px] border border-solid border-[#64151F] bg-transparent px-6 text-[#64151F]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                  Gauti konsultacija
                </button>
                <span className="mt-2 text-[#1A1010]/58" style={{ ...BODY, fontSize: '12px' }}>
                  15 min. poreikiu analize.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <SectionTitle
            title="Ka reiskia buti UNICOS partneriu?"
            subtitle="Tai daugiau nei tiekejo ir pirkejo santykis. Tai sistema, sukurta Jusu augimui."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
            {[
              ['Atrinka Jums', 'Mes ne sandelys. Atrenkame tik tai, kas patikrinta, atsakinga ir tinkama profesionaliam darbui. Jus negaistate laiko rinkdamiesi - mes jau tai padareme.'],
              ['Zinios pries pardavima', 'Produktas be ziniu yra rizika. Investuojame i mokymus, protokolus ir aisku supratima, kad dirbtumete saugiai ir uztikrintai.'],
              ['Augame kartu', 'Asmenine vadyba, konsultacijos ir palaikymas kasdieniuose sprendimuose. Jus nesate vieni.'],
            ].map(([title, description]) => (
              <article key={title} className="border border-solid border-[#1A1010]/15 p-10" style={{ borderRadius: '0px' }}>
                <div className="h-6 w-6 bg-[#64151F]" style={{ borderRadius: '0px' }} />
                <h3 className="m-0 mt-5 text-[#1A1010]" style={{ ...BODY, fontSize: '22px', lineHeight: 1.2, fontWeight: 600 }}>
                  {title}
                </h3>
                <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.65 }}>
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <SectionTitle
            title="Kas gali tapti partneriu?"
            subtitle="UNICOS skirtas profesionalams, dirbantiems grozio ir sveikatos srityje."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-4 min-[768px]:grid-cols-2">
            {[
              ['Kosmetologijos kabinetai ir klinikos', 'Odos prieziuros proceduros ir namu prieziuros rekomendacijos.'],
              ['Grozio salonai ir kirpyklos', 'Profesionaliu plauku ir odos produktu pardavimas ir naudojimas.'],
              ['Estetines dermatologijos klinikos', 'Injekciju, lazerines ir aparatine proceduros.'],
              ['Dermakosmetikos konsultantai ir vaistines', 'Profesionalus produktu rekomendavimas klientams.'],
            ].map(([title, description]) => (
              <article key={title} className="border border-solid border-[#1A1010]/15 p-8" style={{ borderRadius: '0px' }}>
                <div className="h-5 w-5 border border-solid border-[#64151F]" style={{ borderRadius: '0px' }} />
                <h3 className="m-0 mt-5 text-[#1A1010]" style={{ ...BODY, fontSize: '18px', lineHeight: 1.35, fontWeight: 600 }}>
                  {title}
                </h3>
                <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '14px', lineHeight: 1.6 }}>
                  {description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/sprendimai/odos-specialistams" className="text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
              Raskite savo sprendima →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#3B443A] py-24 max-[767px]:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 text-center min-[992px]:grid-cols-4 min-[768px]:grid-cols-2">
            {[
              ['500+', 'partneriu', 'Auganciu su mumis'],
              ['25 metai', 'Patirties rinkoje', ''],
              ['12 prekiu zenklu', 'Atrinktu profesionalams', ''],
              ['24h pristatymas', 'Visoje Lietuvoje', ''],
            ].map(([value, label, desc]) => (
              <div key={value}>
                <p className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: 1.05, fontWeight: 300 }}>
                  {value}
                </p>
                <p className="m-0 mt-2 text-[#EFE8DB]/70" style={{ ...BODY, fontSize: '15px', lineHeight: 1.45 }}>
                  {label}
                </p>
                {desc ? (
                  <p className="m-0 mt-1 text-[#EFE8DB]/70" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45 }}>
                    {desc}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PlatformSplitSection
        eyebrow={null}
        heading={
          <>
            <span className="font-light">UNICOS platforma - </span>
            <span className="font-medium">daugiau laiko Jums.</span>
          </>
        }
        bodyText="Sukūrėme įrankį, kuris paverčia užsakymus malonumu."
        surfaceClassName="bg-[#EFE8DB]"
        accent="maroon"
        ctaLabel="Tapti partneriu ir gauti prieigą →"
        ctaHref="#tapti-partneriu"
        features={[
          {
            Icon: SfClock,
            title: 'Užsakymai bet kuriuo paros metu',
            body: 'be skambučių ir laukimo.',
          },
          {
            Icon: SfActivity,
            title: 'Likučių stebėjimas realiu laiku',
            body: 'visada žinote, kas sandėlyje.',
          },
          {
            Icon: SfLayers,
            title: 'Patogi užsakymų istorija',
            body: 'pakartokite mėgstamą krepšelį vienu paspaudimu.',
          },
          {
            Icon: SfAward,
            title: 'Asmeninės kainos ir akcijos',
            body: 'viskas matoma iš karto.',
          },
        ]}
        imageContent={
          <div className="flex h-full min-h-[400px] w-full items-center justify-center bg-[#3B443A] text-[#EFE8DB]/40" style={{ ...BODY, borderRadius: '0px', fontSize: '14px', letterSpacing: '0.06em' }}>
            Platform Dashboard Mockup
          </div>
        }
      />

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <SectionTitle title="Lojalumo programa." subtitle="Kuo ilgiau dirbame kartu - tuo daugiau naudos Jusu verslui." />
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
            {[
              ['Augancios nuolaidos', 'Partnerio kainodara gereja su kiekvienu ketvirciu.'],
              ['Pirmenybe naujienoms', 'Pirmieji suzinote apie naujus produktus ir mokymus.'],
              ['Asmeniniai pasiulymai', 'Vadybininkas paruosia akcijas, pritaikytas Jusu poreikiams.'],
            ].map(([title, body]) => (
              <article key={title} className="border border-solid border-[#1A1010]/15 p-8" style={{ borderRadius: '0px' }}>
                <div className="h-5 w-5 border border-solid border-[#64151F]" style={{ borderRadius: '0px' }} />
                <h3 className="m-0 mt-4 text-[#1A1010]" style={{ ...BODY, fontSize: '20px', lineHeight: 1.25, fontWeight: 600 }}>
                  {title}
                </h3>
                <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                  {body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/kontaktai" className="text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
              Suzinoti daugiau apie lojaluma →
            </Link>
          </div>
        </Container>
      </section>

      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
