const { BLOG_URL } = process.env;

module.exports = {
  // basePath: "/first",
  rewrites() {
    return [
      {
        source: "/second",
        destination: `${BLOG_URL}/second`,
      },
      {
        source: "/second/:path*",
        destination: `${BLOG_URL}/second/:path*`,
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
