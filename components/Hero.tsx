'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroSlides = [
  {
    id: 1,
    title: "Mitra Transformasi Digital Profesional Anda",
    subtitle: "Akademi Profesional Indonesia terus dipercaya untuk mempercepat pertumbuhan bisnis dari berbagai industri di Indonesia melalui transformasi digital dan pelatihan profesional berkualitas tinggi.",
    image: "/images/Pelatihan-Kerja.jpg",
    ctaText: "Pelajari Lebih Lanjut",
    ctaLink: "/tentang-kami"
  },
  {
    id: 2,
    title: "Pelatihan Online & Offline Terbaik",
    subtitle: "Dapatkan keterampilan profesional yang dibutuhkan industri dengan program pelatihan komprehensif yang dirancang khusus untuk kebutuhan bisnis modern.",
    image: "/images/Pelatihan-Kerja.jpg",
    ctaText: "Lihat Program Pelatihan",
    ctaLink: "/pelatihan"
  },
  {
    id: 3,
    title: "Jasa Aplikasi Custom untuk UMKM & Corporate",
    subtitle: "Solusi teknologi terdepan untuk mengoptimalkan operasional bisnis Anda dengan aplikasi custom yang sesuai dengan kebutuhan spesifik perusahaan.",
    image: "/images/Pelatihan-Kerja.jpg",
    ctaText: "Konsultasi Gratis",
    ctaLink: "/jasa-aplikasi"
  },
  {
    id: 4,
    title: "Sertifikasi Kompetensi Profesional",
    subtitle: "Tingkatkan kredibilitas profesional Anda dengan sertifikasi kompetensi akuntansi manajemen yang diakui industri dan pemerintah.",
    image: "/images/Pelatihan-Kerja.jpg",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href={heroSlides[currentSlide].ctaLink}
                  className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {heroSlides[currentSlide].ctaText}
                  <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/kontak"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-last">
            <div className="relative h-[500px] lg:h-full">
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-transparent to-transparent" />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-4 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              aria-label="Previous slide"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-4 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              aria-label="Next slide"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3 pb-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-600 w-10 h-3'
                  : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
