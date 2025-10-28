import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Akademi Profesional Indonesia - Mitra Transformasi Digital Profesional",
    template: "%s | Akademi Profesional Indonesia"
  },
  description: "Akademi Profesional Indonesia menyediakan pelatihan online & offline, jasa aplikasi custom untuk UMKM & Corporate, dan sertifikasi kompetensi profesional akuntansi manajemen.",
  keywords: [
    "pelatihan profesional",
    "aplikasi custom",
    "sertifikasi akuntansi",
    "transformasi digital",
    "UMKM",
    "corporate training",
    "kompetensi profesional",
    "akademi indonesia"
  ],
  authors: [{ name: "Akademi Profesional Indonesia" }],
  creator: "Akademi Profesional Indonesia",
  publisher: "Akademi Profesional Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://akademiprofesional.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Akademi Profesional Indonesia',
    title: 'Akademi Profesional Indonesia - Mitra Transformasi Digital Profesional',
    description: 'Pelatihan profesional, jasa aplikasi custom, dan sertifikasi kompetensi untuk UMKM, Corporate, dan Lembaga Pemerintah.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akademi Profesional Indonesia - Transformasi Digital Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akademi Profesional Indonesia - Mitra Transformasi Digital Profesional',
    description: 'Pelatihan profesional, jasa aplikasi custom, dan sertifikasi kompetensi untuk UMKM, Corporate, dan Lembaga Pemerintah.',
    images: ['/images/og-image.jpg'],
    creator: '@akademiprofesional',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Akademi Profesional Indonesia',
    alternateName: 'API',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://akademiprofesional.id',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://akademiprofesional.id'}/images/logo.png`,
    description: 'Akademi Profesional Indonesia menyediakan pelatihan online & offline, jasa aplikasi custom untuk UMKM & Corporate, dan sertifikasi kompetensi profesional akuntansi manajemen.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressLocality: 'Jakarta',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-812-3456-7890',
      contactType: 'customer service',
      availableLanguage: 'Indonesian',
    },
    sameAs: [
      'https://www.linkedin.com/company/akademi-profesional-indonesia',
      'https://www.instagram.com/akademiprofesional',
      'https://www.facebook.com/akademiprofesional',
    ],
    service: [
      {
        '@type': 'Service',
        name: 'Pelatihan Online & Offline',
        description: 'Program pelatihan komprehensif untuk meningkatkan keterampilan profesional',
      },
      {
        '@type': 'Service',
        name: 'Jasa Aplikasi Custom',
        description: 'Solusi teknologi terdepan untuk UMKM, Corporate, dan Lembaga Pemerintah',
      },
      {
        '@type': 'Service',
        name: 'Sertifikasi Kompetensi',
        description: 'Program sertifikasi profesional akuntansi manajemen yang diakui industri',
      },
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <ChatWidget />
      </body>
    </html>
  );
}