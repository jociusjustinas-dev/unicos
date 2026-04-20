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
import { OdosPartnerSpotlightSection } from '@/components/sections/OdosPartnerSpotlightSection';
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
                className="m-0 mt-6 max-w-[62ch] text-[#64151F]/78"
                style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
              >
                {h.lead}
              </p>

              <dl className="m-0 mt-8 flex flex-col gap-2 border-t border-[#1A1010]/10 pt-8 max-[767px]:mt-7 max-[767px]:pt-7">
                <div>
                  <dt className="sr-only">Šalis</dt>
                  <dd className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '14px', fontWeight: 500, letterSpacing: '0.04em' }}>
                    {h.metaPrimary}
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Statusas</dt>
                  <dd className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '14px', fontWeight: 400 }}>
                    {h.metaSecondary}
                  </dd>
                </div>
              </dl>

              <div className="my-8 h-px w-full bg-[#1A1010]/10 max-[767px]:my-7" aria-hidden />

              <div className="flex flex-wrap items-start gap-8">
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

      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={<SplitHeading light={config.productLines.headingLight} bold={config.productLines.headingBold} />}
        subheading={config.productLines.subheading}
        cards={[...config.productLines.cards]}
        surfaceClassName="bg-[#EFE8DB]"
        accent="maroon"
        showGuidanceRow={false}
      />

      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={<SplitHeading light={config.fitFor.headingLight} bold={config.fitFor.headingBold} />}
        subheading={null}
        cards={[...config.fitFor.cards]}
        surfaceClassName="bg-white"
        accent="maroon"
        showGuidanceRow={false}
      />

      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={<SplitHeading light={config.partner.headingLight} bold={config.partner.headingBold} />}
        subheading={config.partner.subheading}
        cards={[...config.partner.cards]}
        surfaceClassName="bg-[#EFE8DB]"
        accent="maroon"
        showGuidanceRow={false}
      />

      <section className="relative z-[2] bg-[#3B443A] py-16 text-[#EFE8DB] max-[767px]:py-14">
        <div className="relative z-[2] mx-auto grid w-full max-w-[1028px] grid-cols-1 gap-10 px-16 max-[767px]:px-6 max-[479px]:px-4 md:grid-cols-3 md:gap-8">
          {config.stats.items.map((s) => (
            <div key={s.label} className="flex flex-col gap-2 text-center md:text-left">
              <div
                className="text-[#EFE8DB]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                {s.value}
                <span className="font-medium"> {s.label}</span>
              </div>
              <p className="m-0 text-[#EFE8DB]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5, fontWeight: 400 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={<SplitHeading light={config.quality.headingLight} bold={config.quality.headingBold} />}
        subheading={config.quality.subheading}
        cards={[...config.quality.cards]}
        surfaceClassName="bg-white"
        accent="maroon"
        showGuidanceRow={false}
      />

      <section className="relative z-[2] border-t border-[#1A1010]/10 bg-white py-14 max-[767px]:py-12">
        <div className="relative z-[2] mx-auto w-full max-w-[720px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <h3
            className="m-0 text-[#64151F]"
            style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: 'clamp(1.35rem,2.2vw,1.65rem)', fontWeight: 300, lineHeight: 1.15 }}
          >
            {config.quality.extraTitle}
          </h3>
          <ul className="m-0 mt-5 list-none space-y-2 p-0" style={BODY}>
            {config.quality.extraBullets.map((line) => (
              <li key={line} className="relative pl-5 text-[#1A1010]/82" style={{ fontSize: '15px', lineHeight: 1.5 }}>
                <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-[#1A1010]/10 pt-10">
            <h4 className="m-0 text-[#64151F]" style={{ ...BODY, fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {config.quality.certificationTitle}
            </h4>
            <p className="m-0 mt-3 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55 }}>
              {config.quality.certificationBody}
            </p>
            <div className="mt-6">
              <CtaLink href={config.quality.certificationCta.href} variant="secondary">
                {config.quality.certificationCta.label}
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

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
