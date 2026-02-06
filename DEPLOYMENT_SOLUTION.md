# 🔧 Solusi Error 404 di Vercel - Step by Step

## 📋 Diagnosis Masalah

Anda melihat error ini di browser:
```
404: NOT_FOUND
Code: NOT_FOUND
ID: sin1::qtd4d-1770343127607-c47ba15155b8
```

**Penyebab**: Vercel men-deploy dari root folder yang tidak memiliki homepage (`app/page.tsx`). Proyek lengkap ada di subfolder `akademi-profesional-indonesia/`.

---

## ✅ SOLUSI 1: Konfigurasi Root Directory (TERCEPAT - 5 Menit)

### Langkah 1: Login ke Vercel
1. Buka browser
2. Pergi ke https://vercel.com
3. Klik **Login**
4. Masukkan kredensial Anda

### Langkah 2: Pilih Project
1. Setelah login, Anda akan melihat dashboard
2. Cari project **"akademi-profesional-indonesia"** atau nama project Anda
3. Klik pada project tersebut

### Langkah 3: Masuk ke Settings
1. Di halaman project, lihat menu di atas
2. Klik tab **"Settings"**

### Langkah 4: Ubah Root Directory
1. Scroll ke bawah sampai menemukan bagian **"Build & Development Settings"**
2. Cari opsi **"Root Directory"**
3. Klik tombol **"Edit"** di sebelah kanan
4. Akan muncul input field
5. Ketik: `akademi-profesional-indonesia`
6. Klik **"Save"**

### Langkah 5: Redeploy
1. Klik tab **"Deployments"** di menu atas
2. Cari deployment terakhir (yang paling atas)
3. Klik tombol **"..."** (three dots) di sebelah kanan
4. Pilih **"Redeploy"**
5. Tunggu proses deployment selesai (biasanya 2-3 menit)

### Langkah 6: Verifikasi
1. Setelah deployment selesai, klik **"Visit"**
2. Website Anda seharusnya sudah muncul dengan benar
3. Test navigasi ke halaman lain

---

## ✅ SOLUSI 2: Pindahkan File ke Root (Alternatif)

Jika Solusi 1 tidak berhasil atau Anda tidak bisa akses dashboard:

### Opsi A: Menggunakan Script Otomatis

1. Buka PowerShell di folder project
2. Jalankan command:
```powershell
powershell -ExecutionPolicy Bypass -File move-to-root.ps1
```

### Opsi B: Manual

1. **Backup dulu**:
```bash
git add .
git commit -m "Backup before restructure"
```

2. **Pindahkan folder**:
```powershell
# Pindahkan app
Move-Item -Path "akademi-profesional-indonesia\app" -Destination "." -Force

# Pindahkan components
Move-Item -Path "akademi-profesional-indonesia\components" -Destination "." -Force

# Pindahkan lib
Move-Item -Path "akademi-profesional-indonesia\lib" -Destination "." -Force

# Pindahkan public
Move-Item -Path "akademi-profesional-indonesia\public" -Destination "." -Force

# Pindahkan config files
Move-Item -Path "akademi-profesional-indonesia\package.json" -Destination "." -Force
Move-Item -Path "akademi-profesional-indonesia\next.config.js" -Destination "." -Force
Move-Item -Path "akademi-profesional-indonesia\tsconfig.json" -Destination "." -Force
Move-Item -Path "akademi-profesional-indonesia\tailwind.config.ts" -Destination "." -Force
```

3. **Commit dan push**:
```bash
git add .
git commit -m "Fix: move files to root for Vercel deployment"
git push
```

4. **Vercel akan otomatis redeploy**

---

## 🔍 Troubleshooting

### Problem: Masih 404 setelah redeploy
**Solusi**:
1. Cek apakah Root Directory sudah benar di Settings
2. Coba clear cache browser (Ctrl + Shift + R)
3. Tunggu 5-10 menit untuk DNS propagation

### Problem: Build error di Vercel
**Solusi**:
1. Cek build logs di Vercel Dashboard
2. Pastikan `package.json` ada di root directory yang benar
3. Cek apakah semua dependencies terinstall

### Problem: Halaman tertentu 404
**Solusi**:
1. Pastikan file `page.tsx` ada di folder yang benar
2. Cek routing di Next.js App Router
3. Verifikasi struktur folder `app/`

---

## 📞 Butuh Bantuan?

Jika masih ada masalah:

1. **Vercel Support**:
   - https://vercel.com/support
   - Email: support@vercel.com

2. **Developer Support**:
   - WhatsApp: +62 857-2611-2001
   - Email: support@akademiprofesional.co.id

3. **Community**:
   - Vercel Discord: https://vercel.com/discord
   - Next.js GitHub: https://github.com/vercel/next.js/discussions

---

## ✨ Setelah Berhasil

Setelah website berhasil deploy:

1. ✅ Test semua halaman
2. ✅ Test form kontak
3. ✅ Test responsive design (mobile/tablet)
4. ✅ Test performance dengan Lighthouse
5. ✅ Setup custom domain (jika ada)
6. ✅ Setup analytics (Google Analytics, dll)

---

**Dibuat**: 6 Februari 2026
**Update Terakhir**: 6 Februari 2026
