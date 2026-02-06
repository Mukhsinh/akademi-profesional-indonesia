'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function EditTimContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    expertise: '',
    bio: '',
    image: ''
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
      const teamMembers = [
        {
          id: '1',
          name: 'Dr. Ahmad Budiman, M.Kes',
          position: 'Direktur Utama',
          expertise: 'Manajemen Keuangan Rumah Sakit',
          bio: 'Pakar dengan pengalaman 15 tahun dalam manajemen keuangan dan unit cost rumah sakit',
          image: '/images/team-1.jpg'
        },
        {
          id: '2',
          name: 'Dr. Siti Aminah, MARS',
          position: 'Direktur Operasional',
          expertise: 'Patient Safety & Risk Management',
          bio: 'Spesialis manajemen risiko dan keselamatan pasien dengan sertifikasi internasional',
          image: '/images/team-2.jpg'
        },
        {
          id: '3',
          name: 'Ir. Siti Nurhaliza, MBA',
          position: 'Konsultan Senior',
          expertise: 'Activity Based Costing',
          bio: 'Konsultan berpengalaman untuk berbagai rumah sakit terkemuka di Indonesia',
          image: '/images/team-3.jpg'
        }
      ];

      const member = teamMembers.find(m => m.id === id);
      if (member) {
        setFormData({
          name: member.name,
          position: member.position,
          expertise: member.expertise,
          bio: member.bio,
          image: member.image
        });
      }
    }
    
    setLoading(false);
  }, [router, searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Anggota tim berhasil diupdate!');
    router.push('/admin/dashboard/tim');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/tim" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Tim
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Edit Anggota Tim</h1>
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
                Keahlian
              </label>
              <input
                type="text"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio/Deskripsi
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL Gambar
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="/images/team-1.jpg"
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
                href="/admin/dashboard/tim"
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

export default function EditTim() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <EditTimContent />
    </Suspense>
  );
}
