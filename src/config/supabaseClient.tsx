
import { createClient } from '@supabase/supabase-js'
const url = import.meta.env.VITE_URL;
const api = import.meta.env.VITE_API_KEY;
const Supabase = createClient(url , api);

export default Supabase;