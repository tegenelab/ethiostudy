import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section
      style={{
        padding: '60px 16px',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          padding: 'clamp(36px, 6vw, 52px) clamp(20px, 4vw, 40px)',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, #0d9488, #0f766e)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(13,148,136,0.25)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 160,
            height: 160,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -30,
            left: -30,
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ marginBottom: 16, display: 'inline-block' }}>
          <Rocket size={36} color="white" />
        </div>

        <h2
          style={{
            fontSize: 'clamp(20px, 3.5vw, 30px)',
            fontWeight: 700,
            color: 'white',
            marginBottom: 10,
          }}
        >
          Ready to Start Your Journey?
        </h2>
        <p
          style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 420,
            margin: '0 auto 24px',
            lineHeight: 1.7,
          }}
        >
          Join thousands of Ethiopian students who are already using EthioStudy
          to achieve their academic goals.
        </p>

        <motion.a
          href="#materials"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '12px 24px',
            borderRadius: 14,
            background: 'white',
            color: 'var(--accent-dark)',
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            transition: 'box-shadow 200ms ease-out',
          }}
        >
          Get Started Free
          <ArrowRight size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
