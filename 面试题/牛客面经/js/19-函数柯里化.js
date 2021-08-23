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