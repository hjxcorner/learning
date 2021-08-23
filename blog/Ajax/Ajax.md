---
title: Ajax实例
tags: ["Ajax实例"]
categories: ["Ajax","Ajax实例"]
---

<!--more-->

## 简介

AJAX = 异步 JavaScript 和 XML。

AJAX 是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现**异步更新**。这意味着可以在**不重新加载整个网页的情况下，对网页的某部分进行更新**。

传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

## 兼容性处理

```js
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
```

### 请求

| 方法名                             | 描述                                                         |
| :--------------------------------- | ------------------------------------------------------------ |
| open(method,url,async)             | 规定请求的类型、URL 以及是否异步处理请求。                                                    - *method*：请求的类型；GET 或 POST                                                                       - *url*：文件在服务器上的位置                                                                                      - *async*：true（异步）或 false（同步） |
| send(*string*)                     | 将请求发送到服务器。                                                                                                    - *string*：仅用于 POST 请求 |
| setRequestHeader(*header*,*value*) | 向请求添加 HTTP 头。                                                                                     - *header*: 规定头的名称                                                                                   - value：规定头的值 |

### 服务器响应

| 属性         | 描述                       |
| ------------ | -------------------------- |
| responseText | 获得字符串形式的响应数据。 |
| responseXML  | 获得 XML 形式的响应数据。  |

### onreadystatechange 事件

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。                                                     0: 请求未初始化                                                                                                                     1: 服务器连接已建立                                                                                                              2: 请求已接收                                                                                                                          3: 请求处理中                                                                                                                        4: 请求已完成，且响应已就绪 |
| status             | 200: "OK"                                                                                                                                 404: 未找到页面 |

### 实例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <button id="btn">点击获取信息</button>
        <p id="res"></p>
    </div>
</body>

<script>

    // 创建ajax对象 以及兼容性处理
    let xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xmlhttp.onreadystatechange = function () {
        console.log(xmlhttp.readyState)
        
    }

    xmlhttp.open("get", "http://localhost:3000/", true)
    xmlhttp.send(null) 


    let btn = document.getElementById("btn")
    let p = document.getElementById("res")
    btn.addEventListener("click", () => {
        p.innerHTML = xmlhttp.responseText
    })


</script>

</html>
```

