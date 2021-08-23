/**
 * 与字符串的slice方法类似，用于提取数组中的元素，可接收一个或两个参数，即起始位置和结束位置
 * 如果只传入一个参数，则返回起始位置开始到数组结尾的所有项
 * 如果传入两个参数，则返回起始位置到结束位置之间的项，但不包括结束项
 * 
 * 原数组不变
 */

 let arr = [1,2,3,4,5]

 let arr2 = arr.slice(0) // 提取第一项到数组最后一项
 console.log(arr2) // [ 1, 2, 3, 4, 5 ]

 let arr3 = arr.slice(0,arr.length - 1) // 提取第一项到数组倒数第二项
 console.log(arr3) // [ 1, 2, 3, 4 ]


 console.log(arr) // [ 1, 2, 3, 4, 5 ]


let arr4 = arr.slice(-10,-9)
console.log(arr4)