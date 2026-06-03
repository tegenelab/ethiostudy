import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata = {
  metadataBase: new URL('https://ethiostudy.vercel.app'),
  title: {
    default: 'EthioStudy - Free Ethiopian Study Materials & Textbooks',
    template: '%s | EthioStudy',
  },
  description: 'Free textbooks, past exams, and study guides for Ethiopian students Grades 8–12. Download free PDF books for Natural and Social streams.',
  keywords: ['Ethiopian textbooks', 'free study materials Ethiopia', 'Grade 9 textbook', 'Grade 11 textbook', 'Ethiopian education', 'EthioStudy', 'MoE textbooks', 'Grade 12 exam prep', 'natural stream', 'social stream', 'national exam Ethiopia', 'መጽሐፍት', 'የኢትዮጵያ ትምህርት', 'fetena textbook', 'fetena.net', 'fetena pdf', 'fetena books', 'ethiopian textbook pdf free download', 'ፈተና', 'የ12ኛ ክፍል ፈተና'],
  authors: [{ name: 'EthioStudy' }],
  creator: 'EthioStudy',
  publisher: 'EthioStudy',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethiostudy.vercel.app',
    siteName: 'EthioStudy',
    title: 'EthioStudy - Free Ethiopian Study Materials',
    description: 'Free textbooks, past exams, and study guides for Ethiopian students Grades 8–12.',
    images: [{ url: 'https://ethiostudy.vercel.app/og-image.png', width: 1200, height: 630, alt: 'EthioStudy - Free Ethiopian Study Materials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EthioStudy - Free Ethiopian Study Materials',
    description: 'Free textbooks, past exams, and study guides for Ethiopian students Grades 8–12.',
    images: ['https://ethiostudy.vercel.app/og-image.png'],
  },
  verification: {
    google: '2-41_tlsagZ8GVI5bpgEUEpN5xHS_TqbjZH3yZxLt14',
  },
  alternates: {
    languages: {
      en: 'https://ethiostudy.vercel.app',
      am: 'https://ethiostudy.vercel.app',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EthioStudy" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://kehulum.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://kehulum.com" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/og-image.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="alternate" hrefLang="en" href="https://ethiostudy.vercel.app" />
        <link rel="alternate" hrefLang="am" href="https://ethiostudy.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://ethiostudy.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://ethiostudy.vercel.app/#organization',
                  name: 'EthioStudy',
                  url: 'https://ethiostudy.vercel.app',
                  logo: 'https://ethiostudy.vercel.app/og-image.png',
                  description: 'Free Ethiopian study materials and textbooks for Grades 8-12.',
                  foundingDate: '2025',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    url: 'https://t.me/tegene',
                  },
                  sameAs: ['https://t.me/tegene'],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://ethiostudy.vercel.app/#website',
                  name: 'EthioStudy',
                  url: 'https://ethiostudy.vercel.app',
                  publisher: { '@id': 'https://ethiostudy.vercel.app/#organization' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: { '@type': 'EntryPoint', urlTemplate: 'https://ethiostudy.vercel.app/books?q={search_term_string}' },
                    'query-input': 'required name=search_term_string',
                  },
                  inLanguage: ['en', 'am'],
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://ethiostudy.vercel.app/#webpage',
                  name: 'EthioStudy - Free Ethiopian Study Materials & Textbooks',
                  url: 'https://ethiostudy.vercel.app',
                  description: 'Free textbooks, past exams, and study guides for Ethiopian students Grades 8-12.',
                  isPartOf: { '@id': 'https://ethiostudy.vercel.app/#website' },
                  about: { '@id': 'https://ethiostudy.vercel.app/#organization' },
                },
                {
                  '@type': 'ItemList',
                  name: 'Ethiopian Textbooks by Grade',
                  description: 'Free PDF textbooks for Ethiopian secondary school students',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Grade 8 Textbooks', url: 'https://ethiostudy.vercel.app/books/grade8' },
                    { '@type': 'ListItem', position: 2, name: 'Grade 9 Textbooks', url: 'https://ethiostudy.vercel.app/books/grade9' },
                    { '@type': 'ListItem', position: 3, name: 'Grade 10 Textbooks', url: 'https://ethiostudy.vercel.app/books/grade10' },
                    { '@type': 'ListItem', position: 4, name: 'Grade 11 Textbooks', url: 'https://ethiostudy.vercel.app/books/grade11' },
                    { '@type': 'ListItem', position: 5, name: 'Grade 12 Textbooks', url: 'https://ethiostudy.vercel.app/books/grade12' },
                    { '@type': 'ListItem', position: 6, name: 'Exam Preparation', url: 'https://ethiostudy.vercel.app/books/exam' },
                    { '@type': 'ListItem', position: 7, name: 'Natural Stream Textbooks', url: 'https://ethiostudy.vercel.app/books/natural' },
                    { '@type': 'ListItem', position: 8, name: 'Social Stream Textbooks', url: 'https://ethiostudy.vercel.app/books/social' },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').catch(()=>{})})}`,
          }}
        />
      </body>
    </html>
  );
}
