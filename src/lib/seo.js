/**
 * SEO helper functions for JSON-LD structured data
 */

/**
 * Generate LocalBusiness schema for Cantina Gremes
 * @returns {Object} LocalBusiness schema for JSON-LD
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cantina Gremes',
    description: 'Cantina di vini biologici artigianali nella Valle di Non, Trentino Alto Adige',
    url: 'https://www.cantinagremes.it',
    telephone: '+39-0461-555555',
    email: 'info@cantinagremes.it',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Maso Plotegher, Valle di Non',
      addressLocality: 'Cles',
      addressRegion: 'TN',
      postalCode: '38021',
      addressCountry: 'IT',
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.3417,
      longitude: 10.9833,
    },
    sameAs: [
      'https://www.facebook.com/cantinagremes',
      'https://www.instagram.com/cantinagremes',
    ],
    priceRange: '€€',
    areaServed: {
      '@type': 'Country',
      name: 'IT',
    },
    additionalType: 'WineProducer',
  };
}

/**
 * Generate Product schema for a wine
 * @param {Object} wine - Wine object with properties
 * @returns {Object} Product schema for JSON-LD
 */
export function generateWineProductSchema(wine) {
  const ratingValue = 4.5; // Default rating, could be dynamic based on wine data
  const ratingCount = 120; // Default count, could be dynamic

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${wine.name} ${wine.vintage}`,
    description: wine.shortDescription,
    image: wine.image,
    brand: {
      '@type': 'Brand',
      name: 'Cantina Gremes',
    },
    manufacturer: {
      '@type': 'LocalBusiness',
      name: 'Cantina Gremes',
      url: 'https://www.cantinagremes.it',
    },
    productCategory: 'Wine',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toString(),
      ratingCount: ratingCount.toString(),
    },
    offers: {
      '@type': 'Offer',
      url: wine.externalLink || 'https://www.cantinagremes.it',
      priceCurrency: 'EUR',
      price: '25.00', // Default price, could be dynamic
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'LocalBusiness',
        name: 'Cantina Gremes',
        url: 'https://www.cantinagremes.it',
      },
    },
    // Wine-specific properties
    alcoholContent: wine.technical?.abv || '13.5%',
    harvestDate: wine.vintage?.toString() || new Date().getFullYear().toString(),
    areaServed: {
      '@type': 'Country',
      name: 'IT',
    },
  };
}
