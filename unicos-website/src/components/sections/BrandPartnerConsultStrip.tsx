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

/** Kompaktiška konsultacijos juosta: portretas | antraštė + tekstas | CTA (baltas fonas, be didelės dviejų stulpelių sekcijos). */
export function BrandPartnerConsultStrip({ strip }: { strip: ConsultStripContent }) {
  return (
    <section className="relative z-[2] border-t border-[#1A1010]/10 bg-white py-9 max-[767px]:py-7" style={BODY}>
      <div className="relative z-[2] mx-auto flex w-full max-w-[1800px] flex-col items-stretch gap-6 px-16 max-[767px]:px-6 max-[479px]:px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div className="flex min-w-0 flex-1 items-center gap-5 max-[479px]:gap-4">
          <div
            className="relative h-14 w-14 shrink-0 overflow-hidden border border-[#1A1010]/10 bg-[#EFE8DB]/60"
            style={{ borderRadius: '0px' }}
          >
            <img src={strip.portraitSrc} alt={strip.portraitAlt} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="m-0 font-medium leading-snug text-[#1A1010]" style={{ ...BODY, fontSize: '15px' }}>
              {strip.title}
            </p>
            <p
              className="m-0 mt-1 max-w-[62ch] leading-relaxed text-[#1A1010]/65 max-[479px]:text-[13px]"
              style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}
            >
              {strip.body}
            </p>
          </div>
        </div>
        <div className="shrink-0 max-[639px]:w-full max-[639px]:[&>a]:w-full max-[639px]:[&>a]:justify-center">
          <CtaLink href={strip.cta.href} variant="secondary" labelMode="static" className="min-w-[180px] justify-center">
            {strip.cta.label}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

export default BrandPartnerConsultStrip;
