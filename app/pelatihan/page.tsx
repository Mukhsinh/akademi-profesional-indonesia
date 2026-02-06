import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CourseCard from '@/components/CourseCard'
import Testimonials from '@/components/Testimonials'
import ChatWidget from '@/components/ChatWidget'

export default function PelatihanPage() {
  const courses = [
    {
      title: 'Arsitektur Finansial & Unit Cost',
      category: 'Keuangan',
      duration: '2 Hari',
      level: 'Intermediate',
      participants: 'Max 25',
      description: 'Pelatihan komprehensif tentang perhitungan unit cost dan analisis finansial rumah sakit untuk pengambilan keputusan strategis.',
      topics: [
        'Konsep dasar unit cost dan komponen biaya',
        'Metode perhitungan unit cost per layanan',
        'Analisis profitabilitas layanan kesehatan',
        'Strategi penetapan tarif yang kompetitif',
        'Studi kasus dan praktik langsung'
      ],
      benefits: [
        'Mampu menghitung unit cost secara akurat',
        'Dapat menganalisis profitabilitas layanan',
        'Sertifikat resmi dari Kemenkes RI',
        'Modul dan template perhitungan'
      ],
      price: 'Mulai dari Rp. 2.500.000,-',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80' // Healthcare finance & cost analysis
    },
    {
      title: 'Navigasi Strategis Manajemen RS',
      category: 'Manajemen',
      duration: '2 Hari',
      level: 'Advanced',
      participants: 'Max 30',
      description: 'Program pelatihan untuk direktur dan manajer senior dalam menyusun strategi jangka panjang dan mengelola perubahan organisasi.',
      topics: [
        'Strategic planning dan business model canvas',
        'Analisis SWOT dan competitive advantage',
        'Change management dan organizational culture',
        'Balanced scorecard untuk rumah sakit',
        'Leadership dalam transformasi digital',
        'Studi kasus transformasi strategis'
      ],
      benefits: [
        'Kemampuan menyusun strategic plan',
        'Teknik change management efektif',
        'Networking dengan pemimpin RS lain',
        'Konsultasi follow-up 3 bulan'
      ],
      price: 'Mulai dari Rp. 2.500.000,-',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80' // Medical training & healthcare professionals
    },
    {
      title: 'Benteng Pertahanan: Risk Management',
      category: 'Manajemen Risiko',
      duration: '2 Hari',
      level: 'Intermediate',
      participants: 'Max 25',
      description: 'Pelatihan manajemen risiko klinis dan non-klinis untuk mencegah insiden dan meningkatkan patient safety.',
      topics: [
        'Identifikasi dan pemetaan risiko RS',
        'Risk assessment dan prioritization',
        'Strategi mitigasi dan kontrol risiko',
        'Incident reporting dan root cause analysis',
        'Budaya keselamatan pasien',
        'Studi kasus penanganan insiden'
      ],
      benefits: [
        'Sistem manajemen risiko terintegrasi',
        'Tools dan template risk assessment',
        'Sertifikat kompetensi risk management',
        'Akses ke knowledge base online'
      ],
      price: 'Mulai dari Rp. 2.500.000,-',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' // Healthcare technology & risk management
    },
    {
      title: 'Resonansi Layanan: Complaint Management',
      category: 'Customer Service',
      duration: '2 Hari',
      level: 'Basic',
      participants: 'Max 30',
      description: 'Pelatihan pengelolaan keluhan pasien dan keluarga untuk meningkatkan kepuasan dan loyalitas pelanggan.',
      topics: [
        'Psikologi keluhan dan ekspektasi pasien',
        'Teknik komunikasi empati dan de-eskalasi',
        'Sistem pengelolaan keluhan efektif',
        'Service recovery dan win-back strategy',
        'Mengubah keluhan menjadi peluang perbaikan',
        'Studi kasus penanganan komplain'
      ],
      benefits: [
        'Kemampuan handling complaint profesional',
        'SOP dan form pengelolaan keluhan',
        'Role play dan simulasi kasus nyata',
        'Sertifikat customer service excellence'
      ],
      price: 'Mulai dari Rp. 2.500.000,-',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80' // Healthcare consultation & management
    },
    {
      title: 'Ekselensi Operasional Rumah Sakit',
      category: 'Operasional',
      duration: '2 Hari',
      level: 'Intermediate',
      participants: 'Max 25',
      description: 'Program peningkatan efisiensi operasional melalui lean management dan continuous improvement.',
      topics: [
        'Prinsip lean management di rumah sakit',
        'Value stream mapping dan waste elimination',
        'Kaizen dan continuous improvement',
        'Key performance indicators (KPI) operasional',
        'Implementasi 5S dan visual management',
        'Studi kasus implementasi lean'
      ],
      benefits: [
        'Metode peningkatan efisiensi operasional',
        'Tools lean management praktis',
        'Pendampingan implementasi 1 bulan',
        'Sertifikat lean healthcare'
      ],
      price: 'Mulai dari Rp. 2.500.000,-',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80' // Medical technology & digital healthcare
    },
    {
      title: 'Otoritas Klinis: Nursing Leadership',
      category: 'Keperawatan',
      duration: '2 Hari',
      level: 'Advanced',
      participants: 'Max 20',
      description: 'Pengembangan kepemimpinan keperawatan untuk kepala ruangan dan supervisor dalam mengelola tim dan meningkatkan kualitas asuhan.',
      topics: [
        'Leadership styles dan situational leadership',
        'Team building dan conflict resolution',
        'Clinical governance dan quality improvement',
        'Performance management dan coaching',
        'Evidence-based nursing practice',
        'Studi kasus kepemimpinan keperawatan'
      ],
      benefits: [
        'Kompetensi kepemimpinan keperawatan',
        'Toolkit manajemen tim keperawatan',
        'Mentoring program 6 bulan',
        'Sertifikat nursing leadership'
      ],
      price: 'Mulai dari Rp. 2.500.000,-',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80' // Nursing team & healthcare professionals
    }
  ]

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
              <span className="material-symbols-outlined text-[16px]">school</span>
              PROGRAM PELATIHAN
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
              Pelatihan Profesional<br />Manajemen Kesehatan
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Program pelatihan terstruktur dan bersertifikat untuk meningkatkan kualitas manajemen dan layanan rumah sakit Anda dengan pendekatan praktis dan aplikatif.
            </p>
          </div>
        </div>
      </section>

        {/* Keunggulan */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                Keunggulan Program
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Sertifikat Resmi</h3>
                <p className="text-xs sm:text-sm text-gray-600">Pengakuan profesional</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Instruktur Ahli</h3>
                <p className="text-xs sm:text-sm text-gray-600">Praktisi berpengalaman</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Kelas Interaktif</h3>
                <p className="text-xs sm:text-sm text-gray-600">Diskusi & studi kasus</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Konsultasi Lanjutan</h3>
                <p className="text-xs sm:text-sm text-gray-600">Support pasca pelatihan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                Program Pelatihan Tersedia
              </h2>
            </div>
            
            <div>
              {/* Category Filter & Schedule Button */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                {/* Dropdown Filter - Modern & Compact */}
                <div className="relative flex-1">
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm bg-white hover:border-emerald-600 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all appearance-none cursor-pointer shadow-sm">
                    <option value="all">Semua Program</option>
                    <option value="manajemen">Manajemen</option>
                    <option value="keuangan">Keuangan</option>
                    <option value="keperawatan">Keperawatan</option>
                    <option value="operasional">Operasional</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="risiko">Manajemen Risiko</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Schedule Button - Modern & Compact */}
                <Link href="/pelatihan/jadwal" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium text-sm hover:from-emerald-700 hover:to-teal-700 transition-all shadow-sm hover:shadow-md whitespace-nowrap">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Jadwal</span>
                </Link>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
            <div className="text-center">
              <svg className="w-12 h-12 text-white/80 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
                Butuh Program Pelatihan Khusus?
              </h2>
              
              <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Kami dapat menyesuaikan program pelatihan sesuai kebutuhan spesifik rumah sakit Anda. Hubungi tim kami untuk konsultasi gratis.
              </p>
              
              <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-slate-900 rounded font-medium hover:bg-slate-50 transition-all text-sm">
                <span>Konsultasi Gratis</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
