import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Kami - Akademi Profesional Indonesia',
  description: 'Akademi Profesional Indonesia adalah mitra terpercaya untuk transformasi digital dan pengembangan kompetensi profesional. Pelajari lebih lanjut tentang visi, misi, dan tim ahli kami.',
  keywords: ['tentang kami', 'profil perusahaan', 'visi misi', 'tim ahli', 'akademi profesional indonesia'],
  openGraph: {
    title: 'Tentang Kami - Akademi Profesional Indonesia',
    description: 'Akademi Profesional Indonesia adalah mitra terpercaya untuk transformasi digital dan pengembangan kompetensi profesional.',
    images: ['/images/tentang-kami-og.jpg'],
  },
}

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Tentang Kami
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Akademi Profesional Indonesia adalah mitra terpercaya untuk transformasi digital 
              dan pengembangan kompetensi profesional di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Mengapa Memilih Akademi Profesional Indonesia?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Sejak didirikan, Akademi Profesional Indonesia telah menjadi pionir dalam 
                menyediakan solusi transformasi digital dan pengembangan kompetensi profesional 
                yang komprehensif untuk berbagai sektor industri.
              </p>
              <p className="text-lg text-secondary-600 mb-8">
                Kami percaya bahwa setiap organisasi dan individu memiliki potensi untuk 
                berkembang melalui pemanfaatan teknologi dan pengembangan keterampilan yang tepat.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-secondary-600">Klien Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-secondary-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-secondary-600">Expert Mentor</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-secondary-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            <div className="bg-secondary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Visi & Misi</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Visi</h4>
                  <p className="text-secondary-600">
                    Menjadi institusi terdepan dalam transformasi digital dan pengembangan 
                    kompetensi profesional di Indonesia yang mendorong pertumbuhan ekonomi digital.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Misi</h4>
                  <ul className="text-secondary-600 space-y-2">
                    <li>• Menyediakan pelatihan berkualitas tinggi untuk meningkatkan kompetensi profesional</li>
                    <li>• Mengembangkan solusi teknologi inovatif untuk berbagai sektor industri</li>
                    <li>• Membangun ekosistem pembelajaran yang berkelanjutan</li>
                    <li>• Mendorong inovasi dan adaptasi teknologi di Indonesia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-lg text-secondary-600">
              Solusi komprehensif untuk kebutuhan transformasi digital dan pengembangan kompetensi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Pelatihan Profesional</h3>
              <p className="text-secondary-600">
                Program pelatihan online dan offline yang dirancang untuk meningkatkan 
                keterampilan profesional sesuai kebutuhan industri.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Jasa Aplikasi Custom</h3>
              <p className="text-secondary-600">
                Pengembangan aplikasi web dan mobile custom untuk UMKM, Corporate, 
                dan Lembaga Pemerintah.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Sertifikasi Kompetensi</h3>
              <p className="text-secondary-600">
                Program sertifikasi profesional akuntansi manajemen yang diakui 
                industri untuk meningkatkan kredibilitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Tim Ahli Kami
            </h2>
            <p className="text-lg text-secondary-600">
              Dibalik kesuksesan kami adalah tim profesional yang berpengalaman dan berdedikasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">DR</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Dr. Sarah Wijaya</h3>
              <p className="text-primary-600 font-semibold mb-3">Direktur Utama</p>
              <p className="text-secondary-600 text-sm">
                Ph.D. in Information Technology dengan 15+ tahun pengalaman dalam 
                transformasi digital dan manajemen proyek teknologi.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">MR</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Michael Rahman</h3>
              <p className="text-primary-600 font-semibold mb-3">Head of Training</p>
              <p className="text-secondary-600 text-sm">
                Certified Professional Trainer dengan spesialisasi dalam pengembangan 
                kompetensi digital dan manajemen bisnis.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">AS</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Ahmad Suryadi</h3>
              <p className="text-primary-600 font-semibold mb-3">Head of Development</p>
              <p className="text-secondary-600 text-sm">
                Senior Software Architect dengan keahlian dalam pengembangan aplikasi 
                enterprise dan cloud computing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-secondary-600">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Kualitas</h3>
              <p className="text-secondary-600">Komitmen untuk memberikan layanan berkualitas tinggi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Inovasi</h3>
              <p className="text-secondary-600">Terus berinovasi dengan teknologi dan metode terbaru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Kolaborasi</h3>
              <p className="text-secondary-600">Bekerja sama dengan klien untuk mencapai tujuan bersama</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Integritas</h3>
              <p className="text-secondary-600">Menjunjung tinggi kejujuran dan transparansi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Ribuan Profesional yang Telah Mempercayai Kami
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Mari wujudkan potensi terbaik Anda bersama Akademi Profesional Indonesia. 
            Konsultasikan kebutuhan Anda dengan tim ahli kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-secondary-50 transition-colors"
            >
              Hubungi Kami
            </a>
            <a
              href="/pelatihan"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Lihat Program
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
