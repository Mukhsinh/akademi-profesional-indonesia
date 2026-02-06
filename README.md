# PT. Akademi Profesional Indonesia

Website resmi PT. Akademi Profesional Indonesia - Platform terintegrasi untuk transformasi digital dan pelatihan strategis manajemen rumah sakit.

## 🚀 Fitur Utama

- 🏥 **Aplikasi Manajemen Rumah Sakit** - Sistem terintegrasi untuk operasional rumah sakit
- 👨‍⚕️ **Pelatihan Profesional** - Program pengembangan kompetensi SDM kesehatan
- 📊 **Konsultasi Strategis** - Pendampingan manajemen dan akreditasi
- 📱 **Responsive Design** - Optimal di semua perangkat
- ⚡ **Performance Optimized** - Built with Next.js 16 dan React 18
- 🎨 **Modern UI/UX** - Desain profesional dengan Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.3
- **Language**: TypeScript 5
- **Icons**: Lucide React
- **PDF Generation**: jsPDF

## 📋 Prerequisites

- Node.js 18.0.0 atau lebih tinggi
- npm 9.0.0 atau lebih tinggi

## 🔧 Installation

```bash
# Clone repository
git clone <repository-url>
cd akademi-profesional-indonesia

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📁 Project Structure

```
akademi-profesional-indonesia/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── artikel/             # Artikel pages
│   ├── kontak/              # Contact page
│   ├── layanan/             # Service pages
│   │   ├── clinical-pathway/
│   │   ├── manajemen-pengaduan/
│   │   ├── manajemen-risiko/
│   │   ├── manajemen-strategis/
│   │   ├── manajemen-survey-kepuasan/
│   │   ├── mmpi-2/
│   │   └── unit-cost/
│   ├── pelatihan/           # Training pages
│   │   └── jadwal/
│   └── tentang/             # About page
├── components/              # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                     # Utilities & helpers
│   ├── generateProposalPDF.ts
│   ├── generateTrainingBooklet.ts
│   ├── timelineData.ts
│   └── trainingData.ts
├── public/                  # Static assets
└── ...config files
```

## 🚀 Deployment ke Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Login dan klik "Add New Project"
4. Import repository GitHub Anda
5. Vercel akan otomatis mendeteksi Next.js
6. Klik "Deploy"

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables di Vercel

Tambahkan environment variables berikut di Vercel Dashboard:

- `NEXT_PUBLIC_SITE_URL`: URL production website
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Nomor WhatsApp untuk kontak
- `NEXT_PUBLIC_CONTACT_EMAIL`: Email kontak

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Check TypeScript types

# Maintenance
npm run clean        # Clean build cache
```

## 🔍 Build Optimization

Aplikasi ini sudah dioptimasi untuk production dengan:

- ✅ Image optimization dengan Next.js Image
- ✅ Code splitting otomatis
- ✅ Compression enabled
- ✅ React Strict Mode
- ✅ SWC minification
- ✅ Security headers
- ✅ SEO optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2024 PT. Akademi Profesional Indonesia. All rights reserved.

## 📞 Contact

- Website: [akademiprofesional.co.id](https://akademiprofesional.co.id)
- Email: info@akademiprofesional.co.id
- WhatsApp: +62 812-3456-7890

## 🤝 Contributing

Untuk kontribusi internal, silakan hubungi tim development.
