---
title: slot
tags: ["Vue", "slot"]
categories: ["Vue", "slot"]
---

## 基本使用

页面中slot中的内容将会替换为website.title

```js
//父组件
    <slotDemo :url="website.url">
      {{website.title}}  //替换子组件slot中的内容
    </slotDemo>
	export default {
      data(){
        return {
          website:{
            url:"http://www.hcorner.cn",
            title:"no time",
          }
        }
      }
    }

//子组件
<template>
  <a :href="url">
      <slot>
          默认内容，父组件没有设置内容时显示
      </slot>
  </a>
</template>
export default {
  props: ["url"],
};	
```

## 作用域插槽

子组件让父组件能够获取自己的数据

子组件通过slot上绑定一个数据传递给父组件，父组件再通过template上的v-slot 属性获取子组件的数据，再把数据传回给子组件。

```js
//父组件
    <slotDemo :url="website.url">
      <template v-slot="slotProps"> //获取子组件的数据
        {{slotProps.slotData.title}}  //把子组件的数据回传给子组件
      </template>
    </slotDemo>

	export default {
      data(){
        return {
          website:{
            url:"http://www.hcorner.cn",
            title:"no time",
          }
        }
      },
    }


//子组件
<template>
  <a :href="url">
    <slot :slotData="website"> 默认内容，父组件没有设置内容时显示 </slot>
  </a>
</template>
export default {
  props: ["url"],
  data() {
    return {
      website: {
        url: "http://www.baidu.com",
        title: "百度",
      },
    };
  },
};
```



## 具名插槽

将数据插入具体name属性的插槽中

```js
//子组件
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>


<script>
export default {};
</script>

//父组件
    <slotDemo>
        <template v-slot:header>
          <h1>将插入header slot中</h1>
        </template>
        <p>
          插入到main中，即未命名的slot
        </p>

        <template v-slot:footer>
            <h1>
              插入到footer slot中
            </h1>
        </template>
    </slotDemo>
```

