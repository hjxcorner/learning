/**
 * 用set容器去重
 */
let arr = [1, 2, 2, 3, 3, 4, 4, 5,5,6,7,8,8,8,8]
let set = new Set(arr)

arr = [...set]
console.log(arr) // [ 1, 2, 3, 4, 5 ]