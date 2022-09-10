const webpack = require('webpack')

module.exports = function(source) {
  // source是compiler传递给loader的一个文件源内容
  const options = this.query.name
  const content = source.replace('hello', '哈哈'+ options)
  // webpack为loader提供的api
  
  this.callback(null, content)
  return
}