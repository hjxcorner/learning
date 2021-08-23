// 功能与slice类似但是不能传入负值  [左闭右开]

let str = "Apple, Banana, Mango"
let res = str.substring(0,1) //A
console.log(res)


// 参数传入负值时 负值会被和谐为0
res = str.substring(-2,1) //A
console.log(res)

res = str.substring(1,-2)
console.log(res) //A

res = str.substring(5,1)
console.log(res) //pple