'use client';

import * as React from 'react';
import type { AudienceCards4 } from '@/config/sprendimaiSolutionLanding';
import { CtaLink } from '@/components/ui/CtaLink';
import { ParallaxImage } from '@/components/ui/ParallaxImage';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const defaultAudienceCards: AudienceCards4 = [
  {
    id: 'first',
    bg: '/mega-menu/1.jpeg',
    heading: 'Kosmetologijos kabinetams',
    body: 'Patikimi profesionalūs produktai kasdienėms procedūroms ir namų priežiūros rekomendacijoms.',
  },
  {
    id: 'second',
    bg: '/mega-menu/2.jpeg',
    heading: 'Grožio salonams su odos paslaugomis',
    body: 'Norite papildyti portfelį kokybiška odos priežiūra ir išsiskirti tarp konkurentų.',
  },
  {
    id: 'third',
    bg: '/mega-menu/3.jpeg',
    heading: 'SPA ir viešbučių SPA centrams',
    body: 'Premium prekių ženklai, atitinkantys svečių lūkesčius ir standartus.',
  },
  {
    id: 'fourth',
    bg: '/mega-menu/4.jpeg',
    heading: 'Pradedantiems specialistams',
    body: 'Kuriate kabinetą ir norite tvirto pagrindo nuo pirmos dienos be brangių klaidų.',
  },
];

function useInView(threshold = 0.1) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function OdosAudienceSection({
  cards = defaultAudienceCards,
  consultTitle = 'Reikia konsultacijos?',
  consultBody = 'Padėsime sudėlioti tinkamiausią startą Jūsų kabinetui.',
  heading,
  subheading = null,
}: {
  cards?: AudienceCards4;
  consultTitle?: string;
  consultBody?: string;
  /** Numatyta: „Kam skirtas šis sprendimas?“. */
  heading?: React.ReactNode;
  subheading?: string | null;
} = {}) {
  const headlineInView = useInView(0.1);
  const ctaInView = useInView(0.1);
  const card0InView = useInView(0.1);
  const card1InView = useInView(0.1);
  const card2InView = useInView(0.1);
  const card3InView = useInView(0.1);
  const cardRefs = [card0InView, card1InView, card2InView, card3InView];

  return (
    <section className="relative z-[2] overflow-hidden bg-[#EFE8DB] py-20 max-[767px]:py-14">
      <div className="relative z-[3] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headlineInView.ref}
          className={`mx-auto mb-20 max-w-[760px] text-center transition-all duration-700 ease-out max-[767px]:mb-14 ${
            headlineInView.visible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          }`}
        >
          <h2
            className="m-0 text-[#64151F] tracking-[-0.02em]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.06,
              fontWeight: 300,
            }}
          >
            {heading ?? (
              <>
                <span className="font-light">Kam skirtas </span>
                <span className="font-medium">šis sprendimas?</span>
              </>
            )}
          </h2>
          {subheading ? (
            <p
              className="m-0 mt-5 max-w-[720px] text-[#1A1010]/78 max-[767px]:mt-4"
              style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
            >
              {subheading}
            </p>
          ) : null}
        </div>

        <div className="mb-20 overflow-x-auto max-[991px]:-mr-16 max-[767px]:mb-14 max-[767px]:-mr-6 max-[479px]:-mr-4">
          <div className="flex min-w-[1120px] flex-nowrap gap-4 max-[767px]:min-w-[980px] max-[767px]:gap-3">
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={cardRefs[i].ref}
              className="relative w-full overflow-hidden border border-[#1A1010]/12 transition-all duration-700 ease-out"
              style={{
                flex: '0 0 calc((100% - 48px) / 4)',
                borderRadius: '0px',
                transitionDelay: `${i * 120}ms`,
                opacity: cardRefs[i].visible ? 1 : 0,
                transform: cardRefs[i].visible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <ParallaxImage src={card.bg} />
              </div>

              <div className="relative z-[2] flex h-[560px] w-full flex-col items-start justify-end gap-4 p-6 max-[767px]:h-[360px] max-[767px]:gap-3 max-[767px]:p-4">
                <h3
                  className="m-0 text-[#EFE8DB]"
                  style={{
                    ...BODY,
                    fontSize: '24px',
                    lineHeight: '28px',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.heading}
                </h3>
                <div style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 400, color: 'rgba(239,232,219,0.72)' }}>
                  {card.body}
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 z-[1] h-1/2 w-full"
                style={{ backgroundImage: 'linear-gradient(0deg, #000000, rgba(0,0,0,0))' }}
              />
            </div>
          ))}
          </div>
        </div>

        <div
          ref={ctaInView.ref}
          className={`flex items-center justify-center transition-all duration-700 ease-out ${
            ctaInView.visible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          }`}
        >
          <div
            className="flex w-fit max-w-full items-center justify-between gap-6 bg-transparent p-0 max-[767px]:gap-4 max-[479px]:flex-wrap"
            style={{ borderRadius: '0px' }}
          >
            <div className="flex items-center justify-start gap-6 max-[767px]:gap-4">
              <div className="h-12 w-12 shrink-0 overflow-hidden max-[479px]:h-10 max-[479px]:w-10" style={{ borderRadius: '0px' }}>
                <img
                  src="https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp"
                  loading="lazy"
                  alt="Konsultantė"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-[#1A1010]/90" style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}>
                  {consultTitle}
                </div>
                <div className="text-[#1A1010]/64" style={{ ...BODY, fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}>
                  {consultBody}
                </div>
              </div>
            </div>

            <CtaLink href="/kontaktai" variant="primary">
              Gauti konsultaciją
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OdosAudienceSection;

