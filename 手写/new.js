function Person(name) {
  this.name = name;
  return name;
}
// const p1 = new Person('xiao')
// console.log(p1)
// new的作用
/**
 * 1/创建一空个对象，
 * 2.并将对象的原型指向构造函数的protoType原型
 * 3.把构造函数的this指向对象，并执行代码
 * 4.判断构造函数的返回类型，如果是引用类型返回该引用，值类型返回改构造函数创建的对象
 */
// function myNew(func) {
//   let newObj = {}
//   newObj.__proto__ = func.prototype
//   return func.bind(newObj)
// }
// function test (name, sex) {
//  console.log('参数', Array.from(arguments))
// }
// test('hello', '女')
function myNew(constructor) {
  if(typeof constructor!=='function') {
    throw '第一个参数不是一个函数'
  }
  let newObj = {};
  newObj = Object.create(constructor.prototype)
  const args = Array.from(arguments).slice(1)
  const result = constructor.apply(newObj, args)
  const isFun = typeof result==='function'
  const isObj = typeof result === 'object'
  if(isFun || isObj) {
    return result
  }
  return newObj
}
// 三个数之和
//[1,2,3,4,-1,0]
// return [[1,0,-1]]
// 内部是一个set
// 输入：nums = [-2,-1,-1, 0,1,2]
// 输出：[[-1,-1,2],[-1,0,1]]
// 思路： 确认两个元素-》另外一个元素确认
// function addThree(nums) {
//  let result = []
//  nums = nums.abort()
 
// }
const person = myNew(Person, 'xiaozhan')
console.log('myNew', person)