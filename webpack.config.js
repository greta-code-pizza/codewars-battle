const { resolve } = require('path')

module.exports = {
  entry: resolve('./src/Battle.js'),
  output: {
    path: resolve('./dist'),
    filename: 'bundle.min.js'
  },
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader"
        },
      }
    ]
  }
}