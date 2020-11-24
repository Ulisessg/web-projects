const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    //Index
    about: join(__dirname, 'src', 'react', 'pages', 'about.js'),
    design: join(__dirname, 'src', 'react', 'pages', 'design.js'),
    blog: join(__dirname, 'src', 'react', 'pages', 'blog.js'),
    error: join(__dirname, 'src', 'react', 'pages', '404.js'),
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: 'js/[name].[fullhash].js',
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
      new OptimizeCSSAssetsPlugin(),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /\/node_modules/,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(styl|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|gif|jpg|svg|eot|ttf|woff|woff2|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[fullhash].[ext]',
            limit: 9000,
          },
        },
      },
    ],
  },

  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[fullhash].css',
      chunkFilename: 'css/[id].[fullhash].css',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'blog.html'),
      filename: join(__dirname, 'dist', 'blog.html'),
      chunks: ['blog'],
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'design.html'),
      filename: join(__dirname, 'dist', 'design.html'),
      chunks: ['design'],
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'about.html'),
      filename: join(__dirname, 'dist', 'about.html'),
      chunks: ['about'],
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', '404.html'),
      filename: join(__dirname, 'dist', '404.html'),
      chunks: ['error'],
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
      scriptLoading: 'defer',
    }),
    new webpack.DllReferencePlugin({
      context: join(__dirname),
      manifest: join(__dirname, 'dist', 'modules-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: resolve(__dirname, './dist/auto/modules.dll.js'),
    }),
  ],
};
