/** /akademija puslapis — filtrai ir renginių duomenys */

export type AkademijaTopicId = 'all' | 'dermatologija' | 'kosmetologija' | 'plaukai' | 'verslas' | 'estetika';

export type AkademijaFormatId = 'all' | 'gyvai' | 'online';

export type AkademijaTimeId = 'all' | 'thisMonth';

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
];

export type AkademijaEvent = {
  id: string;
  topic: Exclude<AkademijaTopicId, 'all'>;
  format: 'gyvai' | 'online';
  /** YYYY-MM renginio mėnuo (filtrui „Šis mėnuo“). */
  monthKey: string;
  categoryLabel: string;
  languageLabel: string;
  dateLabel: string;
  timeLabel: string;
  formatLabel: string;
  title: string;
  venue: string;
  extraInfo: string;
  speaker: string;
  speakerRole: string;
  statusLine: string;
  statusTone: 'green' | 'maroon';
  statusMuted?: boolean;
  price: string;
  priceNote: string;
  imageSrc: string;
  href: string;
};

export const AKADEMIJA_EVENTS: AkademijaEvent[] = [
  {
    id: 'a1',
    topic: 'dermatologija',
    format: 'gyvai',
    monthKey: '2026-10',
    categoryLabel: 'Dermatologija',
    languageLabel: 'LT',
    dateLabel: 'Spalio 24',
    timeLabel: '10:00–16:00',
    formatLabel: 'Gyvai',
    title: 'Neostrata rūgštinių pilingų meistriškumas',
    venue: 'Vilnius, UNICOS Akademija',
    extraInfo: 'Tarptautinis sertifikatas',
    speaker: 'Dr. Rūta Gancevičienė',
    speakerRole: 'Dermatovenerologė',
    statusLine: 'Liko 4 vietos',
    statusTone: 'maroon',
    statusMuted: true,
    price: '49 €',
    priceNote: 'Be PVM',
    imageSrc: '/mega-menu/1.jpeg',
    href: '/kontaktai',
  },
  {
    id: 'a2',
    topic: 'kosmetologija',
    format: 'gyvai',
    monthKey: '2026-11',
    categoryLabel: 'Kosmetologija',
    languageLabel: 'LT',
    dateLabel: 'Lapkričio 05',
    timeLabel: '11:00–15:00',
    formatLabel: 'Gyvai',
    title: 'Guinot aparatinės procedūros: Hydradermie',
    venue: 'Kaunas, viešbutis „Moxy“',
    extraInfo: 'Dalyvio diplomas',
    speaker: 'Laura Simanavičiūtė',
    speakerRole: 'Guinot trenerė',
    statusLine: 'Registracija atvira',
    statusTone: 'green',
    price: 'Nemokama',
    priceNote: '',
    imageSrc: '/mega-menu/2.jpeg',
    href: '/kontaktai',
  },
  {
    id: 'a3',
    topic: 'verslas',
    format: 'online',
    monthKey: '2026-11',
    categoryLabel: 'Verslas',
    languageLabel: 'LT/EN',
    dateLabel: 'Lapkričio 12',
    timeLabel: '09:00–11:00',
    formatLabel: 'Online',
    title: 'Verslo augimo pusryčiai: Kainodara',
    venue: 'Online / Zoom',
    extraInfo: 'Sertifikatas',
    speaker: 'Tomas Misiukonis',
    speakerRole: 'Verslo konsultantas',
    statusLine: 'Neribota',
    statusTone: 'green',
    price: '29 €',
    priceNote: 'Be PVM',
    imageSrc: '/mega-menu/3.jpeg',
    href: '/kontaktai',
  },
  {
    id: 'a4',
    topic: 'plaukai',
    format: 'gyvai',
    monthKey: '2026-11',
    categoryLabel: 'Plaukų priežiūra',
    languageLabel: 'LT',
    dateLabel: 'Lapkričio 15',
    timeLabel: '10:00–14:00',
    formatLabel: 'Gyvai',
    title: 'Profesionalus konsultavimas prie kėdės',
    venue: 'Vilnius, UNICOS Akademija',
    extraInfo: 'Dalyvio diplomas',
    speaker: 'UNICOS ekspertai',
    speakerRole: 'UNICOS akademijos komanda',
    statusLine: 'Registracija atvira',
    statusTone: 'green',
    price: 'Nemokama partneriams',
    priceNote: '',
    imageSrc: '/mega-menu/2.jpeg',
    href: '/kontaktai',
  },
  {
    id: 'a5',
    topic: 'estetika',
    format: 'gyvai',
    monthKey: '2026-12',
    categoryLabel: 'Estetinė medicina',
    languageLabel: 'LT',
    dateLabel: 'Gruodžio 03',
    timeLabel: '10:00–15:00',
    formatLabel: 'Gyvai',
    title: 'Fillmed mezoterapijos ir biorevitalizacijos protokolai',
    venue: 'Vilnius, UNICOS Akademija',
    extraInfo: 'Tarptautinis sertifikatas',
    speaker: 'Tarptautinis Fillmed lektorius',
    speakerRole: 'Fillmed treneris',
    statusLine: 'Registracija atvira',
    statusTone: 'green',
    price: '79 €',
    priceNote: 'Be PVM',
    imageSrc: '/mega-menu/1.jpeg',
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

export const AKADEMIJA_STATS = [
  { line: '50+ seminarų', sub: 'Per metus' },
  { line: '500+ dalyvių', sub: 'Kasmet tobulina kvalifikaciją' },
  { line: '12 prekių ženklų', sub: 'Su kuriais organizuojame mokymus' },
  { line: '95% rekomenduotų', sub: 'Dalyvių, kurie rekomenduotų kolegoms' },
] as const;

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
