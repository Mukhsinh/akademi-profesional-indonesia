'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function SupabaseTest() {
  const [status, setStatus] = useState<'testing' | 'success' | 'error'>('testing')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const testConnection = async () => {
      try {
        const supabase = createClient()
        
        // Test basic connection
        const { data, error } = await supabase
          .from('profiles')
          .select('count')
          .limit(1)

        if (error) {
          setStatus('error')
          setMessage(`Database Error: ${error.message}`)
          return
        }

        setStatus('success')
        setMessage('Supabase connection successful!')
      } catch (error) {
        setStatus('error')
        setMessage(`Connection Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 p-4 bg-white rounded-lg shadow-lg border">
      <div className="flex items-center space-x-2">
        {status === 'testing' && (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-sm">Testing connection...</span>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600">Connected</span>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-sm text-red-600">Error</span>
          </>
        )}
      </div>
      {message && (
        <div className="mt-2 text-xs text-gray-600 max-w-xs">
          {message}
        </div>
      )}
    </div>
  )
}
