'use client';

import * as React from 'react';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function AkademijaNewsletterSection() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="relative z-[2] border-t border-solid border-[#1A1010]/10 bg-[#EFE8DB] py-16 max-[767px]:py-12">
      <div className="relative z-[2] mx-auto w-full max-w-[720px] px-16 text-center max-[767px]:px-6 max-[479px]:px-4">
        <h2
          className="m-0 text-[#64151F] tracking-[-0.02em]"
          style={{
            fontFamily: "'Quiche Sans', Georgia, serif",
            fontSize: 'clamp(1.65rem, 3vw, 2.25rem)',
            lineHeight: 1.12,
            fontWeight: 300,
          }}
        >
          <span className="font-light">Sužinokite apie mokymus </span>
          <span className="font-medium">pirmieji.</span>
        </h2>
        <p className="m-0 mx-auto mt-4 max-w-[48ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
          Gaukite asmeninius kvietimus ir registruokitės anksčiau už kitus.
        </p>

        <form className="mx-auto mt-8 flex w-full max-w-[420px] flex-col items-stretch gap-4 text-left" onSubmit={onSubmit} noValidate>
          <label htmlFor="akademija-newsletter-email" className="sr-only">
            Jūsų el. paštas
          </label>
          <input
            id="akademija-newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Jūsų el. paštas"
            maxLength={256}
            required
            className="h-12 w-full border border-solid border-[rgba(26,16,16,0.18)] bg-[rgba(26,16,16,0.05)] px-4 py-3 text-base text-[#1A1010] placeholder:text-[rgba(26,16,16,0.45)] focus:border-[#64151F] focus:outline-none max-[479px]:text-sm"
            style={{ ...BODY, borderRadius: '0px' }}
          />
          <button
            type="submit"
            className="h-12 w-full border-0 bg-[#64151F] px-6 text-[15px] font-medium text-[#EFE8DB] transition-colors hover:bg-[#521220]"
            style={{ ...BODY, borderRadius: '0px' }}
          >
            Prenumeruoti
          </button>
          <p className="m-0 text-center text-[#1A1010]/55" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45, fontWeight: 400 }}>
            Sutinku gauti informaciją apie renginius. Duomenys tvarkomi pagal{' '}
            <a href="#" className="text-[#64151F] underline underline-offset-2">
              privatumo politiką
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

export default AkademijaNewsletterSection;
