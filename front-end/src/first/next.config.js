// const { BLOG_URL } = process.env

// module.exports = {
//   rewrites() {
//     return [
//       {
//         source: '/blog',
//         destination: `/blog`,
//       },
//       {
//         source: '/blog/:path*',
//         destination: `/blog/:path*`,
//       },
//     ]
//   },
// }
module.exports = {
  basePath: "/home",
  rewrites: async () => {
    return [
      {
        source: "/home",
        destination: `http://localhost:3000/home`,
        basePath: false,
      },
      {
        source: "/home/:path*",
        destination: `http://localhost:3000/home/:path*`,
        basePath: false,
      },
    ];
  },
};
