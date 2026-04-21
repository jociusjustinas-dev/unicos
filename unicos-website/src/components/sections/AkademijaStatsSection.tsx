'use client';

import * as React from 'react';
import { AKADEMIJA_STATS } from '@/config/akademijaPage';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function AkademijaStatsSection() {
  return (
    <section className="relative z-[2] bg-white py-16 max-[767px]:py-12">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AKADEMIJA_STATS.map((s) => (
            <div
              key={s.line}
              className="flex flex-col gap-2 border border-solid border-[#1A1010]/10 bg-[#EFE8DB]/25 p-6"
              style={{ borderRadius: '0px' }}
            >
              <span
                className="text-[#3B443A] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                }}
              >
                {s.line}
              </span>
              <span className="text-[#1A1010]/70" style={{ ...BODY, fontSize: '15px', lineHeight: 1.45, fontWeight: 400 }}>
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AkademijaStatsSection;
