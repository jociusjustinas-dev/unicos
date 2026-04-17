'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [entered, setEntered] = React.useState(false);

  React.useEffect(() => {
    setEntered(false);
    const raf = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div
      key={pathname}
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? 'translateY(0px)' : 'translateY(8px)',
        transition: 'opacity 320ms cubic-bezier(0.22,1,0.36,1), transform 320ms cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {children}
    </div>
  );
}

export default PageTransition;

