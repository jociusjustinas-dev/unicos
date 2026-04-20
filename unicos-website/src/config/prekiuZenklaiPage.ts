import type { UnicosWhyBubble } from '@/components/sections/UnicosWhySection';

export type PrekiuZenklaiFilterId = 'all' | 'odos' | 'plaukai' | 'estetine' | 'derma';

export const PREKIU_ZENKLAI_FILTERS: readonly { id: PrekiuZenklaiFilterId; label: string }[] = [
  { id: 'all', label: 'Visi' },
  { id: 'odos', label: 'Odos priežiūra' },
  { id: 'plaukai', label: 'Plaukų priežiūra' },
  { id: 'estetine', label: 'Estetinė dermatologija' },
  { id: 'derma', label: 'Dermakosmetika' },
] as const;

export type PrekiuZenklaiBrandCard = {
  id: string;
  title: string;
  logoSvg?: string;
  description: string;
  badge: string;
  /** Filtravimui pagal kategorijas */
  categoryIds: readonly PrekiuZenklaiFilterId[];
  /** Rodoma kaip etiketės */
  categoryLabels: readonly string[];
  recommended: string;
  country: string;
  imageSrc: string;
  imageAlt: string;
  /** „Plačiau“ nuoroda */
  href: string;
};

export const PREKIU_ZENKLAI_BRANDS: readonly PrekiuZenklaiBrandCard[] = [
  {
    id: 'guinot',
    title: 'Guinot',
    logoSvg: '/Guinot logo.svg',
    description: 'Profesionali odos priežiūra su unikaliomis aparatinėmis procedūromis.',
    badge: 'Oficialus atstovas Lietuvoje',
    categoryIds: ['odos', 'derma'],
    categoryLabels: ['Odos priežiūra', 'Dermakosmetika'],
    recommended: 'Klinikoms, salonams',
    country: 'Prancūzija',
    imageSrc: '/mega-menu/1.jpeg',
    imageAlt: 'Guinot profesionali kosmetika',
    href: '/prekiu-zenklai/guinot',
  },
  {
    id: 'neostrata',
    title: 'Neostrata',
    description: 'Dermatologinė kosmetika, paremta glikolio ir polihidroksi rūgščių mokslu.',
    badge: 'Oficialus atstovas Lietuvoje',
    categoryIds: ['odos', 'estetine'],
    categoryLabels: ['Odos priežiūra', 'Estetinė dermatologija'],
    recommended: 'Klinikoms, dermatologams',
    country: 'JAV',
    imageSrc: '/mega-menu/2.jpeg',
    imageAlt: 'Neostrata produktai',
    href: '#',
  },
  {
    id: 'mary-cohr',
    title: 'Mary Cohr',
    logoSvg: '/Mary Cohr logo.svg',
    description: 'Aukščiausios klasės sprendimai veidui ir kūnui profesionalioms procedūroms.',
    badge: 'Oficialus atstovas Lietuvoje',
    categoryIds: ['odos'],
    categoryLabels: ['Odos priežiūra'],
    recommended: 'Salonams, SPA',
    country: 'Prancūzija',
    imageSrc: '/mega-menu/3.jpeg',
    imageAlt: 'Mary Cohr procedūros salone',
    href: '#',
  },
  {
    id: 'anna-lotan',
    title: 'Anna Lotan',
    description: 'Profesionali kosmetika natūralių ingredientų pagrindu.',
    badge: 'Oficialus atstovas Lietuvoje',
    categoryIds: ['odos', 'derma'],
    categoryLabels: ['Odos priežiūra', 'Dermakosmetika'],
    recommended: 'Kosmetologams',
    country: 'Izraelis',
    imageSrc: '/Female_hands_applying_202604110815.jpeg',
    imageAlt: 'Anna Lotan odos priežiūra',
    href: '#',
  },
  {
    id: 'fillmed',
    title: 'Fillmed',
    description: 'Filorga profesionali linija — mezoterapija, biorevitalizacija ir odos atjauninimas.',
    badge: 'Oficialus atstovas Lietuvoje',
    categoryIds: ['estetine'],
    categoryLabels: ['Estetinė dermatologija'],
    recommended: 'Klinikoms',
    country: 'Prancūzija',
    imageSrc: '/mega-menu/4.jpeg',
    imageAlt: 'Fillmed estetinė medicina',
    href: '#',
  },
  {
    id: 'caregen',
    title: 'Caregen',
    description: 'Pažangūs peptidų sprendimai odos atjauninimui ir plaukų atkūrimui.',
    badge: 'Oficialus atstovas Lietuvoje',
    categoryIds: ['estetine', 'plaukai'],
    categoryLabels: ['Estetinė dermatologija', 'Plaukų priežiūra'],
    recommended: 'Klinikoms, trichologams',
    country: 'Pietų Korėja',
    imageSrc: '/plaukai.jpg',
    imageAlt: 'Caregen peptidiniai sprendimai',
    href: '#',
  },
  {
    id: 'exuviance',
    title: 'Exuviance',
    description: 'Švelni, bet efektyvi priežiūra jautriai ir probleminei odai.',
    badge: 'Oficialus atstovas Lietuvoje',
    categoryIds: ['derma', 'odos'],
    categoryLabels: ['Dermakosmetika', 'Odos priežiūra'],
    recommended: 'Kosmetologams, klinikoms',
    country: 'JAV',
    imageSrc: '/estetines.jpg',
    imageAlt: 'Exuviance dermatologinė kosmetika',
    href: '#',
  },
] as const;

