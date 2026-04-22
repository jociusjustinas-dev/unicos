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
      const progress = -rect.top / vh;
      el.style.transform = `translateY(${progress * distance}px)`;
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

  if (asImage) {
    return (
      <img
        ref={(node) => {
          ref.current = node as HTMLImageElement | null;
        }}
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute inset-0 h-full w-full object-cover will-change-transform ${className}`.trim()}
        style={{ objectPosition }}
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
      className={`absolute inset-0 h-full w-full bg-cover will-change-transform ${className}`.trim()}
      style={{ backgroundImage: `url("${src}")`, backgroundPosition: objectPosition }}
    />
  );
}

export default ParallaxImage;
