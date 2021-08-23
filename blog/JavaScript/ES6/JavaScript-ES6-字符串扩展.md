---
title: JavaScript-ES6-字符串扩展
tags: ["js", "ES6", "字符串"]
categories: ["JavaScript", "ES6", "字符串扩展"]
---

<!--more-->

## 方法扩展

- **includes()**：表示是否找到了参数字符串。
- **startsWith()**：表示参数字符串是否在原字符串的头部。
- **endsWith()**：表示参数字符串是否在原字符串的尾部。

**作用：**用来确定一个字符串是否包含在另一个字符串中。

**参数：**

- 第一个参数：要检测的字符串
- 第二个参数：开始搜索的位置

**返回值：**布尔值

**示例：**

```js
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

## 字符串模板

