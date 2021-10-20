/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
};

// /** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')(['@solness/hub']);

// module.exports = {
//   reactStrictMode: true,
//   ...withTM({
//     webpack: (config) => {
//       config.resolve.alias = {
//         ...config.resolve.alias,
//         // Will make webpack look for these modules in parent directories
//         '@solness/hub': require.resolve('@solness/hub'),
//         // ...
//       };
//       return config;
//     },
//   }),
// };
