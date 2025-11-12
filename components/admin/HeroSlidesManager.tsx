'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase'
import { HeroSlide } from '@/lib/supabase'

export default function HeroSlidesManager() {
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [loading, setLoading] = useState(true)
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    fetchSlides()
  }, [])

  const fetchSlides = async () => {
    try {
      const { data, error } = await supabase
        .from('hero_slides')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setSlides(data || [])
    } catch (error) {
      console.error('Error fetching slides:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (slideData: Partial<HeroSlide>) => {
    try {
      if (editingSlide) {
        const { error } = await supabase
          .from('hero_slides')
          .update({ ...slideData, updated_at: new Date().toISOString() })
          .eq('id', editingSlide.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('hero_slides')
          .insert([slideData])

        if (error) throw error
      }

      await fetchSlides()
      setIsModalOpen(false)
      setEditingSlide(null)
    } catch (error) {
      console.error('Error saving slide:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus slide ini?')) return

    try {
      const { error } = await supabase
        .from('hero_slides')
        .delete()
        .eq('id', id)

      if (error) throw error
      await fetchSlides()
    } catch (error) {
      console.error('Error deleting slide:', error)
    }
  }

  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('hero_slides')
        .update({ is_active: !isActive, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error
      await fetchSlides()
    } catch (error) {
      console.error('Error toggling slide status:', error)
    }
  }

  if (loading) return <div className="text-center py-8">Loading...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Kelola Hero Slides</h2>
        <button
          onClick={() => {
            setEditingSlide(null)
            setIsModalOpen(true)
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Tambah Slide
        </button>
      </div>

      <div className="grid gap-4">
        {slides.map((slide) => (
          <div key={slide.id} className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {slide.subtitle}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Order: {slide.order_index}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    slide.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {slide.is_active ? 'Aktif' : 'Tidak Aktif'}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggleActive(slide.id, slide.is_active)}
                  className={`px-3 py-1 text-sm rounded ${
                    slide.is_active 
                      ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {slide.is_active ? 'Nonaktifkan' : 'Aktifkan'}
                </button>
                <button
                  onClick={() => {
                    setEditingSlide(slide)
                    setIsModalOpen(true)
                  }}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(slide.id)}
                  className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <SlideModal
          slide={editingSlide}
          onSave={handleSave}
          onClose={() => {
            setIsModalOpen(false)
            setEditingSlide(null)
          }}
        />
      )}
    </div>
  )
}

function SlideModal({ 
  slide, 
  onSave, 
  onClose 
}: { 
  slide: HeroSlide | null
  onSave: (data: Partial<HeroSlide>) => void
  onClose: () => void 
}) {
  const [formData, setFormData] = useState({
    title: slide?.title || '',
    subtitle: slide?.subtitle || '',
    image_url: slide?.image_url || '',
    cta_text: slide?.cta_text || '',
    cta_link: slide?.cta_link || '',
    order_index: slide?.order_index || 0,
    is_active: slide?.is_active ?? true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">
          {slide ? 'Edit Slide' : 'Tambah Slide Baru'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtitle
            </label>
            <textarea
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL Gambar
            </label>
            <input
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teks CTA
              </label>
              <input
                type="text"
                value={formData.cta_text}
                onChange={(e) => setFormData({ ...formData, cta_text: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link CTA
              </label>
              <input
                type="text"
                value={formData.cta_link}
                onChange={(e) => setFormData({ ...formData, cta_link: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Urutan
              </label>
              <input
                type="number"
                value={formData.order_index}
                onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
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
