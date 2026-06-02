import { motion } from 'framer-motion';
import {
  Calculator,
  FlaskConical,
  Globe2,
  Languages,
  Cpu,
  BookOpen,
  PenTool,
  Beaker,
  Landmark,
  GraduationCap,
} from 'lucide-react';

const grade910 = [
  { icon: Calculator, title: 'Mathematics', color: '#0d9488' },
  { icon: Languages, title: 'English', color: '#6366f1' },
  { icon: BookOpen, title: 'Amharic', color: '#f59e0b' },
  { icon: FlaskConical, title: 'Physics', color: '#06b6d4' },
  { icon: Beaker, title: 'Chemistry', color: '#8b5cf6' },
  { icon: Cpu, title: 'Biology', color: '#10b981' },
  { icon: Globe2, title: 'History', color: '#ef4444' },
  { icon: Landmark, title: 'Geography', color: '#ec4899' },
];

const naturalStream = [
  { icon: Calculator, title: 'Mathematics', desc: 'Algebra, Calculus, Statistics', color: '#0d9488' },
  { icon: FlaskConical, title: 'Physics', desc: 'Mechanics, Thermodynamics, Waves', color: '#06b6d4' },
  { icon: Beaker, title: 'Chemistry', desc: 'Organic, Inorganic, Physical', color: '#8b5cf6' },
  { icon: Cpu, title: 'Biology', desc: 'Genetics, Ecology, Human Biology', color: '#10b981' },
];

const socialStream = [
  { icon: Globe2, title: 'History', desc: 'Ethiopian & World History', color: '#ef4444' },
  { icon: Landmark, title: 'Geography', desc: 'Physical & Human Geography', color: '#ec4899' },
  { icon: PenTool, title: 'Economics', desc: 'Micro & Macro Economics', color: '#f59e0b' },
  { icon: GraduationCap, title: 'Civics', desc: 'Ethics, Law, Citizenship', color: '#6366f1' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

function StreamCard({ stream }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -3, boxShadow: `0 12px 32px ${stream.color}12` }}
      whileTap={{ scale: 0.98 }}
      className="pattern-bg corner-accents"
      style={{
        '--accent': stream.color,
        padding: 24,
        borderRadius: 'var(--radius)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        transition: 'box-shadow 200ms ease-out, border-color 200ms ease-out',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = stream.color + '40')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 13,
            background: `${stream.color}10`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <stream.icon size={22} color={stream.color} />
        </div>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--primary)' }}>
            {stream.title}
          </h3>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
            {stream.desc}
          </p>
        </div>
      </div>
      <div
        style={{
          padding: '8px 12px',
          borderRadius: 10,
          background: `${stream.color}08`,
          border: `1px solid ${stream.color}15`,
          fontSize: 12,
          fontWeight: 600,
          color: stream.color,
          textAlign: 'center',
        }}
      >
        View Materials
      </div>
      <span className="corner-bl" />
      <span className="corner-br" />
    </motion.div>
  );
}

function SubjectPill({ subject }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -2, boxShadow: `0 8px 20px ${subject.color}15` }}
      whileTap={{ scale: 0.98 }}
      className="pattern-bg corner-accents"
      style={{
        '--accent': subject.color,
        padding: '14px 16px',
        borderRadius: 14,
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        transition: 'box-shadow 200ms ease-out, border-color 200ms ease-out',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = subject.color + '40')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: `${subject.color}10`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <subject.icon size={18} color={subject.color} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>
        {subject.title}
      </span>
      <span className="corner-bl" />
      <span className="corner-br" />
    </motion.div>
  );
}

export default function Materials() {
  return (
    <section
      id="materials"
      style={{
        padding: '80px 16px',
        maxWidth: 1120,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: 56 }}
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
          Study Materials
        </span>
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 700,
            marginTop: 8,
            color: 'var(--primary)',
          }}
        >
          Grade 9 – 12{' '}
          <span style={{ color: 'var(--accent)' }}>Curriculum</span>
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            marginTop: 12,
            maxWidth: 520,
            margin: '12px auto 0',
            lineHeight: 1.7,
            fontSize: 14,
          }}
        >
          Study materials for Ethiopian secondary education — from general subjects
          in Grades 9–10 to specialized Natural and Social streams in Grades 11–12.
        </p>
      </motion.div>

      {/* Grades 9-10 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: 48 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <div
            style={{
              padding: '5px 12px',
              borderRadius: 8,
              background: 'rgba(13,148,136,0.1)',
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--accent)',
            }}
          >
            Grades 9 – 10
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>General Curriculum</span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-30px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
            gap: 10,
          }}
        >
          {grade910.map((s) => (
            <SubjectPill key={s.title} subject={s} />
          ))}
        </motion.div>
      </motion.div>

      {/* Grades 11-12 Streams */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <div
            style={{
              padding: '5px 12px',
              borderRadius: 8,
              background: 'rgba(99,102,241,0.1)',
              fontSize: 12,
              fontWeight: 700,
              color: '#6366f1',
            }}
          >
            Grades 11 – 12
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Stream Specialization</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 16,
          }}
        >
          {/* Natural Stream */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-30px' }}
          >
            <div
              style={{
                padding: 24,
                borderRadius: 'var(--radius)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <FlaskConical size={20} color="#06b6d4" />
                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--primary)' }}>
                  Natural Science Stream
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {naturalStream.map((s) => (
                  <StreamCard key={s.title} stream={s} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Stream */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-30px' }}
          >
            <div
              style={{
                padding: 24,
                borderRadius: 'var(--radius)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <Globe2 size={20} color="#ef4444" />
                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--primary)' }}>
                  Social Science Stream
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {socialStream.map((s) => (
                  <StreamCard key={s.title} stream={s} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
