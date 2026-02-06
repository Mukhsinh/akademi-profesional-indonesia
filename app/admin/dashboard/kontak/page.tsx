'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
}

export default function KontakAdmin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: '1',
      name: 'Budi Santoso',
      email: 'budi@example.com',
      phone: '081234567890',
      subject: 'Informasi Pelatihan Unit Cost',
      message: 'Saya tertarik mengikuti pelatihan Unit Cost bulan Maret. Mohon informasi lebih lanjut mengenai materi dan biaya.',
      date: '2026-02-05 10:30',
      status: 'new'
    },
    {
      id: '2',
      name: 'Siti Nurhaliza',
      email: 'siti@example.com',
      phone: '081234567891',
      subject: 'Konsultasi Manajemen Risiko',
      message: 'Rumah sakit kami ingin berkonsultasi mengenai implementasi sistem manajemen risiko. Bagaimana prosedurnya?',
      date: '2026-02-04 14:15',
      status: 'read'
    },
    {
      id: '3',
      name: 'Ahmad Wijaya',
      email: 'ahmad@example.com',
      phone: '081234567892',
      subject: 'Kerjasama Pelatihan',
      message: 'Kami dari RS Harapan ingin mengadakan in-house training untuk tim manajemen. Mohon penawaran harga.',
      date: '2026-02-03 09:00',
      status: 'replied'
    }
  ]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleStatusChange = (id: string, newStatus: 'new' | 'read' | 'replied') => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status: newStatus } : msg
    ));
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus pesan ini?')) {
      setMessages(messages.filter(m => m.id !== id));
      alert('Pesan berhasil dihapus!');
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      new: 'bg-blue-100 text-blue-800',
      read: 'bg-yellow-100 text-yellow-800',
      replied: 'bg-green-100 text-green-800'
    };
    const labels = {
      new: 'Baru',
      read: 'Dibaca',
      replied: 'Dibalas'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
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
              <h1 className="text-2xl font-bold text-gray-900">Pesan Kontak</h1>
            </div>
            <div className="text-sm text-gray-600">
              Total: {messages.length} pesan
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {getStatusBadge(msg.status)}
                  <span className="text-sm text-gray-500">{msg.date}</span>
                </div>
                <div className="flex gap-2">
                  <select
                    value={msg.status}
                    onChange={(e) => handleStatusChange(msg.id, e.target.value as any)}
                    className="px-3 py-1 border border-gray-300 rounded text-sm"
                  >
                    <option value="new">Baru</option>
                    <option value="read">Dibaca</option>
                    <option value="replied">Dibalas</option>
                  </select>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
                  >
                    Hapus
                  </button>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{msg.subject}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Nama:</span>
                    <span className="ml-2 text-gray-600">{msg.name}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Email:</span>
                    <span className="ml-2 text-gray-600">{msg.email}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Telepon:</span>
                    <span className="ml-2 text-gray-600">{msg.phone}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
