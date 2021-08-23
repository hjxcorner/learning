/**
 * 结合了构造函数和原型模式的优点，使用最广泛、认同度最高
 */

 function Person(name,age,job){
    this.name = name
    this.age = age
    this.job = job
    this.friends = ["hjx","yy"]
 }

 Person.prototype = {
     construtor: Person,
     sayName : function (){
         console.log(this.name)
     }
 }

 let person1 = new Person("hjx",21,"程序员")
 person1.sayName() //hjx
 let person2 = new Person("yy",20,"呵呵")
 console.log(person2.friends == person1.friends) //false
 console.log(person2.sayName == person1.sayName) //true
 console.log(person2) //{ name: 'yy', age: 20, job: '呵呵', friends: [ 'hjx', 'yy' ] }