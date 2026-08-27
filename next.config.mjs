/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/my-portfolio",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/about-me",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
