"use client";

export default function HeroNew() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-xs font-bold text-blue-900 mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Inovasi Manajemen Kesehatan
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Transformasi Digital & <span className="text-blue-900">Pelatihan Strategis</span> Manajemen Rumah Sakit
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Platform terintegrasi untuk efisiensi operasional dan peningkatan kualitas layanan kesehatan melalui teknologi mutakhir dan pengembangan SDM profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors shadow-lg">
                Jelajahi Solusi Digital
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-blue-900 text-slate-900 font-bold rounded-lg transition-colors">
                Daftar Pelatihan
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full aspect-video bg-slate-200 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop" 
                alt="Hospital Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
