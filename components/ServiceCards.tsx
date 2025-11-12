'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
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
  const [services, setServices] = useState<Service[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    const fetchServices = async () => {
      try {
        if (!supabase) {
          setServices(FALLBACK_SERVICES)
          return
        }

        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true })

        if (error || !data || data.length === 0) {
          console.error('Error fetching services:', error)
          setServices(FALLBACK_SERVICES)
          return
        }

        setServices(
          data.map((service, index) => ({
            ...service,
            image_url: SERVICE_IMAGES[index % SERVICE_IMAGES.length]
          }))
        )
      } catch (err) {
        console.error('Error fetching services:', err)
        setServices(FALLBACK_SERVICES)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [supabase])

  if (loading) {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-12 w-12 border-4 border-primary-200 border-t-transparent rounded-full animate-spin" />
            <p className="mt-6 text-slate-500">Memuat layanan unggulan...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 -top-32 h-48 bg-gradient-to-b from-primary-500/15 to-transparent blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-header">Layanan Unggulan</span>
          <h2 className="headline mb-6">Solusi lengkap untuk akselerasi digital Anda</h2>
          <p className="subheading">
            Kami merancang program yang saling terintegrasi – pelatihan, pengembangan aplikasi, hingga sertifikasi – untuk
            memastikan transformasi digital berjalan menyeluruh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const isActive = index === activeIndex
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-[28px] border transition-all duration-500 focus:outline-none focus-within:-translate-y-1 focus-within:shadow-[0_45px_90px_-55px_rgba(31,111,255,0.7)] focus-within:ring-4 focus-within:ring-primary-200/35 ${
                  isActive
                    ? 'border-transparent bg-gradient-to-br from-primary-600 to-accent-500 text-white shadow-[0_45px_90px_-55px_rgba(31,111,255,0.8)] scale-[1.02]'
                    : 'border-slate-100 bg-white shadow-[0_35px_80px_-70px_rgba(15,23,42,0.45)] hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image_url || FALLBACK_SERVICES[index % FALLBACK_SERVICES.length].image_url}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                  />
                  <div className={`absolute inset-0 ${isActive ? 'bg-slate-900/45' : 'bg-gradient-to-b from-slate-900/10 to-slate-900/35'}`} />
                  <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md">
                    Fokus
                  </span>
                </div>

                <div className="relative px-8 py-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className={`text-2xl font-semibold ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-primary-600'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${isActive ? 'text-white/80' : 'text-slate-600'}`}>{service.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center gap-3 text-sm ${isActive ? 'text-white/85' : 'text-slate-600'}`}
                      >
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                            isActive ? 'border-white/45 bg-white/25 text-white' : 'border-primary-100 bg-primary-50 text-primary-600'
                          }`}
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className={`inline-flex items-center justify-between rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-white text-primary-700 shadow-lg shadow-white/20 hover:bg-white/95'
                        : 'bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white shadow-lg shadow-primary-900/20 hover:shadow-xl hover:shadow-primary-900/30'
                    }`}
                  >
                    Pelajari lebih lanjut
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative mt-24">
          <div className="section-wave p-10 sm:p-14 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center gap-12">
              <div className="space-y-5">
                <span className="section-header text-primary-500">Konsultasi Personal</span>
                <h3 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                  Siap mempercepat transformasi digital organisasi Anda?
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Jadwalkan sesi konsultasi bersama tim kami untuk memetakan kebutuhan pelatihan, aplikasi, dan sertifikasi yang
                  paling tepat bagi tim Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontak" className="btn-primary text-base">
                    Konsultasi Gratis
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/tentang-kami"
                    className="inline-flex items-center justify-center rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold text-primary-600 transition hover:border-primary-500 hover:text-primary-700"
                  >
                    Tentang Kami
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary-500/20 blur-2xl" />
                <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-accent-500/20 blur-3xl" />
                <div className="relative rounded-3xl border border-white/70 bg-white p-6 shadow-lg shadow-primary-900/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary-500 font-semibold mb-2">Next Slot</p>
                      <p className="text-lg font-semibold text-slate-900">Konsultasi Strategi Digital</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg">
                      30'
                    </span>
                  </div>
                  <div className="mt-6 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live via Zoom / On-site</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Analisis kebutuhan dan solusi end-to-end</span>
                    </div>
                  </div>
                  <Link
                    href="/kontak"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-900/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/30"
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
