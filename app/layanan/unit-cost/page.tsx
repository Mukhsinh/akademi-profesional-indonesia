'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayananSidebar from '@/components/LayananSidebar';
import ChatWidget from '@/components/ChatWidget';

export default function UnitCostPage() {

  
  const handleDownloadProposal = async () => {
    try {
      // Dynamic import to ensure jsPDF only runs on client-side
      const { generateProposalPDF } = await import('@/lib/generateProposalPDF');
      await generateProposalPDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Terjadi kesalahan saat mengunduh proposal. Silakan coba lagi.');
    }
  };
  
  const handleRequestDemo = () => {
    const phoneNumber = '6285726112001'; // Nomor WhatsApp
    const message = encodeURIComponent('Halo, saya tertarik untuk melihat demo Unit Cost Calculator. Mohon informasi lebih lanjut.');
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
                <span className="material-symbols-outlined text-[16px]">calculate</span>
                <span className="text-xs font-bold uppercase tracking-wider">UNIT COST CALCULATOR</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
                Aplikasi Unit Cost
              </h1>
              
              {/* Professional Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Solusi perhitungan biaya satuan layanan kesehatan yang akurat dan efisien untuk optimalisasi kinerja finansial rumah sakit Anda
              </p>
              
              {/* Copywriting Section */}
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Urgensi
                  </h3>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                    Rumah sakit tanpa sistem unit cost yang akurat menghadapi risiko kerugian finansial hingga 30%, kesulitan penetapan tarif yang kompetitif, dan ketidakpatuhan terhadap regulasi Kemenkes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 sm:p-4">
                    <h4 className="text-sm sm:text-base font-semibold text-red-300 mb-2">Sebelum</h4>
                    <ul className="text-xs sm:text-sm text-white/75 space-y-1.5">
                      <li>• Perhitungan manual memakan waktu</li>
                      <li>• Tarif tidak akurat</li>
                      <li>• Sulit identifikasi layanan rugi</li>
                      <li>• Laporan tidak standar</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 sm:p-4">
                    <h4 className="text-sm sm:text-base font-semibold text-green-300 mb-2">Sesudah</h4>
                    <ul className="text-xs sm:text-sm text-white/75 space-y-1.5">
                      <li>• Otomatis & real-time</li>
                      <li>• Tarif berbasis data akurat</li>
                      <li>• Profit per layanan terukur</li>
                      <li>• Compliance Kemenkes 100%</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 sm:p-4">
                  <h4 className="text-sm sm:text-base font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Target yang Diharapkan
                  </h4>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                    Efisiensi biaya operasional 25%, peningkatan profit margin 15-20%, dan pengambilan keputusan strategis berbasis data dalam 6 bulan implementasi.
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
                
                <button 
                  onClick={handleDownloadProposal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Unduh Proposal</span>
                </button>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  {/* Dashboard Illustration */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">Unit Cost Dashboard</div>
                          <div className="text-white/60 text-sm">Real-time Analytics</div>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    {/* Chart Bars - Larger */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-white/80 text-sm w-24 font-medium">Rawat Inap</div>
                        <div className="flex-1 bg-white/10 rounded-full h-10 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full flex items-center justify-end pr-4 shadow-lg" style={{width: '85%'}}>
                            <span className="text-white text-sm font-bold">85%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-white/80 text-sm w-24 font-medium">Rawat Jalan</div>
                        <div className="flex-1 bg-white/10 rounded-full h-10 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full flex items-center justify-end pr-4 shadow-lg" style={{width: '72%'}}>
                            <span className="text-white text-sm font-bold">72%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-white/80 text-sm w-24 font-medium">Laboratorium</div>
                        <div className="flex-1 bg-white/10 rounded-full h-10 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-full rounded-full flex items-center justify-end pr-4 shadow-lg" style={{width: '68%'}}>
                            <span className="text-white text-sm font-bold">68%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-white/80 text-sm w-24 font-medium">Radiologi</div>
                        <div className="flex-1 bg-white/10 rounded-full h-10 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-full rounded-full flex items-center justify-end pr-4 shadow-lg" style={{width: '91%'}}>
                            <span className="text-white text-sm font-bold">91%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-white/80 text-sm w-24 font-medium">Farmasi</div>
                        <div className="flex-1 bg-white/10 rounded-full h-10 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-full rounded-full flex items-center justify-end pr-4 shadow-lg" style={{width: '78%'}}>
                            <span className="text-white text-sm font-bold">78%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats Cards - Larger */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all">
                        <div className="text-white/60 text-xs mb-2 font-medium">Total Unit</div>
                        <div className="text-white font-bold text-2xl">247</div>
                        <div className="text-green-400 text-xs mt-1">+12 bulan ini</div>
                      </div>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all">
                        <div className="text-white/60 text-xs mb-2 font-medium">Efisiensi</div>
                        <div className="text-green-400 font-bold text-2xl">+25%</div>
                        <div className="text-white/60 text-xs mt-1">vs tahun lalu</div>
                      </div>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all">
                        <div className="text-white/60 text-xs mb-2 font-medium">Profit</div>
                        <div className="text-blue-400 font-bold text-2xl">+18%</div>
                        <div className="text-white/60 text-xs mt-1">margin naik</div>
                      </div>
                    </div>

                    {/* Additional Visual Element */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white/70 text-xs">Live Data</span>
                        </div>
                        <div className="text-white/50 text-xs">Update: Real-time</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Enhanced */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-2xl"></div>
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
                    <h4 className="text-base md:text-lg font-semibold text-blue-900 mb-4 flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Keunggulan Metodologi
                    </h4>
                    <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                      <li className="flex items-start gap-2 md:gap-3">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span><strong>Activity Based Costing (ABC):</strong> Metode perhitungan biaya yang direkomendasikan Kemenkes untuk institusi kesehatan. Mengalokasikan biaya berdasarkan aktivitas nyata dengan presisi tinggi untuk mendukung pengambilan keputusan strategis.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span><strong>Double Distribution:</strong> Sistem alokasi biaya berlapis yang memastikan distribusi overhead secara proporsional dan transparan, mengeliminasi distorsi biaya pada sistem konvensional.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span><strong>Cost Driver Analysis:</strong> Identifikasi otomatis faktor pemicu biaya untuk setiap aktivitas layanan kesehatan dengan analisis mendalam terhadap efisiensi operasional.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-purple-900 mb-4 flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Teknologi dan Infrastruktur
                    </h4>
                    <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                        <span><strong>Cloud-Native Architecture:</strong> Sistem berbasis cloud yang scalable dan aman, dapat diakses dari mana saja. Menjamin uptime 99.9% dengan backup otomatis dan disaster recovery komprehensif.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span><strong>Real-time Processing:</strong> Engine perhitungan berkecepatan tinggi yang memproses ribuan transaksi dalam hitungan detik dengan teknologi parallel processing tanpa mengorbankan akurasi.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span><strong>Enterprise Security:</strong> Enkripsi data end-to-end, multi-factor authentication, dan compliance dengan standar ISO 27001 untuk keamanan data pasien dan finansial.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 md:p-6 mb-6 md:mb-8 border border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Fitur Dashboard dan Reporting
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-200 hover:border-gray-300 transition-all">
                      <svg className="w-8 h-8 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      <h5 className="font-semibold text-sm md:text-base text-gray-900 mb-2">Visualisasi Interaktif</h5>
                      <p className="text-xs md:text-sm text-gray-600">Chart dinamis, heatmap biaya, dan drill-down analysis untuk eksplorasi data mendalam dengan sistem visualisasi yang mengubah data kompleks menjadi insight mudah dipahami.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-200 hover:border-gray-300 transition-all">
                      <svg className="w-8 h-8 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h5 className="font-semibold text-sm md:text-base text-gray-900 mb-2">Custom Reports</h5>
                      <p className="text-xs md:text-sm text-gray-600">Builder laporan fleksibel dengan 50+ template siap pakai untuk berbagai kebutuhan manajemen. Buat laporan profesional dalam hitungan menit.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-200 hover:border-gray-300 transition-all">
                      <svg className="w-8 h-8 text-orange-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <h5 className="font-semibold text-sm md:text-base text-gray-900 mb-2">Export Multi-Format</h5>
                      <p className="text-xs md:text-sm text-gray-600">Export ke PDF, Excel, CSV, atau langsung kirim via email dengan scheduling otomatis untuk distribusi laporan yang efisien.</p>
                    </div>
                  </div>
                </div>
                
                {/* Flowchart Proses Unit Cost */}
                <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6 md:mb-8 border border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Alur Kerja Sistem Unit Cost
                  </h4>
                  
                  <div className="relative">
                    {/* Flowchart Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                      {/* Step 1 */}
                      <div className="relative">
                        <div className="bg-white rounded-lg p-5 border border-gray-300 hover:border-blue-400 transition-all">
                          <svg className="w-10 h-10 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div className="text-center">
                            <div className="text-xs font-medium text-blue-900 mb-2">TAHAP 1</div>
                            <div className="font-semibold text-gray-900 mb-2 text-sm">Input Data</div>
                            <div className="text-xs text-gray-600">Biaya langsung dan tidak langsung</div>
                          </div>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-gray-400">→</div>
                      </div>
                      
                      {/* Step 2 */}
                      <div className="relative">
                        <div className="bg-white rounded-lg p-5 border border-gray-300 hover:border-green-400 transition-all">
                          <svg className="w-10 h-10 text-green-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <div className="text-center">
                            <div className="text-xs font-medium text-green-900 mb-2">TAHAP 2</div>
                            <div className="font-semibold text-gray-900 mb-2 text-sm">Klasifikasi</div>
                            <div className="text-xs text-gray-600">Identifikasi cost center dan driver</div>
                          </div>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-gray-400">→</div>
                      </div>
                      
                      {/* Step 3 */}
                      <div className="relative">
                        <div className="bg-white rounded-lg p-5 border border-gray-300 hover:border-purple-400 transition-all">
                          <svg className="w-10 h-10 text-purple-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <div className="text-center">
                            <div className="text-xs font-medium text-purple-900 mb-2">TAHAP 3</div>
                            <div className="font-semibold text-gray-900 mb-2 text-sm">Distribusi</div>
                            <div className="text-xs text-gray-600">Double distribution method</div>
                          </div>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-gray-400">→</div>
                      </div>
                      
                      {/* Step 4 */}
                      <div className="relative">
                        <div className="bg-white rounded-lg p-5 border border-gray-300 hover:border-orange-400 transition-all">
                          <svg className="w-10 h-10 text-orange-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <div className="text-center">
                            <div className="text-xs font-medium text-orange-900 mb-2">TAHAP 4</div>
                            <div className="font-semibold text-gray-900 mb-2 text-sm">Kalkulasi</div>
                            <div className="text-xs text-gray-600">Hitung unit cost per layanan</div>
                          </div>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-gray-400">→</div>
                      </div>
                      
                      {/* Step 5 */}
                      <div className="relative">
                        <div className="bg-white rounded-lg p-5 border border-gray-300 hover:border-teal-400 transition-all">
                          <svg className="w-10 h-10 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <div className="text-center">
                            <div className="text-xs font-medium text-teal-900 mb-2">TAHAP 5</div>
                            <div className="font-semibold text-gray-900 mb-2 text-sm">Reporting</div>
                            <div className="text-xs text-gray-600">Dashboard dan laporan lengkap</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Benefits Below */}
                    <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
                      <div className="text-center mb-4">
                        <span className="font-semibold text-gray-900">Hasil yang Anda Dapatkan</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="text-sm font-semibold text-gray-900">Akurasi 99%</div>
                          <div className="text-xs text-gray-600">Perhitungan presisi tinggi</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <div className="text-sm font-semibold text-gray-900">Hemat 80% Waktu</div>
                          <div className="text-xs text-gray-600">Otomasi penuh proses</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <div className="text-sm font-semibold text-gray-900">ROI Positif</div>
                          <div className="text-xs text-gray-600">Dalam 6 bulan pertama</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-5 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Integrasi dan Kompatibilitas
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-5 leading-relaxed">
                    Sistem dirancang untuk berintegrasi seamless dengan ekosistem IT rumah sakit yang sudah ada. Koneksi API yang robust memastikan data mengalir lancar tanpa hambatan.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-200 hover:border-blue-300 transition-all">
                      <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">SIMRS</div>
                      <div className="text-xs text-gray-600">Hospital Information System</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-200 hover:border-green-300 transition-all">
                      <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">ERP</div>
                      <div className="text-xs text-gray-600">Enterprise Resource Planning</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-200 hover:border-purple-300 transition-all">
                      <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">Accounting</div>
                      <div className="text-xs text-gray-600">Software Akuntansi</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 text-center border border-gray-200 hover:border-orange-300 transition-all">
                      <svg className="w-8 h-8 text-orange-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">BI Tools</div>
                      <div className="text-xs text-gray-600">Business Intelligence</div>
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
            {/* Feature 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-blue-300 transition-all">
              <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Double Distribution Engine</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Algoritma alokasi biaya berlapis yang mengurai secara otomatis distribusi overhead antar unit layanan dengan akurasi tinggi. Sistem ini memastikan setiap biaya tidak langsung dialokasikan secara proporsional berdasarkan aktivitas riil.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-purple-300 transition-all">
              <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Visual Dashboard Real-time</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Pantau profit dan loss per unit dalam grafik interaktif yang mudah dipahami. Dashboard responsif dengan visualisasi data yang intuitif membantu membuat keputusan cepat dan tepat berdasarkan informasi terkini.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-amber-300 transition-all">
              <svg className="w-10 h-10 text-amber-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">API Seamless Integration</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Arsitektur terbuka yang mudah dihubungkan dengan sistem ERP atau software akuntansi yang ada saat ini. API RESTful yang well-documented memudahkan tim IT melakukan integrasi dalam waktu singkat.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-teal-300 transition-all">
              <svg className="w-10 h-10 text-teal-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Laporan Standar Kemenkes</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Generate laporan bulanan dan tahunan otomatis dalam format PDF dan Excel yang kompatibel dengan format regulasi. Sistem memastikan compliance penuh dengan standar pelaporan Kementerian Kesehatan RI.
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
              Siap Mengoptimalkan Efisiensi Rumah Sakit?
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transformasi finansial rumah sakit dimulai hari ini. Akses penuh 14 hari tanpa komitmen, tanpa kartu kredit, implementasi dalam 24 jam.
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
