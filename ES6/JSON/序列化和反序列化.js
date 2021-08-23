let obj = {
    name: "corner",
    age: 21
}

let str1 = JSON.stringify(obj) //将对象转化为json字符
 
console.log(str1)  // {"name":"corner","age":21}
console.log(typeof str1)  //string
console.log(str1.name) // undefined

let obj2 = JSON.parse(str1) //将json字符转化为对象

console.log(obj2)  // { name: 'corner', age: 21 }
console.log(typeof obj2)  //object
console.log(obj2.name) // corner
