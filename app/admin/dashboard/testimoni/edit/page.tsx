'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function EditTestimoniContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    message: '',
    rating: 5,
    date: ''
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
      const testimonials = [
        {
          id: '1',
          name: 'Dr. Budi Santoso',
          position: 'Direktur',
          company: 'RS Harapan Sehat',
          message: 'Pelatihan yang sangat komprehensif dan aplikatif. Tim kami mendapat insight berharga untuk implementasi unit cost di rumah sakit.',
          rating: 5,
          date: '2026-01-15'
        },
        {
          id: '2',
          name: 'Ns. Dewi Lestari, S.Kep',
          position: 'Kepala Keperawatan',
          company: 'RS Sejahtera',
          message: 'Fasilitator sangat profesional dan materi mudah dipahami. Sangat membantu dalam meningkatkan kualitas manajemen keperawatan.',
          rating: 5,
          date: '2026-01-20'
        },
        {
          id: '3',
          name: 'Ir. Hendra Wijaya',
          position: 'Manajer Keuangan',
          company: 'RS Mitra Husada',
          message: 'Konsultasi manajemen strategis sangat membantu kami dalam menyusun roadmap transformasi digital rumah sakit.',
          rating: 4,
          date: '2026-01-25'
        }
      ];

      const testimonial = testimonials.find(t => t.id === id);
      if (testimonial) {
        setFormData({
          name: testimonial.name,
          position: testimonial.position,
          company: testimonial.company,
          message: testimonial.message,
          rating: testimonial.rating,
          date: testimonial.date
        });
      }
    }
    
    setLoading(false);
  }, [router, searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Testimoni berhasil diupdate!');
    router.push('/admin/dashboard/testimoni');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/testimoni" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Testimoni
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Edit Testimoni</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Posisi/Jabatan
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Perusahaan/Instansi
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pesan Testimoni
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating (1-5)
              </label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={5}>5 - Sangat Baik</option>
                <option value={4}>4 - Baik</option>
                <option value={3}>3 - Cukup</option>
                <option value={2}>2 - Kurang</option>
                <option value={1}>1 - Sangat Kurang</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
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
                href="/admin/dashboard/testimoni"
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

export default function EditTestimoni() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <EditTestimoniContent />
    </Suspense>
  );
}
