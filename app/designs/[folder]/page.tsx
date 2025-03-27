'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

// Define types
interface FileType {
    name: string;
    url: string;
}

export default function DesignsPage({ params }: { params: { folder: string } }) {
    const [files, setFiles] = useState<FileType[]>([]);
    const folder = params.folder;

    useEffect(() => {
        async function fetchFiles() {
            const response = await fetch(`/api/upload/list?folder=${folder}`);
            const data = await response.json();
            if (data.files) {
                const urls = data.files.map((file: any) => ({
                    name: file.name,
                    url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio-media/${folder}/${file.name}`,
                }));

                setFiles(urls);
            }
        }
        fetchFiles();
    }, [folder]);

    return (
        <div className={styles.container}>
            <h1>
                <span className={styles.icon}>🔥</span> {folder} Files
            </h1>
            <div className={styles.grid}>
                {files.map((file) => (
                    <div key={file.name} className={styles.card}>
                        {file.url.endsWith('.mp4') ? (
                            <video controls className={styles.media}>
                                <source src={file.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={file.url}
                                alt={file.name}
                                width={300}
                                height={200}
                                className={styles.media}
                            />
                        )}
                        <p className={styles.fileName}>{file.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
