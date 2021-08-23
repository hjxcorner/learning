---
title: 手写Promise
tags: ["js", "ES6", "Promise"]
categories: ["JavaScript", "ES6", "手写Promise"]
---

## 1-声明Promise并绑定this

**错误示例：**

```js
	/**
 * 注意：
 *      1.excutor中传递的resolve 和 reject 方法中的this指向必须是myPromise实例
 */

class MyPromise{
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor){
        this.status = MyPromise.PENDING
        this.value = null
        excutor(this.resolve,this.reject) // 如果不用bind方法绑定函数中的this指向，那么函数中的this将会很难确定 
    }

    resolve(value){
        this.status = MyPromise.RESOLVE
        this.value = value
        console.log(this.status)
    } 
    reject(reason){
        this.status = MyPromise.REJECT
        this.value = reason
        console.log(this.status)
    }

}

let promise = new MyPromise((resolve,reject)=>{
    // resolve()
    reject() //报错  这时reject中的this指向为window 但全局作用域中没有status 所以用this.status访问不到
})

```

<!--more-->

**正确示例：**

```js
	/**
 * 注意：
 *      1.excutor中传递的resolve 和 reject 方法中的this指向必须是myPromise实例
 */

class MyPromise{
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor){
        this.status = MyPromise.PENDING
        this.value = null
        excutor(this.resolve.bind(this),this.reject.bind(this)) // 如果不用bind方法绑定函数中的this指向，那么函数中的this将会很难确定 
    }

    resolve(value){
        this.status = MyPromise.RESOLVE
        this.value = value
        console.log(this.status)
    } 
    reject(reason){
        this.status = MyPromise.REJECT
        this.value = reason
        console.log(this.status)
    }

}

let promise = new MyPromise((resolve,reject)=>{
    // resolve()
    reject()
})

```

## 2-状态保护

**错误示例：**

```js
/**
 * 注意：
 *      promise的状态改变之后是不能再改变的，但是下面的写法 状态是可以随意改变的
 */

const PENDING = 'pending';
const RESOLVE = 'resolve'
const REJECT = 'reject'

class MyPromise{
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor){
        this.status = MyPromise.PENDING
        this.value = null
        excutor(this.resolve.bind(this),this.reject.bind(this)) // 如果不用bind方法绑定函数中的this指向，那么函数中的this将会很难确定 
    }

    resolve(value){
        this.status = MyPromise.RESOLVE
        this.value = value
        console.log(this.status)
    } 
    reject(reason){
        this.status = MyPromise.REJECT
        this.value = reason
        console.log(this.status)
    }

}

let promise = new MyPromise((resolve,reject)=>{
    resolve()
    reject()
    /*
    	resolve
		reject
    */
})

```

**正确示例：**

只有状态为 pending时才执行resolve/reject中的代码

```js
 class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null
        excutor(this.resolve.bind(this), this.reject.bind(this)) // 如果不用bind方法绑定函数中的this指向，那么函数中的this将会很难确定 
    }

    resolve(value) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.RESOLVE
            this.value = value
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

}

let promise = new MyPromise((resolve, reject) => {
    resolve() // resolve
    reject() //无输出 
})

```

## 3-执行者异步捕获

**错误示例：**

```js
 class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null
        excutor(this.resolve.bind(this), this.reject.bind(this)) // 如果不用bind方法绑定函数中的this指向，那么函数中的this将会很难确定 
    }

    resolve(value) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.RESOLVE
            this.value = value
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

}

let promise = new MyPromise((resolve, reject) => {
    console.log(a) //报错 因为a不存在
    resolve() // resolve
    reject() //无输出 
})

```

**正确示例：**

用try catch将excutor函数包裹 并在出先异常的时候执行reject

```js
class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null
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
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

}

let promise = new MyPromise((resolve, reject) => {
    console.log(a)
    resolve()
    reject()
})

```

## 4-then的基础构建

### 4-1只有成功/失败时才执行成功/失败的回调

```js
class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null
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
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

    then(onFulfilled,onRejected){
        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if(this.status === MyPromise.RESOLVE){
            onFulfilled()
        }
        if(this.status === MyPromise.REJECT){
            onRejected()
        }
    }   
}

let promise = new MyPromise((resolve, reject) => {
    console.log(a)
    resolve()
    reject()
})
```

