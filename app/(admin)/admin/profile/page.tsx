import { requireAdmin } from '@/lib/auth'
import ProfileForm from '@/components/admin/ProfileForm'

export const dynamic = 'force-dynamic'

export default async function AdminProfilePage() {
  const profile = await requireAdmin()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Profil Saya</h1>
        <p className="mt-1 text-sm text-gray-500">
          Kelola informasi profil Anda
        </p>
      </div>

      <ProfileForm profile={profile} />
    </div>
  )
}
