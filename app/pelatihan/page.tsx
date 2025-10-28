import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pelatihan Online & Offline - Akademi Profesional Indonesia',
  description: 'Program pelatihan komprehensif untuk meningkatkan keterampilan profesional dengan metode pembelajaran yang fleksibel dan efektif. Mentor berpengalaman dan sertifikat resmi.',
  keywords: ['pelatihan online', 'pelatihan offline', 'workshop profesional', 'sertifikat pelatihan', 'keterampilan profesional'],
  openGraph: {
    title: 'Pelatihan Online & Offline - Akademi Profesional Indonesia',
    description: 'Program pelatihan komprehensif untuk meningkatkan keterampilan profesional dengan metode pembelajaran yang fleksibel dan efektif.',
    images: ['/images/pelatihan-og.jpg'],
  },
}

export default function PelatihanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Pelatihan Online & Offline
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tingkatkan keterampilan profesional Anda dengan program pelatihan komprehensif 
              yang dirancang khusus untuk kebutuhan industri modern.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Pelatihan Online</h3>
              <p className="text-secondary-600">Akses materi pembelajaran kapan saja, di mana saja dengan platform interaktif.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Workshop Offline</h3>
              <p className="text-secondary-600">Pengalaman hands-on dengan mentor berpengalaman di lokasi strategis.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Mentor Berpengalaman</h3>
              <p className="text-secondary-600">Belajar dari praktisi industri dengan pengalaman bertahun-tahun.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Sertifikat Resmi</h3>
              <p className="text-secondary-600">Dapatkan sertifikat yang diakui industri untuk meningkatkan kredibilitas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Program Pelatihan Unggulan
            </h2>
            <p className="text-lg text-secondary-600">
              Pilih program yang sesuai dengan kebutuhan dan jadwal Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Digital Marketing</h3>
              <p className="text-secondary-600 mb-4">
                Kuasai strategi digital marketing untuk meningkatkan penjualan dan brand awareness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SEO & SEM
                </li>
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Social Media Marketing
                </li>
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Content Marketing
                </li>
              </ul>
              <a href="/kontak" className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                Daftar Sekarang
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Data Analysis</h3>
              <p className="text-secondary-600 mb-4">
                Pelajari analisis data untuk pengambilan keputusan bisnis yang tepat.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Excel & Power BI
                </li>
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Python & R
                </li>
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Machine Learning
                </li>
              </ul>
              <a href="/kontak" className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                Daftar Sekarang
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Project Management</h3>
              <p className="text-secondary-600 mb-4">
                Kelola proyek dengan efektif menggunakan metodologi dan tools terbaru.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Agile & Scrum
                </li>
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Risk Management
                </li>
                <li className="flex items-center text-sm text-secondary-600">
                  <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Team Leadership
                </li>
              </ul>
              <a href="/kontak" className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Meningkatkan Keterampilan Profesional Anda?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Bergabunglah dengan ribuan profesional yang telah mempercayai program pelatihan kami 
            untuk mengembangkan karir mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-secondary-50 transition-colors"
            >
              Konsultasi Gratis
            </a>
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Daftar Pelatihan
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
