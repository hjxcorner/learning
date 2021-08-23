---
title: JavaScript高级-拷贝
tags: ["js", "高级", "拷贝"]
categories: ["JavaScript", "高级", "拷贝"]
---

## 拷贝

### 浅拷贝：

#### 定义：

把一个对象的成员赋值给另外一个成员的时候只能把简单类型赋值给它，如果该对象的成员中包含引用类型（对象），则值将该对象中的引用类型的引用复制给它，而不会重新创建一个引用类型。

<!--more-->

#### 例子：

```js
    function copy(obj1,obj2){
        for(var key in obj1){
            if(obj2[key]){
                continue;
            }
            obj2[key] = obj1[key];
        }
    }
    var obj1 = {
        name : '张三',
        dog : {
            name : '欧阳',
            sex : '公'
        }
    }
    var obj2 = {};
    copy(obj1,obj2);
    obj2.dog.name = '金毛';
    console.log(obj1.dog.name);//金毛
    console.log(obj1.dog == obj2.dog);//true
```

### 深拷贝

#### 定义：

创建一个新的对象接受另一个对象的值，而不是接受引用。

#### 例子：

```js
    //深拷贝
    function deepCopy(o1,o2){
        for(var key in o1){
            //获取key属性对应的值
            var item = o1[key];
            if(item instanceof Object){
                o2[key] = {};
                deepCopy(item,o2[key]);
            }else if(item instanceof Array){
                o2[key] = [];
                deepCopy(item,o2[key]);
            }else{
                o2[key] = o1[key];
            }
        }
    }    
    var obj1 = {
        name : '张三',
        dog : {
            name : '欧阳',
            sex : '公'
        },
        friends: ['欧阳打手','杰尼龟']
    };
    var obj2 = {};
    deepCopy(obj1,obj2);
    console.log(obj2.dog === obj1.dog);//flase
```