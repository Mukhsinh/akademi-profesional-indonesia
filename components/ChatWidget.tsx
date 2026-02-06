'use client'

import { useState } from 'react'
import { X, MessageCircle, Send } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const whatsappNumber = '6285726112001'

  const templates = [
    {
      id: 'info-layanan',
      icon: '💼',
      title: 'Informasi Layanan',
      message: 'Halo, saya ingin mengetahui lebih lanjut tentang layanan aplikasi yang tersedia.'
    },
    {
      id: 'info-pelatihan',
      icon: '📚',
      title: 'Program Pelatihan',
      message: 'Halo, saya tertarik dengan program pelatihan yang ditawarkan. Bisakah dijelaskan lebih detail?'
    },
    {
      id: 'konsultasi',
      icon: '🤝',
      title: 'Konsultasi Gratis',
      message: 'Halo, saya ingin berkonsultasi mengenai solusi digital untuk rumah sakit kami.'
    },
    {
      id: 'demo',
      icon: '🖥️',
      title: 'Request Demo',
      message: 'Halo, saya ingin menjadwalkan demo produk. Kapan waktu yang tersedia?'
    },
    {
      id: 'harga',
      icon: '💰',
      title: 'Informasi Harga',
      message: 'Halo, saya ingin mengetahui informasi harga dan paket yang tersedia.'
    },
    {
      id: 'custom',
      icon: '✉️',
      title: 'Pesan Lainnya',
      message: 'Halo, saya ingin bertanya tentang '
    }
  ]

  const handleSendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    setIsOpen(false)
    setSelectedTemplate(null)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Chat Bantuan"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 px-3 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Butuh Bantuan?
          </span>
        )}

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            !
          </span>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base">Chat Bantuan</h3>
                <p className="text-xs text-green-100">Online - Siap Membantu</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 max-h-[480px] overflow-y-auto">
            {/* Welcome Message */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-700 leading-relaxed">
                👋 <strong>Selamat datang!</strong><br />
                Pilih topik di bawah ini untuk memulai percakapan dengan tim kami via WhatsApp.
              </p>
            </div>

            {/* Template Options */}
            <div className="space-y-2">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleSendMessage(template.message)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{template.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-green-700">
                        {template.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {template.message}
                      </p>
                    </div>
                    <Send className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                  </div>
                </button>
              ))}
            </div>

            {/* Footer Info */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Terhubung via WhatsApp</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Respon cepat: Senin - Jumat, 08:00 - 17:00 WIB
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
