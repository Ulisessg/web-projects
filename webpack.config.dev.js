const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    //Index
    main: join(__dirname, 'src', 'pages', 'main', 'index.js'),
    design: join(__dirname, 'src', 'pages', 'design-system', 'index.js'),
    blog: join(__dirname, 'src', 'pages', 'blog', 'index.js'),
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg|svg|eot|ttf|woff|woff2)$/,
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
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'design-system.html'),
      filename: join(__dirname, 'dist', 'design-system.html'),
      chunks: ['design'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'main.html'),
      filename: join(__dirname, 'dist', 'index.html'),
      chunks: ['main'],
    }),
  ],
  devServer: {
    index: 'index.html',
    contentBase: join(__dirname, 'src'),
    hot: true,
    open: true,
    port: 2001,
    watchContentBase: true,
    watchOptions: {
      poll: 666,
    },
  },
};
