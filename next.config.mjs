import WebpackObfuscator from 'webpack-obfuscator';

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.supabase.co',
            },
        ],
    },
    webpack(config, { dev, isServer }) {
        // Only obfuscate client-side code in production
        if (!dev && !isServer) {
            config.plugins.push(
                new WebpackObfuscator(
                    {
                        // You can adjust these options for more or less obfuscation.
                        rotateStringArray: true,
                        stringArray: true,
                        stringArrayThreshold: 0.75,
                    },
                    []
                )
            );
        }
        return config;
    },
};

export default nextConfig;
