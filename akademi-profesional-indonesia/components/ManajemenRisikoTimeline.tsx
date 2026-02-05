'use client';

export default function ManajemenRisikoTimeline() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full mb-6 shadow-2xl animate-pulse">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-black text-base uppercase tracking-widest">Risk Management Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Timeline Implementasi Manajemen Risiko
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            Membangun budaya keselamatan pasien yang kuat melalui sistem manajemen risiko yang terstruktur dan komprehensif
          </p>
        </div>
        
        {/* Modern Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-green-500 hidden md:block"></div>
          
          {/* Phase 1: Risk Assessment */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12 md:text-right">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 1-3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Risk Assessment & Mapping</h3>
                  <p className="text-indigo-200 mb-6 leading-relaxed">
                    Identifikasi dan pemetaan risiko di seluruh area layanan dengan metode FMEA dan Risk Matrix
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Identifikasi Area Berisiko</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Workshop FMEA</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Penyusunan Risk Register</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          </div>

          {/* Phase 2: Incident Reporting Setup */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12"></div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12 md:text-left">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 4-5
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Incident Reporting Setup</h3>
                  <p className="text-purple-200 mb-6 leading-relaxed">
                    Implementasi sistem pelaporan insiden multi-channel dengan workflow otomatis
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Setup Form Pelaporan</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Konfigurasi Workflow & SLA</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Training Pelaporan Insiden</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Mitigation Planning */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12 md:text-right">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 6-7
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Mitigation Planning</h3>
                  <p className="text-pink-200 mb-6 leading-relaxed">
                    Penyusunan rencana mitigasi dan action plan untuk setiap risiko yang teridentifikasi
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Prioritas Risiko High-Impact</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Penyusunan Action Plan</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Assignment PIC & Timeline</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          </div>

          {/* Phase 4: Dashboard & Analytics */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12"></div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12 md:text-left">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 8-9
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Dashboard & Analytics</h3>
                  <p className="text-blue-200 mb-6 leading-relaxed">
                    Setup dashboard monitoring dan analytics untuk tracking real-time status risiko
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Konfigurasi Risk Dashboard</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Setup Heat Map & Trend Analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Automated Reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 5: Go-Live & Continuous Monitoring */}
          <div className="relative">
            <div className="flex flex-col items-center">
              <div className="relative z-10 flex-shrink-0 mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl border-4 border-white animate-pulse">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <div className="max-w-2xl w-full">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border-2 border-white/20 shadow-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full mb-6 text-sm font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 10-12
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Go-Live & Continuous Monitoring</h3>
                  <p className="text-green-200 text-lg mb-8 leading-relaxed">
                    Sistem aktif dengan monitoring berkelanjutan, evaluasi efektivitas mitigasi, dan budaya pelaporan yang kuat
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">🚀</div>
                      <div className="text-white font-bold">Launch System</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">📊</div>
                      <div className="text-white font-bold">Risk Review</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-white font-bold">Safety Culture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
