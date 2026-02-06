export default function TeamProfiles() {
  const team = [
    {
      name: 'Dr. Ahmad Santoso, M.Kes',
      role: 'CEO & Founder',
      expertise: 'Manajemen Rumah Sakit',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', // Professional male leader
      description: '15+ tahun pengalaman dalam manajemen kesehatan dan transformasi digital.'
    },
    {
      name: 'Siti Nurhaliza, S.Kom, M.T',
      role: 'CTO',
      expertise: 'Sistem Informasi Kesehatan',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop', // Professional male tech leader
      description: 'Spesialis dalam pengembangan sistem informasi manajemen rumah sakit terintegrasi.'
    },
    {
      name: 'Budi Prasetyo, S.E, M.M',
      role: 'Director of Training',
      expertise: 'Pengembangan SDM',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', // Professional male trainer
      description: 'Ahli dalam pelatihan dan pengembangan kompetensi tenaga kesehatan profesional.'
    },
    {
      name: 'Dr. Maya Kusuma, MARS',
      role: 'Head of Consulting',
      expertise: 'Akreditasi & Compliance',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      description: 'Konsultan senior akreditasi rumah sakit dengan track record 100+ institusi.'
    }
  ]

  return (
    <div className="layout-container flex flex-col bg-slate-50 dark:bg-slate-900/30">
      <div className="flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
          <div className="flex flex-col gap-12 py-20 @container">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 border border-blue-100 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
                Tim Ahli
              </h2>
              <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-black leading-tight md:text-4xl">
                Profesional Berpengalaman
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-[640px]">
                Tim kami terdiri dari para ahli berpengalaman di bidang manajemen kesehatan, teknologi informasi, dan pengembangan SDM.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="group flex flex-col gap-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-square bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-0">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-bold mb-1">{member.role}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-3 italic">{member.expertise}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{member.description}</p>
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
