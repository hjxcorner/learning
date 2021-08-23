---
title: JavaScriptDOM动态创建元素
tags: ["js", "DOM", "创建元素"]
categories: ["JavaScript", "DOM", "DOM创建元素"]
---

## 动态创建元素

### （1）常用方法

#### a. document.write()（不常用）

将括号内的内容写入文档，当它在事件中使用会把原来的内容**覆盖**掉，所以它只适合在**初次渲染**的时候使用，常用场景：客服（把第三方的客服按钮挂载到页面上）

<!--more-->

#### b. element.innerHTML（创建简单结构）

可以把它当做元素的一个属性

例：

```
    <input id="btn" type="button" value="生成">
    <div id="box"></div>
```

```js
        var box = document.getElementById("box");
        var datas = ['1','2','3','4'];
        var btn = document.getElementById("btn");
        btn.onclick = function (){
            var array = [] ;
            array.push('<ul>');
            for(var i=0;i<datas.length;i++){
                array.push("<li>"+datas[i]+"</li>");
            }
                array.push('</ul>');
                box.innerHTML = array.join('');
        }
```

#### c. document.creatElement()（创建复杂结构）

通过这种方式是在内存中创建一个对象

例：

```html
        <input id="btn" type="button" value="生成">
        <div id="box"></div>
```

```js
            //在内存中创建了一个对象
            var p = document.createElement("p");
            p.innerHTML = "hello";
            var box = document.getElementById("box");
            box.appendChild(p);
```

### （2）性能对比



#### a. 速度

创建1000个div的速度

element.innerHTML(5ms)  >  document.creatElement()(10ms)  >`  document.write()(1600ms)

#### b. 代码量

document.creatElement()  <  element.innerHTML  <  document.write()

### （3）常用元素操作的方法

parentNode.insertBefore(newNode, referenceNode)：在子节点之前插入一个新节点

parentNode.replaceChild(newChild, oldChild)：替换子元素

parentNode.appendChild(newChild)：将插入新的子节点，如果这个子节点在文档中已经存在，则原来的那个节点会被插入到新的位置，如果不想要这样的结果需要把原来的节点克隆，把克隆出的节点插入新的位置，这样原来的节点就不会消失