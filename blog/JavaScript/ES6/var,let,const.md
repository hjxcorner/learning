---
title: var,let,const
tags: ["js", "ES6"]
categories: ["JavaScript", "ES6", "var,let,const"]
---

|       | 是否有作用域 | 能否重复定义 | 会不会被变量提升 | 能否被修改 |      |
| ----- | ------------ | ------------ | ---------------- | ---------- | ---- |
| var   | 无           | 可以         | 会               | 能         |      |
| let   | 块级作用域   | 不可以       | 不会             | 能         |      |
| const | 块级作用域   | 不可以       | 不会             | 不能       |      |

<!--more-->

## let、const暂时性死区

let，const声明的变量不会变量提升，但是不能在变量声明之前使用这个变量。

暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。 

当程序的控制流程在新的作用域(module, function或block作用域)进行实例化时，在此作用域中的用let/const声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，也就是对声明语句进行求值运算，所以是不能被访问的，访问就会抛出错误。所以在这运行流程一进入作用域创建变量，到变量开始可被访问之间的一段时间，就称之为TDZ(暂时死区)。 

```js
var a = 1

function foo(){
    console.log(a) // 报错 Cannot access 'a' before initialization
    // const a = 2 
    let a = 2
}

foo()

```

## 块级作用域应用

没有块级作用域

```js
let arr = []
function foo() {
    for (var i = 0; i < 5; i++) {
        var f = function () {
            console.log(i)
        }
        arr.push(f)
    }
}

foo()
for (let i = 0; i < arr.length; i++) {
    arr[i]()
}
/*
5
5
5
5
5
*/
```

有块级作用域

```js
let arr = []
function foo() {
    for (let i = 0; i < 5; i++) {
        var f = function () {
            console.log(i)
        }
        arr.push(f)
    }
}

foo()
for (let i = 0; i < arr.length; i++) {
    arr[i]()
}
/*
0
1
2
3
4
*/
```

