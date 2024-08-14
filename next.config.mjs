/** @type {import('next').NextConfig} */
const nextConfig = {
  //For adding external image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "stickerwablog.wordpress.com",
      },
    ],
  },
};

export default nextConfig;
