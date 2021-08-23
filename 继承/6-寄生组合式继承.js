/**
 *  通过借用构造函数实现对实例属性的继承
 *  通过 原型链的混成形式 继承方法
 * 
 *  本质上就是使用寄生式继承来继承超类型的原型，使得子类型内部不需要调用超类型的构造函数
 */


function object(o) {
  function F(){}
  F.prototype = o
  return new F()  
} 

function inheritPrototype(SubType, SuperType){
    let prototype = object(SuperType.prototype)
    prototype.constructor = SubType
    SubType.prototype = prototype
}



 function SuperType(name) {
     this.name = name
     this.colors = ["红","绿","蓝"]
     console.log("调用了SuperType")
 }

 SuperType.prototype.sayName = function () {
    console.log(this.name)
 }

 function SubType(name, age) {
     
    SuperType.call(this,name)
    this.age = age
 }


inheritPrototype(SubType, SuperType)

 SubType.prototype.sayAge = function () {
     console.log(this.age)
 }



let obj1 = new SubType("黄金鑫",21)
obj1.colors.push("黑")
obj1.sayName() // 黄金鑫
obj1.sayAge() // 21
console.log(obj1)  // SubType { name: '黄金鑫', colors: [ '红', '绿', '蓝', '黑' ], age: 21 }


let obj2 = new SubType("杨滢",20)
obj2.sayName() // 杨滢
obj2.sayAge() // 20
console.log(obj2)  // SubType { name: '杨滢', colors: [ '红', '绿', '蓝' ], age: 20 }