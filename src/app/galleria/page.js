import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import pagesData from '@/data/pages.json';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1596838805908-e65e2a2eb6d5?w=600&h=600&fit=crop',
    alt: 'Wine vineyard landscape',
  },
  {
    url: 'https://images.unsplash.com/photo-1559925393-641a415ac8db?w=600&h=600&fit=crop',
    alt: 'Wine tasting event',
  },
  {
    url: 'https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=600&h=600&fit=crop',
    alt: 'Wine cellar experience',
  },
  {
    url: 'https://images.unsplash.com/photo-1608270861620-7c3f7ccbe29f?w=600&h=600&fit=crop',
    alt: 'Wine bottles collection',
  },
  {
    url: 'https://images.unsplash.com/photo-1584367694821-e6c6dac3f14d?w=600&h=600&fit=crop',
    alt: 'Vineyard harvest season',
  },
  {
    url: 'https://images.unsplash.com/photo-1609708536965-244d83b47979?w=600&h=600&fit=crop',
    alt: 'Wine production process',
  },
];

export const metadata = {
  title: 'Galleria | Cantina Gremes',
  description: 'Scopri la galleria fotografica di Cantina Gremes: momenti dalla cantina, dai vigneti e dalle nostre esperienze.',
  openGraph: {
    title: 'Galleria | Cantina Gremes',
    description: 'Galleria fotografica di Cantina Gremes',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596838805908-e65e2a2eb6d5?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-nero to-beige">
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-avorio max-w-3xl px-6">
          <RevealOnScroll>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4">
              {pagesData.gallery.title}
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90">
              Scopri i momenti più belli di Cantina Gremes
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Gallery Masonry Section */}
      <Section className="bg-avorio">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <RevealOnScroll key={index} delay={index * 0.05}>
                <div className="group overflow-hidden rounded-lg shadow-lg aspect-square">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
