const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src', 'js', 'scripts.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'ui'),
    publicPath: '/ui/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  module: {
    rules: [

      // Bundle resource files
      { test: /(\.png|\.gif|\.ttf|\.eot|\.woff|\.svg)/, use: ["file-loader"] },

      // Bundle stylesheets
      { test: /\.css$/, use: ["style-loader","css-loader"] },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, use: ["source-map-loader"] },

      // Compiles Less to CSS
      { test: /\.less$/, use: ['less-loader'] },
      
    ]
  }
};