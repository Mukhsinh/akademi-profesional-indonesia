'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { Profile } from '@/lib/supabase'

const NAV_ITEMS = [
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/pelatihan', label: 'Pelatihan' },
  { href: '/jasa-aplikasi', label: 'Jasa Aplikasi' },
  { href: '/sertifikasi', label: 'Sertifikasi' },
  { href: '/blog', label: 'Galeri' },
  { href: '/kontak', label: 'Kontak' }
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const brandTop = 'Akademi Profesional'
  const brandBottomBase = 'Indonesia'
  const [brandBottom, setBrandBottom] = useState('')

  useEffect(() => {
    const supabase = createClient()
    if (!supabase) return

    const loadProfile = async () => {
      const { data } = await supabase.auth.getUser()
      const user = data?.user
      if (!user) return
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      setProfile(profileData)
    }

    loadProfile()
  }, [])

  useEffect(() => {
    const text = brandBottomBase
    const typingDelay = 65
    const erasingDelay = 40
    const holdFullDelay = 900
    const holdEmptyDelay = 260
    let index = 0
    let direction: 'forward' | 'backward' = 'forward'
    let timeout: NodeJS.Timeout
    let isCancelled = false

    const tick = () => {
      if (isCancelled) return
      if (direction === 'forward') {
        index += 1
        setBrandBottom(text.slice(0, index))
        if (index >= text.length) {
          direction = 'backward'
          timeout = setTimeout(tick, holdFullDelay)
          return
        }
        timeout = setTimeout(tick, typingDelay)
      } else {
        index -= 1
        const next = index > 0 ? text.slice(0, index) : ''
        setBrandBottom(next)
        if (index <= 0) {
          direction = 'forward'
          timeout = setTimeout(tick, holdEmptyDelay)
          return
        }
        timeout = setTimeout(tick, erasingDelay)
      }
    }

    timeout = setTimeout(tick, 120)

    return () => {
      isCancelled = true
      clearTimeout(timeout)
    }
  }, [brandBottomBase])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-md shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)] border-b border-white/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex flex-col leading-tight">
              <span className="text-xs tracking-[0.45em] uppercase font-semibold animate-spectrum">
                {brandTop}
              </span>
              <span
                className="text-2xl sm:text-3xl font-bold text-foreground-strong"
                style={{ minWidth: `${brandBottomBase.length}ch` }}
              >
                {brandBottom || '\u00A0'}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-1 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                  )}
                </Link>
              )
            })}
            {profile?.role === 'admin' && (
              <Link
                href="/admin"
                className="ml-4 btn-primary text-sm py-2.5 px-5 rounded-full"
              >
                Admin
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            )}
          </nav>

  <div className="hidden md:flex items-center gap-3">
    <div className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md shadow-inner shadow-blue-100/40 min-w-[280px]">
      <svg className="h-4 w-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span className="text-sm text-slate-600 font-medium">Apa yang Anda cari?</span>
    </div>
    <Link
      href="/kontak"
      className="btn-primary text-sm py-2.5 px-5 rounded-full"
    >
      Konsultasi
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  </div>

  <div className="md:hidden">
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-2 rounded-full bg-white/70 text-slate-800 shadow-inner shadow-white/40 border border-white/80"
      aria-label="Menu"
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

        {isMenuOpen && (
          <div className="md:hidden mt-4 rounded-3xl border border-white/60 bg-white/80 backdrop-blur-lg shadow-xl shadow-slate-900/10">
            <div className="px-6 py-5 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                    pathname === item.href ? 'bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-600' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontak"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-500 shadow-lg shadow-primary-500/20"
              >
                Konsultasi
              </Link>
              {profile?.role === 'admin' && (
                <Link
                  href="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-500 shadow-lg shadow-primary-500/20"
                >
                  Admin Dashboard
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
