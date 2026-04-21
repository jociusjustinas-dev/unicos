'use client';

import * as React from 'react';
import { SfAward, SfClock, SfMapPin, SfMonitor } from '@/components/icons/feather';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/ChevronArrows';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { AkademijaEyebrowLabel } from '@/components/sections/akademija/AkademijaEyebrowLabel';
import { CtaLink } from '@/components/ui/CtaLink';
import type { PrekiuZenklaiBrandLandingConfig } from '@/config/prekiuZenklaiBrandLanding';

export type CmsGridTrainingsCopy = PrekiuZenklaiBrandLandingConfig['trainings'];

const DEFAULT_TRAININGS: CmsGridTrainingsCopy = {
  headingLight: 'Mokymai ir ',
  headingBold: 'renginiai',
  body:
    'Tikime, kad augti galima tik nuolat mokantis. Kviečiame į praktinius seminarus, produktų pristatymus ir verslo dirbtuves, kurios įkvėps naujiems pasiekimams.',
  ctaHref: '#',
  ctaLabel: 'Visi renginiai',
};

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const labelClass =
  'text-[10px] font-medium uppercase leading-3 tracking-[0.08em] text-[#1A1010]/55';

const SPEAKER_AVATAR = 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp';

type EventCardData = {
  id: string;
  tags: string[];
  datetime: string;
  title: string;
  /** Vieta ar formatas (ikona: žemėlapis arba ekranas) */
  rowLeft: string;
  /** Sertifikatas / diplomas / kita (ikona: apdovanojimas) */
  rowRight: string;
  /** Trečia eilutė po row (pvz. liko vietų) */
  statusLine?: string;
  /** Ar status eilutė silpnesnio tono */
  statusMuted?: boolean;
  statusTone?: 'green' | 'maroon';
  speaker: string;
  role: string;
  speakerAvatar?: string;
  price: string;
  href: string;
  image: string;
  srcSet?: string;
  /** true = Monitor ikona vietoj MapPin */
  onlineVenue?: boolean;
};

const events: EventCardData[] = [
  {
    id: 'evt-1',
    tags: ['DERMATOLOGIJA', 'GYVAI', 'LT'],
    datetime: 'Spalio 24, 10:00–16:00',
    title: 'Neostrata rūgštinių pilingų meistriškumas',
    rowLeft: 'Vilnius, UNICOS Akademija',
    rowRight: 'Tarptautinis sertifikatas',
    statusLine: 'Liko 4 vietos',
    statusMuted: true,
    statusTone: 'maroon',
    speaker: 'Dr. Rūta Gancevičienė',
    role: 'Dermatovenerologė',
    speakerAvatar: SPEAKER_AVATAR,
    price: '49 €',
    href: '/akademija/renginiai/evt-1',
    image: '/mega-menu/1.jpeg',
  },
  {
    id: 'evt-2',
    tags: ['KOSMETOLOGIJA', 'GYVAI', 'LT'],
    datetime: 'Lapkričio 05, 11:00–15:00',
    title: 'Guinot aparatinės procedūros: Hydradermie',
    rowLeft: 'Kaunas, viešbutis „Moxy“',
    rowRight: 'Dalyvio diplomas',
    statusLine: 'Registracija atvira',
    statusTone: 'green',
    speaker: 'Laura Simanavičiūtė',
    role: 'Guinot trenerė',
    speakerAvatar: SPEAKER_AVATAR,
    price: 'Nemokama',
    href: '/akademija/renginiai/evt-2',
    image: '/mega-menu/2.jpeg',
  },
  {
    id: 'evt-3',
    tags: ['VERSLAS', 'ONLINE', 'LT-EN'],
    datetime: 'Lapkričio 12, 09:00–11:00',
    title: 'Verslo augimo pusryčiai: Kainodara',
    rowLeft: 'Online / Zoom',
    rowRight: 'Nėra',
    statusLine: 'Neribota',
    statusTone: 'green',
    onlineVenue: true,
    speaker: 'Tomas Misiukonis',
    role: 'Verslo konsultantas',
    speakerAvatar: SPEAKER_AVATAR,
    price: '29 €',
    href: '/akademija/renginiai/evt-3',
    image: '/mega-menu/3.jpeg',
  },
];

const iconClass = 'block shrink-0 text-[#1A1010]/55 !overflow-visible';

const metaIconWrap = 'inline-flex h-5 w-5 shrink-0 items-center justify-center';
const carouselNavBtnClass =
  'group flex h-12 w-12 shrink-0 items-center justify-center overflow-visible border border-[#1A1010]/18 bg-transparent p-0 text-[#1A1010] transition-[background-color,color,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#3B443A] hover:bg-[#3B443A] hover:text-[#EFE8DB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64151F] disabled:pointer-events-none disabled:opacity-35';

