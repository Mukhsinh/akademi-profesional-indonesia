'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { createClient } from '@/lib/supabase'
import { HeroSlide } from '@/lib/supabase'

const LOCAL_HERO_IMAGES = [
  '/images/dashboard-hero-1.jpg',
  '/images/dashboard-hero-2.jpg',
  '/images/dashboard-hero-3.jpg'
]

export default function Hero() {
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  const fallbackSlides: HeroSlide[] = [
    {
      id: '1',
      title: 'Mitra Transformasi Digital Profesional Anda',
      subtitle:
        'Akademi Profesional Indonesia mendampingi organisasi di seluruh Indonesia untuk tumbuh melalui teknologi, pelatihan, dan sertifikasi kelas dunia.',
      image_url: LOCAL_HERO_IMAGES[0],
      cta_text: 'Pelajari Program',
      cta_link: '/pelatihan',
      order_index: 1,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Solusi Aplikasi Web Terintegrasi',
      subtitle:
        'Rancang dan implementasikan aplikasi berbasis web yang siap menunjang kinerja bisnis Anda dengan dukungan tim ahli kami.',
      image_url: LOCAL_HERO_IMAGES[1],
      cta_text: 'Jelajahi Jasa Aplikasi',
      cta_link: '/jasa-aplikasi',
      order_index: 2,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '3',
      title: 'Pelatihan dan Sertifikasi Kompetensi',
      subtitle:
        'Bangun kompetensi tim Anda melalui kurikulum pelatihan dan sertifikasi yang relevan dengan kebutuhan industri masa kini.',
      image_url: LOCAL_HERO_IMAGES[2],
      cta_text: 'Lihat Sertifikasi',
      cta_link: '/sertifikasi',
      order_index: 3,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]

  useEffect(() => {
    fetchSlides()
  }, [])

  const fetchSlides = async () => {
    try {
      if (!supabase) {
        setSlides(fallbackSlides)
        return
      }

      const { data, error } = await supabase
        .from('hero_slides')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true })

      if (error || !data || data.length === 0) {
        console.error('Error fetching slides:', error)
        setSlides(fallbackSlides)
        return
      }
      setSlides(
        data.map((slide: HeroSlide, idx: number) => ({
          ...slide,
          image_url: LOCAL_HERO_IMAGES[idx % LOCAL_HERO_IMAGES.length]
        }))
      )
    } catch (error) {
      console.error('Error fetching slides:', error)
      setSlides(fallbackSlides)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (slides.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [slides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  if (loading) {
    return (
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[700px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Memuat konten...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (slides.length === 0) {
    return (
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[700px]">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Akademi Profesional Indonesia
              </h1>
              <p className="text-xl text-gray-600">
                Mitra Transformasi Digital Profesional Anda
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="hero-surface wave-bottom">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px] gap-16 items-center py-16 lg:py-24">
          <div className="text-white space-y-8 reveal-up">
            <span className="tag-badge">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Go Beyond
            </span>
            <h1 className="text-[2.75rem] sm:text-[3.25rem] lg:text-[3.75rem] leading-tight font-semibold text-gradient max-w-xl">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-white/80 max-w-2xl">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={slides[currentSlide].cta_link} className="btn-primary text-base">
                {slides[currentSlide].cta_text}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/kontak" className="btn-secondary text-base">
                Konsultasi Gratis
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm text-white/70 max-w-xl pt-4">
              {[
                { value: '500+', label: 'Klien & Mitra' },
                { value: '1000+', label: 'Profesional Dilatih' },
                { value: '97%', label: 'Skor Kepuasan' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/20 px-4 py-3 backdrop-blur-md bg-white/10">
                  <div className="text-lg font-semibold text-white">{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-16 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 left-8 w-56 h-56 bg-white/20 rounded-full blur-3xl floating-delayed" />

            <div className="floating">
              <div className="relative h-[420px] sm:h-[460px] rounded-[32px] overflow-hidden shadow-[0_45px_90px_-50px_rgba(15,23,42,0.55)] border border-white/20">
                <Image
                  src={slides[currentSlide].image_url}
                  alt={slides[currentSlide].title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/20 border border-white/30 rounded-2xl backdrop-blur-md px-5 py-4 text-white flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Next Session</p>
                    <p className="text-lg font-semibold">Program Transformasi Digital</p>
                  </div>
                  <svg className="h-8 w-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/25 border border-white/30 px-6 py-3 rounded-full backdrop-blur-md text-white text-sm shadow-lg">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Program terbaru kami siap membantu akselerasi bisnis Anda
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 pb-8">
          {slides.map((_, index) => {
            const isActive = index === currentSlide
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${isActive ? 'w-12 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'}`}
              />
            )
          })}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        aria-label="Slide sebelumnya"
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white backdrop-blur-lg shadow-lg hover:bg-white/30 transition"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        aria-label="Slide berikutnya"
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white backdrop-blur-lg shadow-lg hover:bg-white/30 transition"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}
