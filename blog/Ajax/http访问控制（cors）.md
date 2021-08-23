---
title: http访问控制（cors）
tags: ["http", "cors","跨域"]
categories: ["Ajax", "cors"]
---

## 介绍

出于安全原因，**浏览器限制从脚本内发起的跨源HTTP请求**。 例如，XMLHttpRequest(Ajax)和Fetch API遵循同源策略。 这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非响应报文包含了正确CORS响应头。 

![](https://mdn.mozillademos.org/files/14295/CORS_principle.png)

<!--more-->

## 浏览器端

如果发现一个请求是跨域，那么浏览器会自动拦截一下，给他的http header加上Origin字段。比如：http://localhost:8080变为Origin:http://localhost:8080。由此服务器端便可以区分这个请求是不是跨域。

## 服务器端

当服务器接收到浏览器端发过来的请求之后，会有一个响应的header。它会告诉请求的浏览器哪些域名可以请求我，哪些方法可以执行。此时浏览器便会做出决定,如果服务器未返回正确的响应首部，则请求方不会收到任何数据。 

服务器返回给浏览器的header：

- Access-Control-Allow-Origin 允许跨域的Origin列表
- Access-Control-Allow-Methods 允许跨域的方法列表（GET、POST等）
- Access-Control-Allow-Headers 允许跨域的Header列表
- Access-Control-Expose-Headers 允许暴露给JavaScript代码的Header列表
- Access-Control-Max-Age 最大的浏览器缓存时间，单位为s

