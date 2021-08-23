/**
 * LIFO ：后进先出
 * push：
 *     返回值：入栈后数组的长度
 * pop：
 *     返回值：被移除的项
 * 改变原数组
 */

let arr = [1]

let count = arr.push(2) //也可同时推入多个元素，返回值为推入后的数组长度
console.log(count) // 2
console.log(arr) // [ 1, 2 ]


let item = arr.pop() //返回移除的项
console.log(item) // 2
console.log(arr) // [1]