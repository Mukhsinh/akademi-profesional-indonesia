# Admin Dashboard Setup Guide

## Overview
Admin dashboard telah berhasil dibuat dengan fitur-fitur berikut:

### ✅ Database Schema
- **profiles table**: Menyimpan data profil user dengan role (user/admin)
- **articles table**: Menyimpan artikel blog dengan status published/draft
- **Row Level Security (RLS)**: Keamanan data dengan policy yang tepat
- **Triggers**: Auto-create profile dan update timestamps

### ✅ Authentication System
- **Supabase Auth**: Login/logout dengan email dan password
- **Role-based Access**: Hanya admin yang bisa akses dashboard
- **Middleware Protection**: Route `/admin` dilindungi dengan middleware
- **Auth Pages**: `/auth/login` dan `/auth/signup`

### ✅ Admin Dashboard Features
- **Dashboard Overview**: Statistik artikel dan pengguna
- **Article Management**: CRUD lengkap untuk artikel
  - Create: `/admin/articles/new`
  - Read: `/admin/articles` (list dengan filter)
  - Update: `/admin/articles/[id]/edit`
  - Delete: Hapus artikel dengan konfirmasi
- **Publish/Unpublish**: Toggle status artikel
- **Profile Management**: Edit profil admin

### ✅ Public Blog
- **Blog List**: `/blog` - Daftar artikel yang sudah dipublikasi
- **Article Detail**: `/blog/[slug]` - Halaman detail artikel
- **SEO Optimized**: Meta tags dan structured data

### ✅ Navigation Updates
- **Blog Link**: Ditambahkan ke header navigation
- **Admin Access**: Link admin dashboard untuk user dengan role admin

## Setup Instructions

### 1. Environment Variables
Buat file `.env.local` dengan konfigurasi Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL='your-supabase-project-url'
NEXT_PUBLIC_SUPABASE_ANON_KEY='your-supabase-anon-key'
NEXT_PUBLIC_SITE_URL='http://localhost:3000'
```

### 2. Database Setup
Database sudah dikonfigurasi via MCP Supabase dengan:
- Tables: `profiles`, `articles`
- RLS policies untuk keamanan
- Triggers untuk auto-create profile

### 3. Create Admin User
1. Daftar akun baru di `/auth/signup`
2. Login di `/auth/login`
3. Update role user menjadi 'admin' di database:
   ```sql
   UPDATE profiles SET role = 'admin' WHERE email = 'your-email@example.com';
   ```

### 4. Access Admin Dashboard
- Login dengan akun admin
- Klik "Admin" di navigation header
- Atau langsung ke `/admin`

## File Structure

```
akademi-profesional-indonesia/
├── lib/
│   ├── supabase.ts          # Supabase client configuration
│   └── auth.ts              # Auth utilities
├── middleware.ts            # Route protection
├── app/
│   ├── auth/               # Authentication pages
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── callback/route.ts
│   ├── admin/              # Admin dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── articles/
│   │   │   ├── page.tsx
│   │   │   ├── new/page.tsx
│   │   │   └── [id]/edit/page.tsx
│   │   └── profile/page.tsx
│   └── blog/               # Public blog
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── auth/               # Auth components
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── admin/              # Admin components
│   │   ├── Sidebar.tsx
│   │   ├── ArticleForm.tsx
│   │   ├── ArticleList.tsx
│   │   ├── StatsCard.tsx
│   │   └── ProfileForm.tsx
│   ├── blog/               # Blog components
│   │   ├── ArticleCard.tsx
│   │   └── ArticleContent.tsx
│   └── Header.tsx          # Updated with blog & admin links
```

## Features Usage

### Managing Articles
1. **Create Article**: 
   - Go to `/admin/articles`
   - Click "Tambah Artikel"
   - Fill form and save

2. **Edit Article**:
   - Go to `/admin/articles`
   - Click "Edit" on any article
   - Make changes and save

3. **Publish/Unpublish**:
   - Toggle "Publish" checkbox in article form
   - Or use "Publish/Unpublish" button in article list

4. **Delete Article**:
   - Click "Hapus" in article list
   - Confirm deletion

### Blog Display
- **Public Blog**: Visit `/blog` to see published articles
- **Article Detail**: Click any article to read full content
- **SEO**: Each article has proper meta tags

## Security Features
- **Route Protection**: Admin routes protected by middleware
- **Role Verification**: Only admin users can access dashboard
- **RLS Policies**: Database-level security for data access
- **Auth State Management**: Proper session handling

## Next Steps
1. Set up your Supabase project
2. Configure environment variables
3. Create your first admin user
4. Start creating articles!
5. Customize the design as needed

## Support
Jika ada pertanyaan atau masalah, silakan periksa:
- Console logs untuk error messages
- Supabase dashboard untuk database issues
- Network tab untuk API calls
