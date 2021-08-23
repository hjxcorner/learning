/**
 * map：对数组中的每一项执行指定函数，返回 每次函数的返回值 组成的数组
 * 
 * 可以改变原数组
 */

 let arr = [1,2,3,4]
 let mapRet = arr.map((item,index,array)=>{
     /**
     * item；当前项
     * index：当前项索引
     * array：调用该方法的数组
     */
    return item *= 2 
 })
 console.log(mapRet) // [ 4, 8, 12, 16 ]

 console.log(arr) // [ 1, 2, 3, 4 ]