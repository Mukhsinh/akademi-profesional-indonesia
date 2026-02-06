'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayananSidebar from '@/components/LayananSidebar';
import ModernTimeline from '@/components/ModernTimeline';
import { mmpi2Timeline } from '@/lib/timelineData';
import ChatWidget from '@/components/ChatWidget';

export default function MMPI2Page() {
  const handleRequestDemo = () => {
    const phoneNumber = '6285726112001';
    const message = encodeURIComponent('Halo, saya tertarik untuk melihat demo Aplikasi MMPI-2. Mohon informasi lebih lanjut.');
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
                <span className="material-symbols-outlined text-[16px]">psychology</span>
                <span className="text-xs font-bold uppercase tracking-wider">PSYCHOLOGICAL ASSESSMENT</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.01em', fontWeight: '700' }}>
                Aplikasi MMPI-2
              </h1>
              
              {/* Professional Subtitle */}
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-normal" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400', lineHeight: '1.7' }}>
                Platform asesmen psikologi digital yang terstandarisasi untuk evaluasi kepribadian dan kesehatan mental secara komprehensif dan akurat
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
                    Rumah sakit tanpa asesmen psikologi yang terstandarisasi berisiko merekrut SDM yang tidak fit dengan posisi, turnover tinggi hingga 35%, dan potensi insiden medis akibat faktor psikologis yang tidak terdeteksi sejak awal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-red-300 mb-2">Sebelum</h4>
                    <ul className="text-xs text-white/70 space-y-1">
                      <li>• Asesmen manual & memakan waktu</li>
                      <li>• Scoring rawan human error</li>
                      <li>• Biaya psikolog eksternal tinggi</li>
                      <li>• Laporan tidak standar</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-green-300 mb-2">Sesudah</h4>
                    <ul className="text-xs text-white/70 space-y-1">
                      <li>• Online & efisien waktu 80%</li>
                      <li>• Scoring otomatis & akurat</li>
                      <li>• Hemat biaya hingga 60%</li>
                      <li>• Laporan terstandar & profesional</li>
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
                    Reduksi turnover SDM 40%, peningkatan akurasi seleksi 85%, efisiensi waktu rekrutmen 70%, dan ROI positif dalam 8 bulan implementasi.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleRequestDemo}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-amber-900 rounded-lg font-semibold hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl"
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
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl p-6 text-center">
                  <div className="text-6xl font-black mb-2">🧠</div>
                  <div className="text-sm font-semibold mb-4">ASSESSMENT DASHBOARD</div>
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <div className="text-xs text-amber-100 mb-1">Total Asesmen Bulan Ini</div>
                    <div className="text-2xl font-bold">248</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-xs text-amber-100 mb-1">Avg Time</div>
                      <div className="text-lg font-bold">45 Min</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-xs text-amber-100 mb-1">Completion</div>
                      <div className="text-lg font-bold">96%</div>
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
          
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200 mb-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
                  Spesifikasi Teknis Komprehensif
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Validitas & Reliabilitas
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span><strong>MMPI-2 Standard:</strong> Menggunakan 567 item pertanyaan sesuai standar internasional dengan norma Indonesia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span><strong>Validity Scales:</strong> 10 skala validitas untuk deteksi faking good/bad dan inconsistent responding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span><strong>Clinical Scales:</strong> 10 skala klinis utama plus 15 content scales dan 15 supplementary scales</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-orange-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Keamanan Data
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span><strong>End-to-End Encryption:</strong> Data peserta dan hasil asesmen terenkripsi dengan standar AES-256</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span><strong>Access Control:</strong> Role-based permission untuk psikolog, HR, dan administrator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span><strong>Audit Trail:</strong> Log lengkap setiap akses dan perubahan data untuk compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    Automated Scoring & Interpretation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4">
                      <h5 className="font-bold text-amber-900 mb-2">Instant Scoring</h5>
                      <p className="text-sm text-gray-700">Hasil T-score dan profil grafis tersedia dalam hitungan detik</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                      <h5 className="font-bold text-orange-900 mb-2">AI Interpretation</h5>
                      <p className="text-sm text-gray-700">Interpretasi naratif otomatis dengan bahasa yang mudah dipahami</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4">
                      <h5 className="font-bold text-red-900 mb-2">Custom Reports</h5>
                      <p className="text-sm text-gray-700">Template laporan untuk berbagai kebutuhan (rekrutmen, klinis, forensik)</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 md:p-6">
                  <h4 className="text-base md:text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Multi-Platform Access
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    Asesmen dapat dilakukan dari berbagai perangkat:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Web Browser</div>
                      <div className="text-xs text-gray-600">Desktop/Laptop</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Mobile App</div>
                      <div className="text-xs text-gray-600">iOS & Android</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Tablet</div>
                      <div className="text-xs text-gray-600">iPad & Android</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Offline Mode</div>
                      <div className="text-xs text-gray-600">Sync Later</div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-blue-300 transition-all">
              <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Online Testing</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Platform asesmen online yang user-friendly dengan progress tracking dan auto-save untuk kemudahan peserta tes.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-purple-300 transition-all">
              <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Instant Scoring</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Hasil T-score dan profil grafis tersedia segera setelah asesmen selesai dengan akurasi tinggi.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-amber-300 transition-all">
              <svg className="w-10 h-10 text-amber-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Comprehensive Report</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Laporan lengkap dengan interpretasi naratif dan rekomendasi untuk decision making yang tepat.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-teal-300 transition-all">
              <svg className="w-10 h-10 text-teal-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Enkripsi end-to-end dan compliance dengan standar keamanan data psikologi untuk perlindungan maksimal.
              </p>
            </div>
          </div>
          
          {/* Sidebar Navigation - Positioned Below Feature Cards */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <LayananSidebar />
          </div>
        </div>
      </section>

      {/* Modern Timeline Component */}
      <ModernTimeline phases={mmpi2Timeline} />

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="text-center">
            <svg className="w-12 h-12 text-white/80 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
              Siap Modernisasi Asesmen Psikologi?
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tingkatkan efisiensi dan akurasi proses rekrutmen dengan MMPI-2 Online. Konsultasi gratis dengan expert kami.
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
