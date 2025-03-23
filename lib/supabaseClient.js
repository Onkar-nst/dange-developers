// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://iwhdfmxogattudshufqe.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3aGRmbXhvZ2F0dHVkc2h1ZnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NTkzNTksImV4cCI6MjA1ODMzNTM1OX0.K3hFd_PWKaEEEl3tbFu5pbKP6sD0uqYDtaI219fFJSU"

export const supabase = createClient(supabaseUrl, supabaseKey)
