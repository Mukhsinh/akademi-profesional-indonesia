import Link from 'next/link'
import { Article, Profile } from '@/lib/supabase'

interface ArticleWithProfile extends Omit<Article, 'profiles'> {
  profiles: Profile | null | Profile[]
}

interface ArticleCardProps {
  article: ArticleWithProfile
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const excerpt = article.content.substring(0, 200) + '...'

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
        <div className="h-full w-full object-cover object-center sm:h-full sm:w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
          <span className="text-6xl">📝</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-6">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
          <Link href={`/blog/${article.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex items-center text-sm text-gray-500">
            <span>
              oleh {Array.isArray(article.profiles) ? (article.profiles as any)[0]?.full_name : (article.profiles as any)?.full_name || 'Unknown'}
            </span>
            <span className="mx-2">•</span>
            <time dateTime={article.created_at}>
              {new Date(article.created_at).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </div>
    </article>
  )
}
