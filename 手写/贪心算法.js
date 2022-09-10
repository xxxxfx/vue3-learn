/**
 * 通过局部最优找到全局最优
 */
// 1.分配问题
function findContentChildern(children, cookies) {
  children.sort((a, b) => a - b)
  cookies.sort((a, b) => a - b)
  let child = 0, cook = 0, count = 0
  while(child < children.length && cook < cookies.length) {
    if(children[child] < cookies[cook++]) {
      child++;
      count++;
    }
  }
  return count
}

// 2.区间问题