# Panduan Memperbaiki Error 404 di Vercel

## Masalah
Deployment Vercel menampilkan error **404: NOT_FOUND** karena struktur proyek memiliki dua folder Next.js:
1. **Root level** (`/app`, `/components`) - tidak memiliki `page.tsx`
2. **Subfolder** (`/akademi-profesional-indonesia/`) - proyek lengkap dengan semua halaman

Vercel men-deploy dari root level yang tidak memiliki homepage, sehingga muncul error 404.

## Solusi 1: Konfigurasi Root Directory di Vercel Dashboard (RECOMMENDED)

### Langkah-langkah:

1. **Login ke Vercel Dashboard**
   - Buka https://vercel.com/dashboard
   - Login dengan akun Anda

2. **Pilih Project**
   - Klik project "akademi-profesional-indonesia"

3. **Masuk ke Settings**
   - Klik tab "Settings" di menu atas

4. **Ubah Root Directory**
   - Scroll ke bagian "Build & Development Settings"
   - Cari opsi "Root Directory"
   - Klik "Edit"
   - Masukkan: `akademi-profesional-indonesia`
   - Klik "Save"

5. **Redeploy**
   - Kembali ke tab "Deployments"
   - Klik tombol "..." pada deployment terakhir
   - Pilih "Redeploy"
   - Tunggu proses deployment selesai

## Solusi 2: Pindahkan File ke Root (Alternatif)

Jika tidak bisa mengakses dashboard, pindahkan semua file dari `akademi-profesional-indonesia/` ke root:

```bash
# Backup dulu
git add .
git commit -m "Backup before restructure"

# Pindahkan file
Move-Item -Path "akademi-profesional-indonesia\*" -Destination "." -Force

# Hapus folder kosong
Remove-Item -Path "akademi-profesional-indonesia" -Recurse -Force

# Commit dan push
git add .
git commit -m "Restructure: move files to root"
git push
```

## Solusi 3: Gunakan vercel.json (Sudah Diterapkan)

File `vercel.json` di root sudah dikonfigurasi dengan benar. Pastikan file ini ada dan berisi:

```json
{
  "headers": [...],
  "rewrites": [...]
}
```

## Verifikasi Setelah Deploy

1. Buka URL deployment Anda
2. Pastikan homepage muncul dengan benar
3. Test navigasi ke halaman lain:
   - `/tentang`
   - `/layanan`
   - `/pelatihan`
   - `/kontak`

## Troubleshooting

### Jika masih error 404:
1. Cek apakah file `app/page.tsx` ada di root
2. Pastikan `package.json` ada di root
3. Cek build logs di Vercel Dashboard

### Jika build error:
1. Hapus folder `.next` lokal
2. Jalankan `npm install`
3. Jalankan `npm run build` untuk test lokal
4. Push ke Git jika build berhasil

## Kontak Support

Jika masalah masih berlanjut, hubungi:
- Vercel Support: https://vercel.com/support
- Email: support@vercel.com
