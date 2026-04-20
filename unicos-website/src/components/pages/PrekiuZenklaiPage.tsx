'use client';

import * as React from 'react';
import {
  PREKIU_ZENKLAI_BRANDS,
  PREKIU_ZENKLAI_CRITERIA_CARDS,
  PREKIU_ZENKLAI_ECOSYSTEM_CARDS,
  PREKIU_ZENKLAI_FILTERS,
  PREKIU_ZENKLAI_OFFICIAL_BULLETS,
  type PrekiuZenklaiFilterId,
} from '@/config/prekiuZenklaiPage';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { PrekiuZenklaiHeroSection } from '@/components/sections/PrekiuZenklaiHeroSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CmsGridSection } from '@/components/sections/CmsGridSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { OdosStarterCalloutSection } from '@/components/sections/OdosStarterCalloutSection';
import { OdosPartnerSpotlightSection } from '@/components/sections/OdosPartnerSpotlightSection';
import { BrandShowcaseCard } from '@/components/ui/BrandShowcaseCard';
import { SfAward, SfLayers, SfPhone } from '@/components/icons/feather';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const SPOTLIGHT_QUOTE =
  '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio. Svarbiausia — oficialus atstovavimas ir struktūruoti protokolai suteikia ramybę kiekvieną dieną.“';

const ECOSYSTEM_BUBBLE_META = [
  { hoverBg: '#64151F', hoverFg: '#EFE8DB', border: 'rgba(100,21,31,0.38)' },
  { hoverBg: '#3B443A', hoverFg: '#EFE8DB', border: 'rgba(59,68,58,0.34)' },
  { hoverBg: '#1A1010', hoverFg: '#EFE8DB', border: 'rgba(26,16,16,0.32)' },
] as const;

function useRevealOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible] as const;
}

function ecosystemIconForTitle(title: string, size = 22) {
  const common = { size, className: 'block shrink-0 overflow-visible text-current', 'aria-hidden': true as const };
  if (title === 'Produktai') return <SfLayers {...common} />;
  if (title === 'Žinios') return <SfAward {...common} />;
  return <SfPhone {...common} />;
}

