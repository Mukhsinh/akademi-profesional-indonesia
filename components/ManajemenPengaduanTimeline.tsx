'use client';

export default function ManajemenPengaduanTimeline() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-pink-900 to-rose-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white px-8 py-4 rounded-full mb-6 shadow-2xl animate-pulse">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-black text-base uppercase tracking-widest">Complaint Management Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Timeline Implementasi Manajemen Pengaduan
          </h2>
          <p className="text-xl text-pink-200 max-w-3xl mx-auto leading-relaxed">
            Membangun sistem pengelolaan pengaduan yang responsif dan transparan untuk meningkatkan kepuasan pelanggan
          </p>
        </div>
        
        {/* Modern Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-rose-500 to-green-500 hidden md:block"></div>
          
          {/* Phase 1: System Setup */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12 md:text-right">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 1-2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">System Setup & Configuration</h3>
                  <p className="text-pink-200 mb-6 leading-relaxed">
                    Instalasi dan konfigurasi sistem manajemen pengaduan multi-channel dengan workflow otomatis
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Setup Multi-Channel Input</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Konfigurasi Workflow & SLA</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Integrasi Notifikasi</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          </div>

          {/* Phase 2: Team Training */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12"></div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12 md:text-left">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 3-4
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Team Training & SOP</h3>
                  <p className="text-rose-200 mb-6 leading-relaxed">
                    Pelatihan tim dan penyusunan SOP untuk penanganan pengaduan yang efektif
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Training Handling Complaint</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Penyusunan SOP</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Role Assignment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Soft Launch */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-5/12 md:text-right">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Minggu 5-6
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Soft Launch & Testing</h3>
                  <p className="text-red-200 mb-6 leading-relaxed">
                    Uji coba sistem dengan unit terbatas untuk evaluasi dan penyempurnaan
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Pilot di Unit Terpilih</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Evaluasi & Feedback</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                      <svg className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>System Refinement</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          </div>

          {/* Phase 4: Full Deployment */}
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
                    Minggu 7-8
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Full Deployment & Monitoring</h3>
                  <p className="text-green-200 text-lg mb-8 leading-relaxed">
                    Sistem aktif di seluruh unit dengan monitoring berkelanjutan dan continuous improvement
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">🚀</div>
                      <div className="text-white font-bold">Go Live</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">📊</div>
                      <div className="text-white font-bold">Analytics</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-white font-bold">Improvement</div>
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
