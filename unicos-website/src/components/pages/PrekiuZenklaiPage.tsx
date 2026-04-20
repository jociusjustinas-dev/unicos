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

const EASE_HALDEN = 'cubic-bezier(0.22, 1, 0.36, 1)';

function ecosystemIconForTitle(title: string, size = 22) {
  const common = { size, className: 'block shrink-0 overflow-visible text-current', 'aria-hidden': true as const };
  if (title === 'Produktai') return <SfLayers {...common} />;
  if (title === 'Žinios') return <SfAward {...common} />;
  return <SfPhone {...common} />;
}

function PrekiuZenklaiEcosystemFeatureGrid() {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setGridVisible(true);
      return;
    }
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={gridRef}
      className="mx-auto grid w-full max-w-[1028px] grid-cols-1 gap-4 md:grid-cols-3 max-[991px]:grid-cols-2 max-[479px]:grid-cols-1 max-[767px]:gap-3"
    >
      {PREKIU_ZENKLAI_ECOSYSTEM_CARDS.map((card, i) => {
        const entranceDelay = `${i * 100}ms`;
        const cardTransition = [
          `opacity 0.7s ${EASE_HALDEN} ${entranceDelay}`,
          `transform 0.7s ${EASE_HALDEN} ${entranceDelay}`,
          'background-color 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
          'border-color 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
        ].join(', ');
        return (
          <div
            key={card.title}
            className={`group flex w-full flex-col items-start gap-6 border border-[#1A1010]/10 bg-[#ECE2D3]/90 p-8 text-left ease-out hover:bg-[#3B443A] hover:border-[#3B443A] max-[767px]:gap-5 max-[767px]:p-6 motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ borderRadius: '0px', transition: cardTransition }}
          >
            <div
              className="relative flex h-14 w-14 shrink-0 overflow-visible border border-[#3B443A]/20 bg-[rgba(59,68,58,0.08)] p-2 text-[#3B443A] transition-[background-color,border-color,color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-[#EFE8DB]/35 group-hover:bg-[rgba(239,232,219,0.14)] group-hover:text-[#EFE8DB] max-[767px]:h-12 max-[767px]:w-12 max-[767px]:p-1.5 motion-reduce:transition-none"
              style={{ borderRadius: '0px' }}
            >
              <span className="pointer-events-none flex h-7 w-7 items-center justify-center">
                {ecosystemIconForTitle(card.title, 22)}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div
                className="text-base font-medium leading-6 text-[#1A1010] transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[#EFE8DB] motion-reduce:transition-none max-[767px]:text-[15px] max-[767px]:leading-[1.4]"
                style={{ ...BODY, fontWeight: 500 }}
              >
                {card.title}
              </div>
              <p
                className="m-0 text-sm leading-5 text-[#1A1010]/70 transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[#EFE8DB]/88"
                style={BODY}
              >
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
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
          <div className="mb-10 max-[767px]:mb-8" role="presentation">
            <div className="h-px w-full bg-[#1A1010]/10" aria-hidden />
          </div>
          <div
            className="relative mb-12 w-full overflow-hidden border border-[#1A1010]/10 max-[767px]:mb-10"
            style={{ borderRadius: '0px' }}
          >
            <div className="relative aspect-[21/9] min-h-[220px] w-full max-[991px]:aspect-video max-[479px]:min-h-[200px]">
              <img
                src="/odos.jpg"
                alt="Profesionali kosmetika ir procedūros"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#1A1010]/08" aria-hidden />
            </div>
          </div>
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
                      : 'border-[#1A1010]/10 bg-[#ECE2D3]/75 text-[#1A1010] hover:border-[#64151F]/45'
                  }`}
                  style={{ ...BODY, fontSize: '13px', fontWeight: 500, borderRadius: '0px' }}
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
                            style={{ ...BODY, fontSize: '12px', fontWeight: 400, borderRadius: '0px' }}
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
        surfaceClassName="bg-[#EFE8DB]"
        accent="maroon"
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
        footerCtaPrimaryVariant="secondary"
        footerCtaSecondaryVariant="secondary"
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

          <PrekiuZenklaiEcosystemFeatureGrid />
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
