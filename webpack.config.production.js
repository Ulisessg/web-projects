const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      new OptimizeCSSAssetsPlugin(),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /\/node_modules/,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        // eslint-disable-next-line global-require
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true,
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
  ],
};
