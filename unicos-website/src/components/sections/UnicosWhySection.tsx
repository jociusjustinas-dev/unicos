'use client';

import * as React from 'react';
import { SfArrowCounterclockwise, SfMapPin, SfTruck } from '@/components/icons/feather';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

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

export type UnicosWhyBubble = {
  title: string;
  body: string;
  icon: string;
  hoverBg: string;
  hoverFg: string;
  border: string;
};

/** `mint` — kaip OdosStarterCalloutSection vidinis paviršius (#E8EDE9), žalia antraštė. */
export type UnicosWhyBackdropTone = 'warmCream' | 'mint';

type UnicosWhySectionProps = {
  heading?: React.ReactNode;
  subheading?: string;
  showHighlights?: boolean;
  /** Jei nenurodyta — numatytieji 3 burbulai kaip pagrindiniame puslapyje. */
  bubbles?: readonly UnicosWhyBubble[];
  /**
   * Kai `false` — be fono video ir kremo gradientų (pvz. prekių ženklų puslapyje,
   * kad video atmosfera liktų tik hero viršuje).
   */
  withFooterVideoBackdrop?: boolean;
  /** Fono / gradientų / antraštės tonas; `mint` derina su žaliu callout bloku virš sekcijos. */
  backdropTone?: UnicosWhyBackdropTone;
};

const DEFAULT_BUBBLES: readonly UnicosWhyBubble[] = [
  {
    title: 'Atrinkta Jums',
    body: 'Kiekvieną produktą pirmiausia išbandome patys. Siūlome tik tai, kuo patys tikime ir kas tikrai veikia.',
    icon: '/Icon.svg',
    hoverBg: '#64151F',
    hoverFg: '#EFE8DB',
    border: 'rgba(100,21,31,0.38)',
  },
  {
    title: 'Žinios, kurios įkvepia',
    body: 'Dalijamės ne sausais protokolais, o realia patirtimi. Mūsų akademija – erdvė, kurioje galite drąsiai tobulėti.',
    icon: '/Icon-1.svg',
    hoverBg: '#3B443A',
    hoverFg: '#EFE8DB',
    border: 'rgba(59,68,58,0.34)',
  },
  {
    title: 'Augame kartu',
    body: 'Šiame kelyje Jūs ne vieni. Padedame susidėlioti asortimentą ir kainodarą taip, kad Jūsų verslas klestėtų.',
    icon: '/Icon-2.svg',
    hoverBg: '#1A1010',
    hoverFg: '#EFE8DB',
    border: 'rgba(26,16,16,0.32)',
  },
];

