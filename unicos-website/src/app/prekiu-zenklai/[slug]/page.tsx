import { notFound } from 'next/navigation';
import { PrekiuZenklaiBrandLandingPage } from '@/components/pages/PrekiuZenklaiBrandLandingPage';
import { getBrandLandingBySlug, getBrandLandingStaticSlugs } from '@/config/prekiuZenklaiBrandLanding';

export function generateStaticParams() {
  return getBrandLandingStaticSlugs().map((slug) => ({ slug }));
}

export default async function PrekiuZenklaiBrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = getBrandLandingBySlug(slug);
  if (!config) notFound();
  return <PrekiuZenklaiBrandLandingPage config={config} />;
}
