'use client';

import * as React from 'react';
import type { AudienceCards4 } from '@/config/sprendimaiSolutionLanding';
import { CtaLink } from '@/components/ui/CtaLink';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { ParallaxImage } from '@/components/ui/ParallaxImage';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

type TabFromCard = {
  label: string;
  heading: string;
  body: string;
  image: string;
};

function cardsToTabs(cards: AudienceCards4): TabFromCard[] {
  return cards.map((c) => ({
    label: c.heading,
    heading: c.heading,
    body: c.body,
    image: c.bg,
  }));
}

export function BrandProductLinesTabsSection({
  heading,
  subheading,
  cards,
  consultTitle,
  consultBody,
}: {
  heading: React.ReactNode;
  subheading: string;
  cards: AudienceCards4;
  consultTitle: string;
  consultBody: string;
}) {
  const tabs = React.useMemo(() => cardsToTabs(cards), [cards]);
  const [activeTab, setActiveTab] = React.useState(0);
  const [tabContentVisible, setTabContentVisible] = React.useState(true);
  const [sectionRef, sectionVisible] = useInViewOnce<HTMLDivElement>({ threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  const activeData = tabs[activeTab]!;

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
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} />
                  <span
                    className="uppercase text-[#1A1010]/65"
                    style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em' }}
                  >
                    Guinot profesionalios linijos
                  </span>
                </div>

                <h2
                  className="m-0 text-[48px] leading-[48px] tracking-[-2px] max-[767px]:text-[36px] max-[767px]:leading-[40px] max-[767px]:tracking-[-1.5px] text-[#64151F]"
                  style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontWeight: 300 }}
                >
                  {heading}
                </h2>

                <p className="m-0 text-[#1A1010]/72" style={{ ...BODY, fontSize: '16px', lineHeight: 1.5, fontWeight: 400 }}>
                  {subheading}
                </p>
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
                  <ParallaxImage src={activeData.image} alt={activeData.heading} asImage loading="lazy" distance={40} className="z-[1]" />
                </div>

                <div className="flex flex-1 flex-col items-start justify-center gap-6 max-[767px]:gap-4" style={tabTextTransitionStyle}>
                  <div className="flex flex-col items-start gap-4 max-[767px]:gap-3">
                    <h3
                      className="m-0 text-[24px] leading-[1.2] max-[767px]:text-[20px]"
                      style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontWeight: 400, color: '#64151F' }}
                    >
                      {activeData.heading}
                    </h3>
                    <p className="m-0 max-w-[52ch] text-[#1A1010]/72" style={{ ...BODY, fontSize: '14px', lineHeight: '1.45', fontWeight: 400 }}>
                      {activeData.body}
                    </p>
                  </div>

                  <div className="mt-1 flex flex-col gap-2 border-t border-[#1A1010]/12 pt-5">
                    <p className="m-0 text-[#1A1010]/80" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45, fontWeight: 500 }}>
                      {consultTitle}
                    </p>
                    <p className="m-0 text-[#1A1010]/65" style={{ ...BODY, fontSize: '13px', lineHeight: 1.45, fontWeight: 400 }}>
                      {consultBody}
                    </p>
                    <CtaLink href="/kontaktai" variant="primary" className="mt-2" labelClassName="whitespace-nowrap" labelMode="static">
                      Rašyti vadybininkui
                    </CtaLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandProductLinesTabsSection;
