---
title: apply,bind,call的区别
tags: ["js", "函数方法"]
categories: ["JavaScript", "基础"]
icon: fa-handshake-o
---

## 调用方式

apply，call为立即调用，bind返回一个函数

```js
let obj = {
    name:"yy"
}

function foo(){
    let name = "hjx"
    console.log(this.name)
}

foo.call(obj) // yy
foo.apply(obj) // yy
let foo2 = foo.bind(obj) 
foo2() // yy
```

## 传参方式

call，bind将参数一一列举，apply为参数数组

```js
let obj = {
    name:"yy"
}

function foo(age,sex) {
    let name = "hjx"
    console.log(this.name,age,sex)
}

foo.call(obj,21,"男") // yy 21 男
foo.apply(obj,[21,"男"]) // yy 21 男
let foo2 = foo.bind(obj,21,"男") // yy 21 男
foo2()
```

<!--more-->