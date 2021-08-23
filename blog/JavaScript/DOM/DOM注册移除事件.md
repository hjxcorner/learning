---
title: DOM注册/移除事件
tags: ["js", "DOM", "事件","事件冒泡", "注册事件", "事件对象", "取消默认行为"]
categories: ["JavaScript", "DOM", "DOM注册/移除事件"]
---

## 注册事件

- 事件名

  同一个事件只能定义一个事件处理函数（在冒泡阶段被执行）

- addEventListener('eventName',func,true/false)

  可以注册多个事件处理函数，但是有浏览器兼容性问题，IE9以上支持,addEventListener的第三个参数可以指定触发时段。默认情况是false，也就是在冒泡阶段被执行；如果指派为true，则在捕获阶段被执行。（可指定在什么阶段执行）

- attachEvent('on'+'eventName',func)

  可以注册多个事件处理函数，但是有浏览器兼容性问题IE特有的方法，且IE9之前可用

<!--more-->

### 兼容性处理

```js
        function addEventListener(element,eventName,fn){
            //判断是否支持addEventListener
            if(element.addEventListener){
                element.addEventListener(eventName,fn);
            }
            //判断是否支持attachEvent
            else if(element.attachEvent){
                element.attachEvent('on'+eventName,fn);
            }
            //以上两种都不支持
            else{
                //相当于 element.onclick = fn
                element['on'+eventName] = fn;
            }
        }
```

### 移除事件

#### onclick事件移除

```js
    btn.onclick = function(){

        alert('你好');

        btn.onclick = null ;

    }
```

#### addEventListener事件移除

```js
    btn.addEventListener('click',btnclick)
    function btnclick(){
        alert('你好哇');
        btn.removeEventListener('click',btnclick);
    }
```

#### attachEvent事件移除

```js
    btn.attachEvent('onclick',btnclick)
    function btnclick(){
        alert('你妈死了');
        btn.deattachEvent('onclick',btnclick);
    }
```

#### 兼容性处理

```js
    //移除事件的兼容性问题处理
    function removeEventListener(element,eventName,fn){
        if(element.removeEventListener){
            element.removeEventListener(eventName,fn);
        }
        else if(element.deattachEvent){
            element.deattachEvent('on'+eventName,fn);
        }
        //以上两种都不支持
        else{
            element['on'+eventName] = null;
        }
    }
```



### 
