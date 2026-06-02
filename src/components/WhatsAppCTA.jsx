import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Daily PDF textbooks',
  'Exam tips & strategies',
  'Live support from teachers',
  'Past papers & solutions',
];

export default function WhatsAppCTA() {
  return (
    <section
      style={{
        padding: '0 24px',
        maxWidth: 1120,
        margin: '0 auto 60px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #25d366, #128c7e, #075e54)',
            padding: 'clamp(32px, 5vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Pattern overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.04) 10px, rgba(255,255,255,0.04) 20px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              flexWrap: 'wrap',
            }}
          >
            {/* Left content */}
            <div style={{ flex: '1 1 300px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(0,0,0,0.15)',
                  padding: '6px 14px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: 20,
                }}
              >
                <MessageCircle size={14} />
                Community
              </div>

              <h2
                style={{
                  fontSize: 'clamp(22px, 4vw, 34px)',
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}
              >
                Join 5,000+ Ethiopian
                <br />
                Students on WhatsApp
              </h2>

              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: 24,
                  maxWidth: 380,
                }}
              >
                Get free study materials, exam tips, and live support from teachers and peers.
              </p>

              {/* Benefits list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {benefits.map((b) => (
                  <div
                    key={b}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      color: 'white',
                      fontSize: 13,
                    }}
                  >
                    <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                    {b}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="https://whatsapp.com/channel/0029Vb6CoIzBPCNdlL2U3f3n"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'white',
                  color: '#075e54',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={18} />
                Join WhatsApp Channel →
              </motion.a>
            </div>

            {/* Right: phone mockup */}
            <div
              style={{
                flex: '0 0 auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 360,
                  borderRadius: 28,
                  background: 'rgba(0,0,0,0.2)',
                  border: '3px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MessageCircle size={28} color="#25d366" />
                </div>
                <div style={{ color: 'white', fontSize: 12, fontWeight: 600, textAlign: 'center' }}>
                  EthioStudy
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, textAlign: 'center' }}>
                  5,247 members
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 1,
                    background: 'rgba(255,255,255,0.15)',
                  }}
                />
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9, textAlign: 'center' }}>
                  Daily PDFs • Exam Tips • Live Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
