interface ArticleCardProps {
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

export default function ArticleCard({ title, excerpt, category, author, date, readTime, image, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
        <div className="relative h-[400px] bg-slate-200 dark:bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-primary/10"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4">
              {category}
            </div>
            <h2 className="text-white text-3xl font-bold mb-3 leading-tight group-hover:text-blue-200 transition-colors">
              {title}
            </h2>
            <p className="text-slate-200 text-base mb-4 leading-relaxed line-clamp-2">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">person</span>
                {author}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                {date}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group flex flex-col rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-primary text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">person</span>
            {author}
          </span>
          <span className="flex items-center gap-2">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
