'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
}

export default function LayananAdmin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([
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
  ]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
    } else {
      // Load data from localStorage or use default
      const savedData = localStorage.getItem('services');
      if (savedData) {
        setServices(JSON.parse(savedData));
      } else {
        // Save default data to localStorage
        const defaultServices = [
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
        setServices(defaultServices);
        localStorage.setItem('services', JSON.stringify(defaultServices));
      }
      setLoading(false);
    }
  }, [router]);

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus layanan ini?')) {
      const newServices = services.filter(s => s.id !== id);
      setServices(newServices);
      localStorage.setItem('services', JSON.stringify(newServices));
      alert('Layanan berhasil dihapus!');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
                ← Kembali ke Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Kelola Layanan</h1>
            </div>
            <Link
              href="/admin/dashboard/layanan/tambah"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              + Tambah Layanan
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="text-xs text-gray-500 mb-4">URL: {service.url}</div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/dashboard/layanan/detail?id=${service.id}`}
                  className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition text-sm text-center"
                >
                  Detail
                </Link>
                <Link
                  href={`/admin/dashboard/layanan/edit?id=${service.id}`}
                  className="flex-1 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition text-sm text-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition text-sm"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
