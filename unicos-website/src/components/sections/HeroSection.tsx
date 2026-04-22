'use client';
import * as React from 'react';
import { SfSparkles } from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';
import { usePreloaderEntrance } from '@/hooks/usePreloaderEntrance';

export function HeroSection() {
  const headlineRef = React.useRef<HTMLDivElement>(null);
  const [headlineVisible, setHeadlineVisible] = React.useState(false);

  const avatar1Ref = React.useRef<HTMLDivElement>(null);
  const avatar2Ref = React.useRef<HTMLDivElement>(null);
  const avatar3Ref = React.useRef<HTMLDivElement>(null);
  const avatar4Ref = React.useRef<HTMLDivElement>(null);
  const [avatar1Visible, setAvatar1Visible] = React.useState(false);
  const [avatar2Visible, setAvatar2Visible] = React.useState(false);
  const [avatar3Visible, setAvatar3Visible] = React.useState(false);
  const [avatar4Visible, setAvatar4Visible] = React.useState(false);

  const trustTextRef = React.useRef<HTMLDivElement>(null);
  const [trustTextVisible, setTrustTextVisible] = React.useState(false);

  const gridRef = React.useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = React.useState(false);
  const blockMainRef = React.useRef<HTMLDivElement>(null);
  const blockTopLeftRef = React.useRef<HTMLDivElement>(null);
  const blockTopRightRef = React.useRef<HTMLDivElement>(null);
  const blockBottomRef = React.useRef<HTMLDivElement>(null);

  const runEntrance = React.useCallback(() => {
    setTimeout(() => setHeadlineVisible(true), 0);
    setTimeout(() => setAvatar1Visible(true), 120);
    setTimeout(() => setAvatar2Visible(true), 220);
    setTimeout(() => setAvatar3Visible(true), 320);
    setTimeout(() => setAvatar4Visible(true), 420);
    setTimeout(() => setTrustTextVisible(true), 520);
    setTimeout(() => setGridVisible(true), 160);
  }, []);

  usePreloaderEntrance(runEntrance, 1500);

  React.useEffect(() => {
    let rafId = 0;

    const applyParallax = () => {
      // Keep it subtle and desktop-oriented.
      if (window.innerWidth < 768) {
        if (blockMainRef.current) blockMainRef.current.style.transform = '';
        if (blockTopLeftRef.current) blockTopLeftRef.current.style.transform = '';
        if (blockTopRightRef.current) blockTopRightRef.current.style.transform = '';
        if (blockBottomRef.current) blockBottomRef.current.style.transform = '';
        return;
      }

      const vh = window.innerHeight;
      const updateNode = (el: HTMLElement | null, speed: number, maxShift: number) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerDelta = rect.top + rect.height / 2 - vh / 2;
        const shift = Math.max(-maxShift, Math.min(maxShift, -centerDelta * speed));
        el.style.transform = `translate3d(0, ${shift}px, 0)`;
      };

      updateNode(blockMainRef.current, 0.045, 20);
      updateNode(blockTopLeftRef.current, 0.07, 16);
      updateNode(blockTopRightRef.current, 0.03, 12);
      updateNode(blockBottomRef.current, 0.025, 8);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(applyParallax);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (blockMainRef.current) blockMainRef.current.style.transform = '';
      if (blockTopLeftRef.current) blockTopLeftRef.current.style.transform = '';
      if (blockTopRightRef.current) blockTopRightRef.current.style.transform = '';
      if (blockBottomRef.current) blockBottomRef.current.style.transform = '';
    };
  }, []);

  return (
    <section
      className="relative z-[2] pt-28 pb-20 max-[767px]:pt-20 max-[767px]:pb-12 bg-[#EFE8DB] text-[#1A1010]"
      style={{ fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif" }}
    >
      <div className="relative z-[2] w-full max-w-[1800px] mx-auto px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headlineRef}
          className={`max-w-[680px] mx-auto mb-12 flex flex-col items-center text-center gap-6 max-[767px]:gap-4 max-[767px]:mb-8 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            headlineVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          }`}
        >
          <div className="flex items-center justify-center px-3 py-1 bg-[#64151F]">
            <span style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 400, letterSpacing: '0.75px', textTransform: 'uppercase', color: '#EFE8DB' }}>
              PROFESIONALI IR DERMATOLOGINĖ KOSMETIKA
            </span>
          </div>

          <h1
            className="m-0 text-center"
            style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontWeight: 300, fontSize: 'clamp(40px, 4.3vw, 64px)', lineHeight: 1.1, letterSpacing: '-2.5px' }}
          >
            <span className="block whitespace-nowrap max-[767px]:whitespace-normal">Profesionalus standartas</span>
            <span className="block whitespace-nowrap max-[767px]:whitespace-normal" style={{ color: '#64151F', fontWeight: 500 }}>Asmeninis ryšys</span>
          </h1>

          <div className="w-[80%] max-[767px]:w-full text-sm leading-5 font-normal opacity-70">
            Sujungiame pasaulinio lygio ekspertiškumą su nuoširdžia, žmogiška partneryste. Pas mus rasite tik kruopščiai atrinktus prekių ženklus.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <CtaLink href="/tapkite-partneriu" variant="primary">
              Pildyti partnerio paraišką
            </CtaLink>
            <CtaLink href="/kontaktai#kontaktai-forma" variant="outline">
              Gauti konsultaciją
            </CtaLink>
          </div>
        </div>

        <div className="flex flex-col items-center mx-auto mb-16 gap-4 max-[767px]:gap-3 max-[767px]:mb-12">
          <div className="flex">
            <div ref={avatar1Ref} className={`flex-none w-12 h-12 border-2 border-[#EFE8DB] overflow-hidden max-[479px]:w-10 max-[479px]:h-10 transition-opacity duration-700 ease-out ${avatar1Visible ? 'opacity-100' : 'opacity-0'}`} style={{ borderRadius: '100vw' }}>
              <img src="https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar.webp" loading="lazy" alt="Partneris 1" className="w-full h-full object-cover" />
            </div>
            <div ref={avatar2Ref} className={`flex-none w-12 h-12 border-2 border-[#EFE8DB] overflow-hidden -ml-4 max-[479px]:w-10 max-[479px]:h-10 transition-opacity duration-700 ease-out ${avatar2Visible ? 'opacity-100' : 'opacity-0'}`} style={{ borderRadius: '100vw' }}>
              <img src="https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-1.webp" loading="lazy" alt="Partneris 2" className="w-full h-full object-cover" />
            </div>
            <div ref={avatar3Ref} className={`flex-none w-12 h-12 border-2 border-[#EFE8DB] overflow-hidden -ml-4 max-[479px]:w-10 max-[479px]:h-10 transition-opacity duration-700 ease-out ${avatar3Visible ? 'opacity-100' : 'opacity-0'}`} style={{ borderRadius: '100vw' }}>
              <img src="https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-2.webp" loading="lazy" alt="Partneris 3" className="w-full h-full object-cover" />
            </div>
            <div ref={avatar4Ref} className={`flex-none w-12 h-12 border-2 border-[#EFE8DB] overflow-hidden -ml-4 max-[479px]:w-10 max-[479px]:h-10 transition-opacity duration-700 ease-out ${avatar4Visible ? 'opacity-100' : 'opacity-0'}`} style={{ borderRadius: '100vw' }}>
              <img src="https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp" loading="lazy" alt="Partneris 4" className="w-full h-full object-cover" />
            </div>
          </div>
          <div ref={trustTextRef} className={`text-sm leading-5 font-normal transition-opacity duration-700 ease-out ${trustTextVisible ? 'opacity-60' : 'opacity-0'}`}>
            Pasitiki 200+ partnerių salonų ir klinikų
          </div>
        </div>

        <div
          ref={gridRef}
          className={`grid gap-4 max-[767px]:gap-3 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            gridVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          } grid-cols-1 min-[768px]:grid-cols-[0.7fr_1fr]`}
        >
          <div ref={blockMainRef} className="overflow-hidden w-full h-[628px] max-[767px]:h-[360px] relative rounded-none will-change-transform">
            <img
              src="https://byqsupply-components.netlify.app/haldenmiller/images/HomeA.webp"
              loading="lazy"
              alt="Profesionali grožio specialistė"
              className="w-full h-full object-cover"
            />

            {/* Glassmorphism stats card */}
            <div className="absolute left-6 top-6 max-[767px]:left-4 max-[767px]:top-4 p-6 max-[767px]:p-4 w-[280px] max-[767px]:w-[220px] bg-[rgba(26,16,16,0.35)] border border-[rgba(239,232,219,0.32)] backdrop-blur-[16px] text-[#EFE8DB]">
              <div className="mb-10 flex h-14 w-14 max-[767px]:mb-8 max-[767px]:h-12 max-[767px]:w-12 items-center justify-center overflow-visible rounded-[12px] border border-[rgba(239,232,219,0.24)] bg-[rgba(26,16,16,0.4)] p-1.5">
                <SfSparkles size={28} strokeWidth={1.4} className="block shrink-0 text-[#EFE8DB]" aria-hidden />
              </div>
              <div style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: '64px', lineHeight: 1, fontWeight: 300 }} className="max-[767px]:text-[48px]">
                500+
              </div>
              <div className="mt-2 text-[30px] leading-[1.05] max-[767px]:text-[22px]" style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontWeight: 300 }}>
                Partnerių
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 max-[767px]:gap-3 min-[480px]:grid-cols-[1fr_0.8fr] min-[480px]:grid-rows-2">
            <div ref={blockTopLeftRef} className="rounded-none p-6 flex items-center justify-center max-[767px]:p-4 bg-[#EFE8DB] border border-[rgba(26,16,16,0.12)] will-change-transform">
              <div className="flex flex-col gap-3 w-full max-w-[320px] max-[767px]:gap-[10px]">
                <div className="flex items-center justify-between px-4 py-3 border border-[rgba(26,16,16,0.16)] bg-[rgba(239,232,219,0.64)] max-[767px]:px-3 max-[767px]:py-[10px]">
                  <span className="text-sm leading-5 font-normal opacity-70">Poreikių analizė</span>
                  <div className="px-2 py-1 bg-[#64151F]">
                    <span style={{ fontSize: '10px', lineHeight: '12px', letterSpacing: '0.75px', textTransform: 'uppercase', color: '#EFE8DB' }}>Atlikta</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-3 border border-[rgba(26,16,16,0.16)] bg-[rgba(239,232,219,0.64)] max-[767px]:px-3 max-[767px]:py-[10px]">
                  <span className="text-sm leading-5 font-normal opacity-70">Strategijos etapas</span>
                  <div className="px-2 py-1 bg-[#3B443A]">
                    <span style={{ fontSize: '10px', lineHeight: '12px', letterSpacing: '0.75px', textTransform: 'uppercase', color: '#EFE8DB' }}>Aktyvu</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-3 border border-[rgba(26,16,16,0.16)] bg-[#1A1010] text-[#EFE8DB] max-[767px]:px-3 max-[767px]:py-[10px]">
                  <span className="text-sm leading-5 font-normal opacity-80">Rezultatų peržiūra</span>
                  <div className="px-2 py-1 border border-[rgba(239,232,219,0.3)]">
                    <span style={{ fontSize: '10px', lineHeight: '12px', letterSpacing: '0.75px', textTransform: 'uppercase' }}>Laukiama</span>
                  </div>
                </div>
              </div>
            </div>

            <div ref={blockTopRightRef} className="rounded-none p-6 flex items-center justify-center w-full h-full overflow-hidden max-[767px]:p-4 bg-[#3B443A] text-[#EFE8DB] will-change-transform">
              <div className="text-center max-w-[160px]">
                <div style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: '32px', lineHeight: 1.1, fontWeight: 300 }}>B2B</div>
                <div className="text-xs mt-2 opacity-75 uppercase" style={{ letterSpacing: '0.08em' }}>platforma</div>
              </div>
            </div>

            <div ref={blockBottomRef} className="col-span-2 max-[479px]:col-span-1 rounded-none p-10 flex items-center justify-center w-full h-full max-[767px]:p-8 bg-[#1A1010] will-change-transform">
              <a
                href="#"
                className="flex items-stretch gap-4 p-3 bg-[#3B443A] text-[#EFE8DB] no-underline max-w-[560px] w-full overflow-hidden max-[767px]:gap-3 max-[767px]:p-[10px]"
              >
                <div className="flex-none w-24 h-24 min-h-full overflow-hidden flex max-[767px]:hidden">
                  <img
                    src="https://byqsupply-components.netlify.app/haldenmiller/images/CaseImage.png"
                    alt=""
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-between items-start gap-6">
                  <div className="text-sm leading-5 font-medium text-[#EFE8DB]">
                    +35% pajamų augimas — Vilniaus kosmetologijos kabinetas
                  </div>
                  <div className="flex justify-between items-end w-full gap-6">
                    <div className="flex items-center justify-center px-2 py-1 bg-[#64151F]">
                      <div style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 400, letterSpacing: '0.75px', textTransform: 'uppercase', color: '#EFE8DB' }}>
                        Sėkmės istorija
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
