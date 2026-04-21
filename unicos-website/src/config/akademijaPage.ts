/** /akademija puslapis — filtrai ir renginių duomenys */

import type { Challenges3 } from '@/config/sprendimaiSolutionLanding';

export type AkademijaTopicId = 'all' | 'dermatologija' | 'kosmetologija' | 'plaukai' | 'verslas' | 'estetika';

export type AkademijaFormatId = 'all' | 'gyvai' | 'online';

export type AkademijaTimeId = 'all' | 'thisMonth' | 'nextMonth' | 'thisQuarter';

export const AKADEMIJA_TOPIC_FILTERS: { id: AkademijaTopicId; label: string }[] = [
  { id: 'all', label: 'Visi' },
  { id: 'dermatologija', label: 'Dermatologija' },
  { id: 'kosmetologija', label: 'Kosmetologija' },
  { id: 'plaukai', label: 'Plaukų priežiūra' },
  { id: 'verslas', label: 'Verslas' },
  { id: 'estetika', label: 'Estetinė medicina' },
];

export const AKADEMIJA_FORMAT_FILTERS: { id: AkademijaFormatId; label: string }[] = [
  { id: 'all', label: 'Visi' },
  { id: 'gyvai', label: 'Gyvai' },
  { id: 'online', label: 'Online' },
];

export const AKADEMIJA_TIME_FILTERS: { id: AkademijaTimeId; label: string }[] = [
  { id: 'all', label: 'Visi' },
  { id: 'thisMonth', label: 'Šis mėnuo' },
  { id: 'nextMonth', label: 'Kitas mėnuo' },
  { id: 'thisQuarter', label: 'Šis ketvirtis' },
];

export type AkademijaEvent = {
  id: string;
  topic: Exclude<AkademijaTopicId, 'all'>;
  format: 'gyvai' | 'online';
  /** YYYY-MM renginio mėnuo (filtrui „Šis mėnuo“). */
  monthKey: string;
  tags: string[];
  datetime: string;
  title: string;
  rowLeft: string;
  rowRight: string;
  onlineVenue?: boolean;
  speaker: string;
  speakerRole: string;
  speakerAvatar?: string;
  statusLine: string;
  statusTone: 'green' | 'maroon';
  statusMuted?: boolean;
  price: string;
  imageSrc: string;
  href: string;
};

export const AKADEMIJA_EVENTS: AkademijaEvent[] = [
  {
    id: 'evt-1',
    topic: 'dermatologija',
    format: 'gyvai',
    monthKey: '2026-10',
    tags: ['DERMATOLOGIJA', 'GYVAI', 'LT'],
    datetime: 'Spalio 24, 10:00–16:00',
    title: 'Neostrata rūgštinių pilingų meistriškumas',
    rowLeft: 'Vilnius, UNICOS Akademija',
    rowRight: 'Tarptautinis sertifikatas',
    speaker: 'Dr. Rūta Gancevičienė',
    speakerRole: 'Dermatovenerologė',
    speakerAvatar: 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp',
    statusLine: 'Liko 4 vietos',
    statusTone: 'maroon',
    statusMuted: true,
    price: '49 €',
    imageSrc: '/mega-menu/1.jpeg',
    href: '/kontaktai',
  },
  {
    id: 'evt-2',
    topic: 'kosmetologija',
    format: 'gyvai',
    monthKey: '2026-11',
    tags: ['KOSMETOLOGIJA', 'GYVAI', 'LT'],
    datetime: 'Lapkričio 05, 11:00–15:00',
    title: 'Guinot aparatinės procedūros: Hydradermie',
    rowLeft: 'Kaunas, viešbutis „Moxy“',
    rowRight: 'Dalyvio diplomas',
    speaker: 'Laura Simanavičiūtė',
    speakerRole: 'Guinot trenerė',
    speakerAvatar: 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp',
    statusLine: 'Registracija atvira',
    statusTone: 'green',
    price: 'Nemokama',
    imageSrc: '/mega-menu/2.jpeg',
    href: '/kontaktai',
  },
  {
    id: 'evt-3',
    topic: 'verslas',
    format: 'online',
    monthKey: '2026-11',
    tags: ['VERSLAS', 'ONLINE', 'LT-EN'],
    datetime: 'Lapkričio 12, 09:00–11:00',
    title: 'Verslo augimo pusryčiai: Kainodara',
    rowLeft: 'Online / Zoom',
    rowRight: 'Nėra',
    onlineVenue: true,
    speaker: 'Tomas Misiukonis',
    speakerRole: 'Verslo konsultantas',
    speakerAvatar: 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp',
    statusLine: 'Neribota',
    statusTone: 'green',
    price: '29 €',
    imageSrc: '/mega-menu/3.jpeg',
    href: '/kontaktai',
  },
];

