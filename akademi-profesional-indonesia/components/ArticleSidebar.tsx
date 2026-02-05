'use client'

import { useState } from 'react'

export default function ArticleSidebar() {
  const [email, setEmail] = useState('')

  const categories = [
    { name: 'Manajemen RS', count: 24 },
    { name: 'Keuangan', count: 18 },
    { name: 'Medis', count: 32 },
    { name: 'Regulasi', count: 15 },
    { name: 'Teknologi', count: 21 },
    { name: 'SDM', count: 19 }
  ]

  const trendingTopics = [
    'Akreditasi SNARS 1.1',
    'Sistem Informasi Kesehatan',
    'Manajemen Risiko Klinis',
    'Pelatihan Kepemimpinan',
    'Transformasi Digital'
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Cari Artikel</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Kata kunci..."
            className="w-full px-4 py-3 pr-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Kategori</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm"
            >
              <span>{category.name}</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900 border border-blue-100 dark:border-blue-800/50 shadow-soft">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">trending_up</span>
          Topik Trending
        </h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-primary hover:text-primary cursor-pointer transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="p-6 rounded-xl bg-primary text-white shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-2xl">mail</span>
          <h3 className="text-lg font-bold">Newsletter</h3>
        </div>
        <p className="text-blue-100 text-sm mb-4 leading-relaxed">
          Dapatkan artikel terbaru dan insight eksklusif langsung ke email Anda.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Anda"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-white text-primary font-bold hover:bg-blue-50 transition-colors"
          >
            Berlangganan
          </button>
        </form>
      </div>
    </div>
  )
}
