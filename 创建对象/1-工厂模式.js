/**
 * 优点：解决了创建多个相似对象的问题，当想要创建多个相似对象的时候，不用每次都写一遍赋值操作
 * 
 * 缺点：没有解决对象识别的问题，即无法判断对象的类型(不知道对象是由哪个构造函数创建的)
 */

 function createPerson(name,age,sex){
    let o = new Object()
    o.name = name
    o.age = age
    o.sex = sex
    o.sayName = function (){
        console.log(this.name)
    }
    return o
 }

 let person1 = createPerson("hjx",21,"男")
 console.log(person1) // { name: 'hjx', age: 21, sex: '男', sayName: [Function] }
 console.log(person1 instanceof createPerson) // false
 console.log(typeof person1) // object
