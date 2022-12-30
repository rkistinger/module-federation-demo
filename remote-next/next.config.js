const path = require('path');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const federationConfig = {
      name: 'remoteNext',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './Button': './components/Button.tsx',
        './pages/index': './pages/index.tsx',
      },
      remotes: {},
    };

    config.plugins.push(
      new NextFederationPlugin(federationConfig),
      new FederatedTypesPlugin({
        federationConfig,
      })
    );

    return config;
  },
};

module.exports = nextConfig;