### 4-2让成功/失败的回调变成可选参数

```js
class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null  //用于保存外部传进来的数据 如 ajax的请求数据 
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
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

    then(onFulfilled,onRejected){

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : ()=>{}
        onRejected = typeof onRejected === 'function' ? onRejected : ()=>{}
        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if(this.status === MyPromise.RESOLVE){
            onFulfilled(this.value)
        }
        if(this.status === MyPromise.REJECT){
            onRejected(this.value)
        }
    }   
}
```

### 4-3then操作中的异常捕获

**没有异常捕获：**

```js
class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null  //用于保存外部传进来的数据 如 ajax的请求数据 
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
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

    then(onFulfilled,onRejected){

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : ()=>{}
        onRejected = typeof onRejected === 'function' ? onRejected : ()=>{}
        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if(this.status === MyPromise.RESOLVE){
            onFulfilled(this.value)
        }
        if(this.status === MyPromise.REJECT){
            onRejected(this.value)
        }
    }   
}

let promise = new MyPromise((resolve, reject) => {
    resolve("hhh")
}).then((res)=>{
    console.log(resss)  //报错
})

```

**有异常捕获：**

```js
class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null  //用于保存外部传进来的数据 如 ajax的请求数据 
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
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }
        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if (this.status === MyPromise.RESOLVE) {
            try {
                onFulfilled(this.value)
            } catch (err) {
                onRejected(err)
            }
        }
        if (this.status === MyPromise.REJECT) {
            try {
                onRejected(this.value)
            } catch (err) {
                onRejected(err)
            }
        }
    }
}


let promise = new MyPromise((resolve, reject) => {
    resolve("hhh")
}).then((res) => {
    console.log(resss)
}, (err) => {
    console.log(err) //打印错误对象
})

```

### 4-4then的异步模拟

用setTimeout 模拟promise then方法的中的异步

```js
class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null  //用于保存外部传进来的数据 如 ajax的请求数据 
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
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }
        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if (this.status === MyPromise.RESOLVE) {
            setTimeout(() => {
                try {
                    onFulfilled(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
        if (this.status === MyPromise.REJECT) {
            setTimeout(() => {
                try {
                    onRejected(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
    }
}

let promise = new MyPromise((resolve, reject) => {
    resolve("hhh")
}).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
console.log("呵呵")

/*
resolve
呵呵
hhh
*/
```

### 4-5pending状态处理以及异常处理

如果把resolve/reject也放在一个setTimeout中，且设置时间为1000ms后执行，如果在这时又执行then方法，会出现then方法中的回调未执行的情况。原因是，then方法先执行，而promise实例的状态还为pending，而只有状态为resolve/reject时才会执行。

**未作处理示例：**

```js
class MyPromise {
    static PENDING = 'pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(excutor) {
        this.status = MyPromise.PENDING
        this.value = null  //用于保存外部传进来的数据 如 ajax的请求数据 
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
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }
        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if (this.status === MyPromise.RESOLVE) {
            setTimeout(() => {
                try {
                    onFulfilled(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
        if (this.status === MyPromise.REJECT) {
            setTimeout(() => {
                try {
                    onRejected(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
    }
}

let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("hhh")
    }, 1000)

}).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
console.log("呵呵")

/*
呵呵
resolve
*/
```

**pending处理之后的示例：**

```js
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
            this.callbacks.forEach(callback => {
                try {
                    callback.onFulfilled(value)
                } catch (err) {
                    callback.onRejected(err)
                }


            })
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            this.callbacks.forEach(callback => {
                try {
                    callback.onRejected(reason)
                } catch (err) {
                    callback.onRejected(err)
                }

            })
            console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }


        // pending状态处理
        if (this.status === MyPromise.PENDING) {
            this.callbacks.push({
                onFulfilled,
                onRejected
            })
        }


        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if (this.status === MyPromise.RESOLVE) {
            setTimeout(() => {
                try {
                    onFulfilled(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
        if (this.status === MyPromise.REJECT) {
            setTimeout(() => {
                try {
                    onRejected(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
    }
}

let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("hhh")
    }, 1000)

}).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
console.log("呵呵")

/*
呵呵
hhh
reject
*/
```

### 4-6pending状态实现异步	

**错误示例：**

