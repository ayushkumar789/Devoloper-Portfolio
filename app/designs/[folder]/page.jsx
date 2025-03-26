'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function DesignGallery() {
    const { folder } = useParams()
    const [files, setFiles] = useState([])

    useEffect(() => {
        // Simulate loading files (in production, you'd fetch from API or backend)
        // Here we assume you know the number and extensions for demo
        const exts = ['jpg', 'png', 'svg', 'gif', 'mp4']
        const temp = []

        for (let i = 1; i <= 10; i++) {
            for (let ext of exts) {
                temp.push(`/assets/designs/${folder}/${folder}${i}.${ext}`)
            }
        }
        setFiles(temp)
    }, [folder])

    const isImage = (file) => /\.(png|jpg|jpeg|gif|svg)$/i.test(file)
    const isVideo = (file) => /\.(mp4|webm|ogg)$/i.test(file)

    return (
        <section className="py-5 container">
            <h2 className="text-center mb-5 text-capitalize">{folder.replace('-', ' ')}</h2>
            <div className="row g-4">
                {files.map((file, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div className="border rounded shadow-sm p-2 bg-3 h-100 text-center">
                            {isImage(file) ? (
                                <img src={file} alt={`design-${idx}`} className="img-fluid rounded" />
                            ) : isVideo(file) ? (
                                <video src={file} controls className="img-fluid rounded" />
                            ) : null}
                            <p className="mt-2 text-300">{file.split('/').pop()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
