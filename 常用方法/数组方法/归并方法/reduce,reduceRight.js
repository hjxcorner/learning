/**
 * reduce和reduceRight：
 *      都接收两个参数：第一个参数为在每一项上调用的回调函数，第二项（可选）为第调函数第一次调用时的第一个参数。
 *      返回值：最后一次执行时的返回值
 * 
 * 在每一项上调用的函数：
 *      接收四个参数：
 *          上一次执行的返回值（若reduce/recuceRight不指定第二个参数为数组第一项，若reduce/recuceRight指定了第二个参数则为指定值）
 *          当前项（若reduce/recuceRight不指定第二个参数为数组第二项，若reduce/recuceRight指定了第二个参数则为数组第一项）
 *          当前项索引
 *          调用reduce/reduceRight的数组     
 *      返回值：返回的任何值都会作为第一个参数传递给下一次执行的函数
 *         
 * 两个函数区别：
 *      reduce从数组第一项开始，向后遍历。
 *      reduceRight从数组最后一项开始向前遍历
 * 
 * 应用场景：
 *      求和
 *      求平均值
 */

let arr = [0, 1, 2, 3, 4]


let reduceRet = arr.reduce((prev, cur, index, array) => {
    console.log(prev, cur, index, array)
    return index
})
/**
    0 1 1 [ 0, 1, 2, 3, 4 ]
    1 2 2 [ 0, 1, 2, 3, 4 ]
    2 3 3 [ 0, 1, 2, 3, 4 ]
    3 4 4 [ 0, 1, 2, 3, 4 ]
 */



let reduceRet2 = arr.reduce((prev, cur, index, array) => {
    console.log(prev, cur, index, array)
    return index
}, 100)
/**
    100 0 0 [ 0, 1, 2, 3, 4 ]
    0 1 1 [ 0, 1, 2, 3, 4 ]
    1 2 2 [ 0, 1, 2, 3, 4 ]
    2 3 3 [ 0, 1, 2, 3, 4 ]
    3 4 4 [ 0, 1, 2, 3, 4 ]
 */


//  求平均值
let ave = arr.reduce((prev, cur, index, array)=>{

    return prev + cur
})/arr.length

console.log(ave) // 2