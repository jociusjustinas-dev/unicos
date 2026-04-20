/** Keturi „Kam skirtas“ stulpeliai (animacijos ref’ams). */
export type AudienceCard = {
  id: string;
  bg: string;
  heading: string;
  body: string;
};

export type AudienceCards4 = readonly [AudienceCard, AudienceCard, AudienceCard, AudienceCard];

export type SolutionGridCard = {
  title: string;
  description: string;
};

export type BrandCarouselCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  logoSvg?: string;
};

export type StarterCalloutConfig = {
  eyebrowLabel: string;
  headingLight: string;
  headingBold: string;
  description: string;
  benefits: readonly string[];
  imageSrc: string;
  imageAlt: string;
};

export type PartnerSpotlightConfig = {
  statBadge: string;
  quote: string;
  authorName: string;
  authorMeta: string;
  portraitSrc: string;
  portraitAlt: string;
  footnote: string;
};

export type SprendimaiSolutionLandingConfig = {
  /** Unikalūs `id` atributams (prieinamumas). */
  htmlIdPrefix: string;
  breadcrumbLabel: string;
  heroImageSrc: string;
  heroImageAlt: string;
  heroH1Light: string;
  heroH1Bold: string;
  heroLead: string;
  audienceConsultTitle: string;
  audienceConsultBody: string;
  audienceCards: AudienceCards4;
  solutionCards: readonly SolutionGridCard[];
  brandCards: readonly BrandCarouselCard[];
  starter: StarterCalloutConfig;
  spotlight: PartnerSpotlightConfig;
};

export const SPRENDIMAI_NAV_SEGMENTS: readonly {
  title: string;
  href: string;
  image: string;
  accent: string;
}[] = [
  {
    title: 'Odos priežiūros specialistams',
    href: '/sprendimai/odos-specialistams',
    image: '/mega-menu/1.jpeg',
    accent: '#64151F',
  },
  {
    title: 'Plaukų priežiūros specialistams',
    href: '/sprendimai/plauku-prieziuros-specialistams',
    image: '/mega-menu/2.jpeg',
    accent: '#3B443A',
  },
  {
    title: 'Estetinės medicinos klinikoms',
    href: '/sprendimai/estetines-medicinos-klinikoms',
    image: '/mega-menu/3.jpeg',
    accent: '#1A1010',
  },
  {
    title: 'Vaistinėms ir farmacijos specialistams',
    href: '/sprendimai/vaistinems-ir-farmacijos-specialistams',
    image: '/mega-menu/4.jpeg',
    accent: '#4A3A1E',
  },
] as const;

const ODOS_BRANDS: readonly BrandCarouselCard[] = [
  {
    id: 'guinot',
    title: 'Guinot',
    description: 'Prancūziška profesionali odos priežiūra namų ir procedūriniam naudojimui.',
    image: '/mega-menu/1.jpeg',
    logoSvg: '/Guinot logo.svg',
  },
  {
    id: 'neostrata',
    title: 'Neostrata',
    description: 'Dermatologinė kosmetika su kliniškai įrodytomis aktyviosiomis medžiagomis.',
    image: '/mega-menu/2.jpeg',
  },
  {
    id: 'mary-cohr',
    title: 'Mary Cohr',
    description: 'Aukščiausios klasės prancūziški sprendimai veidui ir kūnui.',
    image: '/mega-menu/3.jpeg',
    logoSvg: '/Mary Cohr logo.svg',
  },
  {
    id: 'exuviance',
    title: 'Exuviance',
    description: 'Švelni, bet efektyvi priežiūra jautriai ir probleminei odai.',
    image: '/mega-menu/4.jpeg',
  },
  {
    id: 'comfort-zone',
    title: '[ comfort zone ]',
    description: 'Itališka tvarumo filosofija ir procedūrinės linijos salonams.',
    image: '/mega-menu/4.jpeg',
    logoSvg: '/comfort zone.svg',
  },
  {
    id: 'nimue',
    title: 'Nimue',
    description: 'Aktyviosios medžiagos ir technologijos matomam odos atsinaujinimui.',
    image: '/mega-menu/1.jpeg',
  },
  {
    id: 'biologique',
    title: 'Biologique Recherche',
    description: 'Personalizuoti procedūriniai protokolai ir koncentruotos formulės.',
    image: '/mega-menu/2.jpeg',
  },
  {
    id: 'dr-spiller',
    title: 'Dr. Spiller',
    description: 'Vokiška preciziškumas ir švelnios, odą palaikančios tekstūros.',
    image: '/mega-menu/3.jpeg',
  },
];

