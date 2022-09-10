const path = require('path');

module.exports = {
  entry: './src/indexTest.js',
  output: {
    publicPath: 'xuni',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
       use: [
        {
         loader: 'replace-loader',
         options: {
          name: '小桐絮'
         }
        }
       ]
      }
    ]
  },
  resolveLoader: {
    modules: ["node_modules","./module-loader"]
  },
  devServer: {
    hot: true,
    port: 8080,
    contentBase: 'www'
  }
};