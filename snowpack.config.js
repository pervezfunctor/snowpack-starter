/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    [
      '@canarise/snowpack-eslint-plugin',
      {
        globs: ['src/**/*.tsx', 'src/**/*.ts'],
        options: {
          errorOnUnmatchedPattern: false,
        },
        formatter: 'stylish',
      },
    ],

    // '@snowpack/plugin-run-script',
    // 'snowpack-plugin-hash',
    // "snowpack-plugin-import-map",
    // "snowpack-plugin-sharp",
    // 'snowpack-plugin-markdown',
    // "snowpack-plugin-mdx"
    // 'snowpack-plugin-resize-images',
  ],
  "env": {

  },
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    // "bundle": true,
  },
  packageOptions: {
  },
  devOptions: {
    // secure: true
    open: "chrome"
  },
  buildOptions: {

  },
}
