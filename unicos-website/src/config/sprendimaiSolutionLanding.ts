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
  starterPrice: string;
};

export type ChallengeItem = {
  label: string;
  paragraph: string;
};

export type Challenges3 = readonly [ChallengeItem, ChallengeItem, ChallengeItem];

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
  /** Jei `heroH1Bold` tuščia — rodomas tik `heroH1Light` (pvz. viena antraštės eilutė). */
  heroH1Light: string;
  heroH1Bold: string;
  heroLead: string;
  heroPrice: string;
  heroCta2Microcopy: string;
  /** Tailwind klasė hero `h1` plotui (pvz. ilgesnei antraštei). */
  heroH1MaxWidthClass?: string;
  audienceConsultTitle: string;
  audienceConsultBody: string;
  audienceCards: AudienceCards4;
  challenges: Challenges3;
  solutionCards: readonly SolutionGridCard[];
  responsibleSubheading: string;
  brandCards: readonly BrandCarouselCard[];
  brandsHeadingLight: string;
  brandsHeadingBold: string;
  brandsSubheading: string;
  /** Numatyta: „Visi prekių ženklai“. */
  brandsCtaLabel?: string;
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
    title: 'Estetinės dermatologijos specialistams',
    href: '/sprendimai/estetines-medicinos-klinikoms',
    image: '/mega-menu/3.jpeg',
    accent: '#64151F',
  },
  {
    title: 'Dermakosmetikos konsultantams ir farmacininkams',
    href: '/sprendimai/vaistinems-ir-farmacijos-specialistams',
    image: '/mega-menu/4.jpeg',
    accent: '#3B443A',
  },
];

const ODOS_DEFAULT_CHALLENGES: Challenges3 = [
  {
    label: 'Per daug pasirinkimų, per mažai aiškumo',
    paragraph:
      'Šimtai ženklų, niekur neparašyta, kas veikia profesionalioje procedūroje, gaištate bandydami ir klysdami.',
  },
  {
    label: 'Produktas be palaikymo',
    paragraph:
      'Nusipirkote, bet negavote nei protokolo, nei mokymo, dirbate intuicija ir rizikuojate reputacija.',
  },
  {
    label: 'Tiekėjas, o ne partneris',
    paragraph:
      'Reikia ne tik dėžučių, bet ir atsakymo, žmogaus, kuris supranta kasdienybę ir padeda augti.',
  },
];

const UNICOS_KAZLAUSKIENE_QUOTE =
  '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio. Svarbiausia — oficialus atstovavimas ir struktūruoti protokolai suteikia ramybę kiekvieną dieną.“';

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
    image: '/Female_hands_applying_202604110815.jpeg',
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
  heroPrice: '950 €',
  heroCta2Microcopy: 'Padėsime sudėlioti asortimentą.',
  audienceConsultTitle: 'Reikia konsultacijos?',
  audienceConsultBody: 'Padėsime sudėlioti tinkamiausią startą Jūsų kabinetui.',
  challenges: ODOS_DEFAULT_CHALLENGES,
  responsibleSubheading: 'Gausite ne tik produktus, bet ir aplinką profesionaliam augimui.',
  brandsHeadingLight: 'Prekių ženklai, atrinkti ',
  brandsHeadingBold: 'Jūsų sričiai.',
  brandsSubheading: 'Oficialiai atstovaujami, su mokymų programa ir logistikos palaikymu.',
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
    starterPrice: '950 €',
  },
  spotlight: {
    statBadge: '+35% pajamų augimas',
    quote: UNICOS_KAZLAUSKIENE_QUOTE,
    authorName: 'Dr. Ieva Kazlauskienė',
    authorMeta: 'Dermatovenerologė, Vilnius',
    portraitSrc: '/Female_hands_applying_202604110815.jpeg',
    portraitAlt: 'Dr. Ieva Kazlauskienė',
    footnote: 'Portretinė partnerio ar kliento nuotrauka — citatai patikimumas ir žmogiškumas.',
  },
};

