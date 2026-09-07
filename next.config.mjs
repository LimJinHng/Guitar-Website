/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.singaporeguitarteacher.com" }],
        destination: "https://singaporeguitarteacher.com/:path*",
        permanent: true,
      },
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
