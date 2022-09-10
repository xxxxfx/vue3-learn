// var fib = function(n) {
//   // 递归时间超过限制
//   // if( n===0 ) {
//   //     return 0
//   // }
//   // if(n === 1) {
//   //     return 1
//   // }
//   // return fib(n-2) + fib(n-1)
//   const MOD = 1000000007;
//   if(n < 2) {
//       return n
//   }
//   let pre = 1, ppre = 0, sum
//   for(let i = 2; i <= n; i++) {
//       sum = (pre + ppre) % MOD
//       ppre = pre
//       pre = sum
//       console.log('222', sum, ppre, pre)
//   }
//   return sum
// };
// console.log(fib(3))
console.log(1)
let promise = new Promise((resolve, reject) => {
  console.log(2)
  resolve('hello')
})
promise.then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
console.log(3)