export const odosSpecialistamsLandingConfig: SprendimaiSolutionLandingConfig = {
  htmlIdPrefix: 'odos-specialistams',
  breadcrumbLabel: 'Odos priežiūros specialistams',
  heroImageSrc: '/odos.jpg',
  heroImageAlt: 'Odos priežiūros procedūra salone',
  heroH1Light: 'Profesionali kosmetika salonams ir ',
  heroH1Bold: 'odos priežiūros specialistams',
  heroLead:
    'Atrinkti prekių ženklai, aiškūs protokolai ir asmeninis palaikymas — kad Jūsų procedūros būtų nepriekaištingos, o klientai grįžtų vėl ir vėl.',
  audienceConsultTitle: 'Reikia konsultacijos?',
  audienceConsultBody: 'Padėsime sudėlioti tinkamiausią startą Jūsų kabinetui.',
  audienceCards: [
    {
      id: 'first',
      bg: '/mega-menu/1.jpeg',
      heading: 'Kosmetologijos kabinetams',
      body: 'Patikimi profesionalūs produktai kasdienėms procedūroms ir namų priežiūros rekomendacijoms.',
    },
    {
      id: 'second',
      bg: '/mega-menu/2.jpeg',
      heading: 'Grožio salonams su odos paslaugomis',
      body: 'Norite papildyti portfelį kokybiška odos priežiūra ir išsiskirti tarp konkurentų.',
    },
    {
      id: 'third',
      bg: '/mega-menu/3.jpeg',
      heading: 'SPA ir viešbučių SPA centrams',
      body: 'Premium prekių ženklai, atitinkantys svečių lūkesčius ir standartus.',
    },
    {
      id: 'fourth',
      bg: '/mega-menu/4.jpeg',
      heading: 'Pradedantiems specialistams',
      body: 'Kuriate kabinetą ir norite tvirto pagrindo nuo pirmos dienos be brangių klaidų.',
    },
  ],
  solutionCards: [
    {
      title: 'Atrinkti prekių ženklai',
      description: 'Guinot, Neostrata, Anna Lotan ir kiti, oficialiai atstovaujami su pilnu palaikymu.',
    },
    {
      title: 'Darbo protokolai',
      description: 'Kiekvienam produktui aiški instrukcija procedūroms ir namų priežiūros rekomendacijoms.',
    },
    {
      title: 'Asmeninis vadybininkas',
      description: 'Vienas kontaktas, pažįstantis Jūsų veiklą ir padedantis priimti sprendimus.',
    },
    {
      title: 'Praktiniai mokymai',
      description: 'Seminarai su tarptautiniais lektoriais ir sertifikatais, stiprinančiais autoritetą.',
    },
    {
      title: 'Startinis paketas',
      description: 'Paruoštas rinkinys pradėti be didelių investicijų su vadybininko rekomendacija.',
    },
    {
      title: 'Skaidri kainodara',
      description: 'Didmeninės kainos nuo pirmos dienos, jokių paslėptų mokesčių.',
    },
  ],
  brandCards: ODOS_BRANDS,
  starter: {
    eyebrowLabel: 'Specialus pasiūlymas',
    headingLight: 'Startinis paketas ',
    headingBold: 'odos specialistams.',
    description: 'Nežinote nuo ko pradėti? Paruošėme rinkinį lengvam startui.',
    benefits: [
      'Populiariausi produktai procedūroms ir namų priežiūrai',
      'Vadybininko rekomendacija pagal veiklos specifiką',
      'Darbo protokolai ir mokymo medžiaga',
      'Galimybė keisti pagal poreikius',
    ],
    imageSrc: '/mega-menu/3.jpeg',
    imageAlt: 'Specialistė konsultuoja klientę dėl odos priežiūros',
  },
  spotlight: {
    statBadge: '+35% pajamų augimas',
    quote:
      '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio. Svarbiausia — oficialus atstovavimas ir struktūruoti protokolai suteikia ramybę kiekvieną dieną.“',
    authorName: 'Dr. Ieva Kazlauskienė',
    authorMeta: 'Dermatovenerologė, Vilnius',
    portraitSrc: '/mega-menu/3.jpeg',
    portraitAlt: 'Dr. Ieva Kazlauskienė',
    footnote: 'Portretinė partnerio ar kliento nuotrauka — citatai patikimumas ir žmogiškumas.',
  },
};

