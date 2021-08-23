---
title: Content-Type几种类型
tags: ["协议", "HTTP"]
categories: ["协议", "HTTP"]
---

- application/x-www-form-urlencoded：

  用于普通字段的表单数据，表单数据会在请求体中，数据以符合某种格式(就是application/x-www-form-urlencoded这个格式啦，这真不是废话)发送给服务端，至于这个具体是什么样的格式，看MDN就可以知道了，总之，这个不是重点，因为就是一种格式而已。

- multipart/form-data

  用于文件或二进制数据，数据会按照某种格式(就是multipart/form-data这种格式啦，这真不是废话)，你想知道这种格式具体是什么样的就看MDN，因为这并不是重点，就是一种格式而已。

- text/plain

  永远不要使用这个值，因为不会被可靠的去解析。

 <!--more-->

 