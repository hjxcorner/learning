// Set容器： 无序 不可重复 的多个 value 的集合体

let set = new Set([1,1,2,3,3,4,4,5,5])
console.log(set) // Set { 1, 2, 3, 4, 5 }
/**
 * set数组去重
 */

//方式一：通过遍历 将set赋值给另外一个数组
let arr1 = [1,1,2,3,6,5,5]
let set2 = new Set(arr1)
let arr2 = []
for(let i of set2){
    arr2.push(i)
}
console.log(arr2) // [ 1, 2, 3, 6, 5 ]

// 方式二：通过三点表达式
let arr5 = [1,1,2,2,3,3]
let set4 = new Set(arr5)
let arr6 = [...set4]   //因为扩展运算符（...）内部使用for...of所有它也可以使用扩展运算符（...）
console.log(arr6) // [ 1, 2, 3 ]

//复杂类型无法去重
// let arr3 = [1,[1,2],[1,2],3,6,{name:"hh"},{name:"hh"}]
// let set3 = new Set(arr3)
// let arr4 = []
// for(let i of set3){
//     arr4.push(i)
// }
// console.log(arr4) // [ 1, [ 1, 2 ], [ 1, 2 ], 3, 6, { name: 'hh' }, { name: 'hh' } ] 

/**
 * set字符串去重
 */
 let str = [...new Set("aabbcc")].join('')
 console.log(str) //abc
 console.log([...new Set("aabbcc")]) // [a,b,c]