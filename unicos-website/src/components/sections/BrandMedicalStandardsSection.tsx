'use client';

import * as React from 'react';
import { SfActivity, SfArrowRight, SfAward, SfQualityRibbon, SfShield } from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';
import type { PrekiuZenklaiBrandLandingConfig } from '@/config/prekiuZenklaiBrandLanding';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

type Quality = PrekiuZenklaiBrandLandingConfig['quality'];

const CARD_ICONS = [SfShield, SfQualityRibbon, SfAward, SfActivity] as const;

export function BrandMedicalStandardsSection({ quality }: { quality: Quality }) {
  return (
    <section className="relative z-[2] bg-[#EFE8DB] py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex min-w-0 flex-col gap-8 max-[991px]:gap-7">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
              <span
                className="uppercase text-[#64151F]/80"
                style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
              >
                {quality.splitEyebrow}
              </span>
            </div>

            <h2
              className="m-0 max-w-[22ch] text-[#64151F] tracking-[-0.02em] max-[991px]:max-w-none"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
                lineHeight: 1.06,
                fontWeight: 300,
              }}
            >
              <span className="font-light">{quality.headingLight}</span>
              <span className="font-medium">{quality.headingBold}</span>
            </h2>

            <p className="m-0 max-w-[52ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
              {quality.subheading}
            </p>

            <div>
              <CtaLink
                href={quality.splitPrimaryCta.href}
                variant="primary"
                labelMode="static"
                className="min-w-[240px] justify-center px-8"
              >
                <span className="inline-flex items-center justify-center gap-2.5">
                  <span>{quality.splitPrimaryCta.label}</span>
                  <SfArrowRight size={18} className="shrink-0 text-[#EFE8DB]" aria-hidden />
                </span>
              </CtaLink>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
              {quality.cards.map((card, i) => {
                const Icon = CARD_ICONS[i % CARD_ICONS.length]!;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col gap-4 border border-[#1A1010]/10 bg-[#ECE2D3]/50 p-6 max-[767px]:gap-3 max-[767px]:p-5"
                    style={{ borderRadius: '0px' }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#64151F]/22 bg-[rgba(100,21,31,0.06)] text-[#64151F]"
                      style={{ borderRadius: '0px' }}
                    >
                      <Icon size={22} className="shrink-0 overflow-visible" aria-hidden />
                    </div>
                    <h3 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '17px', lineHeight: '1.25', fontWeight: 600 }}>
                      {card.title}
                    </h3>
                    <p className="m-0 text-[#1A1010]/72" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="relative min-h-[min(360px,55vw)] w-full overflow-hidden border border-[#1A1010]/10 lg:min-h-[min(640px,72vh)]"
            style={{ borderRadius: '0px' }}
          >
            <img
              src={quality.splitImageSrc}
              alt={quality.splitImageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,16,0.06),rgba(26,16,16,0.2))]" aria-hidden />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[920px] border-t border-[#1A1010]/10 pt-14 max-[767px]:mt-12 max-[767px]:pt-10">
          <h3
            className="m-0 text-[#64151F]"
            style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)', fontWeight: 300, lineHeight: 1.15 }}
          >
            {quality.extraTitle}
          </h3>
          <ul className="m-0 mt-5 list-none space-y-2 p-0" style={BODY}>
            {quality.extraBullets.map((line) => (
              <li key={line} className="relative pl-5 text-[#1A1010]/82" style={{ fontSize: '15px', lineHeight: 1.5 }}>
                <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-[#1A1010]/10 pt-10">
            <h4
              className="m-0 text-[#64151F]"
              style={{ ...BODY, fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              {quality.certificationTitle}
            </h4>
            <p className="m-0 mt-3 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55 }}>
              {quality.certificationBody}
            </p>
            <div className="mt-6">
              <CtaLink href={quality.certificationCta.href} variant="outline" labelMode="static" className="min-w-[220px] justify-center">
                {quality.certificationCta.label}
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandMedicalStandardsSection;
