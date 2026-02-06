import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import ChatWidget from '@/components/ChatWidget'

export default function KontakPage() {
  const offices = [
    {
      title: 'Kantor Pusat',
      address: 'Jl. Truntum Perumahan Saphire Townhouse Blok C-3 Pekalongan',
      email: 'info@akademiprofesional.co.id',
      whatsapp: '+62 857 2611 2001'
    }
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="layout-container flex grow flex-col bg-grid-pattern relative">
      {/* Hero Section - Clean & Professional */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20 mb-6">
              <span className="material-symbols-outlined text-[16px]">contact_support</span>
              HUBUNGI KAMI
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-white">
              Mari Berdiskusi<br />Solusi Terbaik Anda
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk transformasi digital dan pengembangan SDM rumah sakit Anda.
            </p>
          </div>
        </div>
      </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                Informasi Kontak
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-all text-center">
                <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-base font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600 mb-3">Kirim email ke kami</p>
                <a href="mailto:info@akademiprofesional.co.id" className="text-blue-600 font-semibold hover:underline text-sm">
                  info@akademiprofesional.co.id
                </a>
              </div>

              {/* Address */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition-all text-center">
                <svg className="w-10 h-10 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-base font-bold text-gray-900 mb-2">Alamat</h3>
                <p className="text-sm text-gray-600 mb-3">Kunjungi kantor kami</p>
                <p className="text-purple-600 font-semibold text-sm">
                  Jl. Truntum Perumahan Saphire Townhouse Blok C-3 Pekalongan
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 hover:border-green-400 transition-all text-center">
                <svg className="w-10 h-10 text-green-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <h3 className="text-base font-bold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-3">Chat dengan kami</p>
                <a href="https://wa.me/6285726112001" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline text-sm">
                  +62 857 2611 2001
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Form and Office Info Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                Kirim Pesan
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Office Info & Map */}
              <div className="space-y-6">
                {/* Office Card */}
                <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Kantor Pusat
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Alamat</p>
                        <p className="text-sm text-gray-600">
                          Jl. Truntum Perumahan Saphire Townhouse<br />
                          Blok C-3 Pekalongan<br />
                          Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Jam Operasional</p>
                        <p className="text-sm text-gray-600">
                          Senin - Jumat: 08:00 - 17:00 WIB<br />
                          Sabtu: 08:00 - 12:00 WIB<br />
                          Minggu & Libur: Tutup
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-lg overflow-hidden border border-gray-200 h-[300px] bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-gray-500 text-sm">Google Maps</p>
                      <p className="text-gray-400 text-xs">Saphire Townhouse, Pekalongan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
