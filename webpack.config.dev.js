const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    //Index
    index: join(__dirname, 'src', 'react', 'pages', 'main-index.js'),
    design: join(__dirname, 'src', 'react', 'pages', 'design-index.js'),
    blog: join(__dirname, 'src', 'react', 'pages', 'blog-index.js'),
    error: join(__dirname, 'src', 'react', 'pages', '404.js'),
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: 'js/[name].js',
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
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/[hash].[ext]',
              limit: 9000,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'blog.html'),
      filename: join(__dirname, 'dist', 'blog.html'),
      chunks: ['blog'],
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'design-system.html'),
      filename: join(__dirname, 'dist', 'design-system.html'),
      chunks: ['design'],
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
      filename: join(__dirname, 'dist', 'index.html'),
      chunks: ['index'],
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', '404.html'),
      filename: join(__dirname, 'dist', '404.html'),
      chunks: ['error'],
      favicon: join(__dirname, 'assets', 'icons', 'Logo.png'),
    }),
  ],
  devServer: {
    index: 'index.html',
    contentBase: join(__dirname, 'src', 'react', 'pages'),
    hot: true,
    open: true,
    port: 2001,
    watchContentBase: true,
    watchOptions: {
      poll: 666,
    },
  },
};
