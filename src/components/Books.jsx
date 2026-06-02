import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, Star, Search, BookMarked } from 'lucide-react';

const categories = ['All', 'Engineering', 'Science', 'Business', 'Medicine', 'IT'];

const books = [
  { title: 'Engineering Mathematics', author: 'B.S. Grewal', category: 'Engineering', rating: 4.8, pages: 1320, color: '#0d9488', grade: 'University' },
  { title: 'Organic Chemistry', author: 'Morrison & Boyd', category: 'Science', rating: 4.7, pages: 1280, color: '#6366f1', grade: 'Grade 12' },
  { title: 'Principles of Economics', author: 'N. Gregory Mankiw', category: 'Business', rating: 4.6, pages: 880, color: '#f59e0b', grade: 'University' },
  { title: 'Human Anatomy & Physiology', author: 'Marieb & Hoehn', category: 'Medicine', rating: 4.9, pages: 1200, color: '#ef4444', grade: 'University' },
  { title: 'Introduction to Algorithms', author: 'Cormen et al.', category: 'IT', rating: 4.8, pages: 1312, color: '#8b5cf6', grade: 'University' },
  { title: 'Physics for Scientists', author: 'Halliday, Resnick', category: 'Science', rating: 4.7, pages: 1440, color: '#06b6d4', grade: 'Grade 12' },
  { title: 'Financial Accounting', author: 'Weygandt et al.', category: 'Business', rating: 4.5, pages: 780, color: '#10b981', grade: 'University' },
  { title: 'Microbiology', author: 'Tortora, Funke', category: 'Medicine', rating: 4.6, pages: 960, color: '#ec4899', grade: 'University' },
  { title: 'Data Structures & Algorithms', author: 'Mark Allen Weiss', category: 'IT', rating: 4.7, pages: 620, color: '#a855f7', grade: 'University' },
];

export default function Books() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = books.filter(
    (b) =>
      (filter === 'All' || b.category === filter) &&
      b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="books"
      style={{
        padding: '80px 16px',
        maxWidth: 1120,
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: 36 }}
      >
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
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 700,
            marginTop: 8,
            color: 'var(--primary)',
          }}
        >
          Free{' '}
          <span style={{ color: 'var(--accent)' }}>PDF Books</span>{' '}
          Collection
        </h2>
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
          Download thousands of textbooks and reference materials completely free.
        </p>
      </motion.div>

      {/* Search & Filter */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 28,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '9px 14px',
            borderRadius: 12,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            minWidth: 0,
            flex: '1 1 240px',
            maxWidth: 300,
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <Search size={15} color="var(--text-muted)" style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontSize: 13,
              width: '100%',
              fontFamily: 'Open Sans, sans-serif',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((c) => (
            <motion.button
              key={c}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setFilter(c)}
              style={{
                padding: '7px 14px',
                borderRadius: 10,
                border: '1px solid',
                borderColor: filter === c ? 'var(--accent)' : 'var(--border)',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
                background: filter === c ? 'var(--accent)' : 'var(--bg-card)',
                color: filter === c ? 'white' : 'var(--text-secondary)',
                transition: 'all 200ms ease-out',
                boxShadow: filter === c ? '0 2px 8px rgba(13,148,136,0.2)' : 'none',
              }}
            >
              {c}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Books Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))',
          gap: 14,
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((book) => (
            <motion.div
              key={book.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, boxShadow: 'var(--shadow-lg)' }}
              whileTap={{ scale: 0.98 }}
              className="pattern-bg corner-accents"
              style={{
                '--accent': book.color,
                borderRadius: 'var(--radius)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 200ms ease-out',
              }}
            >
              <div
                style={{
                  height: 90,
                  background: `linear-gradient(135deg, ${book.color}15, ${book.color}08)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                <BookMarked size={36} color={book.color} strokeWidth={1.5} />
                <span
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    padding: '2px 7px',
                    borderRadius: 6,
                    background: 'var(--bg-card)',
                    boxShadow: 'var(--shadow-sm)',
                    fontSize: 10,
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  {book.grade}
                </span>
              </div>

              <div style={{ padding: 16 }}>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 3,
                    color: 'var(--primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {book.title}
                </h3>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 8 }}>
                  by {book.author}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Star size={12} fill="#f59e0b" color="#f59e0b" />
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>
                      {book.rating}
                    </span>
                  </div>
                  <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                    {book.pages} pages
                  </span>
                </div>

                <div style={{ display: 'flex', gap: 6 }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: 10,
                      border: `1px solid ${book.color}30`,
                      background: `${book.color}08`,
                      color: book.color,
                      fontWeight: 600,
                      fontSize: 11,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                    }}
                  >
                    <Eye size={13} />
                    Preview
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: 10,
                      border: 'none',
                      background: book.color,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 11,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                      boxShadow: `0 2px 8px ${book.color}30`,
                    }}
                  >
                    <Download size={13} />
                    Download
                  </motion.button>
                </div>
              </div>
              <span className="corner-bl" />
              <span className="corner-br" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 50, color: 'var(--text-muted)' }}>
          <Search size={36} style={{ marginBottom: 12, opacity: 0.3 }} />
          <p style={{ fontSize: 13 }}>No books found matching your search.</p>
        </div>
      )}
    </section>
  );
}
