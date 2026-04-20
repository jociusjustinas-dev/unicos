'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/ChevronArrows';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const carouselNavBtnClass =
  'group flex h-12 w-12 shrink-0 items-center justify-center overflow-visible border border-[#1A1010]/18 bg-transparent p-0 text-[#1A1010] transition-[background-color,color,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#3B443A] hover:bg-[#3B443A] hover:text-[#EFE8DB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64151F] disabled:pointer-events-none disabled:opacity-35';

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
  },
  {
    id: 'comfort-zone',
    title: '[ comfort zone ]',
    description: 'Itališka tvarumo filosofija ir procedūrinės linijos salonams.',
    image: '/mega-menu/4.jpeg',
    logoSvg: '/comfort zone.svg',
  },
  {
    id: 'nimue',
    title: 'Nimue',
    description: 'Aktyviosios medžiagos ir technologijos matomam odos atsinaujinimui.',
    image: '/mega-menu/1.jpeg',
  },
  {
    id: 'biologique',
    title: 'Biologique Recherche',
    description: 'Personalizuoti procedūriniai protokolai ir koncentruotos formulės.',
    image: '/mega-menu/2.jpeg',
  },
  {
    id: 'dr-spiller',
    title: 'Dr. Spiller',
    description: 'Vokiška preciziškumas ir švelnios, odą palaikančios tekstūros.',
    image: '/mega-menu/3.jpeg',
  },
];

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
  const trackInView = useInView<HTMLDivElement>(0.06);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  const scrollBrands = (direction: 'prev' | 'next') => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>('[data-brand-card]');
    const step = first ? first.offsetWidth + 16 : Math.round(el.clientWidth * 0.42);
    el.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
  };

  return (
    <section className="relative z-[2] overflow-x-visible bg-[#EFE8DB] py-20 max-[767px]:py-14">
      {/* Antraštė — tik įprastas konteineris; CTA be rodyklių */}
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headerInView.ref}
          className={`mb-10 flex flex-wrap items-end justify-between gap-6 max-[767px]:mb-8 max-[767px]:gap-5 transition-all duration-700 ease-out ${
            headerInView.visible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          }`}
        >
          <div className="flex min-w-0 max-w-[760px] flex-col gap-5 max-[767px]:gap-4">
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

          <CtaLink href="#" variant="primary" className="shrink-0">
            Visi prekių ženklai →
          </CtaLink>
        </div>
      </div>

      {/* Karuselė per visą ekrano plotį; dešinė be padding (kortelės „išeina“ už kraštą) */}
      <div className="relative left-1/2 z-[1] w-screen max-w-none -translate-x-1/2">
        <div
          ref={trackInView.ref}
          style={{
            opacity: trackInView.visible ? 1 : 0,
            transform: trackInView.visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div
            ref={scrollerRef}
            className="flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1 pl-4 [-ms-overflow-style:none] [scrollbar-width:none] max-[767px]:scroll-pl-6 max-[767px]:pl-6 max-[479px]:scroll-pl-4 max-[479px]:pl-4 min-[768px]:scroll-pl-16 min-[768px]:pl-16 [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingRight: 0, paddingRight: 0 }}
          >
            {cards.map((card) => (
              <a
                key={card.id}
                data-brand-card
                href="#"
                className="group/card flex w-[min(100%,clamp(240px,26vw,300px))] shrink-0 snap-start cursor-pointer flex-col gap-5 max-[767px]:w-[min(100%,280px)] max-[767px]:max-w-[88vw] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64151F]"
                style={{
                  borderRadius: '0px',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  className="relative h-[380px] w-full overflow-hidden border border-[#1A1010]/10 transition-[border-color,box-shadow] duration-[900ms] ease-[cubic-bezier(0.22,1,0.45,1)] group-hover/card:border-[#1A1010]/16 group-hover/card:shadow-[0_32px_72px_-28px_rgba(26,16,16,0.12)]"
                  style={{ borderRadius: '0px' }}
                >
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[118%] min-h-full w-[118%] min-w-full max-w-none -translate-x-1/2 -translate-y-1/2 origin-center scale-100 object-cover [backface-visibility:hidden] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.45,1)] will-change-transform group-hover/card:scale-[1.055] motion-reduce:transition-none motion-reduce:group-hover/card:scale-100"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,16,0.06),rgba(26,16,16,0.48))] transition-[opacity,background] duration-[900ms] ease-[cubic-bezier(0.22,1,0.45,1)] group-hover/card:opacity-[0.88] group-hover/card:bg-[linear-gradient(180deg,rgba(26,16,16,0.04),rgba(26,16,16,0.38))]"
                    aria-hidden
                  />
                </div>
                <div className="flex max-w-[min(100%,clamp(240px,26vw,300px))] flex-col gap-5 pr-4 max-[767px]:max-w-[min(100%,280px)]">
                  <div className="flex h-5 items-center">
                    {card.logoSvg ? (
                      <img
                        src={card.logoSvg}
                        alt={card.title}
                        className="h-5 max-w-[112px] object-contain object-left opacity-90 transition-[filter,opacity] duration-[520ms] ease-in-out [filter:grayscale(1)_brightness(0.42)_contrast(1.06)] group-hover/card:[filter:none] group-hover/card:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <h3
                        className="m-0 text-[#1A1010] transition-colors duration-[520ms] ease-in-out group-hover/card:text-[#64151F]"
                        style={{ ...BODY, fontSize: '18px', lineHeight: '22px', fontWeight: 500 }}
                      >
                        {card.title}
                      </h3>
                    )}
                  </div>
                  <p
                    className="m-0 text-[#1A1010]/78 transition-colors duration-[520ms] ease-in-out group-hover/card:text-[#64151F]/88"
                    style={{ ...BODY, fontSize: '14px', lineHeight: '22px', fontWeight: 400 }}
                  >
                    {card.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Rodyklės po karuselės juosta, lygiuojamos su kairiniu turinio kraštu */}
          <div className="mx-auto mt-8 flex max-w-[1800px] items-center gap-2 px-16 max-[767px]:mt-6 max-[767px]:px-6 max-[479px]:px-4">
            <button
              type="button"
              onClick={() => scrollBrands('prev')}
              className={carouselNavBtnClass}
              style={{ borderRadius: '0px' }}
              aria-label="Ankstesni prekių ženklai"
            >
              <ChevronLeftIcon className="h-[22px] w-[22px] text-current" />
            </button>
            <button
              type="button"
              onClick={() => scrollBrands('next')}
              className={carouselNavBtnClass}
              style={{ borderRadius: '0px' }}
              aria-label="Kiti prekių ženklai"
            >
              <ChevronRightIcon className="h-[22px] w-[22px] text-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OdosBrandsSection;
