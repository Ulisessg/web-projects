const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

//  preload
//  Get the name of file without extension to add later
const EnvVarfile = process.env.FILE.split('.')[0];

module.exports = {
  mode: 'production',
  entry: {
    [EnvVarfile]: join(
      __dirname,
      'src',
      'react',
      'pages',
      EnvVarfile.concat('.tsx'),
    ),
  },
  target: ['web'],

  output: {
    path: join(__dirname, 'dist'),
    filename: 'js/[name].[fullhash].js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 1200,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/,
        terserOptions: {
          ecma: 2015,
        },
      }),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /\/node_modules/,
      }),
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(styl|css)$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
    ],
  },

  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[fullhash].css',
      chunkFilename: 'css/[id].[fullhash].css',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', EnvVarfile.concat('.html')),
      filename: join(__dirname, 'dist', EnvVarfile.concat('.html')),
      chunks: [EnvVarfile],
      scriptLoading: 'defer',
    }),
    new webpack.DllReferencePlugin({
      context: join(__dirname),
      manifest: join(__dirname, 'dist', 'modules-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: resolve(__dirname, './dist/auto/modules.dll.js'),
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        { urlPattern: /^https?.*/, handler: 'StaleWhileRevalidate' },
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: join(__dirname, 'pwa', 'manifest.json'),
          to: join(__dirname, 'dist'),
        },
      ],
    }),
  ],
};
