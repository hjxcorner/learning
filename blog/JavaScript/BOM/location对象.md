---
title: location对象
tags: ["js", "BOM", "location对象"]
categories: ["JavaScript", "BOM", "location对象"]
---

## 简介

location对象是最有用的BOM对象之一，它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。它既是window对象的属性，又是document对象的属性。它将URL解析为独立的片段，让开发人员可以通过不同的属性访问这些片段。

| 属性名   | 例子                                                         | 说明                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| hash     | "#contents"                                                  | 返回URL中的hash（#后跟0或多个字符），如果URL中不包含散列，则返回空串 |
| host     | "www.hcorner.cn:80"                                          | 域名+端口                                                    |
| hostname | "www.hcorner.cn"                                             | 域名                                                         |
| href     | "http://www.hcorner.cn/2020/09/15/JavaScript/DOM/%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86/" | 完整的url                                                    |
| pathname | "2020/09/15/JavaScript/DOM"                                  | url中的目录/文件名                                           |
| port     | "8080"                                                       | 端口                                                         |
| protocol | "http:"                                                      | 协议                                                         |
| search   | "?name=hjx"                                                  | url中的查询字符串                                            |

<!--more-->

## 查询字符串的处理

```js
let str = "?name=hjx&age=21&sex=0"
function getQueryStr(str) {
    let qs = str.slice(1)
    let arr = qs.split("&")
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split("=")
        obj[arr2[0]] = arr2[1]
    }
    return obj
}

let obj = getQueryStr(str)
console.log(obj)

/*
*{ name: 'hjx', age: '21', sex: '0' }
*/
```

## 位置操作

使用location对象可以通过很多方式来改变浏览器的位置：

```js
location.assign("http://www.baidu.com")

//下面两行代码与assign的效果一样，它内部起始还是调用assign方法
window.location = "http://www.hcorner.cn"
location.href = "http://www.hcorner.cn"

//将url修改为"http://www.hcorner.cn/#section1"
lovation.hash = "#section1"

//将url修改为"http://www.hcorner.cn/?name=hjx&age=21"
lovation.search = "?name=hjx&age=21"

//将url修改为"http://www.baidu.cn"
lovation.hostname = "www.baidu.cn"

//将url修改为"http://www.hcorner.cn/mydir"
lovation.pathname = "mydir"

//将url修改为"http://www.hcorner.cn:8080"
lovation.port = "8080"

//每一次修改location的属性（hash除外），页面都会以新url重新加载

```

跳转页面并不在浏览器中生成记录：调用replace()后，不会再历史记录中生成新的记录。

```js
location.replace("http://www.hcorner.cn")
```

重新加载页面：reload()

```js
location.reload() //缓存中有就从缓存中加载没有则从服务器加载
location.reload(true) // 从服务器加载
```

