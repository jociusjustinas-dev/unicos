'use client';

import * as React from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Aistė Kazlauskaitė',
    role: 'Įkūrėja ir vadovė',
    description: '25 metai profesionalios kosmetikos rinkoje.',
    image: '/Professional Woman Indoors.png',
  },
  {
    name: 'Mantas Jankauskas',
    role: 'Vadybos komandos vadovas',
    description: 'Rūpinasi, kad kiekvienas partneris jaustųsi palaikomas.',
    image: '/Professional Woman Indoors.png',
  },
  {
    name: 'Rūta Vaitkutė',
    role: 'Akademijos vadovė',
    description: 'Organizuoja mokymus ir kuria edukacinį turinį.',
    image: '/Professional Woman Indoors.png',
  },
  {
    name: 'Tomas Petrauskas',
    role: 'Logistikos vadovas',
    description: 'Užtikrina, kad prekės pasiektų Jus per 24 h.',
    image: '/Professional Woman Indoors.png',
  },
];

export function ApieTeamSection() {
  const [headlineRef, headlineVisible] = useInViewOnce<HTMLDivElement>();
  const [gridRef, gridVisible] = useInViewOnce<HTMLDivElement>({ threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section className="relative z-[2] bg-white py-20 max-[767px]:py-14 text-[#1A1010]">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headlineRef}
          className="mb-12 flex flex-col gap-4 max-[767px]:mb-10"
          style={{
            opacity: headlineVisible ? 1 : 0,
            filter: headlineVisible ? 'blur(0px)' : 'blur(12px)',
            transform: headlineVisible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <h2
            className="m-0 text-[#3B443A] tracking-[-0.02em]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              lineHeight: 1.12,
              fontWeight: 300,
            }}
          >
            <span className="font-medium">Žmonės už UNICOS</span>
          </h2>
          <p className="m-0 max-w-[60ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
            Maža, bet stipri komanda, kuri rūpinasi kiekvienu partneriu asmeniškai.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-4 gap-x-4 gap-y-6 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1 max-[767px]:gap-4">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredCard === index;
            return (
              <article
                key={member.name}
                className="group relative h-[360px] overflow-hidden border border-[#1A1010]/10 max-[991px]:h-[340px] max-[767px]:h-[320px]"
                style={{
                  borderRadius: '0px',
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(18px)',
                  transition: `opacity 0.7s ease-out ${index * 90}ms, transform 0.7s ease-out ${index * 90}ms`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />

                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(26,16,16,0.18) 0%, rgba(26,16,16,0.8) 100%)',
                    opacity: isHovered ? 0.92 : 0.74,
                  }}
                />

                <div className="absolute inset-x-0 bottom-0 z-[1] flex flex-col gap-1 px-5 py-5 text-[#EFE8DB]">
                  <h3 className="m-0" style={{ ...BODY, fontSize: '19px', lineHeight: 1.25, fontWeight: 500 }}>
                    {member.name}
                  </h3>
                  <p className="m-0 text-[#EFE8DB]/84" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45, fontWeight: 500 }}>
                    {member.role}
                  </p>
                  <p className="m-0 text-[#EFE8DB]/74" style={{ ...BODY, fontSize: '13px', lineHeight: 1.45, fontWeight: 400 }}>
                    {member.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ApieTeamSection;
