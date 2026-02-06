import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Timeline from '@/components/Timeline'
import TeamProfiles from '@/components/TeamProfiles'
import ChatWidget from '@/components/ChatWidget'

export default function TentangPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="layout-container flex grow flex-col bg-grid-pattern relative">
      {/* Hero Section - Clean & Professional */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20 mb-6">
              <span className="material-symbols-outlined text-[16px]">info</span>
              TENTANG KAMI
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-white">
              Transformasi Digital<br />Layanan Kesehatan Indonesia
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              PT. Akademi Profesional Indonesia adalah mitra strategis dalam transformasi digital, pengembangan SDM, dan peningkatan kualitas layanan kesehatan di Indonesia.
            </p>
          </div>
        </div>
      </section>

        {/* Timeline Section */}
        <Timeline />

        {/* Vision & Mission */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                Visi & Misi
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
                <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Visi</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Menjadi mitra strategis terdepan dalam transformasi digital dan pengembangan SDM kesehatan di Indonesia, yang berkontribusi pada peningkatan kualitas layanan kesehatan nasional.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
                <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Misi</h3>
                <ul className="text-sm md:text-base text-gray-600 leading-relaxed space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Menyediakan solusi teknologi informasi yang inovatif dan terintegrasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mengembangkan kompetensi SDM kesehatan melalui pelatihan berkualitas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mendampingi institusi kesehatan dalam mencapai standar akreditasi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - MAJU */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                Nilai Inti: <span className="text-blue-600">MAJU</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Modernitas */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-2xl mb-4">
                  M
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Modernitas</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mengadopsi teknologi dan metodologi terkini untuk solusi yang relevan dan efektif.
                </p>
              </div>

              {/* Akurasi */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-2xl mb-4">
                  A
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Akurasi</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Menjamin presisi dan ketelitian dalam setiap layanan dan solusi yang kami berikan.
                </p>
              </div>

              {/* Jejaring */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition-all">
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold text-2xl mb-4">
                  J
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Jejaring</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Membangun kolaborasi strategis dengan berbagai stakeholder untuk hasil optimal.
                </p>
              </div>

              {/* Utilitas */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition-all">
                <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold text-2xl mb-4">
                  U
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Utilitas</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mengutamakan manfaat praktis dan nilai tambah nyata bagi setiap klien kami.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Profiles */}
        <TeamProfiles />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
