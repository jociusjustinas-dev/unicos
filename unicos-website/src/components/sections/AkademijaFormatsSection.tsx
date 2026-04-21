'use client';

import * as React from 'react';
import Link from 'next/link';
import { AKADEMIJA_FORMAT_CARDS } from '@/config/akademijaPage';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function AkademijaFormatsSection() {
  return (
    <section className="relative z-[2] bg-[#EFE8DB] py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <h2
          className="m-0 mb-12 text-center text-[#64151F] tracking-[-0.02em] max-[767px]:mb-10"
          style={{
            fontFamily: "'Quiche Sans', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            lineHeight: 1.06,
            fontWeight: 300,
          }}
        >
          <span className="font-light">Mokymų </span>
          <span className="font-medium">formatai.</span>
        </h2>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
          {AKADEMIJA_FORMAT_CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-3 border border-solid border-[#1A1010]/10 bg-white/50 p-8 max-[767px]:p-6"
              style={{ borderRadius: '0px' }}
            >
              <h3 className="m-0 text-[#64151F]" style={{ ...BODY, fontSize: '18px', fontWeight: 600, lineHeight: 1.3 }}>
                {c.title}
              </h3>
              <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55, fontWeight: 400 }}>
                {c.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[720px] text-center" style={BODY}>
          <Link
            href="/kontaktai"
            className="text-[15px] font-medium text-[#64151F] underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Norite uždarųjų mokymų? Susisiekite
          </Link>
        </p>
      </div>
    </section>
  );
}

export default AkademijaFormatsSection;
