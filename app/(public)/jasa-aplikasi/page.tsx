import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CallToAction from "@/components/sections/CallToAction";
import { applicationSolutions } from "@/data/marketing";

export const metadata: Metadata = {
  title: "Jasa Aplikasi Custom - Akademi Profesional Indonesia",
  description:
    "Solusi aplikasi berbasis web untuk layanan kesehatan, UMKM, dan bisnis digital yang dirancang khusus untuk akselerasi kinerja organisasi.",
  keywords: [
    "aplikasi web",
    "unit cost rumah sakit",
    "manajemen risiko",
    "clinical pathway",
    "laporan keuangan UMKM",
    "inventory management",
    "strategic management",
    "toko digital",
    "custom development"
  ],
  openGraph: {
    title: "Jasa Aplikasi Custom - Akademi Profesional Indonesia",
    description:
      "Solusi aplikasi berbasis web untuk layanan kesehatan, UMKM, dan bisnis digital yang dirancang khusus untuk akselerasi kinerja organisasi.",
    images: ["/images/jasa-aplikasi-og.jpg"]
  }
}

const ArrowRightIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
  </svg>
)

export default function JasaAplikasiPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Jasa Aplikasi Custom"
        description="Solusi aplikasi berbasis web untuk layanan kesehatan, UMKM, dan bisnis digital yang dirancang khusus untuk mengakselerasi kinerja organisasi Anda."
        buttons={[
          {
            href: "/kontak",
            label: "Konsultasi Gratis",
            className: "btn-primary text-base",
            icon: <ArrowRightIcon />,
          },
          {
            href: "/tentang-kami",
            label: "Tentang Kami",
            className: "btn-secondary text-base",
            icon: <ClockIcon />,
          },
        ]}
      />

      {/* Applications Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white">
              Berbasis Web Modern
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-secondary-900">Solusi Aplikasi Unggulan Kami</h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              Setiap aplikasi dikembangkan berbasis web, responsif di berbagai perangkat, dan siap disesuaikan dengan
              proses bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {applicationSolutions.map((app, index) => (
              <div
                key={app.title}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl focus-within:-translate-y-2 focus-within:shadow-xl focus-within:ring-4 focus-within:ring-primary-200/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100`}
                />
                <div className="relative p-8 flex flex-col gap-6 h-full">
                  <div className={`relative h-40 rounded-2xl bg-gradient-to-br ${app.gradient} shadow-lg shadow-primary-900/20 flex items-center justify-center`}>
                    <span className="px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] bg-white/20 text-white rounded-full backdrop-blur-sm">
                      Web Based
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-white group-focus-within:text-white group-active:text-white">
                      {app.title}
                    </h3>
                    <p className="mt-3 text-secondary-600 transition-colors group-hover:text-white/90 group-focus-within:text-white/90 group-active:text-white/90">
                      {app.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {app.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center text-secondary-700 transition-colors group-hover:text-white group-focus-within:text-white group-active:text-white"
                      >
                        <svg
                          className="h-5 w-5 mr-3 text-[#0f172a] transition-colors group-hover:text-white group-focus-within:text-white group-active:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a
                      href="/kontak"
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white shadow-lg shadow-primary-900/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/30 group-hover:bg-white group-hover:text-primary-700 group-focus-within:bg-white group-focus-within:text-primary-700 group-active:bg-white group-active:text-primary-700"
                    >
                      Konsultasikan Solusi
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-focus-within:translate-x-1 group-active:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Siap Mengembangkan Solusi Web yang Tepat untuk Bisnis Anda?"
        description="Tim kami akan membantu mulai dari analisis kebutuhan, desain UI/UX, pengembangan, hingga support berkelanjutan."
        actions={[
          {
            href: "/kontak",
            label: "Konsultasi Gratis",
            className: "inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors",
          },
          {
            href: "/kontak",
            label: "Request Proposal",
            className: "inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors",
          },
        ]}
      />
    </div>
  )
}

