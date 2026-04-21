import type { AudienceCards4, Challenges3 } from '@/config/sprendimaiSolutionLanding';

export type PrekiuZenklaiBrandTextCard = {
  title: string;
  description: string;
};

export type PrekiuZenklaiBrandStatItem = {
  value: string;
  label: string;
  description: string;
};

export type PrekiuZenklaiBrandLandingConfig = {
  slug: string;
  breadcrumbLabel: string;
  hero: {
    htmlIdPrefix: string;
    h1Light: string;
    h1Bold: string;
    lead: string;
    heroImageSrc: string;
    heroImageAlt: string;
    ctaPrimary: { href: string; label: string; microcopy: string };
    ctaSecondary: { href: string; label: string; microcopy: string };
  };
  why: {
    headingLight: string;
    headingBold: string;
    cards: readonly PrekiuZenklaiBrandTextCard[];
  };
  productLines: {
    headingLight: string;
    headingBold: string;
    subheading: string;
    audienceCards: AudienceCards4;
  };
  fitFor: {
    headingLight: string;
    headingBold: string;
    situationItems: Challenges3;
  };
  partner: {
    headingLight: string;
    headingBold: string;
    subheading: string;
    cards: readonly PrekiuZenklaiBrandTextCard[];
  };
  stats: {
    items: readonly [PrekiuZenklaiBrandStatItem, PrekiuZenklaiBrandStatItem, PrekiuZenklaiBrandStatItem];
  };
  quality: {
    headingLight: string;
    headingBold: string;
    subheading: string;
    splitEyebrow: string;
    splitImageSrc: string;
    splitImageAlt: string;
    splitPrimaryCta: { href: string; label: string };
    cards: readonly PrekiuZenklaiBrandTextCard[];
    extraTitle: string;
    extraBullets: readonly string[];
    certificationTitle: string;
    certificationBody: string;
    certificationCta: { href: string; label: string };
  };
  spotlight: {
    statBadge: string;
    quote: string;
    authorName: string;
    authorMeta: string;
    portraitSrc: string;
    portraitAlt: string;
  };
  trainings: {
    headingLight: string;
    headingBold: string;
    body: string;
    ctaHref: string;
    ctaLabel: string;
  };
};

