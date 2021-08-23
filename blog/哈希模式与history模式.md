---
title: 哈希模式与history模式
tags: ["Vue", "Vue-Router"]
categories: ["Vue", "Vue-Router使用"]
---

## 哈希模式实现原理

监听hash值的变化重新渲染视图

监听事件：window.onhashChange

```js
window.onhashChange((e) => {
    console.log(e.oldUrl)  //改变之前的url
    console.log(e.newUrl)  // 改变之后的url
    console.log(location.hash) // 当前的hash值
})

window.addEventListener('DOMContentLoaded', () => {
    console.log(location.hash) // DOM加载完毕打印hash值
})

location.hash = '#/user'  // 将当前hash值改为'#/user'

```

## history模式实现原理

通过api：history.pushState(state, title, url) ，history.replaceState() 切换state 和 url

```js
window.addEventListener('DOMContentLoaded', () => {
    console.log(location.pathname) // DOM加载完毕打印路径
})

window.onpopState = (e) => { // 用于监听路由的变化
    console.log(e.state, location.pathname)  // 打印当前的state 和 路径
}

const state = { name: 'user' }
history.pushState(state, '', 'user') // 改变state
history.replaceState()

// state: 状态对象可以是任何可以序列化的对象。
// title: 当前大多浏览器忽略此参数，一般传入''
// url（可选）: 新历史记录条目的URL由此参数指定。如果未指定此参数，则将其设置为文档的当前URL。 
```

## 区别

| 哈希模式                                                    | history模式                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| url有#                                                      | 无#                                                          |
| 不需要后台配置支持                                          | 需要服务端增加一个覆盖所有情况的候选资源                     |
| 触发`window.hashChange`事件                                 | 使用`history.pushState` 和 `history.replaceState` 这两个H5新增的api |
| 而 hash 只可修改 # 后面的部分，故只可设置与当前同文档的 URL | pushState 设置的新 URL 可以是与当前 URL 同源的任意 URL       |
| 而 hash 设置的新值必须与原来不一样才会触发记录添加到栈中    | pushState 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中 |

 

 

 

 

 

 