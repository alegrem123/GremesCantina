import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import { Badge } from '@/components/ui/badge';

export default function WineHero({ wine }) {
  return (
    <Section className="bg-beige">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center max-w-xs mx-auto md:mx-0">
            <img
              src={wine.image}
              alt={wine.name}
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '300/450' }}
            />
          </div>

          {/* Right: Info */}
          <div>
            {/* Badge */}
            <Badge variant="secondary" className="mb-4">
              {wine.type}
            </Badge>

            {/* Name */}
            <h1 className="font-playfair text-4xl font-bold mb-2 text-nero">
              {wine.name}
            </h1>

            {/* Vintage */}
            <p className="text-2xl text-gray-600 opacity-60 mb-6">
              Annata {wine.vintage}
            </p>

            {/* Description */}
            <p className="text-lg text-nero opacity-80 mb-8 leading-relaxed">
              {wine.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 bg-nero text-avorio p-6 rounded-lg">
              {/* Vitigno */}
              <div>
                <p className="text-xs uppercase text-avorio opacity-60 mb-2">
                  Vitigno
                </p>
                <p className="text-sm font-medium">
                  {wine.grape}
                </p>
              </div>

              {/* Zona */}
              <div>
                <p className="text-xs uppercase text-avorio opacity-60 mb-2">
                  Zona
                </p>
                <p className="text-sm font-medium">
                  {wine.subregion}
                </p>
              </div>

              {/* Altitudine */}
              <div>
                <p className="text-xs uppercase text-avorio opacity-60 mb-2">
                  Altitudine
                </p>
                <p className="text-sm font-medium">
                  {wine.altitude}
                </p>
              </div>

              {/* Volume & ABV */}
              <div>
                <p className="text-xs uppercase text-avorio opacity-60 mb-2">
                  Volume
                </p>
                <p className="text-sm font-medium">
                  750ml | {wine.technical.abv}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
