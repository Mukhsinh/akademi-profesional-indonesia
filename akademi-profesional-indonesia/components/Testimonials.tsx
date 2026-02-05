export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Rina Wijaya',
      role: 'Direktur RS Harapan Sehat',
      location: 'Jakarta',
      content: 'Pelatihan dari PT. Akademi Profesional Indonesia sangat aplikatif dan langsung bisa diterapkan. Tim kami menjadi lebih kompeten dalam mengelola sistem informasi rumah sakit.',
      rating: 5
    },
    {
      name: 'Bambang Sutrisno, S.E',
      role: 'Manajer Keuangan RS Sejahtera',
      location: 'Surabaya',
      content: 'Program pelatihan unit cost sangat membantu kami dalam mengoptimalkan efisiensi keuangan. Instruktur sangat berpengalaman dan materi mudah dipahami.',
      rating: 5
    },
    {
      name: 'Ns. Siti Aminah, S.Kep',
      role: 'Kepala Bidang Keperawatan',
      location: 'Bandung',
      content: 'Pelatihan kepemimpinan keperawatan memberikan perspektif baru dalam mengelola tim. Sangat recommended untuk para pemimpin di bidang kesehatan.',
      rating: 5
    }
  ]

  return (
    <div className="layout-container flex flex-col bg-slate-50 dark:bg-slate-900/30">
      <div className="flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
          <div className="flex flex-col gap-12 py-20 @container">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 border border-blue-100 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
                Testimoni
              </h2>
              <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-black leading-tight md:text-4xl">
                Apa Kata Mereka
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-[640px]">
                Pengalaman peserta pelatihan dari berbagai rumah sakit di Indonesia.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 text-primary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-slate-900 dark:text-white text-sm font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary text-xs font-medium">{testimonial.role}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[12px]">location_on</span>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="text-primary text-4xl font-black mb-2">200+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Rumah Sakit</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="text-primary text-4xl font-black mb-2">5,000+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Peserta Pelatihan</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="text-primary text-4xl font-black mb-2">95%</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Tingkat Kepuasan</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="text-primary text-4xl font-black mb-2">8+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
