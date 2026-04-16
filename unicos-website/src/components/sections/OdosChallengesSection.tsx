'use client';

import * as React from 'react';
import { SfChatScience, SfLayers, SfShield } from '@/components/icons/feather';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const items = [
  {
    label: 'Per daug pasirinkimų, per mažai aiškumo',
    paragraph:
      'Šimtai ženklų, niekur neparašyta, kas veikia profesionalioje procedūroje, gaištate bandydami ir klysdami.',
    Icon: SfLayers,
  },
  {
    label: 'Produktas be palaikymo',
    paragraph:
      'Nusipirkote, bet negavote nei protokolo, nei mokymo, dirbate intuicija ir rizikuojate reputacija.',
    Icon: SfShield,
  },
  {
    label: 'Tiekėjas, o ne partneris',
    paragraph:
      'Reikia ne tik dėžučių, bet ir atsakymo, žmogaus, kuris supranta kasdienybę ir padeda augti.',
    Icon: SfChatScience,
  },
] as const;

export function OdosChallengesSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [cardVisible, setCardVisible] = React.useState(false);

  React.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative z-[2] bg-[#EFE8DB] py-20 max-[767px]:py-12">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={cardRef}
          className={`flex w-full items-start justify-between gap-12 border border-[#EFE8DB]/14 bg-[#1A1010] p-16 text-[#EFE8DB] max-[991px]:flex-wrap max-[767px]:gap-8 max-[767px]:p-8 transition-all duration-700 ease-out ${
            cardVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'
          }`}
          style={{ borderRadius: '0px' }}
        >
          <div className="flex max-w-[520px] flex-col items-start gap-5 max-[767px]:gap-4">
            <h2
              className="m-0 text-[#EFE8DB]"
              style={{
                fontFamily: "'Quiche Sans', Georgia, serif",
                fontSize: 'clamp(2rem, 3.4vw, 2.8rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                fontWeight: 300,
              }}
            >
              Pažįstama situacija?
            </h2>
          </div>

          <div className="flex w-full max-w-[540px] flex-col gap-4 max-[991px]:max-w-none max-[767px]:gap-3">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.label}
                  className="cursor-pointer pt-4 max-[767px]:pt-3"
                  onClick={() => handleToggle(i)}
                >
                  <div className="flex items-center justify-between gap-6 pb-4 max-[767px]:gap-4 max-[767px]:pb-3 border-b border-[#EFE8DB]/16">
                    <div className="flex items-center gap-4 max-[767px]:gap-3">
                      <div className="flex h-6 w-6 flex-none items-center justify-center text-[#EFE8DB] max-[767px]:h-5 max-[767px]:w-5">
                        <item.Icon size={20} className="text-current" aria-hidden />
                      </div>
                      <div
                        className="m-0 text-[#EFE8DB]"
                        style={{ ...BODY, fontSize: '20px', lineHeight: '28px', fontWeight: 500 }}
                      >
                        {item.label}
                      </div>
                    </div>

                    <div className="relative flex h-6 w-6 flex-none items-center justify-center max-[767px]:h-5 max-[767px]:w-5">
                      <div className="absolute h-px w-[70%] bg-[#EFE8DB]" />
                      <div
                        className="absolute h-px w-[70%] bg-[#EFE8DB] transition-all duration-300"
                        style={{
                          transform: isOpen ? 'rotate(90deg) scaleX(0)' : 'rotate(90deg) scaleX(1)',
                          opacity: isOpen ? 0 : 1,
                        }}
                      />
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[220px]' : 'max-h-0'}`}>
                    <div
                      className="pt-5 text-[#EFE8DB]/70 max-[767px]:pt-4"
                      style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                    >
                      {item.paragraph}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OdosChallengesSection;

