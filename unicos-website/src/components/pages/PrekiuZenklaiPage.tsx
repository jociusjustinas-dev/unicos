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
import { FooterSection } from '@/components/sections/FooterSection';
import { CmsGridSection } from '@/components/sections/CmsGridSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { OdosStarterCalloutSection } from '@/components/sections/OdosStarterCalloutSection';
import { OdosPartnerSpotlightSection } from '@/components/sections/OdosPartnerSpotlightSection';
import { CtaLink } from '@/components/ui/CtaLink';

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

      <section
        className="relative z-[2] overflow-x-clip pt-40 pb-28 max-[767px]:pt-32 max-[767px]:pb-20"
        style={{ backgroundColor: '#EFE8DB' }}
      >
        <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="flex w-full flex-row items-stretch gap-16 max-[991px]:flex-col max-[991px]:gap-12">
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <nav className="mb-0" aria-label="Breadcrumb">
                <div className="flex items-center gap-3">
                  <span
                    className="uppercase text-[#64151F]"
                    style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                  >
                    Prekių ženklai
                  </span>
                </div>
              </nav>

              <div className="mb-10 max-[767px]:mb-8" aria-hidden />

              <h1
                className="m-0 max-w-[min(100%,48rem)] text-[#64151F] tracking-[-0.03em]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.1rem,3.3vw,3.1rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                <span className="font-light">Tik tai, kuo </span>
                <span className="font-medium">patys tikime.</span>
              </h1>

              <p
                className="m-0 mt-6 max-w-[62ch] text-[#64151F]/78"
                style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
              >
                Profesionalūs kosmetikos prekių ženklai, oficialiai atstovaujami Lietuvoje. Guinot, Neostrata, Fillmed,
                Anna Lotan ir kiti — su mokymais, protokolais ir asmeniniu palaikymu.
              </p>

              <div className="my-8 h-px w-full bg-[#1A1010]/10 max-[767px]:my-7" aria-hidden />

              <div className="flex flex-wrap items-start gap-8">
                <div className="flex flex-col items-start gap-2.5">
                  <CtaLink href="/tapkite-partneriu" variant="primary" className="min-w-[240px] justify-center">
                    Tapti partneriu
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/62"
                    style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                  >
                    Patvirtinimas per 24 val.
                  </span>
                </div>

                <div className="flex flex-col items-start gap-2.5">
                  <CtaLink href="/kontaktai" variant="outline" className="min-w-[240px] justify-center">
                    Gauti konsultaciją
                  </CtaLink>
                  <span
                    className="uppercase text-[#1A1010]/62"
                    style={{ fontSize: '10px', lineHeight: '1.1', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
                  >
                    Padėsime išsirinkti.
                  </span>
                </div>
              </div>
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden border border-[#1A1010]/10 min-[992px]:h-[560px] max-[991px]:h-[430px] max-[767px]:h-[320px]">
              <img
                src="/odos.jpg"
                alt="Profesionali kosmetika ir procedūros"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,16,16,0.14)' }} aria-hidden />
            </div>
          </div>
        </div>
      </section>

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
                  className={`border px-4 py-2.5 transition-colors duration-200 ${
                    active
                      ? 'border-[#64151F] bg-[#64151F] text-[#EFE8DB]'
                      : 'border-[#1A1010]/14 bg-white text-[#1A1010] hover:border-[#64151F]/45'
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
                <article
                  key={brand.id}
                  className="group/card flex flex-col border border-[#1A1010]/16 bg-white text-[#1A1010] transition-[border-color,background-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#64151F]/30"
                  style={{ borderRadius: '0px' }}
                >
                  <div className="relative h-[220px] w-full overflow-hidden border-b border-[#1A1010]/10">
                    <img
                      src={brand.imageSrc}
                      alt={brand.imageAlt}
                      loading="lazy"
                      className="h-full w-full scale-100 object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.45,1)] group-hover/card:scale-[1.055]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,16,0.04),rgba(26,16,16,0.36))] transition-[opacity,background] duration-[900ms] ease-[cubic-bezier(0.22,1,0.45,1)] group-hover/card:opacity-[0.88] group-hover/card:bg-[linear-gradient(180deg,rgba(26,16,16,0.02),rgba(26,16,16,0.28))]"
                      aria-hidden
                    />
                    <div
                      className="absolute left-4 top-4 inline-flex w-fit border border-[#64151F]/25 bg-[#64151F] px-2.5 py-1.5 uppercase text-[#EFE8DB]"
                      style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', borderRadius: '0px' }}
                    >
                      {brand.badge}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-6 max-[767px]:p-5">
                    <div className="flex min-h-8 items-center">
                      {brand.logoSvg ? (
                        <img src={brand.logoSvg} alt={brand.title} loading="lazy" className="h-6 w-auto max-w-[170px] object-contain object-left" />
                      ) : (
                        <h3 className="m-0 text-[#64151F]" style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: '1.35rem', fontWeight: 500 }}>
                          {brand.title}
                        </h3>
                      )}
                    </div>
                    <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5, fontWeight: 400 }}>
                      {brand.description}
                    </p>
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
                    <CtaLink href={brand.href} variant="primary" className="mt-1 w-full justify-center sm:w-auto">
                      Sužinokite daugiau
                    </CtaLink>
                  </div>
                </article>
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

      <section className="relative z-[2] bg-[#EFE8DB] py-20 max-[767px]:py-14">
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PREKIU_ZENKLAI_ECOSYSTEM_CARDS.map((card) => (
              <div
                key={card.title}
                className="group flex flex-col gap-4 border border-[#1A1010]/10 bg-white p-8 text-left transition-[background-color,border-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#3B443A] hover:bg-[#3B443A] max-[767px]:p-6"
                style={{ borderRadius: '0px' }}
              >
                <h3
                  className="m-0 text-[#1A1010] transition-colors duration-200 group-hover:text-[#EFE8DB]"
                  style={{ ...BODY, fontSize: '18px', fontWeight: 600, lineHeight: 1.25 }}
                >
                  {card.title}
                </h3>
                <p
                  className="m-0 text-[#1A1010]/72 transition-colors duration-200 group-hover:text-[#EFE8DB]/88"
                  style={{ ...BODY, fontSize: '15px', lineHeight: 1.55, fontWeight: 400 }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
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
