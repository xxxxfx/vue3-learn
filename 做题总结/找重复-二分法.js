// var findRepeatNumber = function(nums) {
//   const temp = new Set()
//   let res = new Set()
//   for(let i = 0; i< nums.length; i++) {
//       if(!temp.has(nums[i])) {
//           temp.add(nums[i])
//       } else {
//           res.add(nums[i])
//       }
//   }
//   return Array.from(res)
// };
var searchIndex = function(nums, target, leftTag) {
  let left = 0, right = nums.length-1, ans = nums.length
   // 左边界 找到等于的值
  // while(left <= right) {
  //     const mid = Math.floor((left+right)/2)
  //     if(nums[mid] < target) {
  //         left = mid + 1
  //     }
  //     if(nums[mid] > target) {
  //         right = mid - 1
  //     }
  //     if(nums[mid] === target) {
  //         right = mid - 1
  //         ans = mid
  //     }
  // }
  // return ans
  // 右边界 找到大于等于的值-1
  // while(left <= right) {
  //   const mid = Math.floor((left+right)/2)
  //   if(nums[mid] < target) {
  //       left = mid + 1
  //   }
  //   if(nums[mid] > target) {
  //       right = mid - 1
  //       ans = mid
  //   }
  //   if(nums[mid]=== target) {
  //       left = mid + 1
  //   }
  // }
  // return ans
  // 优化结果
  while(left <= right) {
    const mid = Math.floor((left+right)/2)
    console.log(2222, left, right, mid)
    if(nums[mid] > target || (nums[mid] >= target && leftTag)) {
        right = mid - 1
        ans = mid // 左边界记录等于target时候的mid，右边界记录大于等于target时候的mid
        console.log(3333, mid)
    } else {
      console.log(44444, mid)
      left = mid + 1
    }
}
return ans
}
var search = function(nums, target) {
  let ans = 0
  const leftIdx = searchIndex(nums, target, true)
  // const rightIdx = searchIndex(nums, target) - 1
  // ans = rightIdx - leftIdx + 1
  return ans
}
console.log('结果：', search([5,7,7,7,8,10], 8))