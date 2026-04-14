'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/ChevronArrows';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const IMAGE_SRC = '/testimonials-photo.png';

type Slide = {
  statLine: string;
  quote: string;
  authorName: string;
  authorRole: string;
};

const slides: Slide[] = [
  {
    statLine: '+35% Pajamų augimas',
    quote:
      '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio.“',
    authorName: 'Dr. Ieva Kazlauskienė',
    authorRole: 'Dermatovenerologė',
  },
  {
    statLine: '2x Efektyvesnis darbas',
    quote:
      '„Mokymai mano komandai suteikė ne tik žinių, bet ir pasitikėjimo atliekant sudėtingas procedūras. Klientai tai jaučia.“',
    authorName: 'Tomas Vaitkus',
    authorRole: 'Klinikos vadovas',
  },
  {
    statLine: '100% Klientų grįžtamumas',
    quote:
      '„Įvedus Guinot procedūras, pastebėjome, kad klientai registruojasi kitam vizitui dar neišėję iš kabineto. Tai didžiausias įvertinimas.“',
    authorName: 'Laura Simanavičiūtė',
    authorRole: 'Estetinės medicinos specialistė',
  },
];

const navBtnClass =
  'group flex h-12 w-12 shrink-0 items-center justify-center overflow-visible border border-[#1A1010]/18 bg-transparent p-0 text-[#1A1010] transition-[background-color,color,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#3B443A] hover:bg-[#3B443A] hover:text-[#EFE8DB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64151F] disabled:pointer-events-none disabled:opacity-35';

