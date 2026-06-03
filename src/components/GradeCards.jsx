'use client';

import { useRouter } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import { grades } from '@/lib/data';

export default function GradeCards() {
  const router = useRouter();

  return (
    <section
      style={{
        padding: '60px 24px',
        maxWidth: 1120,
        margin: '0 auto',
      }}
    >
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
          Browse by Grade
        </span>
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 700,
            marginTop: 8,
            color: 'var(--primary)',
          }}
        >
          Find Your{' '}
          <span className="gradient-text">Grade Level</span>
        </h2>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .grade-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .grade-grid { grid-template-columns: repeat(6, 1fr) !important; }
        }
        .grade-card {
          transition: transform 200ms ease-out, box-shadow 200ms ease-out;
          will-change: transform;
        }
        .grade-card:active {
          transform: scale(0.98);
        }
      `}</style>

      <div
        className="grade-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
        }}
      >
        {grades.map((g) => (
          <button
            key={g.id}
            className="grade-card"
            onClick={() => router.push(`/books/${g.id}`)}
            aria-label={`${g.label} - ${g.books} books, ${g.students} students`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 18,
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <img
              src={g.image}
              alt={g.label}
              width={200}
              height={180}
              loading="eager"
              decoding="async"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />

            <div style={{ padding: '12px 14px 14px', width: '100%', textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>
                {g.label}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  fontSize: 11,
                  color: 'var(--text-secondary)',
                }}
              >
                <BookOpen size={11} />
                {g.books} books · {g.students}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
