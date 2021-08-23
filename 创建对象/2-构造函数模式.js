/**
 * 原理：
 *  1.创建一个新对象
 *  2.将对象中的__proto__指向构造函数的prototype对象
 *  3.将构造函数中的this指向这个对象（或者将构造函数中的this临时替换为这个对象）
 *  4.执行构造函数中的代码
 *  5.返回新对象
 * 相对于工厂模式：
 *  1.不用显式地创建对象
 *  2.直接将属性和方法赋值给this对象
 *  3.没有return语句
 *  4.必须通过new关键字创建对象
 *  5.通过构造函数创建的对象可通过 instanceof 判断该对象类型（是否为某一构造函数创建的）
 * 注意：
 *  1.必须使用new关键字创建
 *  2.构造函数通常以大写字母开头以便与一般函数做区别
 *  3.存在不同实例对象共享的属性时，只能把共享属性写在构造函数外部。如果有很多个共享属性，就需要在函数外部写很多个共享属性，
 *    这样就没有封装性可言。
 */

function Person(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
    this.sayName = function (){
        console.log(this.name)
    }
    this.sayName2 = sayName2
 }

let person1 = new Person('hjx',21,'男')
let person2 = new Person('yy',20,'女')
console.log(person1) // Person { name: 'hjx', age: 21, sex: '男', sayName: [Function] ,sayName2: [Function: sayName2]}
console.log(person1.constructor) // [Function: Person]
console.log(person1.constructor == Person) // true
console.log(person1 instanceof Person) // true

/**
 * 构造函数创建对象的问题: person1 和 person2 上都有一个sayName方法，它们实现的功能是一样的，但却创建了两遍（函数也是对象）
 *   
 * 解决：把函数的定义移到构造函数的外面，这样对象实例就共享了这个方法
 * 
 * 
 */

console.log(person1.sayName == person2.sayName) // false

function sayName2(){
    console.log(this.name)
}

console.log(person1.sayName2 == person2.sayName2) // true