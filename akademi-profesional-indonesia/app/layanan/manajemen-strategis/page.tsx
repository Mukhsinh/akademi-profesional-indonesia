'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayananSidebar from '@/components/LayananSidebar';
import ChatWidget from '@/components/ChatWidget';

export default function ManajemenStrategisPage() {
  
  const handleRequestDemo = () => {
    const phoneNumber = '6285726112001';
    const message = encodeURIComponent('Halo, saya tertarik untuk melihat demo Aplikasi Manajemen Strategis. Mohon informasi lebih lanjut.');
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
                <span className="material-symbols-outlined text-[16px]">business_center</span>
                <span className="text-xs font-bold uppercase tracking-wider">STRATEGIC MANAGEMENT</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.01em', fontWeight: '700' }}>
                Aplikasi Manajemen Strategis
              </h1>
              
              {/* Professional Subtitle */}
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-normal" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400', lineHeight: '1.7' }}>
                Solusi perencanaan dan monitoring strategis terintegrasi untuk mewujudkan visi dan misi rumah sakit secara terukur dan berkelanjutan
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
                  <p className="text-base text-white/85 leading-relaxed">
                    Rumah sakit tanpa sistem manajemen strategis yang terstruktur menghadapi risiko gagal mencapai target akreditasi, kesulitan monitoring KPI secara real-time, dan ketidakselarasan antara visi dengan eksekusi operasional.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="text-base font-semibold text-red-300 mb-2">Sebelum</h4>
                    <ul className="text-sm text-white/75 space-y-1.5">
                      <li>• Renstra manual & tidak terintegrasi</li>
                      <li>• Monitoring KPI tidak real-time</li>
                      <li>• Sulit tracking inisiatif strategis</li>
                      <li>• Laporan evaluasi memakan waktu</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-base font-semibold text-green-300 mb-2">Sesudah</h4>
                    <ul className="text-sm text-white/75 space-y-1.5">
                      <li>• Renstra digital & terintegrasi</li>
                      <li>• Dashboard KPI real-time</li>
                      <li>• Tracking otomatis per inisiatif</li>
                      <li>• Laporan otomatis & akurat</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Target yang Diharapkan
                  </h4>
                  <p className="text-sm text-white/85 leading-relaxed">
                    Pencapaian target Renstra 90%, peningkatan skor akreditasi, dan pengambilan keputusan strategis berbasis data dalam 12 bulan implementasi.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleRequestDemo}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-all text-sm shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Minta Demo</span>
                </button>
                
                <Link 
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Hubungi Kami</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl p-6 text-center">
                  <div className="text-6xl font-black mb-2">📊</div>
                  <div className="text-sm font-semibold mb-4">DASHBOARD STRATEGIS</div>
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <div className="text-xs text-teal-100 mb-1">Pencapaian Target</div>
                    <div className="text-2xl font-bold">87%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-xs text-teal-100 mb-1">KPI On Track</div>
                      <div className="text-lg font-bold">24/28</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-xs text-teal-100 mb-1">Inisiatif Aktif</div>
                      <div className="text-lg font-bold">15</div>
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
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
                  Spesifikasi Teknis Komprehensif
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-teal-900 mb-4 flex items-center gap-3">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Metodologi Perencanaan
                    </h4>
                    <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span><strong>Balanced Scorecard Framework:</strong> Pendekatan holistik dengan 4 perspektif (Finansial, Pelanggan, Proses Internal, Learning & Growth)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span><strong>SWOT Analysis Engine:</strong> Analisis otomatis kekuatan, kelemahan, peluang, dan ancaman berbasis data historis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span><strong>Strategy Mapping:</strong> Visualisasi hubungan sebab-akibat antar sasaran strategis</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-cyan-900 mb-4 flex items-center gap-3">
                      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Monitoring & Evaluasi
                    </h4>
                    <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span><strong>Real-time KPI Dashboard:</strong> Pantau pencapaian indikator kinerja secara live dengan alert otomatis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span><strong>Automated Reporting:</strong> Generate laporan bulanan, triwulan, dan tahunan secara otomatis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span><strong>Predictive Analytics:</strong> Prediksi pencapaian target berdasarkan tren data historis</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 md:p-6 mb-6 md:mb-8 border border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Fitur Kolaborasi
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-200 hover:border-gray-300 transition-all">
                      <svg className="w-8 h-8 text-teal-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <h5 className="font-semibold text-sm md:text-base text-gray-900 mb-2">Multi-User Access</h5>
                      <p className="text-xs md:text-sm text-gray-600">Role-based access control untuk berbagai level manajemen</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-200 hover:border-gray-300 transition-all">
                      <svg className="w-8 h-8 text-cyan-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      <h5 className="font-semibold text-sm md:text-base text-gray-900 mb-2">Task Management</h5>
                      <p className="text-xs md:text-sm text-gray-600">Assign dan track progress inisiatif strategis per PIC</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-200 hover:border-gray-300 transition-all">
                      <svg className="w-8 h-8 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <h5 className="font-semibold text-sm md:text-base text-gray-900 mb-2">Document Repository</h5>
                      <p className="text-xs md:text-sm text-gray-600">Penyimpanan terpusat untuk dokumen Renstra dan SOP</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-5 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Integrasi Sistem
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-5 leading-relaxed">
                    Sinkronisasi data dengan sistem existing untuk monitoring kinerja yang akurat:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-200 hover:border-blue-300 transition-all">
                      <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">SIMRS</div>
                      <div className="text-xs text-gray-600">Data Operasional</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-200 hover:border-green-300 transition-all">
                      <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">Finance</div>
                      <div className="text-xs text-gray-600">Data Keuangan</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-200 hover:border-purple-300 transition-all">
                      <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">HR System</div>
                      <div className="text-xs text-gray-600">Data SDM</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-200 hover:border-orange-300 transition-all">
                      <svg className="w-8 h-8 text-orange-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">Quality</div>
                      <div className="text-xs text-gray-600">Data Mutu</div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-blue-300 transition-all">
              <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Renstra Builder</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Wizard interaktif untuk menyusun Rencana Strategis 5 tahunan dengan template sesuai standar Kemenkes dan best practice.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-purple-300 transition-all">
              <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">KPI Dashboard</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Visualisasi real-time pencapaian KPI dengan traffic light system dan drill-down analysis untuk monitoring efektif.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-amber-300 transition-all">
              <svg className="w-10 h-10 text-amber-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Initiative Tracker</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Monitor progress inisiatif strategis dengan milestone tracking dan automated reminder untuk memastikan eksekusi tepat waktu.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-teal-300 transition-all">
              <svg className="w-10 h-10 text-teal-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Smart Reporting</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Generate laporan evaluasi Renstra otomatis dalam format PDF dan Excel untuk stakeholder dengan template profesional.
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
              Siap Wujudkan Visi Strategis Rumah Sakit?
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transformasi manajemen strategis dimulai hari ini. Konsultasi gratis dengan expert kami untuk solusi terbaik.
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
