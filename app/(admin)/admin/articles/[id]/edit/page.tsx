import { createServerSupabaseClient } from '@/lib/supabase-server'
import { notFound } from 'next/navigation'
import ArticleForm from '@/components/admin/ArticleForm'

export const dynamic = 'force-dynamic'

interface EditArticlePageProps {
  params: {
    id: string
  }
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
  const supabase = await createServerSupabaseClient()

  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!article) {
    notFound()
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Edit Artikel</h1>
        <p className="mt-1 text-sm text-gray-500">
          Edit artikel: {article.title}
        </p>
      </div>

      <ArticleForm article={article} />
    </div>
  )
}
