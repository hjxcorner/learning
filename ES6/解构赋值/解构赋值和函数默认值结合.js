function foo( {a = 1,b=5} ){
    console.log(a,b)
}

foo({}) // 1 5

foo( {a: 2, b: 1} ) // 2 1

// foo() //报错 
//因为只有参数为一个对象时 a,b 才会通过解构赋值生成 解决方式如下：

function foo( {a = 1,b=5} = {} ){
    console.log(a,b)
}

foo() // 1,5


/**
 * 注意：这样使用传参规则必须要满足解构赋值的规则
 *
 */