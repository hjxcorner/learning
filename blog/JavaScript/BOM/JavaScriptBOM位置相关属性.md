---
title: JavaScriptBOM位置相关属性
tags: ["js", "BOM", "位置"]
categories: ["JavaScript", "BOM", "位置相关属性"]
---

## 和位置相关的属性

### （1）offset开头

### a.offsetParent

获取距离当前元素最近的定位父元素，如果没有，此时为body

### b.offsetLeft/Top

获取当前元素的偏移位置  距离offsetParent的偏移距离

### c.offsetWidth/Height

获取当前元素的宽/高，包括边框和padding

<!--more-->

### （2）client开头

### a.clientLeft/Top

clientLeft/Top对应border-left/top的大小

### b.clientWidth/Height

获取元素的宽/高，包括padding但不包括边框 不包括滚动条

### （3）scroll开头

#### a.scrollLeft/Top

内容滚动出去的距离

#### b.scrollWidth/Height

内容的大小 + padding + 未显示的内容 不包括滚动条

如果没有内容或者内容未占满父元素，则该属性和clientWidth/Height的值相同JS高级