const PLAUKU_BRANDS: readonly BrandCarouselCard[] = [
  {
    id: 'wella',
    title: 'Wella Professionals',
    description: 'Spalva, tekstūra ir priežiūra, kurią renkasi profesionalai visame pasaulyje.',
    image: '/cover/hair_salon_minimal_202604131146.jpeg',
  },
  {
    id: 'goldwell',
    title: 'Goldwell',
    description: 'Sistemingi sprendimai dažymui, formavimui ir ilgalaikiam blizgesiui.',
    image: '/mega-menu/2.jpeg',
  },
  {
    id: 'schwarzkopf',
    title: 'Schwarzkopf Professional',
    description: 'Inovacijos salono procedūroms ir namų priežiūros linijoms.',
    image: '/plaukai.jpg',
  },
  {
    id: 'loreal-pro',
    title: "L'Oréal Professionnel",
    description: 'Plataus profilio linijos kirpėjams ir spalvos specialistams.',
    image: '/mega-menu/1.jpeg',
  },
  {
    id: 'la-biosthetique',
    title: 'La Biosthetique',
    description: 'Švelni formulė ir aukšta kokybė jautriai galvos odai ir plaukams.',
    image: '/mega-menu/4.jpeg',
  },
  {
    id: 'balmain',
    title: 'Balmain Hair',
    description: 'Prabangūs finishing produktai ir stiliaus akcentai.',
    image: '/mega-menu/3.jpeg',
  },
];

export const plaukuPrieziurosSpecialistamsLandingConfig: SprendimaiSolutionLandingConfig = {
  htmlIdPrefix: 'plauku-specialistams',
  breadcrumbLabel: 'Plaukų priežiūros specialistams',
  heroImageSrc: '/plaukai.jpg',
  heroImageAlt: 'Plaukų priežiūra salone',
  heroH1Light: 'Profesionalūs produktai salonams ir ',
  heroH1Bold: 'plaukų priežiūros specialistams',
  heroLead:
    'Spalvos, priežiūros ir stiliaus linijos su aiškiais protokolais ir mokymų palaikymu — kad kiekviena paslauga būtų prognozuojama ir vertinama.',
  audienceConsultTitle: 'Reikia konsultacijos?',
  audienceConsultBody: 'Padėsime parinkti linijas pagal Jūsų salono profilį ir klientūros.',
  audienceCards: [
    {
      id: 'p1',
      bg: '/cover/hair_salon_minimal_202604131146.jpeg',
      heading: 'Kirpykloms ir salonams',
      body: 'Norite atnaujinti asortimentą ir pasiūlyti klientams patikimus profesionalius prekių ženklus.',
    },
    {
      id: 'p2',
      bg: '/mega-menu/2.jpeg',
      heading: 'Spalvos specialistams',
      body: 'Sudėtingesnės formulės, aiškios maišymo gairės ir saugūs rezultatai.',
    },
    {
      id: 'p3',
      bg: '/plaukai.jpg',
      heading: 'Barberiams ir vyriškų stilių studijoms',
      body: 'Produktai tekstūrai, formavimui ir kasdieniam priežiūros ritualui.',
    },
    {
      id: 'p4',
      bg: '/mega-menu/1.jpeg',
      heading: 'Pradedantiems meistrams',
      body: 'Struktūruotas startas: nuo bazinių procedūrų iki rekomendacijų namams.',
    },
  ],
  solutionCards: [
    {
      title: 'Profesionalūs prekių ženklai',
      description: 'Wella, Goldwell, Schwarzkopf Professional ir kitos oficialiai palaikomos linijos.',
    },
    {
      title: 'Protokolai ir technikos',
      description: 'Aiškios procedūros spalvai, atkūrimui ir formavimui — mažiau klaidų salone.',
    },
    {
      title: 'Asmeninis vadybininkas',
      description: 'Vienas kontaktas užsakymams, naujienoms ir sprendimams pagal Jūsų apyvartą.',
    },
    {
      title: 'Mokymai komandai',
      description: 'Praktiniai seminarai ir medžiaga, kad visa komanda dirbtų vienodu standartu.',
    },
    {
      title: 'Startinis paketas',
      description: 'Paruoštas rinkinys salonui ar meistrui pradėti be perteklinės rizikos.',
    },
    {
      title: 'Skaidri kainodara',
      description: 'Didmeninės sąlygos ir prognozuojamos išlaidų eilutės.',
    },
  ],
  brandCards: PLAUKU_BRANDS,
  starter: {
    eyebrowLabel: 'Specialus pasiūlymas',
    headingLight: 'Startinis paketas ',
    headingBold: 'plaukų priežiūros specialistams.',
    description: 'Nežinote nuo ko pradėti? Paruošėme rinkinį lengvam startui.',
    benefits: [
      'Populiariausi produktai procedūroms ir namų priežiūrai',
      'Vadybininko rekomendacija pagal salono profilį',
      'Darbo protokolai ir mokymo medžiaga',
      'Galimybė keisti pagal poreikius',
    ],
    imageSrc: '/mega-menu/2.jpeg',
    imageAlt: 'Meistras dirba su kliento plaukais',
  },
  spotlight: {
    statBadge: '+28% pasikartojančių vizitų',
    quote:
      '„Kai visi naudoja tuos pačius protokolus, spalvos rezultatas tampa nuspėjamas, o klientai rekomenduoja mus dažniau. UNICOS komanda tikrai supranta salono dinamiką.“',
    authorName: 'Rūta Petraitienė',
    authorMeta: 'Salono vadovė, Kaunas',
    portraitSrc: '/mega-menu/2.jpeg',
    portraitAlt: 'Rūta Petraitienė',
    footnote: 'Portretinė partnerio ar kliento nuotrauka — citatai patikimumas ir žmogiškumas.',
  },
};

