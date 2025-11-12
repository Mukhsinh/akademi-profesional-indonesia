import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CallToAction from "@/components/sections/CallToAction";
import { trainingPrograms } from "@/data/marketing";

export const metadata: Metadata = {
  title: "Pelatihan Online & Offline - Akademi Profesional Indonesia",
  description:
    "Program pelatihan komprehensif untuk meningkatkan keterampilan profesional dengan metode pembelajaran yang fleksibel dan efektif. Mentor berpengalaman dan sertifikat resmi.",
  keywords: ["pelatihan online", "pelatihan offline", "workshop profesional", "sertifikat pelatihan", "keterampilan profesional"],
  openGraph: {
    title: "Pelatihan Online & Offline - Akademi Profesional Indonesia",
    description: "Program pelatihan komprehensif untuk meningkatkan keterampilan profesional dengan metode pembelajaran yang fleksibel dan efektif.",
    images: ["/images/pelatihan-og.jpg"]
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

export default function PelatihanPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <HeroSection
        title="Pelatihan Online & Offline"
        description="Tingkatkan keterampilan profesional Anda dengan program pelatihan komprehensif yang dirancang khusus untuk kebutuhan industri modern."
        textClassName="text-foreground"
        titleClassName="text-foreground-strong drop-shadow-none"
        descriptionClassName="text-xl text-muted-strong max-w-3xl mx-auto"
        overlayClassName={null}
        buttons={[
          {
            href: "/kontak",
            label: "Konsultasi Program",
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
              <h3 className="text-lg font-semibold text-foreground-strong mb-2">Pelatihan Online</h3>
              <p className="text-muted-strong">Akses materi pembelajaran kapan saja, di mana saja dengan platform interaktif.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground-strong mb-2">Workshop Offline</h3>
              <p className="text-muted-strong">Pengalaman hands-on dengan mentor berpengalaman di lokasi strategis.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground-strong mb-2">Mentor Berpengalaman</h3>
              <p className="text-muted-strong">Belajar dari praktisi industri dengan pengalaman bertahun-tahun.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground-strong mb-2">Sertifikat Resmi</h3>
              <p className="text-muted-strong">Dapatkan sertifikat yang diakui industri untuk meningkatkan kredibilitas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground-strong mb-4">
              Program Pelatihan Unggulan
            </h2>
            <p className="text-lg text-muted-strong">
              Pilih program yang sesuai dengan kebutuhan dan jadwal Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div
                key={program.title}
                className="group relative overflow-hidden rounded-3xl shadow-soft bg-white transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl focus-within:-translate-y-2 focus-within:shadow-xl focus-within:ring-4 focus-within:ring-primary-200/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100`}
                />
                <div className="relative p-8 h-full flex flex-col gap-6">
                  <div>
                    <span
                      className={`inline-flex items-center px-4 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-gradient-to-r ${program.gradient} text-white group-hover:bg-white group-hover:text-primary-700 group-focus-within:bg-white group-focus-within:text-primary-700 transition-colors duration-300`}
                    >
                      Program Unggulan
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-white group-focus-within:text-white group-active:text-white">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-muted transition-colors group-hover:text-white/90 group-focus-within:text-white/90 group-active:text-white/90">
                      {program.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-foreground-soft transition-colors group-hover:text-white group-focus-within:text-white group-active:text-white"
                      >
                        <svg
                          className="h-5 w-5 mr-3 text-primary-600 transition-colors group-hover:text-white group-focus-within:text-white group-active:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <a
                      href="/kontak"
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white shadow-lg shadow-primary-900/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/30 group-hover:bg-white group-hover:text-primary-700 group-focus-within:bg-white group-focus-within:text-primary-700 group-active:bg-white group-active:text-primary-700"
                    >
                      Daftar Sekarang
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
        title="Siap Meningkatkan Keterampilan Profesional Anda?"
        description="Bergabunglah dengan ribuan profesional yang telah mempercayai program pelatihan kami untuk mengembangkan karir mereka."
        actions={[
          {
            href: "/kontak",
            label: "Konsultasi Gratis",
            className: "inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors",
          },
          {
            href: "/kontak",
            label: "Daftar Pelatihan",
            className: "inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors",
          },
        ]}
      />
    </div>
  )
}

