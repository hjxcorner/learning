---
title: Ajax-跨域问题
tags: ["Ajax", "跨域"]
categories: ["Ajax", "跨域"]
---

## 什么是Ajax跨域

客户端通过Ajax方式向服务器发送Ajax请求，想要得到响应数据，但是由于客户端和服务器不在同一个域（协议，域名或端口不一致）。浏览器出于安全方面的考虑，会在Ajax请求的时候作校验，校验不通过时浏览器会在控制台会抛出一个类似于：

> SEC7120: [CORS] 原点“http://localhost:8080”未在“http://localhost:8081/ajaxserver/hello”的 cross-origin资源的 Access-Control-Allow-Origin response header 中找到“http://localhost:8080”

的跨域安全问题。

<!--more-->

## 为什么会产生跨域问题

- 浏览器限制：通俗一点讲就是浏览器多管闲事，当发现客户端和服务器不在同一个域中时会对Ajax请求做校验，校验不通过就会产生跨域安全问题，并非服务器不允许客户端访问。

- 跨域：当客户端和服务器的协议，域名，端口有一样不一致时，浏览器就会认为是跨域。

- XMLHttpRequest请求（Ajax请求）：如果发出的不是XMLHttpRequest请求（例：放到超链接里面），浏览器也不会报跨域问题。

## 如何解决

### 方案一：修改服务器返回的头部信息

#### 原理：

http访问控制(cors)

#### 操作：

修改服务器的响应头部，将服务器返回Origin列表改为：

```js
Access-Control-Allow-Origin： *
```

或

```js 
Access-Control-Allow-Origin： 访问方的域名
```

### 方案二：jsonp

#### 原理：

用script标签去请求数据，但是通过script标签请求的数据是JavaScript语句，所以需要将客户端想要获取的数据填充在JavaScript语句中。这里的方案是将一个回调函数作为参数写在url中传到服务端，在服务端获取这个回调函数的名字并传回一段代码，这段代码的内容为：将需要获取的数据作为参数传递给回调函数并执【callback(data)】

客户端操作：

```js

var url = "http://localhost:3000?callback=callbackFun";
// 创建script标签，设置其属性
var script = document.createElement('script');
script.setAttribute('src', url);
// 把script标签加入head，此时调用开始
document.getElementsByTagName('head')[0].appendChild(script);
function callbackFun(data)
{
    console.log(data)
}  
```

服务端操作：

```js
const http = require('http')
const url = require('url')
http.createServer((req, res) => {
    console.log(url.parse(req.url))
    let Url = url.parse(req.url, true) //获取到url对象
    var callbackFun = Url.query.callback //获取客户端传回的callback
    let data = JSON.stringify({
        name: "黄金鑫",
        age: 21
    }) 
    res.write(`${callbackFun}(${data})`)
    res.end()
}).listen('3000')
```



#### 操作：

### 方案三：httpClient内部转发

#### 原理：

实现原理很简单，若想在B站点中通过Ajax访问A站点获取结果，固然有ajax跨域问题，但在B站点中访问B站点获取结果，不存在跨域问题，这种方式实际上是在B站点中ajax请求访问B站点的HttpClient，再通过HttpClient转发请求获取A站点的数据结果。但这种方式产生了两次请求，效率低，但内部请求，抓包工具无法分析，安全。

#### 