const ESTETINE_BRANDS: readonly BrandCarouselCard[] = [
  {
    id: 'environ',
    title: 'Environ',
    description: 'Vitaminų A ir antioksidantų filosofija procedūroms ir namų priežiūrai.',
    image: '/estetines.jpg',
  },
  {
    id: 'medik8',
    title: 'Medik8',
    description: 'Mokslu grįsta kosmetika su matomais odos pokyčiais.',
    image: '/mega-menu/1.jpeg',
  },
  {
    id: 'neostrata-est',
    title: 'Neostrata',
    description: 'Aktyviosios medžiagos ir švelnūs protokolai po procedūrų.',
    image: '/mega-menu/2.jpeg',
  },
  {
    id: 'exuviance-est',
    title: 'Exuviance',
    description: 'PHAs ir AHAs subalansuotoms procedūroms klinikoje.',
    image: '/mega-menu/3.jpeg',
  },
  {
    id: 'biologique-est',
    title: 'Biologique Recherche',
    description: 'Personalizuoti odos priežiūros protokolai aukštiems standartams.',
    image: '/mega-menu/4.jpeg',
  },
  {
    id: 'guinot-est',
    title: 'Guinot',
    description: 'Klasikinės procedūros ir namų linijos klientų lojalumui.',
    image: '/mega-menu/1.jpeg',
    logoSvg: '/Guinot logo.svg',
  },
];

