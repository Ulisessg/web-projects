//  @ts-check
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: join(
      __dirname,
      'src',
      'react',
      'pages',
      process.env.FILE.split('.')[0].concat('.tsx'),
    ),
  },
  output: {
    path: join(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(styl|css)$/i,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: join(__dirname, 'pwa', 'manifest.json'),
          to: join(__dirname, 'dist'),
        },
      ],
    }),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: join(
        __dirname,
        'public',
        process.env.FILE.split('.')[0].concat('.html'),
      ),
      filename: join(
        __dirname,
        'dist',
        process.env.FILE.split('.')[0].concat('.html'),
      ),
    }),
  ],
  devServer: {
    index: process.env.FILE.split('.')[0].concat('.html'),
    contentBase: join(__dirname, 'src', 'react', 'pages', process.env.FILE),
    watchContentBase: true,
    port: 2001,
    hot: true,
    open: true,
    watchOptions: {
      poll: 420,
    },
  },
};
