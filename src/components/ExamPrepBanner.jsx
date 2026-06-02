import { useState, useEffect, useMemo } from 'react';
import { Clock, Zap, FileText, Video } from 'lucide-react';

function useCountdown(targetMs) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetMs - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTime(calc());
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return time;
}

export default function ExamPrepBanner({ onNavigate }) {
  const examDateMs = useMemo(() => new Date('2026-05-15T08:00:00').getTime(), []);
  const { days, hours, minutes, seconds } = useCountdown(examDateMs);

  const stats = [
    { icon: <Zap size={14} />, value: '95%', label: 'Success Rate' },
    { icon: <FileText size={14} />, value: '40+', label: 'Past Papers' },
    { icon: <Video size={14} />, value: 'Live', label: 'Mock Exams' },
  ];

  return (
    <section style={{ padding: '0 16px', maxWidth: 1120, margin: '0 auto 60px' }}>
      <div
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0d9488, #0f766e)',
          padding: '28px 20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(0,0,0,0.15)',
              padding: '5px 12px',
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 600,
              color: 'white',
              marginBottom: 16,
            }}
          >
            <Clock size={12} />
            Limited Time
          </div>

          <h2 style={{ fontSize: 'clamp(20px, 5vw, 30px)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 10 }}>
            {days} Days Until National Exam
          </h2>

          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginBottom: 20 }}>
            Grade 12 & Grade 10 — start preparing now.
          </p>

          {/* Countdown */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {[
              { val: days, label: 'Days' },
              { val: hours, label: 'Hours' },
              { val: minutes, label: 'Min' },
              { val: seconds, label: 'Sec' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  textAlign: 'center',
                  minWidth: 52,
                  flex: '1 1 auto',
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1 }}>
                  {item.val}
                </div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', marginTop: 3, textTransform: 'uppercase' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'white' }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{stat.value}</div>
                  <div style={{ fontSize: 9, opacity: 0.8 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigate('books', 'exam-prep')}
            style={{
              background: 'white',
              color: '#0f766e',
              border: 'none',
              padding: '12px 24px',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
              width: '100%',
              maxWidth: 280,
            }}
          >
            Start Preparing Now →
          </button>
        </div>
      </div>
    </section>
  );
}
