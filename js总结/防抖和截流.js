// 函数防抖和节流
// 防抖： 触发n秒后才执行回调，如果再次触发，那么重新计时
// 这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    let ctx = this;
    // 正在计时
    if(timer) {
      clearTimeout(timer)
      timer = null
    } else {
      timer = setTimeout(() => {
        fn.call(ctx,)
      }, delay)
    }
  }
}
// 节流 在这个单位时间内，只能有一次触发事件的回调函数执行
function throttle(fn, delay) {
  let lastTime = Date.now()
  return function(...asrs) {
    const ctx = this
    const nowTime = Date.now()
    if(nowTime-lastTime > delay) {
      fn.call(ctx, ...args)
      lastTime = nowTime
    }
  }
}