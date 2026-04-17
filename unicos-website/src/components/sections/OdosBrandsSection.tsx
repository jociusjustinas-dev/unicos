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

/** Pastovus „tint“ į prekės ženklo bordo (#64151F) visiems SVG logams. */
const LOGO_COLOR_FILTER =
  'brightness(0) saturate(100%) invert(14%) sepia(35%) saturate(3500%) hue-rotate(310deg) brightness(0.88) contrast(1.05)';

function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = React.useRef<T>(null);
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
  const headerInView = useInView<HTMLDivElement>(0.08);
  const c0 = useInView<HTMLAnchorElement>(0.08);
  const c1 = useInView<HTMLAnchorElement>(0.08);
  const c2 = useInView<HTMLAnchorElement>(0.08);
  const c3 = useInView<HTMLAnchorElement>(0.08);
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
            <a
              key={card.id}
              ref={cardRefs[i].ref}
              href="#"
              className="group/card flex cursor-pointer flex-col gap-5 max-[767px]:gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64151F]"
              style={{
                opacity: cardRefs[i].visible ? 1 : 0,
                transform: cardRefs[i].visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
                borderRadius: '0px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                className="relative h-[380px] w-full overflow-hidden border border-[#1A1010]/10 transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:border-[#64151F]/35 group-hover/card:shadow-[0_12px_32px_rgba(26,16,16,0.12)] group-hover/card:-translate-y-0.5"
                style={{ borderRadius: '0px' }}
              >
                <img src={card.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.02] group-hover/card:brightness-[1.03]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,16,0.08),rgba(26,16,16,0.55))] transition-opacity duration-300 group-hover/card:opacity-90" aria-hidden />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex h-5 items-center">
                  {card.logoSvg ? (
                    <img
                      src={card.logoSvg}
                      alt={card.title}
                      className="h-5 max-w-[112px] object-contain object-left transition-[filter,opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:translate-x-0.5"
                      style={{ filter: LOGO_COLOR_FILTER, opacity: 0.92 }}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OdosBrandsSection;