export const estetinesMedicinosKlinikomsLandingConfig: SprendimaiSolutionLandingConfig = {
  htmlIdPrefix: 'estetines-klinikos',
  breadcrumbLabel: 'Estetinės medicinos klinikoms',
  heroImageSrc: '/estetines.jpg',
  heroImageAlt: 'Estetinės medicinos konsultacija',
  heroH1Light: 'Partnerystė ',
  heroH1Bold: 'estetinės medicinos klinikoms',
  heroLead:
    'Produktai ir protokolai, atitinkantys aukštus klinikos standartus: nuo paruošiamųjų etapų iki namų priežiūros po procedūrų.',
  audienceConsultTitle: 'Reikia konsultacijos?',
  audienceConsultBody: 'Padėsime suderinti asortimentą su Jūsų paslaugų spektru ir komandos patirtimi.',
  audienceCards: [
    {
      id: 'e1',
      bg: '/estetines.jpg',
      heading: 'Estetinės medicinos klinikoms',
      body: 'Ieškote patikimų linijų, derančių su injekcinėmis ir aparatinėmis procedūromis.',
    },
    {
      id: 'e2',
      bg: '/mega-menu/3.jpeg',
      heading: 'Odą atkuriančioms procedūroms',
      body: 'Produktai, skirti raminimui, barjerui ir ilgalaikiam rezultatui po intervencijų.',
    },
    {
      id: 'e3',
      bg: '/Female_aesthetician_consulting_202604110817.jpeg',
      heading: 'Konsultacijų kabinetams',
      body: 'Aiškios rekomendacijos ir medžiaga, padedanti klientui laikytis plano namuose.',
    },
    {
      id: 'e4',
      bg: '/mega-menu/1.jpeg',
      heading: 'Naujoms klinikų grandinėms',
      body: 'Vieningas tiekimas, mokymai ir standartai visoms Jūsų vietoms.',
    },
  ],
  solutionCards: [
    {
      title: 'Klinikai atrinkti prekių ženklai',
      description: 'Oficialūs tiekėjai ir dokumentacija, atitinkanti profesionalią veiklą.',
    },
    {
      title: 'Protokolai po procedūrų',
      description: 'Žingsniai ir produktai, mažinantys riziką ir palaikantys rezultatą.',
    },
    {
      title: 'Dedikuotas vadybininkas',
      description: 'Vienas kontaktas užsakymams, naujovėms ir komandos klausimams.',
    },
    {
      title: 'Mokymai personalui',
      description: 'Programos gydytojams, slaugytojoms ir estetikos specialistams.',
    },
    {
      title: 'Startinis paketas',
      description: 'Paruoštas rinkinys naujai paslaugų grupei ar filialui paleisti.',
    },
    {
      title: 'Skaidri partnerystė',
      description: 'Aiškios sąlygos, logistika ir prognozuojamas tiekimas.',
    },
  ],
  brandCards: ESTETINE_BRANDS,
  starter: {
    eyebrowLabel: 'Specialus pasiūlymas',
    headingLight: 'Startinis paketas ',
    headingBold: 'estetinės medicinos klinikai.',
    description: 'Nežinote nuo ko pradėti? Paruošėme rinkinį lengvam startui.',
    benefits: [
      'Produktai procedūroms ir namų priežiūrai po vizito',
      'Vadybininko rekomendacija pagal klinikos profilį',
      'Protokolai ir mokymo medžiaga komandai',
      'Galimybė keisti pagal poreikius',
    ],
    imageSrc: '/Female_aesthetician_consulting_202604110817.jpeg',
    imageAlt: 'Gydytoja konsultuoja pacientę estetinėje klinikoje',
  },
  spotlight: {
    statBadge: '+41% pakartotinių procedūrų',
    quote:
      '„Mums svarbu, kad produktai po procedūrų būtų ne tik efektyvūs, bet ir saugūs derinant su mūsų protokolais. UNICOS komanda padeda išlaikyti vienodą kokybę visuose kabinetuose.“',
    authorName: 'Gintarė Vaitkutė',
    authorMeta: 'Klinikos vadovė, Vilnius',
    portraitSrc: '/estetines.jpg',
    portraitAlt: 'Gintarė Vaitkutė',
    footnote: 'Portretinė partnerio ar kliento nuotrauka — citatai patikimumas ir žmogiškumas.',
  },
};

const VAISTINE_BRANDS: readonly BrandCarouselCard[] = [
  {
    id: 'v-neostrata',
    title: 'Neostrata',
    description: 'Dermatologinė linija konsultacijoms ir savitarnos lentynoms.',
    image: '/farmacija.jpg',
  },
  {
    id: 'v-exuviance',
    title: 'Exuviance',
    description: 'Švelnūs sprendimai jautriai odai su aiškia komunikacija klientui.',
    image: '/mega-menu/2.jpeg',
  },
  {
    id: 'v-comfort',
    title: '[ comfort zone ]',
    description: 'Tvari filosofija ir saloninės linijos, pritaikomos vaistinės aplinkai.',
    image: '/mega-menu/3.jpeg',
    logoSvg: '/comfort zone.svg',
  },
  {
    id: 'v-guinot',
    title: 'Guinot',
    description: 'Profesionali odos priežiūra ir namų ritualai iš vieno šaltinio.',
    image: '/mega-menu/1.jpeg',
    logoSvg: '/Guinot logo.svg',
  },
  {
    id: 'v-mary',
    title: 'Mary Cohr',
    description: 'Prabangūs rinkiniai dovanoms ir sezoninėms kampanijoms.',
    image: '/mega-menu/4.jpeg',
    logoSvg: '/Mary Cohr logo.svg',
  },
  {
    id: 'v-environ',
    title: 'Environ',
    description: 'Žingsninė vitaminų A sistema ilgalaikei kliento kelionei.',
    image: '/cover/farmacy_minimal_202604131347.jpeg',
  },
];

