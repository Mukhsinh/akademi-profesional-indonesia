'use client'

import { useEffect, useState } from 'react'

interface SupabaseErrorHandlerProps {
  children: React.ReactNode
}

export default function SupabaseErrorHandler({ children }: SupabaseErrorHandlerProps) {
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('Failed to fetch') || event.message.includes('Supabase')) {
        setHasError(true)
        setErrorMessage('Koneksi ke database gagal. Pastikan environment variables sudah dikonfigurasi dengan benar.')
      }
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-primary">
        <div className="text-center p-8 bg-white rounded-2xl shadow-large max-w-md mx-4">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Konfigurasi Database Diperlukan
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            {errorMessage}
          </p>
          <div className="bg-gray-50 p-4 rounded-lg text-left text-sm">
            <p className="font-semibold mb-2">Langkah-langkah:</p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Buat file <code className="bg-gray-200 px-1 rounded">.env.local</code></li>
              <li>Tambahkan konfigurasi Supabase:</li>
            </ol>
            <pre className="mt-2 p-2 bg-gray-800 text-green-400 rounded text-xs overflow-x-auto">
{`NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key`}
            </pre>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Muat Ulang Setelah Konfigurasi
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
