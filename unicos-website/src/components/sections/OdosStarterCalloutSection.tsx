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

/** Šiek tiek žalesnis už baltą — kaip ProcessSection juosta. */
const INNER_SURFACE = '#E8EDE9';

export function OdosStarterCalloutSection({
  eyebrowLabel = 'Specialus pasiūlymas',
  headingLight = 'Startinis paketas ',
  headingBold = 'odos specialistams.',
  description = 'Nežinote nuo ko pradėti? Paruošėme rinkinį lengvam startui.',
  benefits = [...BENEFITS],
  imageSrc = '/mega-menu/3.jpeg',
  imageAlt = 'Specialistė konsultuoja klientę dėl odos priežiūros',
}: {
  eyebrowLabel?: string;
  headingLight?: string;
  headingBold?: string;
  description?: string;
  benefits?: readonly string[];
  imageSrc?: string;
  imageAlt?: string;
} = {}) {
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
    <section className="relative z-[2] bg-white py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={cardRef}
          className={`border border-[#3B443A]/10 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
          style={{ borderRadius: '0px', backgroundColor: INNER_SURFACE }}
        >
          <div className="grid grid-cols-2 gap-x-[132px] gap-y-[132px] p-12 text-[#1A1010] max-[991px]:grid-cols-1 max-[991px]:gap-x-12 max-[991px]:gap-y-12 max-[767px]:gap-8 max-[767px]:p-8">
            <div className="flex max-w-[640px] flex-col items-start justify-between gap-8 max-[767px]:gap-6">
              <div className="flex flex-col items-start gap-8 max-[767px]:gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 shrink-0 bg-[#3B443A]" style={{ borderRadius: '0px' }} aria-hidden />
                  <span
                    className="uppercase text-[#3B443A]"
                    style={{ ...BODY, fontSize: '11px', lineHeight: '14px', fontWeight: 500, letterSpacing: '0.12em' }}
                  >
                    {eyebrowLabel}
                  </span>
                </div>

                <h2
                  className="m-0 text-[#3B443A] tracking-[-0.02em]"
                  style={{
                    fontFamily: "'Quiche Sans', Georgia, serif",
                    fontSize: 'clamp(2.1rem, 4.2vw, 3.2rem)',
                    lineHeight: 1.05,
                    fontWeight: 300,
                  }}
                >
                  <span className="font-light">{headingLight}</span>
                  <span className="font-medium">{headingBold}</span>
                </h2>
              </div>

              <div className="flex flex-col items-start gap-8 max-[767px]:gap-6">
                <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
                  {description}
                </p>

                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex items-end gap-3">
                    <div
                      className="uppercase text-[#3B443A]/65"
                      style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1, paddingBottom: '6px' }}
                    >
                      STARTAS NUO
                    </div>
                    <div
                      className="text-[#3B443A]"
                      style={{
                        fontFamily: "'Quiche Sans', Georgia, serif",
                        fontSize: 'clamp(2.3rem, 4vw, 3.2rem)',
                        lineHeight: 1,
                        fontWeight: 300,
                      }}
                    >
                      950 €
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-[#1A1010]/10" aria-hidden />

                <div className="flex flex-col gap-2.5">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 text-[#1A1010]/82">
                      <SfCheckboxCheck size={16} className="mt-[1px] shrink-0 text-[#3B443A]" aria-hidden />
                      <span style={{ ...BODY, fontSize: '14px', lineHeight: '1.4', fontWeight: 400 }}>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-2.5">
                  <CtaLink href="/kontaktai" variant="secondary">
                    Gauti startinio paketo pasiūlymą
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/52"
                    style={{ ...BODY, fontSize: '10px', letterSpacing: '0.12em', fontWeight: 500 }}
                  >
                    VADYBININKAS SUSISIEKS PER 24 VAL.
                  </span>
                </div>
              </div>
            </div>

            <div
              className="h-[628px] w-full overflow-hidden border border-[#3B443A]/14 max-[767px]:h-[320px]"
              style={{ borderRadius: '0px' }}
            >
              <img src={imageSrc} alt={imageAlt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OdosStarterCalloutSection;
