'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Service } from '@/lib/supabase'

const SERVICE_IMAGES = [
  '/images/dashboard-hero-1.jpg',
  '/images/dashboard-hero-2.jpg',
  '/images/dashboard-hero-3.jpg'
]

const FALLBACK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Pelatihan Online & Offline',
    description:
      'Program pelatihan komprehensif untuk meningkatkan keterampilan profesional dengan metode pembelajaran yang fleksibel dan efektif.',
    image_url: SERVICE_IMAGES[0],
    link: '/pelatihan',
    features: ['Pelatihan Online Interaktif', 'Workshop Offline Hands-on', 'Mentor Berpengalaman', 'Sertifikat Resmi'],
    order_index: 1,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Jasa Aplikasi Custom',
    description:
      'Solusi teknologi terdepan untuk UMKM, Corporate, dan Lembaga Pemerintah dengan aplikasi custom sesuai kebutuhan bisnis.',
    image_url: SERVICE_IMAGES[1],
    link: '/jasa-aplikasi',
    features: ['Aplikasi Web & Mobile', 'Sistem Manajemen', 'Integrasi Database', 'Support & Maintenance'],
    order_index: 2,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Sertifikasi Kompetensi',
    description:
      'Program sertifikasi profesional akuntansi manajemen yang diakui industri untuk meningkatkan kredibilitas dan kompetensi.',
    image_url: SERVICE_IMAGES[2],
    link: '/sertifikasi',
    features: ['Sertifikasi Akuntansi', 'Kompetensi Manajemen', 'Pengakuan Industri', 'Career Development'],
    order_index: 3,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

export default function ServiceCards() {
  const [services, setServices] = useState<Service[]>(FALLBACK_SERVICES)
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  if (loading) {
    return (
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-12 w-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <p className="mt-6 text-slate-500">Memuat layanan unggulan...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-4">
            Layanan Unggulan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
            Solusi Lengkap untuk Transformasi Digital
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-4">
            Kami merancang program yang saling terintegrasi untuk memastikan transformasi digital berjalan menyeluruh dan berkelanjutan.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={service.image_url || FALLBACK_SERVICES[index % FALLBACK_SERVICES.length].image_url}
                  alt={service.title}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[0.65rem] sm:text-xs font-semibold text-blue-600">
                    <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Populer
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="group/btn inline-flex items-center justify-center gap-2 w-full px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Pelajari Lebih Lanjut
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-16">
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6 text-white">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold">
                  Konsultasi Personal
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Siap Mempercepat Transformasi Digital?
                </h3>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  Jadwalkan sesi konsultasi bersama tim kami untuk memetakan kebutuhan pelatihan, aplikasi, dan sertifikasi yang paling tepat.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link 
                    href="/kontak" 
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Konsultasi Gratis
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/tentang-kami"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    Tentang Kami
                  </Link>
                </div>
              </div>

              {/* Right Card */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 p-5 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.65rem] sm:text-xs uppercase tracking-wider text-white/80 font-semibold mb-1">Next Slot</p>
                      <p className="text-base sm:text-xl font-bold text-white truncate">Konsultasi Strategi Digital</p>
                    </div>
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-base font-bold">30'</span>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-white/90 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                      <span className="text-xs sm:text-sm">Live via Zoom / On-site</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                      <span className="text-xs sm:text-sm">Analisis kebutuhan dan solusi end-to-end</span>
                    </div>
                  </div>
                  <Link
                    href="/kontak"
                    className="inline-flex items-center justify-center w-full px-5 sm:px-6 py-3 sm:py-3.5 bg-white text-blue-600 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Jadwalkan Sesi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
