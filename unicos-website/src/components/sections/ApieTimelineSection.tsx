'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/ChevronArrows';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

type Milestone = {
  year: string;
  title: string;
  body: string;
};

const milestones: Milestone[] = [
  {
    year: '2001',
    title: 'Sugihara Pro pradžia',
    body: 'Pirmieji profesionalūs prekių ženklai Lietuvos grožio rinkoje.',
  },
  {
    year: '2008',
    title: 'Pirmoji akademija',
    body: 'Pradėjome organizuoti praktinius seminarus profesionalams.',
  },
  {
    year: '2015',
    title: '500 partnerių',
    body: 'Pasiekėme pusę tūkstančio aktyvių partnerių visoje Lietuvoje.',
  },
  {
    year: '2020',
    title: 'Savitarnos platforma',
    body: 'Paleidome skaitmeninę užsakymų platformą partneriams.',
  },
  {
    year: '2026',
    title: 'UNICOS',
    body: 'Evoliucija į naują partnerystės modelį — aiškesnį, artimesnį ir stipresnį.',
  },
];

export function ApieTimelineSection() {
  const [headingRef, headingVisible] = useInViewOnce<HTMLDivElement>();
  const [timelineRef, timelineVisible] = useInViewOnce<HTMLDivElement>({ threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [hoveredYear, setHoveredYear] = React.useState<string | null>(null);

  const scrollTrack = (direction: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.max(260, Math.round(el.clientWidth * 0.72));
    el.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
  };

  return (
    <section className="relative z-[2] overflow-x-clip bg-[#EFE8DB] py-[clamp(5rem,12vw,7rem)] text-[#1A1010] max-[479px]:py-20">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headingRef}
          className="mb-12 flex items-center justify-between gap-4 max-[767px]:mb-10"
          style={{
            opacity: headingVisible ? 1 : 0,
            filter: headingVisible ? 'blur(0px)' : 'blur(12px)',
            transform: headingVisible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <h2
            className="m-0 leading-[1.12] tracking-[-0.02em] text-center max-[767px]:text-left"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 300,
              color: '#3B443A',
            }}
          >
            <span className="font-medium">Mūsų kelias</span>
          </h2>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollTrack('prev')}
              className="group flex h-12 w-12 items-center justify-center overflow-visible border border-[#1A1010]/18 bg-transparent p-0 text-[#1A1010] transition-[background-color,color,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#3B443A] hover:bg-[#3B443A] hover:text-[#EFE8DB]"
              style={{ borderRadius: '0px' }}
              aria-label="Ankstesni metai"
            >
              <ChevronLeftIcon className="h-[22px] w-[22px] text-current" />
            </button>
            <button
              type="button"
              onClick={() => scrollTrack('next')}
              className="group flex h-12 w-12 items-center justify-center overflow-visible border border-[#1A1010]/18 bg-transparent p-0 text-[#1A1010] transition-[background-color,color,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#3B443A] hover:bg-[#3B443A] hover:text-[#EFE8DB]"
              style={{ borderRadius: '0px' }}
              aria-label="Kiti metai"
            >
              <ChevronRightIcon className="h-[22px] w-[22px] text-current" />
            </button>
          </div>
        </div>

        <div
          ref={timelineRef}
          className="relative"
          style={{
            opacity: timelineVisible ? 1 : 0,
            transform: timelineVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div className="relative">
            <div className="pointer-events-none absolute left-0 right-0 top-[39px] z-[0] h-px bg-[#1A1010]/18" aria-hidden />

            <div
              ref={trackRef}
              className="relative z-[1] flex snap-x snap-mandatory gap-14 overflow-x-auto pb-2 pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[767px]:gap-10"
            >
              {milestones.map((item, index) => (
                <article
                  key={item.year}
                  className="flex min-w-[280px] max-w-[280px] snap-start flex-col gap-6 transition-opacity duration-300 max-[767px]:min-w-[240px] max-[767px]:max-w-[240px]"
                  onMouseEnter={() => setHoveredYear(item.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                  style={{
                    opacity: timelineVisible ? (hoveredYear && hoveredYear !== item.year ? 0.46 : 1) : 0,
                    transform: timelineVisible ? 'translateY(0)' : 'translateY(18px)',
                    transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
                  }}
                >
                  <div className="relative z-[2] flex h-20 w-20 items-center justify-center border border-[#1A1010]/12 bg-[#3B443A]" style={{ borderRadius: '0px' }}>
                    <span
                      className="text-[#EFE8DB]"
                      style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: '26px', lineHeight: 1, fontWeight: 300 }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="m-0 text-[#1A1010]"
                      style={{ ...BODY, fontSize: '15px', lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.005em' }}
                    >
                      {item.title}
                    </h3>
                    <p className="m-0 text-[#1A1010]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55, fontWeight: 400 }}>
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApieTimelineSection;
