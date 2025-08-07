// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Por ahora usaremos valores temporales - los cambiaremos cuando configuremos Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://temp-url.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'temp-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos TypeScript para nuestra base de datos
export interface Contact {
  id?: string
  name: string
  email: string
  country: string
  whatsapp?: string
  level: 'principiante' | 'intermedio' | 'avanzado' | 'profesional'
  class_type?: 'trial' | 'single' | 'pack4' | 'pack8'
  preferred_schedule?: string
  goals?: string
  source?: string
  status?: 'new' | 'contacted' | 'trial_booked' | 'student' | 'inactive'
  created_at?: string
  updated_at?: string
}

export interface Testimonial {
  id: string
  student_name: string
  student_initial: string
  country: string
  country_flag: string
  testimonial: string
  rating: number
  study_duration?: string
  is_featured: boolean
  display_order: number
  created_at: string
}

// Datos mock para desarrollo - los reemplazaremos con Supabase después
export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    student_name: 'María González',
    student_initial: 'MG',
    country: 'México',
    country_flag: '🇲🇽',
    testimonial: 'Lautaro tiene un método increíble. En 6 meses pasé de tocar acordes básicos a improvisar sobre estándares complejos. Su formación en EMPA realmente se nota.',
    rating: 5,
    study_duration: '2 años estudiando',
    is_featured: true,
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    student_name: 'Carlos Mendoza',
    student_initial: 'CM',
    country: 'Colombia',
    country_flag: '🇨🇴',
    testimonial: 'Las clases online son súper dinámicas. Los backing tracks y ejercicios personalizados me ayudaron a desarrollar mi oído jazzístico rápidamente.',
    rating: 5,
    study_duration: '1 año estudiando',
    is_featured: true,
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    student_name: 'Ana Petrosky',
    student_initial: 'AP',
    country: 'Chile',
    country_flag: '🇨🇱',
    testimonial: 'Excelente profesor. Me ayudó a entender la armonía del jazz de forma práctica. Ahora toco en una banda local y todo gracias a sus enseñanzas.',
    rating: 5,
    study_duration: '3 años estudiando',
    is_featured: true,
    display_order: 3,
    created_at: new Date().toISOString()
  }
]

export const mockCountries = [
  { name: 'Argentina', code: 'AR', flag: '🇦🇷', students: 45 },
  { name: 'México', code: 'MX', flag: '🇲🇽', students: 32 },
  { name: 'Colombia', code: 'CO', flag: '🇨🇴', students: 28 },
  { name: 'Chile', code: 'CL', flag: '🇨🇱', students: 22 },
  { name: 'Perú', code: 'PE', flag: '🇵🇪', students: 18 },
  { name: 'Ecuador', code: 'EC', flag: '🇪🇨', students: 12 }
]