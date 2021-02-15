const { BLOG_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/dashboard',
        destination: `https://with-zones-lake.vercel.app/dashboard`,
      },
      {
        source: '/dashboard/:path*',
        destination: `https://with-zones-lake.vercel.app/dashboard/:path*`,
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
