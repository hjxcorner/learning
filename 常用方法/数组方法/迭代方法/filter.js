/**
 * filter:对数组的每一项运行指定函数，返回该函数会返回true的新数组
 * 
 * 可以改变原数组
 */

let arr = [1, 2, 3, 4]
let filterArr = arr.filter((item, index, array) => {
/**
 * item；当前项
 * index：当前项索引
 * array：调用该方法的数组
 */
    return item >= 2
})
console.log(filterArr) // [ 2, 3, 4 ]