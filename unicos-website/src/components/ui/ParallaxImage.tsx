'use client';

import * as React from 'react';

type ParallaxImageProps = {
  src: string;
  alt?: string;
  className?: string;
  /** Maksimalus pikselių judesys į abi puses (iš viso 2×distance). */
  distance?: number;
  /** CSS `object-position` / background-position. */
  objectPosition?: string;
  /** `<img>` (semantiškas) arba `<div>` su background-image. */
  asImage?: boolean;
  loading?: 'eager' | 'lazy';
};

/** Fiksuotas paveikslėlio padidinimas, kad translate'as netrauktu tuščios tėvo erdvės. */
const SCALE = 1.12;

/**
 * Švelnus vertikalus parallax — vaizdas juda kartu su scroll'u, ~40px ribose, visada
 * pilnai uždengia tėvo konteinerį. Naudoja fiksuotą `scale(1.12)`, tad net ir didelio
 * shift'o atveju foto užpildo kraštus.
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
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = ref.current as HTMLImageElement | HTMLDivElement | null;
    if (!el || !el.parentElement) return;
    const parent = el.parentElement;

    let rafId = 0;
    const apply = () => {
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const raw = (vh - rect.top) / (vh + rect.height);
      const progress = Math.max(0, Math.min(1, raw));
      const shift = (progress - 0.5) * distance;
      el.style.transform = `scale(${SCALE}) translate3d(0, ${shift}px, 0)`;
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(apply);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.transform = `scale(${SCALE})`;
      return;
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [distance]);

  const commonStyle: React.CSSProperties = {
    transform: `scale(${SCALE})`,
    transformOrigin: 'center',
    backfaceVisibility: 'hidden',
    willChange: 'transform',
  };

  if (asImage) {
    return (
      <img
        ref={(node) => {
          ref.current = node as unknown as HTMLElement | null;
        }}
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute inset-0 h-full w-full object-cover ${className}`.trim()}
        style={{ ...commonStyle, objectPosition }}
      />
    );
  }

  return (
    <div
      ref={(node) => {
        ref.current = node as unknown as HTMLElement | null;
      }}
      role="img"
      aria-label={alt || undefined}
      className={`absolute inset-0 h-full w-full bg-cover ${className}`.trim()}
      style={{ ...commonStyle, backgroundImage: `url("${src}")`, backgroundPosition: objectPosition }}
    />
  );
}

export default ParallaxImage;
