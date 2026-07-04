import Link from 'next/link';
import dynamic from 'next/dynamic';
import { generateWineProductSchema } from '../../../src/lib/seo';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../../src/components/ui/breadcrumb';
import Section from '../../../src/components/common/Section';
import Container from '../../../src/components/common/Container';
import Button from '../../../src/components/ui/button';
import wines from '../../../src/data/wines.json';

// Dynamic imports to avoid framer-motion/window access during metadata generation
const WineHero = dynamic(() => import('../../../src/components/wine/WineHero'), { ssr: true });
const TastingNotes = dynamic(() => import('../../../src/components/wine/TastingNotes'), { ssr: true });
const FoodPairings = dynamic(() => import('../../../src/components/wine/FoodPairings'), { ssr: true });
const TechnicalDetails = dynamic(() => import('../../../src/components/wine/TechnicalDetails'), { ssr: true });
const WineCard = dynamic(() => import('../../../src/components/wine/WineCard'), { ssr: true });

export async function generateStaticParams() {
  return wines.map((wine) => ({
    slug: wine.slug,
  }));
}

export async function generateMetadata({ params }) {
  const wine = wines.find((w) => w.slug === params.slug);

  if (!wine) {
    return {
      title: 'Vino non trovato — Cantina Gremes',
      description: 'Il vino che stai cercando non è disponibile.',
    };
  }

  return {
    title: `${wine.name} — Cantina Gremes`,
    description: wine.shortDescription,
    openGraph: {
      title: wine.name,
      description: wine.shortDescription,
      images: [
        {
          url: wine.image,
          width: 600,
          height: 900,
        },
      ],
    },
  };
}

// Helper function to split description into 3 logical sections
function splitDescription(description) {
  const sentences = description.split('. ');

  if (sentences.length < 3) {
    return {
      territorio: description,
      vinificazione: '',
      carattere: '',
    };
  }

  // Split description roughly into thirds
  const thirdLength = Math.ceil(sentences.length / 3);

  const territorio = sentences.slice(0, thirdLength).join('. ');
  const vinificazione = sentences.slice(thirdLength, thirdLength * 2).join('. ');
  const carattere = sentences.slice(thirdLength * 2).join('. ');

  return {
    territorio: territorio.endsWith('.') ? territorio : territorio + '.',
    vinificazione: vinificazione.endsWith('.') ? vinificazione : vinificazione + '.',
    carattere: carattere.endsWith('.') ? carattere : carattere + '.',
  };
}

export default function WineDetailPage({ params }) {
  const wine = wines.find((w) => w.slug === params.slug);
  const descriptionSections = wine ? splitDescription(wine.description) : {};

  // Get related wines
  const relatedWines = wine
    ? wines.filter((w) => wine.relatedWines.includes(w.id))
    : [];

  if (!wine) {
    return (
      <Section className="bg-nero text-avorio py-24">
        <Container>
          <h1 className="font-playfair text-4xl font-bold mb-4">Vino non trovato</h1>
          <p className="text-lg text-avorio opacity-80 mb-8">
            Il vino che stai cercando non è disponibile nel nostro catalogo.
          </p>
          <Link href="/vini" className="text-oro hover:underline">
            Torna ai nostri vini →
          </Link>
        </Container>
      </Section>
    );
  }

  const wineProductSchema = generateWineProductSchema(wine);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wineProductSchema) }}
      />
      {/* Breadcrumb */}
      <Section className="bg-beige">
        <Container>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/vini">Vini</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-nero">{wine.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </Section>

      {/* Wine Hero */}
      <WineHero wine={wine} />

      {/* Description Section */}
      <Section className="bg-nero text-avorio">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Il Territorio */}
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-4 text-avorio">
                Il Territorio
              </h2>
              <p className="text-avorio opacity-80 leading-relaxed">
                {descriptionSections.territorio}
              </p>
            </div>

            {/* La Vinificazione */}
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-4 text-avorio">
                La Vinificazione
              </h2>
              <p className="text-avorio opacity-80 leading-relaxed">
                {descriptionSections.vinificazione}
              </p>
            </div>

            {/* Il Carattere */}
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-4 text-avorio">
                Il Carattere
              </h2>
              <p className="text-avorio opacity-80 leading-relaxed">
                {descriptionSections.carattere}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tasting Notes */}
      <TastingNotes tasting={wine.tasting} />

      {/* Food Pairings */}
      <FoodPairings pairings={wine.pairings} />

      {/* Technical Details */}
      <TechnicalDetails technical={wine.technical} servingTemp={wine.servingTemperature} />

      {/* CTA Section */}
      <Section className="bg-nero text-avorio py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4 text-avorio">
              Scopri il {wine.name}
            </h2>
            <p className="text-lg text-avorio opacity-80 max-w-2xl mx-auto">
              Ordina online o contattaci per ulteriori informazioni su questo straordinario vino della Valle di Non.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button
              variant="primary"
              href={wine.externalLink}
              target="_blank"
            >
              Acquista Online
            </Button>
            <Button
              variant="secondary"
              href="/contatti"
            >
              Richiedi Informazioni
            </Button>
          </div>
        </Container>
      </Section>

      {/* Related Wines */}
      {relatedWines.length > 0 && (
        <Section className="bg-avorio">
          <Container>
            <h2 className="font-playfair text-3xl font-bold mb-12 text-center text-nero">
              Altri Vini Consigliati
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedWines.map((relatedWine) => (
                <WineCard key={relatedWine.slug} wine={relatedWine} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
