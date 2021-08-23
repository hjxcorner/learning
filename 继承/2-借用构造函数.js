/**
 * 
 * 问题：方法都在构造函数中定义，方法复用无从谈起。在超类的原型中定义的方法，对于子类型而言是不可见的。
 */

 function SuperType(name){
     this.color = ["红", "黄", "蓝"]
     this.name = name
 }

 SuperType.prototype.fn = function (params) {
     console.log(params)
 }

 function SubType(){
     SuperType.call(this,"corner")  // 将SuperType中的this改为SubType的this再执行函数中的代码，间接实现了继承
 }

 let o = new SubType()
 o.color.push("绿") 
 console.log(o.color)  // [ '红', '黄', '蓝', '绿' ]
 console.log(o.name)  // corner

 let o2 = new SubType()
 console.log(o2.color) // [ '红', '黄', '蓝' ]
 console.log(o.name) // corner


// o2.fn("hh") // 报错 构造函数原型上的方法并没有继承