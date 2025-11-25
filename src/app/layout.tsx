import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Geist, Geist_Mono, Alumni_Sans_Pinstripe } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alumniSans = Alumni_Sans_Pinstripe({
  variable: "--font-alumni-sans-pinstripe",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Jonne Kaunisto",
  description: "Jonne's personal website",
  keywords: "Jonne, Jonne Kaunisto, Kaunisto, jonnekaunisto.com"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alumniSans.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-81FZ16WTY2"/>
    </html>
  );
}
