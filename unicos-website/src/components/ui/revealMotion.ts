import type * as React from 'react';

/**
 * Bendri on-scroll / page-load reveal tokenai — viena vieta visai svetainei, kad
 * entrances (hero, sekcijos, kortelės) elgtųsi vienodai. Lengvai prailginta trukmė
 * + didesnis shift + švelnesnis easing, kad scrollinant jaustųsi „gyvas“ puslapis.
 */
export const REVEAL_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const REVEAL_DURATION_MS = 900;
export const REVEAL_BLUR_PX = 14;
export const REVEAL_TRANSLATE_Y_PX = 24;
/** Minimalus paleidimo delay — subtili pauzė po trigger'io, leidžia akiai „pagauti“. */
export const REVEAL_BASE_DELAY_MS = 60;

/** Paruošta `style={{ ... }}` reikšmė entrance elementui su pasirenkamu papildomu delay. */
export function revealStyle(visible: boolean, extraDelayMs: number = 0): React.CSSProperties {
  const delayMs = REVEAL_BASE_DELAY_MS + extraDelayMs;
  const t = `${REVEAL_DURATION_MS}ms ${REVEAL_EASE} ${delayMs}ms`;
  return {
    opacity: visible ? 1 : 0,
    filter: visible ? 'blur(0px)' : `blur(${REVEAL_BLUR_PX}px)`,
    transform: visible ? 'translateY(0)' : `translateY(${REVEAL_TRANSLATE_Y_PX}px)`,
    transition: `opacity ${t}, filter ${t}, transform ${t}`,
  };
}
