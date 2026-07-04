import Section from '../../src/components/common/Section';
import Container from '../../src/components/common/Container';
import WineCard from '../../src/components/wine/WineCard';
import { RevealOnScroll } from '../../src/components/animations/RevealOnScroll';
import wines from '../../src/data/wines.json';

export const metadata = {
  title: 'I Nostri Vini — Cantina Gremes',
  description: 'Scopri la selezione curata di vini artigianali di Cantina Gremes. Teroldego Riserva, Bianco di Gremes, Spumante Brut e altri vini biologici della Valle di Non.',
};

export default function WinesPage() {
  return (
    <>
      {/* Header Section */}
      <Section className="bg-nero text-avorio py-24">
        <Container>
          <h1 className="font-playfair text-5xl font-bold mb-4 text-avorio">
            I Nostri Vini
          </h1>
          <p className="text-lg text-avorio opacity-80 max-w-2xl">
            Una selezione curata di vini artigianali biologici, espressione autentica del territorio della Valle di Non e della tradizione vinificola trentina.
          </p>
        </Container>
      </Section>

      {/* Wines Grid Section */}
      <Section className="bg-avorio">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wines.map((wine, index) => (
              <RevealOnScroll key={wine.slug} delay={index * 0.1}>
                <WineCard wine={wine} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