```js
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
            this.callbacks.forEach(callback => {
                callback.onFulfilled(value)
            })
            console.log(this.status)
        }

    }
    reject(reason) {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECT
            this.value = reason
            this.callbacks.forEach(callback => {
                callback.onRejected(reason)
            })
            console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }
        // pending状态处理
        if (this.status === MyPromise.PENDING) {
            this.callbacks.push({
                onFulfilled:(value)=>{
                    try{
                        onFulfilled(value)
                    }catch(err){
                        onRejected(err)
                    }
                },
                onRejected:(reason)=>{
                    try{
                        onRejected(reason)
                    }catch(err){
                        onRejected(err)
                    }
                }
            })
        }


        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if (this.status === MyPromise.RESOLVE) {
            setTimeout(() => {
                try {
                    onFulfilled(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
        if (this.status === MyPromise.REJECT) {
            setTimeout(() => {
                try {
                    onRejected(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
    }
}

let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("hhh")
        console.log("干好事")
    }, 1000)

}).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
console.log("呵呵")


/*
呵呵
hhh
resolve
干好事
*/
```

**修改之后的示例：**

用setTimeout包裹callbacks中将要执行的函数

```js
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

            console.log(this.status)
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

            console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }
        // pending状态处理
        if (this.status === MyPromise.PENDING) {
            this.callbacks.push({
                onFulfilled: (value) => {
                    try {
                        onFulfilled(value)
                    } catch (err) {
                        onRejected(err)
                    }
                },
                onRejected: (reason) => {
                    try {
                        onRejected(reason)
                    } catch (err) {
                        onRejected(err)
                    }
                }
            })
        }


        // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
        if (this.status === MyPromise.RESOLVE) {
            setTimeout(() => {
                try {
                    onFulfilled(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
        if (this.status === MyPromise.REJECT) {
            setTimeout(() => {
                try {
                    onRejected(this.value)
                } catch (err) {
                    onRejected(err)
                }
            })
        }
    }
}

let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("hhh")
        console.log("干好事")
    }, 1000)

}).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
console.log("呵呵")
/*
呵呵
resolve
干好事
hhh
*/
```

### 4-7then实现promise链式操作

实现promise对象上链式使用then方法：让每一个then方法都返回一个新的promise对象，将上一次then的成功/失败的返回值传递给新promise对象的resolve方法，将所有状态下出现的异常都传递给新promise对象的reject方法。

```js
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

            // console.log(this.status)
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

            // console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { }

        return new MyPromise((resolve, reject) => {
            //状态处理    
            // pending状态处理
            if (this.status === MyPromise.PENDING) {
                this.callbacks.push({
                    onFulfilled: (value) => {
                        try {
                            let result = onFulfilled(value)
                            resolve(result)
                        } catch (err) {
                            reject(err)
                        }
                    },
                    onRejected: (reason) => {
                        try {
                            let result = onRejected(reason)
                            resolve(result)
                        } catch (err) {
                            reject(err)
                        }
                    }
                })
            }


            // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
            if (this.status === MyPromise.RESOLVE) {
                setTimeout(() => {
                    try {
                        let result = onFulfilled(this.value)
                        resolve(result)
                    } catch (err) {
                        reject(err)
                    }
                })
            }

            if (this.status === MyPromise.REJECT) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value)
                        resolve(result)
                    } catch (err) {
                        reject(err)
                    }
                })
            }
        })
    }
}

let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("hhh")
        console.log("干好事")
    }, 1000)

})
    .then((res) => {
        console.log(ress)
        return "你好哇"
    }, (err) => {
        console.log(err)
    })
    .then((res) => {
        console.log(res)
    }, (err) => {
        console.log("p1.err:" + err)
    })
console.log("呵呵")
```

### 4-8then的穿透传递

then中不做任何处理也能将数据往后传递，具体方法：不做处理即没有给定onFulfilled/onRejected 回调，给这两个回调设置为默认返回上一个promise对象的value

