import { notFound } from 'next/navigation';
import { folders, folderMeta } from '@/lib/data';
import { books } from '@/lib/data';
import BooksFolderView from '@/src/components/BooksFolderView';

export async function generateStaticParams() {
  return folders.map((f) => ({ folderId: f.id }));
}

export async function generateMetadata({ params }) {
  const folder = folders.find((f) => f.id === params.folderId);
  if (!folder) return { title: 'Not Found' };
  const meta = folderMeta[folder.id];
  const title = `${folder.label} Textbooks - Free PDF Download | EthioStudy`;
  const description = meta?.description || `Download free ${folder.label} textbooks and study materials for Ethiopian students.`;
  const keywords = meta?.keywords || [];
  const url = `https://ethiostudy.vercel.app/books/${folder.id}`;
  return {
    title,
    description,
    keywords: [...keywords, 'Ethiopian textbooks', 'free PDF download', 'EthioStudy', 'MoE textbooks'],
    alternates: { canonical: url },
    openGraph: {
      title: `${folder.label} Textbooks - Free PDF Download`,
      description: description.slice(0, 160),
      url,
      type: 'website',
      siteName: 'EthioStudy',
      locale: 'en_US',
      images: [{ url: 'https://ethiostudy.vercel.app/og-image.png', width: 1200, height: 630, alt: `${folder.label} Textbooks - EthioStudy` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${folder.label} Textbooks - Free PDF Download`,
      description: description.slice(0, 160),
      images: ['https://ethiostudy.vercel.app/og-image.png'],
    },
  };
}

export default function FolderPage({ params }) {
  const folder = folders.find((f) => f.id === params.folderId);
  if (!folder) notFound();

  const folderBooks = books.filter((b) => b.folderId === params.folderId);
  const meta = folderMeta[folder.id];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ethiostudy.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Books', item: 'https://ethiostudy.vercel.app/books' },
      { '@type': 'ListItem', position: 3, name: folder.label, item: `https://ethiostudy.vercel.app/books/${folder.id}` },
    ],
  };

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${folder.label} Textbooks`,
    description: meta?.description || `Free ${folder.label} textbooks for Ethiopian students.`,
    provider: {
      '@type': 'Organization',
      name: 'EthioStudy',
      sameAs: 'https://ethiostudy.vercel.app',
    },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ETB', availability: 'https://schema.org/InStock' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <BooksFolderView folder={folder} books={folderBooks} />
    </>
  );
}
