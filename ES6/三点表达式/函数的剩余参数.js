function foo(a, ...arr) {
    console.log(a)
    console.log(arr)
    console.log(arguments)

    // arguments.forEach((item)=>{
    //     console.log(item)
    // }) //这里会报错

    arguments.forEach(function (item){
        console.log(item)
    }).call(arr)

    arr.forEach((item) => {
        console.log(item)
    })
}


foo(1, 2, 3, 4, 5)

/**
 * 1
 * [ 2, 3, 4, 5 ]
 */

/**
 * 可用于替代 arguments 因为 arguments 为伪数组 其不能使用数组的方法
 * 而 通过三点表达式传入的数组可以使用数组的方法
 */