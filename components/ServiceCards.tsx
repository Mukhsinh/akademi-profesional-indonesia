import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Pelatihan Online & Offline",
    description: "Program pelatihan komprehensif untuk meningkatkan keterampilan profesional dengan metode pembelajaran yang fleksibel dan efektif.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
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
    title: "Aplikasi Digital",
    description: "Solusi teknologi terdepan untuk rumah sakit dengan aplikasi digital yang terintegrasi sesuai kebutuhan operasional.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    link: "/layanan",
    features: [
      "Aplikasi Web & Mobile",
      "Sistem Manajemen",
      "Integrasi Database",
      "Support & Maintenance"
    ]
  },
  {
    id: 3,
    title: "Konsultasi Manajemen",
    description: "Konsultasi profesional untuk transformasi digital dan manajemen operasional rumah sakit yang efektif dan efisien.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2070&auto=format&fit=crop",
    link: "/kontak",
    features: [
      "Konsultasi Strategis",
      "Analisis Kebutuhan",
      "Implementasi Solusi",
      "Monitoring & Evaluasi"
    ]
  }
]

export default function ServiceCards() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Aplikasi Unggulan Kami
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Melalui transformasi digital, solusi kami akan membawa bisnis Anda ke level berikutnya
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-secondary-600">
                      <svg className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 group-hover:shadow-medium"
                >
                  Pelajari Lebih Lanjut
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                href="/tentang"
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
