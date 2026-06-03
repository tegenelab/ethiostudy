'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        border: '1px solid var(--border)',
        background: 'var(--bg-card)',
        color: 'var(--text)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-sm)',
        transition: 'transform 150ms ease-out, background 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out',
      }}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
