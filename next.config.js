/** @type {import('next').NextConfig} */
const nextConfig = {
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
    BASE_URL: "http://localhost",
    // BASE_URL: "https://ngpa.gppb.gov.ph",
  },
  reactStrictMode: false,
  output: "standalone",
};

module.exports = nextConfig;
