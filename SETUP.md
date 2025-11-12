# Setup Environment Variables

## Error "Failed to fetch" - Solusi

Error ini terjadi karena environment variables Supabase belum dikonfigurasi. Ikuti langkah-langkah berikut:

### 1. Buat File Environment

Buat file `.env.local` di root project dengan konten berikut:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Dapatkan Supabase Credentials

1. Buka [Supabase Dashboard](https://supabase.com/dashboard)
2. Pilih project Anda
3. Pergi ke **Settings** > **API**
4. Copy **Project URL** dan **anon public** key

### 3. Update Environment Variables

Ganti `your_supabase_project_url` dan `your_supabase_anon_key` dengan nilai yang sebenarnya:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Restart Development Server

```bash
npm run dev
```

## Database Setup

### 1. Jalankan Migration

Database sudah dikonfigurasi dengan migration yang telah dibuat. Pastikan:

1. Project Supabase sudah aktif
2. Environment variables sudah dikonfigurasi
3. Migration sudah dijalankan (sudah otomatis)

### 2. Verifikasi Tabel

Pastikan tabel berikut sudah dibuat:
- `profiles`
- `articles`
- `hero_slides`
- `services`
- `testimonials`
- `contact_inquiries`
- `contact_info`
- `site_settings`

## Troubleshooting

### Error: "Missing environment variable"
- Pastikan file `.env.local` sudah dibuat
- Pastikan nama variable sudah benar (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
- Restart development server

### Error: "Failed to fetch"
- Periksa koneksi internet
- Pastikan Supabase project aktif
- Periksa URL dan key Supabase

### Error: "Invalid API key"
- Pastikan menggunakan anon key, bukan service role key
- Pastikan key sudah di-copy dengan benar

## Testing

Setelah setup selesai, test dengan:

1. Buka `http://localhost:3000`
2. Cek console browser (tidak ada error)
3. Test form kontak
4. Test admin panel (jika sudah login)

## Production Setup

Untuk production, tambahkan environment variables di hosting platform:

- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Environment Variables
- Railway: Variables tab

Pastikan menggunakan URL production untuk `NEXT_PUBLIC_SITE_URL`.
