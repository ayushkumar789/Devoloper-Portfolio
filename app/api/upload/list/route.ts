import { NextResponse } from 'next/server';
import { getSupabaseServer } from '@/util/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'nodejs';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const folder = searchParams.get('folder') ?? 'logos';
        const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET ?? 'portfolio-media';
        const base = process.env.NEXT_PUBLIC_SUPABASE_URL!;

        const supabase = getSupabaseServer(); // always works regardless of RLS

        const { data, error } = await supabase
            .storage
            .from(bucket)
            .list(folder, { limit: 1000, sortBy: { column: 'name', order: 'asc' } });

        if (error) {
            // treat missing folder as empty
            if (/not\s*found/i.test(error.message)) {
                return NextResponse.json({ files: [] }, { headers: { 'cache-control': 'no-store' } });
            }
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        const files = (data ?? [])
            .filter((it: any) => it && it.name && !String(it.name).endsWith('/'))
            .map((it: any) => ({
                name: it.name,
                url: `${base}/storage/v1/object/public/${bucket}/${encodeURIComponent(folder)}/${encodeURIComponent(it.name)}`
            }));

        return NextResponse.json({ files }, { headers: { 'cache-control': 'no-store' } });
    } catch (e: any) {
        return NextResponse.json({ error: String(e?.message || e) }, { status: 500 });
    }
}
