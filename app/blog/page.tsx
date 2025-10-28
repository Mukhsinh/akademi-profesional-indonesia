import { createServerSupabaseClient } from '@/lib/supabase-server'
import ArticleCard from '@/components/blog/ArticleCard'

export const metadata = {
  title: 'Blog - Akademi Profesional Indonesia',
  description: 'Artikel dan tips terbaru dari Akademi Profesional Indonesia',
}

export default async function BlogPage() {
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
    .eq('published', true)
    .order('created_at', { ascending: false })

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Artikel dan tips terbaru dari Akademi Profesional Indonesia
          </p>
        </div>

        {articles && articles.length > 0 ? (
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Belum ada artikel
            </h3>
            <p className="text-gray-500">
              Artikel akan segera hadir di sini
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
