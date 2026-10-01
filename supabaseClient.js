import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Aquí pegaremos tu URL de Supabase y tu Publishable key
const supabaseUrl = 'TU_PROJECT_URL_AQUI'
const supabaseKey = 'TU_PUBLISHABLE_KEY_AQUI'

export const supabase = createClient(supabaseUrl, supabaseKey)
