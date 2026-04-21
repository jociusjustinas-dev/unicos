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

  const filtered = React.useMemo(() => {
    const mk = currentMonthKey();
    return AKADEMIJA_EVENTS.filter((e) => {
      if (topic !== 'all' && e.topic !== topic) return false;
      if (format !== 'all' && e.format !== format) return false;
      if (time === 'thisMonth' && e.monthKey !== mk) return false;
      return true;
    });
  }, [topic, format, time]);

  const chip = (active: boolean) =>
    `border px-5 py-2.5 transition-colors duration-200 ${
      active
        ? 'border-[#64151F] bg-[#64151F] text-[#EFE8DB]'
        : 'border-[#1A1010]/10 bg-[#ECE2D3]/75 text-[#1A1010] hover:border-[#64151F]/45'
    }`;

  return (
    <section
      id="mokymu-kalendorius"
      className="relative z-[2] scroll-mt-24 bg-[#EFE8DB] pb-16 pt-32 max-[767px]:pb-12 max-[767px]:pt-24 max-[479px]:pt-20"
    >
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="mb-10 flex max-w-[720px] flex-col gap-4 max-[767px]:mb-8">
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
            <span className="font-medium">kalendorius.</span>
          </h2>
          <p className="m-0 max-w-[48ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
            Raskite Jums tinkamiausią renginį.
          </p>
        </div>

        <div className="mb-4">
          <p className="m-0 mb-2 text-[#1A1010]/55" style={{ ...BODY, fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em' }}>
            TEMA
          </p>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtras pagal temą">
            {AKADEMIJA_TOPIC_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={topic === f.id}
                onClick={() => setTopic(f.id)}
                className={chip(topic === f.id)}
                style={{ ...BODY, fontSize: '13px', fontWeight: 500, borderRadius: '0px' }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <p className="m-0 mb-2 text-[#1A1010]/55" style={{ ...BODY, fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em' }}>
            FORMATAS / LAIKAS
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtras pagal formatą">
            {AKADEMIJA_FORMAT_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={format === f.id}
                onClick={() => setFormat(f.id)}
                className={chip(format === f.id)}
                style={{ ...BODY, fontSize: '13px', fontWeight: 500, borderRadius: '0px' }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filtras pagal laiką">
            {AKADEMIJA_TIME_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={time === f.id}
                onClick={() => setTime(f.id)}
                className={chip(time === f.id)}
                style={{ ...BODY, fontSize: '13px', fontWeight: 500, borderRadius: '0px' }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="m-0 text-[#1A1010]/65" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}>
            Pagal pasirinktus filtrus renginių nerasta. Pakeiskite filtrus arba susisiekite dėl individualių mokymų.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
