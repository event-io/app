// place files you want to import through the `$lib` alias in this folder.

import {createClient, SupabaseClient} from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

// Create a single supabase client for interacting with your database
const supabase: SupabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY)


export default {
    events: {
        async all() {
            const { data, error } = await supabase.from('events').select('*')
            if (error) throw error
            return data
        }
    }
}
