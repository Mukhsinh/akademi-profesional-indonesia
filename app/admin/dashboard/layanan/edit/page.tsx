'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function EditLayananContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    url: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }

    const id = searchParams.get('id');
    if (id) {
      // Sample data - in production, fetch from database
      const services = [
        {
          id: '1',
          title: 'Clinical Pathway',
          description: 'Panduan alur klinis berbasis bukti untuk meningkatkan kualitas dan efisiensi layanan',
          icon: '🏥',
          url: '/layanan/clinical-pathway'
        },
        {
          id: '2',
          title: 'Unit Cost',
          description: 'Perhitungan biaya satuan layanan kesehatan yang akurat dan komprehensif',
          icon: '💰',
          url: '/layanan/unit-cost'
        },
        {
          id: '3',
          title: 'Manajemen Strategis',
          description: 'Perencanaan dan implementasi strategi untuk mencapai visi organisasi',
          icon: '🎯',
          url: '/layanan/manajemen-strategis'
        },
        {
          id: '4',
          title: 'Manajemen Risiko',
          description: 'Identifikasi, analisis, dan mitigasi risiko dalam layanan kesehatan',
          icon: '🛡️',
          url: '/layanan/manajemen-risiko'
        },
        {
          id: '5',
          title: 'Manajemen Pengaduan',
          description: 'Sistem pengelolaan keluhan dan umpan balik untuk peningkatan layanan',
          icon: '📢',
          url: '/layanan/manajemen-pengaduan'
        },
        {
          id: '6',
          title: 'MMPI-2',
          description: 'Tes psikologi komprehensif untuk assessment kepribadian dan kesehatan mental',
          icon: '🧠',
          url: '/layanan/mmpi-2'
        },
        {
          id: '7',
          title: 'Survey Kepuasan',
          description: 'Pengukuran dan analisis kepuasan pelanggan untuk peningkatan kualitas',
          icon: '📊',
          url: '/layanan/manajemen-survey-kepuasan'
        }
      ];

      const service = services.find(s => s.id === id);
      if (service) {
        setFormData({
          title: service.title,
          description: service.description,
          icon: service.icon,
          url: service.url
        });
      }
    }
    setLoading(false);
  }, [router, searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Layanan berhasil diupdate!');
    router.push('/admin/dashboard/layanan');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/layanan" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Layanan
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Edit Layanan</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Layanan
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Icon (Emoji)
              </label>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                placeholder="Contoh: 🏥"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL
              </label>
              <input
                type="text"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="/layanan/nama-layanan"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
              >
                Simpan Perubahan
              </button>
              <Link
                href="/admin/dashboard/layanan"
                className="flex-1 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition font-medium text-center"
              >
                Batal
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default function EditLayanan() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <EditLayananContent />
    </Suspense>
  );
}
