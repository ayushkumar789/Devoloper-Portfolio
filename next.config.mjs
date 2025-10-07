// next.config.mjs
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
        // unoptimized: true, // (enable only if needed)
    },
    webpack: async (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            const { default: WebpackObfuscator } = await import('webpack-obfuscator');
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
