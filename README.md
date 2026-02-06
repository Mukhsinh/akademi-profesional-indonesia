# PT. Akademi Profesional Indonesia - Website

## ⚠️ PENTING: Perbaikan Error 404 di Vercel

Website ini mengalami error **404: NOT_FOUND** karena struktur folder yang salah. Proyek Next.js yang lengkap ada di folder `akademi-profesional-indonesia/`.

### Solusi Cepat (5 Menit)

**Opsi 1: Konfigurasi di Vercel Dashboard** ✅ RECOMMENDED

1. Login ke https://vercel.com/dashboard
2. Pilih project Anda
3. Klik **Settings** → **General**
4. Scroll ke **Root Directory**
5. Klik **Edit** dan masukkan: `akademi-profesional-indonesia`
6. Klik **Save**
7. Kembali ke **Deployments** → Klik **Redeploy**

**Opsi 2: Jalankan Script Otomatis**

```powershell
# Jalankan script ini untuk memindahkan file ke root
powershell -ExecutionPolicy Bypass -File move-to-root.ps1
```

Script akan:
- Backup code Anda
- Pindahkan semua file dari subfolder ke root
- Commit dan push otomatis

### Verifikasi

Setelah deployment selesai, cek:
- ✅ Homepage muncul (tidak 404)
- ✅ Menu navigasi berfungsi
- ✅ Halaman layanan, pelatihan, kontak dapat diakses

## 📁 Struktur Proyek

```
.
├── akademi-profesional-indonesia/  ← Proyek lengkap ada di sini
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   └── next.config.js
├── app/                            ← Folder lama (tidak lengkap)
├── components/                     ← Folder lama (tidak lengkap)
└── ...
```

## 🚀 Quick Start (Development)

```bash
cd akademi-profesional-indonesia
npm install
npm run dev
```

Buka http://localhost:3000

## 📚 Dokumentasi Lengkap

- [VERCEL_FIX_INSTRUCTIONS.md](./VERCEL_FIX_INSTRUCTIONS.md) - Panduan detail perbaikan deployment
- [akademi-profesional-indonesia/README.md](./akademi-profesional-indonesia/README.md) - Dokumentasi proyek lengkap

## 📞 Support

Jika masih ada masalah, hubungi:
- Email: support@akademiprofesional.co.id
- WhatsApp: +62 857-2611-2001
