'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  expertise: string;
  bio: string;
  image: string;
}

export default function TimAdmin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState<TeamMember[]>([
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
  ]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
    } else {
      // Load data from localStorage or use default
      const savedData = localStorage.getItem('team');
      if (savedData) {
        setTeam(JSON.parse(savedData));
      } else {
        // Save default data to localStorage
        const defaultTeam = [
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
        setTeam(defaultTeam);
        localStorage.setItem('team', JSON.stringify(defaultTeam));
      }
      setLoading(false);
    }
  }, [router]);

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus anggota tim ini?')) {
      const newTeam = team.filter(t => t.id !== id);
      setTeam(newTeam);
      localStorage.setItem('team', JSON.stringify(newTeam));
      alert('Anggota tim berhasil dihapus!');
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
              <h1 className="text-2xl font-bold text-gray-900">Kelola Tim</h1>
            </div>
            <Link
              href="/admin/dashboard/tim/tambah"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              + Tambah Anggota Tim
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-6xl text-white">👤</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-3">
                  <span className="font-medium">Keahlian:</span> {member.expertise}
                </p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/dashboard/tim/detail?id=${member.id}`}
                    className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition text-sm text-center"
                  >
                    Detail
                  </Link>
                  <Link
                    href={`/admin/dashboard/tim/edit?id=${member.id}`}
                    className="flex-1 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition text-sm text-center"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition text-sm"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
