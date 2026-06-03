import Link from 'next/link';
import { FolderClosed } from 'lucide-react';
import { folders } from '@/lib/data';

export const metadata = {
  title: 'Free Ethiopian PDF Textbooks - Download by Grade & Stream',
  description: 'Browse and download free Ethiopian secondary school textbooks in PDF. Grade 8 to 12, Natural Stream, Social Stream, and Exam Prep.',
  keywords: ['Ethiopian textbooks PDF', 'free textbook download Ethiopia', 'Grade 8 to 12 books', 'Ethiopian curriculum', 'MoE textbooks', 'secondary school Ethiopia', 'ነፃ የትምህርት መጽሐፍት'],
  alternates: {
    canonical: 'https://ethiostudy.vercel.app/books',
  },
  openGraph: {
    title: 'Free Ethiopian PDF Textbooks - Download by Grade & Stream',
    description: 'Browse and download free Ethiopian secondary school textbooks in PDF format from Grade 8 through Grade 12.',
    url: 'https://ethiostudy.vercel.app/books',
  },
  twitter: {
    title: 'Free Ethiopian PDF Textbooks - Download by Grade & Stream',
    description: 'Browse and download free Ethiopian secondary school textbooks in PDF format from Grade 8 through Grade 12.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ethiostudy.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Books', item: 'https://ethiostudy.vercel.app/books' },
  ],
};

function FolderLink({ f }) {
  return (
    <Link
      href={`/books/${f.id}`}
      className="pattern-bg folder-link"
      data-color={f.color}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: 20,
        borderRadius: 16,
        border: '1px solid var(--border)',
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 200ms ease-out, border-color 200ms ease-out, transform 200ms ease-out',
        textDecoration: 'none',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: `${f.color}12`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <FolderClosed size={24} color={f.color} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)', marginBottom: 2 }}>
          {f.label}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          {f.count} books
        </div>
      </div>
    </Link>
  );
}

export default function BooksPage() {
  return (
    <section
      style={{
        padding: '120px 16px 80px',
        maxWidth: 1120,
        margin: '0 auto',
        minHeight: '100vh',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: 1.5,
          }}
        >
          PDF Library
        </span>
        <h1
          style={{
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 700,
            marginTop: 8,
            color: 'var(--primary)',
          }}
        >
          Free <span style={{ color: 'var(--accent)' }}>PDF Books</span> Collection
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            marginTop: 12,
            maxWidth: 500,
            margin: '12px auto 0',
            lineHeight: 1.7,
            fontSize: 14,
          }}
        >
          Download Ethiopian secondary school textbooks — Grades 9 to 12, all streams.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
          gap: 14,
        }}
      >
        {folders.map((f) => (
          <div key={f.id} style={{ '--folder-color': f.color }}>
            <FolderLink f={f} />
          </div>
        ))}
      </div>
    </section>
  );
}
