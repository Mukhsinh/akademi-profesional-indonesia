'use client'

import { Article, Profile } from '@/lib/supabase'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ArticleWithProfile extends Omit<Article, 'profiles'> {
  profiles: Profile | null | Profile[]
}

interface ArticleListProps {
  articles: ArticleWithProfile[]
}

export default function ArticleList({ articles }: ArticleListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      return
    }

    setDeletingId(id)
    const supabase = createClient()

    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Gagal menghapus artikel: ' + error.message)
    } else {
      router.refresh()
    }

    setDeletingId(null)
  }

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    const supabase = createClient()

    const { error } = await supabase
      .from('articles')
      .update({ published: !currentStatus })
      .eq('id', id)

    if (error) {
      alert('Gagal mengubah status artikel: ' + error.message)
    } else {
      router.refresh()
    }
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Belum ada artikel
        </h3>
        <p className="text-gray-500 mb-6">
          Mulai dengan membuat artikel pertama Anda
        </p>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
        >
          Buat Artikel Pertama
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {articles.map((article) => (
          <li key={article.id}>
            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">
                    {article.published ? '✅' : '📝'}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">
                      {article.title}
                    </p>
                    <span
                      className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        article.published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {article.published ? 'Terbit' : 'Draft'}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    <p>
                      oleh {Array.isArray(article.profiles) ? (article.profiles as any)[0]?.full_name : (article.profiles as any)?.full_name || 'Unknown'} •{' '}
                      {new Date(article.created_at).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleTogglePublish(article.id, article.published)}
                  className={`text-sm font-medium ${
                    article.published
                      ? 'text-yellow-600 hover:text-yellow-500'
                      : 'text-green-600 hover:text-green-500'
                  }`}
                >
                  {article.published ? 'Unpublish' : 'Publish'}
                </button>
                <Link
                  href={`/admin/articles/${article.id}/edit`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(article.id)}
                  disabled={deletingId === article.id}
                  className="text-sm font-medium text-red-600 hover:text-red-500 disabled:opacity-50"
                >
                  {deletingId === article.id ? 'Menghapus...' : 'Hapus'}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
