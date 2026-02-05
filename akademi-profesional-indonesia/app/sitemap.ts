import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://akademiprofesional.co.id'
  
  const routes = [
    '',
    '/tentang',
    '/layanan',
    '/layanan/unit-cost',
    '/layanan/clinical-pathway',
    '/layanan/mmpi-2',
    '/layanan/manajemen-risiko',
    '/layanan/manajemen-strategis',
    '/layanan/manajemen-pengaduan',
    '/layanan/manajemen-survey-kepuasan',
    '/pelatihan',
    '/pelatihan/jadwal',
    '/artikel',
    '/kontak',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
