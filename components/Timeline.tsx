export default function Timeline() {
  const milestones = [
    {
      year: '2020',
      title: 'Pendirian Perusahaan',
      description: 'PT. Akademi Profesional Indonesia didirikan dengan visi menjadi mitra strategis transformasi digital kesehatan.',
      icon: 'rocket_launch',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2021',
      title: 'Ekspansi Layanan',
      description: 'Meluncurkan program pelatihan SDM medis dan konsultasi akreditasi rumah sakit.',
      icon: 'trending_up',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      year: '2022',
      title: 'Kemitraan Strategis',
      description: 'Membangun kemitraan dengan berbagai institusi kesehatan dan lembaga pelatihan nasional untuk memperluas jangkauan layanan.',
      icon: 'handshake',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      year: '2023',
      title: 'Platform Digital',
      description: 'Mengembangkan sistem informasi manajemen rumah sakit terintegrasi berbasis cloud.',
      icon: 'cloud_sync',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      year: '2024',
      title: 'Ekspansi Nasional',
      description: 'Memperluas jangkauan layanan ke berbagai wilayah Indonesia dengan membuka kantor regional dan meningkatkan kapasitas tim konsultan.',
      icon: 'public',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      year: '2025',
      title: 'Pemanfaatan Teknologi AI',
      description: 'Mengintegrasikan kecerdasan buatan dalam sistem manajemen rumah sakit untuk optimalisasi operasional dan pengambilan keputusan.',
      icon: 'psychology',
      gradient: 'from-violet-500 to-purple-500'
    }
  ]

  return (
    <div className="layout-container flex flex-col bg-white dark:bg-[#0f1218]">
      <div className="flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
          <div className="flex flex-col gap-12 py-20 @container">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 border border-blue-100 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
                Perjalanan Kami
              </h2>
              <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-black leading-tight md:text-4xl">
                Timeline Pencapaian
              </h1>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-300 to-transparent dark:from-primary dark:via-blue-800"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} ml-20 md:ml-0`}>
                      <div className="inline-block p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-2xl transition-shadow">
                        <div className="text-primary text-3xl font-black mb-2">{milestone.year}</div>
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow-lg z-10"></div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
