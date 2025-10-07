import { createClient } from '@supabase/supabase-js';

export function getSupabasePublic() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anon) throw new Error('Missing Supabase env (public)');
    return createClient(url, anon);
}

export function getSupabaseServer() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const service = process.env.SUPABASE_SERVICE_ROLE_KEY; // server-only
    if (!url || !service) throw new Error('Missing Supabase env (server)');
    return createClient(url, service);
}
