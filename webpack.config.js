const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const environmentConfiguration = require('./config/development.js')

var webpackConfig = {
  entry: ['./src/app.module.js', './src/core/assets/css/sass/materialism.scss', './src/core/assets/css/vendor.scss'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash:8].[ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.html$/,
        use: ['ngtemplate-loader', 'html-loader'],
        exclude: [path.resolve(__dirname, 'public', 'index.html')]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'resolve-url-loader'])
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'resolve-url-loader', 'sass-loader?sourceMap'])
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env' : environmentConfiguration.constants
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      favicon: './src/core/assets/img/favicon.png'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash:8].css',
      allChunks: true
    }),
    ...environmentConfiguration.plugins
  ]
};

module.exports = webpackConfig;
