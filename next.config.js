/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'api.lorem.space',
            'placeimg.com',
            'wixmp.com',
            'romapy',
            'images.pexels.com',
            'images.unsplash.com',
            'media.discordapp.net',
            'www.shutterstock.com'
        ],
    },
    env: {
        NEXT_PUBLIC_API_URL: 'http://www.lalishop.shop/api',
        NEXT_PUBLIC_API: 'https://api.escuelajs.co/api/v1/products',
        NEXT_PUBLIC_FIREBASE_API_KEY: 'AIzaSyBmUh4l-pU0PEP2-2YRqlBKVxhkDtIFVOU',
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'lalishop-5194f.firebaseapp.com',
        NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'lalishop-5194f',
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'lalishop-5194f.appspot.com',
        NEXT_PUBLIC_FIREBASE_MASSAGING_SENDER_ID: '550354599584',
        NEXT_PUBLIC_FIREBASE_APP_ID: '1:550354599584:web:2bc4d43bccd3250da1d3c5',
        NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: 'G-Z4XYS5P3XL',
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
};

module.exports = nextConfig;
