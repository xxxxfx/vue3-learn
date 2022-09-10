function foo() {
  console.log(this)
}
// call和apply指向一个值类型会将this指向他们的构造实例
// foo.call(11)
// call和apply的不同 


// Object()方法
// 值类型返回的是对应类型的构造函数创建的实例
// 对象返回的是对象本身
// undefined或者null返回的是空对象
/**
 * 
 * @param {*} ctx 
 * @param  {...any} args 
 */
Function.prototype._myCall = function(ctx, ...args) {
  const o = ctx == undefined ? window : Object(ctx)
  const key = Symbol()
  // 函数赋值给对象o的某一个属性
  o[key] = this
  // 如何把函数foo的this 指向 ctx这个上下文呢
  // 把函数foo赋值给对象o的一个属性  用这个对象o去调用foo  this就指向了这个对象o
  // 下面的this就是调用_call的函数foo  我们把this给对象o的属性fn 就是把函数foo赋值给了o.fn
  //给context新增一个独一无二的属性以免覆盖原有属性
  const result = o[key](...args)
  delete o[key]
  return result

}
Function.prototype._myApply = function(ctx, arr= []) {
  const o = ctx == undefined ? window : Object(ctx)
  let key = Symbol
  o[key] = this
  const result = o[key](...arr)
  delete o[key]
  return result
}
const obj = {name: 'zhan'}

Function.prototype._myBind = function(ctx, ...args) {
  const o = ctx == undefined ? window : Object(ctx)
  const _self = this
  const newFunc = function(...reset) {
    self.call(ctx, ...args, ...reset)
  }
  if(_self.prototype) {
    newFunc.prototype = Object.create(_self.prototype)
  }
  return newFunc
}