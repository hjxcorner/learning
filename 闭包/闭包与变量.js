/**
 * 闭包只能取得包含函数中变量的最终值
 */

function createFunction() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        arr[i] = function () {
            console.log(i)
        }
    }
    return arr
}

var arr = createFunction()
arr[0]()  // 10  
arr[5]()  // 10 // 由于arr[0-9]引用的都是同一个闭包，而闭包中变量i的最终值为10，所以所有的都输出10

/**
 * 为实现arr[i]()输出 i 对上述函数做如下改进
 */


//改进一：

function createFunction2() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        arr[i] = function (num) {
            return function () {
                console.log(num)
            }
        }(i)
    }
    return arr
}

var arr2 = createFunction2()
arr2[0]()  // 0
arr2[3]()  // 3
arr2[8]()  // 8  arr2中的函数引用的不同的闭包


// 改进二：

function createFunction3() {
    var arr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = function () {
            console.log(i)
        }
    }
    console.log(i)  // 报错  原因：该作用域中无法访问 i ，因为i有它自己的块级作用域
    return arr
}

var arr3 = createFunction3()
arr3[0]()  // 0
arr3[3]()  // 3
arr3[8]()  // 8  let 有自己的作用域，所以每次循环都会形成不同的闭包
