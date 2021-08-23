---
title: JavaScript高级-闭包
tags: ["js", "高级", "闭包"]
categories: ["JavaScript", "高级", "闭包"]
---

## 闭包现象

- 闭包：内部函数引用了外部函数的变量，导致外部函数的活动对象未能被回收。
- 产生条件：函数作为返回对象，且被的返回函数中使用了返回它的函数中的成员
- 特点：提供了一种让外部也能访问内部函数变量的方式

<!--moer-->

案例：

```html
<body>
    <input type="button" value="btn1" id="btn1">
    <input type="button" value="btn2" id="btn2">
    <input type="button" value="btn3" id="btn3">

    <script>
        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        var btn3 = document.getElementById('btn3');

        function makeFun(size){
            return function (){
                document.body.style.fontSize = size + 'px';
            }
        }
        btn1.onclick = makeFun(20);
        btn2.onclick = makeFun(30);
        btn3.onclick = makeFun(40);
    </script>
</body>
```

## 使用场景

- 函数节流防抖

- 封装私有变量

    ```js
    function f1() {
        var sum = 0;
        var obj = {
           inc:function () {
               sum++;
               return sum;
           }
    };
        return obj;
    }
    let result = f1();
    console.log(result.inc());//1
    console.log(result.inc());//2
    console.log(result.inc());//3
    ```

    ```js
    function f1() {
        var sum = 0;
        function f2() {
            sum++;
            return f2;
        }
        f2.valueOf = function () {
            return sum;
        };
        f2.toString = function () {
            return sum+'';
        };
        return f2;
    }
    //执行函数f1，返回的是函数f2
    console.log(+f1());//0
    console.log(+f1()())//1
    console.log(+f1()()())//2
    ```

    

- 给元素伪数组添加事件

  ```js
  // DOM操作
  let li = document.querySelectorAll('li');
  for(var i = 0; i < li.length; i++) {
      (function(i){
          li[i].onclick = function() {
              alert(i);
          }
      })(i)
  }
  ```


## 如何避免内存泄漏

- 避免使用全局变量
- 尽早释放无用对象的引用
- 尽早移除不需要的计时器

