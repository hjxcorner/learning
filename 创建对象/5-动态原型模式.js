/**
 * 产生这种方法的原因：有其他oo语言经验的程序员看到独立的构造函数和原型时，很可能会感到困惑。
 * 
 * 优点：相对于原型构造函数组合模式，把初始化构造函数原型的操作写在了构造函数内部，有更好的封装性
 * 
 * 原理：在初始化原型之前先检测原型上某个属性是否存在，如果不存在再执行初始化操作，这样初始化操作只会在第一次调用构造函数时执行。
 */

function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    if (typeof this.sayName != "function") { //只会在初次调用构造函数时才会执行，如果有多个这样的方法，不用写一大堆if判断，检测其中一个就行
        Person.prototype.sayName = function () {
            console.log(this.name)
        }

        Person.prototype.sayAge = function (){
            console.log(this.age)
        }
    }
}

let person1 = new Person('hjx',21,'男')
person1.sayName()