---
title: JavaScript高级-函数
tags: ["js", "高级", "函数"]
categories: ["JavaScript", "高级", "函数"]
---

## 函数

### 1.函数声明和函数表达式

#### 区别：

- 函数的说明会被提前（预解析），函数表达式不会被提前
- 在if语句中函数声明在新版本浏览器不会提前，在老版本会提前

```js
    //函数声明
        function f1(){
            console.log('函数声明');
        }
    //函数表达式
        var f2 = function (){
            console.log('函数表达式');
        }
```

<!--more-->

### 2.函数的调用形式

#### a.普通函数调用

```js
function fn(){}
fn();
```

#### b.方法调用

```js
var obj = {
	fn: function (){}
}
obj.fn();
```

#### c.作为构造函数调用

```js
function Student(name,age){
this.name = name;
this.age = age;
}
```

#### d.作为事件的处理函数

#### e.作为定时器的参数

```js
setInterval(function (){
},1000);
```

### 3.函数内部指向

函数内部this指向调用它的对象

### 4.call,apply,bind

#### （1）call()

##### a.功能：

call()是函数对象的一个方法，其可以改变函数this的指向，调用函数

例子：

```js
        function fn(x,y){
            console.log(this);
            console.log(x+y);
        }
        //此时fn的中的this指向obj
        fn.call(obj,5,6);
```



##### b.参数：

第一个参数设置this的指向，其他参数对应函数的参数

##### c.返回值：

call的返回值就是函数的返回值

##### d.应用：

```js
        //伪数组
		var obj = {
            0: 1,
            1: 2,
            2: 3,
            length: 3
        };
		//改变了Array.prototype.push的指向，让obj能使用push方法
        Array.prototype.push.call(obj,4);
        Array.prototype.splice.call(obj,0,2);
        console.log(obj);
```

#### （2）apply()

##### a.功能：

call()方法的作用和 apply() 方法类似，区别就是`call()`方法接受的是**参数列表**，而`apply()`方法接受的是**一个参数数组**。

##### b.例子：

```js
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);//这里的null表示不用改变调用者中this的指向
console.log(max);//7
```

#### （3）bind()

##### a.功能：

绑定this，bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

##### b.例子：

```js
        this.x = 9;    // 在浏览器中，this指向全局的 "window" 对象
        var module = {
        x: 81,
        getX: function() { console.log(this.x); }
        };

        module.getX(); // 81

        var retrieveX = module.getX;
        retrieveX();   
        // 返回9 - 因为函数是在全局作用域中调用的

        // 创建一个新函数，把 'this' 绑定到 module 对象
        // 新手可能会将全局变量 x 与 module 的属性 x 混淆
        var boundGetX = retrieveX.bind(module);
        boundGetX(); // 81
```

#### （4）三者区别

##### a.参数

call和bind传参方式相同，apply除第二个参数外需要放入数组中



例子：

```js
var obj = {name: '张三'};
function foo(data){
    console.log(this,data);
}
foo.call(obj,5);
foo.apply(obj,[5]);
foo.bind(obj,5);
```

##### b.调用时间

apply()和call()是立即调用,bind()是将改变this指向的函数返回

例子：

```js
var obj = {name: '张三'};
function foo(data){
    console.log(this,data);
}
foo.call(obj,5);//输出：{name: '张三'} 5
foo.apply(obj,[5]);//输出：{name: '张三'} 5
foo.bind(obj,5);//没有输出，因为函数没有被调用
```

##### c.何时使用

apply()和call()在非回调函数上使用，bind()在回调函数上使用

例子：

```js
var obj = {name: '张三'};
setInterval(function (){
    console.log(this);
}.bind(obj),2000);
```



### 5.函数的其他成员

#### arguments

##### 作用：

用于存储函数的实参

##### 例子：

```js
        function fn(){
            console.log(arguments);
        }
        fn(1,2,3,'hello');
```

### 6.自调用函数

#### 例子：

(函数)(实参)

```js
   (function (n1,n2){
        console.log("这是匿名函数的自执行的第一种写法，结果为:"+(n1+n2))
    })(10,100)//110

    (function start(n1,n2){
        console.log("这是函数声明方式的自执行的第一种写法，结果为:"+(n1+n2))
    })(10,100)//110
```

