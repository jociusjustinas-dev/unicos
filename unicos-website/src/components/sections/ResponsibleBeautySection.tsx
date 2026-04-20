'use client';

import * as React from 'react';
import {
  SfChatScience,
  SfFaceSmile,
  SfLeaf,
  SfQualityRibbon,
  SfShield,
  SfSparkles,
} from '@/components/icons/feather';
import type { StreamlineFreehandIconProps } from '@/components/icons/streamline-freehand';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const contactAvatar = {
  src: 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp',
  alt: 'Portretas',
} as const;

type BeautyFeature = {
  title: string;
  description: string;
  Icon: React.ComponentType<StreamlineFreehandIconProps>;
};

type BeautyCard = {
  title: string;
  description: string;
};

const defaultFeatures: BeautyFeature[] = [
  { title: 'Švari sudėtis', description: 'Produktai be parabenų, sulfatų ir tik agresyvių priedų.', Icon: SfSparkles },
  { title: 'Mokslu pagrįsta', description: 'Efektyvumas, įrodytas realiais klinikiniais tyrimais.', Icon: SfChatScience },
  { title: 'Tvarumas', description: 'Rūpinamės gamta: perdirbamos pakuotės ir atsakinga logistika.', Icon: SfLeaf },
  { title: 'Saugumas', description: 'Gamyba, atitinkanti aukščiausius gerosios gamybos praktikos standartus.', Icon: SfShield },
  { title: 'Aukščiausia kokybė', description: 'Kruopšti kokybės priežiūra kiekviename žingsnyje.', Icon: SfQualityRibbon },
  { title: 'Dermatologija', description: 'Saugumas, patikrintas ir patvirtintas dermatologų.', Icon: SfFaceSmile },
];

function useInView(threshold = 0.1, rootMargin = '0px 0px -6% 0px') {
  const ref = React.useRef<HTMLDivElement>(null);
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
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return { ref, visible };
}

const EASE_HALDEN = 'cubic-bezier(0.22, 1, 0.36, 1)';

