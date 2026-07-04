import { Parallax } from '@/components/animations/Parallax';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Button from '@/components/ui/button';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import pagesData from '@/data/pages.json';

export const metadata = {
  title: 'Il Nostro Territorio | Cantina Gremes',
  description: 'Scopri il Territorio della Valle di Non, le caratteristiche uniche del suolo vulcanico e il microclima ideale per i nostri vini.',
  openGraph: {
    title: 'Il Nostro Territorio | Cantina Gremes',
    description: 'Scopri il Territorio della Valle di Non e le sue caratteristiche viticole uniche.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1569718212b8-0fb88f5e6888?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function TerritoryPage() {
  const { territory } = pagesData;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <Parallax speed={0.3}>
          <img
            src={territory.heroImage}
            alt="Il Nostro Territorio"
            className="absolute inset-0 w-full h-screen object-cover"
          />
        </Parallax>

        {/* Overlay */}
        <div className="absolute inset-0 bg-nero bg-opacity-40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-avorio max-w-3xl px-6">
          <RevealOnScroll>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
              Il Nostro Territorio
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90">
              La Valle di Non, cuore della viticoltura trentina
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Territory Content Section */}
      <Section className="bg-avorio">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Image with Parallax */}
            <RevealOnScroll>
              <Parallax speed={0.25}>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={territory.heroImage}
                    alt="Valle di Non landscape"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Parallax>
            </RevealOnScroll>

            {/* Right Column - Text */}
            <RevealOnScroll delay={0.1}>
              <div className="space-y-6">
                <p className="font-inter text-lg text-nero leading-relaxed whitespace-pre-line">
                  {territory.content}
                </p>

                <div className="pt-4">
                  <Button variant="primary" href="/degustazioni">
                    Scopri le Esperienze
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>
    </>
  );
}
