import type * as React from 'react';

/**
 * Bendri on-scroll / page-load reveal tokenai — viena vieta visai svetainei, kad
 * entrances (hero, sekcijos, kortelės) elgtųsi vienodai.
 */
export const REVEAL_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const REVEAL_DURATION_MS = 700;
export const REVEAL_BLUR_PX = 12;
export const REVEAL_TRANSLATE_Y_PX = 18;

/** Paruošta `style={{ ... }}` reikšmė entrance elementui su pasirenkamu delay. */
export function revealStyle(visible: boolean, delayMs: number = 0): React.CSSProperties {
  const t = `${REVEAL_DURATION_MS}ms ${REVEAL_EASE}${delayMs ? ` ${delayMs}ms` : ''}`;
  return {
    opacity: visible ? 1 : 0,
    filter: visible ? 'blur(0px)' : `blur(${REVEAL_BLUR_PX}px)`,
    transform: visible ? 'translateY(0)' : `translateY(${REVEAL_TRANSLATE_Y_PX}px)`,
    transition: `opacity ${t}, filter ${t}, transform ${t}`,
  };
}
