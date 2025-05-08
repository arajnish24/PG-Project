/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["thumbs.dreamstime.com", 
      "lh3.googleusercontent.com",
      "encrypted-tbn0.gstatic.com",
      "3.imimg.com",
      "png.pngtree.com",
      "www.shutterstock.com",
    ],
  },
};

// module.exports = nextConfig;
export default nextConfig;