export function ResponsibleBeautySection({
  eyebrowLabel,
  heading,
  subheading,
  cards,
  surfaceClassName = 'bg-white',
}: {
  eyebrowLabel?: string | null;
  heading?: React.ReactNode;
  subheading?: string | null;
  cards?: BeautyCard[];
  /** Sekcijos fonas (AGENTS: šviesus paviršiai → #EFE8DB ant kreminio puslapio). */
  surfaceClassName?: string;
}) {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = React.useState(false);

  /** Viena juosta kaip Halden: vienas IO, pakopinis vėlavimas (avatar → tekstas → CTA). */
  const { ref: guidanceRef, visible: guidanceVisible } = useInView(0.1);
  const { ref: headerRef, visible: headerVisible } = useInView(0.12);

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGridVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /** Halden home-c: fade + kilimas, be blur. */
  const headerReveal = headerVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-[1.25rem]';

  /** Kaip reference: 700ms, pakopinis įėjimas (ms). */
  const guidanceEase =
    'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none';
  const guidanceHidden = guidanceVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0';

  const resolvedEyebrow = eyebrowLabel === null ? null : eyebrowLabel ?? 'Mūsų standartas';
  const resolvedHeading =
    heading ??
    <>
      <span className="font-light">Atsakingas </span>
      <span className="font-medium">grožis</span>
    </>;
  const resolvedSubheading = subheading === null ? null : subheading ?? 'Mums svarbu ne tik galutinis rezultatas, bet ir kelias, kuriuo jis pasiekiamas. Renkamės partnerius, kuriems, kaip ir mums, rūpi tvarumas, etika ir atsakingas požiūris į aplinką.';

  const resolvedFeatures: BeautyFeature[] = React.useMemo(() => {
    const src = cards && cards.length ? cards : defaultFeatures.map(({ title, description }) => ({ title, description }));
    const normalized: BeautyCard[] = new Array(6).fill(null).map((_, i) => src[i] ?? defaultFeatures[i] ?? { title: '', description: '' });
    return normalized.map((c, i) => ({
      title: c.title,
      description: c.description,
      Icon: defaultFeatures[i]?.Icon ?? SfSparkles,
    }));
  }, [cards]);

  return (
    <section className={`relative z-[2] py-20 max-[767px]:py-14 text-[#1A1010] ${surfaceClassName}`}>
      <div className="relative z-[2] w-full max-w-[1800px] mx-auto px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="flex flex-col gap-16 max-[767px]:gap-12 mx-auto max-w-[1028px]">
          <div
            ref={headerRef}
            className={`flex flex-col items-center text-center gap-5 max-[767px]:gap-4 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${headerReveal}`}
          >
            {resolvedEyebrow ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 shrink-0 bg-[#3B443A]" style={{ borderRadius: '0px' }} aria-hidden />
                <span
                  className="text-[#3B443A] uppercase text-center"
                  style={{
                    fontSize: '11px',
                    fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                  }}
                >
                  {resolvedEyebrow}
                </span>
              </div>
            ) : null}
            <h2
              className="m-0 text-center tracking-[-0.02em] text-[#3B443A]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.06,
                fontWeight: 300,
              }}
            >
              {resolvedHeading}
            </h2>
            {resolvedSubheading ? (
              <p
                className="m-0 max-w-[720px] text-base leading-[1.55] text-[#1A1010] max-[767px]:text-[15px]"
                style={BODY}
              >
                {resolvedSubheading}
              </p>
            ) : null}
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-3 gap-4 max-[991px]:grid-cols-2 max-[479px]:grid-cols-1 max-[767px]:gap-3"
          >
            {resolvedFeatures.map((feature, i) => {
              /* Halden reference: 700ms, ~100ms stagger kortelėms */
              const entranceDelay = `${i * 100}ms`;
              const cardTransition = [
                `opacity 0.7s ${EASE_HALDEN} ${entranceDelay}`,
                `transform 0.7s ${EASE_HALDEN} ${entranceDelay}`,
                'background-color 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                'border-color 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
              ].join(', ');
              return (
              <div
                key={feature.title}
                className={`group flex w-full flex-col items-center gap-6 border border-[#1A1010]/10 bg-[#ECE2D3] p-8 text-center ease-out hover:bg-[#3B443A] hover:border-[#3B443A] max-[767px]:gap-5 max-[767px]:p-6 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ borderRadius: '0px', transition: cardTransition }}
              >
                <div
                  className="relative mx-auto flex h-14 w-14 shrink-0 overflow-visible border border-[#3B443A]/20 bg-[rgba(59,68,58,0.08)] p-2 text-[#3B443A] transition-[background-color,border-color,color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-[#EFE8DB]/35 group-hover:bg-[rgba(239,232,219,0.14)] group-hover:text-[#EFE8DB] max-[767px]:h-12 max-[767px]:w-12 max-[767px]:p-1.5 motion-reduce:transition-none"
                  style={{ borderRadius: '0px' }}
                >
                  <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <feature.Icon size={22} strokeWidth={1.65} className="overflow-visible" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center text-center">
                  <div
                    className="font-medium text-base leading-6 text-[#1A1010] transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[#EFE8DB] motion-reduce:transition-none max-[767px]:text-[15px] max-[767px]:leading-[1.4]"
                    style={{ ...BODY, fontWeight: 500 }}
                  >
                    {feature.title}
                  </div>
                  <div
                    className="text-sm leading-5 text-[#1A1010]/70 transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[#EFE8DB]/88"
                    style={BODY}
                  >
                    {feature.description}
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          <div
            ref={guidanceRef}
            className="mx-auto flex w-full max-w-[56rem] flex-row flex-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-4"
          >
            <div className={`flex shrink-0 justify-center ${guidanceEase} delay-0 ${guidanceHidden}`}>
              <div className="h-12 w-12 shrink-0 overflow-hidden max-[479px]:h-10 max-[479px]:w-10" style={{ borderRadius: '0px' }}>
                <img
                  src={contactAvatar.src}
                  loading="lazy"
                  alt={contactAvatar.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={`max-w-[min(20rem,100%)] shrink text-left ${guidanceEase} delay-[80ms] ${guidanceHidden}`}
            >
              <div className="text-sm font-medium leading-5 text-[#1A1010]" style={BODY}>
                Reikia konsultacijos?
              </div>
              <div className="text-sm leading-5 text-[#1A1010]/65" style={BODY}>
                Visada mielai padėsime.
              </div>
            </div>

            <div className={`shrink-0 ${guidanceEase} delay-[160ms] ${guidanceHidden}`}>
              <CtaLink href="#kontaktai" variant="secondary">
                Susisiekite
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResponsibleBeautySection;
