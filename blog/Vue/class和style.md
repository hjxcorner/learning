---
title: class和style
tags: ["Vue", "class和style"]
categories: ["Vue", "class和style"]
---

```js
<template>
  <div>
    <button @click="sayName">sayName1</button>
    <p :class="{ a: a, b: b }">11111111</p>  为true表示生效
    <p :class="[yellow,blue]">2222222222</p> 写了就表示生效
    <p :style="styleData">3333333333</p>  直接在data里面定义样式
  </div>
</template>
<style scoped>
.a{
    font-size: 30px;
}
.b{
    color: antiquewhite;
}
.yellow{
    color: yellow;
}
.blue{
    color: blue;
}
</style>

<script>
import mixin from "./mixin.js";
export default {
  mixins: [mixin],
  data() {
    return {
      name: "mixin1",
      a:true,
      b:false,
      yellow:"yellow",
      blue:"blue",
      styleData:{
          fontSize:"20px",
          color:"red"
      }
    };
  },
};
</script>
```

<!--more-->

