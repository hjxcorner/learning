/**
 * 创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象(工厂模式创建对象+原型式继承)
 * 
 * 问题：
 *      使用寄生式继承来为对象添加函数，不能做到函数复用，与构造函数创建对象类似
 */

function object(obj) {
    function F() { }
    F.prototype = obj
    return new F()
}

function createAnotrer(obj){

    let o = object(obj)
    o.sayHi = function (){
        console.log("Hi")
    }
    return o
}

let person = {
    name: "黄金鑫",
    friends:["tom","bob"]
}

let obj = createAnotrer(person)
console.log(obj.name)
console.log(obj.friends)
obj.sayHi()