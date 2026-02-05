'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const layananItems = [
  {
    title: 'Aplikasi Unit Cost',
    href: '/layanan/unit-cost',
    icon: '📊',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Aplikasi Manajemen Strategis',
    href: '/layanan/manajemen-strategis',
    icon: '📈',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Aplikasi Manajemen Resiko',
    href: '/layanan/manajemen-risiko',
    icon: '🛡️',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Aplikasi Manajemen Komplain',
    href: '/layanan/manajemen-pengaduan',
    icon: '📢',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Aplikasi Clinical Pathway',
    href: '/layanan/clinical-pathway',
    icon: '📋',
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Aplikasi MMPI-2',
    href: '/layanan/mmpi-2',
    icon: '🧠',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Aplikasi Survey Kepuasan',
    href: '/layanan/manajemen-survey-kepuasan',
    icon: '⭐',
    color: 'from-emerald-500 to-emerald-600'
  }
]

export default function LayananSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const currentItem = layananItems.find(item => item.href === pathname)

  return (
    <div className="w-full">
      {/* Tombol Kembali ke Layanan - Di Atas */}
      <div className="mb-6">
        <Link
          href="/layanan"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-xl transition-all shadow-sm hover:shadow-md font-medium"
        >
          <span className="text-xl">←</span>
          <span className="text-sm">Kembali ke Halaman Layanan</span>
        </Link>
      </div>

      {/* Dropdown Navigation - Di Bawah */}
      <div className="relative bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentItem?.color || 'from-gray-400 to-gray-500'} flex items-center justify-center text-2xl shadow-md`}>
              {currentItem?.icon || '📱'}
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Layanan Aplikasi</div>
              <div className="text-base font-bold text-gray-900">{currentItem?.title || 'Pilih Layanan'}</div>
            </div>
          </div>
          <svg 
            className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <nav className="border-t-2 border-gray-200 bg-white">
            <div className="p-3 space-y-2">
              {layananItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-[1.02]'
                        : 'bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${isActive ? 'bg-white/20' : `bg-gradient-to-br ${item.color}`} flex items-center justify-center text-xl shadow-sm`}>
                      {isActive ? '✓' : item.icon}
                    </div>
                    <span className="text-sm font-semibold">{item.title}</span>
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}
