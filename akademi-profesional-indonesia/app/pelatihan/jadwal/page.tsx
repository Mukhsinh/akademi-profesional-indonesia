'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import TrainingDetailModal from '@/components/TrainingDetailModal'
import { trainingSchedules, Training } from '@/lib/trainingData'

export default function JadwalPelatihanPage() {
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null)
  const [showDetailModal, setShowDetailModal] = useState(false)

  const handleWhatsAppRegister = (trainingTitle: string, date: string) => {
    const phoneNumber = '6285726112001'
    const message = encodeURIComponent(`Halo, saya ingin mendaftar pelatihan:\n\nProgram: ${trainingTitle}\nJadwal: ${date}\n\nMohon informasi lebih lanjut.`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleShowDetail = (training: Training) => {
    setSelectedTraining(training)
    setShowDetailModal(true)
  }

  const handleCloseModal = () => {
    setShowDetailModal(false)
    setSelectedTraining(null)
  }

  const handleRegisterFromModal = () => {
    if (selectedTraining) {
      handleWhatsAppRegister(selectedTraining.title, selectedTraining.date)
    }
  }

  const getStatusBadge = (status: string, available: number) => {
    if (status === 'full') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          PENUH
        </span>
      )
    }
    if (status === 'limited') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {available} KURSI TERSISA
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        TERSEDIA
      </span>
    )
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="layout-container flex grow flex-col bg-grid-pattern relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20 mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                JADWAL PELATIHAN
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white tracking-tight font-heading">
                Jadwal Pelatihan<br />Tahun 2026
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
                Pilih jadwal pelatihan yang sesuai dengan kebutuhan dan ketersediaan tim Anda. Daftar sekarang sebelum kuota penuh!
              </p>

              <Link href="/pelatihan" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-800 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Kembali ke Program</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-8 bg-blue-50 border-b border-blue-100">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Pendaftaran Early Bird</h3>
                  <p className="text-xs text-gray-600">Dapatkan diskon 15% untuk pendaftaran 30 hari sebelum pelatihan</p>
                </div>
              </div>
              <a href="https://wa.me/6285726112001?text=Halo%2C%20saya%20ingin%20informasi%20tentang%20diskon%20early%20bird" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors whitespace-nowrap">
                Info Diskon
              </a>
            </div>
          </div>
        </section>

        {/* Schedule by Month */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            {trainingSchedules.map((schedule, monthIndex) => (
              <div key={monthIndex} className="mb-12 last:mb-0">
                {/* Month Header */}
                <div className="mb-6 pb-4 border-b-2 border-emerald-600">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {schedule.month}
                  </h2>
                </div>

                {/* Training Cards */}
                <div className="grid grid-cols-1 gap-6">
                  {schedule.trainings.map((training, trainingIndex) => (
                    <div key={trainingIndex} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 hover:border-emerald-500 p-6 transition-all duration-300 hover:shadow-xl">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* Training Info */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                              {training.title}
                            </h3>
                            {getStatusBadge(training.status, training.available)}
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="font-semibold">{training.date}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="font-semibold">{training.location}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span className="font-semibold">{training.available}/{training.seats} kursi tersedia</span>
                            </div>
                          </div>
                        </div>

                        {/* Price & Action */}
                        <div className="flex flex-row lg:flex-col items-center gap-4 lg:text-center border-t lg:border-t-0 lg:border-l border-gray-200 pt-4 lg:pt-0 lg:pl-6">
                          <div className="flex-1 lg:flex-none">
                            <p className="text-sm text-gray-600 mb-1">Investasi</p>
                            <p className="text-[10px] font-light text-gray-400 mb-0.5 italic">Mulai dari</p>
                            <p className="text-2xl sm:text-3xl font-bold text-emerald-700 font-heading">Rp. {training.price.split(' - ')[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')},-</p>
                            <p className="text-xs text-gray-500 mt-1">per peserta</p>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => handleShowDetail(training)}
                              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Detail</span>
                            </button>
                            
                            {training.status === 'full' ? (
                              <button disabled className="px-5 py-2.5 bg-gray-300 text-gray-500 rounded-lg font-semibold text-sm cursor-not-allowed whitespace-nowrap">
                                Kuota Penuh
                              </button>
                            ) : (
                              <button
                                onClick={() => handleWhatsAppRegister(training.title, training.date)}
                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold text-sm hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                <span>Daftar</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Keuntungan Mendaftar Sekarang
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dapatkan berbagai benefit eksklusif dengan mendaftar lebih awal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Diskon Early Bird</h3>
                <p className="text-sm text-gray-600">Hemat hingga 15% untuk pendaftaran 30 hari sebelumnya</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Materi Lengkap</h3>
                <p className="text-sm text-gray-600">Modul, template, dan tools siap pakai untuk implementasi</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sertifikat Resmi</h3>
                <p className="text-sm text-gray-600">Sertifikat terakreditasi Kemenkes RI untuk pengembangan karir</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
            <div className="text-center">
              <svg className="w-12 h-12 text-white/80 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
                Butuh Jadwal Khusus atau In-House Training?
              </h2>
              
              <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Kami dapat menyesuaikan jadwal dan lokasi pelatihan sesuai kebutuhan rumah sakit Anda. Hubungi tim kami untuk diskusi lebih lanjut.
              </p>
              
              <a href="https://wa.me/6285726112001?text=Halo%2C%20saya%20ingin%20informasi%20tentang%20in-house%20training" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-slate-900 rounded font-medium hover:bg-slate-50 transition-all text-sm">
                <span>Hubungi Kami</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
      
      {/* Detail Modal */}
      {showDetailModal && selectedTraining && (
        <TrainingDetailModal
          training={selectedTraining}
          onClose={handleCloseModal}
          onRegister={handleRegisterFromModal}
        />
      )}
    </div>
  )
}
