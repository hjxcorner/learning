---
title: JavaScript执行栈
tags: ["js", "执行栈"]
categories: ["JavaScript", "高级", "执行栈"]
---

所有的js代码在运行时都是在执行上下文中进行。执行上下文是一个抽象概念，js中有三种执行上下文：

- 全局执行上下文，默认的，在浏览器中是windows对象，并且在严格模式中this指向它。
- 函数执行上下文，js的函数每次被调用时会创建一个上下文。
- Eval执行上下文，eval函数会产生自己的上下文。

<!--more-->

```js
function foo1(){
    console.log(1)
    foo2()
    console.log(3)
    foo3()
}

function foo2(){
    console.log(2)
}

function foo3(){
    console.log(4)
}

foo1()

/**
 * 1
 * 2
 * 3
 * 4
 */
```

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqaPV7DNaRPkllhk4cnmdIj*3jXRbrJ.xhrp*fEByv2F8LMZb*V7L8l6BQnVPuV8ewOJkRwZ5novSw*78yTwTv.A!/b&bo=IgUHASIFBwEDCSw!&rf=viewer_4)

当js引擎第一次遇到js代码时，会产生一个全局执行上下文压入执行栈，每遇到一个函数调用，就会往栈中压入一个新的上下文。引擎执行栈顶的上下文，执行完毕，则被弹出执行栈。

上述代码中，foo1调用foo2和foo3。当foo1被调用时，foo1执行上下文被压入执行栈，接着输出 1。当foo2被调用时，foo2的执行上下文压入执行栈，接着输出 2，foo2执行完毕，弹出执行栈。foo1接着执行，输出 3 ，当foo3被调用，foo3的执行上下文被压入执行栈，输出 4，foo3执行完毕弹出执行栈。foo1也执行完毕，弹出执行栈。