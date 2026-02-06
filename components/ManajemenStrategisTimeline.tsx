'use client';

export default function ManajemenStrategisTimeline() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full mb-6 shadow-2xl animate-pulse">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-black text-base uppercase tracking-widest">Strategic Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Timeline Implementasi Manajemen Strategis
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Proses implementasi sistematis untuk membangun fondasi perencanaan strategis yang kuat dan terukur
          </p>
        </div>
        
        {/* Modern Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 via-cyan-500 to-green-500 hidden md:block"></div>
          
          {/* Phase 1: Analisis Kondisi */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12 md:text-right">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 1-2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Analisis Kondisi & SWOT</h3>
                  <p className="text-cyan-200 mb-6 leading-relaxed">
                    Pemetaan kondisi organisasi saat ini dan identifikasi kekuatan, kelemahan, peluang, dan ancaman
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Assessment Organisasi</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Workshop SWOT Analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Stakeholder Mapping</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          </div>

          {/* Phase 2: Penyusunan Renstra */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12"></div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12 md:text-left">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 3-5
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Penyusunan Renstra</h3>
                  <p className="text-cyan-200 mb-6 leading-relaxed">
                    Formulasi visi, misi, tujuan strategis, dan sasaran dengan pendekatan Balanced Scorecard
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Perumusan Visi & Misi</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Strategy Mapping</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Penetapan Sasaran Strategis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Setup KPI */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12 md:text-right">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 6-7
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Setup KPI & Target</h3>
                  <p className="text-blue-200 mb-6 leading-relaxed">
                    Penetapan indikator kinerja utama dan target pencapaian untuk setiap sasaran strategis
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Definisi KPI per Perspektif</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Penetapan Target & Baseline</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Assignment PIC & Timeline</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          </div>

          {/* Phase 4: Implementasi Sistem */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12"></div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12 md:text-left">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 8-10
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Implementasi Sistem</h3>
                  <p className="text-purple-200 mb-6 leading-relaxed">
                    Deployment platform dan integrasi dengan sistem existing untuk monitoring real-time
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Setup Dashboard & Reporting</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Integrasi Data Source</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>User Training & Onboarding</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 5: Go-Live & Monitoring */}
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
                    Minggu 11-12
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Go-Live & Monitoring</h3>
                  <p className="text-green-200 text-lg mb-8 leading-relaxed">
                    Sistem aktif dengan monitoring berkala dan evaluasi pencapaian KPI untuk continuous improvement
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">🚀</div>
                      <div className="text-white font-bold">Launch System</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">📊</div>
                      <div className="text-white font-bold">Monthly Review</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-white font-bold">Continuous Support</div>
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
