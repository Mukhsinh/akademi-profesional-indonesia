'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  const menuItems = [
    {
      title: 'Pelatihan',
      description: 'Kelola jadwal dan data pelatihan',
      icon: '📚',
      href: '/admin/dashboard/pelatihan',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Layanan',
      description: 'Kelola layanan konsultasi',
      icon: '🏥',
      href: '/admin/dashboard/layanan',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Artikel',
      description: 'Kelola artikel dan konten',
      icon: '📝',
      href: '/admin/dashboard/artikel',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Tim',
      description: 'Kelola profil tim',
      icon: '👥',
      href: '/admin/dashboard/tim',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Testimoni',
      description: 'Kelola testimoni klien',
      icon: '⭐',
      href: '/admin/dashboard/testimoni',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Kontak',
      description: 'Lihat pesan kontak',
      icon: '📧',
      href: '/admin/dashboard/kontak',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">PT. Akademi Profesional Indonesia</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Selamat Datang!</h2>
          <p className="text-gray-600">Pilih menu di bawah untuk mengelola konten website</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
