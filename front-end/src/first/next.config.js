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
      {
        source: "/dashboard",
        destination: `https://dashboardone.vercel.app/dashboard`,
      },
      {
        source: "/dashboard/:path*",
        destination: `https://dashboardone.vercel.app/dashboard/:path*`,
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
