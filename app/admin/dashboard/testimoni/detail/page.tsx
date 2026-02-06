'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function DetailTestimoniContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [testimonial, setTestimonial] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }

    const id = searchParams.get('id');
    if (id) {
      const savedData = localStorage.getItem('testimonials');
      if (savedData) {
        const testimonials = JSON.parse(savedData);
        const testimonialData = testimonials.find((t: any) => t.id === id);
        if (testimonialData) {
          setTestimonial(testimonialData);
        }
      }
    }
    setLoading(false);
  }, [router, searchParams]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!testimonial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Testimoni tidak ditemukan</h2>
          <Link href="/admin/dashboard/testimoni" className="text-blue-600 hover:text-blue-700">
            ← Kembali ke Daftar Testimoni
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/testimoni" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Testimoni
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Detail Testimoni</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-3xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-gray-500">{testimonial.date}</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Testimoni</h3>
              <p className="text-xl text-gray-900 italic">"{testimonial.message}"</p>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Informasi Pemberi Testimoni</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-600">Nama:</span>
                  <p className="text-lg text-gray-900">{testimonial.name}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Posisi:</span>
                  <p className="text-lg text-gray-900">{testimonial.position}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Perusahaan/Instansi:</span>
                  <p className="text-lg text-gray-900">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href={`/admin/dashboard/testimoni/edit?id=${testimonial.id}`}
              className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition font-medium text-center"
            >
              Edit Testimoni
            </Link>
            <Link
              href="/admin/dashboard/testimoni"
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


export default function DetailTestimoni() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DetailTestimoniContent />
    </Suspense>
  );
}
