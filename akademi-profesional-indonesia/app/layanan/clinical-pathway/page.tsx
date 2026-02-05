'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayananSidebar from '@/components/LayananSidebar';
import ChatWidget from '@/components/ChatWidget';


export default function ClinicalPathwayPage() {
  const handleRequestDemo = () => {
    const phoneNumber = '6285726112001';
    const message = encodeURIComponent('Halo, saya tertarik untuk melihat demo Aplikasi Clinical Pathway. Mohon informasi lebih lanjut.');
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
                <span className="material-symbols-outlined text-[16px]">medical_services</span>
                <span className="text-xs font-bold uppercase tracking-wider">CLINICAL PATHWAY</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.01em', fontWeight: '700' }}>
                Aplikasi Clinical Pathway
              </h1>
              
              {/* Professional Subtitle */}
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-normal" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400', lineHeight: '1.7' }}>
                Sistem standarisasi alur pelayanan medis berbasis evidence-based practice untuk meningkatkan kualitas dan efisiensi layanan kesehatan
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
                    Rumah sakit tanpa clinical pathway menghadapi risiko variasi praktik klinis yang tinggi, length of stay tidak terkontrol, dan kesulitan mencapai standar akreditasi JCI/KARS untuk patient safety dan clinical governance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-red-300 mb-2">Sebelum</h4>
                    <ul className="text-xs text-white/70 space-y-1">
                      <li>• Variasi praktik klinis tinggi</li>
                      <li>• LOS tidak terstandar</li>
                      <li>• Sulit monitoring compliance</li>
                      <li>• Outcome tidak terukur</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-green-300 mb-2">Sesudah</h4>
                    <ul className="text-xs text-white/70 space-y-1">
                      <li>• Praktik klinis terstandar</li>
                      <li>• LOS optimal & efisien</li>
                      <li>• Compliance rate 90%+</li>
                      <li>• Outcome terukur & akurat</li>
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
                    Reduksi LOS 15-20%, peningkatan compliance rate 90%, penurunan variasi praktik 40%, dan pencapaian standar akreditasi dalam 9 bulan implementasi.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleRequestDemo}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-cyan-900 rounded-lg font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl"
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
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-6 text-center">
                  <div className="text-6xl font-black mb-2">📋</div>
                  <div className="text-sm font-semibold mb-4">PATHWAY PERFORMANCE</div>
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <div className="text-xs text-cyan-100 mb-1">Avg Length of Stay</div>
                    <div className="text-2xl font-bold">4.2 Hari</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-xs text-cyan-100 mb-1">Compliance Rate</div>
                      <div className="text-lg font-bold">92%</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-xs text-cyan-100 mb-1">Cost Efficiency</div>
                      <div className="text-lg font-bold">+18%</div>
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
                    <h4 className="text-base md:text-lg font-semibold text-cyan-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Pathway Development
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">•</span>
                        <span><strong>Evidence-Based Templates:</strong> Library pathway untuk 50+ diagnosis tersering dengan referensi guideline internasional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">•</span>
                        <span><strong>Visual Pathway Builder:</strong> Drag-and-drop interface untuk menyusun alur klinis dengan timeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold">•</span>
                        <span><strong>Multi-Disciplinary Input:</strong> Kolaborasi dokter, perawat, farmasi, dan nutrisi dalam satu platform</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Implementation & Monitoring
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>EMR Integration:</strong> Sinkronisasi dengan rekam medis elektronik untuk tracking real-time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Variance Tracking:</strong> Deteksi otomatis deviasi dari pathway dengan reason documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Compliance Dashboard:</strong> Monitor adherence rate per dokter, unit, dan diagnosis</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 md:p-6 mb-8">
                  <h4 className="text-base md:text-lg font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Outcome Analytics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-cyan-900 mb-2">Clinical Outcomes</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Track complication rate, readmission, dan mortality</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-blue-900 mb-2">Financial Impact</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Analisis cost per case dan revenue optimization</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-indigo-900 mb-2">Efficiency Metrics</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Monitor LOS, bed turnover, dan resource utilization</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 md:p-6">
                  <h4 className="text-base md:text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Clinical Guidelines Integration
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    Pathway dikembangkan berdasarkan guideline terkini:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">WHO</div>
                      <div className="text-xs text-gray-600">Global Standards</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">POGI/PAPDI</div>
                      <div className="text-xs text-gray-600">National Guidelines</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">INA-CBGs</div>
                      <div className="text-xs text-gray-600">Casemix System</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">JCI</div>
                      <div className="text-xs text-gray-600">Accreditation</div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Pathway Library</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Template pathway untuk 50+ diagnosis tersering dengan evidence-based guidelines. Sistem ini memastikan standarisasi praktik klinis berdasarkan guideline terkini.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-purple-300 transition-all">
              <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Variance Tracking</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Monitor deviasi dari pathway dengan dokumentasi alasan dan analisis pola untuk continuous improvement praktik klinis.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-amber-300 transition-all">
              <svg className="w-10 h-10 text-amber-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Outcome Analytics</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Dashboard komprehensif untuk clinical, financial, dan efficiency metrics dengan visualisasi data yang intuitif.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-teal-300 transition-all">
              <svg className="w-10 h-10 text-teal-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">EMR Integration</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Sinkronisasi seamless dengan sistem rekam medis untuk tracking real-time dan otomasi dokumentasi klinis.
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
              Siap Standarisasi Praktik Klinis?
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tingkatkan efisiensi dan kualitas pelayanan dengan clinical pathway berbasis evidence. Konsultasi gratis dengan expert kami.
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
