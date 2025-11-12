import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak - Akademi Profesional Indonesia",
  description:
    "Hubungi Akademi Profesional Indonesia untuk konsultasi gratis pelatihan, jasa aplikasi custom, dan sertifikasi kompetensi. Tim ahli kami siap membantu kebutuhan bisnis Anda.",
  keywords: ["kontak", "konsultasi gratis", "hubungi kami", "akademi profesional indonesia", "customer service"],
  openGraph: {
    title: "Kontak - Akademi Profesional Indonesia",
    description:
      "Hubungi Akademi Profesional Indonesia untuk konsultasi gratis pelatihan, jasa aplikasi custom, dan sertifikasi kompetensi.",
    images: ["/images/kontak-og.jpg"]
  }
}

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7fb] via-white to-[#f4f7fb]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/60 via-blue-500/45 to-cyan-400/55" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] rounded-full bg-white/10 backdrop-blur-md">
              Mari Terhubung
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-6">Hubungi Kami</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami. Dapatkan solusi terbaik untuk transformasi
              digital dan pengembangan kompetensi.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8a2 2 0 01-2 2H5a2 2 0 01-2-2m18 0V6a2 2 0 00-2-2h-3.28a1 1 0 00-.948.684l-1.497 4.493a1 1 0 01-.95.683H9.675a1 1 0 01-.95-.683L7.228 4.684A1 1 0 006.28 4H3a2 2 0 00-2 2v2" />
                </svg>
                Respon maksimal 1-2 hari kerja
              </div>
              <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                Dukungan pelatihan, aplikasi, & sertifikasi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#dbeafe20,_transparent_65%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="relative">
              <div className="absolute -top-12 -left-16 w-36 h-36 bg-primary-500/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-14 -right-12 w-40 h-40 bg-sky-400/20 blur-3xl rounded-full" />
              <ContactForm />
            </div>

            <div className="relative">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-10 space-y-8">
                <div>
                  <span className="inline-flex items-center px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] rounded-full bg-slate-100 text-primary-600">
                    Informasi Kontak
                  </span>
                  <h2 className="mt-5 text-3xl font-bold text-slate-900">Tim kami siap mendengar Anda</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Sampaikan kebutuhan Anda terkait pelatihan, aplikasi berbasis web, maupun sertifikasi. Kami akan
                    merespons dengan rekomendasi terbaik.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/60">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">Telepon</h3>
                      <p className="text-slate-600 leading-relaxed">+62 857-2611-2001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/60">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                      <a href="mailto:akademiprofesional@gmail.com" className="text-primary-600 font-semibold hover:underline">
                        akademiprofesional@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/60">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">Alamat</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Perum Saphire Townhouse Blok C3<br />
                        Jl. Truntum<br />
                        Pekalongan 51147<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/60">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">Jam Operasional</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Senin - Jumat: 08:00 - 17:00<br />
                        Sabtu: 08:00 - 12:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Butuh bantuan cepat?</h3>
                  <p className="text-slate-600 mb-5">
                    Gunakan widget chat di kanan bawah atau hubungi kami via WhatsApp untuk respon instan.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/6285726112001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="mailto:akademiprofesional@gmail.com"
                      className="flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Kami
                    </a>
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

