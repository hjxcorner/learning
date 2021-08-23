---
title: Vue-Router使用
tags: ["Vue", "Vue-Router使用"]
categories: ["Vue", "Vue-Router使用"]
---

## 重点

- 路由模式：hash、H5 history
- 路由配置：动态路由懒加载

## 路由模式

hash模式（默认）：http://www.hcorner.cn/#user/1

H5 history：http://www.hcorner.cn/user/1 （需要服务端的支持，无特殊需求可选择前者）

## 路由配置

### 动态路由

```js
const User = {
    //获取参数如 10 20
    template:"<div>User{{$route.params.id}}</div>"
}
const router = new VueRouter({
    routers:[
         //动态路由参数 以冒号开头。能命中'/user/10' '/user/20'等格式的路由
    	{path:"/user/:id", component:User}
    ]

})
```

### 懒加载

需要用到的时候再去加载

```js
const router = new VueRouter({
    routes:[
         //动态路由参数 以冒号开头。能命中'/user/10' '/user/20'等格式的路由
    	{
            path:"/user/:id", 
            component:()=>import('./../components/User')
        }
    ]

})
```

