---
title: HTTP缓存机制
tags: ["协议", "HTTP", "缓存"]
categories: ["协议", "HTTP"]
---

## 缓存过程分析

浏览器每次发起请求都会先从浏览器缓存查找请求结果，如果没有该请求的结果则会向服务器发起请求。

浏览器拿到服务器返回的结果后便会将返回结果和标识存入浏览器缓存

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqfMjP7YEnzXGHgmPd46Rt1dj2E93bk4UlVc2hHDaxACRxJNvBz.iJqDiGeuNmhW3pwoplQRGNMk2cg*BpnbOr54!/b&bo=zQItAs0CLQIDCSw!&rf=viewer_4)

<!--more-->

### 强制缓存

**强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定下一步操作的过程** 

强制缓存有下列三种情况：

（1）浏览器缓存不存在缓存结果和缓存标识

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqdZ.7*dvPNAqsOKZzvdLeOTKStH2zmYuJIOFErHuxykItiafo0u3CtbLilbagQyV3hrlOpcFSbyY*zM1wUYV3Sw!/b&bo=zQLWAc0C1gEDCSw!&rf=viewer_4)

（2）浏览器缓存存在缓存结果和缓存标识但缓存失效了（使用协商缓存）

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqcVQB6mvMtUTEApmsTyxB3FwixTOabqt*2AjTtrkT3SOVQazc5K11M8USSavhhT0V4FlY5T8J9u5M0ZkvUNRzw0!/b&bo=zQLWAc0C1gEDCSw!&rf=viewer_4)

（3）浏览器缓存存在缓存结果和缓存标识且缓存有效

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqZGP1p8ZPdvVOxf8*cVj0Xfw4bXmUBMRpmy3pigeNYa*rQ.b8ebYQhGFlJfAyfLEC8gSs5PMNf1yWKIFIelnECo!/b&bo=zQKYAc0CmAEDCSw!&rf=viewer_4)

#### 强制缓存规则

当浏览器向服务器发送请求的时候，服务器会将**缓存规则**放入HTTP响应报文的HTTP头中和请求结果一起返回给浏览器，控制强制缓存的字段分别是**Expires**和**Cache-Control**，其中**Cache-Conctrol**的优先级比**Expires**高。 

##### Expires和Cache-Control

Expires是HTTP/1.0控制网页缓存的字段，其值为服务器返回该请求的结果缓存的到期时间。

现在浏览器的默认使用的是HTTP/1.1 Expires已经被Cache-Control替代，原因在于Expires控制缓存的原理是使用**客户端的时间**与**服务端返回的时间**做对比，如果客户端与服务端的时间由于某些原因（时区不同；客户端和服务端有一方的时间不准确）发生误差，那么强制缓存直接失效，那么强制缓存存在的意义就毫无意义。

| 字段名        | HTTP版本 | values                                                       |
| ------------- | -------- | ------------------------------------------------------------ |
| Expires       | HTTP/1.0 | 具体的格林尼治标准时间（ 如：Thu, 09 Sep 2021 17:08:18 GMT ） |
| Cache-Control | HTTP/1.1 | public：所有内容都将被缓存（客户端和代理服务器都可缓存）                      private**：所有内容只有客户端可以缓存，**Cache-Control的默认取值**                           no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定             no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存                 max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效 |

### 协商缓存

**协商缓存是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据标识决定下一步操作的过程。**

协商缓存有下列两种情况：

（1）协商缓存有效，返回304

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqYlzlDfsimYhe0G4sVhZS2NWyo3nT3v5iLQM4i7gB5v3.n76UlWaUVqXGT7ECo1oYf.ef6xCdzQ*QV1MDcgVXmI!/b&bo=WAK2AlgCtgIDCSw!&rf=viewer_4)

（2）协商缓存失效，返回200

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqTuOL4DKtq5Zuj9gjiYklhLSiCKeJ9.m3DW1SvJmwwPFrBtaA1M1xN*nrUAjy784qsmCsTjArqht79LlFcFgIEY!/b&bo=WAJ7AlgCewIDCSw!&rf=viewer_4)

#### 协商缓存规则

协商缓存的标识也是在响应报文HTTP的头部和请求结果一起发送给浏览器的，协商缓存有两组字段，分别为：

- **Last-Modified / If-Modified-Since** 
- **Etag / If-None-Match** 

**Etag / If-None-Match** 的优先级高于**Last-Modified / If-Modified-Since** 

| 字段名            | 发送方 | value                                              |
| ----------------- | ------ | -------------------------------------------------- |
| Last-Modified     | 服务器 | 资源文件在服务器最后被修改时间（格林尼治标准时间） |
| If-Modified-Since | 浏览器 | 上次请求返回的Last-Modified值                      |
| Etag              | 服务器 | 资源文件的一个唯一标识                             |
| If-None-Match     | 浏览器 | 上次请求返回的唯一标识Etag值                       |

### 如何刷新客户端强制缓存

1. 修改被缓存文件的文件名

2. meta缓存头设置为禁止缓存

   ```
   <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
   <meta http-equiv="Pragma" content="no-cache" />
   <meta http-equiv="Expires" content="0" />
   ```

3. js、css加上版本号

   当请求js、css的时候，给他们最后加上版本号，浏览器发现版本高了，就自然而然不会读取低版本的缓存了 版本号并不需要改变文件名，只需要在调用js、css的时候在最末尾加上`?v=1.0`即可，比如 

   ```
   custom.css?v=1.0
   main.js?v=2.0
   ```

4. 添加MD5

   MD5相当于一个文件的身份证号，每个文件的MD5都不一样，同一个文件只要经过修改，MD5也不一样，所以我们可以通过MD5判断资源是否经过修改。当然这不可能让我们自己一个一个判断添加，肯定是服务器的事。

### 缓存位置

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqYQhDD*LPt4uLA473iTDbgcKsGcLlaEGYC89TuS9yCd2WqaOa2KcEKFoG5ioEnnsaVAYDgC5a9QwfV0hEk15nWs!/b&bo=9gaqAgAAAAADB3o!&rf=viewer_4)

memory cache：内存中的缓存

disk cache：硬盘中的缓存

status为灰色的200：使用强制缓存

304：使用协商缓存

## 总结

![](http://m.qpic.cn/psc?/V14BQVWI1qqur2/bqQfVz5yrrGYSXMvKr.cqceBARjWoYS2hspYQpDP85TwMtnWNbPKu1xm6HzHHB6vFsgXZ9kNUnUcWBBIM.OfTBynaF*D2AJEmlngQ0mhNNE!/b&bo=JgTDAwAAAAADB8A!&rf=viewer_4)