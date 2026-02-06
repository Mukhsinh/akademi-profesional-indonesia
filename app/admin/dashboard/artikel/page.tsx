'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

export default function ArtikelAdmin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      title: 'Transformasi Digital Rumah Sakit di Era Modern',
      excerpt: 'Panduan lengkap implementasi teknologi digital untuk meningkatkan efisiensi operasional rumah sakit',
      category: 'Teknologi',
      date: '2026-02-01',
      author: 'Dr. Ahmad Budiman',
      image: '/images/article-1.jpg'
    },
    {
      id: '2',
      title: 'Strategi Manajemen Risiko yang Efektif',
      excerpt: 'Cara mengidentifikasi dan mengelola risiko dalam layanan kesehatan',
      category: 'Manajemen',
      date: '2026-01-28',
      author: 'Dr. Siti Aminah',
      image: '/images/article-2.jpg'
    },
    {
      id: '3',
      title: 'Pentingnya Unit Cost dalam Penetapan Tarif',
      excerpt: 'Memahami perhitungan biaya satuan untuk tarif layanan yang kompetitif',
      category: 'Keuangan',
      date: '2026-01-25',
      author: 'Ir. Siti Nurhaliza',
      image: '/images/article-3.jpg'
    }
  ]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
    } else {
      // Load data from localStorage or use default
      const savedData = localStorage.getItem('articles');
      if (savedData) {
        setArticles(JSON.parse(savedData));
      } else {
        // Save default data to localStorage
        const defaultArticles = [
          {
            id: '1',
            title: 'Transformasi Digital Rumah Sakit di Era Modern',
            excerpt: 'Panduan lengkap implementasi teknologi digital untuk meningkatkan efisiensi operasional rumah sakit',
            category: 'Teknologi',
            date: '2026-02-01',
            author: 'Dr. Ahmad Budiman',
            image: '/images/article-1.jpg'
          },
          {
            id: '2',
            title: 'Strategi Manajemen Risiko yang Efektif',
            excerpt: 'Cara mengidentifikasi dan mengelola risiko dalam layanan kesehatan',
            category: 'Manajemen',
            date: '2026-01-28',
            author: 'Dr. Siti Aminah',
            image: '/images/article-2.jpg'
          },
          {
            id: '3',
            title: 'Pentingnya Unit Cost dalam Penetapan Tarif',
            excerpt: 'Memahami perhitungan biaya satuan untuk tarif layanan yang kompetitif',
            category: 'Keuangan',
            date: '2026-01-25',
            author: 'Ir. Siti Nurhaliza',
            image: '/images/article-3.jpg'
          }
        ];
        setArticles(defaultArticles);
        localStorage.setItem('articles', JSON.stringify(defaultArticles));
      }
      setLoading(false);
    }
  }, [router]);

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      const newArticles = articles.filter(a => a.id !== id);
      setArticles(newArticles);
      localStorage.setItem('articles', JSON.stringify(newArticles));
      alert('Artikel berhasil dihapus!');
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
              <h1 className="text-2xl font-bold text-gray-900">Kelola Artikel</h1>
            </div>
            <Link
              href="/admin/dashboard/artikel/tambah"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              + Tambah Artikel
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Penulis:</span> {article.author}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Link
                    href={`/admin/dashboard/artikel/detail?id=${article.id}`}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition text-sm"
                  >
                    Detail
                  </Link>
                  <Link
                    href={`/admin/dashboard/artikel/edit?id=${article.id}`}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition text-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(article.id)}
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
