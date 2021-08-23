/**
 * 借助原型，基于已有对象创建新对象，同时还不必因此创建自定义类型
 * 
 * 步骤：
 *      创建一个构造函数，
 *      将构造函数的原型指向现有对象。
 *      将该过程进行函数封装，并返回构造函数的对象实例。所返回的对象即继承了现有对象的属性
 * 
 * 注意：
 *      包含引用类型值的属性始终都会共享相应值，就像使用原型模式一样
 */

function object(o) {
    function F() { }
    F.prototype = o
    return new F()
}

let person = {
    name: "hjx",
    friends:["Bob","Corner"]
}

let obj1 = object(person)
obj1.friends.push("yy")
console.log(obj1.friends) // [ 'Bob', 'Corner', 'yy' ]

let obj2 = object(person)
obj2.friends.push("hjx")
console.log(obj2.friends) // [ 'Bob', 'Corner', 'yy', 'hjx' ]


/**
 * ES5给出了规范的原型式继承
 */

let person2 = {
    name: "hjx",
    friends:["Bob","Corner"]
}

let o1 = Object.create(person2)


o1.name = "黄金鑫"
o1.friends.push("yy")
console.log(o1.name) // 黄金鑫
console.log(o1.friends) // [ 'Bob', 'Corner', 'yy' ]

let o2 = Object.create(person2)
o2.name = "杨滢"
o2.friends.push("hjx")
console.log(o2.name) // 杨滢
console.log(o2.friends) // [ 'Bob', 'Corner', 'yy', 'hjx' ]

console.log(person2.name) // hjx
console.log(person2.friends) // [ 'Bob', 'Corner', 'yy', 'hjx' ]