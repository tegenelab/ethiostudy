import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: '/hero-main.webp',
    srcSet: '/hero-main-600.webp 600w, /hero-main-900.webp 900w, /hero-main.webp 1200w',
    sizes: '100vw',
  },
  {
    image: '/hero-students-2.webp',
    srcSet: '/hero-students-2-600.webp 600w, /hero-students-2-900.webp 900w, /hero-students-2.webp 1200w',
    sizes: '100vw',
  },
];

const headlines = [
  { en: 'Ace Your Exams', am: 'ኢምቲሃኑን አሸንፍ' },
  { en: 'Free Study Materials', am: 'ነፃ የትምህርት ሀገር' },
  { en: 'Your Future Starts Here', am: 'ወደፊትህ እዚህ ይጀምራል' },
];

export default function Hero({ onNavigate }) {
  const [current, setCurrent] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isAmharic, setIsAmharic] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 200);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAmharic((prev) => !prev);
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const headline = headlines[headlineIndex];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 16px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="pattern-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      <div
        style={{
          maxWidth: 800,
          width: '100%',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        {/* TEXT ABOVE */}
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: 20,
              background: 'var(--accent-subtle, rgba(13,148,136,0.1))',
              color: 'var(--accent)',
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            🇪🇹 #1 Ethiopian Study Platform
          </span>

          <h1
            style={{
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 8,
              color: 'var(--primary)',
            }}
          >
            <span
              style={{
                display: 'block',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 200ms ease-out, transform 200ms ease-out',
              }}
            >
              {isAmharic ? headline.am : headline.en}
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(14px, 2.5vw, 17px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            Free textbooks, past exams, and study guides for Grades 8–12.
          </p>
        </div>

        {/* IMAGE IN MIDDLE */}
        <div
          style={{
            width: '100%',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <img
            src={slides[current].image}
            srcSet={slides[current].srcSet}
            sizes={slides[current].sizes}
            alt="Ethiopian students studying"
            fetchPriority={current === 0 ? 'high' : 'auto'}
            loading={current === 0 ? 'eager' : 'lazy'}
            decoding="async"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
              opacity: visible ? 1 : 0,
              transition: 'opacity 200ms ease-out',
            }}
          />
        </div>

        {/* Slide indicators */}
        <div style={{ display: 'flex', gap: 8 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                background: i === current ? 'var(--accent)' : 'var(--border)',
                cursor: 'pointer',
                transition: 'width 200ms ease-out',
              }}
            />
          ))}
        </div>

        {/* BUTTONS BELOW */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => onNavigate('books')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              borderRadius: 12,
              border: 'none',
              background: 'var(--accent)',
              color: 'white',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Browse Textbooks
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => {
              document.querySelector('#roadmap')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '14px 28px',
              borderRadius: 12,
              border: '2px solid var(--border)',
              background: 'transparent',
              color: 'var(--primary)',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            View Roadmap
          </button>
        </div>
      </div>
    </section>
  );
}
