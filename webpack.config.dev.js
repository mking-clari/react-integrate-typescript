const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/entrypoint'),
  ],
  output: {
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader',
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'source-map-loader',
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'tslint-loader',
      },
      {
        test: /\.(css|scss)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 8081,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};