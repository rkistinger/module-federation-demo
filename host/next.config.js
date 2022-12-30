const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const baseFederationConfig = {
      name: 'host',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {},
    };

    config.plugins.push(
      new NextFederationPlugin({
        ...baseFederationConfig,
        remotes: {
          remoteNext: `remoteNext@http://localhost:3001/_next/static/${
            options.isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
          ...(!options.isServer
            ? {
                remoteReact: 'remoteReact@http://localhost:3002/remoteEntry.js',
              }
            : {}),
        },
      }),
      new FederatedTypesPlugin({
        federationConfig: {
          ...baseFederationConfig,
          remotes: {
            // Exclude remotes that don't provide TS types (remoteReact)
            remoteNext:
              'remoteNext@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
