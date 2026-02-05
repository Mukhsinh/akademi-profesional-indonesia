import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import ArticleSidebar from '@/components/ArticleSidebar'

export default function ArtikelPage() {
  const featuredArticle = {
    title: 'Panduan Lengkap Persiapan Akreditasi SNARS 1.1 untuk Rumah Sakit',
    excerpt: 'Strategi komprehensif dan checklist praktis untuk mempersiapkan rumah sakit Anda menghadapi akreditasi SNARS edisi terbaru dengan tingkat keberhasilan tinggi.',
    category: 'Akreditasi',
    author: 'Dr. Maya Kusuma',
    date: '15 Jan 2024',
    readTime: '8 menit',
    image: ''
  }

  const articles = [
    {
      title: 'Implementasi Sistem Informasi Manajemen Rumah Sakit yang Efektif',
      excerpt: 'Langkah-langkah strategis dalam mengimplementasikan SIMRS untuk meningkatkan efisiensi operasional dan kualitas layanan.',
      category: 'Teknologi',
      author: 'Siti Nurhaliza',
      date: '12 Jan 2024',
      readTime: '6 menit',
      image: ''
    },
    {
      title: 'Manajemen Risiko Klinis: Strategi Pencegahan dan Mitigasi',
      excerpt: 'Pendekatan sistematis dalam mengidentifikasi, menilai, dan mengelola risiko klinis di lingkungan rumah sakit.',
      category: 'Medis',
      author: 'Dr. Ahmad Santoso',
      date: '10 Jan 2024',
      readTime: '7 menit',
      image: ''
    },
    {
      title: 'Optimalisasi Unit Cost Rumah Sakit untuk Efisiensi Keuangan',
      excerpt: 'Metode perhitungan dan analisis unit cost yang akurat untuk pengambilan keputusan finansial yang lebih baik.',
      category: 'Keuangan',
      author: 'Budi Prasetyo',
      date: '8 Jan 2024',
      readTime: '5 menit',
      image: ''
    },
    {
      title: 'Pengembangan Kepemimpinan Keperawatan di Era Digital',
      excerpt: 'Kompetensi dan strategi yang dibutuhkan pemimpin keperawatan untuk menghadapi tantangan transformasi digital.',
      category: 'SDM',
      author: 'Dr. Maya Kusuma',
      date: '5 Jan 2024',
      readTime: '6 menit',
      image: ''
    }
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="layout-container flex grow flex-col bg-grid-pattern relative">
        {/* Hero Section */}
        <div className="layout-container flex flex-col bg-white dark:bg-[#0f1218]">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
              <div className="flex flex-col gap-8 py-16 @container">
                <div className="flex flex-col gap-4 text-center items-center">
                  <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 border border-blue-100 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
                    Artikel & Insight
                  </h2>
                  <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-black leading-tight md:text-5xl max-w-[900px]">
                    Pengetahuan & Best Practice Manajemen Kesehatan
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[720px]">
                    Temukan artikel, panduan, dan insight terkini seputar manajemen rumah sakit, teknologi kesehatan, dan pengembangan SDM medis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="layout-container flex flex-col bg-slate-50 dark:bg-slate-900/30">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
              <div className="py-12">
                <ArticleCard {...featuredArticle} featured={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid with Sidebar */}
        <div className="layout-container flex flex-col bg-white dark:bg-[#0f1218]">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
              <div className="py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <button className="px-4 py-2 rounded-lg bg-primary text-white font-bold text-sm">
                        Semua
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary font-bold text-sm transition-colors">
                        Manajemen RS
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary font-bold text-sm transition-colors">
                        Keuangan
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary font-bold text-sm transition-colors">
                        Medis
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary font-bold text-sm transition-colors">
                        Regulasi
                      </button>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} />
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2">
                      <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:border-primary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">chevron_left</span>
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-primary text-white font-bold">1</button>
                      <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary font-bold transition-colors">2</button>
                      <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary font-bold transition-colors">3</button>
                      <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <ArticleSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
