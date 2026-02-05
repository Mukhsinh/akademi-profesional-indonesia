'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CourseCardProps {
  title: string
  category: string
  duration: string
  level: string
  participants: string
  description: string
  topics: string[]
  benefits: string[]
  price?: string // Optional untuk backward compatibility
  image?: string // URL gambar tema pelatihan
}

export default function CourseCard({ title, category, duration, level, participants, description, topics, benefits, image }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleWhatsAppRegister = () => {
    const phoneNumber = '6285726112001'
    const message = encodeURIComponent(`Halo, saya tertarik untuk mendaftar pelatihan: ${title}`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="group rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-soft hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Image Header - Gambar Tema Pelatihan */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      )}
      
      {/* Header */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-start justify-between mb-3">
          <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
          <div className="text-right">
            <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-1.5">
              INVESTASI
            </div>
            <div className="text-[9px] font-medium text-slate-400 dark:text-slate-500 mb-0.5">
              mulai dari
            </div>
            <div className="text-primary text-xl font-bold leading-none">
              Rp. 2.500.000,-
            </div>
          </div>
        </div>
        
        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Meta Info */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
            <span>{level}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-[16px]">group</span>
            <span>{participants}</span>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 space-y-6">
          {/* Topics */}
          <div>
            <h4 className="text-slate-900 dark:text-white text-sm font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">checklist</span>
              Materi Pelatihan
            </h4>
            <ul className="space-y-2">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">arrow_right</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-slate-900 dark:text-white text-sm font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">workspace_premium</span>
              Manfaat
            </h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-green-600 text-[16px] mt-0.5">check_circle</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="p-6 flex items-center gap-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary font-bold text-sm transition-colors"
        >
          <span>{isExpanded ? 'Tutup Detail' : 'Lihat Detail'}</span>
          <span className={`material-symbols-outlined text-[18px] transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>
        
        <button
          onClick={handleWhatsAppRegister}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors"
        >
          <span>Daftar via WA</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
