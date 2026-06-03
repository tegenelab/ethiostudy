import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found - EthioStudy',
  description: 'The page you are looking for does not exist. Browse free Ethiopian textbooks and study materials for Grades 8-12.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 16px 80px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          fontFamily: 'Poppins, sans-serif',
          background: 'linear-gradient(135deg, #0d9488, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 16,
        }}
      >
        404
      </div>
      <h1
        style={{
          fontSize: 'clamp(20px, 4vw, 28px)',
          fontWeight: 700,
          fontFamily: 'Poppins, sans-serif',
          color: 'var(--primary)',
          marginBottom: 12,
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          fontSize: 15,
          color: 'var(--text-secondary)',
          maxWidth: 400,
          lineHeight: 1.6,
          marginBottom: 32,
        }}
      >
        The page you are looking for does not exist or has been moved.
        Browse our free Ethiopian textbooks instead.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            padding: '12px 28px',
            borderRadius: 12,
            background: 'var(--accent)',
            color: 'white',
            fontWeight: 700,
            fontSize: 14,
            fontFamily: 'Poppins, sans-serif',
            textDecoration: 'none',
          }}
        >
          Go Home
        </Link>
        <Link
          href="/books"
          style={{
            padding: '12px 28px',
            borderRadius: 12,
            border: '2px solid var(--border)',
            background: 'transparent',
            color: 'var(--primary)',
            fontWeight: 600,
            fontSize: 14,
            fontFamily: 'Poppins, sans-serif',
            textDecoration: 'none',
          }}
        >
          Browse Textbooks
        </Link>
      </div>
    </section>
  );
}
