'use client'

import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()
  return (
    <div className="layout-container flex grow flex-col bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
      {/* Animated Background Video/Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 animate-gradient-shift"></div>
        
        {/* Animated floating shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-float-fast"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse-slow"></div>
        
        {/* Moving particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-particle-1"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-particle-2"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/40 rounded-full animate-particle-3"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-particle-4"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-particle-5"></div>
        </div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      
      <div className="flex flex-1 justify-center py-5 relative z-10">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
          <div className="@container">
            <div className="flex flex-col-reverse gap-10 py-10 lg:py-24 lg:flex-row items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-8 lg:w-1/2 justify-center text-left">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    Inovasi Manajemen Kesehatan
                  </div>
                  
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                    Kendalikan dengan <span className="text-white">Integrasi Teknologi dan Kompetensi SDM</span>
                  </h1>
                  
                  <h2 className="text-white/95 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-[580px]">
                    Rumah sakit yang hebat tidak hanya memiliki layanan terbaik, tapi juga sistem yang paling presisi. Kelola biaya, resiko, keluhan dan survey dalam platform digital terpadu. Karena di rumah sakit Anda, efisiensi bukan lagi pilihan—itu adalah standar.
                  </h2>
                </div>

                {/* Why Partner With Us */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 max-w-[580px]">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-300">verified</span>
                    Mengapa Bermitra dengan Kami?
                  </h3>
                  <p className="text-white/95 text-sm sm:text-base leading-relaxed mb-4">
                    Kami menghadirkan solusi komprehensif berbasis teknologi terkini yang telah terbukti meningkatkan efisiensi operasional hingga 85%. Dengan pengalaman mendampingi 50+ rumah sakit dan didukung tim konsultan bersertifikasi internasional, kami memastikan transformasi digital yang terukur, berkelanjutan, dan sesuai standar akreditasi nasional maupun internasional.
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-300 text-lg sm:text-[22px]">workspace_premium</span>
                      <span className="text-white text-xs sm:text-sm font-bold">Bersertifikasi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-300 text-lg sm:text-[22px]">support_agent</span>
                      <span className="text-white text-xs sm:text-sm font-bold">Support 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-300 text-lg sm:text-[22px]">trending_up</span>
                      <span className="text-white text-xs sm:text-sm font-bold">ROI Terukur</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-300 text-lg sm:text-[22px]">security</span>
                      <span className="text-white text-xs sm:text-sm font-bold">Data Aman</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                  <button 
                    onClick={() => router.push('/layanan')}
                    className="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-primary hover:bg-primary-hover transition-all text-white text-sm sm:text-base font-bold leading-normal tracking-wide shadow-lg shadow-blue-900/20 group"
                  >
                    <span className="truncate">Jelajahi Solusi Digital</span>
                    <span className="material-symbols-outlined text-lg sm:text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  
                  <button 
                    onClick={() => router.push('/pelatihan')}
                    className="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white hover:bg-white/20 text-white transition-all text-sm sm:text-base font-bold leading-normal tracking-wide shadow-sm"
                  >
                    <span className="truncate">Daftar Pelatihan</span>
                    <span className="material-symbols-outlined text-lg sm:text-[20px]">app_registration</span>
                  </button>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pt-4 text-sm sm:text-base text-emerald-100 border-t border-white/20 mt-2">
                  <div className="flex -space-x-3">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-emerald-600 border-2 border-emerald-800 shadow-sm"></div>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-emerald-500 border-2 border-emerald-800 shadow-sm"></div>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-emerald-400 border-2 border-emerald-800 shadow-sm flex items-center justify-center text-xs font-bold text-white">
                      +2k
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-base sm:text-lg fill-current">star</span>
                      ))}
                    </div>
                    <p className="font-medium mt-1 text-sm sm:text-base">
                      Dipercaya oleh <span className="text-white font-bold">50+ Rumah Sakit</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-emerald-600/20 via-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
                
                {/* Single Image - Modern Healthcare Technology & Professional Team */}
                <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-white/10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop)' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
