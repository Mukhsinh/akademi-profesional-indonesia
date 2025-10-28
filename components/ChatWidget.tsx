'use client'

import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-large transition-all duration-200 transform hover:scale-110"
        aria-label="Buka chat"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-large border border-secondary-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-hero-gradient text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">API</span>
                </div>
                <div>
                  <h3 className="font-semibold">Akademi Profesional Indonesia</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {/* Bot Message */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs font-bold text-primary-600">API</span>
                </div>
                <div className="bg-secondary-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-secondary-800">
                    Halo! Selamat datang di Akademi Profesional Indonesia. 
                    Ada yang bisa kami bantu hari ini? 😊
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <p className="text-xs text-secondary-500 font-medium">Pilih layanan yang Anda minati:</p>
                <div className="grid grid-cols-1 gap-2">
                  <button className="text-left text-sm bg-primary-50 hover:bg-primary-100 text-primary-700 p-2 rounded-lg transition-colors">
                    📚 Pelatihan Online & Offline
                  </button>
                  <button className="text-left text-sm bg-primary-50 hover:bg-primary-100 text-primary-700 p-2 rounded-lg transition-colors">
                    💻 Jasa Aplikasi Custom
                  </button>
                  <button className="text-left text-sm bg-primary-50 hover:bg-primary-100 text-primary-700 p-2 rounded-lg transition-colors">
                    🏆 Sertifikasi Kompetensi
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-secondary-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ketik pesan Anda..."
                className="flex-1 px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-secondary-500 mt-2">
              Atau hubungi kami di{' '}
              <a href="tel:+6281234567890" className="text-primary-600 hover:underline">
                +62 812-3456-7890
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
