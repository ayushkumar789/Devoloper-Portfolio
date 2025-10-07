import { NextResponse } from 'next/server';
import { getSupabaseServer } from '@/util/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET ?? 'portfolio-media';
        const supabase = getSupabaseServer();

        const form = await req.formData();
        const file = form.get('file') as File | null;
        const folder = (form.get('folder') as string | null) ?? 'uploads';

        if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

        const arrayBuf = await file.arrayBuffer();
        const bytes = new Uint8Array(arrayBuf);
        const name = file.name.replace(/\s+/g, '_');

        const { data, error } = await supabase
            .storage
            .from(bucket)
            .upload(`${folder}/${name}`, bytes, {
                cacheControl: '3600',
                upsert: true,
                contentType: file.type || undefined,
            });

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });

        const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${encodeURIComponent(folder)}/${encodeURIComponent(name)}`;

        return NextResponse.json({ path: data?.path, url: publicUrl });
    } catch (e: any) {
        return NextResponse.json({ error: String(e?.message || e) }, { status: 500 });
    }
}
