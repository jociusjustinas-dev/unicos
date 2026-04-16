'use client';

import * as React from 'react';
import { SfEnvelope, SfMapPin, SfPhone } from '@/components/icons/feather';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  activity: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>> & {
  form?: string;
};

const ACTIVITY_OPTIONS = [
  'Odos priežiūros specialistas',
  'Plaukų priežiūros specialistas',
  'Estetinės dermatologijos specialistas',
  'Dermakosmetikos konsultantas',
  'Vaistininkas',
  'Klinika',
  'Salonas',
  'Kita',
] as const;

const INITIAL_VALUES: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  activity: '',
  message: '',
  consent: false,
};

export function KontaktaiFormSection() {
  const [headlineRef, headlineVisible] = useInViewOnce<HTMLDivElement>();
  const [formRef, formVisible] = useInViewOnce<HTMLDivElement>();
  const [cardsRef, cardsVisible] = useInViewOnce<HTMLDivElement>();
  const [logosRef, logosVisible] = useInViewOnce<HTMLDivElement>();

  const [values, setValues] = React.useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const fullNameRef = React.useRef<HTMLInputElement | null>(null);
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const phoneRef = React.useRef<HTMLInputElement | null>(null);
  const activityRef = React.useRef<HTMLSelectElement | null>(null);
  const messageRef = React.useRef<HTMLTextAreaElement | null>(null);
  const consentRef = React.useRef<HTMLInputElement | null>(null);

  const refsByField: Record<keyof FormValues, React.RefObject<HTMLElement | null>> = {
    fullName: fullNameRef,
    email: emailRef,
    phone: phoneRef,
    activity: activityRef,
    message: messageRef,
    consent: consentRef,
  };

  const handleFieldChange = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined, form: undefined }));
  };

  const validate = React.useCallback((data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    const fullNameValue = data.fullName.trim();
    if (!fullNameValue) {
      nextErrors.fullName = 'Įveskite vardą ir pavardę.';
    } else if (fullNameValue.length < 5 || !fullNameValue.includes(' ')) {
      nextErrors.fullName = 'Įveskite pilną vardą ir pavardę.';
    } else if (!/^[A-Za-zĄČĘĖĮŠŲŪŽąćęėįšųūž\s-]+$/.test(fullNameValue)) {
      nextErrors.fullName = 'Naudokite tik raides, tarpus ir brūkšnelius.';
    }

    const emailValue = data.email.trim();
    if (!emailValue) {
      nextErrors.email = 'Įveskite el. pašto adresą.';
    } else if (emailValue.length > 254) {
      nextErrors.email = 'El. pašto adresas per ilgas.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      nextErrors.email = 'Įveskite galiojantį el. pašto adresą.';
    }

    const phoneValue = data.phone.trim();
    if (phoneValue) {
      if (!/^[+\d()\s-]+$/.test(phoneValue)) {
        nextErrors.phone = 'Naudokite tik skaičius, tarpus, skliaustus, brūkšnelius ir simbolį +.';
      } else {
        const digits = phoneValue.replace(/\D/g, '');
        if (digits.length < 7) {
          nextErrors.phone = 'Įveskite galiojantį telefono numerį.';
        }
      }
    }

    if (!data.activity) {
      nextErrors.activity = 'Pasirinkite veiklos sritį.';
    }

    const messageValue = data.message.trim();
    if (!messageValue) {
      nextErrors.message = 'Įrašykite žinutę.';
    } else if (messageValue.length < 20) {
      nextErrors.message = 'Pateikite šiek tiek daugiau informacijos.';
    } else if (messageValue.length > 2000) {
      nextErrors.message = 'Žinutė per ilga. Sutrumpinkite tekstą.';
    }

    if (!data.consent) {
      nextErrors.consent = 'Turite sutikti su duomenų tvarkymu, kad galėtume atsakyti į Jūsų užklausą.';
    }

    return nextErrors;
  }, []);

  const focusFirstInvalid = (nextErrors: FormErrors) => {
    const fieldOrder: (keyof FormValues)[] = ['fullName', 'email', 'phone', 'activity', 'message', 'consent'];
    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (!firstInvalid) return;
    const fieldRef = refsByField[firstInvalid];
    fieldRef.current?.focus();
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors({
        ...nextErrors,
        form: 'Nepavyko pateikti formos. Peržiūrėkite pažymėtus laukus.',
      });
      focusFirstInvalid(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 1100));
      setIsSubmitted(true);
      setValues(INITIAL_VALUES);
    } catch {
      setErrors({ form: 'Nepavyko išsiųsti žinutės. Pabandykite dar kartą.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass =
    'h-12 w-full border bg-[rgba(239,232,219,0.08)] px-4 text-[#EFE8DB] placeholder:text-[#EFE8DB]/48 outline-none transition-[border-color,color] duration-200 focus:border-[#EFE8DB]/65';

  return (
    <section className="relative z-[2] overflow-x-clip bg-[#ECE2D3] py-20 max-[767px]:py-14" aria-labelledby="kontaktai-form-heading">
      <div className="mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="mx-auto w-full max-w-[912px]">
          <div
            ref={headlineRef}
            className="mb-12 flex flex-col items-center gap-6 text-center max-[767px]:mb-10 max-[767px]:items-start max-[767px]:text-left"
            style={{
              opacity: headlineVisible ? 1 : 0,
              filter: headlineVisible ? 'blur(0px)' : 'blur(12px)',
              transform: headlineVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
              <span className="uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                Kontaktai
              </span>
            </div>
            <h2
              id="kontaktai-form-heading"
              className="m-0 max-w-[15ch] text-[#64151F] tracking-[-0.03em]"
              style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 1.05, fontWeight: 300 }}
            >
              Parašykite mums
            </h2>
            <p className="m-0 max-w-[62ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
              Užpildykite formą ir atsakysime per 24 valandas darbo dienomis.
            </p>
          </div>

          <div
            ref={formRef}
            className="border border-[#3B443A]/24 bg-[#3B443A] p-8 max-[767px]:p-6"
            style={{
              borderRadius: '0px',
              opacity: formVisible ? 1 : 0,
              filter: formVisible ? 'blur(0px)' : 'blur(12px)',
              transform: formVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            {isSubmitted ? (
              <div className="flex flex-col gap-6">
                <h3 className="m-0 text-[#EFE8DB]" style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: 'clamp(1.8rem,3vw,2.4rem)', lineHeight: 1.1, fontWeight: 300 }}>
                  Ačiū, Jūsų žinutė išsiųsta.
                </h3>
                <p className="m-0 text-[#EFE8DB]/86" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
                  Gavome Jūsų užklausą ir susisieksime per 24 valandas darbo dienomis.
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="border border-[#EFE8DB]/32 bg-transparent px-4 py-3 text-[#EFE8DB] transition-opacity duration-200 hover:opacity-75"
                    style={{ ...BODY, borderRadius: '0px', fontSize: '14px', fontWeight: 500 }}
                  >
                    Grįžti į pradžią
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-[#EFE8DB]" style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: 'clamp(1.8rem,3vw,2.4rem)', lineHeight: 1.1, fontWeight: 300 }}>
                    Parašykite mums
                  </h3>
                  <p className="m-0 text-[#EFE8DB]/82" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5, fontWeight: 400 }}>
                    Užpildykite formą ir atsakysime per 24 valandas darbo dienomis.
                  </p>
                </div>

                {errors.form ? (
                  <div className="border border-[#64151F]/40 bg-[rgba(100,21,31,0.22)] px-4 py-3 text-[#EFE8DB]" role="alert" style={{ ...BODY, borderRadius: '0px', fontSize: '14px', lineHeight: 1.45 }}>
                    {errors.form}
                  </div>
                ) : null}

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="kontaktai-full-name" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                      Vardas ir pavardė
                    </label>
                    <input
                      id="kontaktai-full-name"
                      ref={fullNameRef}
                      value={values.fullName}
                      onChange={(e) => handleFieldChange('fullName', e.target.value)}
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                      className={`${inputBaseClass} ${errors.fullName ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                      style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                      placeholder="Vardenis Pavardenis"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby="kontaktai-full-name-help kontaktai-full-name-error"
                    />
                    <p id="kontaktai-full-name-help" className="m-0 text-[#EFE8DB]/64" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                      Įrašykite vardą ir pavardę, kad žinotume, kaip į Jus kreiptis.
                    </p>
                    {errors.fullName ? <p id="kontaktai-full-name-error" className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.fullName}</p> : null}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="kontaktai-email" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                      El. paštas
                    </label>
                    <input
                      id="kontaktai-email"
                      ref={emailRef}
                      type="email"
                      value={values.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      autoComplete="email"
                      required
                      maxLength={254}
                      disabled={isSubmitting}
                      className={`${inputBaseClass} ${errors.email ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                      style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                      placeholder="vardas@imone.lt"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby="kontaktai-email-help kontaktai-email-error"
                    />
                    <p id="kontaktai-email-help" className="m-0 text-[#EFE8DB]/64" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                      Šiuo adresu atsiųsime atsakymą į Jūsų užklausą.
                    </p>
                    {errors.email ? <p id="kontaktai-email-error" className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.email}</p> : null}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="kontaktai-phone" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                      Telefonas (neprivaloma)
                    </label>
                    <input
                      id="kontaktai-phone"
                      ref={phoneRef}
                      type="tel"
                      value={values.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      autoComplete="tel"
                      disabled={isSubmitting}
                      className={`${inputBaseClass} ${errors.phone ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                      style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                      placeholder="+370 600 00000"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby="kontaktai-phone-help kontaktai-phone-error"
                    />
                    <p id="kontaktai-phone-help" className="m-0 text-[#EFE8DB]/64" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                      Palikite numerį, jei norite, kad susisiektume greičiau.
                    </p>
                    {errors.phone ? <p id="kontaktai-phone-error" className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.phone}</p> : null}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="kontaktai-activity" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                      Jūsų veikla
                    </label>
                    <select
                      id="kontaktai-activity"
                      ref={activityRef}
                      value={values.activity}
                      onChange={(e) => handleFieldChange('activity', e.target.value)}
                      required
                      disabled={isSubmitting}
                      className={`${inputBaseClass} ${errors.activity ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                      style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                      aria-invalid={Boolean(errors.activity)}
                      aria-describedby="kontaktai-activity-help kontaktai-activity-error"
                    >
                      <option value="">Pasirinkite veiklos sritį</option>
                      {ACTIVITY_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <p id="kontaktai-activity-help" className="m-0 text-[#EFE8DB]/64" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                      Tai padės nukreipti užklausą tinkamam specialistui.
                    </p>
                    {errors.activity ? <p id="kontaktai-activity-error" className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.activity}</p> : null}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="kontaktai-message" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                      Žinutė
                    </label>
                    <textarea
                      id="kontaktai-message"
                      ref={messageRef}
                      value={values.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className={`w-full border bg-[rgba(239,232,219,0.08)] px-4 py-3 text-[#EFE8DB] placeholder:text-[#EFE8DB]/48 outline-none transition-[border-color,color] duration-200 focus:border-[#EFE8DB]/65 ${
                        errors.message ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'
                      }`}
                      style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                      placeholder="Trumpai aprašykite savo klausimą, poreikį ar situaciją"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby="kontaktai-message-help kontaktai-message-error"
                    />
                    <p id="kontaktai-message-help" className="m-0 text-[#EFE8DB]/64" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                      Kuo daugiau konteksto pateiksite, tuo tiksliau galėsime atsakyti.
                    </p>
                    {errors.message ? <p id="kontaktai-message-error" className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.message}</p> : null}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="kontaktai-consent" className="inline-flex items-start gap-3 text-[#EFE8DB]/86" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45 }}>
                    <input
                      id="kontaktai-consent"
                      ref={consentRef}
                      type="checkbox"
                      checked={values.consent}
                      onChange={(e) => handleFieldChange('consent', e.target.checked)}
                      disabled={isSubmitting}
                      className={`mt-0.5 h-4 w-4 rounded-none border bg-transparent accent-[#64151F] ${errors.consent ? 'border-[#64151F]' : 'border-[#EFE8DB]/34'}`}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby="kontaktai-consent-error"
                    />
                    <span>
                      Sutinku, kad mano pateikti duomenys būtų naudojami atsakyti į mano užklausą. Sužinokite daugiau{' '}
                      <a href="#" className="text-[#EFE8DB] underline underline-offset-2 transition-opacity duration-200 hover:opacity-75">
                        privatumo politikoje
                      </a>
                      .
                    </span>
                  </label>
                  {errors.consent ? <p id="kontaktai-consent-error" className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.consent}</p> : null}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="border border-[#EFE8DB]/22 bg-[#EFE8DB] px-5 py-3 text-[#1A1010] transition-opacity duration-200 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-65"
                    style={{ ...BODY, borderRadius: '0px', fontSize: '14px', lineHeight: 1, fontWeight: 500 }}
                  >
                    {isSubmitting ? 'Siunčiama…' : 'Siųsti žinutę'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div ref={cardsRef} className="mt-6 grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
            {[
              {
                icon: <SfEnvelope size={17} className="text-current" aria-hidden />,
                title: 'info@unicos.lt',
                desc: 'Atsakome per 24 valandas darbo dienomis.',
                href: 'mailto:info@unicos.lt',
              },
              {
                icon: <SfPhone size={17} className="text-current" aria-hidden />,
                title: '(+370 5) 270 57 12',
                desc: 'B2B linija, darbo dienomis 8:00-17:00.',
                href: 'tel:+37052705712',
              },
              {
                icon: <SfMapPin size={17} className="text-current" aria-hidden />,
                title: 'Metalo g. 13a, LT - 02190, Vilnius',
                desc: 'Aplankymas tik iš anksto susitarus su vadybininku.',
                href: 'https://maps.google.com/?q=Metalo+g.+13a,+Vilnius',
              },
            ].map((card, index) => (
              <article
                key={card.title}
                className="border border-[#3B443A]/24 bg-[#3B443A] p-7 text-[#EFE8DB]"
                style={{
                  borderRadius: '0px',
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(18px)',
                  transition: `opacity 0.65s ease-out ${index * 90}ms, transform 0.65s ease-out ${index * 90}ms`,
                }}
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center border border-[#EFE8DB]/20 bg-[rgba(239,232,219,0.08)] text-[#EFE8DB]" style={{ borderRadius: '0px' }}>
                  {card.icon}
                </div>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="m-0 block no-underline text-[#EFE8DB] transition-opacity duration-200 hover:opacity-70"
                  style={{ ...BODY, fontSize: '19px', lineHeight: 1.25, fontWeight: 500 }}
                >
                  {card.title}
                </a>
                <p className="mt-3 mb-0 text-[#EFE8DB]/68" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                  {card.desc}
                </p>
              </article>
            ))}
          </div>

          <div
            ref={logosRef}
            className="mt-12 overflow-hidden border-y border-[#1A1010]/12 py-5"
            style={{
              opacity: logosVisible ? 1 : 0,
              filter: logosVisible ? 'blur(0px)' : 'blur(12px)',
              transition: 'opacity 0.7s ease-out, filter 0.7s ease-out',
            }}
          >
            <div className="mb-4 flex items-center justify-center max-[767px]:justify-start">
              <span className="uppercase text-[#1A1010]/66" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                Partneriai
              </span>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-14 bg-gradient-to-r from-[#ECE2D3] to-transparent" aria-hidden />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-14 bg-gradient-to-l from-[#ECE2D3] to-transparent" aria-hidden />
              <div className="kontaktai-logo-marquee flex w-max items-center gap-12 text-[#1A1010]/56 max-[767px]:gap-8">
                {Array.from({ length: 3 }).map((_, groupIndex) => (
                  <div key={`logos-${groupIndex}`} className="flex items-center gap-12 max-[767px]:gap-8">
                    {['/comfort zone.svg', '/Guinot logo.svg', '/Mary Cohr logo.svg'].map((logo) => (
                      <img
                        key={`${groupIndex}-${logo}`}
                        src={logo}
                        alt=""
                        aria-hidden
                        className="h-7 w-auto opacity-75 max-[767px]:h-6"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .kontaktai-logo-marquee {
          animation: kontaktai-marquee 30s linear infinite;
        }
        .kontaktai-logo-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes kontaktai-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
