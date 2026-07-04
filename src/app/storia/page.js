import { Parallax } from '@/components/animations/Parallax';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Button from '@/components/ui/button';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import pagesData from '@/data/pages.json';

export const metadata = {
  title: 'La Nostra Storia | Cantina Gremes',
  description: 'Scopri la storia di Cantina Gremes, tre generazioni di passione viticola nella Valle di Non dal 1892.',
  openGraph: {
    title: 'La Nostra Storia | Cantina Gremes',
    description: 'Scopri la storia di Cantina Gremes, tre generazioni di passione viticola.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function StoryPage() {
  const { story } = pagesData;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <Parallax speed={0.3}>
          <img
            src={story.heroImage}
            alt="La Nostra Storia"
            className="absolute inset-0 w-full h-screen object-cover"
          />
        </Parallax>

        {/* Overlay */}
        <div className="absolute inset-0 bg-nero bg-opacity-40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-avorio max-w-3xl px-6">
          <RevealOnScroll>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
              La Nostra Storia
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90">
              Tre generazioni di passione viticola nel cuore della Valle di Non
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story Content Section */}
      <Section className="bg-avorio">
        <Container>
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <div className="space-y-8">
                <p className="font-inter text-lg text-nero leading-relaxed whitespace-pre-line">
                  {story.content}
                </p>

                <div className="pt-8">
                  <Button variant="primary" href="/contatti">
                    Contattaci
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
