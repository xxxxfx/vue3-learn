/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  // 中轴线做法
  if(!s) {
      return ''
  }
  let longeststr = '';
      for(let mid= 0; mid<s.length; mid++) {
        // 奇数
          longeststr 
          = longeststr.length >= palineStr(s,mid, mid).length ? 
          longeststr : palineStr(s,mid,mid)
          // 偶数
          longeststr
          = longeststr.length >= palineStr(s,mid,mid+1).length ? 
          longeststr : palineStr(s,mid,mid+1)    
      }

  return longeststr
};
var palineStr = function(s, left, right) {
  while(left >= 0 && right < s.length) {
    if(s[left]!==s[right]) {
      break
    }
    left--;
    right++;            
  }
  // if(left+1 === right && s.length%2===0) {
  //   return s[left]
  // }
  return s.slice(left+1, right)
}
// console.log('结果1', palineStr('bb'))
console.log('结果', longestPalindrome("ab"))