'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase'
import { ContactInquiry } from '@/lib/supabase'

export default function ContactInquiriesManager() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const supabase = createClient()

  useEffect(() => {
    fetchInquiries()
  }, [statusFilter])

  const fetchInquiries = async () => {
    try {
      let query = supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false })

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter)
      }

      const { data, error } = await query

      if (error) throw error
      setInquiries(data || [])
    } catch (error) {
      console.error('Error fetching inquiries:', error)
    } finally {
      setLoading(false)
    }
  }

  type InquiryStatus = ContactInquiry['status']

  const handleStatusChange = async (id: string, newStatus: InquiryStatus) => {
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .update({ 
          status: newStatus, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', id)

      if (error) throw error
      await fetchInquiries()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus inquiry ini?')) return

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .delete()
        .eq('id', id)

      if (error) throw error
      await fetchInquiries()
    } catch (error) {
      console.error('Error deleting inquiry:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'read': return 'bg-yellow-100 text-yellow-800'
      case 'replied': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new': return 'Baru'
      case 'read': return 'Dibaca'
      case 'replied': return 'Dibalas'
      case 'closed': return 'Ditutup'
      default: return status
    }
  }

  if (loading) return <div className="text-center py-8">Loading...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Kelola Kontak Masuk</h2>
        <div className="flex space-x-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Semua Status</option>
            <option value="new">Baru</option>
            <option value="read">Dibaca</option>
            <option value="replied">Dibalas</option>
            <option value="closed">Ditutup</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {inquiry.name}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                    {getStatusLabel(inquiry.status)}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <p><strong>Email:</strong> {inquiry.email}</p>
                  {inquiry.phone && <p><strong>Phone:</strong> {inquiry.phone}</p>}
                  {inquiry.service_type && <p><strong>Jenis Layanan:</strong> {inquiry.service_type}</p>}
                  <p><strong>Tanggal:</strong> {new Date(inquiry.created_at).toLocaleDateString('id-ID')}</p>
                </div>
                <p className="text-gray-700 line-clamp-3">
                  {inquiry.message}
                </p>
              </div>
              <div className="flex flex-col space-y-2 ml-4">
                <button
                  onClick={() => {
                    setSelectedInquiry(inquiry)
                    setIsModalOpen(true)
                  }}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                >
                  Lihat Detail
                </button>
                <select
                  value={inquiry.status}
                  onChange={(e) => handleStatusChange(inquiry.id, e.target.value as InquiryStatus)}
                  className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="new">Baru</option>
                  <option value="read">Dibaca</option>
                  <option value="replied">Dibalas</option>
                  <option value="closed">Ditutup</option>
                </select>
                <button
                  onClick={() => handleDelete(inquiry.id)}
                  className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {inquiries.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Tidak ada kontak masuk untuk status yang dipilih.
        </div>
      )}

      {isModalOpen && selectedInquiry && (
        <InquiryModal
          inquiry={selectedInquiry}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedInquiry(null)
          }}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  )
}

function InquiryModal({ 
  inquiry, 
  onClose, 
  onStatusChange 
}: { 
  inquiry: ContactInquiry
  onClose: () => void
  onStatusChange: (id: string, status: ContactInquiry['status']) => void
}) {
  const [status, setStatus] = useState<ContactInquiry['status']>(inquiry.status)

  const handleStatusUpdate = () => {
    onStatusChange(inquiry.id, status)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Detail Kontak Masuk</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <p className="text-gray-900">{inquiry.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <p className="text-gray-900">{inquiry.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <p className="text-gray-900">{inquiry.phone || '-'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jenis Layanan
              </label>
              <p className="text-gray-900">{inquiry.service_type || '-'}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pesan
            </label>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-900 whitespace-pre-wrap">{inquiry.message}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as ContactInquiry['status'])}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="new">Baru</option>
              <option value="read">Dibaca</option>
              <option value="replied">Dibalas</option>
              <option value="closed">Ditutup</option>
            </select>
          </div>

          <div className="text-sm text-gray-500">
            <p>Dibuat: {new Date(inquiry.created_at).toLocaleString('id-ID')}</p>
            <p>Diperbarui: {new Date(inquiry.updated_at).toLocaleString('id-ID')}</p>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={handleStatusUpdate}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Update Status
          </button>
        </div>
      </div>
    </div>
  )
}
