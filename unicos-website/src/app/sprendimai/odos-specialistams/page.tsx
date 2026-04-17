'use client';

import * as React from 'react';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CmsGridSection } from '@/components/sections/CmsGridSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { OdosAudienceSection } from '@/components/sections/OdosAudienceSection';
import { OdosChallengesSection } from '@/components/sections/OdosChallengesSection';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export default function OdosSpecialistamsPage() {
  const solutionCards = [
    {
      title: 'Atrinkti prekių ženklai',
      description: 'Guinot, Neostrata, Anna Lotan ir kiti, oficialiai atstovaujami su pilnu palaikymu.',
    },
    {
      title: 'Darbo protokolai',
      description: 'Kiekvienam produktui aiški instrukcija procedūroms ir namų priežiūros rekomendacijoms.',
    },
    {
      title: 'Asmeninis vadybininkas',
      description: 'Vienas kontaktas, pažįstantis Jūsų veiklą ir padedantis priimti sprendimus.',
    },
    {
      title: 'Praktiniai mokymai',
      description: 'Seminarai su tarptautiniais lektoriais ir sertifikatais, stiprinančiais autoritetą.',
    },
    {
      title: 'Startinis paketas',
      description: 'Paruoštas rinkinys pradėti be didelių investicijų su vadybininko rekomendacija.',
    },
    {
      title: 'Skaidri kainodara',
      description: 'Didmeninės kainos nuo pirmos dienos, jokių paslėptų mokesčių.',
    },
  ] as const;

  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />

      <section
        className="relative z-[2] overflow-x-clip pt-40 pb-28 max-[767px]:pt-32 max-[767px]:pb-20"
        style={{ backgroundColor: '#EFE8DB', borderBottom: '1px solid rgba(26,16,16,0.10)' }}
      >
        <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="flex w-full flex-row items-stretch gap-16 max-[991px]:flex-col max-[991px]:gap-12">
            {/* LEFT: TEXT + CTAs */}
            <div className="flex min-w-0 flex-1 flex-col pb-8 max-[991px]:pb-0">
              {/* Breadcrumb */}
              <nav className="mb-0" aria-label="Breadcrumb">
                <div className="flex items-center gap-3">
                  <span
                    className="uppercase text-[#64151F]"
                    style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                  >
                    Sprendimai
                  </span>
                  <span className="text-[#1A1010]/45" style={{ ...BODY, fontSize: '11px', fontWeight: 400 }}>
                    /
                  </span>
                  <span
                    className="uppercase text-[#64151F]"
                    style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                  >
                    Odos priežiūros specialistsams
                  </span>
                </div>
              </nav>

              <div
                className="mb-14 mt-4 h-px w-full bg-[#1A1010]/10 max-[767px]:mb-10 max-[767px]:mt-3"
                aria-hidden
              />

              <h1
                className="m-0 max-w-[18ch] text-[#64151F] tracking-[-0.03em]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.1rem,3.3vw,3.1rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                <span className="font-light">Profesionali kosmetika salonams ir </span>
                <span className="font-medium">odos priežiūros specialistams</span>
              </h1>

              <p
                className="m-0 mt-6 max-w-[62ch] text-[#64151F]/78"
                style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
              >
                Atrinkti prekių ženklai, aiškūs protokolai ir asmeninis palaikymas — kad Jūsų procedūros būtų
                nepriekaištingos, o klientai grįžtų vėl ir vėl.
              </p>

              {/* Prices */}
              <div className="mt-8 flex flex-col items-start gap-2.5">
                <div className="flex items-end gap-3">
                  <div
                    className="uppercase text-[#64151F]/70"
                    style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1, paddingBottom: '6px' }}
                  >
                    STARTAS NUO
                  </div>
                  <div
                    style={{
                      fontFamily: "'Quiche Sans', Georgia, serif",
                      fontSize: 'clamp(2.3rem,4vw,3.2rem)',
                      lineHeight: 1,
                      fontWeight: 300,
                      color: '#64151F',
                    }}
                  >
                    950 €
                  </div>
                </div>
              </div>

              <div className="my-8 h-px w-full bg-[#1A1010]/10 max-[767px]:my-7" aria-hidden />

              {/* CTA block */}
              <div className="flex flex-wrap items-start gap-8">
                <div className="flex flex-col items-start gap-2.5">
                  <CtaLink
                    href="/tapkite-partneriu"
                    variant="primary"
                    className="min-w-[240px] justify-center"
                  >
                    Tapti partneriu
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/62"
                    style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                  >
                    PATVIRTINIMAS PER 24 VAL.
                  </span>
                </div>

                <div className="flex flex-col items-start gap-2.5">
                  <CtaLink
                    href="/kontaktai"
                    variant="outline"
                    className="min-w-[240px] justify-center"
                  >
                    Gauti konsultaciją
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/62"
                    style={{ fontSize: '10px', lineHeight: '1.1', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                  >
                    PADĖSIME SUDĖLIOTI ASORTIMENTĄ.
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: PHOTO */}
            <div className="relative min-w-0 flex-1 overflow-hidden border border-[#1A1010]/10 min-[992px]:h-[560px] max-[991px]:h-[430px] max-[767px]:h-[320px]">
              <img src="/odos.jpg" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(26,16,16,0.14)' }}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      <OdosAudienceSection />
      <OdosChallengesSection />
      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={
          <>
            <span className="font-medium">Kaip UNICOS </span>
            <span className="font-light">tai išsprendžia?</span>
          </>
        }
        subheading="Gausite ne tik produktus, bet ir aplinką profesionaliam augimui."
        cards={[...solutionCards]}
      />
      <CmsGridSection />
      <FaqSection backgroundClassName="bg-[#EFE8DB]" />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

