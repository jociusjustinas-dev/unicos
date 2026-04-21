'use client';

import * as React from 'react';
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
  const statusTone =
    event.statusTone === 'green'
      ? 'border-[#3B443A]/35 bg-[#3B443A]/92 text-[#EFE8DB]'
      : 'border-[#64151F]/35 bg-[#64151F]/92 ' + (event.statusMuted ? 'text-[#EFE8DB]/86' : 'text-[#EFE8DB]');

  return (
    <article
      className="flex w-full flex-col gap-5 border border-solid border-[#1A1010]/10 bg-white/50 p-5 max-[767px]:gap-4 max-[767px]:p-4"
      style={{ borderRadius: '0px' }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ borderRadius: '0px' }}>
        <img src={event.imageSrc} alt="" className="h-full w-full object-cover" loading="lazy" />
        {event.statusLine ? (
          <div
            className={`pointer-events-none absolute right-3 top-3 z-[1] inline-flex max-w-[calc(100%-1.5rem)] items-center border border-solid px-3 py-[7px] ${statusTone}`}
            style={{ ...BODY, fontSize: '13px', lineHeight: 1, fontWeight: 500, letterSpacing: '0.02em', borderRadius: '0px' }}
          >
            {event.statusLine}
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2">
        <span
          className="border border-solid border-[#1A1010]/18 bg-[#EFE8DB]/80 px-2 py-1 uppercase text-[#1A1010]"
          style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, lineHeight: '12px', borderRadius: '0px' }}
        >
          {event.categoryLabel}
        </span>
        <span
          className="border border-solid border-[#1A1010]/18 bg-[#EFE8DB]/80 px-2 py-1 uppercase text-[#1A1010]"
          style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, lineHeight: '12px', borderRadius: '0px' }}
        >
          {event.languageLabel}
        </span>
      </div>

      <h3
        className="m-0 text-[#1A1010]"
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

      <dl className="m-0 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45 }}>
        <div>
          <dt className={labelClass} style={BODY}>
            Data
          </dt>
          <dd className="m-0 mt-0.5 text-[#1A1010]/88">{event.dateLabel}</dd>
        </div>
        <div>
          <dt className={labelClass} style={BODY}>
            Laikas
          </dt>
          <dd className="m-0 mt-0.5 text-[#1A1010]/88">{event.timeLabel}</dd>
        </div>
        <div>
          <dt className={labelClass} style={BODY}>
            Formatas
          </dt>
          <dd className="m-0 mt-0.5 text-[#1A1010]/88">{event.formatLabel}</dd>
        </div>
        <div>
          <dt className={labelClass} style={BODY}>
            Vieta
          </dt>
          <dd className="m-0 mt-0.5 text-[#1A1010]/88">{event.venue}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className={labelClass} style={BODY}>
            Papildoma informacija
          </dt>
          <dd className="m-0 mt-0.5 text-[#1A1010]/88">{event.extraInfo}</dd>
        </div>
        <div>
          <dt className={labelClass} style={BODY}>
            Lektorius
          </dt>
          <dd className="m-0 mt-0.5 font-medium text-[#1A1010]">{event.speaker}</dd>
        </div>
        <div>
          <dt className={labelClass} style={BODY}>
            Pareigos
          </dt>
          <dd className="m-0 mt-0.5 text-[#1A1010]/78">{event.speakerRole}</dd>
        </div>
        <div>
          <dt className={labelClass} style={BODY}>
            Statusas
          </dt>
          <dd className="m-0 mt-0.5 text-[#1A1010]/88">{event.statusLine}</dd>
        </div>
      </dl>

      <div className="flex flex-col gap-3 border-t border-solid border-[#1A1010]/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className={labelClass} style={BODY}>
            Kaina
          </div>
          <p className="m-0 mt-1 text-[#64151F]" style={{ ...BODY, fontSize: '20px', fontWeight: 500, lineHeight: 1.2 }}>
            {event.price}
          </p>
          {event.priceNote ? (
            <p className="m-0 mt-1 text-[#1A1010]/55" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
              {event.priceNote}
            </p>
          ) : null}
        </div>
        <CtaLink href={event.href} variant="primary" labelMode="static" className="self-start sm:self-auto">
          Registruotis
        </CtaLink>
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
    <section id="mokymu-kalendorius" className="relative z-[2] scroll-mt-24 bg-[#EFE8DB] py-16 max-[767px]:py-12">
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
