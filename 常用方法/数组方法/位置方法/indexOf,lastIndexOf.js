/**
 * indexOf和lastIndexOf都接收两个参数:要查找的项、查找起始位置的索引（可选）
 * indexOf：从数组开头开始查找，返回第一次匹配项的索引，未找到则返回 -1。若指定了第二个参数，则从指定位置开始向后查找（包括指定位置项）
 * lastIndexOf：从数组结尾开始查找，返回第一次匹配项的索引，未找到则返回 -1。若指定了第二个参数，则从指定位置开始向前查找（包括指定位置项）
 * 
 */

var arr = [1,2,3,4,5,4,3,2,1]

console.log(arr.indexOf(2)) // 1
console.log(arr.indexOf(2,1)) // 1
console.log(arr.indexOf(2,2))  // 7


console.log(arr.lastIndexOf(3)) // 6
console.log(arr.lastIndexOf(3,6)) // 6
console.log(arr.lastIndexOf(3,5)) // 2