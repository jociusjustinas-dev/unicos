'use client';

import * as React from 'react';
import {
  PREKIU_ZENKLAI_BRANDS,
  PREKIU_ZENKLAI_CRITERIA_CARDS,
  PREKIU_ZENKLAI_ECOSYSTEM_BUBBLES,
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
import { UnicosWhySection } from '@/components/sections/UnicosWhySection';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const SPOTLIGHT_QUOTE =
  '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio. Svarbiausia — oficialus atstovavimas ir struktūruoti protokolai suteikia ramybę kiekvieną dieną.“';

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
                            className="uppercase border border-[#3B443A]/30 bg-[#3B443A]/10 px-2 py-1 text-[#3B443A]"
                            style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', borderRadius: '0px' }}
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

      <UnicosWhySection
        heading={
          <>
            <span className="font-light">Daugiau nei </span>
            <span className="font-medium">tiekimas.</span>
          </>
        }
        subheading="Su kiekvienu ženklu gausite visą ekosistemą."
        showHighlights={false}
        bubbles={PREKIU_ZENKLAI_ECOSYSTEM_BUBBLES}
        backdropTone="mint"
      />

      <OdosPartnerSpotlightSection
        spotlightHeadingId="prekiu-zenklai-spotlight-heading"
        statBadge="+35% pajamų augimas"
        quote={SPOTLIGHT_QUOTE}
        authorName="Dr. Ieva Kazlauskienė"
        authorMeta="Dermatovenerologė, Vilnius"
      />

      <CmsGridSection />
      <FaqSection backgroundClassName="bg-[#EFE8DB]" accent="maroon" />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

export default PrekiuZenklaiPage;
