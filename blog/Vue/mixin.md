---
title: mixin
tags: ["Vue", "mixin"]
categories: ["Vue", "mixin"]
---

## 简介

- 多个组件有相同的逻辑，抽离出来
- mixin并不是完美的解决方案，会有一些问题
- Vue3提出Composition API旨在解决这些问题

<!--more-->

## 例子

组件一和组件二都有一个sayName方法，点击输出自己的名字。

可以用minin把它们抽离出来，把这个方法写在minin里面，这样就不用定义两次。

```js
//组件一
<template>
    <div>
        <button @click="sayName" >sayName1</button>
    </div>
</template>


<script>
import mixin from "./mixin.js"
export default {
    mixins:[mixin],
    data(){
        return {
            name:"mixin1"
        }
    }
}
</script>
//组件二
<template>
    <div>
        <button @click="sayName" >sayName2</button>
    </div>
</template>


<script>
import mixin from "./mixin.js"
export default {
    mixins:[mixin],
    data(){
        return {
            name:"mixin2"
        }
    }
}
</script>


//mixin
export default{
    data(){
        return{
            // name:"mixin"
        }
    },
    methods:{
        sayName(){
            console.log(this.name)
        }
    }
}
```

## 问题

- 变量来源不明确
- 变量名冲突
- mixin和组件可能会出现多对多的关系，复杂度会变高

