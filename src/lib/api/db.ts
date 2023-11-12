// place files you want to import through the `$lib` alias in this folder.

import {createClient, SupabaseClient} from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

// Create a single supabase client for interacting with your database
const supabase: SupabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY)


export default {
    events: {
        async all() {
            const {data, error} = await supabase.from('event').select('*')
            if (error) throw error
            return data
        },

        async get(id: number) {
            const {data, error} = await supabase.from('event').select('*').eq('id', id).single()
            if (error) throw error
            return data
        },

        async getAll(id: number) {
            const {data, error} = await supabase.from('event')
                .select(
                    `
                    *,
                    categories:category (id, name),
                    themes:theme (id, name),
                    organizer (*)
                    `
                )
                .eq('id', id).single()
            if (error) throw error
            return data
        }
    },
    organizers: {
        async all() {
            const {data, error} = await supabase.from('organizer').select('*')
            if (error) throw error
            return data
        },
        async get(id: number) {
            const {data, error} = await supabase.from('organizer').select('*').eq('id', id).single()
            if (error) throw error
            return data
        }
    },
    themes: {
        async all() {
            const {data, error} = await supabase.from('theme').select('*')
            if (error) throw error
            return data
        },
        async get(id: number) {
            const {data, error} = await supabase.from('theme').select('*').eq('id', id).single()
            if (error) throw error
            return data
        }
    },
    
}
