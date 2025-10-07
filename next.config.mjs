// next.config.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const WebpackObfuscator = require('webpack-obfuscator');

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        NEXT_PUBLIC_SUPABASE_BUCKET: process.env.NEXT_PUBLIC_SUPABASE_BUCKET,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: '**.supabase.co', pathname: '/storage/v1/object/public/**' },
        ],
        // unoptimized: true, // toggle only if needed
    },
    webpack(config, { dev, isServer }) {
        if (!dev && !isServer) {
            config.plugins.push(
                new WebpackObfuscator(
                    { rotateStringArray: true, stringArray: true, stringArrayThreshold: 0.75 },
                    []
                )
            );
        }
        return config;
    },
};

export default nextConfig;
