const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  constants: {
    API_URL : JSON.stringify('http://localhost:3000/api'),
    HTML_MODE: JSON.stringify(false)
  },
  plugins: [
    new UglifyJsPlugin(),
    new OptimizeCssAssetsPlugin(),
  ]
}
