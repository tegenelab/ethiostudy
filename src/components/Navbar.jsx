import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ page, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Books', href: '#books', id: 'books' },
  ];

  const handleNav = (link) => {
    setOpen(false);
    if (link.id === 'books') {
      onNavigate('books');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate('home');
      setTimeout(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 12,
        left: 12,
        right: 12,
        zIndex: 1000,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        background: scrolled
          ? 'rgba(248,250,252,0.85)'
          : 'rgba(248,250,252,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 'var(--radius)',
        boxShadow: scrolled ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        border: '1px solid var(--border-light)',
        transition: 'background 200ms ease-out, box-shadow 200ms ease-out',
      }}
    >
      <style>{`
        [data-theme="dark"] nav {
          background: ${scrolled ? 'rgba(15,23,42,0.85)' : 'rgba(15,23,42,0.6)'} !important;
        }
        .nav-link {
          position: relative;
          padding: 8px 4px;
          margin: 0 10px;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 13;
          cursor: pointer;
          font-family: 'Open Sans', sans-serif;
          transition: color 200ms ease-out;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          width: 18px;
          height: 2px;
          background: var(--accent);
          border-radius: 2px;
          transform: translateX(-50%) scaleX(0);
          transition: transform 200ms ease-out, opacity 200ms ease-out;
          opacity: 0;
        }
        .nav-link:hover::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
        }
        .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
        }
        .nav-link:hover { color: var(--accent); }
        .nav-link.active { color: var(--accent); }
        @media (max-width: 640px) {
          nav { top: 8px !important; left: 8px !important; right: 8px !important; height: 56px !important; padding: 0 12px !important; }
        }
      `}</style>

      <a
        href="#"
        aria-label="EthioStudy - Home"
        onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo({ top: 0 }); }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #0d9488, #0f766e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(13,148,136,0.25)',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/>
          </svg>
        </div>
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 17,
            color: 'var(--primary)',
            whiteSpace: 'nowrap',
          }}
        >
          Ethio<span style={{ color: 'var(--accent)' }}>Study</span>
        </span>
      </a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
        {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l)}
              aria-label={`Navigate to ${l.label}`}
              className={`nav-link${page === l.id && ((l.id === 'books' && page === 'books') || (l.id === 'home' && page === 'home')) ? ' active' : ''}`}
            >
              {l.label}
            </button>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Right Side */}
      <div className="mobile-right" style={{ display: 'none', alignItems: 'center', gap: 8 }}>
        <ThemeToggle />
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--primary)',
            cursor: 'pointer',
            padding: 6,
            borderRadius: 8,
          }}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 68,
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            padding: 12,
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l)}
              aria-label={`Navigate to ${l.label}`}
              className="nav-link"
              style={{
                padding: '12px 14px',
                borderRadius: 12,
                textAlign: 'left',
                fontSize: 15,
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-right { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
