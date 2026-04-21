'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export type ConsultStripContent = {
  title: string;
  body: string;
  portraitSrc: string;
  portraitAlt: string;
  cta: { href: string; label: string };
};

/** Kompaktiška konsultacijos juosta — tas pats max plotis ir dviejų stulpelių išdėstymas kaip „Atsakingas grožis“ home. */
export function BrandPartnerConsultStrip({ strip }: { strip: ConsultStripContent }) {
  return (
    <section className="relative z-[2] bg-white py-10 max-[767px]:py-8" style={BODY}>
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="mx-auto grid w-full max-w-[1028px] grid-cols-1 items-center gap-8 max-[639px]:gap-6 sm:grid-cols-2 sm:gap-10">
          <div className="flex min-w-0 items-center gap-5 max-[479px]:gap-4">
            <div
              className="relative h-14 w-14 shrink-0 overflow-hidden border border-[#1A1010]/10 bg-[#EFE8DB]/60 max-[479px]:h-12 max-[479px]:w-12"
              style={{ borderRadius: '0px' }}
            >
              <img src={strip.portraitSrc} alt={strip.portraitAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="min-w-0 flex-1 text-left">
              <p className="m-0 font-medium leading-snug text-[#1A1010]" style={{ ...BODY, fontSize: '15px' }}>
                {strip.title}
              </p>
              <p
                className="m-0 mt-1 leading-relaxed text-[#1A1010]/65 max-[479px]:text-[13px]"
                style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}
              >
                {strip.body}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-stretch sm:justify-end">
            <CtaLink
              href={strip.cta.href}
              variant="secondary"
              labelMode="static"
              className="min-w-[180px] justify-center max-[639px]:w-full"
            >
              {strip.cta.label}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandPartnerConsultStrip;
