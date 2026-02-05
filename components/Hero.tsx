'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroSlides = [
  {
    id: 1,
    title: "Mitra Transformasi Digital Profesional Anda",
    subtitle: "Akademi Profesional Indonesia terus dipercaya untuk mempercepat pertumbuhan bisnis dari berbagai industri di Indonesia melalui transformasi digital dan pelatihan profesional berkualitas tinggi.",
    image: "/images/hero-1.jpg",
    ctaText: "Pelajari Lebih Lanjut",
    ctaLink: "/tentang-kami"
  },
  {
    id: 2,
    title: "Pelatihan Online & Offline Terbaik",
    subtitle: "Dapatkan keterampilan profesional yang dibutuhkan industri dengan program pelatihan komprehensif yang dirancang khusus untuk kebutuhan bisnis modern.",
    image: "/images/hero-2.jpg",
    ctaText: "Lihat Program Pelatihan",
    ctaLink: "/pelatihan"
  },
  {
    id: 3,
    title: "Jasa Aplikasi Custom untuk UMKM & Corporate",
    subtitle: "Solusi teknologi terdepan untuk mengoptimalkan operasional bisnis Anda dengan aplikasi custom yang sesuai dengan kebutuhan spesifik perusahaan.",
    image: "/images/hero-3.jpg",
    ctaText: "Konsultasi Gratis",
    ctaLink: "/jasa-aplikasi"
  },
  {
    id: 4,
    title: "Sertifikasi Kompetensi Profesional",
    subtitle: "Tingkatkan kredibilitas profesional Anda dengan sertifikasi kompetensi akuntansi manajemen yang diakui industri dan pemerintah.",
    image: "/images/hero-4.jpg",
    ctaText: "Daftar Sertifikasi",
    ctaLink: "/sertifikasi"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-lg">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed mb-8">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={heroSlides[currentSlide].ctaLink}
                  className="inline-flex items-center justify-center px-8 py-4 bg-hero-gradient text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-200 transform hover:scale-105"
                >
                  {heroSlides[currentSlide].ctaText}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/kontak"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-last">
            <div className="relative h-[400px] lg:h-full">
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white lg:to-transparent" />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-secondary-700 p-3 rounded-full shadow-medium transition-all duration-200"
              aria-label="Previous slide"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-secondary-700 p-3 rounded-full shadow-medium transition-all duration-200"
              aria-label="Next slide"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 pb-8">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-primary-600 w-8'
                  : 'bg-secondary-300 hover:bg-secondary-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
