'use client';

import * as React from 'react';

export function useInViewOnce<T extends Element>(
  options?: IntersectionObserverInit
): [React.RefObject<T | null>, boolean] {
  const ref = React.useRef<T | null>(null);
  const [visible, setVisible] = React.useState(false);
  const optsRef = React.useRef(options);
  optsRef.current = options;

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
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px', ...optsRef.current }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}