```js
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

            // console.log(this.status)
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

            // console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { return this.value}
        onRejected = typeof onRejected === 'function' ? onRejected : () => { return this.value }

        return new MyPromise((resolve, reject) => {
            //状态处理    
            // pending状态处理
            if (this.status === MyPromise.PENDING) {
                this.callbacks.push({
                    onFulfilled: (value) => {
                        try {
                            let result = onFulfilled(value)
                            resolve(result)
                        } catch (err) {
                            reject(err)
                        }
                    },
                    onRejected: (reason) => {
                        try {
                            let result = onRejected(reason)
                            resolve(result)
                        } catch (err) {
                            reject(err)
                        }
                    }
                })
            }


            // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
            if (this.status === MyPromise.RESOLVE) {
                setTimeout(() => {
                    try {

                        let result = onFulfilled(this.value)
                        resolve(result)
                    } catch (err) {
                        reject(err)
                    }
                })
            }

            if (this.status === MyPromise.REJECT) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value)
                        resolve(result)
                    } catch (err) {
                        reject(err)
                    }
                })
            }
        })
    }
}

let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("hhh")
        console.log("干好事")
    }, 1000)

})
    .then()
    .then((res) => {
        console.log(res)
        return "你好哇"
    }, (err) => {
        console.log(err)
    })
    .then((res) => {
        console.log(res)
    }, (err) => {
        console.log("p1.err:" + err)
    })
console.log("呵呵")


```

### 4-9then中的返回值为promise

如果一个promise对象的then方法中返回的也是一个promise对象，则这个promise  resolve/reject的回调的返回值将会直接传递给后面的promise对象。

```js
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

            // console.log(this.status)
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

            // console.log(this.status)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { return this.value }
        onRejected = typeof onRejected === 'function' ? onRejected : () => { return this.value }

        return new MyPromise((resolve, reject) => {
            //状态处理    
            // pending状态处理
            if (this.status === MyPromise.PENDING) {
                this.callbacks.push({
                    onFulfilled: (value) => {
                        try {
                            let result = onFulfilled(value)
                            if (result instanceof MyPromise) {

                                result.then(resolve, reject)
                            } else {

                                resolve(result)
                            }
                        } catch (err) {
                            reject(err)
                        }
                    },
                    onRejected: (reason) => {
                        try {
                            let result = onRejected(reason)
                            resolve(result)
                        } catch (err) {
                            reject(err)
                        }
                    }
                })
            }


            // 让成功和失败的回调跟状态联系起来 只有成功的时候才执行成功的函数 
            if (this.status === MyPromise.RESOLVE) {
                setTimeout(() => {
                    try {

                        let result = onFulfilled(this.value)

                        if (result instanceof MyPromise) {

                            result.then(resolve, reject)
                        } else {

                            resolve(result)
                        }
                    } catch (err) {
                        reject(err)
                    }
                })
            }

            if (this.status === MyPromise.REJECT) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value)
                        if (result instanceof MyPromise) {

                            result.then(resolve, reject)
                        } else {

                            resolve(result)
                        }
                    } catch (err) {
                        reject(err)
                    }
                })
            }
        })
    }
}

let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1的resolve")
    }, 1000)

})
    .then((res) => {
        console.log(res)
        return new MyPromise((resolve, reject) => {
            resolve("p1的then的返回值")
        })
    })
    .then((res) => {
        console.log(res)
    })


```

## 5 代码优化

```js
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

        return new MyPromise((resolve, reject) => {
            //状态处理    
            // pending状态处理
            if (this.status === MyPromise.PENDING) {
                this.callbacks.push({
                    onFulfilled: (value) => {
                        let result = onFulfilled(value)
                        this.foo(result, resolve, reject)
                    },
                    onRejected: (reason) => {
                        try {
                            let result = onRejected(reason)
                            this.foo(result, resolve, reject)
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
                    this.foo(result, resolve, reject)
                })
            }

            if (this.status === MyPromise.REJECT) {
                setTimeout(() => {
                    let result = onRejected(this.value)
                    this.foo(result, resolve, reject)
                })
            }
        })
    }

    foo(result, resolve, reject) {
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
}
```

## 6 promise返回类型约束

不能在promise的then当中返回它本身

```js
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

        if(result === promise){ //如果then中的返回值是它本身则抛出错误
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
}

let promise = new MyPromise((resolve, reject) => {
    resolve("p1的resolve")

})
let p = promise.then((value)=>{
    return p
})

```

## 7 Promise静态方法重写

```js
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
                    if(values.length == promises.length){
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
```

## 完整代码

```js
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
                    if(values.length == promises.length){
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

```

