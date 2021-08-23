---
title: v-model原理
tags: ["Vue", "v-model原理"]
categories: ["Vue", "v-model原理"]
---

## 子组件

```js
<template>
    <div class="v-model">
        <input type="text" @input="$emit('change',$event.target.value)" :value="name">
    </div>
</template>

<script>
export default {
    model:{
        prop:"name", // 与props中的name对应
        event:"change"  //父组件监听的事件 与$emit中的事件名对应
    },
    props:["name"],
}
</script>
```

## 父组件

```js
<template>
  <div id="app">
    {{name}}
//这两行的效果是相同的
    <vmodel v-model="name"></vmodel>
	<vmodel :name="name" @change="(value)=>this.name=value"></vmodel>
  </div>
</template>

<script>
import vmodel from "./components/v-model"
export default {
  data(){
    return {
      name:"hhh"
    }
  },
  components: {
    vmodel
  },
  computed: {
  }
};
</script>

```

<!--more-->