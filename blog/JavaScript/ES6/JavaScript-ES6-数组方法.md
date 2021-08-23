---
title: JavaScript-ES6-数组扩展
tags: ["js", "ES6", "数组扩展"]
categories: ["JavaScript", "ES6", "数组扩展"]
---

## map  （映射  一对一）

- 参数：回调函数
- 返回值：和原数组等长的新数组，数组的每一个元素为map回调函数的返回值 
- 回调函数：
  - 回调函数执行次数：数组长度
  - 回调函数参数：数组元素
  - 回调函数返回值：可自定义

示例：

```js
let arr1 =[12,5,7]

let arr2 = arr1.map(function (item){
    return item*2
})
console.log(arr2)

let arr3 = [44,55,90,60]

let arr4 = arr3.map(function (item){
    return item >= 60 ? "及格" : "不及格"
})

console.log(arr4)

输出：
[ 24, 10, 14 ]
[ '不及格', '不及格', '及格', '及格' ]
```

<!--more-->

## reduce  (汇总 一堆出来一个)   

- 参数：回调函数
- 返回值：回调函数最后一次的返回值 
- 回调函数：
  - 回调函数执行次数：数组长度 - 1
  - 回调函数参数：
    - 第一个参数：第一次为数组的第一个元素，之后为每次回调函数的返回值 
    - 第二个参数：第一次为数组的第二个元素，之后为后一个元素 
    - 第三个参数：第二个参数在数组中的下标
  - 回调函数返回值：第一次为数组第一个元素，之后可自定义

示例：

```js
let arr1 =[12,69,180, 8763]
//求arr1的平均值
let ava = arr1.reduce( (tem, item, index)=>{
    if (index < arr1.length -1){
        return tem + item
    } 
    return (tem + item) / arr1.length
})
console.log(ava) //2256
```



## filter  过滤器

- 参数：回调函数
- 返回值：筛选之后的新数组
- 回调函数：
  - 回调函数执行次数：数组长度
  - 回调函数参数：数组元素
  - 回调函数返回值：true/false （为true时元素保留，为false元素去除）

示例：

```js
//找出数组中能整除3的数
let arr1 =[12,69,180, 8763, 10, 22, 33, 99, 15]

let arr2 = arr1.filter((item)=> {
    return item > 100
})

console.log(arr2)
```



## forEach  循环

- 参数：回调函数
- 返回值：undefined
- 回调函数：
  - 回调函数执行次数：数组长度
  - 回调函数参数：
    - 第一个参数：数组元素
    - 第二个参数：元素下标

示例：

```js
let arr1 =[12,69,180, 8763, 10, 22, 33, 99, 15]

let arr2 = arr1.forEach((item, index)=> {
    console.log(index + ":" + item)
})

console.log(arr2) //undefined
```