function PrekiuZenklaiEcosystemOverlapGrid() {
  const [gridRef, gridVisible] = useRevealOnce<HTMLDivElement>({ threshold: 0.3, rootMargin: '0px 0px -18% 0px' });
  const [hoveredBubble, setHoveredBubble] = React.useState<number | null>(null);
  const gridReveal = gridVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]';

  return (
    <div
      ref={gridRef}
      className={`mx-auto max-w-[1144px] transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:blur-0 ${gridReveal}`}
    >
      <div className="flex items-center justify-center max-[991px]:justify-start max-[767px]:flex-col max-[767px]:items-center">
        {PREKIU_ZENKLAI_ECOSYSTEM_CARDS.map((card, i) => {
          const theme = ECOSYSTEM_BUBBLE_META[i] ?? ECOSYSTEM_BUBBLE_META[2];
          const isHovered = hoveredBubble === i;
          const bubbleBg = isHovered ? theme.hoverBg : 'rgba(239,232,219,0.36)';
          const bubbleFg = isHovered ? theme.hoverFg : '#1A1010';
          return (
            <div
              key={card.title}
              className={`relative ${i === 0 ? '' : 'min-[768px]:-ml-14 max-[767px]:-mt-7'}`}
              onMouseEnter={() => setHoveredBubble(i)}
              onMouseLeave={() => setHoveredBubble(null)}
              style={{
                zIndex: i === 2 ? 40 : 20 + i,
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateX(0)' : 'translateX(-28px)',
                transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${i * 140}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${i * 140}ms`,
              }}
            >
              <div
                className="group flex h-[388px] w-[388px] flex-col justify-center px-20 transition-[background-color,color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-[991px]:h-[340px] max-[991px]:w-[340px] max-[991px]:px-14 max-[767px]:h-auto max-[767px]:w-[min(92vw,388px)] max-[767px]:items-center max-[767px]:px-10 max-[767px]:py-10"
                style={{
                  borderRadius: '100vw',
                  backgroundColor: bubbleBg,
                  color: bubbleFg,
                  border: `1px solid ${theme.border}`,
                  backdropFilter: isHovered ? 'blur(0px)' : 'blur(10px)',
                  WebkitBackdropFilter: isHovered ? 'blur(0px)' : 'blur(10px)',
                  boxShadow: isHovered ? 'none' : 'inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
              >
                <h3
                  className="m-0 text-[clamp(1.25rem,1.65vw,1.8rem)] leading-[1.12] tracking-[-0.02em] max-[991px]:text-[clamp(1.18rem,1.5vw,1.6rem)] max-[767px]:text-center"
                  style={{ ...BODY, fontWeight: 500 }}
                >
                  {card.title}
                </h3>
                <div className="mt-5 mb-5 flex h-[84px] w-[84px] shrink-0 items-center justify-center text-current max-[991px]:h-[72px] max-[991px]:w-[72px]">
                  <span
                    className="flex items-center justify-center transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      opacity: isHovered ? 0.95 : 0.72,
                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                    }}
                  >
                    {ecosystemIconForTitle(card.title, 52)}
                  </span>
                </div>
                <p
                  className="m-0 max-w-[26ch] text-[15px] leading-[1.45] max-[991px]:text-[14px] max-[767px]:text-center"
                  style={{ ...BODY, fontWeight: 400 }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PrekiuZenklaiPage() {
  const [activeFilter, setActiveFilter] = React.useState<PrekiuZenklaiFilterId>('all');

  const visibleBrands = React.useMemo(() => {
    if (activeFilter === 'all') return [...PREKIU_ZENKLAI_BRANDS];
    return PREKIU_ZENKLAI_BRANDS.filter((b) => b.categoryIds.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />

      <PrekiuZenklaiHeroSection />

      <section className="relative z-[2] bg-[#EFE8DB] py-16 max-[767px]:py-12">
        <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div
            className="mb-10 flex flex-wrap gap-2 max-[767px]:mb-8"
            role="tablist"
            aria-label="Prekių ženklų kategorijos"
          >
            {PREKIU_ZENKLAI_FILTERS.map((f) => {
              const active = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(f.id)}
                  className={`border px-5 py-2.5 transition-colors duration-200 ${
                    active
                      ? 'border-[#64151F] bg-[#64151F] text-[#EFE8DB]'
                      : 'border-[#1A1010]/10 bg-white/40 text-[#1A1010] hover:border-[#64151F]/45'
                  }`}
                  style={{ ...BODY, fontSize: '13px', fontWeight: 500, borderRadius: '100vw' }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {visibleBrands.length === 0 ? (
            <p className="m-0 text-[#1A1010]/65" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}>
              Pagal pasirinktą filtrą prekių ženklų nerasta.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleBrands.map((brand) => (
                <BrandShowcaseCard
                  key={brand.id}
                  title={brand.title}
                  logoSvg={brand.logoSvg}
                  description={brand.description}
                  imageSrc={brand.imageSrc}
                  imageAlt={brand.imageAlt}
                  badge={brand.badge}
                  ctaHref={brand.href}
                  ctaLabel="Sužinokite daugiau"
                  meta={
                    <>
                      <div className="flex flex-wrap gap-2">
                        {brand.categoryLabels.map((label) => (
                          <span
                            key={label}
                            className="border border-[#1A1010]/14 px-2.5 py-1 text-[#1A1010]/78"
                            style={{ ...BODY, fontSize: '12px', fontWeight: 400, borderRadius: '100vw' }}
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                      <dl className="m-0 flex flex-col gap-2 border-t border-[#1A1010]/10 pt-4">
                        <div>
                          <dt className="m-0 uppercase text-[#1A1010]/48" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500 }}>
                            Rekomenduojama
                          </dt>
                          <dd className="m-0 mt-1" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45, fontWeight: 400 }}>
                            {brand.recommended}
                          </dd>
                        </div>
                        <div>
                          <dt className="m-0 uppercase text-[#1A1010]/48" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500 }}>
                            Šalis
                          </dt>
                          <dd className="m-0 mt-1" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45, fontWeight: 400 }}>
                            {brand.country}
                          </dd>
                        </div>
                      </dl>
                    </>
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={
          <>
            <span className="font-light">Kaip atrenkame </span>
            <span className="font-medium">prekių ženklus?</span>
          </>
        }
        subheading="Kiekvienas ženklas praeina griežtą vertinimą prieš patekdamas į mūsų portfelį."
        cards={[...PREKIU_ZENKLAI_CRITERIA_CARDS]}
      />

      <OdosStarterCalloutSection
        showEyebrow={false}
        showPriceBlock={false}
        headingLight="Oficialus atstovas "
        headingBold="Lietuvoje."
        description="Kiekvienas ženklas mūsų portfelyje turi oficialų atstovavimo statusą. Tai reiškia:"
        benefits={[...PREKIU_ZENKLAI_OFFICIAL_BULLETS]}
        imageSrc="/estetines.jpg"
        imageAlt="Oficialus atstovavimas profesionalioje aplinkoje"
        footerCtas={{
          primary: { href: '/tapkite-partneriu', label: 'Tapti partneriu', microcopy: 'Patvirtinimas per 24 val.' },
          secondary: { href: '/kontaktai', label: 'Gauti konsultaciją', microcopy: 'Padėsime išsirinkti.' },
        }}
      />

      <section className="relative z-[2] overflow-x-clip bg-[#EFE8DB] py-20 max-[767px]:py-14">
        <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="mx-auto mb-12 flex max-w-[720px] flex-col items-center gap-5 text-center max-[767px]:mb-10 max-[767px]:gap-4">
            <h2
              className="m-0 text-[#64151F] tracking-[-0.02em]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.06,
                fontWeight: 300,
              }}
            >
              <span className="font-light">Daugiau nei </span>
              <span className="font-medium">tiekimas.</span>
            </h2>
            <p className="m-0 max-w-[52ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
              Su kiekvienu ženklu gausite visą ekosistemą.
            </p>
          </div>

          <PrekiuZenklaiEcosystemOverlapGrid />
        </div>
      </section>

      <OdosPartnerSpotlightSection
        spotlightHeadingId="prekiu-zenklai-spotlight-heading"
        statBadge="+35% pajamų augimas"
        quote={SPOTLIGHT_QUOTE}
        authorName="Dr. Ieva Kazlauskienė"
        authorMeta="Dermatovenerologė, Vilnius"
        portraitSrc="/Female_hands_applying_202604110815.jpeg"
        portraitAlt="Dr. Ieva Kazlauskienė"
      />

      <CmsGridSection />
      <FaqSection backgroundClassName="bg-[#EFE8DB]" accent="maroon" />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

export default PrekiuZenklaiPage;
