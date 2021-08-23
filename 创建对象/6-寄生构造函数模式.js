/**
 * 前面几种都不适用的情况下，就使用寄生构造函数模式
 * 
 * 与工厂模式的区别：
 *        用new关键字创建对象 
 *        使用的包装函数叫构造函数
 * 
 * 一些适用场景：
 *     创建一个具有额外方法的特殊数组 
 * 
 * 注意：
 *      通过这种模式创建的对象与构造函数或构造函数的原型属性之间没有关系之间没有关系，无法使用instanceof检测对象类型
 *      虽然使用new关键字创建对象，但是构造函数中重写了返回对象，重写的对象不能访问构造函数的作用域，所以用这种模式创建的对象与构造函数没什么关系
 */


 function SpecialArray(){
     let arr = new Array()
     arr.push.apply(arr,arguments)

     arr.toPipedString = function(){
         return this.join("|")
     }

     return arr  // 重写构造函数时的返回值
 }

 let color = new SpecialArray("蓝色","绿色","红色")
 console.log(color.toPipedString())  // 蓝色|绿色|红色
 console.log(color instanceof SpecialArray) // false