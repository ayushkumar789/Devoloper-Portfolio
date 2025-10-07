'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

type FileItem = { name: string; url: string };

export default function DesignsPage({ params }: { params: { folder: string } }) {
    const folder = decodeURIComponent(params.folder);
    const [files, setFiles] = useState<FileItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/upload/list?folder=${encodeURIComponent(folder)}`, { cache: 'no-store' });
                const json = await res.json();
                setFiles(json?.files ?? []);
            } finally {
                setLoading(false);
            }
        })();
    }, [folder]);

    if (loading) return <main className={styles.container}><h1 className={styles.h1}>🔥 {folder} Files</h1><p>Loading…</p></main>;

    return (
        <main className={styles.container}>
            <h1 className={styles.h1}>🔥 {folder} Files</h1>
            <div className={styles.grid}>
                {files.map((file) => (
                    <div key={file.url} className={styles.card}>
                        {/\.(mp4|webm|ogg)$/i.test(file.name) ? (
                            <video controls className={styles.media} src={file.url} />
                        ) : (
                            <Image src={file.url} alt={file.name} width={900} height={600} className={styles.media} />
                        )}
                        <p className={styles.fileName}>{file.name}</p>
                    </div>
                ))}
                {files.length === 0 && <p>No files found.</p>}
            </div>
        </main>
    );
}
