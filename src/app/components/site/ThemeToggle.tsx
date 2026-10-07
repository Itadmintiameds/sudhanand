'use client';

import { useTheme } from '../DarkModeContext';

/**
 * Light / dark switch. Which icon shows is decided in CSS off
 * <html data-theme>, so it is right from the first paint — before React
 * has read the saved theme.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Dark mode"
      aria-pressed={theme === 'dark'}
      className="pointer-events-auto relative w-11 h-11 shrink-0 rounded-full bg-paper/90 text-ink flex items-center justify-center transition-colors duration-300 hover:bg-ink hover:text-paper"
    >
      {/* Moon — shown in light mode */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="absolute transition-[opacity,transform] duration-500 dark:opacity-0 dark:-rotate-90 dark:scale-50"
      >
        <path
          d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5a8.5 8.5 0 1 0 10.8 10.8z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>

      {/* Sun — shown in dark mode */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="absolute opacity-0 rotate-90 scale-50 transition-[opacity,transform] duration-500 dark:opacity-100 dark:rotate-0 dark:scale-100"
      >
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
