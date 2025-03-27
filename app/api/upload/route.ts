import { supabase } from '@/util/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
        return NextResponse.json({ error: 'No file found' }, { status: 400 });
    }

    const { data, error } = await supabase.storage
        .from('portfolio-media')
        .upload(`uploads/${file.name}`, file, { upsert: true });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio-media/uploads/${file.name}`;

    return NextResponse.json({ url });
}
