// 思路整理：
// 状态 pending rejected fulfilled
// 状态只有在pending的时候能够改变，改变之后不会再变
// resolve 和reject
// 链式调用 return的值是一个promise
// new promise((resolve, reject) => {}).then(() => {}, () => {})
// const a = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(1)
// }).tnen((res) => {
//   console.log(res)
// })
class MyPromise {
  static PENGDING = 'pending'; static FUFILLED = 'fullfied'; static REHECTED = 'rejected';
  constructor(func) {
    this.status = MyPromise.PENGDING;
    this.result = null;
    this.resolveBacks = [];
    this.rejectBacks = [];
    func(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(val) {
    setTimeout(() => {
      if(this.status === MyPromise.PENGDING) {
        this.status = MyPromise.FUFILLED
        this.result = val
      }
      if(this.resolveBacks.length) {   
        for(let i in this.resolveBacks) {
          this.resolveBacks[i](this.result)
        }
      }
    })
      
  }
  reject(err) {
    setTimeout(() => {
      if(this.status === MyPromise.PENGDING) {
        this.status = MyPromise.REHECTED
        this.result = err
      }
    })
  }
  then(onFullfild, onRejected) {
    onFullfild = typeof onFullfild === 'function' ? onFullfild : () => {};
    onRejected = typeof onRejected === 'function' ? onRejected : () => {};
    if(this.status === MyPromise.PENGDING) {
      this.resolveBacks.push(onFullfild)
      this.rejectBacks.push(onRejected)
    }

    if(this.status === MyPromise.FUFILLED) {
      setTimeout(() => {
        onFullfild(this.result)
      })
      
    }
    if(this.status === MyPromise.REHECTED) {
      setTimeout(() => {
        onRejected(this.result)
      }) 
    }
  }
}
console.log('第一')
let promise = new MyPromise((resolve, reject) => {
  console.log('第二')
  setTimeout(() => {
    console.log('第四')
    resolve('这次一定')
   
  })
  
})
promise.then((res) => {
  console.log(res)
})
console.log('第三步')