/** Plaukų puslapyje — daugiau kortelių, kad karuselė aiškiai overflow'intų. */
const PLAUKU_BRANDS: readonly BrandCarouselCard[] = ODOS_BRANDS.slice(0, 6);

const PLAUKU_CHALLENGES: Challenges3 = [
  {
    label: 'Klientai perka kitur',
    paragraph:
      'Rekomenduojate, bet klientas nusiperka internete ar prekybos centre. Prarandate pajamas ir pasitikėjimą.',
  },
  {
    label: 'Produktai nesukuria vertės',
    paragraph:
      'Priemonės niekuo neišsiskiria, klientai nemato skirtumo tarp Jūsų ir konkurentų.',
  },
  {
    label: 'Trūksta pardavimo įrankių',
    paragraph:
      'Žinote, kad galėtumėte parduoti daugiau, bet nėra nei gairių, nei mokymų, nei tiekėjo palaikymo.',
  },
];

export const plaukuPrieziurosSpecialistamsLandingConfig: SprendimaiSolutionLandingConfig = {
  htmlIdPrefix: 'plauku-specialistams',
  breadcrumbLabel: 'Plaukų priežiūros specialistams',
  heroImageSrc: '/plaukai.jpg',
  heroImageAlt: 'Plaukų priežiūra salone',
  heroH1Light: 'Profesionali plaukų priežiūros kosmetika ',
  heroH1Bold: 'salonams',
  heroH1MaxWidthClass: 'max-w-[min(100%,52rem)]',
  heroLead:
    'Aukštos kokybės prekių ženklai, praktinės žinios ir asmeninis palaikymas — kad Jūsų klientai grįžtų ir rekomenduotų kitiems.',
  heroPrice: '950 €',
  heroCta2Microcopy: 'Padėsime sudėlioti asortimentą.',
  audienceConsultTitle: 'Reikia konsultacijos?',
  audienceConsultBody: 'Padėsime sudėlioti tinkamiausią startą Jūsų kabinetui.',
  challenges: PLAUKU_CHALLENGES,
  responsibleSubheading: 'Gausite ne tik produktus, bet ir aplinką profesionaliam augimui.',
  brandsHeadingLight: 'Prekių ženklai, atrinkti ',
  brandsHeadingBold: 'Jūsų sričiai.',
  brandsSubheading: 'Oficialiai atstovaujami, su mokymų programa ir logistikos palaikymu.',
  audienceCards: [
    {
      id: 'p1',
      bg: '/cover/hair_salon_minimal_202604131146.jpeg',
      heading: 'Grožio salonams',
      body: 'Profesionalių plaukų produktų, stiprinančių paslaugų kokybę ir lojalumą.',
    },
    {
      id: 'p2',
      bg: '/mega-menu/2.jpeg',
      heading: 'Kirpykloms',
      body: 'Norite pasiūlyti daugiau nei kirpimą — produktus, kuriais klientai pasitikėtų.',
    },
    {
      id: 'p3',
      bg: '/cover/Professional_beauty_salon_202604131349.jpeg',
      heading: 'Salonams su keliomis kėdėmis',
      body: 'Auginate komandą, reikia patikimo tiekėjo kokybei standartizuoti.',
    },
    {
      id: 'p4',
      bg: '/mega-menu/1.jpeg',
      heading: 'Pradedantiems meistrams',
      body: 'Kuriate klientų bazę su ženklais, keliančiais profesinį įvaizdį.',
    },
  ],
  solutionCards: [
    {
      title: 'Profesionalūs prekių ženklai',
      description:
        'Atrinkti ženklai, kurių negalima nusipirkti prekybos centre — Jūsų salonas tampa išskirtine vieta.',
    },
    {
      title: 'Pardavimų gairės',
      description:
        'Kiekvienam produktui aiškios rekomendacijos: ką siūlyti, kaip pristatyti, kokius rezultatus akcentuoti.',
    },
    {
      title: 'Komandos mokymai',
      description: 'Praktiniai seminarai nuo produktų pažinimo iki pardavimo technikos prie kėdės.',
    },
    {
      title: 'Asmeninis vadybininkas',
      description: 'Padės sudėlioti asortimentą, suplanuoti akcijas ir spręsti kasdienius klausimus.',
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
  brandCards: PLAUKU_BRANDS,
  starter: {
    eyebrowLabel: 'Specialus pasiūlymas',
    headingLight: 'Startinis paketas ',
    headingBold: 'plaukų specialistams.',
    description: 'Nežinote nuo ko pradėti? Paruošėme rinkinį lengvam startui.',
    benefits: [
      'Populiariausi šampūnai, kaukės ir priežiūros priemonės',
      'Pardavimų gairės komandai',
      'Vadybininko rekomendacija pagal salono dydį',
      'Galimybė keisti pagal poreikius',
    ],
    imageSrc: '/mega-menu/2.jpeg',
    imageAlt: 'Meistras dirba su kliento plaukais',
    starterPrice: '950 €',
  },
  spotlight: {
    statBadge: '+35% pajamų augimas',
    quote: UNICOS_KAZLAUSKIENE_QUOTE,
    authorName: 'Dr. Ieva Kazlauskienė',
    authorMeta: 'Dermatovenerologė, Vilnius',
    portraitSrc: '/mega-menu/3.jpeg',
    portraitAlt: 'Dr. Ieva Kazlauskienė',
    footnote: 'Portretinė partnerio ar kliento nuotrauka — citatai patikimumas ir žmogiškumas.',
  },
};

const ESTETINE_CHALLENGES: Challenges3 = [
  {
    label: 'Reputacijos rizika',
    paragraph:
      'Estetinėje dermatologijoje kiekviena priemonė turi būti patikima. Vienas blogas produktas gali pakenkti ne tik pacientui, bet ir Jūsų profesinei reputacijai.',
  },
  {
    label: 'Oficialaus atstovavimo trūkumas',
    paragraph:
      'Naudojate produktus, bet neturite oficialaus tiekėjo statuso. Negalite gauti nei mokymų, nei sertifikatų, nei pilno palaikymo.',
  },
  {
    label: 'Fragmentuotas tiekimas',
    paragraph:
      'Užsakinėjate iš kelių tiekėjų, derinant pristatymus ir sąskaitas. Gaištate laiką administravimui vietoj darbo su pacientais.',
  },
];

const ESTETINE_BRANDS: readonly BrandCarouselCard[] = [
  {
    id: 'fillmed',
    title: 'Fillmed',
    description: 'Filorga profesionali linija estetinės medicinos procedūroms. Mezoterapija, biorevitalizacija, pildymas.',
    image: '/mega-menu/4.jpeg',
  },
  {
    id: 'neostrata-est',
    title: 'Neostrata',
    description: 'Dermatologinė kosmetika, paremta glikolio ir polihidroksi rūgščių mokslu. Pilingai ir atjauninimas.',
    image: '/mega-menu/2.jpeg',
  },
  {
    id: 'caregen',
    title: 'Caregen',
    description: 'Pažangūs peptidų sprendimai odos atjauninimui ir plaukų atkūrimui.',
    image: '/mega-menu/3.jpeg',
  },
  {
    id: 'anna-lotan',
    title: 'Anna Lotan',
    description: 'Profesionali kosmetika su natūralių ingredientų pagrindu — procedūroms ir namų priežiūrai.',
    image: '/mega-menu/1.jpeg',
  },
  {
    id: 'nimue-est',
    title: 'Nimue',
    description: 'Aktyvios formulės odos atsinaujinimui, tinkamos klinikinėms estetinėms programoms.',
    image: '/Female_hands_applying_202604110815.jpeg',
  },
  {
    id: 'dr-spiller-est',
    title: 'Dr. Spiller',
    description: 'Patikima vokiška dermokosmetika jautrios odos priežiūrai po procedūrų.',
    image: '/cover/Professional_beauty_salon_202604131349.jpeg',
  },
];

export const estetinesMedicinosKlinikomsLandingConfig: SprendimaiSolutionLandingConfig = {
  htmlIdPrefix: 'estetines-klinikos',
  breadcrumbLabel: 'Estetinės dermatologijos specialistams',
  heroImageSrc: '/estetines.jpg',
  heroImageAlt: 'Estetinės dermatologijos konsultacija',
  heroH1Light: 'Profesionali kosmetika ir sprendimai ',
  heroH1Bold: 'estetinės medicinos klinikoms',
  heroH1MaxWidthClass: 'max-w-[min(100%,52rem)]',
  heroLead:
    'Tarptautiniu mastu pripažinti prekių ženklai, struktūruoti protokolai ir atsakinga partnerystė — kad Jūsų pacientai gautų geriausią rezultatą, o Jūs — ramybę.',
  heroPrice: '950 €',
  heroCta2Microcopy: 'Aptarsime Jūsų klinikos poreikius.',
  audienceConsultTitle: 'Reikia konsultacijos?',
  audienceConsultBody: 'Padėsime sudėlioti tinkamiausią startą Jūsų kabinetui.',
  challenges: ESTETINE_CHALLENGES,
  responsibleSubheading: 'Gausite ne tik produktus, bet ir struktūrą, kuria galite pasitikėti.',
  brandsHeadingLight: 'Prekių ženklai.',
  brandsHeadingBold: '',
  brandsSubheading: 'Kiekvienas ženklas — oficialiai atstovaujamas, su klinikine dokumentacija ir mokymų programa.',
  audienceCards: [
    {
      id: 'e1',
      bg: '/mega-menu/2.jpeg',
      heading: 'Estetinės dermatologijos klinikoms',
      body: 'Atliekate injekcines, lazerines ar aparatines procedūras ir ieškote patikimų profesionalių priemonių pre- ir postprocedūrinei priežiūrai.',
    },
    {
      id: 'e2',
      bg: '/mega-menu/3.jpeg',
      heading: 'Dermatovenerologų kabinetams',
      body: 'Jūsų pacientams reikia dermatologiškai patvirtintų produktų, kuriuos galite rekomenduoti su pasitikėjimu.',
    },
    {
      id: 'e3',
      bg: '/Female_hands_applying_202604110815.jpeg',
      heading: 'Estetinės medicinos centrams',
      body: 'Valdote komandą specialistų ir reikia standartizuoto asortimento su aiškiais protokolais visiems.',
    },
    {
      id: 'e4',
      bg: '/mega-menu/1.jpeg',
      heading: 'Gydytojams, plečiantiems paslaugų portfelį',
      body: 'Norite papildyti savo kliniką kosmetologinėmis procedūromis ir ieškote patikimo partnerio nuo pirmo žingsnio.',
    },
  ],
  solutionCards: [
    {
      title: 'Oficialiai atstovaujami ženklai',
      description: 'Fillmed, Neostrata, Caregen ir kiti — kiekvienas su oficialiu atstovavimo statusu, garantijomis ir pilna dokumentacija.',
    },
    {
      title: 'Struktūruoti protokolai',
      description:
        'Kiekvienam produktui ir procedūrai paruošti detalūs darbo protokolai, paremti klinikiniais tyrimais ir gamintojo rekomendacijomis.',
    },
    {
      title: 'Tarptautiniai mokymai ir sertifikatai',
      description:
        'Reguliarūs seminarai su tarptautiniais lektoriais. Sertifikatai, kurie patvirtina Jūsų kompetenciją pacientų ir kolegų akyse.',
    },
    {
      title: 'Asmeninis vadybininkas',
      description:
        'Dedikuotas kontaktinis asmuo, kuris supranta estetinės dermatologijos specifiką ir padeda priimti greitus sprendimus.',
    },
    {
      title: 'Vienas tiekėjas — visa sistema',
      description: 'Produktai, mokymai, logistika ir palaikymas iš vienos vietos. Jokio chaoso su keliais tiekėjais.',
    },
    {
      title: 'Skaidri partnerio kainodara',
      description: 'Didmeninės kainos nuo pirmos dienos. Aiškios sąlygos be staigmenų ir paslėptų mokesčių.',
    },
  ],
  brandCards: ESTETINE_BRANDS,
  brandsCtaLabel: 'Visi prekių ženklai',
  starter: {
    eyebrowLabel: 'Specialus pasiūlymas',
    headingLight: 'Startinis paketas ',
    headingBold: 'estetinės dermatologijos klinikoms.',
    description: 'Paruošėme rinkinį, kad galėtumėte pradėti dirbti su patikimais produktais greitai ir be komplikacijų.',
    benefits: [
      'Pre- ir postprocedūrinės priežiūros produktai',
      'Detalūs darbo protokolai kiekvienam produktui',
      'Vadybininko konsultacija pagal Jūsų klinikos profilį',
      'Galimybė keisti rinkinį pagal procedūrų specifiką',
    ],
    imageSrc: '/Female_aesthetician_consulting_202604110817.jpeg',
    imageAlt: 'Gydytoja konsultuoja pacientę estetinėje klinikoje',
    starterPrice: '950 €',
  },
  spotlight: {
    statBadge: '+35% pajamų augimas',
    quote: UNICOS_KAZLAUSKIENE_QUOTE,
    authorName: 'Dr. Ieva Kazlauskienė',
    authorMeta: 'Dermatovenerologė, Vilnius',
    portraitSrc: '/cover/Professional_beauty_salon_202604131349.jpeg',
    portraitAlt: 'Dr. Ieva Kazlauskienė',
    footnote: 'Portretinė partnerio ar kliento nuotrauka — citatai patikimumas ir žmogiškumas.',
  },
};

const VAISTINE_BRANDS: readonly BrandCarouselCard[] = ODOS_BRANDS.slice(0, 6);

const VAISTINE_CHALLENGES: Challenges3 = [
  {
    label: 'Nežinote, kuo pasitikėti',
    paragraph:
      'Rinkoje šimtai prekių ženklų, bet niekur neparašyta, kurie tikrai veikia ir tinka profesionaliam rekomendavimui.',
  },
  {
    label: 'Trūksta profesinio palaikymo',
    paragraph:
      'Parduodate produktus, bet neturite nei mokymų, nei protokolų, nei žmogaus, kurio galėtumėte paklausti.',
  },
  {
    label: 'Sunku pradėti be didelių investicijų',
    paragraph:
      'Daugelis tiekėjų reikalauja didelių minimumų. Norite pradėti mažais žingsniais ir augti palaipsniui.',
  },
];

export const vaistinemsIrFarmacijosSpecialistamsLandingConfig: SprendimaiSolutionLandingConfig = {
  htmlIdPrefix: 'vaistines-farmacija',
  breadcrumbLabel: 'Dermakosmetikos konsultantams ir farmacininkams',
  heroImageSrc: '/farmacija.jpg',
  heroImageAlt: 'Vaistinės konsultacija dėl odos priežiūros',
  heroH1Light: 'Dermakosmetikos sprendimai ',
  heroH1Bold: 'vaistinėms ir farmacijos specialistams',
  heroH1MaxWidthClass: 'max-w-[min(100%,52rem)]',
  heroLead:
    'Mokymai, bendruomenė ir lankstūs sprendimai — viskas, ko reikia, kad Jūsų karjera ir pajamos augtų nuosekliai.',
  heroPrice: '150 €',
  heroCta2Microcopy: 'Padėsime rasti tinkamiausią kelią.',
  audienceConsultTitle: 'Reikia konsultacijos?',
  audienceConsultBody: 'Padėsime sudėlioti tinkamiausią startą Jūsų kabinetui.',
  challenges: VAISTINE_CHALLENGES,
  responsibleSubheading: 'Gausite ne tik produktus, bet ir aplinką profesionaliam augimui.',
  brandsHeadingLight: 'Prekių ženklai, atrinkti ',
  brandsHeadingBold: 'Jūsų sričiai.',
  brandsSubheading: 'Atpažįstami, patikimi ženklai, kuriuos galėsite drąsiai rekomenduoti.',
  audienceCards: [
    {
      id: 'f1',
      bg: '/mega-menu/2.jpeg',
      heading: 'Dermakosmetikos konsultantams',
      body: 'Rekomenduojate produktus klientams ir norite dirbti su patikimais, profesionaliais prekių ženklais.',
    },
    {
      id: 'f2',
      bg: '/cover/farmacy_minimal_202604131347.jpeg',
      heading: 'Farmacininkams ir vaistinėms',
      body: 'Ieškote dermokosmetikos asortimento su aiškiomis rekomendacijomis ir profesiniu palaikymu.',
    },
    {
      id: 'f3',
      bg: '/mega-menu/4.jpeg',
      heading: 'Savarankiškai dirbantiems specialistams',
      body: 'Kuriate asmeninį prekių ženklą ir norite tvirtų pagrindų be didelių investicijų.',
    },
    {
      id: 'f4',
      bg: '/mega-menu/1.jpeg',
      heading: 'Pradedantiesiems',
      body: 'Dar tik žengiate pirmus žingsnius dermakosmetikoje ir norite mokytis iš profesionalų.',
    },
  ],
  solutionCards: [
    {
      title: 'Lankstus užsakymų valdymas',
      description: 'Pradėkite nuo 150 € ir užsakinėkite tada, kai reikia, be priverstinių minimumų.',
    },
    {
      title: 'Profesinė bendruomenė',
      description: 'Tapkite bendruomenės dalimi, kurioje specialistai dalijasi patirtimi ir auga kartu.',
    },
    {
      title: 'Nuolatinis kvalifikacijos kėlimas',
      description: 'Reguliarūs seminarai, produktų pristatymai ir praktinės dirbtuvės Jūsų tobulėjimui.',
    },
    {
      title: 'Asmeninis vadybininkas',
      description: 'Kontaktinis asmuo, kuris padės pasirinkti asortimentą ir atsakys į kasdienius klausimus.',
    },
    {
      title: 'Rekomendavimo gairės',
      description: 'Kiekvienam produktui aiškios instrukcijos, ką ir kaip rekomenduoti skirtingiems odos tipams.',
    },
    {
      title: 'Startinis rinkinys',
      description: 'Paruoštas paketas susipažinimui su populiariausiais produktais ir vadybininko rekomendacija.',
    },
  ],
  brandCards: VAISTINE_BRANDS,
  starter: {
    eyebrowLabel: 'Specialus pasiūlymas',
    headingLight: 'Startinis paketas ',
    headingBold: 'konsultantams ir farmacininkams.',
    description: 'Pradėkite be rizikos — paruošėme rinkinį, kad pirmieji žingsniai būtų lengvi ir pelningi.',
    benefits: [
      'Populiariausi produktai namų priežiūrai',
      'Rekomendavimo gairės kiekvienam produktui',
      'Vadybininko konsultacija pagal Jūsų klientų profilį',
      'Galimybė keisti ir plėsti asortimentą augant',
    ],
    imageSrc: '/mega-menu/3.jpeg',
    imageAlt: 'Farmacijos specialistė konsultuoja pirkėją',
    starterPrice: '150 €',
  },
  spotlight: {
    statBadge: '+35% pajamų augimas',
    quote: UNICOS_KAZLAUSKIENE_QUOTE,
    authorName: 'Dr. Ieva Kazlauskienė',
    authorMeta: 'Dermatovenerologė, Vilnius',
    portraitSrc: '/Female_hands_applying_202604110815.jpeg',
    portraitAlt: 'Dr. Ieva Kazlauskienė',
    footnote: 'Portretinė partnerio ar kliento nuotrauka — citatai patikimumas ir žmogiškumas.',
  },
};
