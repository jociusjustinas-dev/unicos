'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';
import type { PrekiuZenklaiBrandLandingConfig } from '@/config/prekiuZenklaiBrandLanding';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

type ConsultStrip = NonNullable<PrekiuZenklaiBrandLandingConfig['partner']['consultStrip']>;

export function BrandPartnerConsultStrip({ strip }: { strip: ConsultStrip }) {
  return (
    <section className="relative z-[2] border-t border-[#1A1010]/10 bg-[#EFE8DB] py-16 max-[767px]:py-14" style={BODY}>
      <div className="relative z-[2] mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-10 px-16 max-[991px]:gap-8 max-[767px]:px-6 max-[479px]:px-4 lg:grid-cols-[1fr_minmax(280px,0.42fr)] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-5 max-[991px]:max-w-[52ch]">
          <h2
            className="m-0 text-[#64151F] tracking-[-0.02em]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(1.65rem, 2.6vw, 2.1rem)',
              lineHeight: 1.1,
              fontWeight: 300,
            }}
          >
            {strip.title}
          </h2>
          <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
            {strip.body}
          </p>
          <div className="pt-1">
            <CtaLink href={strip.cta.href} variant="primary" labelMode="static" className="min-w-[220px] justify-center">
              {strip.cta.label}
            </CtaLink>
          </div>
        </div>

        <figure
          className="relative m-0 aspect-[4/5] w-full min-h-[280px] overflow-hidden border border-[#1A1010]/10 max-[991px]:max-h-[420px] max-[991px]:min-h-0 lg:min-h-[360px]"
          style={{ borderRadius: '0px' }}
        >
          <img src={strip.portraitSrc} alt={strip.portraitAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
          <div className="pointer-events-none absolute inset-0 bg-[rgba(26,16,16,0.06)]" aria-hidden />
        </figure>
      </div>
    </section>
  );
}

export default BrandPartnerConsultStrip;
