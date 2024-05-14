/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'content.secutix.com',
          port: '',
          pathname: '/T20INC/images/**',
        },
      ],
    },
  };
  
  export default nextConfig;