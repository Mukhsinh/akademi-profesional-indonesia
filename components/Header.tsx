'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  API
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link 
              href="/tentang-kami" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors"
            >
              Tentang Kami
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors flex items-center">
                Pelatihan
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="py-2">
                  <Link href="/pelatihan" className="block px-6 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Pelatihan Online
                  </Link>
                  <Link href="/pelatihan" className="block px-6 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Pelatihan Offline
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/jasa-aplikasi" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors"
            >
              Jasa Aplikasi
            </Link>
            <Link 
              href="/sertifikasi" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors"
            >
              Sertifikasi
            </Link>
            <Link 
              href="/kontak" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors"
            >
              Kontak
            </Link>
          </nav>

          {/* Search Icon */}
          <div className="hidden md:flex items-center">
            <button className="text-gray-700 hover:text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-700 hover:text-primary-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                href="/tentang-kami" 
                className="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                href="/pelatihan" 
                className="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pelatihan
              </Link>
              <Link 
                href="/jasa-aplikasi" 
                className="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Jasa Aplikasi
              </Link>
              <Link 
                href="/sertifikasi" 
                className="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sertifikasi
              </Link>
              <Link 
                href="/kontak" 
                className="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
