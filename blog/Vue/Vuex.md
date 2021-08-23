---
title: Vuex
tags: ["Vue", "Vuex"]
categories: ["Vue", "Vuex"]
---

## 简介

Vuex是一个专门为vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

这个状态自管理应用包含以下几个部分：

- **state**，驱动应用的数据源；
- **view**，以声明方式将 **state** 映射到视图；
- **actions**，响应在 **view** 上的用户输入导致的状态变化。

![](https://vuex.vuejs.org/flow.png)
<!--more-->

![](https://vuex.vuejs.org/vuex.png)

## 解决的问题

为各个组件提供了一个数据源，所有组件都能够通过一定的方式去拿这个仓库中的数据，就不需要进行繁琐的组件通信。

## 开始

### 引入

在全局文件中引入：

```js
import Vuex from 'vuex'

Vue.use(Vuex)

```
### 调用store中的数据
```js
	this.$store.state.count //直接调用store中的count
```
### 改变store中的数据
```js
//先在store的mutations中定义一个方法
	updateUserInfo(state,newInfo){
		state.userInfo = newInfo
	}
//在组件中调用updateUserInfo
	let userInfo = {userName: "hjx", age: 21}
	this.$store.commit("updateUserInfo",userInfo)
```

### 创建store

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) { 
      state.count++
    }
  }
})
```

#### 注意：

- state中的数据只能通过mutations中的方法来改变.
- mutations中的方法的第一个参数为state对象，后面的参数为自定义参数。
- 当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

## 核心概念

### State

单一状态树，用一个对象就包含了全部的应用层级状态。

### Getter

从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：

```js
computed: {
  doneTodosCount () {
    return this.$store.state.todos.filter(todo => todo.done).length
  }
}
```

### Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。

**mutation 都是同步事务**：

```js
store.commit('increment')
// 任何由 "increment" 导致的状态变更都应该在此刻完成。
```

### Action

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```

### Module

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```