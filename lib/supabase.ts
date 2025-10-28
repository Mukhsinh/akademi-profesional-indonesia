import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side Supabase client
export const createClient = () => {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
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
  created_at: string
}
