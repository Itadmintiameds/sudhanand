// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Satisfy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const satisfy = Satisfy({
  variable: "--font-satisfy", // Add variable for global use
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sudhanand Group",
  description: "Welcome to Sudhanand Group",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}