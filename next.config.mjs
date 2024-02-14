/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'vlvaaubljizdexkcyygp.supabase.co',
      },
    ],
  },
};

export default nextConfig;

