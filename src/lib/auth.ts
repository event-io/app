// place files you want to import through the `$lib` alias in this folder.

import {createClient, SupabaseClient} from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';
import {writable} from "svelte/store";

// Create a single supabase client for interacting with your database
const supabase: SupabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY)

export default {
    isLogged: writable(false),
    async login(email: string, password: string) {
        return await supabase.auth.signInWithPassword(email, password);
    },
    async register(email: string, password: string, userInfo?: { [key: string]: string }) {
        return await supabase.auth.signUp({email:email, password:password, options:{ data: userInfo } } )
    },
    async logout() {
        const {error, data} = await supabase.auth.signOut()
        if (error) throw error
        return data
    },
    async check() {
        const {data, error} = await supabase.auth.user()
        if (error) throw error
        return data
    },
    async getSession() {
        const {data, error} = await supabase.auth.getSession()
        if (error) throw error
        return data.session
    }
}
