'use client';

import * as React from 'react';
import { AKADEMIJA_WHY_CARDS } from '@/config/akademijaPage';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function AkademijaWhySection() {
  return (
    <section className="relative z-[2] bg-white py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="mx-auto mb-12 max-w-[720px] text-center max-[767px]:mb-10">
          <h2
            className="m-0 text-[#3B443A] tracking-[-0.02em]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.06,
              fontWeight: 300,
            }}
          >
            <span className="font-light">Kodėl verta mokytis </span>
            <span className="font-medium">su mumis?</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2">
          {AKADEMIJA_WHY_CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-3 border border-solid border-[#1A1010]/10 bg-[#EFE8DB]/35 p-8 text-left max-[767px]:p-6"
              style={{ borderRadius: '0px' }}
            >
              <h3 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '17px', fontWeight: 600, lineHeight: 1.35 }}>
                {c.title}
              </h3>
              <p className="m-0 text-[#1A1010]/72" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55, fontWeight: 400 }}>
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AkademijaWhySection;
