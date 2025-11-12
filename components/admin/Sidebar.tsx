'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Profile } from '@/lib/supabase'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface SidebarProps {
  profile: Profile
}

export default function Sidebar({ profile }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Kelola Konten', href: '/admin/content', icon: '🎨' },
    { name: 'Artikel', href: '/admin/articles', icon: '📝' },
    { name: 'Profil', href: '/admin/profile', icon: '👤' },
  ]

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-lg">
        <div className="flex h-16 shrink-0 items-center">
          <h1 className="text-xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                        pathname === item.href
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                  {profile.full_name?.charAt(0) || profile.email.charAt(0).toUpperCase()}
                </div>
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true" className="truncate">
                  {profile.full_name || profile.email}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-700"
              >
                <span className="text-lg">🚪</span>
                Keluar
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