export const vaistinemsIrFarmacijosSpecialistamsLandingConfig: SprendimaiSolutionLandingConfig = {
  htmlIdPrefix: 'vaistines-farmacija',
  breadcrumbLabel: 'Vaistinėms ir farmacijos specialistams',
  heroImageSrc: '/farmacija.jpg',
  heroImageAlt: 'Vaistinės konsultacija dėl odos priežiūros',
  heroH1Light: 'Profesionalūs sprendimai ',
  heroH1Bold: 'vaistinėms ir farmacijos specialistams',
  heroLead:
    'Dermokosmetika, mokymai ir palaikymas konsultantams — kad kiekviena rekomendacija būtų pagrįsta ir lengvai paaiškinama klientui.',
  audienceConsultTitle: 'Reikia konsultacijos?',
  audienceConsultBody: 'Padėsime parinkti asortimentą pagal Jūsų parduotuvės formatą ir srautus.',
  audienceCards: [
    {
      id: 'f1',
      bg: '/farmacija.jpg',
      heading: 'Nepriklausomoms vaistinėms',
      body: 'Norite išplėsti dermokosmetikos lentyną su patikimais prekių ženklais.',
    },
    {
      id: 'f2',
      bg: '/cover/farmacy_minimal_202604131347.jpeg',
      heading: 'Tinklų vaistinėms',
      body: 'Vieningas asortimentas, mokymų programa ir prognozuojamas tiekimas.',
    },
    {
      id: 'f3',
      bg: '/mega-menu/4.jpeg',
      heading: 'Farmacijos specialistams',
      body: 'Aiški produktų informacija ir įrankiai kasdienėms konsultacijoms.',
    },
    {
      id: 'f4',
      bg: '/mega-menu/1.jpeg',
      heading: 'Naujiems konsultantams',
      body: 'Medžiaga ir palaikymas, padedantys drąsiai rekomenduoti nuo pirmų dienų.',
    },
  ],
  solutionCards: [
    {
      title: 'Atrinktos dermokosmetikos linijos',
      description: 'Prekių ženklai, tinkami vaistinės aplinkai ir konsultaciniam pardavimui.',
    },
    {
      title: 'Konsultacijų įrankiai',
      description: 'Santraukos, palyginimai ir gairės, kad pokalbis su klientu būtų aiškus.',
    },
    {
      title: 'Asmeninis vadybininkas',
      description: 'Vienas kontaktas užsakymams, akcijoms ir naujienų komunikacijai.',
    },
    {
      title: 'Mokymai komandai',
      description: 'Sesijos produktų žinioms ir klientų scenarijams spręsti.',
    },
    {
      title: 'Startinis paketas',
      description: 'Paruoštas rinkinys lentynos atnaujinimui ar naujos zonos paleidimui.',
    },
    {
      title: 'Skaidri kainodara',
      description: 'Aiškios didmeninės sąlygos ir logistikos parametrai.',
    },
  ],
  brandCards: VAISTINE_BRANDS,
  starter: {
    eyebrowLabel: 'Specialus pasiūlymas',
    headingLight: 'Startinis paketas ',
    headingBold: 'vaistinėms ir farmacijos specialistams.',
    description: 'Nežinote nuo ko pradėti? Paruošėme rinkinį lengvam startui.',
    benefits: [
      'Populiariausi produktai konsultacijoms ir savitarnai',
      'Vadybininko rekomendacija pagal parduotuvės profilį',
      'Mokymo medžiaga ir pardavimų įrankiai',
      'Galimybė keisti pagal poreikius',
    ],
    imageSrc: '/cover/farmacy_minimal_202604131347.jpeg',
    imageAlt: 'Farmacijos specialistė konsultuoja pirkėją',
  },
  spotlight: {
    statBadge: '+19% dermokosmetikos kategorija',
    quote:
      '„Kai konsultantai gauna struktūruotą medžiagą, klientai dažniau grįžta už papildomų produktų. UNICOS padeda išlaikyti lentynos istoriją nuosekliai visose vietose.“',
    authorName: 'Mindaugas Jonaitis',
    authorMeta: 'Vaistinių tinklo asortimento vadovas',
    portraitSrc: '/farmacija.jpg',
    portraitAlt: 'Mindaugas Jonaitis',
    footnote: 'Portretinė partnerio ar kliento nuotrauka — citatai patikimumas ir žmogiškumas.',
  },
};
