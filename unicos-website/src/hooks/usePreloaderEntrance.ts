'use client';

import * as React from 'react';

const DEFAULT_FAIL_MS = 1500;

/**
 * Vienas paleidimas po `preloader:done` (klausytojas `useLayoutEffect` — anksčiau
 * už tėvų `useEffect`, pvz. Preloader), plius avarija jei įvykis prarandamas
 * (Next lenktynė, atidėtas mount).
 */
export function usePreloaderEntrance(run: () => void, failSafeMs: number = DEFAULT_FAIL_MS) {
  const runRef = React.useRef(run);
  const doneRef = React.useRef(false);
  runRef.current = run;

  const once = React.useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    runRef.current();
  }, []);

  React.useLayoutEffect(() => {
    const on = () => once();
    window.addEventListener('preloader:done', on);
    return () => window.removeEventListener('preloader:done', on);
  }, [once]);

  React.useEffect(() => {
    const id = window.setTimeout(() => once(), failSafeMs);
    return () => window.clearTimeout(id);
  }, [once, failSafeMs]);
}
