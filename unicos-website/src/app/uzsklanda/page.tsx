import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

export const metadata: Metadata = {
  title: 'UNICOS — netrukus',
  description: 'Sugihara PRO tampa UNICOS — nauja platforma profesionalams jau visai netrukus.',
  robots: { index: false, follow: false },
};

const BODY: CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const HEADING: CSSProperties = {
  fontFamily: "'Quiche Sans', Georgia, serif",
};

export default function UzsklandaPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[#EFE8DB] px-6 py-16 text-center text-[#1A1010] max-[479px]:px-4">
      <div className="flex w-full max-w-[560px] flex-col items-center gap-8">
        <img
          src="/unicos-logo.svg"
          alt="UNICOS"
          width={220}
          height={64}
          className="h-auto w-[min(220px,62vw)]"
          style={{
            filter:
              'invert(12%) sepia(43%) saturate(1442%) hue-rotate(321deg) brightness(95%) contrast(95%)',
          }}
        />

        <div className="flex flex-col items-center gap-5">
          <h1
            className="m-0 text-balance text-[#64151F] tracking-[-0.02em]"
            style={{ ...HEADING, fontSize: 'clamp(2rem, 5vw, 2.75rem)', lineHeight: 1.08, fontWeight: 300 }}
          >
            Kuriame kažką naujo.
          </h1>

          <p
            className="m-0 max-w-[42ch] text-balance text-[#1A1010]/82"
            style={{ ...BODY, fontSize: 'clamp(1rem, 2.2vw, 1.125rem)', lineHeight: 1.6, fontWeight: 400 }}
          >
            Sugihara PRO tampa UNICOS — nauja platforma profesionalams jau visai netrukus.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 border-t border-[#1A1010]/12 pt-8">
          <p
            className="m-0 uppercase text-[#1A1010]/62"
            style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}
          >
            Iki tol dirbame įprastai:
          </p>

          <div className="flex flex-col items-center gap-2">
            <a
              href="tel:+37060000000"
              className="text-[#64151F] no-underline transition-opacity duration-200 hover:opacity-75"
              style={{ ...BODY, fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              +370 600 00000
            </a>
            <a
              href="mailto:info@unicos.lt"
              className="text-[#64151F] no-underline transition-opacity duration-200 hover:opacity-75"
              style={{ ...BODY, fontSize: 'clamp(1rem, 2.2vw, 1.125rem)', fontWeight: 400 }}
            >
              info@unicos.lt
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