export const guinotBrandLandingConfig: PrekiuZenklaiBrandLandingConfig = {
  slug: 'guinot',
  breadcrumbLabel: 'Guinot',
  hero: {
    htmlIdPrefix: 'prekiu-zenklai-guinot',
    h1Light: 'Guinot — ',
    h1Bold: 'prancūziškos odos priežiūros meistriškumas.',
    lead:
      'Daugiau nei 50 metų patirties profesionalioje kosmetikoje. Unikalios aparatinės procedūros, kurių rezultatai kalba patys už save.',
    heroImageSrc: '/mega-menu/1.jpeg',
    heroImageAlt: 'Guinot profesionali odos priežiūra',
    ctaPrimary: {
      href: '/kontaktai',
      label: 'Gauti Guinot pasiūlymą',
      microcopy: 'Vadybininkas susisieks per 24 val.',
    },
    ctaSecondary: {
      href: '/tapkite-partneriu',
      label: 'Tapti partneriu',
      microcopy: 'Prieiga prie viso asortimento.',
    },
  },
  why: {
    headingLight: 'Kodėl profesionalai ',
    headingBold: 'renkasi Guinot?',
    cards: [
      {
        title: 'Aparatinės procedūros',
        description: 'Unikali Hydradermie technologija, kurios negali pakartoti namų priežiūra.',
      },
      {
        title: '50+ metų patirtis',
        description: 'Prancūziška tradicija ir nuolatinės inovacijos.',
      },
      {
        title: 'Salonų ekskluzyvumas',
        description: 'Produktai platinami tik per profesionalus — Jūsų klientai negali jų nusipirkti kitur.',
      },
      {
        title: 'Matomi rezultatai',
        description: 'Klientai mato skirtumą jau po pirmos procedūros ir grįžta reguliariai.',
      },
    ],
  },
  productLines: {
    headingLight: 'Guinot ',
    headingBold: 'produktų linijos.',
    subheading: 'Platus profesionalus asortimentas procedūroms ir namų priežiūrai.',
    audienceCards: [
      {
        id: 'guinot-line-procedural',
        bg: '/mega-menu/1.jpeg',
        heading: 'Procedūrinė linija',
        body: 'Profesionalios priemonės aparatinėms ir rankinėms procedūroms kabinete.',
      },
      {
        id: 'guinot-line-home',
        bg: '/mega-menu/2.jpeg',
        heading: 'Namų priežiūros linija',
        body: 'Produktai, kuriuos rekomenduojate klientams tęsti priežiūrą namuose.',
      },
      {
        id: 'guinot-line-antiage',
        bg: '/mega-menu/3.jpeg',
        heading: 'Anti-age programa',
        body: 'Intensyvūs atjauninimo sprendimai brandžiai odai.',
      },
      {
        id: 'guinot-line-hydradermie',
        bg: '/mega-menu/4.jpeg',
        heading: 'Hydradermie sistema',
        body: 'Unikalus Guinot aparatinis metodas giliam odos valymui ir drėkinimui.',
      },
    ],
  },
  fitFor: {
    headingLight: 'Kam tinka ',
    headingBold: 'Guinot?',
    situationItems: [
      {
        label: 'Kosmetologijos kabinetams',
        paragraph: 'Norite pasiūlyti aparatines procedūras, kurios išskiria Jus iš konkurentų.',
      },
      {
        label: 'Grožio salonams',
        paragraph: 'Ieškote premium odos priežiūros linijos šalia plaukų paslaugų.',
      },
      {
        label: 'SPA centrams',
        paragraph: 'Reikia aukščiausios klasės procedūrų ir namų priežiūros produktų svečiams.',
      },
    ],
  },
  partner: {
    headingLight: 'Partnerystės ',
    headingBold: 'privalumai.',
    subheading: 'Ką gausite kaip Guinot partneris?',
    cards: [
      {
        title: 'Oficialus atstovavimas',
        description: 'Sertifikuoto Guinot partnerio statusas Lietuvoje.',
      },
      {
        title: 'Darbo protokolai',
        description: 'Detalios instrukcijos kiekvienai procedūrai ir produktui.',
      },
      {
        title: 'Hydradermie aparatūra',
        description: 'Galimybė įsigyti ar nuomotis unikalią Guinot aparatūrą.',
      },
      {
        title: 'Marketingo palaikymas',
        description: 'Vizualinė medžiaga, pavyzdžiai ir akcijų gairės Jūsų salonui.',
      },
      {
        title: 'Praktiniai mokymai',
        description: 'Reguliarūs seminarai su Guinot treneriais ir sertifikatais.',
      },
      {
        title: 'Asmeninis vadybininkas',
        description: 'Padės sudėlioti asortimentą ir suplanuoti pardavimus.',
      },
    ],
  },
  stats: {
    items: [
      { value: '50+', label: 'metų', description: 'Patirtis profesionalioje kosmetikoje' },
      { value: '80+', label: 'šalių', description: 'Kuriose dirba Guinot profesionalai' },
      { value: 'Nr. 1', label: 'Prancūzijoje', description: 'Tarp profesionalių odos priežiūros prekių ženklų' },
    ],
  },
  quality: {
    headingLight: 'Aukščiausi ',
    headingBold: 'medicininiai standartai',
    subheading:
      'Mums rūpi ne tik gražus rezultatas, bet, svarbiausia, Jūsų ir Jūsų pacientų saugumas. Todėl visa mūsų įranga bei produktai atitinka aukščiausius ES kokybės standartus.',
    splitEyebrow: 'Medicininė kokybė',
    splitImageSrc: '/estetines.jpg',
    splitImageAlt: 'Profesionali medicininė ir estetinė aplinka',
    splitPrimaryCta: { href: '/kontaktai', label: 'Gauti konsultaciją' },
    cards: [
      {
        title: 'CE sertifikacija',
        description: 'Visa įranga turi oficialius sertifikatus ir atitinka ES medicinos prietaisų reikalavimus.',
      },
      {
        title: 'ISO 13485',
        description: 'Dirbame tik su gamintojais, kurių kokybės valdymas pripažintas tarptautiniu mastu.',
      },
      {
        title: 'FDA patvirtinta',
        description: 'Daugelis mūsų technologijų yra įvertintos ir patvirtintos net ir griežtosios JAV FDA komisijos.',
      },
      {
        title: 'Saugumo protokolai',
        description: 'Atidžiai stebime kontraindikacijas ir registruojame bet kokias nepageidaujamas reakcijas.',
      },
    ],
    extraTitle: 'Klinikinė dokumentacija ir palaikymas',
    extraBullets: [
      'Saugos duomenų lapai (MSDS)',
      'Naudojimo instrukcijos (IFU)',
      'Kontraindikacijų gidas',
    ],
    certificationTitle: 'Akredituoti mokymai',
    certificationBody:
      'Tik sertifikuoti specialistai gali dirbti su mūsų įranga. Mes užtikriname išsamius mokymus ir kvalifikacijos kėlimą.',
    certificationCta: { href: '/kontaktai', label: 'Peržiūrėti mokymų grafiką' },
  },
  spotlight: {
    statBadge: '+35% pajamų augimas',
    quote:
      '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio. Svarbiausia — oficialus atstovavimas ir struktūruoti protokolai suteikia ramybę kiekvieną dieną.“',
    authorName: 'Dr. Ieva Kazlauskienė',
    authorMeta: 'Dermatovenerologė, Vilnius',
    portraitSrc: '/Female_hands_applying_202604110815.jpeg',
    portraitAlt: 'Dr. Ieva Kazlauskienė',
  },
  trainings: {
    headingLight: 'Artimiausi ',
    headingBold: 'Guinot mokymai.',
    body: 'Datas ir registraciją skelbiame per UNICOS akademiją — parašykite vadybininkui, jei norite rezervuoti vietą Guinot mokyme.',
    ctaHref: '/kontaktai',
    ctaLabel: 'Klauskite dėl mokymų',
  },
};

const BRAND_LANDING_BY_SLUG: Record<string, PrekiuZenklaiBrandLandingConfig> = {
  guinot: guinotBrandLandingConfig,
};

export function getBrandLandingBySlug(slug: string): PrekiuZenklaiBrandLandingConfig | undefined {
  return BRAND_LANDING_BY_SLUG[slug];
}

export function getBrandLandingStaticSlugs(): string[] {
  return Object.keys(BRAND_LANDING_BY_SLUG);
}
