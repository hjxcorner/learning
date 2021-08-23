/**
 * 通过借用构造函数实现对实例属性的继承
 * 通过 原型链 实现对原型属性和方法的继承
 * 
 * 问题：
 *      无论什么情况下，都会调用两次超类型构造函数 （可用寄生组合式解决）
 * 
 * 
 */

function SuperType(name){
    this.color = ["红", "黄", "蓝"]
    this.name = name
    console.log("组合式继承")
}

SuperType.prototype.sayName = function (){
    console.log(this.name)
}

function SubType(name,age){
    this.age = age

    //继承属性
    SuperType.call(this,name)  // 将SuperType中的this改为SubType的this再执行函数中的代码，间接实现了继承
}

//继承方法
SubType.prototype = new SuperType()  
SubType.prototype.constructor = SubType

SubType.prototype.sayAge = function (){
    console.log(this.age)
}

let obj1 = new SubType("黄金鑫", 21)
obj1.color.push("绿")
console.log(obj1.color) // [ '红', '黄', '蓝', '绿' ]
obj1.sayName() // 黄金鑫
obj1.sayAge() // 21


let obj2 = new SubType("杨滢", 20)
console.log(obj2.color) // [ '红', '黄', '蓝' ]
obj2.sayName() // 杨滢
obj2.sayAge() // 20


console.log(obj1 instanceof SubType) // true
console.log(obj1 instanceof SuperType) // true
console.log(obj1 instanceof Object) // true