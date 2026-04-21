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
    <section className="relative z-[2] bg-[#EFE8DB] py-16 max-[991px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="grid grid-cols-1 items-start gap-10 min-[992px]:grid-cols-2 min-[992px]:items-center min-[992px]:gap-[min(4rem,6vw)]">
          <div className="flex min-w-0 flex-col gap-4 max-[991px]:mx-auto max-[991px]:max-w-[36rem] max-[991px]:text-center min-[992px]:max-w-[46ch] min-[992px]:text-left">
            <h2
              className="m-0 text-[#64151F] tracking-[-0.02em]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(1.65rem, 2.8vw, 2.35rem)',
                lineHeight: 1.12,
                fontWeight: 300,
              }}
            >
              <span className="font-light">Sužinokite apie mokymus </span>
              <span className="font-medium">pirmieji.</span>
            </h2>
            <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
              Gaukite asmeninius kvietimus ir registruokitės anksčiau už kitus.
            </p>
          </div>

          <div className="min-w-0 max-[991px]:mx-auto max-[991px]:w-full max-[991px]:max-w-[420px]">
            <form className="flex w-full flex-col gap-4" onSubmit={onSubmit} noValidate>
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
              <p className="m-0 text-[#1A1010]/55 max-[991px]:text-center min-[992px]:text-left" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45, fontWeight: 400 }}>
                Sutinku gauti informaciją apie renginius. Duomenys tvarkomi pagal{' '}
                <a href="#" className="text-[#64151F] underline underline-offset-2">
                  privatumo politiką
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AkademijaNewsletterSection;
