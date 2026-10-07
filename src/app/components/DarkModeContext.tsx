'use client';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/** localStorage key — the inline script in layout.tsx reads it before first paint. */
export const THEME_KEY = 'sg-theme';

// Mobile browser chrome tint, matched to each theme's canvas
const CHROME: Record<Theme, string> = { light: '#d4e5f5', dark: '#061420' };

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', CHROME[theme]);
};

/**
 * Light by default; the visitor's choice is remembered. Styling hangs off
 * `data-theme` on <html> (see globals.css), so nothing here re-renders the
 * page — state only feeds things like the toggle's aria-pressed.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // 'light' on the server and the first client render alike; the real theme
  // is already on <html> (inline script) and is picked up after mount.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const current: Theme =
      document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    applyTheme(current);
    setTheme(current);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage blocked (private mode) — the switch still works for this visit
    }

    const commit = () => {
      const root = document.documentElement;
      root.classList.add('theme-switching');
      applyTheme(next);
      setTheme(next);
      // Flush styles while transitions are off, then hand them back
      void window.getComputedStyle(root).color;
      requestAnimationFrame(() => root.classList.remove('theme-switching'));
    };

    // Cross-fade the whole page where supported instead of a hard cut
    if (
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document.startViewTransition(commit);
    } else {
      commit();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
