'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Info, Grid3x3, GraduationCap, FileText, Mail, Menu, X, Building2, Calendar } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0 hover:opacity-90 transition-opacity duration-200">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-600 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700 p-2.5 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-200">
                <Building2 className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 text-[15px] font-bold leading-tight tracking-tight">
                PT. Akademi
              </span>
              <span className="text-gray-500 text-[10.5px] font-medium leading-none tracking-wide">
                Profesional Indonesia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              href="/tentang" 
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-700 hover:text-emerald-600 transition-all duration-200 font-medium text-[14px]"
            >
              <div className="absolute inset-0 bg-emerald-50/0 group-hover:bg-emerald-50/80 rounded-xl transition-all duration-200"></div>
              <Info className="w-[17px] h-[17px] relative z-10" strokeWidth={2.5} />
              <span className="relative z-10">Tentang</span>
            </Link>
            
            <Link 
              href="/layanan" 
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-700 hover:text-emerald-600 transition-all duration-200 font-medium text-[14px]"
            >
              <div className="absolute inset-0 bg-emerald-50/0 group-hover:bg-emerald-50/80 rounded-xl transition-all duration-200"></div>
              <Grid3x3 className="w-[17px] h-[17px] relative z-10" strokeWidth={2.5} />
              <span className="relative z-10">Aplikasi</span>
            </Link>
            
            <Link 
              href="/pelatihan" 
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-700 hover:text-emerald-600 transition-all duration-200 font-medium text-[14px]"
            >
              <div className="absolute inset-0 bg-emerald-50/0 group-hover:bg-emerald-50/80 rounded-xl transition-all duration-200"></div>
              <GraduationCap className="w-[17px] h-[17px] relative z-10" strokeWidth={2.5} />
              <span className="relative z-10">Pelatihan</span>
            </Link>
            
            <Link 
              href="/pelatihan/jadwal" 
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-700 hover:text-emerald-600 transition-all duration-200 font-medium text-[14px]"
            >
              <div className="absolute inset-0 bg-emerald-50/0 group-hover:bg-emerald-50/80 rounded-xl transition-all duration-200"></div>
              <Calendar className="w-[17px] h-[17px] relative z-10" strokeWidth={2.5} />
              <span className="relative z-10">Jadwal</span>
            </Link>
            
            <Link 
              href="/artikel" 
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-700 hover:text-emerald-600 transition-all duration-200 font-medium text-[14px]"
            >
              <div className="absolute inset-0 bg-emerald-50/0 group-hover:bg-emerald-50/80 rounded-xl transition-all duration-200"></div>
              <FileText className="w-[17px] h-[17px] relative z-10" strokeWidth={2.5} />
              <span className="relative z-10">Artikel</span>
            </Link>
          </nav>

          {/* Right Side - CTA Button */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link 
              href="/kontak" 
              className="relative group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold text-[14px] shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 transform hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <Mail className="w-[17px] h-[17px] relative z-10" strokeWidth={2.5} />
              <span className="relative z-10">Hubungi Kami</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/60 bg-white/98 backdrop-blur-xl">
          <nav className="px-4 py-4 space-y-1">
            <Link 
              href="/tentang" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80 active:bg-emerald-100/70 transition-all duration-200 font-medium text-[14px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Info className="w-5 h-5" strokeWidth={2.5} />
              <span>Tentang</span>
            </Link>
            
            <Link 
              href="/layanan" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80 active:bg-emerald-100/70 transition-all duration-200 font-medium text-[14px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Grid3x3 className="w-5 h-5" strokeWidth={2.5} />
              <span>Aplikasi</span>
            </Link>
            
            <Link 
              href="/pelatihan" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80 active:bg-emerald-100/70 transition-all duration-200 font-medium text-[14px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GraduationCap className="w-5 h-5" strokeWidth={2.5} />
              <span>Pelatihan</span>
            </Link>
            
            <Link 
              href="/pelatihan/jadwal" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80 active:bg-emerald-100/70 transition-all duration-200 font-medium text-[14px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-5 h-5" strokeWidth={2.5} />
              <span>Jadwal</span>
            </Link>
            
            <Link 
              href="/artikel" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80 active:bg-emerald-100/70 transition-all duration-200 font-medium text-[14px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="w-5 h-5" strokeWidth={2.5} />
              <span>Artikel</span>
            </Link>

            <div className="pt-4 mt-4 border-t border-gray-200/60">
              <Link 
                href="/kontak" 
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 active:from-emerald-800 active:to-emerald-900 rounded-xl font-semibold text-[14px] shadow-md shadow-emerald-600/20 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail className="w-[17px] h-[17px]" strokeWidth={2.5} />
                <span>Hubungi Kami</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
