var [a,b,c] = [1,2,3]

console.log(a,b,c) //1,2,3

var {a,b} = {a:"a", b: "b"}

console.log(a,b) // a,b

var [a,b,c] = [{a:"a"},[1,2,3],4]

console.log(a,b,c) // { a: 'a' } [ 1, 2, 3 ] 4


var [{a},b,c] = [{a:"a"},[1,2,3],4]

console.log(a,b,c) // a [ 1, 2, 3 ] 4

/**
 * 条件：
 *      左右结构必须相同
 *      右边的数据结构必须合法
 *      声明和赋值不能分开
 */