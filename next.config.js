/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/gppb-microsite-backend/media/committee_images/**",
      },
    ],
  },
  env: {
    // BASE_URL: "https://ngpa.gppb.gov.ph",
    BASE_URL: "http://localhost",
  },
  reactStrictMode: false,
  output: "standalone",
};

module.exports = nextConfig;
