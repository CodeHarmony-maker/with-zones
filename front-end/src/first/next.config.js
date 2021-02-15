const { BLOG_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/dashboard',
        destination: `${BLOG_URL}/dashboard`,
      },
      {
        source: '/dashboard/:path*',
        destination: `${BLOG_URL}/dashboard/:path*`,
      },
    ]
  },
}
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
