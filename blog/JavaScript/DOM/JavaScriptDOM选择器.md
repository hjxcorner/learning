---
title: DOM-选择器
tags: ["js", "DOM", "选择器"]
categories: ["JavaScript", "DOM", "选择器"]
---

## id选择器（有唯一性）

**getElementById()：**接收一个参数：要获取的元素的id，如果找到相应的元素则返回该元素，不存在则返回null。

（IE8及低版本浏览器不区分大小写）

```js
var element = document.createElement("div");
element.id = 'testqq';
var el = document.getElementById('testqq'); // el 是个 null
```

<!--more-->	

## 类名选择器

**getElementsByClassName()：**接收一个参数：要获取元素的类名，类名可以是多个类名。返回一个结点列表，如果没有找到匹配项则列表为空。

获取所有 class 为 'test' 的元素:	

```js
document.getElementsByClassName('test');
```

获取所有 class 同时包括 'red' 和 'test' 的元素.

```js
document.getElementsByClassName('red test');
```

在id 为'main'的元素的子节点中，获取所有class为'test'的元素

```js
document.getElementById('main').getElementsByClassName('test');
```

我们还可以对任意的  [`HTMLCollection`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection) 使用 Array.prototype 的方法，调用时传递  HTMLCollection 作为方法的参数。这里我们将查找到所有class为 'test' 的 div 元素:

```js
var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
});
```

## name选择器

**getElementsByName(name) ：**接收一个参数：所要查找元素的name属性的value。返回匹配的所有元素。

使用场景：取得单选按钮，确保发给服务器的值正确无误。

语法：

```js
elements = document.getElementsByName(name) 
```

## 标签名选择器

**getElementsByTagName()：**接收一个参数，即要取得元素的标签名。返回所有匹配的元素的节点列表，如果没有找到匹配项则列表为空。

获取id为box下的li标签

```js
let li = document.getElementById("box").getElementsByTagName("li")
```

## 查询选择器

**querySelector**(查询选择器)：接收一个css选择符，返回与该模式匹配的第一个元素，如果没有找到匹配元素，返回null。

找出id为box的第一个匹配元素:

```js
let box = document.querySelector("#box")
```

找出标签名为li的第一个匹配元素:

```js
let li = document.querySelector("li")
```

找出类目为a的第一个匹配元素：

```js
let a = document.querySelector(".a")
```

找出标签名为ul类名为a的第一个匹配元素：

```js
 let ula = document.querySelector("ul.a")
```

**querySelectorAll**：接收的参数与querySelector一样，但它返回所有匹配的元素

找出id为box的所有匹配元素:

```js
let box = document.querySelectorAll("#box")
```

找出标签名为li的所有匹配元素:

```js
let li = document.querySelectorAll("li")
```

找出类目为a的所有匹配元素：

```js
let a = document.querySelectorAll(".a")
```

找出标签名为ul类名为a的所有匹配元素：

```js
 let ula = document.querySelectorAll("ul.a")
```


