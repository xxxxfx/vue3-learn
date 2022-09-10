class MyPrimise {
  static all(promiseArr) {
    let result = [] // 存放结果
    let count = 0 // 计数已经返回结果的promise
    return new Promise((resolve, reject) => {
      for(let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(
          (res) => {
          count++
          result[i] = res // 不能使用push因为要对应结果
          if(count === promiseArr.length) {
            resolve(result)
          }

        }),
        (err) => {
          reject(err)
        }
      }
    })
  }
  static race(promiseArr) {
    return new Promise((resolve, reject) => {
      for(let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i].then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          }
        ))
      }
    })
  }
}
