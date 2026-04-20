'use client';

import * as React from 'react';
import { SfCheckboxCheck } from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const BENEFITS = [
  'Populiariausi produktai procedūroms ir namų priežiūrai',
  'Vadybininko rekomendacija pagal veiklos specifiką',
  'Darbo protokolai ir mokymo medžiaga',
  'Galimybė keisti pagal poreikius',
] as const;

export function OdosStarterCalloutSection() {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative z-[2] overflow-hidden bg-[#E8EDE9] py-20 max-[767px]:py-14">
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(232,237,233,0)_0%,rgba(59,68,58,0.06)_100%)]"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={cardRef}
          className={`grid grid-cols-2 gap-x-[132px] gap-y-[132px] border border-[#1A1010]/10 bg-[#3B443A] p-12 text-[#EFE8DB] max-[991px]:gap-x-12 max-[991px]:gap-y-12 max-[991px]:grid-cols-1 max-[767px]:gap-8 max-[767px]:p-8 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          }`}
          style={{ borderRadius: '0px' }}
        >
          <div className="flex max-w-[640px] flex-col items-start justify-between gap-8 max-[767px]:gap-6">
            <div className="flex flex-col items-start gap-8 max-[767px]:gap-6">
              <div className="inline-flex items-center px-2 py-1 border border-[#EFE8DB]/22 bg-[rgba(239,232,219,0.1)]" style={{ borderRadius: '0px' }}>
                <span
                  className="uppercase text-[#EFE8DB]/88"
                  style={{ ...BODY, fontSize: '10px', lineHeight: '12px', fontWeight: 500, letterSpacing: '0.12em' }}
                >
                  Specialus pasiūlymas
                </span>
              </div>

              <h2
                className="m-0 text-[#EFE8DB] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.1rem, 4.2vw, 3.2rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                <span className="font-light">Startinis paketas </span>
                <span className="font-medium">odos specialistams.</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-8 max-[767px]:gap-6">
              <p className="m-0 text-[#EFE8DB]/86" style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
                Nežinote nuo ko pradėti? Paruošėme rinkinį lengvam startui.
              </p>

              <div
                className="inline-flex items-center gap-2 uppercase text-[#EFE8DB]"
                style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}
              >
                <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                Startas nuo 950 €
              </div>

              <div className="h-px w-full bg-[#EFE8DB]/18" aria-hidden />

              <div className="flex flex-col gap-2.5">
                {BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 text-[#EFE8DB]/88">
                    <SfCheckboxCheck size={16} className="mt-[1px] shrink-0 text-[#EFE8DB]" aria-hidden />
                    <span style={{ ...BODY, fontSize: '14px', lineHeight: '1.4', fontWeight: 400 }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-2.5">
                <CtaLink href="/kontaktai" variant="primary">
                  Gauti startinio paketo pasiūlymą
                </CtaLink>
                <span
                  className="uppercase text-[#EFE8DB]/62"
                  style={{ ...BODY, fontSize: '10px', letterSpacing: '0.12em', fontWeight: 500 }}
                >
                  VADYBININKAS SUSISIEKS PER 24 VAL.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden border border-[#EFE8DB]/14 h-[628px] max-[767px]:h-[320px]" style={{ borderRadius: '0px' }}>
            <img
              src="/mega-menu/3.jpeg"
              alt="Specialistė konsultuoja klientę dėl odos priežiūros"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OdosStarterCalloutSection;

