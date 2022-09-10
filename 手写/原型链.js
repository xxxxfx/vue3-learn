// 引用类型的四个规则
/**
 * 1.具有对象属性，可自由扩展
 * 2.具有隐式_proto_属性，属性是一个对象
 * 3.隐式原型_proto_，指向它构造函数的显示原型
 */
const arr = []
console.log(arr._proto_)
// Object.create()继承一个对象，添加的属性是在原型下