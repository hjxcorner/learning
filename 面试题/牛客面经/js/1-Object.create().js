/**
 * Object.create()内部实现原理
 */

Object.myCreate = function (proto, propertyObject = undefined) {
  if (propertyObject === null) {
    // 这里没有判断propertyObject是否是原始包装对象
    throw 'TypeError'
  } else {
    function Fn() { }
    Fn.prototype = proto
    const obj = new Fn()
    if (propertyObject !== undefined) {
      Object.defineProperties(obj, propertyObject)   // 通过Object.defineProperties为创建的对象设置key、value
    }
    if (proto === null) {
      // 创建一个没有原型对象的对象，Object.create(null)
      obj.__proto__ = null
    }
    return obj
  }
}


/**
 * Object.create(null)和{}的区别
 */

let obj1 = {
  name: "hjx",
  age: 21
}

let obj2 = Object.myCreate(obj1, {
  sex: {
    writable: true,
    configurable: true,
    value: "男"
  }
})

console.log(obj2)

let obj3 = Object.create(obj1, {
  sex: {
    writable: true,
    configurable: true,
    enumerable:true,
    value: "男"
  }
})
console.log(obj3)