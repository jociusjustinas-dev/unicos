'use client';

import * as React from 'react';
import { SfCheckboxCheck } from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { HOME_PAGE_VALUE_FEATURE_IMAGES } from '@/config/homePageImages';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export type FeatureTab = {
  label: string;
  price?: string;
  pricePrefix?: string;
  heading: string;
  body: string;
  bullets?: string[];
  cta?: string;
  image: string;
};

const defaultTabs: FeatureTab[] = [
  {
    label: 'Odos priežiūros specialistams',
    price: '950 €',
    pricePrefix: 'Startas nuo',
    heading: 'Odos priežiūros specialistams',
    body: 'Profesionalūs, oficialiai atstovaujami prekių ženklai ir struktūruotas palaikymas, padedantis užtikrinti procedūrų kokybę ir klientų pasitikėjimą.',
    bullets: [
      'Atrinkti profesionalūs prekių ženklai',
      'Aiškūs darbo protokolai ir mokymai',
      'Asmeninis vadybininko palaikymas',
    ],
    cta: 'Sprendimai odos specialistams',
    image: HOME_PAGE_VALUE_FEATURE_IMAGES[0],
  },
  {
    label: 'Plaukų priežiūros specialistams',
    price: '450 €',
    pricePrefix: 'Startas nuo',
    heading: 'Plaukų priežiūros specialistams',
    body: 'Aukštos kokybės profesionalūs produktai ir praktiniai sprendimai, padedantys stiprinti klientų lojalumą ir didinti paslaugų vertę.',
    bullets: [
      'Profesionalūs plaukų priežiūros prekių ženklai',
      'Pardavimų ir rekomendavimo gairės',
      'Komandos mokymai ir konsultacijos',
    ],
    cta: 'Sprendimai plaukų specialistams',
    image: HOME_PAGE_VALUE_FEATURE_IMAGES[1],
  },
  {
    label: 'Estetinės dermatologijos specialistams',
    price: '950 €',
    pricePrefix: 'Startas nuo',
    heading: 'Estetinės dermatologijos specialistams',
    body: 'Tarptautiniu mastu pripažinti profesionalūs prekių ženklai ir aiški partnerystės struktūra, skirta aukštiems paslaugų standartams užtikrinti.',
    bullets: [
      'Oficialiai atstovaujami profesionalūs prekių ženklai',
      'Struktūruoti mokymai ir protokolai',
      'Atsakingas, ilgalaikis bendradarbiavimas',
    ],
    cta: 'Sprendimai estetinės dermatologijos specialistams',
    image: HOME_PAGE_VALUE_FEATURE_IMAGES[2],
  },
  {
    label: 'Dermakosmetikos konsultantams ir vaistininkams',
    price: '150 €',
    pricePrefix: 'Startas nuo',
    heading: 'Dermakosmetikos konsultantams ir vaistininkams',
    body: 'Profesionalūs mokymai ir bendruomenė, skirta Jūsų asmeniniam tobulėjimui.',
    bullets: [
      'Lankstus užsakymų valdymas',
      'Profesinė bendruomenė',
      'Nuolatinis kvalifikacijos kėlimas',
    ],
    cta: 'Sprendimai konsultantams ir vaistininkams',
    image: HOME_PAGE_VALUE_FEATURE_IMAGES[3],
  },
];

type Props = {
  eyebrow?: string | null;
  heading?: React.ReactNode;
  intro?: string | null;
  tabs?: FeatureTab[];
};

