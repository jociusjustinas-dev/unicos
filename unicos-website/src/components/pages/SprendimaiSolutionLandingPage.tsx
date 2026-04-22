'use client';

import * as React from 'react';
import type { SprendimaiSolutionLandingConfig } from '@/config/sprendimaiSolutionLanding';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CmsGridSection } from '@/components/sections/CmsGridSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { OdosAudienceSection } from '@/components/sections/OdosAudienceSection';
import { OdosChallengesSection } from '@/components/sections/OdosChallengesSection';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { OdosBrandsSection } from '@/components/sections/OdosBrandsSection';
import { OdosStarterCalloutSection } from '@/components/sections/OdosStarterCalloutSection';
import { OdosPartnerSpotlightSection } from '@/components/sections/OdosPartnerSpotlightSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function SprendimaiSolutionLandingPage({ config }: { config: SprendimaiSolutionLandingConfig }) {
  const spotlightHeadingId = `${config.htmlIdPrefix}-spotlight-heading`;

  const solutionCards = [...config.solutionCards];

  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />

      <section
        className="relative z-[2] overflow-x-clip pt-40 pb-28 max-[767px]:pt-32 max-[767px]:pb-20"
        style={{ backgroundColor: '#EFE8DB' }}
      >
        <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="flex w-full flex-row items-stretch gap-16 max-[991px]:flex-col max-[991px]:gap-12">
            <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-start pb-8 max-[991px]:pb-0 min-[992px]:justify-center min-[992px]:pb-8">
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
                    {config.breadcrumbLabel}
                  </span>
                </div>
              </nav>

              <h1
                className={`m-0 mt-8 text-[#64151F] tracking-[-0.03em] max-[767px]:mt-6 ${config.heroH1MaxWidthClass ?? 'max-w-[22ch]'}`}
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.1rem,3.3vw,3.1rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                {config.heroH1Bold ? (
                  <>
                    <span className="font-light">{config.heroH1Light}</span>
                    <span className="font-medium">{config.heroH1Bold}</span>
                  </>
                ) : (
                  <span className="font-medium">{config.heroH1Light}</span>
                )}
              </h1>

              <p
                className="m-0 mt-6 max-w-[62ch] text-[#64151F]/78"
                style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
              >
                {config.heroLead}
              </p>

              <div className="mt-8 flex flex-col items-start gap-2.5">
                <div className="flex items-end gap-3">
                  <div
                    className="uppercase text-[#64151F]/70"
                    style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1, paddingBottom: '6px' }}
                  >
                    STARTAS NUO:
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
                    {config.heroPrice}
                  </div>
                </div>
              </div>

              <div className="my-8 h-px w-full bg-[#1A1010]/10 max-[767px]:my-7" aria-hidden />

              <div className="flex flex-wrap items-start gap-8">
                <div className="flex flex-col items-start gap-2.5">
                  <CtaLink href="/tapkite-partneriu" variant="primary" className="min-w-[240px] justify-center">
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
                  <CtaLink href="/kontaktai" variant="outline" className="min-w-[240px] justify-center">
                    Gauti konsultaciją
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/62"
                    style={{ fontSize: '10px', lineHeight: '1.1', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                  >
                    {config.heroCta2Microcopy}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden border border-[#1A1010]/10 min-[992px]:h-[560px] max-[991px]:h-[430px] max-[767px]:h-[320px]">
              <img
                src={config.heroImageSrc}
                alt={config.heroImageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,16,16,0.14)' }} aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <OdosAudienceSection
        cards={config.audienceCards}
        consultTitle={config.audienceConsultTitle}
        consultBody={config.audienceConsultBody}
      />
      <OdosChallengesSection items={config.challenges} />
      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={
          <>
            <span className="font-light">Kaip UNICOS </span>
            <span className="font-medium">tai išsprendžia?</span>
          </>
        }
        subheading={config.responsibleSubheading}
        cards={solutionCards}
      />
      <OdosBrandsSection
        cards={config.brandCards}
        headingLight={config.brandsHeadingLight}
        headingBold={config.brandsHeadingBold}
        subheading={config.brandsSubheading}
        brandsCtaLabel={config.brandsCtaLabel}
      />
      <OdosStarterCalloutSection
        eyebrowLabel={config.starter.eyebrowLabel}
        headingLight={config.starter.headingLight}
        headingBold={config.starter.headingBold}
        description={config.starter.description}
        benefits={config.starter.benefits}
        imageSrc={config.starter.imageSrc}
        imageAlt={config.starter.imageAlt}
        starterPrice={config.starter.starterPrice}
      />
      <ProcessSection />
      <OdosPartnerSpotlightSection
        spotlightHeadingId={spotlightHeadingId}
        statBadge={config.spotlight.statBadge}
        quote={config.spotlight.quote}
        authorName={config.spotlight.authorName}
        authorMeta={config.spotlight.authorMeta}
      />
      <CmsGridSection />
      <FaqSection backgroundClassName="bg-[#EFE8DB]" accent="maroon" />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
