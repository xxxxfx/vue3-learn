const a = [1,2,[3,4], [1,2, [3,4]]]
const b  = a.flat(2)
// console.log(b) reduce + concat
// function myFlat(arr) {
//   return arr.reduce((pre, cur) => {
//    return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur)

//   }, [])
// }
// console.log(myFlat(a))
// 使用递归的方法
function myFlatten(arr) {
  const res = []
  const flatten = function(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        flatten(arr[i])
      } else {
        res.push(arr[i])
      }
    }
  }
  flatten(arr)
  return res
}
console.log(myFlatten(a))