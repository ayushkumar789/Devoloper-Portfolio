import { supabase } from '@/util/supabase';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');

    if (!folder) {
        return NextResponse.json({ error: 'Folder not specified' }, { status: 400 });
    }

    console.log('Fetching folder:', folder);

    // Fetch files from Supabase Storage
    const { data, error } = await supabase.storage
        .from('portfolio-media')
        .list(folder, { limit: 100 });

    if (error) {
        console.error('Supabase Error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('Fetched Files from Supabase:', data);

    // Generate public URLs for each file
    const filesWithUrls = data?.map((file) => ({
        name: file.name,
        url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio-media/${folder}/${file.name}`,
    }));

    console.log('Files with URLs:', filesWithUrls);

    return NextResponse.json({ files: filesWithUrls });
}
