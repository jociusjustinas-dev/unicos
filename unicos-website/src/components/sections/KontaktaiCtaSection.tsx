'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function KontaktaiCtaSection() {
  const [headingRef, headingVisible] = useInViewOnce<HTMLDivElement>();
  const [cardARef, cardAVisible] = useInViewOnce<HTMLDivElement>();
  const [cardBRef, cardBVisible] = useInViewOnce<HTMLDivElement>();
  const [cardCRef, cardCVisible] = useInViewOnce<HTMLDivElement>();

  return (
    <section className="relative z-[2] overflow-x-clip bg-[#ECE2D3] py-20 max-[767px]:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[#3B443A]/[0.05]" aria-hidden />
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="mx-auto w-full max-w-[1120px]">
          <div
            ref={headingRef}
            className="mb-14 flex flex-col gap-4 max-[767px]:mb-10"
            style={{
              opacity: headingVisible ? 1 : 0,
              filter: headingVisible ? 'blur(0px)' : 'blur(12px)',
              transform: headingVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            <h2
              className="m-0 text-[#3B443A] tracking-[-0.03em]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)',
                lineHeight: 1.05,
                fontWeight: 300,
              }}
            >
              O gal jau žinote, ko reikia?
            </h2>
            <p className="m-0 text-[#1A1010]/72" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
              Pasirinkite greičiausią kelią.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-[767px]:grid-cols-1 max-[767px]:gap-3">
            <article
              ref={cardARef}
              className="flex min-h-[480px] flex-col justify-between gap-16 border border-[#64151F]/30 bg-[#64151F] p-8 text-[#EFE8DB] max-[767px]:min-h-0 max-[767px]:gap-8 max-[767px]:p-6"
              style={{
                borderRadius: '0px',
                opacity: cardAVisible ? 1 : 0,
                transform: cardAVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
              }}
            >
              <div className="flex flex-col gap-4">
                <h3
                  className="m-0 tracking-[-0.02em]"
                  style={{
                    fontFamily: "'Quiche Sans', Georgia, serif",
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                    lineHeight: 1.1,
                    fontWeight: 300,
                  }}
                >
                  Tapti partneriu
                </h3>
                <p className="m-0 text-[#EFE8DB]/82" style={{ ...BODY, fontSize: '16px', lineHeight: 1.5, fontWeight: 400 }}>
                  Užpildykite paraišką ir gaukite prieigą per 24 val.
                </p>
              </div>
              <div>
                <CtaLink href="#" variant="secondary">
                  Pildyti paraišką →
                </CtaLink>
              </div>
            </article>

            <article
              ref={cardBRef}
              className="relative flex min-h-[480px] flex-col justify-between gap-16 overflow-hidden border border-[#1A1010]/12 p-8 text-[#EFE8DB] max-[767px]:min-h-0 max-[767px]:gap-8 max-[767px]:p-6"
              style={{
                borderRadius: '0px',
                opacity: cardBVisible ? 1 : 0,
                transform: cardBVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s ease-out 120ms, transform 0.7s ease-out 120ms',
                backgroundImage:
                  "linear-gradient(180deg, rgba(26,16,16,0.28) 0%, rgba(26,16,16,0.66) 100%), url('/mega-menu/3.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#3B443A]/28" aria-hidden />
              <div className="relative z-[1] flex flex-col gap-4">
                <h3
                  className="m-0 tracking-[-0.02em]"
                  style={{
                    fontFamily: "'Quiche Sans', Georgia, serif",
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                    lineHeight: 1.1,
                    fontWeight: 300,
                  }}
                >
                  Gauti konsultaciją
                </h3>
                <p className="m-0 text-[#EFE8DB]/86" style={{ ...BODY, fontSize: '16px', lineHeight: 1.5, fontWeight: 400 }}>
                  15 min. pokalbis apie Jūsų veiklą ir poreikius. Nemokama.
                </p>
              </div>
              <div className="relative z-[1]">
                <CtaLink href="#" variant="primary">
                  Registruotis konsultacijai →
                </CtaLink>
              </div>
            </article>
          </div>

          <article
            ref={cardCRef}
            className="mt-4 flex items-center justify-between gap-6 border border-[#1A1010]/12 bg-[#EFE8DB] p-8 max-[991px]:flex-col max-[991px]:items-start max-[767px]:mt-3 max-[767px]:p-6"
            style={{
              borderRadius: '0px',
              opacity: cardCVisible ? 1 : 0,
              filter: cardCVisible ? 'blur(0px)' : 'blur(10px)',
              transform: cardCVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease-out 220ms, filter 0.7s ease-out 220ms, transform 0.7s ease-out 220ms',
            }}
          >
            <div className="flex flex-col gap-2">
              <h3
                className="m-0 text-[#1A1010] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(1.45rem, 2.5vw, 2rem)',
                  lineHeight: 1.15,
                  fontWeight: 300,
                }}
              >
                Peržiūrėti mokymus
              </h3>
              <p className="m-0 text-[#1A1010]/72" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5, fontWeight: 400 }}>
                Artimiausi seminarai ir registracija.
              </p>
            </div>
            <CtaLink href="#" variant="primary">
              Akademija →
            </CtaLink>
          </article>
        </div>
      </div>
    </section>
  );
}

export default KontaktaiCtaSection;
