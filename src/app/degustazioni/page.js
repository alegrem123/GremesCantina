import { Parallax } from '@/components/animations/Parallax';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Button from '@/components/ui/button';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import pagesData from '@/data/pages.json';

export const metadata = {
  title: 'Esperienze di Degustazione | Cantina Gremes',
  description: 'Vivi un\'esperienza indimenticabile con le nostre degustazioni guidate, tour dei vigneti e abbinamenti vini-cibo.',
  openGraph: {
    title: 'Esperienze di Degustazione | Cantina Gremes',
    description: 'Scopri le esperienze di degustazione di Cantina Gremes.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2e3bb6?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function TastingsPage() {
  const { degustazioni } = pagesData;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <Parallax speed={0.3}>
          <img
            src={degustazioni.heroImage}
            alt="Esperienze di Degustazione"
            className="absolute inset-0 w-full h-screen object-cover"
          />
        </Parallax>

        {/* Overlay */}
        <div className="absolute inset-0 bg-nero bg-opacity-40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-avorio max-w-3xl px-6">
          <RevealOnScroll>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
              {degustazioni.title}
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90">
              {degustazioni.headline}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Description Section */}
      <Section className="bg-avorio">
        <Container>
          <div className="max-w-3xl mx-auto mb-16">
            <RevealOnScroll>
              <p className="font-inter text-lg text-nero leading-relaxed text-center">
                {degustazioni.description}
              </p>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      {/* Experiences Grid Section */}
      <Section className="bg-beige">
        <Container>
          <div className="mb-16">
            <RevealOnScroll>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nero text-center">
                Le Nostre Esperienze
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {degustazioni.experiences.map((experience, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="bg-avorio rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <span className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-oro text-nero font-bold text-lg">
                      {index + 1}
                    </span>
                    <div className="ml-4">
                      <h3 className="font-playfair text-2xl font-bold text-nero">
                        {experience.name}
                      </h3>
                      <p className="font-inter text-sm text-oro font-semibold mt-1">
                        {experience.duration}
                      </p>
                    </div>
                  </div>
                  <p className="font-inter text-nero leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Button variant="primary" href="/contatti">
              Prenota un'Esperienza
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
