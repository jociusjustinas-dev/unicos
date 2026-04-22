'use client';

import * as React from 'react';
import { ChevronRightIcon } from '@/components/ui/ChevronArrows';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const footerLinkClass =
  'text-[#EFE8DB] no-underline text-[clamp(15px,1.1vw,20px)] font-normal leading-[1.4] tracking-[-0.03em] transition-opacity duration-200 hover:opacity-70 max-[479px]:text-sm';

const columnHeadingClass =
  'text-[10px] font-medium leading-3 tracking-[0.08em] uppercase text-[#EFE8DB]/50 max-[479px]:text-[10px]';

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-7 flex-none max-[479px]:gap-5">
      <div className={columnHeadingClass} style={BODY}>
        {title}
      </div>
      <nav className="flex flex-col gap-3" aria-label={title}>
        {links.map((item) => (
          <a key={item.label} href={item.href} className={footerLinkClass} style={BODY}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function FooterSection({
  variant = 'default',
}: {
  variant?: 'default' | 'greenCompact';
}) {
  const onNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (variant === 'greenCompact') {
    return (
      <footer
        id="kontaktai"
        className="relative z-[1] overflow-x-hidden bg-white text-[#3B443A] pt-10 pb-8 max-[479px]:pt-8 max-[479px]:pb-6 border-t border-[#1A1010]/12"
      >
        <div className="relative z-[2] w-full max-w-[1800px] mx-auto px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="flex items-center justify-between gap-10">
            <p
              className="m-0 text-sm font-medium leading-[142%] tracking-[-0.01em] text-[#3B443A] max-[479px]:text-xs"
              style={BODY}
            >
              Copyright © {new Date().getFullYear()} UNICOS. Visos teisės saugomos.
            </p>
            <a href="/" className="inline-block h-6 max-[479px]:h-[18px] w-fit">
              <span
                aria-hidden
                className="block"
                style={{
                  width: '176px',
                  height: '24px',
                  backgroundColor: '#3B443A',
                  WebkitMaskImage: 'url("/Group 1.svg")',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskImage: 'url("/Group 1.svg")',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'contain',
                }}
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      id="kontaktai"
      className="relative z-[1] overflow-x-hidden bg-[#1A1010] text-[#EFE8DB] pt-14 pb-10 max-[479px]:pt-12 max-[479px]:pb-8"
    >
      <div className="relative z-[2] w-full max-w-[1800px] mx-auto px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="flex flex-col gap-8 max-[991px]:gap-8 min-[992px]:flex-row min-[992px]:items-start min-[992px]:justify-between min-[992px]:gap-10">
          <div className="flex shrink-0 flex-col gap-6 max-[479px]:gap-5">
            <a href="/" className="inline-block h-6 max-[479px]:h-[18px] w-fit">
              <img
                src="/Group%201.svg"
                alt="UNICOS"
                className="h-full w-auto opacity-90"
                loading="lazy"
                width={3183}
                height={433}
                style={{ borderRadius: '0px' }}
              />
            </a>
            <p className="m-0 mt-2 text-[#EFE8DB]/55" style={{ ...BODY, fontSize: '13px', lineHeight: 1.45, fontWeight: 400 }}>
              Anksčiau Sugihara Pro
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-[#EFE8DB]/88" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45, fontWeight: 400 }}>
              <span>Metalo g. 13a, LT-02190, Vilnius</span>
              <a href="tel:+37052705712" className="text-[#EFE8DB] no-underline transition-opacity hover:opacity-80">
                (+370 5) 270 57 12
              </a>
              <a href="mailto:info@unicos.lt" className="text-[#EFE8DB] no-underline transition-opacity hover:opacity-80">
                info@unicos.lt
              </a>
            </div>

            <div className="flex flex-col items-start mb-0 max-[479px]:w-full">
              <form
                className="flex flex-col gap-4 max-[479px]:w-full"
                onSubmit={onNewsletterSubmit}
                noValidate
              >
                <div className="flex flex-col gap-3">
                  <div className={columnHeadingClass} style={BODY}>
                    Naujienlaiškis
                  </div>
                  <p className="m-0 max-w-[40ch] text-[#EFE8DB]/72" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45, fontWeight: 400 }}>
                    Gaukite ekspertines įžvalgas, kvietimus į mokymus ir specialius pasiūlymus.
                  </p>
                  <div className="relative max-w-[304px] max-[479px]:max-w-full">
                    <label htmlFor="footer-email" className="sr-only">
                      El. paštas
                    </label>
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="El. paštas"
                      maxLength={256}
                      required
                      className="w-full h-12 pl-4 pr-14 py-3 rounded-none border border-[rgba(239,232,219,0.22)] bg-[rgba(239,232,219,0.08)] text-[#EFE8DB] text-base font-normal placeholder:text-[rgba(239,232,219,0.45)] focus:outline-none focus:border-[#64151F] max-[479px]:text-sm"
                      style={BODY}
                    />
                    <div className="absolute inset-y-0 right-2 flex items-center justify-center">
                      <button
                        type="submit"
                        className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-visible rounded-none border-0 bg-transparent p-0 text-[#EFE8DB]/80 transition-colors hover:text-[#EFE8DB]"
                        aria-label="Prenumeruoti"
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <p
                  className="m-0 w-full max-w-[304px] text-[11px] font-normal leading-[1.45] text-[#EFE8DB]/45 max-[479px]:max-w-full max-[479px]:text-[10px]"
                  style={BODY}
                >
                  Prenumeruodami sutinkate gauti UNICOS naujienas (edukaciją, pasiūlymus) 1–2 k./mėn. Jūsų duomenys saugūs — skaitykite mūsų{' '}
                  <a
                    href="#"
                    className="text-[#EFE8DB]/60 underline underline-offset-[3px] transition-opacity hover:opacity-80"
                  >
                    privatumo politiką
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>

          <div className="flex shrink-0 gap-[min(7vw,107px)] pr-0 max-[991px]:pr-0 max-[767px]:flex-wrap max-[767px]:gap-x-16 max-[767px]:gap-y-10 max-[479px]:gap-x-12 max-[479px]:gap-y-10">
            <FooterColumn
              title="Navigacija"
              links={[
                { label: 'Prekių ženklai', href: '/prekiu-zenklai' },
                { label: 'Akademija', href: '/akademija' },
                { label: 'Partnerystė', href: '/partneryste' },
                { label: 'Apie UNICOS', href: '/apie-unicos' },
                { label: 'Resursai', href: '/resursai' },
                { label: 'Kontaktai', href: '/kontaktai' },
              ]}
            />
            <FooterColumn
              title="Sprendimai"
              links={[
                { label: 'Odos priežiūros specialistams', href: '/sprendimai/odos-specialistams' },
                { label: 'Plaukų priežiūros specialistams', href: '/sprendimai/plauku-prieziuros-specialistams' },
                { label: 'Estetinės medicinos klinikoms', href: '/sprendimai/estetines-medicinos-klinikoms' },
                { label: 'Vaistinėms ir farmacijos specialistams', href: '/sprendimai/vaistinems-ir-farmacijos-specialistams' },
              ]}
            />
            <FooterColumn
              title="Pagalba"
              links={[
                { label: 'Tapkite partneriu', href: '/tapkite-partneriu' },
                { label: 'Privatumo politika', href: '#' },
              ]}
            />
          </div>
        </div>

        {/* Wordmark: tas pats plotis kaip linija apačioje (vidinis konteineris + px) */}
        <div className="mt-16 mb-10 w-full max-[767px]:mt-12 max-[767px]:mb-8 max-[479px]:mt-10 max-[479px]:mb-6">
          <a href="/" className="block w-full max-w-full no-underline">
            <img
              src="/Group%201.svg"
              alt="UNICOS"
              className="block w-full max-w-full h-auto opacity-[0.42] hover:opacity-[0.55] transition-opacity duration-300"
              loading="lazy"
              width={3183}
              height={433}
              style={{ borderRadius: '0px' }}
            />
          </a>
        </div>

        <div className="border-t border-b border-[rgba(239,232,219,0.18)] py-6 max-[479px]:py-5">
          <div className="flex justify-between items-center gap-10 text-center max-[767px]:flex-wrap max-[479px]:flex-col max-[479px]:gap-6 max-[479px]:items-start max-[479px]:text-left">
            <div className="flex items-center gap-8 max-[479px]:flex-col max-[479px]:items-start max-[479px]:gap-8">
              <div className="flex items-center gap-4" aria-label="Socialinės paskyros">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#EFE8DB] opacity-50 transition-opacity duration-200 hover:opacity-100"
                  aria-label="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9617 0.36377C14.1251 0.388457 16.0796 0.920165 17.825 1.95889C19.5497 2.97688 20.9843 4.42031 21.9918 6.15114C23.0242 7.90712 23.5527 9.87341 23.5773 12.05C23.516 15.0281 22.5767 17.5718 20.7594 19.6808C18.942 21.7899 16.6144 23.0948 14.2049 23.595V15.2452H16.4829L16.9981 11.964H13.5487V9.81485C13.5295 9.36932 13.6704 8.93164 13.9459 8.58095C14.2218 8.2293 14.7075 8.04448 15.4032 8.02648H17.4862V5.15218C17.4563 5.14256 17.1727 5.10454 16.6354 5.0381C16.0261 4.96681 15.4133 4.92873 14.7998 4.92403C13.4113 4.93043 12.3131 5.32211 11.5054 6.09906C10.6976 6.87579 10.285 7.99956 10.2675 9.47035V11.964H7.64246V15.2452H10.2675V23.595C7.30895 23.0948 4.98137 21.7899 3.16402 19.6808C1.34668 17.5718 0.407399 15.0281 0.346077 12.05C0.370611 9.87331 0.899105 7.90702 1.93156 6.15114C2.93903 4.42031 4.3737 2.97689 6.09836 1.95889C7.84378 0.920365 9.79822 0.388657 11.9617 0.36377Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#EFE8DB] opacity-50 transition-opacity duration-200 hover:opacity-100"
                  aria-label="YouTube"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M10.5053 14.248L14.4088 11.9999L10.5053 9.75171V14.248Z" />
                    <path d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM19.4982 12.0123C19.4982 12.0123 19.4982 14.4459 19.1895 15.6194C19.0164 16.2618 18.5099 16.7682 17.8676 16.9411C16.6941 17.25 12 17.25 12 17.25C12 17.25 7.31818 17.25 6.13239 16.9288C5.49005 16.756 4.98358 16.2493 4.81055 15.607C4.50165 14.4459 4.50165 12 4.50165 12C4.50165 12 4.50165 9.56653 4.81055 8.39301C4.9834 7.75067 5.50232 7.23175 6.13239 7.0589C7.30591 6.75 12 6.75 12 6.75C12 6.75 16.6941 6.75 17.8676 7.07117C18.5099 7.24402 19.0164 7.75067 19.1895 8.39301C19.5106 9.56653 19.4982 12.0123 19.4982 12.0123Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#EFE8DB] opacity-50 transition-opacity duration-200 hover:opacity-100"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM8.51294 18.1406H5.59039V9.34808H8.51294V18.1406ZM7.05176 8.14746H7.03271C6.052 8.14746 5.41772 7.47235 5.41772 6.6286C5.41772 5.76581 6.07141 5.10938 7.07117 5.10938C8.07092 5.10938 8.68616 5.76581 8.7052 6.6286C8.7052 7.47235 8.07092 8.14746 7.05176 8.14746ZM19.051 18.1406H16.1288V13.4368C16.1288 12.2547 15.7057 11.4485 14.6483 11.4485C13.8409 11.4485 13.3601 11.9923 13.1488 12.5173C13.0715 12.7051 13.0527 12.9677 13.0527 13.2305V18.1406H10.1303C10.1303 18.1406 10.1686 10.173 10.1303 9.34808H13.0527V10.593C13.441 9.9939 14.1359 9.14172 15.6865 9.14172C17.6093 9.14172 19.051 10.3984 19.051 13.099V18.1406Z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm font-medium leading-[142%] tracking-[-0.01em] m-0 max-[479px]:text-xs" style={BODY}>
                Copyright © {new Date().getFullYear()} UNICOS. Visos teisės saugomos.
              </p>
            </div>
            <p className="text-sm font-medium leading-[142%] tracking-[-0.01em] m-0 max-[479px]:text-xs text-[#EFE8DB]/70" style={BODY}>
              Profesionali ir dermatologinė kosmetika verslui — Baltijos regione.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
