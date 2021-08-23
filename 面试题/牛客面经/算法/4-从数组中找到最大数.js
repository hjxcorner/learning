
/**
 * 找出数组中的最大值和最小值
 */


//1.普通方法
function foo(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        } 
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return {
        max,
        min
    }
}
let arr = [1,2,3,66,3,44,774,33,9]
console.log(foo(arr).max,foo(arr).min)


//2.Math.max/Min()函数
// let max =  Math.max.call(null,...arr)
// let min =  Math.min.call(null,...arr)

let max =  Math.max.apply(null,arr)
let min =  Math.min.apply(null,arr)
console.log(max,min)

//3.用sort方法
let arr2 = [...arr]
arr2.sort(compare)
function compare(value1,value2){
    return value1 - value2
}

max = arr2[arr2.length - 1]
min = arr2[0]
console.log(max,min)


//4.es6扩展运算符
max = Math.max(...arr)
min = Math.min(...arr)
console.log(max,min)
