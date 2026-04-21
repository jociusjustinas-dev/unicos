'use client';

import * as React from 'react';
import { SfChatScience, SfLayers, SfShield } from '@/components/icons/feather';
import type { Challenges3 } from '@/config/sprendimaiSolutionLanding';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const defaultChallenges: Challenges3 = [
  {
    label: 'Per daug pasirinkimų, per mažai aiškumo',
    paragraph:
      'Šimtai ženklų, niekur neparašyta, kas veikia profesionalioje procedūroje, gaištate bandydami ir klysdami.',
  },
  {
    label: 'Produktas be palaikymo',
    paragraph:
      'Nusipirkote, bet negavote nei protokolo, nei mokymo, dirbate intuicija ir rizikuojate reputacija.',
  },
  {
    label: 'Tiekėjas, o ne partneris',
    paragraph:
      'Reikia ne tik dėžučių, bet ir atsakymo, žmogaus, kuris supranta kasdienybę ir padeda augti.',
  },
];

const challengeIcons = [SfLayers, SfShield, SfChatScience] as const;

export function OdosChallengesSection({
  items = defaultChallenges,
  heading,
  imageSrc = '/mega-menu/2.jpeg',
  imageAlt = 'Specialistės darbas su klientu',
  belowAccordion,
  belowAccordionHasDivider = true,
}: {
  items?: Challenges3;
  /** Numatyta: „Pažįstama situacija?“. */
  heading?: React.ReactNode;
  /** Dešinėje nuotraukos stulpelyje. */
  imageSrc?: string;
  imageAlt?: string;
  /** Po akordeono sąrašu (pvz. nuoroda į kontaktus). */
  belowAccordion?: React.ReactNode;
  /** Ar rodyti skyriklį virš `belowAccordion`. */
  belowAccordionHasDivider?: boolean;
} = {}) {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([0]);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [cardVisible, setCardVisible] = React.useState(false);

  React.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <section className="relative z-[2] bg-[#1A1010]">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 py-28 max-[991px]:py-20 max-[767px]:px-6 max-[767px]:py-16 max-[479px]:px-4">
        <div
          ref={cardRef}
          className={`grid w-full grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] items-stretch gap-[150px] text-[#EFE8DB] max-[991px]:grid-cols-1 max-[991px]:gap-12 max-[767px]:gap-8 transition-all duration-700 ease-out ${
            cardVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          }`}
        >
          <div className="flex min-h-[620px] min-w-0 flex-col items-start justify-between gap-10 max-[991px]:min-h-0 max-[991px]:gap-8">
            <h2
              className="m-0 text-[#EFE8DB]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
                fontWeight: 300,
              }}
            >
              {heading ?? (
                <>
                  <span className="font-light">Pažįstama </span>
                  <span className="font-medium">situacija?</span>
                </>
              )}
            </h2>

            <div className="flex w-full max-w-[530px] flex-col gap-4 max-[767px]:gap-3">
              {items.map((item, i) => {
                const isOpen = openIndexes.includes(i);
                const Icon = challengeIcons[i % challengeIcons.length];
                return (
                  <div
                    key={item.label}
                    className="cursor-pointer pt-4 max-[767px]:pt-3"
                    onClick={() => handleToggle(i)}
                  >
                    <div className="flex items-center justify-between gap-6 border-b border-[#EFE8DB]/16 pb-4 max-[767px]:gap-4 max-[767px]:pb-3">
                      <div className="flex items-center gap-4 max-[767px]:gap-3">
                        <div className="flex h-6 w-6 flex-none items-center justify-center text-[#EFE8DB] max-[767px]:h-5 max-[767px]:w-5">
                          <Icon size={20} className="text-current" aria-hidden />
                        </div>
                        <div
                          className="m-0 text-[#EFE8DB]"
                          style={{ ...BODY, fontSize: '20px', lineHeight: '28px', fontWeight: 500 }}
                        >
                          {item.label}
                        </div>
                      </div>

                      <div className="relative flex h-6 w-6 flex-none items-center justify-center max-[767px]:h-5 max-[767px]:w-5">
                        <div className="absolute h-px w-[70%] bg-[#EFE8DB]" />
                        <div
                          className="absolute h-px w-[70%] bg-[#EFE8DB] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{
                            transform: isOpen ? 'rotate(90deg) scaleX(0)' : 'rotate(90deg) scaleX(1)',
                            opacity: isOpen ? 0 : 1,
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`pt-5 text-[#EFE8DB]/70 max-[767px]:pt-4 transition-opacity duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                          style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                        >
                          {item.paragraph}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {belowAccordion ? (
                <div
                  className={`w-full pt-8 max-[767px]:pt-6 ${belowAccordionHasDivider ? 'border-t border-[#EFE8DB]/16' : ''}`}
                >
                  {belowAccordion}
                </div>
              ) : null}
            </div>
          </div>

          <div className="relative min-h-[620px] overflow-hidden border border-[#EFE8DB]/14 max-[991px]:min-h-[420px] max-[767px]:min-h-[320px]" style={{ borderRadius: '0px' }}>
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,16,0.08),rgba(26,16,16,0.22))]" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OdosChallengesSection;

