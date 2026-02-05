'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayananSidebar from '@/components/LayananSidebar';
import ChatWidget from '@/components/ChatWidget';

export default function ManajemenPengaduanPage() {
  
  const handleRequestDemo = () => {
    const phoneNumber = '6285726112001';
    const message = encodeURIComponent('Halo, saya tertarik untuk melihat demo Aplikasi Manajemen Komplain. Mohon informasi lebih lanjut.');
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
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                <span className="text-xs font-bold uppercase tracking-wider">COMPLAINT MANAGEMENT</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.01em', fontWeight: '700' }}>
                Aplikasi Manajemen Komplain
              </h1>
              
              {/* Professional Subtitle */}
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-normal" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400', lineHeight: '1.7' }}>
                Sistem pengelolaan keluhan pasien yang terintegrasi untuk meningkatkan kualitas layanan dan kepuasan pelanggan secara berkelanjutan
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
                    Rumah sakit tanpa sistem manajemen pengaduan yang terstruktur berisiko kehilangan kepercayaan pasien, viral di media sosial, dan penurunan reputasi yang berdampak pada revenue hingga 25% akibat penanganan keluhan yang lambat dan tidak transparan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="text-base font-semibold text-red-300 mb-2">Sebelum</h4>
                    <ul className="text-sm text-white/75 space-y-1.5">
                      <li>• Pengaduan tercecer di berbagai channel</li>
                      <li>• Response time tidak terukur</li>
                      <li>• Tidak ada tracking penyelesaian</li>
                      <li>• Laporan manual & lambat</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-base font-semibold text-green-300 mb-2">Sesudah</h4>
                    <ul className="text-sm text-white/75 space-y-1.5">
                      <li>• Semua channel terintegrasi</li>
                      <li>• Response &lt; 2 jam</li>
                      <li>• Tracking real-time otomatis</li>
                      <li>• Dashboard & analytics instant</li>
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
                    Peningkatan kepuasan pasien 30%, reduksi response time 70%, resolution rate 95%, dan peningkatan Net Promoter Score (NPS) +25 poin dalam 6 bulan implementasi.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleRequestDemo}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-pink-900 rounded-lg font-semibold hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl"
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
                <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl p-6 text-center">
                  <div className="text-6xl font-black mb-2">📢</div>
                  <div className="text-sm font-semibold mb-4">COMPLAINT DASHBOARD</div>
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <div className="text-xs text-pink-100 mb-1">Avg Response Time</div>
                    <div className="text-2xl font-bold">2.4 Jam</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/20 rounded-lg p-2">
                      <div className="text-xs text-pink-100 mb-1">Baru</div>
                      <div className="text-lg font-bold">8</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-2">
                      <div className="text-xs text-pink-100 mb-1">Proses</div>
                      <div className="text-lg font-bold">15</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-2">
                      <div className="text-xs text-pink-100 mb-1">Selesai</div>
                      <div className="text-lg font-bold">142</div>
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
                    <h4 className="text-base md:text-lg font-semibold text-pink-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Omnichannel Integration
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600 font-bold">•</span>
                        <span><strong>Multi-Channel Input:</strong> Terima pengaduan via website, mobile app, WhatsApp, email, dan kotak saran fisik</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600 font-bold">•</span>
                        <span><strong>Unified Dashboard:</strong> Semua channel terintegrasi dalam satu dashboard untuk kemudahan monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600 font-bold">•</span>
                        <span><strong>Auto-Categorization:</strong> AI-powered untuk klasifikasi otomatis jenis pengaduan</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-rose-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      SLA Management
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span><strong>Configurable SLA:</strong> Set target response time dan resolution time per kategori pengaduan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span><strong>Automated Escalation:</strong> Eskalasi otomatis ke level manajemen jika SLA terlampaui</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span><strong>Real-time Monitoring:</strong> Dashboard SLA compliance dengan alert system</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 md:p-6 mb-8">
                  <h4 className="text-base md:text-lg font-semibold text-pink-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Customer Communication
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-pink-900 mb-2">Auto-Reply</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Konfirmasi otomatis saat pengaduan diterima dengan ticket number</p>
                    </div>
                    <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-rose-900 mb-2">Progress Update</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Notifikasi otomatis setiap ada update status penanganan</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4">
                      <h5 className="font-semibold text-sm md:text-base text-red-900 mb-2">Satisfaction Survey</h5>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">Survey kepuasan otomatis setelah pengaduan selesai</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 md:p-6">
                  <h4 className="text-base md:text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Analytics & Reporting
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    Insight mendalam untuk continuous improvement:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Trend Analysis</div>
                      <div className="text-xs text-gray-600">Pola Pengaduan</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Root Cause</div>
                      <div className="text-xs text-gray-600">Analisis Akar Masalah</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Performance</div>
                      <div className="text-xs text-gray-600">Kinerja Tim</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="font-semibold text-sm md:text-base text-gray-900">Satisfaction</div>
                      <div className="text-xs text-gray-600">Kepuasan Pasien</div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Omnichannel Ticketing</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Terima dan kelola pengaduan dari berbagai channel dalam satu platform terpadu untuk kemudahan monitoring.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-purple-300 transition-all">
              <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">SLA Tracking</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Monitor response time dan resolution time dengan automated escalation untuk memastikan penanganan tepat waktu.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-amber-300 transition-all">
              <svg className="w-10 h-10 text-amber-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Smart Notification</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Alert otomatis ke PIC terkait dengan prioritas berdasarkan kategori pengaduan untuk respon cepat.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-7 hover:border-teal-300 transition-all">
              <svg className="w-10 h-10 text-teal-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Insight mendalam dengan trend analysis dan root cause identification untuk continuous improvement.
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
              Siap Tingkatkan Kepuasan Pasien?
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ubah setiap keluhan menjadi peluang perbaikan dengan sistem manajemen pengaduan yang efektif. Konsultasi gratis dengan expert kami.
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
