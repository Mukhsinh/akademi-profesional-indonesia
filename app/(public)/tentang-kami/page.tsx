import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Akademi Profesional Indonesia",
  description:
    "Akademi Profesional Indonesia adalah mitra terpercaya untuk transformasi digital dan pengembangan kompetensi profesional. Pelajari lebih lanjut tentang visi, misi, dan tim ahli kami.",
  keywords: ["tentang kami", "profil perusahaan", "visi misi", "tim ahli", "akademi profesional indonesia"],
  openGraph: {
    title: "Tentang Kami - Akademi Profesional Indonesia",
    description:
      "Akademi Profesional Indonesia adalah mitra terpercaya untuk transformasi digital dan pengembangan kompetensi profesional.",
    images: ["/images/tentang-kami-og.jpg"]
  }
}

const STATS = [
  { label: "Klien & Mitra", value: "500+" },
  { label: "Profesional Dilatih", value: "1.000+" },
  { label: "Mentor & Konsultan", value: "50+" },
  { label: "Tahun Pengalaman", value: "5+" }
]

const VALUES = [
  {
    title: "Kualitas",
    description: "Komitmen kami pada standar tertinggi dalam setiap program, solusi, dan layanan.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Inovasi",
    description: "Terus bereksperimen dengan teknologi dan pendekatan baru yang relevan dengan pasar.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Kolaborasi",
    description: "Berkolaborasi erat dengan klien untuk menghasilkan dampak yang terukur dan berkelanjutan.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    )
  },
  {
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran, transparansi, dan tanggung jawab profesional.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

const TEAM = [
  {
    initials: "MH",
    name: "Mukhsin Hadi, SE, M.Si, CGAA, CPFRM, CSEP, CRP, CPRM, CSCAP, CPABC",
    role: "Trainer",
    description:
      "8+ tahun mengelola akuntansi manajemen rumah sakit dan 15+ berpengalaman dalam akuntansi sektor publik."
  },
  {
    initials: "MR",
    name: "Michael Rahman",
    role: "Head of Training",
    description:
      "Certified Professional Trainer dengan fokus pada pengembangan kompetensi digital dan manajemen bisnis yang adaptif."
  },
  {
    initials: "AS",
    name: "Ahmad Suryadi",
    role: "Head of Development",
    description:
      "Senior Software Architect dengan pengalaman luas pada pengembangan aplikasi enterprise dan solusi cloud."
  }
]

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-surface">
      <section className="hero-surface wave-bottom py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div className="space-y-6 text-white">
              <span className="tag-badge">Tentang Kami</span>
              <h1 className="text-4xl sm:text-5xl font-semibold text-gradient">
                Menyalakan Masa Depan Digital: Saat Kompetensi Bertemu Teknologi
              </h1>
              <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
                Akademi Profesional Indonesia adalah mitra terpercaya bagi organisasi dan individu yang ingin bertumbuh melalui
                teknologi, peningkatan kompetensi, dan sertifikasi profesional.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-xl">
                {STATS.map((stat, index) => (
                  <div key={stat.label} className="rounded-3xl border border-white/25 bg-white/15 p-5 backdrop-blur-md reveal-up" style={{ animationDelay: `${index * 0.12}s` }}>
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-12 left-6 w-40 h-40 rounded-full bg-accent-500/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/20 shadow-[0_45px_90px_-50px_rgba(15,23,42,0.65)]">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                  alt="Kolaborasi tim digital"
                  width={720}
                  height={840}
                  className="object-cover h-full w-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/20 px-5 py-4 text-white backdrop-blur-md border border-white/25">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-1">Visi Kami</p>
                  <p className="font-semibold">
                    Membuka akses kompetensi digital bagi setiap profesional di Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-primary-500/15 to-transparent blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-wave px-10 py-12 sm:px-14 lg:px-18">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div className="space-y-6">
                <span className="section-header text-primary-500">Visi & Misi</span>
                <h2 className="headline text-slate-900">Menghubungkan Potensi Manusia dengan Teknologi</h2>
                <p className="subheading">
                  Sejak berdiri, kami berfokus pada penyediaan pengalaman belajar yang berdampak dan solusi teknologi yang
                  relevan untuk lintas industri.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-glass p-6 bg-white/70">
                    <h3 className="text-lg font-semibold text-primary-600 mb-3">Visi</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Menjadi institusi terdepan yang mempersiapkan talenta Indonesia menghadapi era ekonomi digital melalui
                      pembelajaran, teknologi, dan kolaborasi strategis.
                    </p>
                  </div>
                  <div className="card-glass p-6 bg-white/70">
                    <h3 className="text-lg font-semibold text-primary-600 mb-3">Misi</h3>
                    <ul className="text-slate-600 space-y-2 leading-relaxed text-sm">
                      <li>• Menyediakan pelatihan berkualitas tinggi dan relevan dengan industri.</li>
                      <li>• Mengembangkan solusi teknologi inovatif untuk berbagai sektor.</li>
                      <li>• Membangun ekosistem pembelajaran berkelanjutan dan inklusif.</li>
                      <li>• Mendorong adopsi teknologi dan mindset digital di Indonesia.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="floating">
                  <div className="rounded-[32px] border border-primary-100 bg-white/90 shadow-[0_35px_60px_-45px_rgba(15,23,42,0.35)] p-8 space-y-6">
                    <h3 className="text-xl font-semibold text-slate-900">Mengapa kami berbeda?</h3>
                    <ul className="space-y-4 text-sm text-slate-600">
                      <li className="flex gap-3">
                        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary-500/60" />
                        <span>Integrator antara pelatihan, solusi aplikasi, dan sertifikasi profesional.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary-500/60" />
                        <span>Mentor-mentor praktisi dengan rekam jejak industri yang relevan.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary-500/60" />
                        <span>Fokus pada pengalaman belajar yang humanis dan berdampak nyata.</span>
                      </li>
                    </ul>
                    <Link
                      href="/kontak"
                      className="btn-primary text-sm"
                    >
                      Diskusikan kebutuhan Anda
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-header text-primary-500">Layanan</span>
            <h2 className="headline text-slate-900">Satu mitra, berbagai solusi digital terintegrasi</h2>
            <p className="subheading">
              Dampingi transformasi Anda dengan rangkaian layanan yang saling melengkapi untuk membangun kapasitas internal dan
              menghadirkan solusi teknologi yang relevan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pelatihan Profesional",
                description:
                  "Pelatihan online & offline dengan kurikulum adaptif, mentor praktisi, serta sertifikasi resmi.",
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Jasa Aplikasi Custom",
                description:
                  "Pengembangan aplikasi web & mobile yang dirancang khusus untuk kebutuhan operasional Anda.",
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Sertifikasi Kompetensi",
                description:
                  "Skema sertifikasi akuntansi manajemen dan keuangan yang diakui industri serta regulator.",
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              }
            ].map((service) => (
              <div key={service.title} className="card-glass bg-white p-8 text-center hover:-translate-y-2 transition">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-primary-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-header text-primary-500">Tim Ahli</span>
            <h2 className="headline text-slate-900">Dibangun oleh praktisi yang memahami dinamika industri</h2>
            <p className="subheading">
              Tim multidisipliner kami memadukan pengalaman teknis, manajerial, dan edukasi untuk menghadirkan solusi end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, index) => (
              <div key={member.name} className="card-glass bg-white/90 p-8 text-center reveal-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white text-2xl font-semibold shadow-lg">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 tracking-tight">{member.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-header text-primary-500">Nilai Kami</span>
            <h2 className="headline text-slate-900">Prinsip yang menuntun setiap kolaborasi</h2>
            <p className="subheading">
              Nilai-nilai ini memastikan setiap program dan solusi yang kami hadirkan berdampak secara kompetensi dan bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="card-glass bg-white/85 p-6 text-center reveal-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-surface rounded-[36px] overflow-hidden">
            <div className="relative px-6 py-16 sm:px-12 lg:px-20">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
                <div className="space-y-6 text-white">
                  <span className="tag-badge">Ayo Bertumbuh</span>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-gradient">Mari kita rancang perjalanan transformasi Anda bersama</h2>
                  <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                    Bergabunglah dengan ratusan organisasi yang telah mempercayakan pengembangan talenta dan solusi digital mereka kepada Akademi Profesional Indonesia.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/kontak" className="btn-primary text-base">
                      Jadwalkan Konsultasi
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link href="/pelatihan" className="btn-secondary text-base">
                      Lihat Program
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-white/20 blur-2xl" />
                  <div className="card-glass bg-white/85 p-8 shadow-[0_35px_80px_-60px_rgba(15,23,42,0.6)]">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      “Bersama klien, kami membangun roadmap transformasi digital dari perencanaan hingga implementasi.”
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold">
                        AI
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Tim Konsultan API</p>
                        <p className="text-sm text-slate-500">Akademi Profesional Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

