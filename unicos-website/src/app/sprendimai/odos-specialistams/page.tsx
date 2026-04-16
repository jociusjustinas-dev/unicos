'use client';

import * as React from 'react';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CmsGridSection } from '@/components/sections/CmsGridSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { OdosAudienceSection } from '@/components/sections/OdosAudienceSection';
import { OdosChallengesSection } from '@/components/sections/OdosChallengesSection';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export default function OdosSpecialistamsPage() {
  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />

      <section
        className="relative z-[2] overflow-x-clip pt-40 pb-20 max-[767px]:pt-32 max-[767px]:pb-14"
        style={{ backgroundColor: '#EFE8DB', borderBottom: '1px solid rgba(26,16,16,0.10)' }}
      >
        <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
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

          <div className="flex w-full flex-row gap-16 max-[991px]:flex-col max-[991px]:gap-12">
            {/* LEFT: TEXT + CTAs */}
            <div className="flex flex-col flex-1 min-w-0">
              <h1
                className="m-0 max-w-[18ch] text-[#64151F] tracking-[-0.03em]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.1rem,3.3vw,3.1rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                Profesionali kosmetika salonams ir odos priežiūros specialistams
              </h1>

              <p
                className="m-0 mt-6 max-w-[62ch] text-[#1A1010]/78"
                style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
              >
                Atrinkti prekių ženklai, aiškūs protokolai ir asmeninis palaikymas — kad Jūsų procedūros būtų
                nepriekaištingos, o klientai grįžtų vėl ir vėl.
              </p>

              {/* Prices */}
              <div className="mt-8 flex flex-col items-start gap-3">
                <div
                  className="uppercase text-[#64151F]/70"
                  style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                >
                  Startas nuo
                </div>
                <div className="flex items-baseline gap-3">
                  <div
                    className="uppercase text-[#1A1010]/70"
                    style={{ ...BODY, fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em' }}
                  >
                    Kaina:
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
              <div className="flex w-full flex-col items-stretch gap-8 sm:flex-row sm:items-start sm:gap-10">
                <div className="flex flex-1 flex-col items-start gap-2.5">
                  <CtaLink
                    href="/tapkite-partneriu"
                    variant="primary"
                  >
                    Tapti partneriu
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/62"
                    style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                  >
                    Patvirtinimas per 24 val.
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-start gap-2.5">
                  <CtaLink
                    href="/kontaktai"
                    variant="outline"
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
            <div className="relative flex-1 min-w-0 overflow-hidden h-[520px] max-[991px]:h-[430px] max-[767px]:h-[320px] border border-[#1A1010]/10">
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
      <CmsGridSection />
      <FaqSection backgroundClassName="bg-[#EFE8DB]" />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

