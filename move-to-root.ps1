# Script untuk memindahkan file dari akademi-profesional-indonesia ke root
# Jalankan dengan: powershell -ExecutionPolicy Bypass -File move-to-root.ps1

Write-Host "=== Memindahkan File ke Root ===" -ForegroundColor Green
Write-Host ""

# Backup dulu
Write-Host "1. Membuat backup..." -ForegroundColor Yellow
git add .
git commit -m "Backup before restructure"

# Pindahkan file-file penting
Write-Host "2. Memindahkan file..." -ForegroundColor Yellow

$sourceDir = "akademi-profesional-indonesia"
$filesToMove = @(
    "app",
    "components",
    "lib",
    "public",
    "package.json",
    "package-lock.json",
    "next.config.js",
    "tsconfig.json",
    "tailwind.config.ts",
    "postcss.config.mjs",
    ".eslintrc.json",
    ".prettierrc",
    ".gitignore",
    "vercel.json"
)

foreach ($item in $filesToMove) {
    $sourcePath = Join-Path $sourceDir $item
    if (Test-Path $sourcePath) {
        Write-Host "  - Memindahkan $item..." -ForegroundColor Cyan
        
        # Hapus yang lama jika ada
        if (Test-Path $item) {
            Remove-Item -Path $item -Recurse -Force -ErrorAction SilentlyContinue
        }
        
        # Pindahkan
        Move-Item -Path $sourcePath -Destination "." -Force
    }
}

# Hapus folder akademi-profesional-indonesia
Write-Host "3. Menghapus folder lama..." -ForegroundColor Yellow
if (Test-Path $sourceDir) {
    Remove-Item -Path $sourceDir -Recurse -Force -ErrorAction SilentlyContinue
}

# Commit dan push
Write-Host "4. Commit dan push..." -ForegroundColor Yellow
git add .
git commit -m "Restructure: move files to root for Vercel deployment"
git push

Write-Host ""
Write-Host "=== Selesai! ===" -ForegroundColor Green
Write-Host "Silakan cek deployment di Vercel Dashboard" -ForegroundColor Cyan
