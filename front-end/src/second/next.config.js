module.exports = {
  basePath: '/second',
}
// module.exports = {
//   basePath: "/first",
//   rewrites: async () => {
//     return [
//       {
//         source: "/about",
//         destination: `http://localhost:3001/home`,
//         basePath: false,
//       },
//       {
//         source: "/about",
//         destination: `http://localhost:3001/home/:path*`,
//         basePath: false,
//       },
//     ];
//   },
// };
