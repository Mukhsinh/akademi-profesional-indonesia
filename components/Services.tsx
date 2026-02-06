'use client'

import { useRouter } from 'next/navigation'

export default function Services() {
  const router = useRouter()

  const services = [
    {
      icon: 'dns',
      title: 'Sistem Informasi Manajemen',
      description: 'Integrasi data pasien dan operasional rumah sakit dalam satu platform digital yang aman, cepat, dan efisien, sesuai standar regulasi terkini.',
      link: 'Pelajari Lebih Lanjut',
      href: '/layanan'
    },
    {
      icon: 'school',
      title: 'Pelatihan SDM Medis',
      description: 'Program pengembangan kompetensi berkelanjutan untuk staf medis dan administratif dengan kurikulum terstruktur berbasis standar akreditasi.',
      link: 'Lihat Program',
      href: '/pelatihan'
    },
    {
      icon: 'account_balance',
      title: 'Konsultasi Manajemen Keuangan',
      description: 'Transformasi kesehatan finansial institusi Anda melalui strategi pengelolaan anggaran yang cerdas, optimalisasi cash flow, dan perencanaan investasi berkelanjutan untuk pertumbuhan jangka panjang.',
      link: 'Hubungi Konsultan',
      href: '/kontak'
    }
  ]

  return (
    <div className="layout-container flex flex-col bg-white dark:bg-[#0f1218]">
      <div className="flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
          <div className="flex flex-col gap-12 py-20 @container">
            {/* Section Header */}
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 border border-blue-100 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
                Aplikasi Unggulan
              </h2>
              <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-extrabold leading-tight md:text-4xl max-w-[720px]">
                Solusi Komprehensif Kami
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-[640px]">
                Kami menyediakan ekosistem layanan terpadu untuk mendukung transformasi digital dan manajemen operasional institusi kesehatan yang modern dan efisien.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group flex flex-1 gap-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/30 p-8 flex-col shadow-soft hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Icon */}
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-9xl text-primary">{service.icon}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 relative z-10">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={() => router.push(service.href)}
                      className="text-accent-blue text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer hover:underline"
                    >
                      {service.link}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
