path = require('path');

module.exports = {
  entry: './jtrope/www/static/www/js/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'jtrope/www/static/www/src'),
    filename: 'js/bundle.min.js'
  },
};