function EventCard({ card, registerLabel }: { card: EventCardData; registerLabel: string }) {
  const LocIcon = card.onlineVenue ? SfMonitor : SfMapPin;

  return (
    <article
      className="group/event flex w-full cursor-pointer flex-col gap-5 border-[1px] border-solid border-[#1A1010]/10 bg-white/40 transform-gpu will-change-transform transition-[transform,border-color] duration-500 ease-in-out hover:-translate-y-[1px] hover:border-[#64151F]/20 max-[767px]:gap-4"
      style={{ borderRadius: '0px' }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest('a,button,input,textarea,select,label')) return;
        window.location.href = card.href;
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = card.href;
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`Atidaryti renginį: ${card.title}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ borderRadius: '0px' }}>
        <img
          src={card.image}
          srcSet={card.srcSet}
          sizes="(max-width: 767px) 100vw, (max-width: 1400px) 45vw, 520px"
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover/event:scale-[1.008]"
          loading="lazy"
        />
        {card.statusLine ? (
          <div
            className={
              'pointer-events-none absolute top-3 right-3 z-[1] inline-flex max-w-[calc(100%-1.5rem)] items-center justify-center border-[1px] border-solid px-3 py-[7px] ' +
              (card.statusTone === 'green'
                ? 'border-[#3B443A]/35 bg-[#3B443A]/92 text-[#EFE8DB]'
                : 'border-[#64151F]/35 bg-[#64151F]/92 ' + (card.statusMuted ? 'text-[#EFE8DB]/86' : 'text-[#EFE8DB]'))
            }
            style={{
              ...BODY,
              fontSize: '13px',
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: '0.02em',
              borderRadius: '0px',
            }}
          >
            {card.statusLine}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-6 px-5 pb-6 pt-1 max-[767px]:gap-5 max-[767px]:px-4 max-[767px]:pb-5">
        <div className="flex flex-wrap items-center gap-2">
          {card.tags.map((t) => (
            <span
              key={t}
              className="cursor-pointer border-[1px] border-solid border-[#1A1010]/18 bg-[#EFE8DB]/80 px-2 py-1 uppercase text-[#1A1010] transition-[background-color,border-color,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#64151F] hover:bg-[#64151F] hover:text-[#EFE8DB]"
              style={{
                ...BODY,
                fontSize: '10px',
                letterSpacing: '0.1em',
                fontWeight: 500,
                lineHeight: '12px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3
          className="m-0 text-[#1A1010] transition-colors duration-300 group-hover/event:text-[#64151F]"
          style={{
            fontFamily: "'Quiche Sans', Georgia, serif",
            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
            lineHeight: 1.25,
            fontWeight: 400,
            letterSpacing: '-0.02em',
          }}
        >
          {card.title}
        </h3>

        <div className="flex flex-col items-start gap-2.5 overflow-visible text-[#1A1010]/82" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45 }}>
          <span className="inline-flex max-w-full items-center gap-2">
            <span className={metaIconWrap}>
              <SfClock className={iconClass} size={16} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="min-w-0 break-words">{card.datetime}</span>
          </span>
          <span className="inline-flex max-w-full items-center gap-2">
            <span className={metaIconWrap}>
              <LocIcon className={iconClass} size={16} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="min-w-0 break-words">{card.rowLeft}</span>
          </span>
          <span className="inline-flex max-w-full items-center gap-2">
            <span className={metaIconWrap}>
              <SfAward className={iconClass} size={16} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="min-w-0 break-words">{card.rowRight}</span>
          </span>
        </div>

        <div className="flex flex-col gap-3 border-t-[1px] border-solid border-[#1A1010]/10 pt-4 sm:flex-row sm:items-center sm:gap-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden border-[1px] border-solid border-[#1A1010]/12 bg-[#EFE8DB]/80" style={{ borderRadius: '0px' }} aria-hidden>
            {card.speakerAvatar ? <img src={card.speakerAvatar} alt="" className="h-full w-full object-cover" loading="lazy" /> : null}
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[#1A1010]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, lineHeight: 1.4 }}>
              {card.speaker}
            </span>
            <span className="text-[#1A1010]/60" style={{ ...BODY, fontSize: '14px', fontWeight: 400, lineHeight: 1.4 }}>
              {card.role}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t-[1px] border-solid border-[#1A1010]/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className={labelClass} style={BODY}>
              KAINA
            </div>
            <p className="m-0 mt-1 text-[#64151F]" style={{ ...BODY, fontSize: '20px', fontWeight: 500, lineHeight: 1.2 }}>
              {card.price}
            </p>
          </div>
          <CtaLink href="#kontaktai" variant="primary" className="self-start sm:self-auto">
            {registerLabel}
          </CtaLink>
        </div>
      </div>
    </article>
  );
}

const revealEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

function EventCardReveal({ card, registerLabel }: { card: EventCardData; registerLabel: string }) {
  const [ref, visible] = useInViewOnce<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: '0px 0px -10% 0px',
  });
  const [isMobileViewport, setIsMobileViewport] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldRevealNow = isMobileViewport || visible;

  const style: React.CSSProperties = {
    opacity: shouldRevealNow ? 1 : 0,
    filter: shouldRevealNow ? 'blur(0px)' : 'blur(10px)',
    transform: shouldRevealNow ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ${revealEase}, filter 0.7s ${revealEase}, transform 0.7s ${revealEase}`,
  };

  return (
    <div ref={ref} className="min-w-0 max-[767px]:min-w-[86%] max-[479px]:min-w-[92%] max-[767px]:snap-start" style={style}>
      <EventCard card={card} registerLabel={registerLabel} />
    </div>
  );
}

