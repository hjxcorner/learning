/**
 * forEach：对数组中的每一项运行指定函数。这个方法没有返回值
 * 
 * 可以改变原数组
 */

let arr = [1, 2, 3, 4, 5]
let count = 0
arr.forEach((item, index, array) => {
    /**
     * item；当前项
     * index：当前项索引
     * array：调用该方法的数组
     */

    if(item > 2){
        count ++
    }
})
console.log(count) // 3