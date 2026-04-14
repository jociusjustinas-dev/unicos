'use client';

import * as React from 'react';
import { SfActivity, SfClock, SfLayers } from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const IMAGE_SRC = '/device.webp';

const features = [
  {
    Icon: SfClock,
    title: 'Užsakymai bet kuriuo paros metu',
    body: 'Prisijunkite ir pateikite užsakymus tada, kai Jums patogu — be ribotų darbo valandų.',
  },
  {
    Icon: SfActivity,
    title: 'Likučių stebėjimas realiu laiku',
    body: 'Matykite atsargas ir planuokite papildymus be spėlionių.',
  },
  {
    Icon: SfLayers,
    title: 'Patogi užsakymų istorija',
    body: 'Vienoje vietoje — užsakymai, dokumentai ir atsakymai klientams.',
  },
] as const;

export function PlatformSplitSection() {
  const [headlineRef, headlineVisible] = useInViewOnce<HTMLDivElement>();
  const [imageRef, imageVisible] = useInViewOnce<HTMLDivElement>();
  const featureRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [featureVisible, setFeatureVisible] = React.useState<boolean[]>(() => features.map(() => false));

  React.useEffect(() => {
    const cleanups: (() => void)[] = [];
    featureRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setFeatureVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      obs.observe(el);
      cleanups.push(() => obs.disconnect());
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  const headlineStyle: React.CSSProperties = {
    opacity: headlineVisible ? 1 : 0,
    filter: headlineVisible ? 'blur(0px)' : 'blur(12px)',
    transform: headlineVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
  };

  const imageStyle: React.CSSProperties = {
    opacity: imageVisible ? 1 : 0,
    transform: imageVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  };

  return (
    <section id="platforma" className="relative z-[2] overflow-x-clip bg-white py-16 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-x-[min(8.25rem,7vw)] lg:gap-y-0">
          {/* Kairė: antraštė + ypatybės */}
          <div
            className="flex max-w-[564px] flex-col gap-12 max-[767px]:gap-10 lg:max-w-none"
          >
            <div
              ref={headlineRef}
              className="flex flex-col items-start gap-6 max-[767px]:gap-4"
              style={headlineStyle}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 bg-[#3B443A]" style={{ borderRadius: '0px' }} aria-hidden />
                <span
                  className="uppercase text-[#3B443A]"
                  style={{
                    fontSize: '11px',
                    fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                  }}
                >
                  Platforma verslui
                </span>
              </div>

              <div className="flex flex-col gap-5" style={{ gap: '20px' }}>
                <h2
                  className="m-0 max-[767px]:text-[32px] max-[767px]:leading-[1.12] max-[767px]:tracking-[-0.5px]"
                  style={{
                    fontFamily: "'Quiche Sans', Georgia, serif",
                    fontSize: 'clamp(32px, 3.2vw, 40px)',
                    lineHeight: '1.12',
                    letterSpacing: '-1px',
                    color: '#3B443A',
                  }}
                >
                  <span className="font-medium">Daugiau laiko </span>
                  <span className="font-medium">Jums</span>
                  <br />
                  <span className="font-light">ir Jūsų klientams.</span>
                </h2>
                <p className="m-0 max-w-[52ch] text-[#1A1010]/80" style={{ ...BODY, fontSize: '16px', lineHeight: '1.55', fontWeight: 400 }}>
                  Sukūrėme platformą, kuri paverčia užsakymus malonumu. Pamirškite sudėtingą administravimą.
                </p>
              </div>

              <CtaLink href="#platform-ypatybes" variant="secondary" labelMode="slide">
                Kaip veikia platforma?
              </CtaLink>
            </div>

            <div id="platform-ypatybes" className="flex flex-col gap-10">
              {features.map((f, i) => {
                const { Icon } = f;
                const vis = featureVisible[i];
                return (
                  <div
                    key={f.title}
                    ref={(el) => {
                      featureRefs.current[i] = el;
                    }}
                    className="flex flex-row items-center gap-4 max-[479px]:gap-3"
                    style={{
                      opacity: vis ? 1 : 0,
                      transform: vis ? 'translateY(0)' : 'translateY(16px)',
                      transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                      transitionDelay: vis ? `${i * 90}ms` : '0ms',
                    }}
                  >
                    <div
                      className="grid h-14 w-14 shrink-0 place-items-center overflow-visible border border-[#3B443A]/20 bg-[rgba(59,68,58,0.1)] p-2 text-[#3B443A] max-[767px]:h-12 max-[767px]:w-12 max-[767px]:p-1.5"
                      style={{ borderRadius: '0px' }}
                    >
                      <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center overflow-visible">
                        <Icon size={22} strokeWidth={1.75} className="overflow-visible" aria-hidden />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <div
                        className="font-medium text-[#1A1010]"
                        style={{ ...BODY, fontSize: '15px', lineHeight: '1.35', fontWeight: 500 }}
                      >
                        {f.title}
                      </div>
                      <p className="m-0 text-sm leading-5 text-[#1A1010]/65" style={BODY}>
                        {f.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dešinė: aukštis = kairiojo stulpelio eilutės aukštis (grid stretch) */}
          <div
            ref={imageRef}
            className="relative min-h-[280px] w-full overflow-hidden bg-[rgba(59,68,58,0.08)] lg:min-h-0 lg:h-full"
            style={{ ...imageStyle, borderRadius: '0px' }}
          >
            <img
              src={IMAGE_SRC}
              alt="Platformos įrenginio vaizdas."
              className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformSplitSection;
