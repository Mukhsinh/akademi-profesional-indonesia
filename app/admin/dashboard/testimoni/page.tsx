'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  message: string;
  rating: number;
  date: string;
}

export default function TestimoniAdmin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
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
  ]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
    } else {
      // Load data from localStorage or use default
      const savedData = localStorage.getItem('testimonials');
      if (savedData) {
        setTestimonials(JSON.parse(savedData));
      } else {
        // Save default data to localStorage
        const defaultTestimonials = [
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
        setTestimonials(defaultTestimonials);
        localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));
      }
      setLoading(false);
    }
  }, [router]);

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus testimoni ini?')) {
      const newTestimonials = testimonials.filter(t => t.id !== id);
      setTestimonials(newTestimonials);
      localStorage.setItem('testimonials', JSON.stringify(newTestimonials));
      alert('Testimoni berhasil dihapus!');
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
              <h1 className="text-2xl font-bold text-gray-900">Kelola Testimoni</h1>
            </div>
            <Link
              href="/admin/dashboard/testimoni/tambah"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              + Tambah Testimoni
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.message}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position} - {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Link
                    href={`/admin/dashboard/testimoni/detail?id=${testimonial.id}`}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition text-sm"
                  >
                    Detail
                  </Link>
                  <Link
                    href={`/admin/dashboard/testimoni/edit?id=${testimonial.id}`}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition text-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition text-sm"
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
