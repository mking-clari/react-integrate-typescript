const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/packages/app/entrypoint'),
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
          'source-map-loader',
          'babel-loader',
          'awesome-typescript-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'babel-loader',
          'eslint-loader',
        ],
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
    modules: ['packages', 'node_modules'],
  },
  devtool: 'cheap-module-eval-source-map',
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