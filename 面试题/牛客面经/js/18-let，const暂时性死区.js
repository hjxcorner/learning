// console.log(a) //报错 Cannot access 'a' before initialization
// let a = 1

// function foo(){
//     console.log(a) // 报错 Cannot access 'a' before initialization
//     // const a = 2 
//     let a = 2
// }

// foo()

// // 在用let，const定义的变量之前使用变量，会出现 暂时性死区


let arr = []

function foo() {
    for (var i = 0; i < 5; i++) {
        // console.log(i)
        var f = function () {
            console.log(i)
        }
        arr.push(f)
    }
}


foo()
// console.log(arr)

// arr.forEach((item) => {
//     console.log(item())
// })

for (let i = 0; i < arr.length; i++) {
    arr[i]()
}