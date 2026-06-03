'use client';

import { useRef, useState, useEffect } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  BookOpen,
  Layers,
  Lightbulb,
  ClipboardCheck,
  Trophy,
  GraduationCap,
} from 'lucide-react';

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Foundation Building',
    duration: 'Month 1-3',
    icon: BookOpen,
    color: '#0d9488',
    tasks: [
      { text: 'Master core Mathematics concepts', done: true },
      { text: 'Build strong English proficiency', done: true },
      { text: 'Complete Grade 9-10 review', done: true },
      { text: 'Develop consistent study habits', done: false },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Deep Dive Learning',
    duration: 'Month 4-6',
    icon: Layers,
    color: '#6366f1',
    tasks: [
      { text: 'Advanced topics in chosen field', done: true },
      { text: 'Solve past national exam papers', done: false },
      { text: 'Join study groups & discussions', done: false },
      { text: 'Start specialized subject focus', done: false },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Practice & Application',
    duration: 'Month 7-9',
    icon: Lightbulb,
    color: '#f59e0b',
    tasks: [
      { text: 'Take weekly practice tests', done: false },
      { text: 'Review and analyze mistakes', done: false },
      { text: 'Work on time management skills', done: false },
      { text: 'Seek mentorship & guidance', done: false },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Exam Preparation',
    duration: 'Month 10-12',
    icon: ClipboardCheck,
    color: '#ef4444',
    tasks: [
      { text: 'Intensive revision of all subjects', done: false },
      { text: 'Full-length mock exams weekly', done: false },
      { text: 'Focus on weak areas identified', done: false },
      { text: 'Final review & confidence building', done: false },
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Final Review',
    duration: 'Month 13-14',
    icon: GraduationCap,
    color: '#ec4899',
    tasks: [
      { text: 'Review all high-yield topics', done: false },
      { text: 'Take timed practice exams', done: false },
      { text: 'Relax and manage stress', done: false },
      { text: 'Prepare exam day essentials', done: false },
    ],
  },
  {
    phase: 'Final',
    title: 'Success & Beyond',
    duration: 'Graduation',
    icon: Trophy,
    color: '#10b981',
    tasks: [
      { text: 'Ace your entrance examinations', done: false },
      { text: 'Apply to top universities', done: false },
      { text: 'Secure scholarship opportunities', done: false },
      { text: 'Begin your academic journey!', done: false },
    ],
  },
];

function useInView(ref, margin = '-100px') {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { rootMargin: margin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, margin]);
  return inView;
}

export default function Roadmap() {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef);

  return (
    <section
      id="roadmap"
      style={{
        padding: '80px 16px',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: 1.5,
          }}
        >
          Study Roadmap
        </span>
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 700,
            marginTop: 8,
            color: 'var(--primary)',
          }}
        >
          Your Path to{' '}
          <span style={{ color: 'var(--accent)' }}>Success</span>
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
          Follow our structured 12-month study plan designed to help you
          succeed in national exams and university entrance.
        </p>
      </div>

      <div style={{ position: 'relative' }} ref={lineRef}>
        <div
          className="roadmap-line"
          style={{
            position: 'absolute',
            left: 20,
            top: 0,
            width: 2,
            height: isInView ? '100%' : '0%',
            background: 'linear-gradient(to bottom, #0d9488, #6366f1, #f59e0b, #ef4444, #ec4899, #10b981)',
            borderRadius: 1,
            opacity: 0.25,
            transition: 'height 1.2s ease-out',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {roadmap.map((step) => (
            <div
              key={step.phase}
              style={{
                display: 'flex',
                gap: 16,
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: 'var(--bg-card)',
                  border: `2px solid ${step.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 1,
                  boxShadow: `0 2px 8px ${step.color}15`,
                }}
              >
                <step.icon size={20} color={step.color} />
              </div>

              <div
                className="pattern-bg"
                style={{
                  flex: 1,
                  padding: 20,
                  borderRadius: 'var(--radius)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'default',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 10, left: 10,
                    width: 6, height: 6, borderRadius: 1,
                    background: step.color, opacity: 0.4,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 10, right: 10,
                    width: 6, height: 6, borderRadius: 1,
                    background: step.color, opacity: 0.4,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 10, left: 10,
                    width: 6, height: 6, borderRadius: 1,
                    background: step.color, opacity: 0.4,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 10, right: 10,
                    width: 6, height: 6, borderRadius: 1,
                    background: step.color, opacity: 0.4,
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 4,
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: step.color,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      padding: '2px 7px',
                      borderRadius: 5,
                      background: `${step.color}10`,
                    }}
                  >
                    {step.phase}
                  </span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      fontSize: 10,
                      color: 'var(--text-muted)',
                    }}
                  >
                    <Clock size={10} />
                    {step.duration}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 12,
                    color: 'var(--primary)',
                  }}
                >
                  {step.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {step.tasks.map((task) => (
                    <div
                      key={task.text}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 7,
                      }}
                    >
                      {task.done ? (
                        <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0 }} />
                      ) : (
                        <Circle size={14} color="var(--border)" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                      )}
                      <span
                        style={{
                          fontSize: 12,
                          color: task.done ? 'var(--text-muted)' : 'var(--text-secondary)',
                          textDecoration: task.done ? 'line-through' : 'none',
                        }}
                      >
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .roadmap-line { left: 14px !important; }
        }
      `}</style>
    </section>
  );
}