export const PREKIU_ZENKLAI_CRITERIA_CARDS = [
  { title: 'Klinikinis efektyvumas', description: 'Įrodytas realiais tyrimais.' },
  { title: 'Švari sudėtis', description: 'Be parabenų ir agresyvių priedų.' },
  { title: 'Gamintojo reputacija', description: 'Tarptautinė patirtis ir pripažinimas.' },
  { title: 'Mokymo programa', description: 'Profesionalūs protokolai ir seminarai.' },
  { title: 'Dermatologinis saugumas', description: 'Patvirtintas specialistų.' },
  { title: 'Tvarumo principai', description: 'Atsakinga gamyba ir pakuotės.' },
] as const;

export const PREKIU_ZENKLAI_OFFICIAL_BULLETS = [
  'Gamintojo garantijos ir dokumentacija',
  'Originalūs produktai su pilnu atsekamumu',
  'Prieiga prie tarptautinių mokymų ir sertifikatų',
  'Vietinis palaikymas ir logistika per 24 h',
] as const;

export const PREKIU_ZENKLAI_ECOSYSTEM_CARDS = [
  {
    title: 'Produktai',
    description: 'Oficialus asortimentas su didmeninėmis kainomis ir reguliariu tiekimu.',
  },
  {
    title: 'Žinios',
    description: 'Darbo protokolai, mokymai ir sertifikatai kiekvienam ženklui.',
  },
  {
    title: 'Palaikymas',
    description: 'Asmeninis vadybininkas, konsultacijos ir marketingo medžiaga Jūsų verslui.',
  },
] as const;

const PREKIU_ZENKLAI_ECOSYSTEM_BUBBLE_META: readonly Pick<UnicosWhyBubble, 'icon' | 'hoverBg' | 'hoverFg' | 'border'>[] = [
  { icon: '/Icon.svg', hoverBg: '#64151F', hoverFg: '#EFE8DB', border: 'rgba(100,21,31,0.38)' },
  { icon: '/Icon-1.svg', hoverBg: '#3B443A', hoverFg: '#EFE8DB', border: 'rgba(59,68,58,0.34)' },
  { icon: '/Icon-2.svg', hoverBg: '#1A1010', hoverFg: '#EFE8DB', border: 'rgba(26,16,16,0.32)' },
] as const;

/** „Daugiau nei tiekimas“ — tie patys burbulai kaip „Kodėl Unicos?“ (ikonos / hover). */
export const PREKIU_ZENKLAI_ECOSYSTEM_BUBBLES: readonly UnicosWhyBubble[] = PREKIU_ZENKLAI_ECOSYSTEM_CARDS.map(
  (card, i) => ({
    title: card.title,
    body: card.description,
    ...PREKIU_ZENKLAI_ECOSYSTEM_BUBBLE_META[i]!,
  })
);
