'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function DetailArtikelContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }

    const id = searchParams.get('id');
    if (id) {
      const savedData = localStorage.getItem('articles');
      if (savedData) {
        const articles = JSON.parse(savedData);
        const articleData = articles.find((a: any) => a.id === id);
        if (articleData) {
          setArticle(articleData);
        }
      }
    }
    setLoading(false);
  }, [router, searchParams]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h2>
          <Link href="/admin/dashboard/artikel" className="text-blue-600 hover:text-blue-700">
            ← Kembali ke Daftar Artikel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/admin/dashboard/artikel" className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block">
            ← Kembali ke Daftar Artikel
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Detail Artikel</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {article.category}
              </span>
              <span className="text-gray-500">{article.date}</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Ringkasan</h3>
              <p className="text-lg text-gray-900">{article.excerpt}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Penulis</h3>
              <p className="text-lg text-gray-900">{article.author}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Gambar</h3>
              <p className="text-sm text-gray-600">{article.image}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href={`/admin/dashboard/artikel/edit?id=${article.id}`}
              className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition font-medium text-center"
            >
              Edit Artikel
            </Link>
            <Link
              href="/admin/dashboard/artikel"
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

export default function DetailArtikel() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DetailArtikelContent />
    </Suspense>
  );
}
