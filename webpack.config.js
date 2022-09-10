const path = require('path')
module.exports= {
  mode: 'development',
  entry: "./index.js",
  output: {
    filename: 'build.js', // 文件名
   publicPath: '/dist/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
}