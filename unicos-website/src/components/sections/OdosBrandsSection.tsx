'use client';

import * as React from 'react';
import type { BrandCarouselCard } from '@/config/sprendimaiSolutionLanding';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/ChevronArrows';
import { CtaLink } from '@/components/ui/CtaLink';
import { BrandShowcaseCard } from '@/components/ui/BrandShowcaseCard';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

/** Ant balto (ResponsibleBeauty) — žalios rodyklės, be bordo. */
const brandsCarouselNavBtnClass =
  'group flex h-12 w-12 shrink-0 items-center justify-center overflow-visible border border-[#3B443A]/22 bg-transparent p-0 text-[#3B443A] transition-[background-color,color,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#3B443A] hover:bg-[#2f362e] hover:text-[#EFE8DB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B443A] disabled:pointer-events-none disabled:opacity-35';

const defaultBrandCards: BrandCarouselCard[] = [
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

export function OdosBrandsSection({
  cards = defaultBrandCards,
  headingLight = 'Prekių ženklai, atrinkti ',
  headingBold = 'Jūsų sričiai.',
  subheading = 'Oficialiai atstovaujami, su mokymų programa ir logistikos palaikymu.',
  brandsCtaLabel = 'Visi prekių ženklai →',
}: {
  cards?: readonly BrandCarouselCard[];
  headingLight?: string;
  headingBold?: string;
  subheading?: string;
  brandsCtaLabel?: string;
} = {}) {
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
    <section className="relative z-[2] overflow-x-visible bg-white py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headerInView.ref}
          className={`mb-10 flex flex-wrap items-end justify-between gap-6 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-[767px]:mb-8 max-[767px]:gap-5 ${
            headerInView.visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <div className="flex min-w-0 max-w-[760px] flex-col gap-5 max-[767px]:gap-4">
            <h2
              className="m-0 text-[#3B443A] tracking-[-0.02em]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.06,
                fontWeight: 300,
              }}
            >
              {headingBold ? (
                <>
                  <span className="font-light">{headingLight}</span>
                  <span className="font-medium">{headingBold}</span>
                </>
              ) : (
                <span className="font-medium">{headingLight}</span>
              )}
            </h2>
            <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
              {subheading}
            </p>
          </div>

          <CtaLink href="#" variant="secondary" className="shrink-0">
            {brandsCtaLabel}
          </CtaLink>
        </div>
      </div>

      <div className="relative left-1/2 z-[1] w-screen max-w-none -translate-x-1/2 bg-white">
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
            className="flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain bg-white pb-1 pl-4 [-ms-overflow-style:none] [scrollbar-width:none] max-[767px]:scroll-pl-6 max-[767px]:pl-6 max-[479px]:scroll-pl-4 max-[479px]:pl-4 min-[768px]:scroll-pl-16 min-[768px]:pl-16 [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingRight: 0, paddingRight: 0 }}
          >
            {cards.map((card) => (
              <BrandShowcaseCard
                key={card.id}
                dataBrandCard
                className="w-[min(100%,clamp(240px,26vw,300px))] shrink-0 snap-start bg-white/40 max-[767px]:w-[min(100%,280px)] max-[767px]:max-w-[88vw]"
                imageClassName="h-[380px]"
                title={card.title}
                logoSvg={card.logoSvg}
                description={card.description}
                imageSrc={card.image}
                imageAlt={card.title}
              />
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-[1800px] items-center justify-end gap-2 bg-white px-16 pb-1 max-[767px]:mt-6 max-[767px]:px-6 max-[479px]:px-4">
            <button
              type="button"
              onClick={() => scrollBrands('prev')}
              className={brandsCarouselNavBtnClass}
              style={{ borderRadius: '0px' }}
              aria-label="Ankstesni prekių ženklai"
            >
              <ChevronLeftIcon className="h-[22px] w-[22px] text-current" />
            </button>
            <button
              type="button"
              onClick={() => scrollBrands('next')}
              className={brandsCarouselNavBtnClass}
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
