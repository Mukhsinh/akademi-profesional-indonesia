import ArticleForm from '@/components/admin/ArticleForm'

export default function NewArticlePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tambah Artikel Baru</h1>
        <p className="mt-1 text-sm text-gray-500">
          Buat artikel baru untuk blog website
        </p>
      </div>

      <ArticleForm />
    </div>
  )
}