type CmsGridSectionProps = {
  /** Jei nenurodyta — bendra UNICOS mokymų sekcija. Brand puslapiams perduokite `config.trainings`. */
  trainings?: CmsGridTrainingsCopy;
  /** Pagrindinis CTA ant renginio kortelės (be rodyklių). */
  registerCtaLabel?: string;
};

export function CmsGridSection({ trainings, registerCtaLabel = 'Registruotis' }: CmsGridSectionProps = {}) {
  const t = { ...DEFAULT_TRAININGS, ...trainings };
  const [sidebarRef, sidebarVisible] = useInViewOnce<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: '0px 0px -8% 0px',
  });
  const mobileCarouselRef = React.useRef<HTMLDivElement | null>(null);

  const onNotifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const scrollMobileCards = (direction: 'prev' | 'next') => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const step = Math.max(240, Math.round(el.clientWidth * 0.88));
    el.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
  };

  const sidebarStyle: React.CSSProperties = {
    opacity: sidebarVisible ? 1 : 0,
    filter: sidebarVisible ? 'blur(0px)' : 'blur(12px)',
    transform: sidebarVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s ${revealEase}, filter 0.7s ${revealEase}, transform 0.7s ${revealEase}`,
  };

  return (
    <section id="mokymai-renginiai" className="relative z-[2] overflow-x-clip bg-[#EFE8DB] py-20 max-[767px]:py-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="grid grid-cols-1 gap-14 min-[992px]:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] min-[992px]:items-start min-[992px]:gap-[min(5rem,6vw)]">
          {/* Kairė: lipni juosta */}
          <div
            ref={sidebarRef}
            style={sidebarStyle}
            className="flex max-w-[520px] flex-col gap-10 max-[991px]:max-w-none min-[992px]:sticky min-[992px]:top-28 min-[992px]:self-start"
          >
            <div className="flex flex-col gap-5 max-[767px]:gap-4">
              <AkademijaEyebrowLabel />

              <h2
                className="m-0 tracking-[-0.02em] text-[#64151F]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: 1.06,
                  fontWeight: 300,
                }}
              >
                <span className="font-light">{t.headingLight}</span>
                <span className="font-medium">{t.headingBold}</span>
              </h2>

              <p className="m-0 max-w-[48ch] text-[#1A1010]/82" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
                {t.body}
              </p>

              <CtaLink href={t.ctaHref} variant="primary" className="w-fit">
                {t.ctaLabel}
              </CtaLink>
            </div>

            <div className="hidden min-[992px]:block h-px w-full bg-[#1A1010]/12" aria-hidden />

            <div className="hidden min-[992px]:flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '17px', lineHeight: 1.35, fontWeight: 500 }}>
                  Sužinokite apie mokymus pirmieji
                </p>
                <p className="m-0 max-w-[40ch] whitespace-nowrap text-[#1A1010]/75" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                  Gaukite asmeninius kvietimus ir registruokitės anksčiau už kitus.
                </p>
              </div>

              <form className="flex flex-col gap-3" onSubmit={onNotifySubmit} noValidate>
                <label htmlFor="events-notify-email" className={labelClass} style={BODY}>
                  Jūsų el. paštas
                </label>
                <div className="relative w-full max-w-[360px]">
                  <input
                    id="events-notify-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="vardas@pastas.lt"
                    maxLength={256}
                    required
                    className="h-12 w-full rounded-none border-[1px] border-solid border-[rgba(26,16,16,0.18)] bg-[rgba(26,16,16,0.05)] py-3 pl-4 pr-14 text-base font-normal text-[#1A1010] placeholder:text-[rgba(26,16,16,0.45)] focus:border-[1px] focus:border-[#64151F] focus:outline-none max-[479px]:text-sm"
                    style={BODY}
                  />
                  <div className="absolute inset-y-0 right-2 flex items-center justify-center">
                    <button
                      type="submit"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-visible rounded-none border-0 bg-transparent p-0 text-[#1A1010]/80 transition-colors hover:text-[#64151F]"
                      aria-label="Prenumeruoti"
                    >
                      <ChevronRightIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <p className="m-0 max-w-[52ch] text-[#1A1010]/55" style={{ ...BODY, fontSize: '11px', lineHeight: 1.45, fontWeight: 400 }}>
                  Prenumeruodami sutinkate gauti UNICOS naujienas (edukaciją, pasiūlymus) 1–2 k./mėn. Jūsų duomenys saugūs — skaitykite mūsų{' '}
                  <a href="#" className="text-[#64151F] underline underline-offset-2 transition-opacity hover:opacity-80">
                    privatumo politiką
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>

          {/* Dešinė: kortelės — mobile karuselė, desktop grid */}
          <div
            ref={mobileCarouselRef}
            className="flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-0 pr-1 max-[767px]:-mx-1 max-[767px]:px-1 min-[768px]:grid min-[768px]:grid-cols-2 min-[768px]:gap-x-8 min-[768px]:gap-y-10 min-[992px]:gap-x-10 min-[992px]:gap-y-12 min-[768px]:overflow-visible min-[768px]:snap-none min-[768px]:p-0 min-[768px]:pr-0"
          >
            {events.map((card) => (
              <EventCardReveal key={card.id} card={card} registerLabel={registerCtaLabel} />
            ))}
          </div>

          <div className="mt-0 flex items-center justify-end gap-2 min-[768px]:hidden">
            <button
              type="button"
              onClick={() => scrollMobileCards('prev')}
              className={carouselNavBtnClass}
              style={{ borderRadius: '0px' }}
              aria-label="Ankstesnės kortelės"
            >
              <ChevronLeftIcon className="h-[22px] w-[22px] text-current" />
            </button>
            <button
              type="button"
              onClick={() => scrollMobileCards('next')}
              className={carouselNavBtnClass}
              style={{ borderRadius: '0px' }}
              aria-label="Kitos kortelės"
            >
              <ChevronRightIcon className="h-[22px] w-[22px] text-current" />
            </button>
          </div>

          <div className="min-[992px]:hidden mt-2 flex w-full flex-col gap-4">
            <div className="h-px w-full bg-[#1A1010]/12" aria-hidden />
            <div className="flex flex-col gap-2">
              <p className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '17px', lineHeight: 1.35, fontWeight: 500 }}>
                Sužinokite apie mokymus pirmieji
              </p>
              <p className="m-0 max-w-[40ch] whitespace-nowrap text-[#1A1010]/75" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                Gaukite asmeninius kvietimus ir registruokitės anksčiau už kitus.
              </p>
            </div>

            <form className="flex w-full flex-col gap-3" onSubmit={onNotifySubmit} noValidate>
              <label htmlFor="events-notify-email-mobile" className={labelClass} style={BODY}>
                Jūsų el. paštas
              </label>
              <div className="relative w-full max-w-none">
                <input
                  id="events-notify-email-mobile"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="vardas@pastas.lt"
                  maxLength={256}
                  required
                  className="h-12 w-full rounded-none border-[1px] border-solid border-[rgba(26,16,16,0.18)] bg-[rgba(26,16,16,0.05)] py-3 pl-4 pr-14 text-base font-normal text-[#1A1010] placeholder:text-[rgba(26,16,16,0.45)] focus:border-[1px] focus:border-[#64151F] focus:outline-none max-[479px]:text-sm"
                  style={BODY}
                />
                <div className="absolute inset-y-0 right-2 flex items-center justify-center">
                  <button
                    type="submit"
                    className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-visible rounded-none border-0 bg-transparent p-0 text-[#1A1010]/80 transition-colors hover:text-[#64151F]"
                    aria-label="Prenumeruoti"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="m-0 max-w-[52ch] text-[#1A1010]/55" style={{ ...BODY, fontSize: '11px', lineHeight: 1.45, fontWeight: 400 }}>
                Prenumeruodami sutinkate gauti UNICOS naujienas (edukaciją, pasiūlymus) 1–2 k./mėn. Jūsų duomenys saugūs — skaitykite mūsų{' '}
                <a href="#" className="text-[#64151F] underline underline-offset-2 transition-opacity hover:opacity-80">
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

export default CmsGridSection;
