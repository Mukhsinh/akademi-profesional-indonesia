'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function DetailTimContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [member, setMember] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }

    const id = searchParams.get('id');
    if (id) {
      const savedData = localStorage.getItem('team');
      if (savedData) {
        const team = JSON.parse(savedData);
        const memberData = team.find((t: any) => t.id === id);
        if (memberData) {
          setMember(memberData);
        }
      }
    }
    setLoading(false);
  }, [router, searchParams]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Anggota tim tidak ditemukan</h2>
          <Link href="/admin/dashboard/tim" className="text-blue-600 hover:text-blue-700">
            ← Kembali ke Daftar Tim
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/tim" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Tim
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Detail Anggota Tim</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <div className="text-9xl text-white">👤</div>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
            <p className="text-xl text-blue-600 font-medium mb-6">{member.position}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Keahlian</h3>
                <p className="text-lg text-gray-900">{member.expertise}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Bio</h3>
                <p className="text-lg text-gray-900">{member.bio}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Gambar</h3>
                <p className="text-sm text-gray-600">{member.image}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Link
                href={`/admin/dashboard/tim/edit?id=${member.id}`}
                className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition font-medium text-center"
              >
                Edit Anggota Tim
              </Link>
              <Link
                href="/admin/dashboard/tim"
                className="flex-1 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition font-medium text-center"
              >
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default function DetailTim() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DetailTimContent />
    </Suspense>
  );
}
