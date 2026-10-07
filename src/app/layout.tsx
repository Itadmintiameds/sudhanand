// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/DarkModeContext';
import SiteChrome from './components/site/SiteChrome';

// Tight, high-contrast grotesk — holds up at 18svw without going novelty.
const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sudhanand Group',
  description:
    'A diversified group across healthcare, pharmaceuticals, technology, hospitality, sport and real estate. Built on trust, driven by innovation, growing with purpose.',
  icons: {
    icon: '/logo.svg',
  },
};

// Tints the mobile browser chrome to the page canvas
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f3f5f8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs during HTML parse: repeat visits in a session skip the
            preloader curtain instead of showing it until hydration, and a
            saved dark theme applies before first paint (no light flash).
            The theme key must match THEME_KEY in DarkModeContext. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;try{if(sessionStorage.getItem('sg-preloaded')==='1')d.dataset.preloaded='1'}catch(e){}try{d.dataset.theme=localStorage.getItem('sg-theme')==='dark'?'dark':'light'}catch(e){}})()",
          }}
        />
      </head>
      <body className={`${archivo.variable} antialiased`}>
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
