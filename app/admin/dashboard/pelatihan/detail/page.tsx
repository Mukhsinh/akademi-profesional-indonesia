'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function DetailPelatihanContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [training, setTraining] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }

    const monthIndex = searchParams.get('month');
    const trainingIndex = searchParams.get('training');
    
    if (monthIndex && trainingIndex) {
      const savedData = localStorage.getItem('training_schedules');
      if (savedData) {
        const schedules = JSON.parse(savedData);
        const trainingData = schedules[parseInt(monthIndex)]?.trainings[parseInt(trainingIndex)];
        if (trainingData) {
          setTraining({
            ...trainingData,
            monthIndex,
            trainingIndex
          });
        }
      }
    }
    setLoading(false);
  }, [router, searchParams]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!training) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pelatihan tidak ditemukan</h2>
          <Link href="/admin/dashboard/pelatihan" className="text-blue-600 hover:text-blue-700">
            ← Kembali ke Daftar Pelatihan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/pelatihan" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Pelatihan
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Detail Pelatihan</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{training.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Tanggal</h3>
                <p className="text-lg text-gray-900">{training.date}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Lokasi</h3>
                <p className="text-lg text-gray-900">{training.location}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Harga</h3>
                <p className="text-2xl font-bold text-blue-600">Rp {training.price}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Total Kuota</h3>
                <p className="text-lg text-gray-900">{training.seats} peserta</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Kuota Tersedia</h3>
                <p className="text-lg text-gray-900">{training.available} peserta</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  training.status === 'available' ? 'bg-green-100 text-green-800' :
                  training.status === 'limited' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {training.status === 'available' ? 'Tersedia' :
                   training.status === 'limited' ? 'Terbatas' : 'Penuh'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href={`/admin/dashboard/pelatihan/edit?month=${training.monthIndex}&training=${training.trainingIndex}`}
              className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition font-medium text-center"
            >
              Edit Pelatihan
            </Link>
            <Link
              href="/admin/dashboard/pelatihan"
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


export default function DetailPelatihan() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DetailPelatihanContent />
    </Suspense>
  );
}
