# Akademi Profesional Indonesia - Website

Website SEO-friendly untuk Akademi Profesional Indonesia yang menyediakan pelatihan online & offline, jasa aplikasi custom, dan sertifikasi kompetensi profesional.

## 🚀 Fitur Utama

- **SEO Optimized**: Meta tags, sitemap, robots.txt, structured data
- **Responsive Design**: Mobile-first approach dengan Tailwind CSS
- **Modern UI/UX**: Desain inspired by SISI.id dengan blue gradient theme
- **Performance**: Next.js 14 dengan App Router untuk performa optimal
- **Accessibility**: Semantic HTML dan ARIA labels
- **Social Media Ready**: Open Graph dan Twitter Card metadata

## 🛠️ Teknologi

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Styling**: Tailwind CSS dengan custom design system
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)

## 📁 Struktur Project

```
akademi-profesional-indonesia/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout dengan SEO metadata
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   ├── pelatihan/         # Training page
│   ├── jasa-aplikasi/     # Custom apps page
│   ├── sertifikasi/       # Certification page
│   ├── tentang-kami/      # About page
│   └── kontak/            # Contact page
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section dengan carousel
│   ├── ServiceCards.tsx   # Service cards component
│   └── ChatWidget.tsx     # Floating chat widget
├── lib/                   # Utilities
│   └── supabase.ts        # Supabase client config
├── public/                # Static assets
│   └── images/            # Images dan icons
└── ...config files
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#2563eb to #60a5fa)
- **Secondary**: Gray scale (#f8fafc to #0f172a)
- **Accent**: White, gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, responsive sizing
- **Body**: Regular weight, readable line height

### Components
- **Cards**: Rounded corners, soft shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Forms**: Clean inputs, validation states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Supabase account (untuk database)

### Installation

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd akademi-profesional-indonesia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` dengan credentials Supabase:
   ```env
   NEXT_PUBLIC_SUPABASE_URL='your-supabase-url'
   NEXT_PUBLIC_SUPABASE_ANON_KEY='your-supabase-anon-key'
   NEXT_PUBLIC_SITE_URL='https://akademiprofesional.id'
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 SEO Features

### Meta Tags
- Dynamic page titles dan descriptions
- Open Graph untuk social media sharing
- Twitter Card metadata
- Canonical URLs
- Viewport dan theme color

### Structured Data
- Organization schema
- Service schemas
- Contact information
- Breadcrumb navigation

### Performance
- Image optimization dengan Next.js Image
- Lazy loading
- Code splitting
- Core Web Vitals optimization

### Technical SEO
- XML sitemap auto-generation
- Robots.txt configuration
- Mobile-first responsive design
- Fast loading times (< 3s)

## 🗄️ Database Schema (Supabase)

### Tables
- `services` - Layanan yang ditawarkan
- `testimonials` - Testimoni klien
- `blog_posts` - Artikel blog
- `contact_inquiries` - Form kontak submissions

### Setup Database
1. Buat project di Supabase
2. Copy URL dan anon key ke `.env.local`
3. Jalankan SQL schema (akan dibuat nanti)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository ke Vercel
2. Set environment variables di Vercel dashboard
3. Deploy otomatis dari main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 📱 Pages Overview

### Homepage (`/`)
- Hero section dengan carousel
- Service cards (3 layanan utama)
- CTA sections
- Chat widget

### Pelatihan (`/pelatihan`)
- Program pelatihan online & offline
- Features dan benefits
- Pricing information
- Registration CTA

### Jasa Aplikasi (`/jasa-aplikasi`)
- Custom app development services
- Target audience (UMKM, Corporate, Government)
- Development process
- Contact form

### Sertifikasi (`/sertifikasi`)
- Professional certification programs
- Benefits dan value proposition
- Certification process
- Pricing tiers

### Tentang Kami (`/tentang-kami`)
- Company overview
- Vision & mission
- Team information
- Values dan culture

### Kontak (`/kontak`)
- Contact form dengan validation
- Contact information
- Office hours
- Quick contact options

## 🎯 Target Audience

1. **UMKM** - Pelatihan dan aplikasi sederhana
2. **Corporate** - Enterprise solutions dan training
3. **Government** - E-government dan sertifikasi
4. **Professionals** - Individual training dan certification

## 📈 Analytics & Monitoring

### Recommended Tools
- Google Analytics 4
- Google Search Console
- Vercel Analytics
- Core Web Vitals monitoring

### Setup
1. Add Google Analytics tracking code
2. Verify domain di Search Console
3. Monitor performance metrics

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` untuk mengubah color palette

### Content
- Update metadata di `app/layout.tsx`
- Modify page content di masing-masing page
- Update images di `public/images/`

### Styling
- Customize components di `components/`
- Modify global styles di `app/globals.css`
- Update Tailwind config untuk design system

## 📞 Support

Untuk pertanyaan atau bantuan:
- Email: support@akademiprofesional.id
- Phone: +62 812-3456-7890
- Website: https://akademiprofesional.id

## 📄 License

© 2024 Akademi Profesional Indonesia. All rights reserved.