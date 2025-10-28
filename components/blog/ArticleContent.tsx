import { Article, Profile } from '@/lib/supabase'

interface ArticleWithProfile extends Omit<Article, 'profiles'> {
  profiles: Profile | null | Profile[]
}

interface ArticleContentProps {
  article: ArticleWithProfile
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {article.title}
        </h1>
        <div className="mt-4 flex items-center text-sm text-gray-500">
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
      </header>

      <div 
        className="prose prose-lg max-w-none text-gray-900"
        dangerouslySetInnerHTML={{ 
          __html: article.content.replace(/\n/g, '<br />') 
        }}
      />
    </article>
  )
}
