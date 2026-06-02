import { Mail, MessageCircle, Globe, Send, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '40px 16px 20px',
        background: 'var(--bg-card)',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
            }}
          >
            <GraduationCap size={18} color="white" />
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--primary)', fontFamily: 'Poppins, sans-serif' }}>
            Ethio<span style={{ color: 'var(--accent)' }}>Study</span>
          </span>
        </div>

        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 400 }}>
          Free study materials for Ethiopian students. Built with ❤️ for Grades 8–12.
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { icon: <Mail size={18} />, label: 'Email' },
            { icon: <MessageCircle size={18} />, label: 'WhatsApp' },
            { icon: <Send size={18} />, label: 'Telegram' },
            { icon: <Globe size={18} />, label: 'Website' },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'all 200ms',
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          maxWidth: 1120,
          margin: '24px auto 0',
          paddingTop: 16,
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} EthioStudy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
