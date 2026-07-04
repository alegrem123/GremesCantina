import Hero from '@/components/sections/Hero';
import BrandIntro from '@/components/sections/BrandIntro';
import WinesSection from '@/components/sections/WinesSection';
import TerritorySection from '@/components/sections/TerritorySection';
import TastingsSection from '@/components/sections/TastingsSection';
import GallerySection from '@/components/sections/GallerySection';
import NewsletterSection from '@/components/sections/NewsletterSection';

export const metadata = {
  title: 'Cantina Gremes — Vini Artigianali della Valle di Non',
  description: 'Scopri i vini biologici di Cantina Gremes. Tradizione, territorio, qualità nel cuore della Valle di Non.',
  openGraph: {
    title: 'Cantina Gremes',
    description: 'Vini artigianali biologici della Valle di Non',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <WinesSection />
      <TerritorySection />
      <TastingsSection />
      <GallerySection />
      <NewsletterSection />
    </>
  );
}
