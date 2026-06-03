'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Star, Search, BookMarked, ArrowLeft } from 'lucide-react';

export default function BooksFolderView({ folder, books }) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      style={{
        padding: '120px 16px 80px',
        maxWidth: 1120,
        margin: '0 auto',
        minHeight: '100vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: 40 }}
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
          {folder.label}{' '}
          <span style={{ color: 'var(--accent)' }}>Textbooks</span>
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
          Free PDF textbooks for Ethiopian {folder.label.toLowerCase()} students.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 20,
          fontSize: 13,
          color: 'var(--text-muted)',
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/books')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            border: 'none',
            background: 'none',
            color: 'var(--accent)',
            fontWeight: 600,
            fontSize: 13,
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: 6,
            fontFamily: 'Open Sans, sans-serif',
          }}
        >
          <ArrowLeft size={14} />
          All Folders
        </motion.button>
        <span>/</span>
        <span style={{ color: 'var(--text)', fontWeight: 600 }}>{folder.label}</span>
      </motion.div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '9px 14px',
          borderRadius: 12,
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          maxWidth: 300,
          boxShadow: 'var(--shadow-sm)',
          marginBottom: 20,
        }}
      >
        <Search size={15} color="var(--text-muted)" style={{ flexShrink: 0 }} />
        <input
          type="text"
          placeholder={`Search in ${folder.label}...`}
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

      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>
        {filtered.length} book{filtered.length !== 1 ? 's' : ''} in {folder.label}
      </div>

      <div
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
                borderRadius: 16,
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
                  height: 160,
                  background: book.cover ? 'none' : `linear-gradient(135deg, ${book.color}15, ${book.color}08)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid var(--border-light)',
                  overflow: 'hidden',
                }}
              >
                {book.cover ? (
                  <img
                    src={book.cover}
                    alt={book.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <BookMarked size={36} color={book.color} strokeWidth={1.5} />
                )}
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
                    onClick={() => book.pdfUrl && window.open(book.pdfUrl, '_blank')}
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
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 50, color: 'var(--text-muted)' }}>
          <Search size={36} style={{ marginBottom: 12, opacity: 0.3 }} />
          <p style={{ fontSize: 13 }}>No books found in this folder.</p>
        </div>
      )}
    </section>
  );
}
