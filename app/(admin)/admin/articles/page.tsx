import { createServerSupabaseClient } from '@/lib/supabase-server'
import Link from 'next/link'
import ArticleList from '@/components/admin/ArticleList'

export const dynamic = 'force-dynamic'

export default async function ArticlesPage() {
  const supabase = await createServerSupabaseClient()

  const { data: articles } = await supabase
    .from('articles')
    .select(`
      id, 
      title, 
      slug, 
      content, 
      published, 
      author_id, 
      created_at, 
      updated_at, 
      profiles!author_id (
        id,
        email,
        full_name,
        role,
        avatar_url,
        created_at,
        updated_at
      )
    `)
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold text-gray-900">Artikel</h1>
          <p className="mt-2 text-sm text-gray-700">
            Kelola artikel blog untuk website
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/admin/articles/new"
            className="block rounded-md bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Tambah Artikel
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <ArticleList articles={articles || []} />
      </div>
    </div>
  )
}
