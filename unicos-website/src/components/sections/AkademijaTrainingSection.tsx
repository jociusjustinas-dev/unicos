'use client';

import * as React from 'react';
import { SfAward, SfClock, SfMapPin, SfMonitor } from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';
import {
  AKADEMIJA_EVENTS,
  AKADEMIJA_FORMAT_FILTERS,
  AKADEMIJA_TIME_FILTERS,
  AKADEMIJA_TOPIC_FILTERS,
  type AkademijaEvent,
  type AkademijaFormatId,
  type AkademijaTimeId,
  type AkademijaTopicId,
} from '@/config/akademijaPage';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const labelClass =
  'text-[10px] font-medium uppercase leading-3 tracking-[0.08em] text-[#1A1010]/55';

function currentMonthKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function nextMonthKey() {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function monthInCurrentQuarter(monthKey: string) {
  const [yearStr, monthStr] = monthKey.split('-');
  const year = Number(yearStr);
  const month = Number(monthStr);
  if (!Number.isFinite(year) || !Number.isFinite(month)) return false;
  const now = new Date();
  const currentQuarter = Math.floor(now.getMonth() / 3);
  return year === now.getFullYear() && Math.floor((month - 1) / 3) === currentQuarter;
}

type FilterOption<T extends string> = { id: T; label: string };

function FilterDropdown<T extends string>({
  id,
  label,
  value,
  options,
  open,
  onOpen,
  onClose,
  onChange,
}: {
  id: string;
  label: string;
  value: T;
  options: readonly FilterOption<T>[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (v: T) => void;
}) {
  const current = options.find((o) => o.id === value) ?? options[0];
  return (
    <div className="relative min-w-0 flex-1" data-filter-dropdown={id}>
      <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#1A1010]/55" style={BODY}>
        {label}
      </div>
      <button
        type="button"
        onClick={open ? onClose : onOpen}
        className={`flex h-11 w-full items-center justify-between border border-solid bg-white px-3 text-left transition-colors ${
          open ? 'border-[#64151F]' : 'border-[#1A1010]/16 hover:border-[#64151F]/45'
        }`}
        style={{ ...BODY, borderRadius: '0px', fontSize: '14px', lineHeight: 1.2, fontWeight: 400 }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate text-[#1A1010]">{current?.label}</span>
        <span className={`ml-3 text-[12px] transition-transform ${open ? 'rotate-180 text-[#64151F]' : 'text-[#1A1010]/58'}`}>▾</span>
      </button>
      {open ? (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-20 border border-solid border-[#1A1010]/16 bg-white shadow-[0_8px_24px_rgba(26,16,16,0.12)]" style={{ borderRadius: '0px' }}>
          <ul role="listbox" aria-label={label} className="m-0 max-h-64 list-none overflow-auto p-1">
            {options.map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(o.id);
                    onClose();
                  }}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left transition-colors ${
                    o.id === value ? 'bg-[#64151F]/7 text-[#64151F]' : 'text-[#1A1010] hover:bg-[#1A1010]/5'
                  }`}
                  style={{ ...BODY, borderRadius: '0px', fontSize: '14px', lineHeight: 1.3 }}
                >
                  <span>{o.label}</span>
                  <span className={`${o.id === value ? 'opacity-100 text-[#64151F]' : 'opacity-0'}`}>✓</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function AkademijaEventCard({ event }: { event: AkademijaEvent }) {
  const LocIcon = event.onlineVenue ? SfMonitor : SfMapPin;
  const statusTone =
    event.statusTone === 'green'
      ? 'border-[#3B443A]/35 bg-[#3B443A]/92 text-[#EFE8DB]'
      : 'border-[#64151F]/35 bg-[#64151F]/92 ' + (event.statusMuted ? 'text-[#EFE8DB]/86' : 'text-[#EFE8DB]');

  return (
    <article
      className="group/event flex w-full cursor-pointer flex-col gap-5 border-[1px] border-solid border-[#1A1010]/10 bg-white/40 transform-gpu will-change-transform transition-[transform,border-color] duration-500 ease-in-out hover:-translate-y-[1px] hover:border-[#64151F]/20 max-[767px]:gap-4"
      style={{ borderRadius: '0px' }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest('a,button,input,textarea,select,label')) return;
        window.location.href = event.href;
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = event.href;
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`Atidaryti renginį: ${event.title}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ borderRadius: '0px' }}>
        <img
          src={event.imageSrc}
          sizes="(max-width: 767px) 100vw, (max-width: 1400px) 45vw, 520px"
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover/event:scale-[1.008]"
          loading="lazy"
        />
        {event.statusLine ? (
          <div
            className={`pointer-events-none absolute right-3 top-3 z-[1] inline-flex max-w-[calc(100%-1.5rem)] items-center border border-solid px-3 py-[7px] ${statusTone}`}
            style={{ ...BODY, fontSize: '13px', lineHeight: 1, fontWeight: 500, letterSpacing: '0.02em', borderRadius: '0px' }}
          >
            {event.statusLine}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-6 px-5 pb-6 pt-1 max-[767px]:gap-5 max-[767px]:px-4 max-[767px]:pb-5">
        <div className="flex flex-wrap items-center gap-2">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="cursor-pointer border-[1px] border-solid border-[#1A1010]/18 bg-[#EFE8DB]/80 px-2 py-1 uppercase text-[#1A1010] transition-[background-color,border-color,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#64151F] hover:bg-[#64151F] hover:text-[#EFE8DB]"
              style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, lineHeight: '12px' }}
            >
              {tag}
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
          {event.title}
        </h3>

        <div className="flex flex-col items-start gap-2.5 overflow-visible text-[#1A1010]/82" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45 }}>
          <span className="inline-flex max-w-full items-center gap-2">
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
              <SfClock className="block shrink-0 text-[#1A1010]/55 !overflow-visible" size={16} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="min-w-0 break-words">{event.datetime}</span>
          </span>
          <span className="inline-flex max-w-full items-center gap-2">
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
              <LocIcon className="block shrink-0 text-[#1A1010]/55 !overflow-visible" size={16} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="min-w-0 break-words">{event.rowLeft}</span>
          </span>
          <span className="inline-flex max-w-full items-center gap-2">
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
              <SfAward className="block shrink-0 text-[#1A1010]/55 !overflow-visible" size={16} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="min-w-0 break-words">{event.rowRight}</span>
          </span>
        </div>

        <div className="flex flex-col gap-3 border-t-[1px] border-solid border-[#1A1010]/10 pt-4 sm:flex-row sm:items-center sm:gap-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden border-[1px] border-solid border-[#1A1010]/12 bg-[#EFE8DB]/80" style={{ borderRadius: '0px' }} aria-hidden>
            {event.speakerAvatar ? <img src={event.speakerAvatar} alt="" className="h-full w-full object-cover" loading="lazy" /> : null}
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[#1A1010]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, lineHeight: 1.4 }}>
              {event.speaker}
            </span>
            <span className="text-[#1A1010]/60" style={{ ...BODY, fontSize: '14px', fontWeight: 400, lineHeight: 1.4 }}>
              {event.speakerRole}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t-[1px] border-solid border-[#1A1010]/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className={labelClass} style={BODY}>
              KAINA
            </div>
            <p className="m-0 mt-1 text-[#64151F]" style={{ ...BODY, fontSize: '20px', fontWeight: 500, lineHeight: 1.2 }}>
              {event.price}
            </p>
          </div>
          <CtaLink href={event.href} variant="primary" className="self-start sm:self-auto">
            Registruotis
          </CtaLink>
        </div>
      </div>
    </article>
  );
}

export function AkademijaTrainingSection() {
  const [topic, setTopic] = React.useState<AkademijaTopicId>('all');
  const [format, setFormat] = React.useState<AkademijaFormatId>('all');
  const [time, setTime] = React.useState<AkademijaTimeId>('all');
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  const [filtersSticky, setFiltersSticky] = React.useState(false);
  const [cardsVisible, setCardsVisible] = React.useState(true);
  const headingRef = React.useRef<HTMLDivElement>(null);
  const filterBarRef = React.useRef<HTMLDivElement>(null);

  const filtered = React.useMemo(() => {
    const mk = currentMonthKey();
    const nextMk = nextMonthKey();
    return AKADEMIJA_EVENTS.filter((e) => {
      if (topic !== 'all' && e.topic !== topic) return false;
      if (format !== 'all' && e.format !== format) return false;
      if (time === 'thisMonth' && e.monthKey !== mk) return false;
      if (time === 'nextMonth' && e.monthKey !== nextMk) return false;
      if (time === 'thisQuarter' && !monthInCurrentQuarter(e.monthKey)) return false;
      return true;
    });
  }, [topic, format, time]);

  React.useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!openDropdown) return;
      const target = event.target as HTMLElement;
      if (!filterBarRef.current?.contains(target)) setOpenDropdown(null);
    };
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onEsc);
    };
  }, [openDropdown]);

  React.useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFiltersSticky(!entry.isIntersecting),
      { rootMargin: '-16px 0px 0px 0px', threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    setCardsVisible(false);
    const id = window.requestAnimationFrame(() => setCardsVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, [topic, format, time]);

  return (
    <section
      id="mokymu-kalendorius"
      className="relative z-[2] scroll-mt-24 bg-[#EFE8DB] pb-16 pt-40 max-[767px]:pb-12 max-[767px]:pt-28 max-[479px]:pt-24"
    >
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div ref={headingRef} className="mb-10 flex max-w-[760px] flex-col gap-4 max-[767px]:mb-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
            <span
              className="uppercase text-[#64151F]"
              style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
            >
              Kalendorius
            </span>
          </div>
          <h2
            className="m-0 text-[#64151F] tracking-[-0.02em]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.06,
              fontWeight: 300,
            }}
          >
            <span className="font-light">Mokymų </span>
            <span className="font-medium">kalendorius.</span>{' '}
            <span className="text-[#1A1010]/56" style={{ ...BODY, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', fontWeight: 400 }}>
              {filtered.length} {filtered.length === 1 ? 'renginys' : 'renginiai'}
            </span>
          </h2>
          <p className="m-0 max-w-[48ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
            Raskite Jums tinkamiausią renginį.
          </p>
        </div>

        <div
          ref={filterBarRef}
          className={`z-[8] mb-10 bg-[#EFE8DB]/94 p-4 backdrop-blur-[2px] transition-[box-shadow,background-color] ${
            filtersSticky ? 'sticky top-0 shadow-[0_8px_18px_rgba(26,16,16,0.12)]' : 'sticky top-0 shadow-none'
          }`}
          style={{ borderRadius: '0px' }}
        >
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((p) => !p)}
            className="hidden w-full items-center justify-between border border-solid border-[#1A1010]/14 bg-white px-3 py-2 text-left max-[767px]:flex"
            style={{ ...BODY, borderRadius: '0px', fontSize: '14px' }}
          >
            <span className="font-medium text-[#1A1010]">Filtrai</span>
            <span className={`text-[12px] text-[#64151F] transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`}>▾</span>
          </button>

          <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} min-[768px]:block max-[767px]:mt-3 max-[767px]:space-y-3`}>
            <div className="flex items-end gap-3 max-[991px]:gap-2 max-[767px]:flex-col max-[767px]:items-stretch">
              <FilterDropdown
                id="topic"
                label="Tema"
                value={topic}
                options={AKADEMIJA_TOPIC_FILTERS}
                open={openDropdown === 'topic'}
                onOpen={() => setOpenDropdown('topic')}
                onClose={() => setOpenDropdown(null)}
                onChange={setTopic}
              />
              <FilterDropdown
                id="format"
                label="Formatas"
                value={format}
                options={AKADEMIJA_FORMAT_FILTERS}
                open={openDropdown === 'format'}
                onOpen={() => setOpenDropdown('format')}
                onClose={() => setOpenDropdown(null)}
                onChange={setFormat}
              />
              <FilterDropdown
                id="time"
                label="Laikas"
                value={time}
                options={AKADEMIJA_TIME_FILTERS}
                open={openDropdown === 'time'}
                onOpen={() => setOpenDropdown('time')}
                onClose={() => setOpenDropdown(null)}
                onChange={setTime}
              />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="m-0 text-[#1A1010]/65" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}>
            Šiuo metu renginių pagal pasirinktus filtrus nėra. Išvalykite filtrus arba prenumeruokite naujienlaiškį, kad sužinotumėte apie naujus mokymus pirmieji.
          </p>
        ) : (
          <div
            className={`grid grid-cols-1 gap-8 transition-[opacity,transform] duration-300 ease-out md:grid-cols-2 xl:grid-cols-3 ${
              cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            {filtered.map((e) => (
              <AkademijaEventCard key={e.id} event={e} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AkademijaTrainingSection;
