/**
 * 注意：
 *      1.promise的状态改变之后是不能再改变的
 *      2.excutor中传递的resolve 和 reject 方法中的this指向必须是myPromise实例
 *      3.
 */


 class MyPromise {
  static PENDING = 'pending'
  static RESOLVE = 'resolve'
  static REJECT = 'reject'
  constructor(excutor) {
      this.status = MyPromise.PENDING
      this.value = null  //用于保存外部传进来的数据 如 ajax的请求数据 
      this.callbacks = [] //用于保存将来要执行的函数 pending状态处理
      try {
          excutor(this.resolve.bind(this), this.reject.bind(this)) // 如果不用bind方法绑定函数中的this指向，那么函数中的this将会很难确定 
      } catch (err) {
          this.reject(err)
      }
  }

  resolve(value) {
      if (this.status === MyPromise.PENDING) {
          this.status = MyPromise.RESOLVE
          this.value = value
          setTimeout(() => {
              this.callbacks.forEach(callback => {
                  callback.onFulfilled(value)
              })
          })
      }

  }
  reject(reason) {
      if (this.status === MyPromise.PENDING) {
          this.status = MyPromise.REJECT
          this.value = reason
          setTimeout(() => {
              this.callbacks.forEach(callback => {
                  callback.onRejected(reason)
              })
          })
      }
  }

  then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { return this.value }
      onRejected = typeof onRejected === 'function' ? onRejected : () => { return this.value }
      let promise = new MyPromise((resolve, reject) => {
          //状态处理    
          // pending状态处理
          if (this.status === MyPromise.PENDING) {
              this.callbacks.push({
                  onFulfilled: (value) => {
                      let result = onFulfilled(value)
                      
                      this.foo(result, promise, resolve, reject)
                  },
                  onRejected: (reason) => {
                      try {
                          let result = onRejected(reason)
                          this.foo(result, promise, resolve, reject)
                      } catch (err) {
                          reject(err)
                      }
                  }
              })
          }


          // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
          if (this.status === MyPromise.RESOLVE) {
              setTimeout(() => {
                  let result = onFulfilled(this.value)
                  this.foo(result, promise, resolve, reject)
              })
          }

          if (this.status === MyPromise.REJECT) {
              setTimeout(() => {
                  let result = onRejected(this.value)
                  this.foo(result, promise, resolve, reject)
              })
          }
      })
      return promise
  }

  foo(result, promise, resolve, reject) {

      if (result === promise) {
          throw new TypeError("Chaining cycle detected for promise")
      }
      try {
          if (result instanceof MyPromise) {

              result.then(resolve, reject)
          } else {

              resolve(result)
          }
      } catch (err) {
          reject(err)
      }
  }

  static resolve(value) {
      return new MyPromise((resolve, reject) => {
          if (value instanceof MyPromise) {
              value.then(resolve, reject)
          } else {
              resolve(value)
          }
      })
  }

  static reject(reason) {
      return new MyPromise((resolve, reject) => {
          reject(reason)
      })
  }

  static all(promises) {
      let values = []
      return new MyPromise((resolve, reject) => {
          promises.forEach((promise) => {
              promise.then((value) => {
                  values.push(value)
                  if (values.length == promises.length) {
                      resolve(values)
                  }
              }, (reason) => {
                  reject(reason)
              })
          })
      })
  }

  static race(promises) {
      return new MyPromise((resolve, reject) => {
          promises.forEach(promise => {
              promise.then(value => {
                  resolve(value)
              }, reason => {
                  reject(reason)
              })
          })
      })
  }
}

// let promise = new MyPromise((resolve, reject) => {
//     resolve("p1的resolve")
// })
// let p = promise.then((value)=>{
//     return p
// })


// console.log(promise)

// let p1 = new MyPromise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("1111")
//     },2000)

// })

// let p2 = new MyPromise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("2222")
//     },1000)
// })

// MyPromise.race([p1, p2]).then(
//     (values) => { console.log(values) },
//     (reason) => { console.log(reason) }
// )

let p1 = new MyPromise((resolve, reject) => {
  resolve("hh")
})
  .then((value) => {
      setTimeout(() => { console.log("1") }, 5000)
  })
  .then((value) => { setTimeout(()=>{console.log("2")},1000) })

