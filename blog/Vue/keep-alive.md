---
title: keep-alive的作用及使用场景
tags: ["Vue", "路由","keep-alive"]
categories: ["Vue", "路由","keep-alive"]
---

## 作用

vue的内置组件，能在组件切换过程中将状态保存在内存中，防止DOM的重复渲染

## 使用场景

### 记住页面输入的内容：

当不用keep-alive修饰时，在组件A中的输入框输入内容，再切换到B组件，再切换到A组件，之前输入的内容消失。

当用keep-alive修饰时，在组件A中的输入框输入内容，再切换到B组件，再切换到A组件，之前输入的内容还在。

```js
//组件A
<template>
    <div>
        请输入：<input type="text">
    </div>
</template>

//组件B
<template>
    <div>
        这是B
    </div>
</template>

//根组件
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <router-link to="/" tag="button">AAAA</router-link>|
    <router-link to="/B" tag="button">BBBB</router-link>
  </div>
</template>

```

## 设置

默认：包含所有组件

include：设置包含哪个组件

exclude：设置不包含哪个组件

```js
//组件A
<template>
    <div>
        请输入：<input type="text">
    </div>
</template>

<script>
export default {
    name:"A"
}
</script>


//根组件
<template>
  <div id="app">
    <keep-alive include='A'> //这里的A为组件name
      <router-view />
    </keep-alive>
    <router-link to="/" tag="button">AAAA</router-link>|
    <router-link to="/B" tag="button">BBBB</router-link>
  </div>
</template>
```

