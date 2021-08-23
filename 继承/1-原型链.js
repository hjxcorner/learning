/**
 * 将子类构造函数的原型对象替换为父类的实例对象
 * 
 * 注意：
 *      在给子类添加方法时，代码一定要写在替换原型的代码之后
 */


// function SuperType() { //超类
//     this.type = "SuperType"
// }

// SuperType.prototype.saySuperType = function () {
//     console.log(this.type)
// }


// function SubType() { //子类
//     this.type = "SubType"
// }

// SubType.prototype = new SuperType()

// SubType.prototype.saySubType = function () {
//     console.log(this.type)
// }

// let obj = new SubType()
// console.log(obj.__proto__.__proto__.constructor)
// obj.saySuperType()



//  function SuperType(){ //超类
//     this.type = "SuperType"
//     if(typeof this.saySuperType != "function"){
//         console.log("SuperType")
//         SuperType.prototype.saySuperType = function (){
//             console.log(this.type)
//         }
//     }
//  }

//  function SubType(){ //子类
//     this.type = "SubType"
//     if(typeof this.saySubType != "function"){
//         console.log("SubType")

//         SubType.prototype = new SuperType()

//         SubType.prototype.saySubType = function (){
//             console.log(this.type)
//         }
//     }
//  }

//  let obj = new SubType()
//  console.log(obj.type)
//  obj.saySubType()


/**
 * 原型链的问题
 */

// 问题一：包含引用类型值的原型属性会被所有实例共享

function SuperType() { //超类
    this.type = "hehe"
    this.colors = ["红", "黄", "蓝"]
}
function SubType() { //子类
}

SubType.prototype = new SuperType()

let object1 = new SubType()
object1.colors.push("绿")
object1.type = "hhh"
console.log(object1.colors) // [ '红', '黄', '蓝', '绿' ]
console.log(object1.type) // hhh

let object2 = new SubType()
console.log(object2.colors) // [ '红', '黄', '蓝', '绿' ] //colors为共享属性
console.log(object2.type) // hehe


// 问题二：在创建子类型实例时，不能向超类型的构造函数中传递参数

// function SuperType(type) { //超类
//     this.type = type
// }
// function SubType() { //子类
// }

// SubType.prototype = new SuperType()

// let instancel = new SubType("hehe")
// console.log(instancel.type) // undefined