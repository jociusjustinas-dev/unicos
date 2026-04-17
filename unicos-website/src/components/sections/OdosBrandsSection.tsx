'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

type BrandCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  logoSvg?: string;
};

const cards: BrandCard[] = [
  {
    id: 'guinot',
    title: 'Guinot',
    description: 'Prancūziška profesionali odos priežiūra namų ir procedūriniam naudojimui.',
    image: '/mega-menu/1.jpeg',
    logoSvg: '/Guinot logo.svg',
  },
  {
    id: 'neostrata',
    title: 'Neostrata',
    description: 'Dermatologinė kosmetika su kliniškai įrodytomis aktyviosiomis medžiagomis.',
    image: '/mega-menu/2.jpeg',
    logoSvg: '/comfort zone.svg',
  },
  {
    id: 'mary-cohr',
    title: 'Mary Cohr',
    description: 'Aukščiausios klasės prancūziški sprendimai veidui ir kūnui.',
    image: '/mega-menu/3.jpeg',
    logoSvg: '/Mary Cohr logo.svg',
  },
  {
    id: 'exuviance',
    title: 'Exuviance',
    description: 'Švelni, bet efektyvi priežiūra jautriai ir probleminei odai.',
    image: '/mega-menu/4.jpeg',
    logoSvg: '/comfort zone.svg',
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

export function OdosBrandsSection() {
  const headerInView = useInView(0.08);
  const c0 = useInView(0.08);
  const c1 = useInView(0.08);
  const c2 = useInView(0.08);
  const c3 = useInView(0.08);
  const cardRefs = [c0, c1, c2, c3];

  return (
    <section className="relative z-[2] bg-[#EFE8DB] py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headerInView.ref}
          className={`mb-16 flex items-end justify-between gap-8 max-[767px]:mb-12 max-[767px]:flex-wrap max-[767px]:gap-6 transition-all duration-700 ease-out ${
            headerInView.visible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          }`}
        >
          <div className="flex max-w-[760px] flex-col gap-5 max-[767px]:gap-4">
            <h2
              className="m-0 text-[#64151F] tracking-[-0.02em]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.06,
                fontWeight: 300,
              }}
            >
              <span className="font-light">Prekių ženklai, atrinkti </span>
              <span className="font-medium">Jūsų sričiai.</span>
            </h2>
            <p className="m-0 text-[#64151F]/78" style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
              Oficialiai atstovaujami, su mokymų programa ir logistikos palaikymu.
            </p>
          </div>

          <CtaLink href="#" variant="primary">
            Visi prekių ženklai →
          </CtaLink>
        </div>

        <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2 max-[767px]:gap-3 max-[479px]:grid-cols-1">
          {cards.map((card, i) => (
            <article
              key={card.id}
              ref={cardRefs[i].ref}
              className="flex flex-col gap-4 max-[767px]:gap-3"
              style={{
                opacity: cardRefs[i].visible ? 1 : 0,
                transform: cardRefs[i].visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
              }}
            >
              <div className="relative h-[380px] w-full overflow-hidden border border-[#1A1010]/10" style={{ borderRadius: '0px' }}>
                <img src={card.image} alt={card.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,16,0.08),rgba(26,16,16,0.55))]" aria-hidden />
              </div>
              <div className="group flex flex-col gap-2">
                <div className="h-7">
                  {card.logoSvg ? (
                    <img
                      src={card.logoSvg}
                      alt={card.title}
                      className="h-full w-[180px] object-contain object-left transition-[filter,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ filter: 'grayscale(1) saturate(0)', opacity: 0.82 }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'none';
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(1) saturate(0)';
                        e.currentTarget.style.opacity = '0.82';
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <h3 className="m-0 text-[#64151F]" style={{ ...BODY, fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                      {card.title}
                    </h3>
                  )}
                </div>
                <p className="m-0 text-[#64151F]/72" style={{ ...BODY, fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}>
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OdosBrandsSection;

