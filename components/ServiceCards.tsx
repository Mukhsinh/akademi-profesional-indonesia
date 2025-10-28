import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Pelatihan Online & Offline",
    description: "Program pelatihan komprehensif untuk meningkatkan keterampilan profesional dengan metode pembelajaran yang fleksibel dan efektif.",
    image: "/images/Pelatihan-Kerja.jpg",
    link: "/pelatihan",
    features: [
      "Pelatihan Online Interaktif",
      "Workshop Offline Hands-on",
      "Mentor Berpengalaman",
      "Sertifikat Resmi"
    ]
  },
  {
    id: 2,
    title: "Jasa Aplikasi Custom",
    description: "Solusi teknologi terdepan untuk UMKM, Corporate, dan Lembaga Pemerintah dengan aplikasi custom sesuai kebutuhan bisnis.",
    image: "/images/pelatihan jasa aplikasi.jfif",
    link: "/jasa-aplikasi",
    features: [
      "Aplikasi Web & Mobile",
      "Sistem Manajemen",
      "Integrasi Database",
      "Support & Maintenance"
    ]
  },
  {
    id: 3,
    title: "Sertifikasi Kompetensi",
    description: "Program sertifikasi profesional akuntansi manajemen yang diakui industri untuk meningkatkan kredibilitas dan kompetensi.",
    image: "/images/Pelatihan-Kerja.jpg",
    link: "/sertifikasi",
    features: [
      "Sertifikasi Akuntansi",
      "Kompetensi Manajemen",
      "Pengakuan Industri",
      "Career Development"
    ]
  }
]

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Layanan Unggulan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Melalui transformasi digital, solusi kami akan membawa bisnis Anda ke level berikutnya
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg rounded-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                >
                  Pelajari Lebih Lanjut
                  <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Siap Memulai Transformasi Digital?
            </h3>
            <p className="text-secondary-600 mb-6">
              Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami dan dapatkan solusi terbaik untuk pertumbuhan perusahaan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center px-8 py-4 bg-hero-gradient text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-200 transform hover:scale-105"
              >
                Konsultasi Gratis
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
