'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function DetailLayananContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }

    const id = searchParams.get('id');
    if (id) {
      const savedData = localStorage.getItem('services');
      if (savedData) {
        const services = JSON.parse(savedData);
        const serviceData = services.find((s: any) => s.id === id);
        if (serviceData) {
          setService(serviceData);
        }
      }
    }
    setLoading(false);
  }, [router, searchParams]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan tidak ditemukan</h2>
          <Link href="/admin/dashboard/layanan" className="text-blue-600 hover:text-blue-700">
            ← Kembali ke Daftar Layanan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/layanan" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Layanan
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Detail Layanan</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{service.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Deskripsi</h3>
              <p className="text-lg text-gray-900">{service.description}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">URL</h3>
              <p className="text-lg text-blue-600">{service.url}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href={`/admin/dashboard/layanan/edit?id=${service.id}`}
              className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition font-medium text-center"
            >
              Edit Layanan
            </Link>
            <Link
              href="/admin/dashboard/layanan"
              className="flex-1 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition font-medium text-center"
            >
              Kembali
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}


export default function DetailLayanan() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DetailLayananContent />
    </Suspense>
  );
}
