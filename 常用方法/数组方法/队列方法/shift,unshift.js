/**
 * FIFO ：先进先出
 * shift:
 *     返回值：出队元素
 * unshift：
 *      返回值：当前数组长度
 * 直接改变原数组
 */

let arr = ["a", "b", "c"]

let item = arr.shift() // 第一个元素出队列
console.log(item) // a
console.log(arr) // [ 'b', 'c' ]


let count = arr.unshift("d") // 在数组前添加一个元素
console.log(count) // 3  返回值为入队后数组的长度
console.log(arr) //[ 'd', 'b', 'c' ]

