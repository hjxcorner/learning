/**
 * every：对数组中的每一项运行给定的函数，如果该函数的每一项都返回true，则返回true，否则返回false
 * some：对数组中的每一项运行给定的函数，如果该函数有一项返回true，则返回true，否则返回false
 * 
 * 可以改变原数组
 */
let arr = [1,2,3,4,5,6,7,8]

let everyRet = arr.every((item,index,array) => {
    console.log(item,index,array)
    /**
     * item；当前项
     * index：当前项索引
     * array：调用该方法的数组
     * 如果给定函数返回了false则不再执行
     */
    return item > 1 //如果数组的每一项都大于1那么everyRet为true，否则为false
})

console.log(everyRet) // false


let someRet = arr.some((item,index,array) => {
    console.log(item,index,array)
    /**
     * item；当前项
     * index：当前项索引
     * array：调用该方法的数组
     * 如果给定函数返回了true则不再执行
     */
    return item > 1 //如果数组有一项大于1那么someRet为true，否则为false
})
console.log(someRet) // true