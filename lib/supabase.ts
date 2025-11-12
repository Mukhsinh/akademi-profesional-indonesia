import { createBrowserClient } from '@supabase/ssr'

// Client-side Supabase client
export const createClient = () => {
  try {
    let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    let supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Fallback: read from window.__PUBLIC_ENV or injected meta tags when envs are not populated in client runtime
    if (typeof window !== 'undefined') {
      const anyWindow = window as unknown as { __PUBLIC_ENV?: Record<string, string> }
      if (anyWindow.__PUBLIC_ENV) {
        supabaseUrl = supabaseUrl || anyWindow.__PUBLIC_ENV.NEXT_PUBLIC_SUPABASE_URL
        supabaseAnonKey = supabaseAnonKey || anyWindow.__PUBLIC_ENV.NEXT_PUBLIC_SUPABASE_ANON_KEY
      }
      if (!supabaseUrl) {
        const meta = document.querySelector('meta[name="x-supabase-url"]') as HTMLMetaElement | null
        supabaseUrl = meta?.content || undefined
      }
      if (!supabaseAnonKey) {
        const meta = document.querySelector('meta[name="x-supabase-anon-key"]') as HTMLMetaElement | null
        supabaseAnonKey = meta?.content || undefined
      }
    }

    if (!supabaseUrl || !supabaseAnonKey) {
      // Return null so callers can gracefully fallback without crashing the UI
      return null as unknown as ReturnType<typeof createBrowserClient>
    }

    return createBrowserClient(supabaseUrl, supabaseAnonKey)
  } catch (error) {
    return null as unknown as ReturnType<typeof createBrowserClient>
  }
}

// Database types
export interface Profile {
  id: string
  email: string
  full_name: string | null
  role: 'user' | 'admin'
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Article {
  id: string
  title: string
  slug: string
  content: string
  published: boolean
  author_id: string
  created_at: string
  updated_at: string
  profiles?: Profile
}

export interface Service {
  id: string
  name: string
  description: string
  image_url: string
  slug: string
  created_at: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  content: string
  rating: number
  created_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  published_at: string
  meta_description: string
  created_at: string
}

export interface ContactInquiry {
  id: string
  name: string
  email: string
  phone: string
  message: string
  service_type: string
  status: 'new' | 'read' | 'replied' | 'closed'
  created_at: string
  updated_at: string
}

export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  image_url: string
  cta_text: string
  cta_link: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  image_url: string
  link: string
  features: string[]
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  content: string
  rating: number
  image_url: string | null
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface SiteSetting {
  id: string
  key: string
  value: any
  description: string | null
  created_at: string
  updated_at: string
}

export interface ContactInfo {
  id: string
  whatsapp_number: string | null
  email: string | null
  address: string | null
  phone: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}
