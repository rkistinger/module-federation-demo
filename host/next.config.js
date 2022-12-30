const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

function getFederationConfig(options = {}) {
  return {
    name: 'host',
    filename: 'static/chunks/remoteEntry.js',
    remotes: {
      remoteNext: `remoteNext@http://localhost:3001/_next/static/${
        options.isServer ? 'ssr' : 'chunks'
      }/remoteEntry.js`,
    },
  };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin(getFederationConfig(options)),
      new FederatedTypesPlugin({
        federationConfig: getFederationConfig(),
      })
    );

    return config;
  },
};

module.exports = nextConfig;
