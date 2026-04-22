'use client';

import * as React from 'react';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const defaultStatBadge = '+35% pajamų augimas';

const defaultQuote =
  '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio. Svarbiausia — oficialus atstovavimas ir struktūruoti protokolai suteikia ramybę kiekvieną dieną.“';

const defaultAuthorName = 'Dr. Ieva Kazlauskienė';
const defaultAuthorMeta = 'Dermatovenerologė, Vilnius';

/** Home atsiliepimų sekcijos portretas — naudojamas visur tas pats žmogaus įvaizdis. */
const defaultPortraitSrc = '/testimonials-photo.png';
const defaultPortraitAlt = 'Dr. Ieva Kazlauskienė';

/** Paaiškinimo tekstas po foto buvo panaikintas globaliai; paliekama galimybė perrašyti. */
const defaultFootnote = '';

function useInViewOnce(threshold = 0.1) {
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
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function OdosPartnerSpotlightSection({
  spotlightHeadingId = 'odos-spotlight-heading',
  statBadge = defaultStatBadge,
  quote = defaultQuote,
  authorName = defaultAuthorName,
  authorMeta = defaultAuthorMeta,
  portraitSrc = defaultPortraitSrc,
  portraitAlt = defaultPortraitAlt,
  footnote = defaultFootnote,
}: {
  spotlightHeadingId?: string;
  statBadge?: string;
  quote?: string;
  authorName?: string;
  authorMeta?: string;
  portraitSrc?: string;
  portraitAlt?: string;
  footnote?: string;
} = {}) {
  const root = useInViewOnce(0.08);
  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';
  const reveal: React.CSSProperties = {
    opacity: root.visible ? 1 : 0,
    transform: root.visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.75s ${ease}, transform 0.75s ${ease}`,
  };

  return (
    <section
      id="partnerystes-istorija"
      className="relative z-[2] overflow-x-clip bg-[#3B443A] py-[clamp(4.5rem,10vw,6.5rem)] text-[#EFE8DB] max-[767px]:py-16 max-[479px]:py-14"
      aria-labelledby={spotlightHeadingId}
    >
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={root.ref}
          className="grid grid-cols-1 items-stretch gap-12 min-[992px]:grid-cols-2 min-[992px]:gap-x-[min(5rem,6vw)] min-[992px]:gap-y-0 max-[991px]:gap-10"
          style={reveal}
        >
          <div className="flex min-w-0 flex-col justify-center gap-8 max-[991px]:order-1 max-[991px]:gap-7">
            <div
              className="inline-flex w-fit border border-[#EFE8DB]/22 bg-[#EFE8DB]/[0.08] px-3 py-2"
              style={{ borderRadius: '0px' }}
            >
              <span className="text-[#EFE8DB]" style={{ ...BODY, fontSize: '13px', lineHeight: '18px', fontWeight: 600, letterSpacing: '0.02em' }}>
                {statBadge}
              </span>
            </div>

            <h2 id={spotlightHeadingId} className="sr-only">
              Partnerės atsiliepimas
            </h2>

            <blockquote className="m-0 border-0 p-0">
              <p
                className="m-0 text-[#EFE8DB]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)',
                  lineHeight: 1.35,
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                }}
              >
                {quote}
              </p>
            </blockquote>

            <div className="flex flex-col gap-2 border-t border-[#EFE8DB]/16 pt-8 max-[991px]:pt-6">
              <p className="m-0 text-[#EFE8DB]" style={{ ...BODY, fontSize: '17px', lineHeight: '24px', fontWeight: 600 }}>
                {authorName}
              </p>
              <p className="m-0 text-[#EFE8DB]/72" style={{ ...BODY, fontSize: '14px', lineHeight: '22px', fontWeight: 400 }}>
                {authorMeta}
              </p>
            </div>
          </div>

          <div className="relative min-h-[min(420px,52vw)] w-full min-[992px]:min-h-[480px] max-[991px]:order-2 max-[991px]:min-h-[320px]">
            <div
              className="relative h-full min-h-[inherit] w-full overflow-hidden border border-[#EFE8DB]/14"
              style={{ borderRadius: '0px' }}
            >
              <img src={portraitSrc} alt={portraitAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_25%]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,16,0.05),rgba(26,16,16,0.35))]" aria-hidden />
            </div>
            {footnote ? (
              <p className="mt-4 m-0 text-[#EFE8DB]/58" style={{ ...BODY, fontSize: '13px', lineHeight: 1.5, fontWeight: 400 }}>
                {footnote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OdosPartnerSpotlightSection;
