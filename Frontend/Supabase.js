import { createClient } from "@supabase/supabase-js/dist/index.cjs";


const supabaseUrl = import.meta
const supabaseKey = import.meta

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase