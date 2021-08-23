---
title: Vue生命周期
tags: ["Vue", "生命周期"]
categories: ["Vue", "生命周期"]
---

## 创建阶段

### beforeCreated

> data和methods都未被初始化。

### created

> data和methods都已经被初始化。
>
> 操作data或执行methods中的函数的点。
<!--more-->

### 模板编译

> Vue开始编辑模板，把Vue代码中的那些指令进行执行，最终在内存中生成一个编译好的最终模板字符串。然后，把这个模板字符串渲染为内存中的DOM，此时，只是在内存中渲染好了模板，并没有把模板挂载到真正的页面中去。

### beforeMounted

> zhih页面中的元素还没有被真正替换过来，只是之前写的一些模板字符串。此函数执行的时候，模板已经在内存中编译好了，但尚未挂载到页面中去，此时页面还是旧的。

### mounted

> 内存中的模板已经挂载到页面中，用户已经可以看到最新的数据。此时实例已经被创建好了，如果没有其他操作，这个实例会静静地躺在内存中。
>
> 操作页面中的DOM结点最早的点。

## 运行阶段

### beforeUpdate

> 到data中的数据被改变时执行。
> 页面中的显示数据还是旧数据。

### Virtual DOM re-render and patch(虚拟DOM重新呈现和修补)
> 根据data中的新数据，在内存中重新渲染出一份最新的DOM树。
>
> 把最新的DOM树重新渲染到真实的页面中去。
>
> 完成 data(module)- > view
### update
> 页面和data的数据已经同步。

## 销毁阶段

### beforeDestroy

> 实例身上的所以data和所有methods，以及锅炉器、指令……都处于可用状态，还没执行销毁过程。

### destroy

> 组件已经被完全销毁了，此时，组件中所有的数据、方法、指令、过滤器……都已经不可用了。

![](https://cn.vuejs.org/images/lifecycle.png)
