import Link from "next/link";
import ArticleContent from "@/components/blog/ArticleContent";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const supabase = await createServerSupabaseClient();

  const { data: article } = await supabase
    .from("articles")
    .select("title, content, created_at, profiles(full_name)")
    .eq("slug", params.slug)
    .eq("published", true)
    .single();

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan"
    };
  }

  return {
    title: `${article.title} - Blog Akademi Profesional Indonesia`,
    description: `${article.content.substring(0, 160)}...`
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const supabase = await createServerSupabaseClient();

  const { data: article } = await supabase
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
    .eq("slug", params.slug)
    .eq("published", true)
    .single();

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-500 text-sm font-medium"
          >
            ← Kembali ke Blog
          </Link>
        </div>

        <ArticleContent article={article} />
      </div>
    </div>
  );
}