export const AKADEMIJA_WHY_CARDS = [
  {
    title: 'Praktika, ne teorija',
    description: 'Seminarai orientuoti į realų darbą kabinete, ne paskaitas.',
  },
  {
    title: 'Tarptautiniai lektoriai',
    description: 'Mokotės iš geriausių gamintojų trenerių ir pripažintų specialistų.',
  },
  {
    title: 'Sertifikatai',
    description: 'Kiekvienas seminaras baigiasi oficialia pažyma, stiprinančia Jūsų autoritetą.',
  },
  {
    title: 'Maža grupė',
    description: 'Ribojame dalyvių skaičių, kad kiekvienas gautų asmeninį dėmesį.',
  },
] as const;

export const AKADEMIJA_FORMAT_CARDS = [
  {
    title: 'Gyvai',
    description:
      'Praktiniai seminarai Vilniuje, Kaune ir kitose Lietuvos miestuose. Darbas su produktais ir aparatūra realiomis sąlygomis.',
  },
  {
    title: 'Online',
    description: 'Nuotoliniai seminarai ir verslo dirbtuvės per Zoom. Patogu dalyvauti iš bet kur.',
  },
  {
    title: 'Uždarieji',
    description: 'Individualūs mokymai Jūsų komandai Jūsų patalpose. Turinys pritaikomas pagal Jūsų poreikius.',
  },
] as const;

/** `OdosChallengesSection` (Pažįstama situacija) blokui — tie patys 3 formatai kaip `label` / `paragraph`. */
export const AKADEMIJA_FORMAT_CHALLENGES: Challenges3 = AKADEMIJA_FORMAT_CARDS.map((c) => ({
  label: c.title,
  paragraph: c.description,
})) as unknown as Challenges3;

/** Marquee statistika (`BrandStatsMarqueeSection`): value + label + trumpas aprašymas. */
export const AKADEMIJA_MARQUEE_STATS = [
  { value: '50+', label: 'seminarų', description: 'Per metus' },
  { value: '500+', label: 'dalyvių', description: 'Kasmet kelia kvalifikaciją' },
  { value: '12', label: 'prekių ženklų', description: 'Kartu kuriame mokymus' },
  { value: '95%', label: 'rekomenduotų', description: 'Dalyviai siūlytų kolegoms' },
];

export type AkademijaFaqEntry = { id: string; question: string; answer: string };

export const AKADEMIJA_FAQ_ENTRIES: readonly AkademijaFaqEntry[] = [
  {
    id: 'faq-partner',
    question: 'Kaip tapti partneriu?',
    answer:
      'Viskas prasideda nuo paprastos registracijos formos. Gavę Jūsų duomenis, mes juos peržiūrėsime ir susisieksime su Jumis per 24 valandas, kad suteiktume prieigą.',
  },
  {
    id: 'faq-min',
    question: 'Koks minimalus užsakymas?',
    answer: 'Startuoti galite vos nuo 150 €. Turime paruoštus rinkinius.',
  },
  {
    id: 'faq-train',
    question: 'Ar teikiate mokymus?',
    answer:
      'Tikrai taip! Nuolat kviečiame į praktinius seminarus ir mokymus, kur ne tik dalijamės žiniomis, bet ir išduodame sertifikatus.',
  },
  {
    id: 'faq-delivery',
    question: 'Kaip vyksta prekių pristatymas?',
    answer:
      'Taupome Jūsų laiką: jei užsakote iki 14:00 val., prekes išsiunčiame dar tą pačią dieną. Dažniausiai siunta Jus pasieks per 1–2 d. d.',
  },
  {
    id: 'faq-samples',
    question: 'Ar galima gauti mėginių?',
    answer:
      'Žinoma. Prie kiekvieno užsakymo pridedame mėginių, kad galėtumėte išbandyti naujienas. Taip pat turime specialius startinius rinkinius susipažinimui.',
  },
];

export const AKADEMIJA_FAQ_INTRO =
  'Surinkome atsakymus į dažniausiai kylančius klausimus, kad viskas būtų aišku nuo pat pradžių.';
