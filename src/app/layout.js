import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import config from '@/data/config.json';

export const metadata = {
  title: `${config.site.name} | Vini Artigianali del Trentino`,
  description: config.site.description,
  keywords: 'cantina, vini, trentino, vini artigianali, degustazioni',
  authors: [{ name: config.site.name }],
  openGraph: {
    title: `${config.site.name} | Vini Artigianali del Trentino`,
    description: config.site.description,
    url: config.site.url,
    siteName: config.site.name,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
