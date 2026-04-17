'use client';

import * as React from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const faqs = [
  {
    id: 'faq-partner',
    question: 'Kaip tapti partneriu?',
    answer:
      'Viskas prasideda nuo paprastos registracijos formos. Gavę Jūsų duomenis, mes juos peržiūrėsime ir susisieksime su Jumis per 24 valandas, kad suteiktume prieigą.',
  },
  {
    id: 'faq-min-order',
    question: 'Koks minimalus užsakymas?',
    answer: 'Startuoti galite vos nuo 150€. Turime paruoštus rinkinius.',
  },
  {
    id: 'faq-trainings',
    question: 'Ar teikiate mokymus?',
    answer:
      'Tikrai taip! Nuolat kviečiame į praktinius seminarus ir mokymus, kur ne tik dalijamės žiniomis, bet ir išduodame sertifikatus.',
  },
  {
    id: 'faq-delivery',
    question: 'Kaip vyksta prekių pristatymas?',
    answer:
      'Taupome Jūsų laiką: jei užsakote iki 14:00 val., prekes išsiunčiame dar tą pačią dieną. Dažniausiai siunta Jus pasieks per 1–2 d.d.',
  },
  {
    id: 'faq-samples',
    question: 'Ar galima gauti mėginių?',
    answer:
      'Žinoma. Prie kiekvieno užsakymo pridedame mėginių, kad galėtumėte išbandyti naujienas. Taip pat turime specialius „Startinius rinkinius“ susipažinimui.',
  },
];

const contactAvatar = {
  src: 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp',
  alt: 'Konsultantė',
} as const;

export function FaqSection({ backgroundClassName = 'bg-white' }: { backgroundClassName?: string }) {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);
  const [wrapRef, visible] = useInViewOnce<HTMLDivElement>({ threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

  const toggle = (i: number) => {
    setOpenIndexes((prev) => (prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]));
  };

  const panelStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    filter: visible ? 'blur(0px)' : 'blur(10px)',
    transform: visible ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), filter 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return (
    <section
      id="duk"
      className={`relative z-[2] overflow-x-clip py-20 max-[991px]:py-16 max-[479px]:py-12 ${backgroundClassName}`}
    >
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={wrapRef}
          className="grid w-full grid-cols-1 items-start gap-14 max-[991px]:gap-12 min-[992px]:grid-cols-2 min-[992px]:gap-[min(4rem,6vw)]"
          style={panelStyle}
        >
          {/* Kairė */}
          <div className="max-w-[480px] min-[992px]:max-w-none">
            <div className="flex flex-col gap-6 max-[767px]:gap-5">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 bg-[#3B443A]" style={{ borderRadius: '0px' }} aria-hidden />
                <span
                  className="uppercase text-[#3B443A]"
                  style={{
                    ...BODY,
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                  }}
                >
                  DUK
                </span>
              </div>

              <h2
                className="m-0 tracking-[-0.03em] text-[#3B443A]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.08,
                  fontWeight: 300,
                }}
              >
                <span className="font-light">Dažniausiai</span>
                <br />
                <span className="font-medium">užduodami klausimai</span>
              </h2>

              <p className="m-0 max-w-[46ch] text-[#1A1010]/82" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
                Surinkome atsakymus į dažniausiai kylančius klausimus, kad viskas būtų aišku nuo pat pradžių.
              </p>
            </div>

            <div className="mt-10 h-px w-full max-w-md bg-[#1A1010]/12 max-[991px]:mt-8" aria-hidden />

            <div className="mt-10 flex w-full max-w-[56rem] flex-row flex-nowrap items-center justify-start gap-2 sm:gap-3 md:gap-4 max-[991px]:mt-8 max-[767px]:flex-wrap">
              <div className="flex shrink-0 justify-center">
                <div
                  className="h-12 w-12 shrink-0 overflow-hidden max-[479px]:h-10 max-[479px]:w-10"
                  style={{ borderRadius: '0px' }}
                >
                  <img src={contactAvatar.src} loading="lazy" alt={contactAvatar.alt} className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="max-w-[min(20rem,100%)] shrink text-left max-[767px]:text-left">
                <div className="text-sm font-medium leading-5 text-[#1A1010]" style={BODY}>
                  Reikia konsultacijos?
                </div>
                <div className="text-sm leading-5 text-[#1A1010]/65" style={BODY}>
                  Visada mielai padėsime.
                </div>
              </div>

              <div className="shrink-0">
                <CtaLink href="#kontaktai" variant="secondary">
                  Susisiekite
                </CtaLink>
              </div>
            </div>
          </div>

          {/* Dešinė: akordionas */}
          <div className="min-w-0 border-t border-solid border-[#1A1010]/20">
            {faqs.map((faq, i) => {
              const isOpen = openIndexes.includes(i);
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-trigger-${i}`;
              const itemDelay = `${i * 85}ms`;
              return (
                <div
                  key={faq.id}
                  className="border-b border-solid border-[#1A1010]/20"
                  style={{
                    opacity: visible ? 1 : 0,
                    filter: visible ? 'blur(0px)' : 'blur(8px)',
                    transform: visible ? 'translateY(0)' : 'translateY(14px)',
                    transition:
                      `opacity 0.58s cubic-bezier(0.22, 1, 0.36, 1) ${itemDelay}, ` +
                      `filter 0.58s cubic-bezier(0.22, 1, 0.36, 1) ${itemDelay}, ` +
                      `transform 0.58s cubic-bezier(0.22, 1, 0.36, 1) ${itemDelay}`,
                  }}
                >
                  <button
                    type="button"
                    id={buttonId}
                    className="group flex w-full cursor-pointer items-start justify-between gap-6 py-7 text-left max-[479px]:gap-4 max-[479px]:py-6"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span
                      className={`min-w-0 flex-1 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'text-[#3B443A]' : 'text-[#1A1010] group-hover:text-[#3B443A]'
                      }`}
                      style={{
                        ...BODY,
                        fontSize: 'clamp(16px, 1.35vw, 18px)',
                        lineHeight: 1.2,
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {faq.question}
                    </span>
                    <span className="relative mt-1 flex h-3 w-3 shrink-0 items-center justify-center" aria-hidden>
                      <span className="absolute h-px w-3 bg-[#1A1010]" style={{ top: '50%', marginTop: '-0.5px' }} />
                      <span
                        className="absolute h-3 w-px bg-[#1A1010] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                          left: '50%',
                          marginLeft: '-0.5px',
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        }}
                      />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`overflow-hidden transition-[max-height,opacity,transform] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'max-h-[min(900px,82vh)] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1'
                    }`}
                  >
                    <p
                      className="m-0 max-w-[52ch] pb-7 pr-2 pt-1 text-[#1A1010]/82 max-[479px]:pb-6"
                      style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
