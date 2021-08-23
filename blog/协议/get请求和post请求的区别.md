---
title: get请求和post请求的区别
tags: ["get", "post", "区别"]
categories: ["协议", "HTTP"]
---

|        维度        |                             get                              |                             post                             |
| :----------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|        用途        |                       从服务器获取数据                       |                       发送数据给服务器                       |
|      传参方式      |                             url                              |                     url 或  Request body                     |
|   请求是否被缓存   |                          默认会缓存                          |                 默认不会缓存（可手动设置为）                 |
|      大小限制      |                  不同浏览器/服务器限制不同                   |         浏览器无限制，tomcat默认2M也可以设置为无限制         |
| 浏览器记录是否保存 |                              是                              |                              否                              |
|      编码方式      |     只能进行url编码（application/x-www-form-urlencoded）     | 支持 多种编码方式（application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。） |
|     TCP数据包      | 只发送一个数据包， http header和data一并发送出去，服务器响应200 | 一般发送两个数据包，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 （ Firefox 只发送一次） |



## 浏览器Url长度限制

### 1、IE

IE浏览器（Microsoft Internet Explorer） 对[url长度](http://www.baiwar.com/tag/url%E9%95%BF%E5%BA%A6)限制是2083（2K+53），超过这个限制，则自动截断（若是form提交则提交按钮不起作用）。

###  2、firefox

firefox（火狐浏览器）的url长度限制为 65 536字符，但实际上有效的URL最大长度不少于100,000个字符。

###  3、chrome

chrome（谷歌）的url长度限制超过8182个字符返回本文开头时列出的错误。

###  4、Safari

Safari的url长度限制至少为 80 000 字符。

###  5、Opera

Opera 浏览器的url长度限制为190 000 字符。Opera 9 地址栏中输入190 000字符时依然能正常编辑。

## 服务器对url的长度限制

###  1、Apache

Apache能接受url长度限制为8 192 字符

###  2、IIS

Microsoft Internet Information Server(IIS)能接受url长度限制为16 384个字符。
这个是可以通过修改的（IIS7）

###  3、Perl HTTP::Daemon

Perl HTTP::Daemon 至少可以接受url长度限制为8000字符。

Perl HTTP::Daemon中限制HTTP request headers的总长度不超过16 384字节(不包括post,file uploads等)。

但当url超过8000字符时会返回413错误。
这个限制可以被修改，在Daemon.pm查找16×1024并更改成更大的值。

###  4、ngnix

可以通过修改配置来改变url请求串的url长度限制。

<!--more-->