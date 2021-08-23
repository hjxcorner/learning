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

let obj1 = Object.myCreate(null)
let obj2 = {}

console.log(obj1.__proto__) // undefined
console.log(obj2.__proto__) // {}