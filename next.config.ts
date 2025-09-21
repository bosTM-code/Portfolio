/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Do not fail production builds because of ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Do not fail production builds because of TS type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
