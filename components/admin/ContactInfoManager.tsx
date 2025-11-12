'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase'
import { ContactInfo } from '@/lib/supabase'

export default function ContactInfoManager() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    fetchContactInfo()
  }, [])

  const fetchContactInfo = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_info')
        .select('*')
        .eq('is_active', true)
        .single()

      if (error && error.code !== 'PGRST116') throw error
      setContactInfo(data)
    } catch (error) {
      console.error('Error fetching contact info:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (infoData: Partial<ContactInfo>) => {
    try {
      if (contactInfo) {
        const { error } = await supabase
          .from('contact_info')
          .update({ ...infoData, updated_at: new Date().toISOString() })
          .eq('id', contactInfo.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('contact_info')
          .insert([infoData])

        if (error) throw error
      }

      await fetchContactInfo()
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error saving contact info:', error)
    }
  }

  if (loading) return <div className="text-center py-8">Loading...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Kelola Informasi Kontak</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {contactInfo ? 'Edit Informasi' : 'Tambah Informasi'}
        </button>
      </div>

      {contactInfo && (
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Kontak</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
                  <p className="text-gray-900">{contactInfo.whatsapp_number || '-'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{contactInfo.email || '-'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telepon</label>
                  <p className="text-gray-900">{contactInfo.phone || '-'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Alamat</label>
                  <p className="text-gray-900">{contactInfo.address || '-'}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Status</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    contactInfo.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {contactInfo.is_active ? 'Aktif' : 'Tidak Aktif'}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Dibuat</label>
                  <p className="text-gray-900">{new Date(contactInfo.created_at).toLocaleDateString('id-ID')}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Diperbarui</label>
                  <p className="text-gray-900">{new Date(contactInfo.updated_at).toLocaleDateString('id-ID')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!contactInfo && (
        <div className="text-center py-8 text-gray-500">
          Belum ada informasi kontak. Klik "Tambah Informasi" untuk menambahkan.
        </div>
      )}

      {isModalOpen && (
        <ContactInfoModal
          contactInfo={contactInfo}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

function ContactInfoModal({ 
  contactInfo, 
  onSave, 
  onClose 
}: { 
  contactInfo: ContactInfo | null
  onSave: (data: Partial<ContactInfo>) => void
  onClose: () => void 
}) {
  const [formData, setFormData] = useState({
    whatsapp_number: contactInfo?.whatsapp_number || '',
    email: contactInfo?.email || '',
    phone: contactInfo?.phone || '',
    address: contactInfo?.address || '',
    is_active: contactInfo?.is_active ?? true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">
          {contactInfo ? 'Edit Informasi Kontak' : 'Tambah Informasi Kontak'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nomor WhatsApp
            </label>
            <input
              type="tel"
              value={formData.whatsapp_number}
              onChange={(e) => setFormData({ ...formData, whatsapp_number: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+6281234567890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="info@akademiprofesional.id"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nomor Telepon
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+62-21-1234-5678"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Jl. Sudirman No. 123, Jakarta Pusat 10110, Indonesia"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_active"
              checked={formData.is_active}
              onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
              Aktif
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
