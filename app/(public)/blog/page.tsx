import ArticleCard from "@/components/blog/ArticleCard";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Galeri - Akademi Profesional Indonesia",
  description: "Dokumentasi visual dan cerita transformasi digital bersama Akademi Profesional Indonesia."
}

export default async function BlogPage() {
  const supabase = await createServerSupabaseClient();

  const { data: articles } = await supabase
    .from("articles")
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
    .eq("published", true)
    .order("created_at", { ascending: false });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Galeri
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Kisah sukses klien, highlight pelatihan, dan inovasi aplikasi custom dari Akademi Profesional Indonesia.
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
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Galeri sedang disiapkan
            </h3>
            <p className="text-gray-500">
              Dokumentasi visual terbaru akan segera hadir di halaman ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

