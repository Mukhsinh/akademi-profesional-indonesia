'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function EditPelatihanContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    seats: '',
    available: '',
    price: '',
    status: 'available'
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }

    const monthIndex = searchParams.get('month');
    const trainingIndex = searchParams.get('training');
    
    if (monthIndex && trainingIndex) {
      // Load data from localStorage or default data
      const savedData = localStorage.getItem('training_schedules');
      if (savedData) {
        const schedules = JSON.parse(savedData);
        const training = schedules[parseInt(monthIndex)]?.trainings[parseInt(trainingIndex)];
        if (training) {
          setFormData({
            title: training.title,
            date: training.date,
            location: training.location,
            seats: training.seats.toString(),
            available: training.available.toString(),
            price: training.price,
            status: training.status
          });
        }
      }
    }
    setLoading(false);
  }, [router, searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const monthIndex = searchParams.get('month');
    const trainingIndex = searchParams.get('training');
    
    if (monthIndex && trainingIndex) {
      const savedData = localStorage.getItem('training_schedules');
      if (savedData) {
        const schedules = JSON.parse(savedData);
        schedules[parseInt(monthIndex)].trainings[parseInt(trainingIndex)] = {
          ...schedules[parseInt(monthIndex)].trainings[parseInt(trainingIndex)],
          title: formData.title,
          date: formData.date,
          location: formData.location,
          seats: parseInt(formData.seats),
          available: parseInt(formData.available),
          price: formData.price,
          status: formData.status
        };
        localStorage.setItem('training_schedules', JSON.stringify(schedules));
      }
    }
    
    alert('Pelatihan berhasil diupdate!');
    router.push('/admin/dashboard/pelatihan');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/pelatihan" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Pelatihan
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Edit Pelatihan</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Pelatihan
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
                Tanggal
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                placeholder="Contoh: 15-16 Januari 2026"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokasi
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Kuota
                </label>
                <input
                  type="number"
                  value={formData.seats}
                  onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kuota Tersedia
                </label>
                <input
                  type="number"
                  value={formData.available}
                  onChange={(e) => setFormData({ ...formData, available: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Harga
              </label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="Contoh: 3.500.000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="available">Tersedia</option>
                <option value="limited">Terbatas</option>
                <option value="full">Penuh</option>
              </select>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
              >
                Simpan Perubahan
              </button>
              <Link
                href="/admin/dashboard/pelatihan"
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


export default function EditPelatihan() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <EditPelatihanContent />
    </Suspense>
  );
}
