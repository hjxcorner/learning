---
title: new操作符
tags: ["js", "new"]
categories: ["JavaScript", "基础", "new"]
---

## new操作符做了什么

```js
function Person (name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex
 
    this.sayName = function () {
        return this.name;
    };
}
 
var person = new Person("tom", 21, "famle");
 
console.log(person);
```

1. 创建一个空对象

2. 将新对象的proto指向构造函数的prototype对象 

3. 让构造函数中的this指向这个对象
4. 执行构造函数中的代码
5. return this

<!--more-->

下列代码等同于new：

```js
var Obj = {};
 
Obj._proto_ =  Person.prototype();
 
Person.call(Obj);
```



