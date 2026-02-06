# Perbaikan Deployment Vercel

## Masalah
Error deployment Vercel:
```
npm error code ENOENT
npm error syscall open
npm error path /vercel/path0/package.json
npm error errno -2
npm error enoent Could not read package.json
```

## Penyebab
Struktur repository memiliki project Next.js di dalam subfolder `akademi-profesional-indonesia/`, bukan di root repository. Vercel mencari `package.json` di root dan tidak menemukannya.

## Solusi
Menambahkan konfigurasi `rootDirectory` di file `vercel.json` yang berada di root repository:

```json
{
  "rootDirectory": "akademi-profesional-indonesia",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

## File yang Diubah
- ✅ `vercel.json` (di root repository) - Updated dengan `rootDirectory` config
- ✅ Semua perubahan sudah di-commit dan di-push ke GitHub

## Langkah Selanjutnya
1. Vercel akan otomatis trigger deployment baru setelah push ke GitHub
2. Atau manual trigger redeploy di Vercel dashboard
3. Deployment seharusnya berhasil karena Vercel sekarang tahu lokasi project yang benar

## Verifikasi
Setelah deployment, cek:
- ✅ Build berhasil tanpa error ENOENT
- ✅ Website dapat diakses
- ✅ Semua fitur berfungsi normal
