/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy','images.pexels.com','images.unsplash.com'],
  },
  env: {
    NEXT_API:'https://api.escuelajs.co/api/v1/products',
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  output: 'standalone',
  
  // compress: true,
  // swcMinify: true,
  // env: {
  //   customkey: 'customValue',
  // },
  // basePath: '/dist',
  // async redirects() {
  //   return [
  //     {
  //       source: '/google',
  //       destination: 'https://www.google.com/',
  //       permanent: true,
  //     },
  //   ];
  // }
}

module.exports = nextConfig;
