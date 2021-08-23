---
title: typeof和instanceof
tags: ["js", "数据类型", "获取数据类型", "判断数据类型"]
categories: ["JavaScript", "基础", "typeof和instanceof"]
icon: fa-handshake-o
---

## typeof

### 简介

>  typeof是一个运算符，有2种使用方式：
>
> 1. typeof(表达式)
> 2. typeof 变量名
>
> 第一种是对表达式做运算，第二种是对变量做运算。

<!--more-->
### typeof的返回值

| Typ                                                    | Rückgabewert               |
| ------------------------------------------------------ | -------------------------- |
| Undefined                                              | `"undefined"`              |
| Null                                                   | `"object" `(see below)     |
| Boole'scher Wert                                       | `"boolean"`                |
| NaN                                                    | `"number"`                 |
| Zahl                                                   | `"number"`                 |
| Zeichenkette                                           | `"string"`                 |
| Symbol (neu in ECMAScript 2015)                        | `"symbol"`                 |
| Host-Objekt (von der JS-Umgebung bereitgestellt)       | *implementierungsabhängig* |
| Funktionsobjekt (implementiert [[Call]] nach ECMA-262) | `"function"`               |
| Alle anderen Objekte                                   | `"object"`                 |

### 示例

```js
// 数值
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管它是 "Not-A-Number" (非数值) 的缩写
typeof Number(1) === 'number'; // Number 会尝试把参数解析成数值

typeof 42n === 'bigint';


// 字符串
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // 注意内容为数字的字符串仍是字符串
typeof (typeof 1) === 'string'; // typeof 总是返回一个字符串
typeof String(1) === 'string'; // String 将任意值转换为字符串，比 toString 更安全


// 布尔值
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!(1) === 'boolean'; // 两次调用 ! (逻辑非) 操作符相当于 Boolean()


// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 


// 对象
typeof {a: 1} === 'object';

// 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组和普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // 历史结果请参阅正则表达式部分


// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// 函数
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
typeof Object === "function";
```

## instanceof

### 简介

> instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上(判断一个实例是否属于它的父类型)

 

 ### 用法

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// 输出: true
console.log(auto instanceof Object);
// 输出: true
console.log(auto instanceof Function);
//输出: false
```

### 模拟instanceof

```js
function _instanceof(A, B) {
    var O = B.prototype;// 取B的显式原型
    A = A.__proto__;// 取A的隐式原型
    while (true) {
        //Object.prototype.__proto__ === null
        if (A === null)
            return false;
        if (O === A)// 这里重点：当 O 严格等于 A 时，返回 true
            return true;
        A = A.__proto__;//沿着原型链逐渐向上
    }
}
```

## 区别

- 返回值不同，typeof返回表达式或变量的数据类型，instanceof返回true或false

- 检测方式不同，参数个数不同

- instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型。


