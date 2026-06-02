import { BookOpen, CheckCircle, Map, Clock } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Free PDF Textbooks',
    desc: 'Access official MoE textbooks for Grades 9–12, completely free.',
    color: '#6366f1',
  },
  {
    icon: CheckCircle,
    title: 'Curriculum Aligned',
    desc: 'All materials follow the Ethiopian national curriculum standards.',
    color: '#10b981',
  },
  {
    icon: Map,
    title: 'Study Roadmap',
    desc: 'Follow a structured 5-phase plan from basics to exam prep.',
    color: '#f59e0b',
  },
  {
    icon: Clock,
    title: 'Learn Anytime',
    desc: 'Study at your own pace, anywhere, on any device.',
    color: '#06b6d4',
  },
];

export default function Features() {
  return (
    <section
      style={{
        padding: '60px 24px',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <p
        style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          marginBottom: 40,
          fontSize: 'clamp(13px, 2vw, 15px)',
        }}
      >
        Everything you need to succeed, in one place.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 16,
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="pattern-bg corner-accents"
            style={{
              padding: 24,
              borderRadius: 16,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'default',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${f.color}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 14,
              }}
            >
              <f.icon size={22} color={f.color} strokeWidth={2} />
            </div>
            <h2
              style={{
                fontSize: 15,
                fontWeight: 600,
                marginBottom: 6,
                color: 'var(--text)',
              }}
            >
              {f.title}
            </h2>
            <p
              style={{
                fontSize: 13,
                color: 'var(--text-muted)',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {f.desc}
            </p>
            <span className="corner-bl" />
            <span className="corner-br" />
          </div>
        ))}
      </div>
    </section>
  );
}
