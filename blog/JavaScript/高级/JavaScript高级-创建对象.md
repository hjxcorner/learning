---
title: JavaScript高级-创建对象
tags: ["js", "高级", "创建对象"]
categories: ["JavaScript", "高级", "创建对象"]
---

### 创建对象

#### （1）空对象

```js
var obj = new object();
```

#### （2）对象字面量

##### 例子：

```js
var obj = {name:'刘波'};
```

##### 缺点：

如果要创建多个对象，需要写多次。

<!--moer-->

#### （3）工厂函数

##### 例子：

```js
function CreatStudent(name,age){

    var obj = new object();

    obj.name = name;

    obj.age = age;

    obj.print = function (){

        console.log('obj.name');

        console.log('obj.age');

    }

    return obj;

}

var Obj = CreatStudent('刘波'，30);
```

##### 缺点：

不方便判断对象具体的类型。

#### （4）构造函数

##### 原理：

1. 在内存中创建一个空对象
2. 设置构造函数的this指向创建的对象
3. 执行构造函数的代码
4. 返回对象

##### 例子：

```js
function CreatStudent(name,age){

    this.name = name;

    this.age = age;

    this.print = function (){

        console.log('this.name');

        console.log('this.age');

    }
}

var Obj = new CreatStudent('刘波'，30);
```

##### 与工厂函数的区别：

- 不需要在函数内创建对象，所以也不需要返回该对象。
- 可以判断对象的具体类型

##### 判断对象具体类型：

```js
var Obj = new CreatStudent('刘波'，30);
console.log(Obj constructor);//constructor:构造器即构造函数
console.log(Obj instanceof CreatStudent);//判断Obj是不是由CreatStudent创造
```

### 