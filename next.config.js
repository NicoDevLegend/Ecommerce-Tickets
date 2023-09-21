/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.pics",
        port: "",
        pathname: "/svg/",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
