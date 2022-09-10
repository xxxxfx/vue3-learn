// 原型链
function myInstanceOf (left, right) {
  let proto = left.__proto__
  while(proto) {
    if(proto === right.prototype) {
      return true
    }
    proto = proto.__proto__
  }
  return false;
}
// const a = {}
// console.log(myInstanceOf(a, Object), a._proto_ === Object.prototype)
function Person(name) {
  this.name = name
  return name
}
const p1 = new Person('xiao')
console.log(p1)
// new 