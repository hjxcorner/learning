// function curry(fn) {
//     let args = Array.prototype.slice.call(arguments, 1)  //提取除第一个参数之外的参数 这里的第一个参数为fn
//     return function () {
//         let innerArgs = Array.prototype.slice.call(arguments)
//         let finalArgs = [...args, ...innerArgs]
//         return fn.apply(null, finalArgs)
//     }
// }


// function add(num1, num2, num3, num4) {
//     // console.log(this)
//     return num1 + num2 + num3 + num4
// }

// let curryAdd = curry(add, 1,2)
// console.log(curryAdd(3,4))


/* 写一个函数实现 add(1)(2) = 3 add(1,2)(3) = 6*/
function add(){

    let args = [...arguments]
    let x = args.reduce((prev, cur, index, array)=>{
        return prev + cur
    })
    return function(y){
        return y + x
    }
}

console.log(add(1)(2))  // 3
console.log(add(1,2)(3)) // 6