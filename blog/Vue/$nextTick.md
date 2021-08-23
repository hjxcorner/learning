---
title: $nextTick
tags: ["Vue", "$nextTick"]
categories: ["Vue", "$nextTick"]
---

## 简介

- Vue是异步渲染
- data改变之后，DOM不会立刻更新
- $nextTick会在DOM更新完成之后被触发，以获取最新的DOM节点

<!--more-->

## 异步渲染

下列代码中，每点击一下给ul添加三个子元素，然后输出ul子节点的长度。

第一下点击时输出：4

第二下点击时输出：7

由此可推断是先获取的dom节点长度，再进行渲染的。即Vue为异步渲染。

```js
<template>
    <div class="nextTick">
        <ul ref="ul">
            <li v-for="i in list" :key="i">{{i}}</li>
        </ul>
        <button @click="addItem">添加元素</button>
    </div>
</template>


<script>
export default {
    data(){
        return {
            list:[1,2,3,4]
        }
    },
    methods:{
        addItem(){
            this.list.push(Math.random())
            this.list.push(Math.random())
            this.list.push(Math.random())
            let ul = this.$refs.ul
            console.log(ul.childNodes.length)
        }
    }
}
</script>
输出：
4
7
```

## 使用$nextTick获取最新的dom节点

用$nextTick包裹获取dom节点的操作，那么每次点击获取的dom节点都为最新的

第一下点击时输出：7

第二下点击时输出：10

```js
<template>
  <div class="nextTick">
    <ul ref="ul">
      <li v-for="i in list" :key="i">{{ i }}</li>
    </ul>
    <button @click="addItem">添加元素</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
  methods: {
    addItem() {
      this.list.push(Math.random());
      this.list.push(Math.random());
      this.list.push(Math.random());

      this.$nextTick(() => {
        let ul = this.$refs.ul;
        console.log(ul.childNodes.length);
      });
    },
  },
};
</script>
```