export function UnicosWhySection({
  heading = (
    <>
      <span className="font-light">Kodėl </span>
      <span className="font-medium">Unicos?</span>
    </>
  ),
  subheading = '„Sugihara Pro“ tapo Unicos, kad būtume dar arčiau Jūsų. Mūsų tikslas – ne tik pristatyti užsakymus, bet ir būti Jūsų kokybės filtru bei ramybės garantu.',
  showHighlights = true,
  bubbles,
  withFooterVideoBackdrop = true,
  backdropTone = 'warmCream',
}: UnicosWhySectionProps = {}) {
  const [headlineRef, headlineVisible] = useRevealOnce<HTMLDivElement>();
  const [gridRef, gridVisible] = useRevealOnce<HTMLDivElement>({ threshold: 0.3, rootMargin: '0px 0px -18% 0px' });
  const [hoveredBubble, setHoveredBubble] = React.useState<number | null>(null);
  const bgVideoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    if (!withFooterVideoBackdrop) return;
    const video = bgVideoRef.current;
    if (!video) return;
    const applyRate = () => {
      video.playbackRate = 0.5;
    };
    applyRate();
    video.addEventListener('loadedmetadata', applyRate);
    return () => video.removeEventListener('loadedmetadata', applyRate);
  }, [withFooterVideoBackdrop]);

  const headlineReveal = headlineVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[12px] translate-y-5';
  const gridReveal = gridVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]';

  const highlights = [
    { Icon: SfTruck, label: 'Pristatymas 24h' },
    { Icon: SfMapPin, label: 'Visoje Lietuvoje' },
    { Icon: SfArrowCounterclockwise, label: 'Lankstus grąžinimas' },
  ] as const;

  const values = bubbles ?? DEFAULT_BUBBLES;

  const isMint = backdropTone === 'mint';
  const bubbleIdleBg = !withFooterVideoBackdrop
    ? 'rgba(255,255,255,0.22)'
    : isMint
      ? 'rgba(232,237,233,0.42)'
      : 'rgba(239,232,219,0.36)';

  const sectionBgClass = !withFooterVideoBackdrop
    ? 'bg-transparent'
    : isMint
      ? 'bg-[#E8EDE9]'
      : 'bg-[#EFE8DB]';

  const gradientTop =
    withFooterVideoBackdrop && isMint
      ? 'linear-gradient(180deg, rgba(232,237,233,0.92), rgba(232,237,233,0))'
      : 'linear-gradient(180deg, rgba(239,232,219,0.86), rgba(239,232,219,0))';
  const gradientBottom =
    withFooterVideoBackdrop && isMint
      ? 'linear-gradient(0deg, rgba(232,237,233,0.94), rgba(232,237,233,0))'
      : 'linear-gradient(0deg, rgba(239,232,219,0.9), rgba(239,232,219,0))';

  const headingColorClass = isMint ? 'text-[#3B443A]' : 'text-[#64151F]';
  const highlightColorClass = isMint ? 'text-[#3B443A]' : 'text-[#64151F]';
  const separatorClass = isMint ? 'bg-[#3B443A]/18' : 'bg-[#1A1010]/15';

  return (
    <section className={`relative z-[2] overflow-x-clip pt-16 pb-28 max-[767px]:pt-12 max-[767px]:pb-20 ${sectionBgClass}`}>
      {withFooterVideoBackdrop ? (
        <>
          <div className="pointer-events-none absolute inset-0 z-0 flex opacity-[0.42]" aria-hidden>
            <video
              ref={bgVideoRef}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/68ad5d7e748bdec61171c8d9%2F68b008bdf61a798d3721c7db_Footer-poster-00001.jpg")',
              }}
            >
              <source src="https://cdn.prod.website-files.com/68ad5d7e748bdec61171c8d9%2F68b008bdf61a798d3721c7db_Footer-transcode.mp4" type="video/mp4" />
              <source src="https://cdn.prod.website-files.com/68ad5d7e748bdec61171c8d9%2F68b008bdf61a798d3721c7db_Footer-transcode.webm" type="video/webm" />
            </video>
          </div>
          <div
            className="pointer-events-none absolute top-0 left-0 right-0 z-[1] h-[22%]"
            style={{ backgroundImage: gradientTop }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[38%]"
            style={{ backgroundImage: gradientBottom }}
            aria-hidden
          />
        </>
      ) : null}
      <div className="relative z-[2] w-full max-w-[1800px] mx-auto px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headlineRef}
          className={`flex flex-col items-center text-center mx-auto mb-20 max-w-[720px] max-[767px]:mb-14 max-[767px]:gap-5 gap-6 transition-all duration-700 ease-out ${headlineReveal}`}
        >
          <h2
            className={`m-0 text-center tracking-[-2px] text-[clamp(36px,4vw,48px)] leading-[1.08] max-[767px]:tracking-[-1.5px] ${headingColorClass}`}
            style={{ fontFamily: "'Quiche Sans', Georgia, serif" }}
          >
            {heading}
          </h2>

          <p
            className="m-0 text-base leading-[1.55] text-[#1A1010]/75 max-[767px]:text-[15px]"
            style={BODY}
          >
            {subheading}
          </p>

          {showHighlights ? (
            <div className="flex w-full max-w-[920px] flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-1 max-[479px]:gap-x-6">
              {highlights.map(({ Icon, label }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-3 ${highlightColorClass}`}
                  style={BODY}
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                    <Icon size={18} strokeWidth={1.75} className={`block shrink-0 overflow-visible ${highlightColorClass}`} aria-hidden />
                  </span>
                  <span className="text-[13px] font-medium leading-snug normal-case sm:text-[14px]">{label}</span>
                </span>
              ))}
            </div>
          ) : null}

          <div className={`w-full max-w-[200px] h-px mt-2 ${separatorClass}`} role="separator" aria-hidden />
        </div>

        <div ref={gridRef} className={`mx-auto max-w-[1144px] transition-all duration-700 ease-out ${gridReveal}`}>
          <div className="flex items-center justify-center max-[991px]:justify-start max-[767px]:flex-col max-[767px]:items-center">
            {values.map((v, i) => (
              <div
                key={`${v.title}-${i}`}
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
                {(() => {
                  const isHovered = hoveredBubble === i;
                  const bubbleBg = isHovered ? v.hoverBg : bubbleIdleBg;
                  const bubbleFg = isHovered ? v.hoverFg : '#1A1010';
                  return (
                <div
                  className="group flex h-[388px] w-[388px] flex-col justify-center px-20 transition-[background-color,color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-[991px]:h-[340px] max-[991px]:w-[340px] max-[991px]:px-14 max-[767px]:h-auto max-[767px]:w-[min(92vw,388px)] max-[767px]:items-center max-[767px]:px-10 max-[767px]:py-10"
                  style={{
                    borderRadius: '100vw',
                    backgroundColor: bubbleBg,
                    color: bubbleFg,
                    border: `1px solid ${v.border}`,
                    backdropFilter: isHovered ? 'blur(0px)' : 'blur(10px)',
                    WebkitBackdropFilter: isHovered ? 'blur(0px)' : 'blur(10px)',
                    boxShadow: isHovered ? 'none' : 'inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                >
                  <h3
                    className="m-0 text-[clamp(1.25rem,1.65vw,1.8rem)] leading-[1.12] tracking-[-0.02em] max-[991px]:text-[clamp(1.18rem,1.5vw,1.6rem)] max-[767px]:text-center"
                    style={{ ...BODY, fontWeight: 500 }}
                  >
                    {v.title}
                  </h3>
                  <div className="mt-5 mb-5 flex h-[84px] w-[84px] items-center justify-center max-[991px]:h-[72px] max-[991px]:w-[72px]">
                    <img
                      src={v.icon}
                      alt=""
                      aria-hidden
                      className="h-full w-full object-contain opacity-60 transition-[opacity,filter,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        opacity: isHovered ? 0.95 : 0.6,
                        transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                        filter: isHovered ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                  </div>
                  <p className="m-0 max-w-[26ch] text-[15px] leading-[1.45] max-[991px]:text-[14px] max-[767px]:text-center" style={{ ...BODY, fontWeight: 400 }}>
                    {v.body}
                  </p>
                </div>
                  );
                })()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnicosWhySection;
