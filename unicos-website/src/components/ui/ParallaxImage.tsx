'use client';

import * as React from 'react';

type ParallaxImageProps = {
  src: string;
  alt?: string;
  className?: string;
  /** Kiek pixelių translate'ui visame scroll'e — didesnis = ryškesnis parallax. */
  distance?: number;
  /** Kokia objekto pozicija (CSS `object-position` / background-position) — „center 30%“, etc. */
  objectPosition?: string;
  /** Jei `true`, renderina `<img>` (semantiškas alt tekstui). Kitaip — `background-image` div'as. */
  asImage?: boolean;
  loading?: 'eager' | 'lazy';
};

/**
 * Švelnus vertikalus parallax — vaizdas juda ~40px per scroll'o ilgį, sukeldamas
 * „gyvo“ puslapio įspūdį. Naudoti ant nuotraukų sekcijose (išskyrus prekių ženklų ir
 * akademijos korteles, kur veikia atskiros transform animacijos).
 */
export function ParallaxImage({
  src,
  alt = '',
  className = '',
  distance = 40,
  objectPosition = 'center',
  asImage = false,
  loading = 'lazy',
}: ParallaxImageProps) {
  const ref = React.useRef<HTMLDivElement | HTMLImageElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !el.parentElement) return;
    const parent = el.parentElement;

    let rafId = 0;
    const apply = () => {
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      /** Progress 0..1 — kada elementas keliauja per viewport'ą. Klampavimas neišpainioja ribų. */
      const raw = (vh - rect.top) / (vh + rect.height);
      const progress = Math.max(0, Math.min(1, raw));
      /** Centruojame diapazoną ties 0, kad juda vienodai į abi puses nuo vidurio. */
      const shift = (progress - 0.5) * distance;
      el.style.transform = `translate3d(0, ${shift}px, 0)`;
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(apply);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [distance]);

  /**
   * Platus „overscan“ (3× distance į kiekvieną pusę) — sub-pikselio hairline'as po
   * GPU transformacijos garantuotai lieka už konteinerio ribų.
   */
  const overhang = distance * 3;
  const overscanStyle: React.CSSProperties = {
    top: `-${overhang}px`,
    right: `-${overhang}px`,
    bottom: `-${overhang}px`,
    left: `-${overhang}px`,
    backfaceVisibility: 'hidden',
  };

  if (asImage) {
    return (
      <img
        ref={(node) => {
          ref.current = node as HTMLImageElement | null;
        }}
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute object-cover will-change-transform ${className}`.trim()}
        style={{ ...overscanStyle, objectPosition }}
      />
    );
  }

  return (
    <div
      ref={(node) => {
        ref.current = node as HTMLDivElement | null;
      }}
      role="img"
      aria-label={alt || undefined}
      className={`absolute bg-cover will-change-transform ${className}`.trim()}
      style={{ ...overscanStyle, backgroundImage: `url("${src}")`, backgroundPosition: objectPosition }}
    />
  );
}

export default ParallaxImage;
