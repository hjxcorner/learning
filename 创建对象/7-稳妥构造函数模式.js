/**
 * 特点：
 *      1.没有公共属性
 *      2.不引用this对象，
 *      3.不使用new创建对象
 *      （有些环境中会禁止使用this和new）
 * 
 * 注意：
 *      稳妥对象与构造函数之间没有关系，无法使用instanceof检测对象类型
 *      虽然使用new关键字创建对象，但是构造函数中重写了返回对象，重写的对象不能访问构造函数的作用域，所以用这种模式创建的对象与构造函数没什么关系
 * 
 */


 function Person(name,age,job){
    let o = new Object()

    o.sayName = function (){
        console.log(name)
    }

    return o
 }

 let friend = Person("hjx",21,"Engineer")
 friend.sayName() // hjx

 console.log(friend instanceof Person) // false
 /**
  * 这里的friend中保存的是一个稳妥对象，除了调用sayName方法之外，没有别的方法可以访问其他数据成员
  */