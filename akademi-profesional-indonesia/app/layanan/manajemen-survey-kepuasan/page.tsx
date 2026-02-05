'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayananSidebar from '@/components/LayananSidebar';
import ChatWidget from '@/components/ChatWidget';

export default function ManajemenSurveyKepuasanPage() {
  
  const handleRequestDemo = () => {
    const phoneNumber = '6285726112001';
    const message = encodeURIComponent('Halo, saya tertarik untuk melihat demo Aplikasi Survey Kepuasan. Mohon informasi lebih lanjut.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex grow flex-col bg-gray-50">
      {/* Hero Section - Clean & Professional */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
                <span className="material-symbols-outlined text-[16px]">sentiment_satisfied</span>
                <span className="text-xs font-bold uppercase tracking-wider">SATISFACTION SURVEY</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.01em', fontWeight: '700' }}>
                Aplikasi Survey Kepuasan
              </h1>
              
              {/* Professional Subtitle */}
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-normal" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400', lineHeight: '1.7' }}>
                Sistem pengukuran kepuasan pelanggan yang komprehensif untuk evaluasi dan peningkatan kualitas layanan kesehatan secara berkelanjutan
              </p>
              
              {/* Copywriting Section */}
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Urgensi
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Rumah sakit tanpa sistem survey kepuasan yang terstruktur kehilangan insight berharga tentang pengalaman pasien, sulit mengidentifikasi area perbaikan, dan berisiko penurunan loyalitas pasien hingga 40% karena tidak responsif terhadap feedback.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-red-300 mb-2">Sebelum</h4>
                    <ul className="text-xs text-white/70 space-y-1">
                      <li>• Survey manual & response rate rendah</li>
                      <li>• Data tidak terstruktur</li>
                      <li>• Analisis memakan waktu lama</li>
                      <li>• Insight terlambat untuk action</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-green-300 mb-2">Sesudah</h4>
                    <ul className="text-xs text-white/70 space-y-1">
                      <li>• Digital & response rate 85%+</li>
                      <li>• Data terstruktur & real-time</li>
                      <li>• AI analytics instant</li>
                      <li>• Actionable insight segera</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Target yang Diharapkan
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Peningkatan response rate 300%, skor kepuasan naik 25%, NPS meningkat +30 poin, dan implementasi improvement action 90% lebih cepat dalam 6 bulan.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleRequestDemo}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-emerald-900 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Minta Demo</span>
                </button>
                
                <Link 
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Hubungi Kami</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-6 text-center">
                  <div className="text-6xl font-black mb-2">⭐</div>
                  <div className="text-sm font-semibold mb-4">SATISFACTION DASHBOARD</div>
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <div className="text-xs text-emerald-100 mb-1">Overall Satisfaction</div>
                    <div className="text-2xl font-bold">4.7/5.0</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/20 rounded-lg p-2">
                      <div className="text-xs text-emerald-100 mb-1">Response Rate</div>
                      <div className="text-lg font-bold">87%</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-2">
                      <div className="text-xs text-emerald-100 mb-1">NPS Score</div>
                      <div className="text-lg font-bold">+68</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spesifikasi & Keunggulan */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
              Spesifikasi dan Keunggulan Sistem
            </h2>
          </div>
          
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200 mb-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Spesifikasi Teknis Komprehensif</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-emerald-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Multi-Method Survey
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><strong>Digital Survey:</strong> QR Code, SMS, Email, WhatsApp untuk kemudahan akses pasien</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><strong>Kiosk Terminal:</strong> Touchscreen interaktif di area strategis rumah sakit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><strong>Paper-based dengan OCR:</strong> Scan otomatis formulir fisik untuk digitalisasi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><strong>Voice Survey (IVR):</strong> Survey melalui telepon dengan teknologi voice recognition</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-teal-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Real-time Analytics
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Live Dashboard:</strong> Monitor kepuasan pasien secara real-time dengan visualisasi interaktif</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Sentiment Analysis AI:</strong> Analisis otomatis komentar pasien untuk insight mendalam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Trend Prediction ML:</strong> Prediksi tren kepuasan dengan machine learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Benchmarking:</strong> Bandingkan performa dengan standar industri dan kompetitor</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 md:p-6 mb-8">
                  <h4 className="text-base md:text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Customizable Templates
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-emerald-900 mb-2">Rawat Jalan</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Template khusus untuk mengukur kepuasan pasien poliklinik dan IGD</p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-teal-900 mb-2">Rawat Inap</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Survey komprehensif untuk pasien yang menjalani perawatan inap</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-green-900 mb-2">Penunjang Medis</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Evaluasi kepuasan layanan laboratorium, radiologi, dan farmasi</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-5 md:p-6">
                  <h4 className="text-base md:text-lg font-semibold text-cyan-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Key Performance Indicators (KPI)
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    Metrik komprehensif untuk mengukur kepuasan pasien:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">CSAT</div>
                      <div className="text-xs text-gray-600">Customer Satisfaction</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">NPS</div>
                      <div className="text-xs text-gray-600">Net Promoter Score</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">CES</div>
                      <div className="text-xs text-gray-600">Customer Effort Score</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Response Rate</div>
                      <div className="text-xs text-gray-600">Tingkat Partisipasi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Fitur Utama */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
              Fitur Utama
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-blue-300 transition-all">
              <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Multi-Channel Distribution</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Distribusi survey melalui berbagai channel untuk meningkatkan response rate dan jangkauan maksimal.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-purple-300 transition-all">
              <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">AI Sentiment Analysis</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Analisis otomatis sentimen dan emosi dari komentar pasien menggunakan AI untuk insight mendalam.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-amber-300 transition-all">
              <svg className="w-10 h-10 text-amber-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Smart Alert System</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Notifikasi otomatis untuk feedback negatif dan area yang memerlukan perhatian segera dari manajemen.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-teal-300 transition-all">
              <svg className="w-10 h-10 text-teal-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Advanced Reporting</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Dashboard interaktif dengan visualisasi data dan export report dalam berbagai format profesional.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-indigo-300 transition-all">
              <svg className="w-10 h-10 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Action Management</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Tracking dan monitoring tindak lanjut dari feedback pasien hingga selesai dengan timeline jelas.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-pink-300 transition-all">
              <svg className="w-10 h-10 text-pink-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Benchmarking Module</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Bandingkan performa dengan standar industri dan rumah sakit sejenis untuk continuous improvement.
              </p>
            </div>
          </div>
          
          {/* Sidebar Navigation - Positioned Below Feature Cards */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <LayananSidebar />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="text-center">
            <svg className="w-12 h-12 text-white/80 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
              Mulai Dengarkan Suara Pasien Anda
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tingkatkan kepuasan pasien dengan sistem survey yang komprehensif dan mudah digunakan. Konsultasi gratis dengan expert kami.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-slate-900 rounded font-medium hover:bg-slate-50 transition-all text-sm">
                <span>Mulai Trial Gratis</span>
              </Link>
              
              <button 
                onClick={handleRequestDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-transparent border border-white/30 text-white rounded font-medium hover:bg-white/5 transition-all text-sm"
              >
                <span>Jadwalkan Demo Live</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
