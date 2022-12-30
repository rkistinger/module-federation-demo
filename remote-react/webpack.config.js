const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  output: {
    publicPath: 'http://localhost:3002/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remoteReact',
      library: { type: 'var', name: 'remoteReact' },
      filename: 'remoteEntry.js',
      exposes: {
        './Checkbox': './src/Checkbox',
      },
      shared: {
        // 1. https://github.com/module-federation/module-federation-examples/tree/master/nextjs-react#the-remote-app
        // 2. https://webpack.js.org/plugins/module-federation-plugin/#object-syntax-with-sharing-hints
        'react': {
          requiredVersion: false,
          singleton: true,
          version: '0',
        },
        'react-dom': {
          requiredVersion: false,
          singleton: true,
          version: '0',
        },
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
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