const AUTOPLAY_MS = 6000;

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [carouselPaused, setCarouselPaused] = React.useState(false);
  const [headlineRef, headlineVisible] = useInViewOnce<HTMLDivElement>();
  const [sliderRef, sliderVisible] = useInViewOnce<HTMLDivElement>();

  const handlePrev = () => setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  const handleNext = () => setCurrentSlide((s) => (s + 1) % slides.length);

  React.useEffect(() => {
    if (carouselPaused) return;
    const id = window.setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [carouselPaused, slides.length]);

  const headlineStyle: React.CSSProperties = {
    opacity: headlineVisible ? 1 : 0,
    filter: headlineVisible ? 'blur(0px)' : 'blur(12px)',
    transform: headlineVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
  };

  const sliderPanelStyle: React.CSSProperties = {
    opacity: sliderVisible ? 1 : 0,
    filter: sliderVisible ? 'blur(0px)' : 'blur(12px)',
    transform: sliderVisible ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return (
    <section
      className="relative z-[2] overflow-x-clip border-y border-[#3B443A]/[0.08] bg-white py-20 max-[767px]:py-14"
      aria-labelledby="testimonials-heading"
    >
      {/* Žalias atspalvis ant balto — to paties tono kaip prekinė žalia */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#3B443A]/[0.06]"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        {/* Antraštė + rodyklės: desktop — apačioje vienoje linijoje (items-end) */}
        <div className="mb-14 flex max-[767px]:mb-10 max-[767px]:flex-col max-[767px]:gap-6 min-[768px]:flex-row min-[768px]:items-end min-[768px]:justify-between min-[768px]:gap-8">
          <div ref={headlineRef} className="max-w-[min(680px,100%)] min-w-0 flex-1" style={headlineStyle}>
            <div className="flex flex-col gap-6 max-[767px]:gap-5">
              {/* Eyebrow kaip PlatformSplit / šviesi sekcija: kvadratas + uppercase */}
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 bg-[#3B443A]" style={{ borderRadius: '0px' }} aria-hidden />
                <span
                  className="uppercase text-[#3B443A]"
                  style={{
                    fontSize: '11px',
                    fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                  }}
                >
                  Partnerių patirtys
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h2
                  id="testimonials-heading"
                  className="m-0 tracking-[-0.03em] text-[#3B443A] max-[767px]:tracking-[-0.02em]"
                  style={{
                    fontFamily: "'Quiche Sans', Georgia, serif",
                    fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                    lineHeight: 1.12,
                  }}
                >
                  <span className="font-medium">Jūsų sėkmės istorijos</span>
                  <span className="font-light"> – geriausias mūsų darbo įvertinimas.</span>
                </h2>
                <p className="m-0 max-w-[52ch] text-[#1A1010]/80" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
                  Didžiuojamės matydami, kaip UNICOS partneriai auga ir stiprėja.
                </p>
              </div>
            </div>
          </div>

          <div
            className="hidden shrink-0 gap-2 min-[768px]:flex min-[768px]:pb-px"
            role="group"
            aria-label="Atsiliepimų skaidrės"
          >
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Ankstesnis atsiliepimas"
              className={navBtnClass}
              style={{ borderRadius: '0px' }}
            >
              <ChevronLeftIcon className="h-[22px] w-[22px] text-current" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Kitas atsiliepimas"
              className={navBtnClass}
              style={{ borderRadius: '0px' }}
            >
              <ChevronRightIcon className="h-[22px] w-[22px] text-current" />
            </button>
          </div>
        </div>

        {/* Slider — autoplay sustabdoma užvedus */}
        <div
          ref={sliderRef}
          className="overflow-hidden"
          style={sliderPanelStyle}
          onMouseEnter={() => setCarouselPaused(true)}
          onMouseLeave={() => setCarouselPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
            }}
            role="region"
            aria-label="Partnerių atsiliepimai"
          >
            {slides.map((slide, i) => (
              <div
                key={slide.authorName}
                className="box-border shrink-0"
                style={{ width: `${100 / slides.length}%` }}
                aria-hidden={i !== currentSlide}
                id={`testimonial-slide-${i}`}
                role="group"
                aria-label={`${i + 1} iš ${slides.length}`}
              >
                {/* Desktop: fiksuotas žemos eilutės aukštis — tekstai kaip anksčiai; kairėje slankiklis jei netelpa */}
                <div className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2 min-[768px]:gap-4 min-[768px]:items-stretch min-[768px]:min-h-0 min-[768px]:h-[min(540px,62vh)] min-[768px]:max-h-[min(540px,62vh)]">
                  {/* Kairė: žalias prekinis skydelis */}
                  <div
                    className="flex min-h-0 flex-col justify-between gap-10 p-10 max-[767px]:min-h-0 max-[767px]:gap-8 max-[767px]:p-8 min-[768px]:min-h-0 min-[768px]:overflow-y-auto"
                    style={{
                      backgroundColor: '#3B443A',
                      color: '#EFE8DB',
                      borderRadius: '0px',
                    }}
                  >
                    <div className="flex flex-col gap-8">
                      <p
                        className="m-0 font-light tracking-[-0.02em] text-[#EFE8DB]"
                        style={{
                          fontFamily: "'Quiche Sans', Georgia, serif",
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          lineHeight: 1.2,
                          fontWeight: 300,
                        }}
                      >
                        {slide.statLine}
                      </p>

                      <div className="h-px w-full bg-[rgba(239,232,219,0.14)]" aria-hidden />

                      <div className="flex flex-col gap-6">
                        <p
                          className="m-0 text-[#EFE8DB]"
                          style={{
                            fontFamily: "'Quiche Sans', Georgia, serif",
                            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                            lineHeight: 1.35,
                            fontWeight: 300,
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {slide.quote}
                        </p>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#EFE8DB]" style={{ ...BODY, fontSize: '16px', lineHeight: 1.5, fontWeight: 500 }}>
                            {slide.authorName}
                          </span>
                          <span className="text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '15px', lineHeight: 1.45, fontWeight: 400 }}>
                            {slide.authorRole}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dešinė: nuotrauka — ribotas aukštis (nebestiebia eilutės) */}
                  <div
                    className="relative hidden h-[260px] min-h-0 w-full overflow-hidden min-[768px]:block min-[768px]:h-full min-[768px]:min-h-0"
                    style={{ borderRadius: '0px', backgroundColor: '#2A1A16' }}
                  >
                    <img
                      src={IMAGE_SRC}
                      loading="lazy"
                      alt=""
                      className="h-full w-full scale-[1.08] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indikatoriai */}
          <div className="mt-8 flex items-center justify-between gap-4 max-[767px]:mt-6">
            <div className="flex justify-center gap-2" role="tablist" aria-label="Skaidrės">
              {slides.map((_, i) => (
                <button
                  key={String(i)}
                  type="button"
                  role="tab"
                  aria-selected={i === currentSlide}
                  aria-controls={`testimonial-slide-${i}`}
                  className={`h-1.5 transition-[background-color,width] duration-300 ${
                    i === currentSlide ? 'w-8 bg-[#3B443A]' : 'w-1.5 bg-[#1A1010]/18 hover:bg-[#1A1010]/30'
                  }`}
                  style={{ borderRadius: '0px' }}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`${i + 1} skaidrė`}
                />
              ))}
            </div>
            <div className="flex gap-2 min-[768px]:hidden" role="group" aria-label="Atsiliepimų valdymas (mobile)">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Ankstesnis atsiliepimas"
                className={navBtnClass}
                style={{ borderRadius: '0px' }}
              >
                <ChevronLeftIcon className="h-[22px] w-[22px] text-current" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Kitas atsiliepimas"
                className={navBtnClass}
                style={{ borderRadius: '0px' }}
              >
                <ChevronRightIcon className="h-[22px] w-[22px] text-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
