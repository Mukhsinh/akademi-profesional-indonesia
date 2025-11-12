import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CallToAction from "@/components/sections/CallToAction";
import { certificationPrograms } from "@/data/marketing";

export const metadata: Metadata = {
  title: "Sertifikasi Kompetensi Profesional - Akademi Profesional Indonesia",
  description: "Program sertifikasi profesional akuntansi manajemen yang diakui industri untuk meningkatkan kredibilitas dan kompetensi. Sertifikat resmi untuk career development.",
  keywords: ["sertifikasi akuntansi", "kompetensi manajemen", "sertifikat profesional", "akuntansi manajemen", "career development", "pengakuan industri"],
  openGraph: {
    title: "Sertifikasi Kompetensi Profesional - Akademi Profesional Indonesia",
    description: "Program sertifikasi profesional akuntansi manajemen yang diakui industri untuk meningkatkan kredibilitas dan kompetensi.",
    images: ["/images/sertifikasi-og.jpg"]
  }
}

const CertificationIcon = ({ path }: { path: string }) => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
)

export default function SertifikasiPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Sertifikasi Kompetensi Profesional"
        description="Tingkatkan kredibilitas dan kompetensi profesional Anda dengan sertifikasi akuntansi manajemen yang diakui industri dan pemerintah."
      />

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Mengapa Memilih Sertifikasi Kami?
            </h2>
            <p className="text-lg text-secondary-600">
              Sertifikat yang diakui industri untuk meningkatkan nilai profesional Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Diakui Industri</h3>
              <p className="text-secondary-600">Sertifikat yang diakui oleh asosiasi profesi dan industri</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Career Boost</h3>
              <p className="text-secondary-600">Meningkatkan peluang karir dan gaji yang lebih baik</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Materi Terupdate</h3>
              <p className="text-secondary-600">Kurikulum yang selalu mengikuti perkembangan industri</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Mentor Expert</h3>
              <p className="text-secondary-600">Dibimbing oleh praktisi berpengalaman di bidangnya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Programs Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Program Sertifikasi Unggulan
            </h2>
            <p className="text-lg text-secondary-600">
              Pilih program sertifikasi yang sesuai dengan jalur karir Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Pelatihan dan Sertifikasi Akuntansi Keuangan",
                description:
                  "Dasar-dasar akuntansi bagi pemula dan profesional untuk memperkuat fundamental laporan keuangan.",
                features: ["Prinsip Akuntansi Dasar", "Laporan Keuangan", "Siklus Akuntansi", "Software Akuntansi"],
                price: "Rp 2.500.000",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                gradient: "from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]"
              },
              {
                title: "Pelatihan dan Sertifikasi Manajemen Keuangan",
                description:
                  "Kompetensi manajemen keuangan untuk supervisor dan manajer dalam mengelola performa finansial.",
                features: ["Budgeting & Forecasting", "Financial Analysis", "Risk Management", "Investment Decision"],
                price: "Rp 4.500.000",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                gradient: "from-[#f97316] via-[#ef4444] to-[#dc2626]"
              },
              {
                title: "Pelatihan dan Sertifikasi Akuntansi Manajemen",
                description:
                  "Program komprehensif untuk akuntan manajemen tingkat senior dan eksekutif dalam pengambilan keputusan strategis.",
                features: ["Strategic Management", "Cost Management", "Performance Management", "Corporate Governance"],
                price: "Rp 7.500.000",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                gradient: "from-[#10b981] via-[#059669] to-[#047857]"
              }
            ].map((program, index) => (
              <div
                key={program.title}
                className="relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${program.gradient}`} />
                <div className="relative p-8 flex flex-col gap-6 h-full">
                  <span className="inline-flex items-center px-4 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-black/80 text-white">
                    Pelatihan & Sertifikasi
                  </span>
                  <div className="flex items-center gap-4 text-primary-600 group-hover:text-white transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center shadow-inner group-hover:bg-white/20">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-white transition-colors">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-secondary-600 group-hover:text-white/90 transition-colors">
                    {program.description}
                  </p>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-secondary-700 group-hover:text-white transition-colors">
                        <svg className="h-5 w-5 mr-3 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-secondary-100 group-hover:border-white/40">
                    <span className="text-2xl font-bold text-primary-600 group-hover:text-white transition-colors">
                      {program.price}
                    </span>
                    <a
                      href="/kontak"
                      className="inline-flex items-center px-5 py-3 text-sm font-semibold rounded-xl bg-primary-600 text-white hover:bg-primary-700 group-hover:bg-white group-hover:text-primary-600 transition-colors duration-300"
                    >
                      Daftar
                      <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Proses Sertifikasi
            </h2>
            <p className="text-lg text-secondary-600">
              Langkah-langkah untuk mendapatkan sertifikat kompetensi profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Pendaftaran</h3>
              <p className="text-secondary-600">Daftar program yang sesuai dengan kebutuhan Anda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Pre-Assessment</h3>
              <p className="text-secondary-600">Evaluasi kemampuan awal untuk penyesuaian kurikulum</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Pelatihan</h3>
              <p className="text-secondary-600">Program pembelajaran intensif dengan mentor expert</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Ujian</h3>
              <p className="text-secondary-600">Tes kompetensi untuk mengukur penguasaan materi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Sertifikat</h3>
              <p className="text-secondary-600">Penerbitan sertifikat resmi yang diakui industri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tingkatkan Kredibilitas Profesional Anda
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Dapatkan sertifikat kompetensi yang diakui industri dan buka peluang karir yang lebih luas 
            dengan program sertifikasi profesional kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Konsultasi Program
            </a>
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

