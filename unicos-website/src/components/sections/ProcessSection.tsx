'use client';

import * as React from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

type Step = {
  number: string;
  title: string;
  intro: string;
  bullets: string[];
};

type ProcessStepInput = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  heading?: React.ReactNode;
  introText?: string | null;
  steps?: ProcessStepInput[];
  ctaLabel?: string | null;
  ctaHref?: string;
};

const steps: Step[] = [
  {
    number: '1',
    title: 'Paraiška',
    intro: 'Užpildykite trumpą partnerio anketą mūsų svetainėje.',
    bullets: ['Įmonės rekvizitai / IV pažyma', 'Veiklos aprašymas'],
  },
  {
    number: '2',
    title: 'Patikra',
    intro: 'Peržiūrėsime Jūsų duomenis ir kvalifikaciją.',
    bullets: ['Trukmė: 1–2 darbo dienos', 'Rankinė specialistų patikra'],
  },
  {
    number: '3',
    title: 'Aktyvavimas',
    intro: 'Pasirašome bendradarbiavimo sutartį ir priskiriame Jums atsakingą vadybininką.',
    bullets: ['Prieiga prie didmeninių kainų', 'Savitarnos portalo atvėrimas'],
  },
  {
    number: '4',
    title: 'Įvedimas',
    intro: 'Su Jumis susisieks asmeninis vadybininkas ir padės žengti pirmuosius žingsnius.',
    bullets: ['Pirmojo krepšelio formavimas', 'Supažindinimas su lojalumu'],
  },
];

const reveal = (visible: boolean, delayMs = 0) =>
  ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
  }) satisfies React.CSSProperties;

export function ProcessSection({
  heading,
  introText,
  steps: inputSteps,
  ctaLabel,
  ctaHref = '#kontaktai',
}: Props) {
  const [headingRef, headingVisible] = useInViewOnce<HTMLDivElement>();
  const [processRef, processVisible] = useInViewOnce<HTMLDivElement>();
  const [lineRef, lineVisible] = useInViewOnce<HTMLDivElement>();
  const [step0Ref, step0Visible] = useInViewOnce<HTMLDivElement>();
  const [step1Ref, step1Visible] = useInViewOnce<HTMLDivElement>();
  const [step2Ref, step2Visible] = useInViewOnce<HTMLDivElement>();
  const [step3Ref, step3Visible] = useInViewOnce<HTMLDivElement>();
  const [ctaRef, ctaVisible] = useInViewOnce<HTMLDivElement>();

  const stepRefs = [
    [step0Ref, step0Visible],
    [step1Ref, step1Visible],
    [step2Ref, step2Visible],
    [step3Ref, step3Visible],
  ] as const;

  const resolvedHeading =
    heading ??
    <>
      <span className="font-medium text-[#3B443A]">Kaip tapti </span>
      <span className="font-light text-[#3B443A]">partneriu?</span>
    </>;

  const resolvedIntro = introText === null ? null : introText ?? 'Paprastas ir aiškus kelias partnerystės link.';

  const resolvedSteps: Step[] = React.useMemo(() => {
    if (!inputSteps?.length) return steps;

    const normalized = new Array(4).fill(null).map((_, i) => inputSteps[i] ?? inputSteps[0] ?? { number: String(i + 1), title: '', description: '' });
    return normalized.map((s) => ({
      number: s.number,
      title: s.title,
      intro: s.description,
      bullets: [],
    }));
  }, [inputSteps]);

  const resolvedCtaLabel = ctaLabel === null ? null : ctaLabel ?? 'Pradėti registraciją';

  return (
    <section
      id="partnerystes-kelias"
      className="relative z-[2] overflow-x-clip bg-[#E8EDE9] py-[clamp(5rem,12vw,7.5rem)] text-[#1A1010] max-[479px]:py-20"
    >
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headingRef}
          className="mx-auto mb-16 flex max-w-[52rem] flex-col items-center gap-4 text-center max-[767px]:mb-14 max-[479px]:mb-12"
          style={reveal(headingVisible)}
        >
          <h2
            className="m-0 leading-[1.12] tracking-[-0.02em] max-[767px]:leading-[1.15]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 300,
            }}
          >
            {resolvedHeading}
          </h2>
          {resolvedIntro ? (
            <p
              className="m-0 max-w-[40ch] text-[#1A1010]/80"
              style={{ ...BODY, fontSize: 'clamp(16px, 1.5vw, 18px)', lineHeight: 1.55, fontWeight: 400 }}
            >
              {resolvedIntro}
            </p>
          ) : null}
        </div>

        <div ref={processRef} className="relative" style={reveal(processVisible, 40)}>
          {/* Jungianti linija — tik kai visi 4 stulpeliai vienoje eilėje */}
          <div
            ref={lineRef}
            className="pointer-events-none absolute left-[8%] top-[39px] z-[0] hidden h-px w-[84%] bg-[#1A1010]/18 min-[1024px]:block"
            style={{
              opacity: lineVisible ? 1 : 0,
              transition: 'opacity 0.7s ease-out',
            }}
            aria-hidden
          />

          <div className="relative z-[1] grid grid-cols-1 gap-16 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4 min-[640px]:gap-x-10 min-[640px]:gap-y-16 min-[1024px]:gap-x-6 min-[1024px]:gap-y-0">
            {resolvedSteps.map((step, i) => {
              const [ref, vis] = stepRefs[i];
              return (
                <div
                  key={step.number}
                  ref={ref}
                  className="mx-auto flex w-full max-w-[22rem] flex-col items-center gap-6 min-[1024px]:max-w-none"
                  style={{
                    ...reveal(vis, i * 100),
                  }}
                >
                  <div
                    className="relative z-[5] flex h-20 w-20 shrink-0 items-center justify-center border border-[#1A1010]/12 bg-[#3B443A] max-[991px]:h-16 max-[991px]:w-16"
                    style={{ borderRadius: '0px' }}
                  >
                    <span
                      className="font-light text-[#EFE8DB]"
                      style={{
                        fontFamily: "'Quiche Sans', Georgia, serif",
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-4 text-center">
                    <h3
                      className="m-0 tracking-[0.04em] text-[#1A1010]"
                      style={{
                        ...BODY,
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: 1.35,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="m-0 text-[#1A1010]/88" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55, fontWeight: 400 }}>
                      {step.intro}
                    </p>
                    {step.bullets.length ? (
                      <ul
                        className="m-0 flex list-none flex-col gap-2 p-0 text-[#1A1010]/78"
                        style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}
                      >
                        {step.bullets.map((b) => (
                          <li key={b} className="inline-flex items-center justify-center gap-1 text-center">
                            <span className="inline-block text-[#3B443A] text-[8px] leading-none" aria-hidden>
                              ■{' '}
                            </span>
                            {b}
                            <span className="inline-block text-[#3B443A] text-[8px] leading-none" aria-hidden>
                              {' '}■
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {resolvedCtaLabel ? (
          <div ref={ctaRef} className="mt-16 flex justify-center max-[767px]:mt-14 max-[479px]:mt-12" style={reveal(ctaVisible, 80)}>
            <CtaLink href={ctaHref} variant="secondary" className="min-w-[min(100%,280px)] justify-center">
              {resolvedCtaLabel}
            </CtaLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ProcessSection;
