import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PT. Akademi Profesional Indonesia - Transformasi Digital Rumah Sakit',
    template: '%s | PT. Akademi Profesional Indonesia',
  },
  description: 'Platform terintegrasi untuk efisiensi operasional dan peningkatan kualitas layanan kesehatan melalui teknologi mutakhir dan pengembangan SDM profesional.',
  keywords: [
    'rumah sakit',
    'manajemen rumah sakit',
    'sistem informasi kesehatan',
    'pelatihan medis',
    'akreditasi rumah sakit',
    'transformasi digital',
    'clinical pathway',
    'manajemen risiko',
    'unit cost',
    'MMPI-2',
  ],
  authors: [{ name: 'PT. Akademi Profesional Indonesia' }],
  creator: 'PT. Akademi Profesional Indonesia',
  publisher: 'PT. Akademi Profesional Indonesia',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://akademiprofesional.co.id'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    title: 'PT. Akademi Profesional Indonesia - Transformasi Digital Rumah Sakit',
    description: 'Platform terintegrasi untuk efisiensi operasional dan peningkatan kualitas layanan kesehatan melalui teknologi mutakhir dan pengembangan SDM profesional.',
    siteName: 'PT. Akademi Profesional Indonesia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Akademi Profesional Indonesia - Transformasi Digital Rumah Sakit',
    description: 'Platform terintegrasi untuk efisiensi operasional dan peningkatan kualitas layanan kesehatan melalui teknologi mutakhir dan pengembangan SDM profesional.',
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
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
