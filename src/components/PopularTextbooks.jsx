import { Download, TrendingUp } from 'lucide-react';

const textbooks = [
  {
    subject: 'Mathematics',
    grade: 'Grade 11',
    gradeId: 'grade-11',
    downloads: '15,000',
    color: '#f59e0b',
    cover: 'https://kehulum.com/up_asset/b/323/kehulum17001201399d965dcf62.png',
  },
  {
    subject: 'English',
    grade: 'Grade 11',
    gradeId: 'grade-11',
    downloads: '12,500',
    color: '#f59e0b',
    cover: 'https://kehulum.com/up_asset/b/319/kehulum17001180039aa8027c68.png',
  },
  {
    subject: 'Physics',
    grade: 'Grade 11',
    gradeId: 'grade-11',
    downloads: '10,200',
    color: '#f59e0b',
    cover: 'https://kehulum.com/up_asset/b/324/kehulum170012144699c87dbe79.png',
  },
  {
    subject: 'Chemistry',
    grade: 'Grade 11',
    gradeId: 'grade-11',
    downloads: '9,800',
    color: '#f59e0b',
    cover: 'https://kehulum.com/up_asset/b/317/kehulum170011674174ee1b2b18.png',
  },
];

export default function PopularTextbooks({ onNavigate }) {
  return (
    <section
      style={{
        padding: '60px 16px',
        maxWidth: 1120,
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 1.5 }}>
          Most Popular
        </span>
        <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', fontWeight: 700, marginTop: 8, color: 'var(--primary)' }}>
          Most Downloaded <span className="gradient-text">Textbooks</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: 12, fontSize: 14 }}>
          Free PDFs trusted by thousands of students
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 16,
        }}
      >
        {textbooks.map((book) => (
          <div
            key={book.subject}
            style={{
              borderRadius: 16,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            onClick={() => onNavigate('books', book.gradeId)}
          >
            {/* Book cover */}
            <div
              style={{
                width: '100%',
                height: 180,
                background: `linear-gradient(135deg, ${book.color}15, ${book.color}05)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={book.cover}
                alt={`${book.subject} ${book.grade}`}
                loading="lazy"
                decoding="async"
                style={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div style={{ padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)' }}>{book.subject}</div>
                <span style={{ fontSize: 10, fontWeight: 600, color: book.color, background: `${book.color}15`, padding: '3px 8px', borderRadius: 6 }}>
                  {book.grade}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-secondary)', fontSize: 12 }}>
                  <Download size={12} />
                  {book.downloads}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: '#22c55e', fontSize: 11, fontWeight: 600 }}>
                  <TrendingUp size={11} />
                  Popular
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
