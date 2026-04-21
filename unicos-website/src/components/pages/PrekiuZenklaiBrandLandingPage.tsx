'use client';

import * as React from 'react';
import Link from 'next/link';
import type { PrekiuZenklaiBrandLandingConfig } from '@/config/prekiuZenklaiBrandLanding';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CmsGridSection } from '@/components/sections/CmsGridSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { OdosAudienceSection } from '@/components/sections/OdosAudienceSection';
import { OdosChallengesSection } from '@/components/sections/OdosChallengesSection';
import { OdosPartnerSpotlightSection } from '@/components/sections/OdosPartnerSpotlightSection';
import { BrandStatsMarqueeSection } from '@/components/sections/BrandStatsMarqueeSection';
import { BrandMedicalStandardsSection } from '@/components/sections/BrandMedicalStandardsSection';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

function SplitHeading({ light, bold }: { light: string; bold: string }) {
  return (
    <>
      <span className="font-light">{light}</span>
      <span className="font-medium">{bold}</span>
    </>
  );
}

export function PrekiuZenklaiBrandLandingPage({ config }: { config: PrekiuZenklaiBrandLandingConfig }) {
  const spotlightHeadingId = `${config.hero.htmlIdPrefix}-spotlight-heading`;
  const h = config.hero;

  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />

      <section
        className="relative z-[2] overflow-x-clip pt-40 pb-28 max-[767px]:pt-32 max-[767px]:pb-20"
        style={{ backgroundColor: '#EFE8DB' }}
      >
        <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="flex w-full flex-row items-stretch gap-16 max-[991px]:flex-col max-[991px]:gap-12">
            <div className="flex min-w-0 flex-1 flex-col pb-8 max-[991px]:pb-0">
              <nav className="mb-0" aria-label="Breadcrumb">
                <ol className="m-0 flex list-none flex-wrap items-center gap-3 p-0">
                  <li>
                    <Link
                      href="/prekiu-zenklai"
                      className="uppercase text-[#64151F] transition-opacity hover:opacity-80"
                      style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                    >
                      Prekių ženklai
                    </Link>
                  </li>
                  <li className="text-[#1A1010]/45" style={{ ...BODY, fontSize: '11px', fontWeight: 400 }}>
                    /
                  </li>
                  <li>
                    <span
                      className="uppercase text-[#64151F]"
                      style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                      aria-current="page"
                    >
                      {config.breadcrumbLabel}
                    </span>
                  </li>
                </ol>
              </nav>

              <div className="mb-10 max-[767px]:mb-8" aria-hidden />

              <h1
                className="m-0 max-w-[min(100%,40ch)] text-[#64151F] tracking-[-0.03em]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.1rem,3.3vw,3.1rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                <SplitHeading light={h.h1Light} bold={h.h1Bold} />
              </h1>

              <p
                className="m-0 mt-6 max-w-[62ch] text-[#1A1010]/78"
                style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
              >
                {h.lead}
              </p>

              <div className="mt-10 flex flex-wrap items-start gap-8 max-[767px]:mt-8">
                <div className="flex flex-col items-start gap-2.5">
                  <CtaLink href={h.ctaPrimary.href} variant="primary" className="min-w-[240px] justify-center">
                    {h.ctaPrimary.label}
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/62"
                    style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                  >
                    {h.ctaPrimary.microcopy}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-2.5">
                  <CtaLink href={h.ctaSecondary.href} variant="outline" className="min-w-[240px] justify-center">
                    {h.ctaSecondary.label}
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/62"
                    style={{ fontSize: '10px', lineHeight: '1.1', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                  >
                    {h.ctaSecondary.microcopy}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden border border-[#1A1010]/10 min-[992px]:h-[560px] max-[991px]:h-[430px] max-[767px]:h-[320px]">
              <img src={h.heroImageSrc} alt={h.heroImageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,16,16,0.14)' }} aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={<SplitHeading light={config.why.headingLight} bold={config.why.headingBold} />}
        subheading={null}
        cards={[...config.why.cards]}
        surfaceClassName="bg-white"
        accent="maroon"
        showGuidanceRow={false}
      />

      <OdosAudienceSection
        cards={config.productLines.audienceCards}
        heading={<SplitHeading light={config.productLines.headingLight} bold={config.productLines.headingBold} />}
        subheading={config.productLines.subheading}
        consultTitle="Reikia Guinot asortimento konsultacijos?"
        consultBody="Padėsime išsirinkti linijas procedūroms ir namų priežiūrai."
      />

      <OdosChallengesSection
        items={config.fitFor.situationItems}
        heading={<SplitHeading light={config.fitFor.headingLight} bold={config.fitFor.headingBold} />}
      />

      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={<SplitHeading light={config.partner.headingLight} bold={config.partner.headingBold} />}
        subheading={config.partner.subheading}
        cards={[...config.partner.cards]}
        surfaceClassName="bg-[#E8EDE9]"
        accent="green"
        showGuidanceRow={false}
      />

      <BrandStatsMarqueeSection items={config.stats.items} />

      <BrandMedicalStandardsSection quality={config.quality} />

      <OdosPartnerSpotlightSection
        spotlightHeadingId={spotlightHeadingId}
        statBadge={config.spotlight.statBadge}
        quote={config.spotlight.quote}
        authorName={config.spotlight.authorName}
        authorMeta={config.spotlight.authorMeta}
        portraitSrc={config.spotlight.portraitSrc}
        portraitAlt={config.spotlight.portraitAlt}
        footnote=""
      />

      <section className="relative z-[2] bg-[#EFE8DB] py-16 max-[767px]:py-14">
        <div className="relative z-[2] mx-auto flex w-full max-w-[720px] flex-col items-center gap-6 px-16 text-center max-[767px]:px-6 max-[479px]:px-4">
          <h2
            className="m-0 text-[#64151F]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              lineHeight: 1.08,
              fontWeight: 300,
            }}
          >
            <SplitHeading light={config.trainings.headingLight} bold={config.trainings.headingBold} />
          </h2>
          <p className="m-0 max-w-[52ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}>
            {config.trainings.body}
          </p>
          <CtaLink href={config.trainings.ctaHref} variant="outline">
            {config.trainings.ctaLabel}
          </CtaLink>
        </div>
      </section>

      <CmsGridSection />
      <FaqSection backgroundClassName="bg-[#EFE8DB]" accent="maroon" />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
