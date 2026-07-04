import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function WineCard({ wine }) {
  return (
    <Link href={`/vini/${wine.slug}`} className="group">
      <Card className="h-full overflow-hidden border border-beige/30 hover:border-oro transition-colors">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-beige">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Name */}
          <h3 className="font-playfair text-xl font-bold mb-2 text-nero">
            {wine.name}
          </h3>

          {/* Vintage & Type */}
          <p className="text-sm text-gray-600 opacity-60 mb-3">
            {wine.vintage} | {wine.type}
          </p>

          {/* Description */}
          <p className="text-sm text-nero opacity-70 mb-4 line-clamp-2">
            {wine.shortDescription}
          </p>

          {/* CTA */}
          <span className="text-sm font-medium text-oro group-hover:gap-2 transition-all inline-flex items-center gap-1">
            Scopri Dettagli <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </Card>
    </Link>
  );
}
