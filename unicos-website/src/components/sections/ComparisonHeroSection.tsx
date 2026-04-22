'use client';
import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';
import { usePreloaderEntrance } from '@/hooks/usePreloaderEntrance';

export function ComparisonHeroSection() {
  const eyebrowRef = React.useRef<HTMLDivElement>(null);
  const centerRef = React.useRef<HTMLDivElement>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  const [eyebrowVisible, setEyebrowVisible] = React.useState(false);
  const [centerVisible, setCenterVisible] = React.useState(false);
  const [bottomVisible, setBottomVisible] = React.useState(false);
  const [videoVisible, setVideoVisible] = React.useState(false);
  const [lineVisible, setLineVisible] = React.useState(false);

  const runEntrance = React.useCallback(() => {
    setTimeout(() => setVideoVisible(true), 0);
    setTimeout(() => setEyebrowVisible(true), 120);
    setTimeout(() => setCenterVisible(true), 260);
    setTimeout(() => setBottomVisible(true), 420);
    setTimeout(() => setLineVisible(true), 520);
  }, []);

  usePreloaderEntrance(runEntrance, 1500);

  return (
    <section className="sticky top-0 z-[1] w-full h-screen min-h-screen overflow-hidden bg-[#1A1010]">
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          videoVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: videoVisible ? 'scale(1)' : 'scale(0.85)' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/6894a5c18c9035760aabc38b%2F68a2ca6f9aea4e9d52729c2e_evermind-poster-00001.jpg")',
          }}
        >
          <source src="/make_smooth_screen_202604101608.mp4" type="video/mp4" />
          <source
            src="https://byqsupply-components.netlify.app/evermind/videos/evermind-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://byqsupply-components.netlify.app/evermind/videos/evermind-transcode.webm"
            type="video/webm"
          />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/32 z-[1]" />
      <div className="absolute inset-0 bg-black/8 z-[2]" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-16 max-[767px]:px-6 h-full max-[479px]:px-4">
        <div className="flex flex-col justify-between h-full py-10 max-[767px]:py-8">
          <div className="flex-1 flex flex-col justify-end pb-6 max-[767px]:pb-4">
            <div className="w-full h-px mb-8 max-[767px]:mb-6 overflow-hidden">
              <div
                className={`h-px bg-[#EFE8DB]/30 origin-left transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  lineVisible ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </div>
            <div
              ref={eyebrowRef}
              className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                eyebrowVisible
                  ? 'opacity-100 blur-0'
                  : 'opacity-0 blur-[12px]'
              }`}
            >
              <div className="mb-4" />
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-none bg-[#EFE8DB] flex-shrink-0"
                  style={{ borderRadius: '0px' }}
                />
                <span
                  className="text-[#EFE8DB] uppercase"
                  style={{
                    fontSize: '11px',
                    fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                  }}
                >
                  PROFESIONALIOJI IR DERMATOLOGINĖ KOSMETIKA
                </span>
              </div>
            </div>
          </div>

          <div
            ref={centerRef}
            className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-row items-end gap-8 max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-6 ${
              centerVisible
                ? 'opacity-100 blur-0'
                : 'opacity-0 blur-[12px]'
            }`}
          >
            <div className="flex-1 max-[767px]:w-full">
              <h2
                className="text-[#EFE8DB] leading-[1.05] m-0 max-[767px]:text-[2.6rem] max-[991px]:text-[3.2rem]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: '4rem',
                  fontWeight: 300,
                }}
              >
                Profesionalus standartas.
                <br />
                <span style={{ color: '#EFE8DB', fontWeight: 500 }}>Asmeninis ryšys</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 max-w-[420px] max-[767px]:max-w-full max-[767px]:w-full">
              <p
                className="text-[#EFE8DB] leading-relaxed m-0"
                style={{
                  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  opacity: 0.92,
                }}
              >
                Sujungiame pasaulinio lygio ekspertiškumą su nuoširdžia, žmogiška partneryste. Pas mus rasite tik kruopščiai atrinktus prekių ženklus.
              </p>

              <div className="flex flex-row items-start gap-3 flex-wrap">
                <div className="flex flex-col gap-2">
                  <CtaLink href="/tapkite-partneriu" variant="primary">
                    Pildyti partnerio paraišką
                  </CtaLink>
                  <div
                    className="uppercase leading-snug text-[#EFE8DB]/80 px-1"
                    style={{
                      fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      fontWeight: 400,
                    }}
                  >
                    PATVIRTINIMAS PER 24 VAL.
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <CtaLink href="/kontaktai#kontaktai-forma" variant="glass">
                    Gauti konsultaciją
                  </CtaLink>
                  <div
                    className="uppercase leading-snug text-[#EFE8DB]/80 px-1"
                    style={{
                      fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      fontWeight: 400,
                    }}
                  >
                    15 MIN. POREIKIŲ ANALIZĖ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={bottomRef}
            className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-row justify-between items-end pt-8 max-[767px]:pt-6 ${
              bottomVisible
                ? 'opacity-100 blur-0'
                : 'opacity-0 blur-[12px]'
            }`}
          >
            <div />
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonHeroSection;
