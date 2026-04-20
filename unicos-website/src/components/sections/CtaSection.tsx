'use client';

import * as React from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const FOOTER_BG = '#1A1010';

export function CtaSection() {
  const [sectionRef, visible] = useInViewOnce<HTMLDivElement>({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  const lineClass = 'overflow-visible';

  return (
    <section className="relative z-[1] bg-[#1A1010]">
      <div
        ref={sectionRef}
        className="relative z-[1] flex w-full flex-col items-center justify-center overflow-hidden py-40 max-[767px]:py-28 max-[479px]:py-24"
      >
        <img
          src="/Textured_Green_Powder.png_202604131533.jpeg"
          alt=""
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          loading="lazy"
          aria-hidden
        />

        {/* Tamsus sluoksnis ant vaizdo */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ backgroundColor: 'rgba(26, 16, 16, 0.52)' }}
          aria-hidden
        />

        {/* Gradient į footer spalvą (kaip Franco ref.) */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[min(180px,28vh)]"
          style={{
            backgroundImage: `linear-gradient(0deg, ${FOOTER_BG} 0%, rgba(26, 16, 16, 0.65) 55%, rgba(26, 16, 16, 0) 100%)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[min(100px,16vh)] opacity-90"
          style={{
            backgroundImage: `linear-gradient(0deg, ${FOOTER_BG} 0%, rgba(26, 16, 16, 0) 100%)`,
          }}
          aria-hidden
        />

        <div className="relative z-[3] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="mx-auto flex max-w-[min(649px,100%)] flex-col items-center gap-8 text-center max-[767px]:gap-7">
            <h2
              className="m-0 flex flex-col items-center font-light leading-[0.95] tracking-[-0.02em] text-[#EFE8DB] max-[991px]:text-[clamp(2.5rem,8vw,4rem)] max-[479px]:leading-[1.02]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2.75rem,7vw,5.5rem)',
              }}
            >
              <div className={lineClass}>
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,120%,0)',
                    transitionDelay: '0ms',
                  }}
                >
                  Pasiruošę augti
                </span>
              </div>
              <div className={lineClass}>
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,120%,0)',
                    transitionDelay: '120ms',
                  }}
                >
                  kartu?
                </span>
              </div>
            </h2>

            <p
              className="m-0 max-w-[52ch] text-[#EFE8DB]/85"
              style={{ ...BODY, fontSize: '16px', lineHeight: '1.55', fontWeight: 400 }}
            >
              Prisijunkite prie UNICOS bendruomenės – čia Jūsų laukia išskirtiniai produktai, vertingos žinios ir nuoširdus
              palaikymas.
            </p>

            <div className="flex w-full max-w-[640px] flex-col items-stretch justify-center gap-6 sm:flex-row sm:items-start sm:justify-center sm:gap-8">
              <div className="flex flex-col items-center gap-2.5 sm:items-center">
                <CtaLink href="/kontaktai" variant="primary">
                  Pildyti partnerio paraišką
                </CtaLink>
                <span
                  className="text-center uppercase text-[#EFE8DB]/55"
                  style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                >
                  PATVIRTINIMAS PER 24 VAL.
                </span>
              </div>
              <div className="flex flex-col items-center gap-2.5 sm:items-center">
                <CtaLink href="/kontaktai" variant="glass">
                  Gauti konsultaciją
                </CtaLink>
                <span
                  className="text-center uppercase text-[#EFE8DB]/55"
                  style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                >
                  15 MIN. POREIKIŲ ANALIZĖ
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
