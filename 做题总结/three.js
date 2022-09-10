var threeSum = function(nums) {
  // [-4,-1,-1, 0,1,2]
  const length = nums.length;
  // 双指针解法
 let result = []
 nums = nums.sort((a, b) => {
   return a-b
 })
 console.log('数组', nums)
 for(let first=0;first < length; first++) {
      let target = -nums[first];
      let third = length-1; // 最右端
     if(first===0 || nums[first]!==nums[first-1]) {
         for(second = first+1;second <length; second++) {   
             if(second===first+1 || nums[second-1]!==nums[second]) {
                 while(second < third && nums[second]+ nums[third] > target) {
                     --third;
                 }
                 console.log('搜索', nums[second], nums[third])
                 if(second === third) {
                  break;
                }
                if(nums[second]+ nums[third] === target) {
                    result.push([nums[first], nums[second], nums[third]])
                }
               
             }   
         }
     }
 }
 return result;
};
// [-2,-1-,3]
console.log('结果:', threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
// [-4,-3,-2,-1,-1,0,0,1,2,3,4]