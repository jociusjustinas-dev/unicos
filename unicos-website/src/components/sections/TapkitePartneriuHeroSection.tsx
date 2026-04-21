'use client';

import * as React from 'react';
import { SfCheckboxCheck } from '@/components/icons/feather';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const LABEL: React.CSSProperties = {
  ...BODY,
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 400,
  letterSpacing: '0.75px',
  textTransform: 'uppercase',
};

const INPUT_BASE_CLASS =
  'w-full appearance-none rounded-none border border-[rgba(239,232,219,0.16)] bg-[rgba(239,232,219,0.09)] px-4 py-3 text-base leading-6 font-normal text-[rgba(239,232,219,0.82)] placeholder:text-[rgba(239,232,219,0.56)] outline-none transition-[border-color,color] duration-200 focus:border-[rgba(239,232,219,0.52)] focus:text-[#EFE8DB] max-[767px]:text-sm max-[767px]:leading-5 max-[767px]:py-[10px] max-[767px]:px-3';

function ChevronDownIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 25 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6.5 9L12.5 15L18.5 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M9.69824 5.26074C9.84349 5.5561 10.1255 5.76082 10.4512 5.80859L14.2598 6.36719L11.502 9.06348C11.2674 9.293 11.1606 9.62275 11.2158 9.94629L11.8652 13.752L8.46387 11.957C8.17179 11.8029 7.82233 11.8029 7.53027 11.957L4.12891 13.752L4.7793 9.94629C4.8345 9.62285 4.72764 9.29298 4.49316 9.06348L1.73535 6.36719L5.54395 5.80859C5.86948 5.76081 6.15062 5.55594 6.2959 5.26074L7.99707 1.80078L9.69824 5.26074Z"
        fill="currentColor"
      />
    </svg>
  );
}

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  companyNameOrIv: string;
  companyCodeOrIv: string;
  activity: string;
  city: string;
  source: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>> & { form?: string };

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

const SOURCE_OPTIONS = ['Google / internetinė paieška', 'Rekomendacija', 'Socialiniai tinklai', 'Kita'] as const;

const INITIAL_VALUES: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  companyNameOrIv: '',
  companyCodeOrIv: '',
  activity: '',
  city: '',
  source: '',
  consent: false,
};

