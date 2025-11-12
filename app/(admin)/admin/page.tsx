import StatsCard from "@/components/admin/StatsCard";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export default async function AdminDashboard() {
  const supabase = await createServerSupabaseClient();

  // Get statistics
  const [
    { count: totalArticles },
    { count: publishedArticles },
    { count: totalUsers },
    { count: totalInquiries },
    { count: totalServices },
    { count: totalSlides },
  ] = await Promise.all([
    supabase.from("articles").select("*", { count: "exact", head: true }),
    supabase.from("articles").select("*", { count: "exact", head: true }).eq("published", true),
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("contact_inquiries").select("*", { count: "exact", head: true }),
    supabase.from("services").select("*", { count: "exact", head: true }),
    supabase.from("hero_slides").select("*", { count: "exact", head: true }),
  ]);

  // Get recent articles
  const { data: recentArticles } = await supabase
    .from("articles")
    .select(`
      id, 
      title, 
      published, 
      created_at, 
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
    .order("created_at", { ascending: false })
    .limit(5);

  // Get recent inquiries
  const { data: recentInquiries } = await supabase
    .from("contact_inquiries")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Selamat datang di panel administrasi Akademi Profesional Indonesia
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatsCard
          title="Total Artikel"
          value={totalArticles || 0}
          icon="📝"
          color="blue"
        />
        <StatsCard
          title="Artikel Terbit"
          value={publishedArticles || 0}
          icon="✅"
          color="green"
        />
        <StatsCard
          title="Total Pengguna"
          value={totalUsers || 0}
          icon="👥"
          color="purple"
        />
        <StatsCard
          title="Kontak Masuk"
          value={totalInquiries || 0}
          icon="📧"
          color="orange"
        />
        <StatsCard
          title="Layanan"
          value={totalServices || 0}
          icon="⚙️"
          color="indigo"
        />
        <StatsCard
          title="Hero Slides"
          value={totalSlides || 0}
          icon="🖼️"
          color="pink"
        />
      </div>

      {/* Recent Articles */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Artikel Terbaru
          </h3>
          <div className="flow-root">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {recentArticles?.map((article) => (
                <li key={article.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">
                        {article.published ? "✅" : "📝"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {article.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        oleh {Array.isArray(article.profiles) ? (article.profiles as any)[0]?.full_name : (article.profiles as any)?.full_name || "Unknown"} •{" "}
                        {new Date(article.created_at).toLocaleDateString("id-ID")}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          article.published
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {article.published ? "Terbit" : "Draft"}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
              {(!recentArticles || recentArticles.length === 0) && (
                <li className="py-4 text-center text-gray-500">
                  Belum ada artikel
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

