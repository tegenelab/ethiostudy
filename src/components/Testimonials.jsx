import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Meron T.',
    grade: 'Grade 12',
    rating: 5,
    text: 'EthioStudy helped me pass my Grade 12 exam with 95%! The PDFs are free and easy to download.',
    color: '#0d9488',
  },
  {
    name: 'Dawit K.',
    grade: 'Grade 11',
    rating: 5,
    text: 'The study roadmap kept me on track. I knew exactly what to study each week.',
    color: '#6366f1',
  },
  {
    name: 'Selam A.',
    grade: 'Grade 10',
    rating: 5,
    text: 'Best free resource for Ethiopian students. The WhatsApp community is so helpful!',
    color: '#f59e0b',
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
      ))}
    </div>
  );
}

function AvatarPlaceholder({ name, color }) {
  const initials = name.split(' ').map((n) => n[0]).join('');
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${color}, ${color}99)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: 16,
        fontFamily: 'Poppins, sans-serif',
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      style={{
        padding: '60px 24px',
        maxWidth: 1120,
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
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
          Testimonials
        </span>
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 700,
            marginTop: 8,
            color: 'var(--primary)',
          }}
        >
          What Our{' '}
          <span className="gradient-text">Students Say</span>
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            marginTop: 12,
            fontSize: 14,
          }}
        >
          Join 50,000+ Ethiopian students
        </p>
      </motion.div>

      {/* Desktop: 3 cards */}
      {!isMobile && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
              className="pattern-bg"
              style={{
                padding: 28,
                borderRadius: 18,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: `${t.color}15`,
                }}
              >
                <Quote size={40} />
              </div>

              <StarRating count={t.rating} />

              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  margin: '16px 0',
                  fontStyle: 'italic',
                }}
              >
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AvatarPlaceholder name={t.name} color={t.color} />
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--primary)',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: t.color,
                      fontWeight: 500,
                    }}
                  >
                    {t.grade}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Mobile: Carousel */}
      {isMobile && (
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pattern-bg"
              style={{
                padding: 24,
                borderRadius: 18,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: `${testimonials[current].color}15`,
                }}
              >
                <Quote size={36} />
              </div>

              <StarRating count={testimonials[current].rating} />

              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  margin: '16px 0',
                  fontStyle: 'italic',
                }}
              >
                "{testimonials[current].text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AvatarPlaceholder name={testimonials[current].name} color={testimonials[current].color} />
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--primary)',
                    }}
                  >
                    {testimonials[current].name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: testimonials[current].color,
                      fontWeight: 500,
                    }}
                  >
                    {testimonials[current].grade}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 16,
              marginTop: 20,
            }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                color: 'var(--text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === current ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: 'none',
                    background: i === current ? 'var(--accent)' : 'var(--border)',
                    cursor: 'pointer',
                    transition: 'all 200ms ease-out',
                  }}
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                color: 'var(--text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      )}
    </section>
  );
}
