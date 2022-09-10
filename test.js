// var lengthOfLongestSubstring = function(str) {
//   if (str.length <= 1) {return str.length}
//     let left = 0
//     let right = 1
//     let max = 0
//     let temp
//     while(right<str.length){
//       temp = str.slice(left, right)
//       console.log('temp：', temp, left, right, temp.indexOf(str.charAt(right)))
//       if (temp.indexOf(str.charAt(right)) > -1) {
//         left++
//         continue
//       } else {
//         right++
//       }
//       if (right - left > max) { max = right - left }
//     }
//     return max
// };
// const len = lengthOfLongestSubstring('bbbbbbb')
// console.log('结果：', len)
str = "嘿, $1问我今天是星期$2么" 
data=['张三','三']
while(str.match(/\$\d/)) {
  const  [item] = str.match(/\$\d/)
  console.log(item)
  const idx = Number(item.slice(1)) - 1
  str = str.replace(item, data[idx] || '')
}
console.log(str)