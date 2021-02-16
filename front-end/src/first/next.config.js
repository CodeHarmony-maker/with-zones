const { BLOG_URL } = process.env;

module.exports = {
  // basePath: "/first",
  rewrites() {
    return [
      {
        source: "/second",
        destination: `https://second-qgfrm0pe8.vercel.app/second`,
      },
      {
        source: "/second/:path*",
        destination: `https://second-qgfrm0pe8.vercel.app/second/:path*`,
      },
    ];
  },
};
// module.exports = {
//   basePath: "/first",
//   rewrites: async () => {
//     return [
//       {
//         source: "/home",
//         destination: `http://localhost:3000/home`,
//         basePath: false,
//       },
//       {
//         source: "/home/:path*",
//         destination: `http://localhost:3000/home/:path*`,
//         basePath: false,
//       },
//     ];
//   },
// };
