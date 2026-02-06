'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { trainingSchedules, Training } from '@/lib/trainingData';

export default function PelatihanAdmin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [trainings, setTrainings] = useState(trainingSchedules);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
    } else {
      // Load data from localStorage or use default
      const savedData = localStorage.getItem('training_schedules');
      if (savedData) {
        setTrainings(JSON.parse(savedData));
      } else {
        // Save default data to localStorage
        localStorage.setItem('training_schedules', JSON.stringify(trainingSchedules));
      }
      setLoading(false);
    }
  }, [router]);

  const handleDelete = (monthIndex: number, trainingIndex: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus pelatihan ini?')) {
      const newTrainings = [...trainings];
      newTrainings[monthIndex].trainings.splice(trainingIndex, 1);
      setTrainings(newTrainings);
      localStorage.setItem('training_schedules', JSON.stringify(newTrainings));
      alert('Pelatihan berhasil dihapus!');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
                ← Kembali ke Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Kelola Pelatihan</h1>
            </div>
            <Link
              href="/admin/dashboard/pelatihan/tambah"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              + Tambah Pelatihan
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {trainings.map((schedule, monthIndex) => (
          <div key={monthIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{schedule.month}</h2>
            
            <div className="space-y-4">
              {schedule.trainings.map((training, trainingIndex) => (
                <div key={trainingIndex} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {training.title}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Tanggal:</span> {training.date}
                        </div>
                        <div>
                          <span className="font-medium">Lokasi:</span> {training.location}
                        </div>
                        <div>
                          <span className="font-medium">Kuota:</span> {training.seats} peserta
                        </div>
                        <div>
                          <span className="font-medium">Tersedia:</span> {training.available} peserta
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="font-medium text-sm text-gray-600">Harga:</span>
                        <span className="ml-2 text-blue-600 font-semibold">Rp {training.price}</span>
                      </div>
                      <div className="mt-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          training.status === 'available' ? 'bg-green-100 text-green-800' :
                          training.status === 'limited' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {training.status === 'available' ? 'Tersedia' :
                           training.status === 'limited' ? 'Terbatas' : 'Penuh'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Link
                        href={`/admin/dashboard/pelatihan/detail?month=${monthIndex}&training=${trainingIndex}`}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition text-sm"
                      >
                        Detail
                      </Link>
                      <Link
                        href={`/admin/dashboard/pelatihan/edit?month=${monthIndex}&training=${trainingIndex}`}
                        className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition text-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(monthIndex, trainingIndex)}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition text-sm"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
