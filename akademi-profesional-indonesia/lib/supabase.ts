// Supabase client configuration
// This is a placeholder for Supabase integration

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

export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  image_url: string
  cta_text: string
  cta_link: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface ContactInfo {
  id: string
  phone: string
  email: string
  address: string
  whatsapp: string
  is_active: boolean
  created_at: string
  updated_at: string
}

// Placeholder function that returns null
// This allows the app to work without Supabase configured
export function createClient() {
  // Return null to indicate Supabase is not configured
  // Components will use fallback data when this returns null
  return null
}
