const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    //Index
    index: join(__dirname, 'src', 'react', 'pages', 'main-index.js'),
    design: join(__dirname, 'src', 'react', 'pages', 'design-index.js'),
    blog: join(__dirname, 'src', 'react', 'pages', 'blog-index.js'),
    error: join(__dirname, 'src', 'react', 'pages', '404.js'),
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 1200,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({ test: /\.js(\?.*)?$/i, exclude: /\/node_modules/ }),
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
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|gif|jpg|svg|eot|ttf|woff|woff2|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[hash].[ext]',
            limit: 9000,
          },
        },
      },
    ],
  },

  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'blog.html'),
      filename: join(__dirname, 'dist', 'blog.html'),
      chunks: ['blog'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'design-system.html'),
      filename: join(__dirname, 'dist', 'design-system.html'),
      chunks: ['design'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
      filename: join(__dirname, 'dist', 'index.html'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', '404.html'),
      filename: join(__dirname, 'dist', '404.html'),
      chunks: ['error'],
    }),
  ],
};
