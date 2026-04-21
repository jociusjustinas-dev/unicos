'use client';

import * as React from 'react';
import { SfActivity, SfAward, SfQualityRibbon, SfShield, SfSparkles } from '@/components/icons/feather';
import type { PrekiuZenklaiBrandLandingConfig } from '@/config/prekiuZenklaiBrandLanding';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const GREEN = '#3B443A';

const docLinkClass =
  'inline-flex w-full max-w-full items-center justify-center border border-[#EFE8DB]/35 bg-transparent px-4 py-2.5 text-center text-[14px] font-medium leading-snug text-[#EFE8DB] no-underline transition-[background-color,border-color] duration-200 hover:border-[#EFE8DB]/55 hover:bg-[#EFE8DB]/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFE8DB]/50 sm:w-auto sm:justify-start sm:text-left';

type Quality = PrekiuZenklaiBrandLandingConfig['quality'];

const CARD_ICONS = [SfShield, SfQualityRibbon, SfAward, SfActivity] as const;

export function BrandMedicalStandardsSection({ quality }: { quality: Quality }) {
  return (
    <section className="relative z-[2] bg-white py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-x-[min(8.25rem,7vw)] lg:gap-y-0">
          <div className="flex min-w-0 flex-col gap-8 max-[991px]:gap-7">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 bg-[#3B443A]" style={{ borderRadius: '0px' }} aria-hidden />
              <span
                className="uppercase text-[#3B443A]"
                style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
              >
                {quality.splitEyebrow}
              </span>
            </div>

            <h2
              className="m-0 max-w-[22ch] tracking-[-0.02em] max-[991px]:max-w-none"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
                lineHeight: 1.06,
                fontWeight: 300,
                color: GREEN,
              }}
            >
              <span className="font-light">{quality.headingLight}</span>
              <span className="font-medium">{quality.headingBold}</span>
            </h2>

            <p className="m-0 max-w-[52ch] text-[#1A1010]/80" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
              {quality.subheading}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
              {quality.cards.map((card, i) => {
                const Icon = CARD_ICONS[i % CARD_ICONS.length]!;
                return (
                  <div
                    key={card.title}
                    className="flex flex-row items-start gap-4 border border-[#3B443A]/18 bg-[rgba(59,68,58,0.06)] p-5 max-[767px]:gap-3 max-[767px]:p-4"
                    style={{ borderRadius: '0px' }}
                  >
                    <div
                      className="grid h-14 w-14 shrink-0 place-items-center overflow-visible border border-[#3B443A]/20 bg-[rgba(59,68,58,0.1)] p-2 text-[#3B443A] max-[767px]:h-12 max-[767px]:w-12 max-[767px]:p-1.5"
                      style={{ borderRadius: '0px' }}
                    >
                      <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center overflow-visible">
                        <Icon size={22} strokeWidth={1.75} className="overflow-visible" aria-hidden />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <h3 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '15px', lineHeight: '1.35', fontWeight: 500 }}>
                        {card.title}
                      </h3>
                      <p className="m-0 text-sm leading-5 text-[#1A1010]/65" style={{ ...BODY, fontWeight: 400 }}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="w-full min-w-0">
            <div
              className="flex min-h-[min(360px,55vw)] w-full flex-col border border-[#1A1010]/12 bg-[#3B443A] p-8 text-[#EFE8DB] max-[767px]:min-h-0 max-[767px]:p-6 lg:min-h-[min(640px,72vh)] lg:p-9"
              style={{ borderRadius: '0px' }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-2.5">
                  <SfSparkles size={20} className="mt-0.5 shrink-0 text-[#EFE8DB]/85" aria-hidden />
                  <h3
                    className="m-0 text-[#EFE8DB]"
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

              <div className="my-8 h-px w-full shrink-0 bg-[#EFE8DB]/15" aria-hidden />

              <div className="flex flex-1 flex-col gap-3">
                <h4
                  className="m-0 text-[#EFE8DB] tracking-[-0.02em]"
                  style={{
                    fontFamily: "'Quiche Sans', Georgia, serif",
                    fontSize: 'clamp(1.5rem, 2.4vw, 1.85rem)',
                    fontWeight: 400,
                    lineHeight: 1.12,
                  }}
                >
                  {quality.certificationTitle}
                </h4>
                <p className="m-0 text-[#EFE8DB]/80" style={{ ...BODY, fontSize: '14px', lineHeight: 1.55, fontWeight: 400 }}>
                  {quality.certificationBody}
                </p>
              </div>

              <div className="my-8 h-px w-full shrink-0 bg-[#EFE8DB]/15" aria-hidden />

              <div className="mt-auto pt-0">
                <a
                  href={quality.certificationCta.href}
                  className="inline-flex min-h-[48px] w-full max-w-full items-center justify-center border border-transparent bg-[#EFE8DB] px-6 py-3 text-center text-[15px] font-medium leading-snug text-[#3B443A] no-underline transition-[background-color,color] duration-200 hover:bg-[#E4DDD0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFE8DB] sm:w-auto"
                  style={{ borderRadius: '0px' }}
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
