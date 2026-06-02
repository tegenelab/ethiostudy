import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Star, Search, BookMarked, FolderClosed, FolderOpen, ArrowLeft } from 'lucide-react';

const folders = [
  { id: 'grade8', label: 'Grade 8', color: '#8b5cf6', count: 6 },
  { id: 'grade9', label: 'Grade 9', color: '#6366f1', count: 10 },
  { id: 'grade10', label: 'Grade 10', color: '#06b6d4', count: 3 },
  { id: 'grade11', label: 'Grade 11', color: '#f59e0b', count: 11 },
  { id: 'grade12', label: 'Grade 12', color: '#ef4444', count: 4 },
  { id: 'exam', label: 'Exam Preparation', color: '#f97316', count: 5 },
  { id: 'natural', label: 'Natural Stream', color: '#10b981', count: 5 },
  { id: 'social', label: 'Social Stream', color: '#ec4899', count: 4 },
];

const books = [
  { title: 'Grade 8 Amharic', author: 'MoE Textbook', folderId: 'grade8', rating: 4.3, pages: 180, color: '#8b5cf6' },
  { title: 'Grade 8 Mathematics', author: 'MoE Textbook', folderId: 'grade8', rating: 4.4, pages: 240, color: '#8b5cf6' },
  { title: 'Grade 8 English', author: 'MoE Textbook', folderId: 'grade8', rating: 4.3, pages: 190, color: '#8b5cf6' },
  { title: 'Grade 8 Science', author: 'MoE Textbook', folderId: 'grade8', rating: 4.4, pages: 220, color: '#8b5cf6' },
  { title: 'Grade 8 Social Studies', author: 'MoE Textbook', folderId: 'grade8', rating: 4.2, pages: 170, color: '#8b5cf6' },
  { title: 'Grade 8 Civics', author: 'MoE Textbook', folderId: 'grade8', rating: 4.2, pages: 150, color: '#8b5cf6' },
  { title: 'Grade 9 Amharic', author: 'MoE Textbook', folderId: 'grade9', rating: 4.4, pages: 190, color: '#6366f1', cover: 'https://kehulum.com/up_asset/b/291/kehulum17000662613aa345e0e0.png', pdfUrl: 'https://kehulum.com/books_asset/books_91/collection/grade-9-amharic-new-curriculum--student-textbook-kehulumcom1759933673b3a1.pdf' },
  { title: 'Grade 9 Biology', author: 'MoE Textbook', folderId: 'grade9', rating: 4.5, pages: 280, color: '#6366f1', cover: 'https://kehulum.com/up_asset/b/292/kehulum1700066941b553ce998a.png' },
  { title: 'Grade 9 Chemistry', author: 'MoE Textbook', folderId: 'grade9', rating: 4.4, pages: 260, color: '#6366f1', cover: 'https://kehulum.com/ups_asset/b/469/kehulumcom-1742642618010770c948.png' },
  { title: 'Grade 9 Civics', author: 'MoE Textbook', folderId: 'grade9', rating: 4.3, pages: 180, color: '#6366f1', cover: 'https://kehulum.com/ups_asset/b/481/kehulumcom-174264782609c4da4851.png' },
  { title: 'Grade 9 English', author: 'MoE Textbook', folderId: 'grade9', rating: 4.3, pages: 200, color: '#6366f1', cover: 'https://kehulum.com/ups_asset/b/470/kehulumcom-174264276534dd6d8722.png' },
  { title: 'Grade 9 History', author: 'MoE Textbook', folderId: 'grade9', rating: 4.4, pages: 220, color: '#6366f1', cover: 'https://kehulum.com/ups_asset/b/473/kehulumcom-1742644271548691bc62.png' },
  { title: 'Grade 9 Geography', author: 'MoE Textbook', folderId: 'grade9', rating: 4.4, pages: 240, color: '#6366f1', cover: 'https://kehulum.com/ups_asset/b/471/kehulumcom-17426429443154cfb6c7.png' },
  { title: 'Grade 9 HPE', author: 'MoE Textbook', folderId: 'grade9', rating: 4.2, pages: 160, color: '#6366f1', cover: 'https://kehulum.com/ups_asset/b/474/kehulumcom-174264453050a529343e.png' },
  { title: 'Grade 9 IT', author: 'MoE Textbook', folderId: 'grade9', rating: 4.5, pages: 200, color: '#6366f1', cover: 'https://kehulum.com/ups_asset/b/475/kehulumcom-174264496625a07a0669.png' },
  { title: 'Grade 9 Economics', author: 'MoE Textbook', folderId: 'grade9', rating: 4.3, pages: 180, color: '#6366f1', cover: 'https://kehulum.com/up_asset/b/295/kehulum1700073874846cdfbb7d.png' },
  { title: 'Grade 10 Mathematics', author: 'MoE Textbook', folderId: 'grade10', rating: 4.6, pages: 320, color: '#06b6d4' },
  { title: 'Grade 10 English', author: 'MoE Textbook', folderId: 'grade10', rating: 4.4, pages: 220, color: '#06b6d4' },
  { title: 'Grade 10 Physics', author: 'MoE Textbook', folderId: 'grade10', rating: 4.5, pages: 260, color: '#06b6d4' },
  { title: 'Grade 11 Amharic', author: 'MoE Textbook', folderId: 'grade11', rating: 4.5, pages: 240, color: '#f59e0b', cover: 'https://kehulum.com/ups_asset/b/416/kehulumcom1734351344694b577e90.png' },
  { title: 'Grade 11 Agriculture', author: 'MoE Textbook', folderId: 'grade11', rating: 4.4, pages: 220, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/315/kehulum170011602717f0c093dd.png' },
  { title: 'Grade 11 Biology', author: 'MoE Textbook', folderId: 'grade11', rating: 4.8, pages: 340, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/316/kehulum1700116467aed7867497.png' },
  { title: 'Grade 11 Chemistry', author: 'MoE Textbook', folderId: 'grade11', rating: 4.5, pages: 310, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/317/kehulum170011674174ee1b2b18.png' },
  { title: 'Grade 11 Economics', author: 'MoE Textbook', folderId: 'grade11', rating: 4.6, pages: 220, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/318/kehulum1700117037365f312a63.png' },
  { title: 'Grade 11 English', author: 'MoE Textbook', folderId: 'grade11', rating: 4.6, pages: 280, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/319/kehulum17001180039aa8027c68.png' },
  { title: 'Grade 11 Geography', author: 'MoE Textbook', folderId: 'grade11', rating: 4.4, pages: 260, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/320/kehulum1700118327db25ab5de4.png' },
  { title: 'Grade 11 History', author: 'MoE Textbook', folderId: 'grade11', rating: 4.5, pages: 240, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/321/kehulum1700118616884c7ac62d.png' },
  { title: 'Grade 11 Mathematics', author: 'MoE Textbook', folderId: 'grade11', rating: 4.7, pages: 340, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/323/kehulum17001201399d965dcf62.png' },
  { title: 'Grade 11 Physics', author: 'MoE Textbook', folderId: 'grade11', rating: 4.7, pages: 280, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/324/kehulum170012144699c87dbe79.png' },
  { title: 'Grade 11 IT', author: 'MoE Textbook', folderId: 'grade11', rating: 4.5, pages: 200, color: '#f59e0b', cover: 'https://kehulum.com/up_asset/b/322/kehulum1700118913b7d858f82a.png' },
  { title: 'Grade 12 Mathematics', author: 'MoE Textbook', folderId: 'grade12', rating: 4.7, pages: 360, color: '#ef4444' },
  { title: 'Grade 12 Physics', author: 'MoE Textbook', folderId: 'grade12', rating: 4.8, pages: 300, color: '#ef4444' },
  { title: 'Grade 12 History', author: 'MoE Textbook', folderId: 'grade12', rating: 4.5, pages: 250, color: '#ef4444' },
  { title: 'Grade 12 Geography', author: 'MoE Textbook', folderId: 'grade12', rating: 4.4, pages: 230, color: '#ef4444' },
  { title: 'National Exam Math Practice', author: 'MoE Textbook', folderId: 'exam', rating: 4.7, pages: 200, color: '#f97316', cover: '/exam-prep.webp' },
  { title: 'National Exam English Practice', author: 'MoE Textbook', folderId: 'exam', rating: 4.6, pages: 180, color: '#f97316', cover: '/exam-prep.webp' },
  { title: 'National Exam Amharic Practice', author: 'MoE Textbook', folderId: 'exam', rating: 4.5, pages: 160, color: '#f97316', cover: '/exam-prep.webp' },
  { title: 'University Entrance Exam Guide', author: 'MoE Textbook', folderId: 'exam', rating: 4.8, pages: 280, color: '#f97316', cover: '/exam-prep.webp' },
  { title: 'Exam Prep Study Strategies', author: 'MoE Textbook', folderId: 'exam', rating: 4.4, pages: 120, color: '#f97316', cover: '/exam-prep.webp' },
  { title: 'Physics (Natural)', author: 'MoE Textbook', folderId: 'natural', rating: 4.8, pages: 280, color: '#10b981' },
  { title: 'Chemistry (Natural)', author: 'MoE Textbook', folderId: 'natural', rating: 4.6, pages: 310, color: '#10b981' },
  { title: 'Biology (Natural)', author: 'MoE Textbook', folderId: 'natural', rating: 4.8, pages: 340, color: '#10b981' },
  { title: 'Mathematics (Natural)', author: 'MoE Textbook', folderId: 'natural', rating: 4.7, pages: 360, color: '#10b981' },
  { title: 'ICT (Natural)', author: 'MoE Textbook', folderId: 'natural', rating: 4.5, pages: 200, color: '#10b981' },
  { title: 'History (Social)', author: 'MoE Textbook', folderId: 'social', rating: 4.5, pages: 240, color: '#ec4899' },
  { title: 'Geography (Social)', author: 'MoE Textbook', folderId: 'social', rating: 4.4, pages: 260, color: '#ec4899' },
  { title: 'Economics (Social)', author: 'MoE Textbook', folderId: 'social', rating: 4.6, pages: 220, color: '#ec4899' },
  { title: 'Civics (Social)', author: 'MoE Textbook', folderId: 'social', rating: 4.3, pages: 200, color: '#ec4899' },
];

export default function BooksPage({ initialFolder = null }) {
  const [openFolder, setOpenFolder] = useState(initialFolder);
  const [search, setSearch] = useState('');

  const folderBooks = openFolder
    ? books.filter(
        (b) =>
          b.folderId === openFolder &&
          b.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const activeFolder = folders.find((f) => f.id === openFolder);

  return (
    <section
      style={{
        padding: '120px 16px 80px',
        maxWidth: 1120,
        margin: '0 auto',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
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
          Download Ethiopian secondary school textbooks — Grades 9 to 12, all streams.
        </p>
      </motion.div>

      {/* Breadcrumb */}
      {openFolder && (
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
            onClick={() => { setOpenFolder(null); setSearch(''); }}
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
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>{activeFolder?.label}</span>
        </motion.div>
      )}

      {/* Folders View */}
      {!openFolder && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
            gap: 14,
          }}
        >
          {folders.map((f, i) => (
            <motion.button
              key={f.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, boxShadow: `0 12px 32px ${f.color}15` }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpenFolder(f.id)}
              className="pattern-bg"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: 20,
                borderRadius: 16,
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 200ms ease-out, border-color 200ms ease-out',
                textAlign: 'left',
                fontFamily: 'Open Sans, sans-serif',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = f.color + '50')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
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
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Inside Folder */}
      {openFolder && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Search inside folder */}
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
              placeholder={`Search in ${activeFolder?.label}...`}
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
            {folderBooks.length} book{folderBooks.length !== 1 ? 's' : ''} in {activeFolder?.label}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))',
              gap: 14,
            }}
          >
            <AnimatePresence mode="popLayout">
              {folderBooks.map((book) => (
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

          {folderBooks.length === 0 && (
            <div style={{ textAlign: 'center', padding: 50, color: 'var(--text-muted)' }}>
              <Search size={36} style={{ marginBottom: 12, opacity: 0.3 }} />
              <p style={{ fontSize: 13 }}>No books found in this folder.</p>
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
}
