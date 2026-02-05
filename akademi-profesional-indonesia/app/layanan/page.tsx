import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const SERVICES = [
  {
    href: '/layanan/unit-cost',
    title: 'Aplikasi Unit Cost',
    description: 'Analisis biaya layanan kesehatan dengan metode Activity Based Costing untuk pengambilan keputusan strategis',
    hoverColor: 'hover:border-blue-500',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&q=80'
  },
  {
    href: '/layanan/manajemen-strategis',
    title: 'Aplikasi Manajemen Strategis',
    description: 'Platform terintegrasi untuk penyusunan Renstra, monitoring KPI, dan evaluasi kinerja rumah sakit secara real-time',
    hoverColor: 'hover:border-teal-500',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80' // Strategic planning & team collaboration
  },
  {
    href: '/layanan/manajemen-risiko',
    title: 'Aplikasi Manajemen Resiko',
    description: 'Identifikasi, analisis, dan monitoring risiko untuk menciptakan budaya keselamatan pasien yang kuat',
    hoverColor: 'hover:border-indigo-500',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80'
  },
  {
    href: '/layanan/manajemen-pengaduan',
    title: 'Aplikasi Manajemen Komplain',
    description: 'Solusi omnichannel untuk menangani keluhan pasien secara cepat, transparan, dan profesional',
    hoverColor: 'hover:border-pink-500',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&q=80'
  },
  {
    href: '/layanan/clinical-pathway',
    title: 'Aplikasi Clinical Pathway',
    description: 'Standarisasi medis berbasis data untuk meningkatkan efisiensi biaya tanpa menurunkan kualitas pelayanan',
    hoverColor: 'hover:border-cyan-500',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80' // Clinical pathway & healthcare professionals
  },
  {
    href: '/layanan/mmpi-2',
    title: 'Aplikasi MMPI-2',
    description: 'Platform asesmen psikologi digital dengan scoring otomatis dan keamanan data maksimal untuk rekrutmen SDM',
    hoverColor: 'hover:border-amber-500',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80' // Digital assessment & technology
  },
  {
    href: '/layanan/manajemen-survey-kepuasan',
    title: 'Aplikasi Survey Kepuasan',
    description: 'Platform komprehensif untuk mengukur dan meningkatkan kepuasan pasien dengan analytics real-time dan actionable insights',
    hoverColor: 'hover:border-emerald-500',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80' // Patient satisfaction & healthcare analytics
  }
] as const

export default function LayananPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex grow flex-col bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-bold">Solusi Digital Terintegrasi</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.02em', fontWeight: '700' }}>
                Aplikasi Digital Komprehensif
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}>
                Transformasi digital rumah sakit Anda dengan solusi aplikasi yang telah terbukti meningkatkan efisiensi operasional dan kualitas pelayanan
              </p>
            </div>
          </div>
        </section>

        {/* Applications Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {SERVICES.map((service) => (
                <Link key={service.href} href={service.href} className="group">
                  <div className={`bg-white rounded-2xl border border-gray-200 ${service.hoverColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col overflow-hidden`}>
                    <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em', fontWeight: '700' }}>{service.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}>
                        {service.description}
                      </p>
                      <div className="flex items-center text-accent-blue font-bold text-sm sm:text-base group-hover:gap-2 transition-all">
                        <span>Pelajari Lebih Lanjut</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em', fontWeight: '700' }}>
              Siap Transformasi Digital?
            </h2>
            <p className="text-lg sm:text-xl text-white/95 mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400' }}>
              Konsultasikan kebutuhan rumah sakit Anda dengan tim ahli kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-emerald-900 rounded-lg font-bold text-sm sm:text-base hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <span>Hubungi Kami</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-sm sm:text-base hover:bg-white/10 transition-all">
                <span>Jadwalkan Demo</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
