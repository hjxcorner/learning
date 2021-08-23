---
title: JavaScript-ES6-Promise
tags: ["js", "ES6", "Promise"]
categories: ["JavaScript", "ES6", "Promise"]
---

## 简介

Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件，更加强大合理，它最早由社区提出和实现，ES6将其写进了语言标准。

简单来说，Promise就是一个容器，用它来包裹一些异步操作，可以让异步操作按照一定的次序进行。它可以让异步操作以同步的方式来表达，解决了由于回调函数层层嵌套引起的回调地狱。

## 例子

利用Promise实现按顺序，对两个文件的读取。

```js
const fs = require('fs')

function pReadFile(filePath){
    return new Promise(function (resolve, reject){
        fs.readFile(filePath, 'utf8', function (err, data){
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

pReadFile('../txt/a.txt')
    .then(function (data){
        console.log(data)
        return pReadFile('../txt/b.txt')
    },function (err){
        console.log(err)
    })
    .then(function (data){
        console.log(data)
    },function (err){
        console.log(err)
    })
```
