// module.exports = {
//   basePath: '/blog',
// }
module.exports = {
  basePath: "/home",
  rewrites: async () => {
    return [
      {
        source: "/about",
        destination: `http://localhost:3001/about`,
        basePath: true,
      },
      {
        source: "/about",
        destination: `http://localhost:3001/about/:path*`,
        basePath: true,
      },
    ];
  },
};
