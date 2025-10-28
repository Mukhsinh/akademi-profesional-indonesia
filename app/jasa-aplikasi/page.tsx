import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jasa Aplikasi Custom - Akademi Profesional Indonesia',
  description: 'Solusi teknologi terdepan untuk UMKM, Corporate, dan Lembaga Pemerintah dengan aplikasi custom sesuai kebutuhan bisnis. Aplikasi web, mobile, sistem manajemen, dan integrasi database.',
  keywords: ['aplikasi custom', 'pengembangan aplikasi', 'aplikasi web', 'aplikasi mobile', 'sistem manajemen', 'UMKM', 'corporate', 'pemerintah'],
  openGraph: {
    title: 'Jasa Aplikasi Custom - Akademi Profesional Indonesia',
    description: 'Solusi teknologi terdepan untuk UMKM, Corporate, dan Lembaga Pemerintah dengan aplikasi custom sesuai kebutuhan bisnis.',
    images: ['/images/jasa-aplikasi-og.jpg'],
  },
}

export default function JasaAplikasiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Jasa Aplikasi Custom
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Solusi teknologi terdepan untuk UMKM, Corporate, dan Lembaga Pemerintah 
              dengan aplikasi custom yang sesuai dengan kebutuhan spesifik bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Layanan Pengembangan Aplikasi
            </h2>
            <p className="text-lg text-secondary-600">
              Dari konsep hingga implementasi, kami menyediakan solusi lengkap untuk kebutuhan digital Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-large transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Aplikasi Web</h3>
              <p className="text-secondary-600 mb-4">
                Aplikasi web responsif dan modern dengan teknologi terdepan untuk performa optimal.
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• React, Next.js, Vue.js</li>
                <li>• Responsive Design</li>
                <li>• SEO Optimized</li>
                <li>• Cross-browser Compatible</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-large transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Aplikasi Mobile</h3>
              <p className="text-secondary-600 mb-4">
                Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa tinggi.
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• React Native, Flutter</li>
                <li>• Native iOS & Android</li>
                <li>• Offline Capability</li>
                <li>• App Store Ready</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-large transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Sistem Manajemen</h3>
              <p className="text-secondary-600 mb-4">
                Sistem manajemen bisnis terintegrasi untuk mengoptimalkan operasional perusahaan.
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• ERP & CRM Systems</li>
                <li>• Inventory Management</li>
                <li>• Financial Reporting</li>
                <li>• User Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Solusi untuk Semua Jenis Bisnis
            </h2>
            <p className="text-lg text-secondary-600">
              Kami melayani berbagai sektor dengan solusi yang disesuaikan dengan kebutuhan spesifik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">UMKM</h3>
              <p className="text-secondary-600 mb-6">
                Solusi teknologi terjangkau untuk membantu UMKM berkembang dan bersaing di era digital.
              </p>
              <ul className="text-left space-y-2 text-sm text-secondary-600">
                <li>• Website & E-commerce</li>
                <li>• Aplikasi Mobile Sederhana</li>
                <li>• Sistem POS</li>
                <li>• Digital Marketing Tools</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Corporate</h3>
              <p className="text-secondary-600 mb-6">
                Sistem enterprise yang komprehensif untuk mengoptimalkan operasional perusahaan besar.
              </p>
              <ul className="text-left space-y-2 text-sm text-secondary-600">
                <li>• Enterprise Applications</li>
                <li>• Data Analytics Platform</li>
                <li>• Integration Services</li>
                <li>• Cloud Migration</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Lembaga Pemerintah</h3>
              <p className="text-secondary-600 mb-6">
                Solusi teknologi yang aman dan terpercaya untuk digitalisasi layanan publik.
              </p>
              <ul className="text-left space-y-2 text-sm text-secondary-600">
                <li>• E-Government Systems</li>
                <li>• Citizen Portal</li>
                <li>• Data Security & Compliance</li>
                <li>• Legacy System Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Proses Pengembangan Aplikasi
            </h2>
            <p className="text-lg text-secondary-600">
              Metodologi terstruktur untuk memastikan hasil yang optimal sesuai kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Konsultasi</h3>
              <p className="text-secondary-600">Analisis kebutuhan dan perancangan solusi yang tepat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Perancangan</h3>
              <p className="text-secondary-600">UI/UX design dan arsitektur sistem yang optimal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Pengembangan</h3>
              <p className="text-secondary-600">Implementasi dengan teknologi terdepan dan best practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Deployment</h3>
              <p className="text-secondary-600">Testing, deployment, dan support berkelanjutan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Mengembangkan Aplikasi Custom untuk Bisnis Anda?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan teknologi Anda dengan tim ahli kami dan dapatkan solusi 
            yang tepat untuk mengoptimalkan operasional bisnis.
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
              Request Proposal
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
