'use client';

import * as React from 'react';
import {
  SfActivity,
  SfArrowRight,
  SfAward,
  SfQualityRibbon,
  SfShield,
  SfSparkles,
} from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';
import type { PrekiuZenklaiBrandLandingConfig } from '@/config/prekiuZenklaiBrandLanding';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const docLinkClass =
  'inline-flex w-full max-w-full items-center justify-center rounded-full border border-transparent bg-[#EFE8DB] px-4 py-2.5 text-center text-[14px] font-medium leading-snug text-[#1A1010] no-underline transition-[background-color,color] duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFE8DB] sm:w-auto sm:justify-start sm:text-left';

type Quality = PrekiuZenklaiBrandLandingConfig['quality'];

const CARD_ICONS = [SfShield, SfQualityRibbon, SfAward, SfActivity] as const;

export function BrandMedicalStandardsSection({ quality }: { quality: Quality }) {
  return (
    <section className="relative z-[2] bg-[#EFE8DB] py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 flex min-w-0 flex-col gap-8 max-[991px]:gap-7 lg:order-2">
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

          <aside className="order-2 w-full min-w-0 lg:order-1">
            <div
              className="flex min-h-[min(360px,55vw)] w-full flex-col border border-[#0f1612]/40 bg-[#1c2621] p-8 text-[#F7F2EA] shadow-[0_24px_60px_rgba(26,16,16,0.12)] max-[767px]:min-h-0 max-[767px]:p-6 lg:min-h-[min(640px,72vh)] lg:p-9"
              style={{ borderRadius: '20px' }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-2.5">
                  <SfSparkles size={20} className="mt-0.5 shrink-0 text-[#EFE8DB]/75" aria-hidden />
                  <h3
                    className="m-0 text-[#F7F2EA]"
                    style={{ ...BODY, fontSize: '15px', fontWeight: 600, letterSpacing: '0.02em', lineHeight: 1.35 }}
                  >
                    {quality.extraTitle}
                  </h3>
                </div>
                <nav className="flex flex-col gap-2.5" aria-label="Klinikinė dokumentacija">
                  {quality.extraDocLinks.map((link) => (
                    <a key={link.label} href={link.href} className={docLinkClass}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="my-8 h-px w-full shrink-0 bg-[#F7F2EA]/12" aria-hidden />

              <div className="flex flex-1 flex-col gap-3">
                <h4
                  className="m-0 text-[#F7F2EA] tracking-[-0.02em]"
                  style={{
                    fontFamily: "'Quiche Sans', Georgia, serif",
                    fontSize: 'clamp(1.5rem, 2.4vw, 1.85rem)',
                    fontWeight: 400,
                    lineHeight: 1.12,
                  }}
                >
                  {quality.certificationTitle}
                </h4>
                <p className="m-0 text-[#F7F2EA]/78" style={{ ...BODY, fontSize: '14px', lineHeight: 1.55, fontWeight: 400 }}>
                  {quality.certificationBody}
                </p>
              </div>

              <div className="my-8 h-px w-full shrink-0 bg-[#F7F2EA]/12" aria-hidden />

              <div className="mt-auto pt-0">
                <a
                  href={quality.certificationCta.href}
                  className={`${docLinkClass} min-h-[48px] px-6 py-3 text-[15px]`}
                >
                  {quality.certificationCta.label}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default BrandMedicalStandardsSection;
