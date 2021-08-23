---
title: Web Workers 
tags: ["H5","新特性", "Web Workers"]
categories: ["H5", "新特性", "Web Workers"]
---

## 简介

Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。 

<!--more-->

## 与异步任务的区别

- 不会被异步阻塞：异步任务完成之后，异步任务回调需要进入任务队列等待执行，而web workers可以直接将数据传递给主线程。

## 使用场景

- 可以执行网络操作（Ajax、Web Sockets）
- 可以使用定时器（set/clearTimeout()、set/clearInterval()）
- 访问某些重要全局变量及功能的复本（navigator、location、JSON、applicationCache）
- 可以使用importScrips()方法加载额外js脚本

## 限制条件

- **同源限制**：分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。 （html文件，必须与worker.js文件同源 需要把他们都放到服务器上 ）
- **DOM 限制** ：Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用`document`、`window`、`parent`这些对象。但是，Worker 线程可以`navigator`对象和`location`对象。 
- **通信联系**：Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。 
- **脚本限制** ：Worker 线程不能执行`alert()`方法和`confirm()`方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。 
-  **文件限制** ：Worker 线程无法读取本地文件，即不能打开本机的文件系统（`file://`），它所加载的脚本，必须来自网络。 

## 用法

主线程：

 - Worker.onerror：指定 error 事件的监听函数。
- Worker.onmessage：指定 message 事件的监听函数，发送过来的数据在`Event.data`属性中。
- Worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
- Worker.postMessage()：向 Worker 线程发送消息。
- Worker.terminate()：立即终止 Worker 线程。

worker线程

- self.name： Worker 的名字。该属性只读，由构造函数指定。
- self.onmessage：指定`message`事件的监听函数。
- self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
- self.close()：关闭 Worker 线程。
- self.postMessage()：向产生这个 Worker 线程发送消息。
- self.importScripts()：加载 JS 脚本。

```js
//主线程
    let worker = new Worker('http://localhost:3000/public/work.js')
    
    worker.onmessage = function (event) {
        console.log('Received message ' + event.data);
    }

    function doSomething() {
        // 执行任务
        worker.postMessage('Work done!');
    }
    doSomething();


//worker线程
self.addEventListener('message', function (e) {
  self.postMessage('You said: ' + e.data);
}, false);

```

