/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "k.kakaocdn.net",
      "dosproject.s3.ap-northeast-2.amazonaws.com",
      "dos-project.s3.ap-northeast-2.amazonaws.com",
    ],
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
