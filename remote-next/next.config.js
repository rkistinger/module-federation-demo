const path = require('path');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    /** @type {import('@module-federation/utilities').NextFederationPluginOptions} */
    const federationConfig = {
      name: 'remoteNext',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './Button': './components/Button.tsx',
        './pages/index': './pages/index.tsx',
      },
      shared: {
        // 1. https://github.com/module-federation/module-federation-examples/tree/master/nextjs-react#the-remote-app
        // 2. https://webpack.js.org/plugins/module-federation-plugin/#object-syntax-with-sharing-hints
        '@carvana/showroom-css-theme': {
          requiredVersion: false,
          singleton: true,
          version: '0',
        },
        '@carvana/showroom-forms': {
          requiredVersion: false,
          singleton: true,
          version: '0',
        },
      },
      remotes: {},
    };

    config.plugins.push(
      new NextFederationPlugin({
        ...federationConfig,
        // https://github.com/module-federation/universe/tree/main/packages/nextjs-mf#options
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      }),
      new FederatedTypesPlugin({
        federationConfig,
      })
    );

    return config;
  },
};

module.exports = nextConfig;