export function TapkitePartneriuHeroSection() {
  const [topRef, topVisible] = useInViewOnce<HTMLDivElement>();
  const [testimonialRef, testimonialVisible] = useInViewOnce<HTMLDivElement>();
  const [formRef, formVisible] = useInViewOnce<HTMLDivElement>({ threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

  const [values, setValues] = React.useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const fullNameRef = React.useRef<HTMLInputElement | null>(null);
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const phoneRef = React.useRef<HTMLInputElement | null>(null);
  const companyNameOrIvRef = React.useRef<HTMLInputElement | null>(null);
  const companyCodeOrIvRef = React.useRef<HTMLInputElement | null>(null);
  const activityRef = React.useRef<HTMLSelectElement | null>(null);
  const cityRef = React.useRef<HTMLInputElement | null>(null);
  const sourceRef = React.useRef<HTMLSelectElement | null>(null);
  const consentRef = React.useRef<HTMLInputElement | null>(null);

  const handleFieldChange = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined, form: undefined }));
  };

  const focusFirstInvalid = (nextErrors: FormErrors) => {
    const order: (keyof FormValues)[] = [
      'fullName',
      'email',
      'phone',
      'companyNameOrIv',
      'companyCodeOrIv',
      'activity',
      'city',
      'source',
      'consent',
    ];

    const firstInvalid = order.find((key) => nextErrors[key]);
    if (!firstInvalid) return;

    const refMap: Partial<Record<keyof FormValues, React.RefObject<HTMLElement | null>>> = {
      fullName: fullNameRef,
      email: emailRef,
      phone: phoneRef,
      companyNameOrIv: companyNameOrIvRef,
      companyCodeOrIv: companyCodeOrIvRef,
      activity: activityRef as unknown as React.RefObject<HTMLElement | null>,
      city: cityRef,
      source: sourceRef as unknown as React.RefObject<HTMLElement | null>,
      consent: consentRef,
    };

    refMap[firstInvalid]?.current?.focus?.();
  };

  const validate = React.useCallback((data: FormValues): FormErrors => {
    const next: FormErrors = {};

    const fullNameValue = data.fullName.trim();
    if (!fullNameValue) {
      next.fullName = 'Įveskite vardą ir pavardę.';
    } else if (fullNameValue.length < 5 || !fullNameValue.includes(' ')) {
      next.fullName = 'Įveskite pilną vardą ir pavardę.';
    } else if (!/^[A-Za-zĄČĘĖĮŠŲŪŽąćęėįšųūž\s-]+$/.test(fullNameValue)) {
      next.fullName = 'Naudokite tik raides, tarpus ir brūkšnelius.';
    }

    const emailValue = data.email.trim();
    if (!emailValue) {
      next.email = 'Įveskite el. pašto adresą.';
    } else if (emailValue.length > 254) {
      next.email = 'El. pašto adresas per ilgas.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      next.email = 'Įveskite galiojantį el. pašto adresą.';
    }

    const phoneValue = data.phone.trim();
    if (!phoneValue) {
      next.phone = 'Įveskite telefono numerį.';
    } else if (!/^[+\d()\s-]+$/.test(phoneValue)) {
      next.phone = 'Naudokite tik skaičius, tarpus, skliaustus, brūkšnelius ir simbolį +.';
    } else {
      const digits = phoneValue.replace(/\D/g, '');
      if (digits.length < 7) next.phone = 'Įveskite galiojantį telefono numerį.';
    }

    const companyNameValue = data.companyNameOrIv.trim();
    if (!companyNameValue) next.companyNameOrIv = 'Įveskite įmonės pavadinimą arba IV.';

    const companyCodeValue = data.companyCodeOrIv.trim();
    if (!companyCodeValue) next.companyCodeOrIv = 'Įveskite įmonės kodą / IV pažymos nr.';
    else if (!/^[0-9]+$/.test(companyCodeValue) || companyCodeValue.length < 7)
      next.companyCodeOrIv = 'Įveskite galiojantį įmonės kodą / IV pažymos numerį.';

    if (!data.activity) next.activity = 'Pasirinkite veiklos sritį.';
    if (!data.city.trim()) next.city = 'Įveskite miestą.';
    if (!data.source) next.source = 'Pasirinkite, kaip sužinojote apie mus.';
    if (!data.consent) next.consent = 'Turite pažymėti sutikimą.';

    return next;
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors({ ...nextErrors, form: 'Nepavyko pateikti formos. Peržiūrėkite pažymėtus laukus.' });
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
      setErrors({ form: 'Nepavyko išsiųsti paraiškos. Pabandykite dar kartą.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const topStyle: React.CSSProperties = {
    opacity: topVisible ? 1 : 0,
    filter: topVisible ? 'blur(0px)' : 'blur(12px)',
    transform: topVisible ? 'translateY(0)' : 'translateY(18px)',
    transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
  };

  const testimonialStyle: React.CSSProperties = {
    opacity: testimonialVisible ? 1 : 0,
    filter: testimonialVisible ? 'blur(0px)' : 'blur(12px)',
    transform: testimonialVisible ? 'translateY(18px)' : 'translateY(18px)',
    transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
  };

  const formStyle: React.CSSProperties = {
    opacity: formVisible ? 1 : 0,
    filter: formVisible ? 'blur(0px)' : 'blur(12px)',
    transform: formVisible ? 'translateY(0)' : 'translateY(18px)',
    transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
  };

  const testimonial = {
    statLine: '+35% Pajamų augimas',
    quote: '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio.“',
    authorName: 'Dr. Ieva Kazlauskienė',
    authorRole: 'Dermatovenerologė',
    avatar: 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-2.webp',
  };

  return (
    <section className="relative z-[2] overflow-x-clip border-b border-[#1A1010]/10 bg-white pt-40 pb-20 max-[767px]:pt-24 max-[767px]:pb-12">
      <div className="mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          className="grid grid-cols-2 max-[991px]:grid-cols-1"
          style={{ columnGap: '132px', rowGap: '132px' }}
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between items-start gap-12 max-w-[564px] max-[991px]:flex-row max-[991px]:justify-between max-[991px]:items-end max-[991px]:max-w-none max-[767px]:flex-col max-[767px]:justify-between max-[767px]:items-start max-[767px]:gap-8">
            <div ref={topRef} style={topStyle} className="flex flex-col items-start gap-6 max-[767px]:gap-4 transition-all duration-700 ease-out max-[991px]:max-w-[448px] max-[479px]:max-w-[364px]">
              <div
                className="flex items-center justify-center px-2 py-1 bg-[#EFE8DB]"
                style={{ borderRadius: '0px' }}
              >
                <span
                  className="uppercase"
                  style={{ ...LABEL, color: '#1A1010', fontSize: '10px', lineHeight: '12px', fontWeight: 400, letterSpacing: '0.75px' }}
                >
                  Tapkite partneriu
                </span>
              </div>

              <h1
                className="m-0 z-[1] max-[767px]:text-[44px] max-[767px]:leading-[48px] max-[767px]:tracking-[-2px] text-[#64151F]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                }}
              >
                Jūsų augimo partnerystė prasideda čia.
              </h1>

              <p
                className="m-0 max-[767px]:text-base max-[767px]:leading-6 text-[#1A1010]/78"
                style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
              >
                Užpildykite paraišką ir per 24 valandas gaukite asmeninį vadybininko skambutį. Jokių įsipareigojimų — tik pokalbis apie Jūsų tikslus.
              </p>

              <div className="mt-2 flex flex-col gap-2.5">
                {[
                  'Patvirtinimas per 24 val.',
                  'Startas nuo 150 €',
                  'Be ilgalaikių įsipareigojimų',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2 text-[#1A1010]/86">
                    <SfCheckboxCheck size={16} className="mt-[1px] text-[#64151F] shrink-0" aria-hidden />
                    <span style={{ ...BODY, fontSize: '14px', lineHeight: '1.35', fontWeight: 400 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={testimonialRef}
              style={testimonialStyle}
              className={`flex flex-col gap-8 p-6 max-[991px]:p-6 max-[767px]:gap-6 max-[767px]:p-4`}
            >
              <div className="flex flex-col gap-6 p-6" style={{ backgroundColor: '#EFE8DB', borderRadius: '0px', border: '1px solid rgba(26,16,16,0.1)' }}>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="inline-flex h-4 w-4 items-center justify-center text-[#64151F]">
                      <StarIcon className="h-full w-full" />
                    </span>
                  ))}
                </div>

                <div style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 400, color: '#1A1010' }}>
                  {testimonial.quote}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-none w-8 h-8 overflow-hidden border-2 border-[#EFE8DB] bg-[#EFE8DB]" style={{ borderRadius: '0px' }}>
                    <img src={testimonial.avatar} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div style={{ ...BODY, fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#1A1010' }}>
                    {testimonial.authorName}
                    <div style={{ ...BODY, fontSize: '14px', lineHeight: '20px', fontWeight: 400, color: 'rgba(26,16,16,0.64)' }}>
                      {testimonial.authorRole}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div ref={formRef} style={formStyle} className="transition-all duration-700 ease-out max-[991px]:w-full">
            <div
              className="mb-0 p-8 max-[767px]:p-6"
              style={{
                backgroundColor: '#64151F',
                color: 'rgba(239,232,219,0.88)',
                borderRadius: '0px',
                border: '1px solid rgba(239,232,219,0.16)',
              }}
            >
              {isSubmitted ? (
                <div className="flex flex-col gap-6">
                  <h3
                    className="m-0 text-[#EFE8DB]"
                    style={{ fontFamily: "'Quiche Sans', Georgia, serif", fontSize: 'clamp(2rem,3vw,2.4rem)', lineHeight: 1.1, fontWeight: 300 }}
                  >
                    Ačiū! Parašymas išsiųstas.
                  </h3>
                  <p className="m-0 text-[#EFE8DB]/86" style={{ ...BODY, fontSize: '16px', lineHeight: '1.55', fontWeight: 400 }}>
                    Jūsų duomenys saugūs. Atsakysime per 24 val. darbo dienomis.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setErrors({});
                    }}
                    className="border border-[#EFE8DB]/32 bg-transparent px-4 py-3 text-[#EFE8DB] transition-opacity duration-200 hover:opacity-75"
                    style={{ ...BODY, borderRadius: '0px', fontSize: '14px', fontWeight: 500 }}
                  >
                    Pildyti dar kartą
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-12 w-full max-[767px]:gap-8">
                  {errors.form ? (
                    <div
                      className="border border-[#64151F]/40 bg-[rgba(100,21,31,0.22)] px-4 py-3 text-[#EFE8DB]"
                      role="alert"
                      style={{ ...BODY, borderRadius: '0px', fontSize: '14px', lineHeight: 1.45 }}
                    >
                      {errors.form}
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-8 w-full max-[767px]:gap-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-2 gap-4 max-[767px]:gap-3 max-[479px]:grid-cols-1">
                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="partner-full-name" className="uppercase" style={{ ...LABEL, color: 'rgba(239,232,219,0.64)', fontSize: '12px' }}>
                          Vardas, pavardė *
                        </label>
                        <input
                          id="partner-full-name"
                          name="fullName"
                          ref={fullNameRef}
                          value={values.fullName}
                          onChange={(e) => handleFieldChange('fullName', e.target.value)}
                          placeholder="Vardenis Pavardenis"
                          required
                          disabled={isSubmitting}
                          className={`${INPUT_BASE_CLASS} ${errors.fullName ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                          style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                        />
                          {errors.fullName ? (
                            <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                              {errors.fullName}
                            </p>
                          ) : null}
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="partner-email" className="uppercase" style={{ ...LABEL, color: 'rgba(239,232,219,0.64)', fontSize: '12px' }}>
                          El. paštas *
                        </label>
                        <input
                          id="partner-email"
                          name="email"
                          ref={emailRef}
                          value={values.email}
                          onChange={(e) => handleFieldChange('email', e.target.value)}
                          type="email"
                          placeholder="vardas@imone.lt"
                          required
                          disabled={isSubmitting}
                          className={`${INPUT_BASE_CLASS} ${errors.email ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                          style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                        />
                          {errors.email ? (
                            <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                              {errors.email}
                            </p>
                          ) : null}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-2 gap-4 max-[767px]:gap-3 max-[479px]:grid-cols-1">
                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="partner-phone" className="uppercase" style={{ ...LABEL, color: 'rgba(239,232,219,0.64)', fontSize: '12px' }}>
                          Telefonas *
                        </label>
                        <input
                          id="partner-phone"
                          name="phone"
                          ref={phoneRef}
                          value={values.phone}
                          onChange={(e) => handleFieldChange('phone', e.target.value)}
                          placeholder="+370 600 00000"
                          required
                          disabled={isSubmitting}
                          className={`${INPUT_BASE_CLASS} ${errors.phone ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                          style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                        />
                          {errors.phone ? (
                            <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                              {errors.phone}
                            </p>
                          ) : null}
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="partner-company-name" className="uppercase" style={{ ...LABEL, color: 'rgba(239,232,219,0.64)', fontSize: '12px' }}>
                          Įmonės pavadinimas arba IV *
                        </label>
                        <input
                          id="partner-company-name"
                          name="companyNameOrIv"
                          ref={companyNameOrIvRef}
                          value={values.companyNameOrIv}
                          onChange={(e) => handleFieldChange('companyNameOrIv', e.target.value)}
                          placeholder="UAB Grožis"
                          required
                          disabled={isSubmitting}
                          className={`${INPUT_BASE_CLASS} ${errors.companyNameOrIv ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                          style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                        />
                          {errors.companyNameOrIv ? (
                            <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                            {errors.companyNameOrIv}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-2 gap-4 max-[767px]:gap-3 max-[479px]:grid-cols-1">
                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="partner-company-code" className="uppercase" style={{ ...LABEL, color: 'rgba(239,232,219,0.64)', fontSize: '12px' }}>
                          Įmonės kodas / IV pažymos nr. *
                        </label>
                        <input
                          id="partner-company-code"
                          name="companyCodeOrIv"
                          ref={companyCodeOrIvRef}
                          value={values.companyCodeOrIv}
                          onChange={(e) => handleFieldChange('companyCodeOrIv', e.target.value.replace(/[^\d]/g, ''))}
                          placeholder="123456789"
                          required
                          disabled={isSubmitting}
                          className={`${INPUT_BASE_CLASS} ${errors.companyCodeOrIv ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                          style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                        />
                        {errors.companyCodeOrIv ? (
                          <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                            {errors.companyCodeOrIv}
                          </p>
                        ) : null}
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="partner-activity" className="uppercase" style={{ ...LABEL, color: 'rgba(239,232,219,0.64)', fontSize: '12px' }}>
                          Jūsų veiklos sritis
                        </label>
                        <div className="relative w-full">
                          <select
                            id="partner-activity"
                            name="activity"
                            ref={activityRef}
                            value={values.activity}
                            onChange={(e) => handleFieldChange('activity', e.target.value)}
                            required
                            disabled={isSubmitting}
                            className={`${INPUT_BASE_CLASS} ${errors.activity ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                            style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                          >
                            <option value="">Jūsų veiklos sritis</option>
                            {ACTIVITY_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 flex items-center justify-end pr-4 max-[767px]:pr-3" style={{ color: '#EFE8DB' }}>
                            <ChevronDownIcon className="h-4 w-4" />
                          </div>
                        </div>
                        {errors.activity ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.activity}</p> : null}
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-2 gap-4 max-[767px]:gap-3 max-[479px]:grid-cols-1">
                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="partner-city" className="uppercase" style={{ ...LABEL, color: 'rgba(239,232,219,0.64)', fontSize: '12px' }}>
                          Miestas *
                        </label>
                        <input
                          id="partner-city"
                          name="city"
                          ref={cityRef}
                          value={values.city}
                          onChange={(e) => handleFieldChange('city', e.target.value)}
                          placeholder="Vilnius"
                          required
                          disabled={isSubmitting}
                          className={`${INPUT_BASE_CLASS} ${errors.city ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                          style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                        />
                        {errors.city ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.city}</p> : null}
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="partner-source" className="uppercase" style={{ ...LABEL, color: 'rgba(239,232,219,0.64)', fontSize: '12px' }}>
                          Kaip apie mus sužinojote?
                        </label>
                        <div className="relative w-full">
                          <select
                            id="partner-source"
                            name="source"
                            ref={sourceRef}
                            value={values.source}
                            onChange={(e) => handleFieldChange('source', e.target.value)}
                            required
                            disabled={isSubmitting}
                            className={`${INPUT_BASE_CLASS} ${errors.source ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'}`}
                            style={{ ...BODY, borderRadius: '0px', fontSize: '15px', lineHeight: 1.45 }}
                          >
                            <option value="">Kaip apie mus sužinojote?</option>
                            {SOURCE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 flex items-center justify-end pr-4 max-[767px]:pr-3" style={{ color: '#EFE8DB' }}>
                            <ChevronDownIcon className="h-4 w-4" />
                          </div>
                        </div>
                        {errors.source ? (
                          <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
                            {errors.source}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {/* Consent */}
                    <label
                      className="flex items-start gap-3 cursor-pointer max-[767px]:gap-[10px]"
                      htmlFor="partner-consent"
                      style={{ ...BODY, color: '#EFE8DB', fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}
                    >
                      <span className="relative mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center">
                        <input
                          id="partner-consent"
                          ref={consentRef}
                          type="checkbox"
                          checked={values.consent}
                          onChange={(e) => handleFieldChange('consent', e.target.checked)}
                          required
                          disabled={isSubmitting}
                          className={`h-4 w-4 appearance-none border bg-[rgba(239,232,219,0.09)] transition-[background-color,border-color] duration-200 ${
                            errors.consent ? 'border-[#64151F]' : 'border-[#EFE8DB]/12'
                          } ${values.consent ? '!border-[#EFE8DB] !bg-[#EFE8DB]' : ''}`}
                          style={{ borderRadius: '0px' }}
                          aria-invalid={Boolean(errors.consent)}
                        />
                        {values.consent ? (
                          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[#3B443A]">
                            <SfCheckboxCheck size={12} className="text-current" aria-hidden />
                          </span>
                        ) : null}
                      </span>
                      <span>
                        Sutinku, kad UNICOS tvarkytų mano duomenis partnerystės paraiškos tikslais.{' '}
                        <a href="#" className="underline underline-offset-2 transition-opacity hover:opacity-75" style={{ color: '#EFE8DB' }}>
                          Privatumo politika.
                        </a>
                      </span>
                    </label>
                    {errors.consent ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>{errors.consent}</p> : null}
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden border border-[#EFE8DB]/22 bg-[#EFE8DB] px-5 py-3 text-[#1A1010] transition-[background-color,border-color,color,transform,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#E6DDD0] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-65"
                      style={{ ...BODY, borderRadius: '0px', fontSize: '14px', lineHeight: 1, fontWeight: 500 }}
                    >
                      <span className="pointer-events-none relative z-[1] h-[1.5em] overflow-hidden">
                        <span
                          className="block text-[14px] font-medium leading-[1.5em] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-[1.5em]"
                          style={{ ...BODY, textShadow: '0 1.5em 0 #1A1010' }}
                        >
                          {isSubmitting ? 'Pateikiama…' : 'Pateikti paraišką'}
                        </span>
                      </span>
                    </button>

                    <p className="m-0 text-[#EFE8DB]/64" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45, fontWeight: 400 }}>
                      Jūsų duomenys saugūs. Atsakysime per 24 val.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TapkitePartneriuHeroSection;

