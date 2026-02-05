import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const ARTICLES = [
  {
    category: 'Manajemen',
    title: 'Implementasi Rekam Medis Elektronik (RME) yang Efektif',
    description: 'Tips strategis untuk rumah sakit tipe C dan D dalam mengadopsi sistem RME sesuai dengan regulasi Permenkes terbaru.',
    author: 'Budi Santoso',
    role: 'IT Consultant',
    readTime: '5 Min Read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800' // Modern technology & digital transformation
  },
  {
    category: 'Manajemen',
    title: 'Optimalisasi Alur Pasien Rawat Jalan',
    description: 'Bagaimana mengurangi waktu tunggu pasien hingga 40% menggunakan metode Lean Six Sigma di poliklinik rumah sakit.',
    author: 'Siti Rahma',
    role: 'Ops Manager',
    readTime: '8 Min Read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800' // Healthcare operations & technology
  },
  {
    category: 'Medis',
    title: 'Update Akreditasi RS: Standar KARS Terbaru',
    description: 'Poin-poin krusial yang sering terlewat dalam persiapan akreditasi dan bagaimana mempersiapkan tim internal Anda.',
    author: 'Dr. Hendra K.',
    role: 'Quality Assurance',
    readTime: '4 Min Read',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800' // Healthcare quality & professional team
  },
  {
    category: 'Keuangan',
    title: 'Efisiensi Cost Unit Tanpa Mengorbankan Kualitas Layanan',
    description: 'Strategi pengelolaan inventaris farmasi dan alat kesehatan untuk menekan biaya operasional bulanan.',
    author: 'Maya Puspita',
    role: 'Finance Director',
    readTime: '6 Min Read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800'
  }
] as const

const FILTER_CATEGORIES = [
  'Semua Topik',
  'Manajemen RS',
  'Keuangan & Asuransi',
  'Medis & Klinis',
  'Regulasi'
] as const

export default function ArtikelPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-wider border border-white/20 mb-6">
              <span className="material-symbols-outlined text-lg">article</span>
              ARTIKEL & INSIGHT
            </div>
            
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Pengetahuan & Best Practice<br />
              Manajemen Kesehatan
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Temukan artikel, panduan, dan insight terkini seputar manajemen rumah sakit, teknologi kesehatan, dan pengembangan SDM medis.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200 leading-tight tracking-tight">
            Artikel Terbaru
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {FILTER_CATEGORIES.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                  index === 0
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.map((article) => (
              <article key={article.title} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-emerald-300 transition-all hover:shadow-xl group">
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${article.image}')` }}
                    role="img"
                    aria-label={article.title}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span className="font-bold text-emerald-600 uppercase tracking-wider">{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="font-medium">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex-shrink-0" />
                    <div className="text-xs">
                      <span className="block font-bold text-gray-900">{article.author}</span>
                      <span className="text-gray-500 font-medium">{article.role}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
