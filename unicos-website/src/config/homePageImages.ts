/**
 * Vietiniai paveikslėliai iš pagrindinio puslapio (`src/app/page.tsx`) sekcijų,
 * kad kiti puslapiai (pvz. Akademija) galėtų naudoti tą patį vizualinį rinkinį.
 */

export const HOME_PAGE_VALUE_FEATURE_IMAGES = [
  '/odos.jpg',
  '/plaukai.jpg',
  '/estetines.jpg',
  '/farmacija.jpg',
] as const;

/** `CmsGridSection` mokymų kortelės */
export const HOME_PAGE_CMS_TRAINING_IMAGES = ['/mega-menu/1.jpeg', '/mega-menu/2.jpeg', '/mega-menu/3.jpeg'] as const;

export const HOME_PAGE_TESTIMONIALS_IMAGE = '/testimonials-photo.png' as const;
export const HOME_PAGE_PLATFORM_IMAGE = '/device.webp' as const;

/** Visi unikalūs vieši keliai, naudojami akademijos kortelių „pool“. */
export const HOME_PAGE_IMAGE_POOL: readonly string[] = [
  ...HOME_PAGE_VALUE_FEATURE_IMAGES,
  ...HOME_PAGE_CMS_TRAINING_IMAGES,
  HOME_PAGE_TESTIMONIALS_IMAGE,
  HOME_PAGE_PLATFORM_IMAGE,
];

/** Stabilus „atsitiktinis“ pasirinkimas pagal raktą (tinka SSR / hidratacijai). */
export function homePageImageForKey(key: string): string {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const idx = Math.abs(h) % HOME_PAGE_IMAGE_POOL.length;
  return HOME_PAGE_IMAGE_POOL[idx]!;
}