export function ValueFeaturesSection({
  eyebrow = 'Visiems segmentams paruošėme startinius paketus',
  heading = (
    <>
      <span className="font-light">Sprendimai </span>
      <span className="font-medium">kiekvienam etapui</span>
    </>
  ),
  intro = 'Nesvarbu, kokį verslo modelį vystote – mes pasiruošę Jums padėti. Pasirinkite sritį, kuri Jums aktualiausia.',
  tabs = defaultTabs,
}: Props = {}) {
  const [activeTab, setActiveTab] = React.useState(0);
  const [tabContentVisible, setTabContentVisible] = React.useState(true);
  const [sectionRef, sectionVisible] = useInViewOnce<HTMLDivElement>({ threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  const activeData = tabs[activeTab];

  React.useEffect(() => {
    setTabContentVisible(false);
    const id = window.requestAnimationFrame(() => setTabContentVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, [activeTab]);

  const leftColumnStyle: React.CSSProperties = {
    opacity: sectionVisible ? 1 : 0,
    filter: sectionVisible ? 'blur(0px)' : 'blur(12px)',
    transform: sectionVisible ? 'translateY(0)' : 'translateY(18px)',
    transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
  };

  const rightColumnStyle: React.CSSProperties = {
    opacity: sectionVisible ? 1 : 0,
    filter: sectionVisible ? 'blur(0px)' : 'blur(12px)',
    transform: sectionVisible ? 'translateY(0)' : 'translateY(22px)',
    transition: 'opacity 0.78s cubic-bezier(0.22, 1, 0.36, 1), filter 0.78s cubic-bezier(0.22, 1, 0.36, 1), transform 0.78s cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDelay: sectionVisible ? '80ms' : '0ms',
  };

  const tabImageTransitionStyle: React.CSSProperties = {
    opacity: tabContentVisible ? 1 : 0,
    filter: tabContentVisible ? 'blur(0px)' : 'blur(12px)',
    transform: tabContentVisible ? 'translateY(0)' : 'translateY(10px) scale(0.985)',
    transition: 'opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
  };

  const tabTextTransitionStyle: React.CSSProperties = {
    opacity: tabContentVisible ? 1 : 0,
    filter: tabContentVisible ? 'blur(0px)' : 'blur(12px)',
    transform: tabContentVisible ? 'translateY(0)' : 'translateY(10px)',
    transition: 'opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1), filter 0.42s cubic-bezier(0.22, 1, 0.36, 1), transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDelay: tabContentVisible ? '35ms' : '0ms',
  };

  return (
    <section
      className="relative z-[2] overflow-x-clip pt-24 pb-20 max-[767px]:pt-16 max-[767px]:pb-14"
      style={{
        backgroundColor: '#EFE8DB',
        borderColor: 'rgba(26,16,16,0.12)',
        color: '#1A1010',
      }}
    >
      <div ref={sectionRef} className="relative z-[3] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="relative">
          <div className="flex w-full flex-row max-[991px]:flex-col">
            <div
              className="flex min-h-0 flex-col items-start justify-between gap-16 min-[992px]:min-h-[640px] min-[992px]:max-w-[332px] max-[991px]:mb-12 max-[991px]:max-w-none max-[991px]:justify-start max-[767px]:mb-8 max-[767px]:gap-8"
              style={leftColumnStyle}
            >
              <div className="flex flex-col gap-6">
                {eyebrow ? (
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} />
                    <span className="whitespace-nowrap uppercase text-[#1A1010]/65" style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em' }}>
                      {eyebrow}
                    </span>
                  </div>
                ) : null}

                <h2
                  className="m-0 text-[48px] leading-[48px] tracking-[-2px] max-[767px]:text-[36px] max-[767px]:leading-[40px] max-[767px]:tracking-[-1.5px] text-[#64151F]"
                  style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontWeight: 300 }}
                >
                  {heading}
                </h2>

                {intro ? (
                  <p className="m-0 text-[#1A1010]/72" style={{ ...BODY, fontSize: '16px', lineHeight: 1.5, fontWeight: 400 }}>
                    {intro}
                  </p>
                ) : null}
              </div>

              <div className="flex w-full flex-col border-t border-[#1A1010]/18 max-[767px]:mt-1">
                {tabs.map((tab, i) => {
                  const isActive = activeTab === i;
                  return (
                    <button
                      key={tab.label}
                      onClick={() => setActiveTab(i)}
                      className={`w-full cursor-pointer overflow-hidden border-0 border-b border-[#1A1010]/18 bg-transparent text-left outline-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-[767px]:min-h-[52px] ${
                        isActive ? '' : 'hover:pl-1'
                      }`}
                      style={{ padding: isActive ? '12px 0 12px 20px' : '12px 0' }}
                      type="button"
                    >
                      <div className="flex items-center gap-3 transition-all duration-200" style={{ marginLeft: '-20px' }}>
                        <div
                          className="h-2 w-2 shrink-0 bg-[#64151F] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ borderRadius: '0px', transform: isActive ? 'scale(1)' : 'scale(0.72)', opacity: isActive ? 1 : 0.65 }}
                        />
                        <span
                          className={`${isActive ? 'text-[#64151F]' : 'text-[#64151F]/62 hover:text-[#64151F]/84'} uppercase transition-colors duration-300`}
                          style={{ ...BODY, fontSize: '11px', lineHeight: '13px', fontWeight: 500, letterSpacing: '0.075em' }}
                        >
                          {tab.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className="absolute right-0 top-0 h-[640px] w-[62%] max-[991px]:static max-[991px]:h-auto max-[991px]:w-full overflow-hidden"
              style={{ borderRadius: '0px', ...rightColumnStyle }}
            >
              <div className="flex h-full w-full flex-row gap-[120px] max-[991px]:h-auto max-[991px]:gap-12 max-[767px]:flex-col max-[767px]:gap-8">
                <div
                  className="relative h-full w-full max-w-[472px] flex-1 overflow-hidden max-[991px]:h-[550px] max-[767px]:h-[400px] max-[767px]:max-w-none max-[767px]:flex-none"
                  style={{ borderRadius: '0px', ...tabImageTransitionStyle }}
                >
                  <img src={activeData.image} alt={activeData.heading} loading="lazy" className="absolute inset-0 z-[1] h-full w-full object-cover" />
                </div>

                <div className="flex flex-1 flex-col items-start justify-center gap-6 max-[767px]:gap-4" style={tabTextTransitionStyle}>
                  {activeData.price ? (
                    <div
                      className="inline-flex items-center gap-2 uppercase text-[#64151F]"
                      style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                    >
                      <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                      {activeData.pricePrefix ? `${activeData.pricePrefix}: ` : ''}{activeData.price}
                    </div>
                  ) : null}

                  <div className="flex flex-col items-start gap-4 max-[767px]:gap-3">
                    <h3
                      className="m-0 text-[24px] leading-[1.2] max-[767px]:text-[20px]"
                      style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontWeight: 400, color: '#64151F' }}
                    >
                      {activeData.heading}
                    </h3>
                    <p className="m-0 text-[#1A1010]/72 max-w-[52ch]" style={{ ...BODY, fontSize: '14px', lineHeight: '1.45', fontWeight: 400 }}>
                      {activeData.body}
                    </p>
                  </div>

                  {activeData.bullets && activeData.bullets.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      {activeData.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-2 text-[#1A1010]/86">
                          <SfCheckboxCheck size={16} className="mt-[1px] text-[#64151F] shrink-0" aria-hidden />
                          <span style={{ ...BODY, fontSize: '14px', lineHeight: '1.35', fontWeight: 400 }}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {activeData.cta ? (
                    <CtaLink
                      href="#kontaktai"
                      variant="primary"
                      className="mt-1"
                      labelClassName="whitespace-nowrap"
                      labelMode="static"
                    >
                      {activeData.cta}
                    </CtaLink>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueFeaturesSection;
