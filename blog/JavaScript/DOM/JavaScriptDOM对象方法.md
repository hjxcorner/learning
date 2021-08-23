---
title: JavaScriptDOM对象方法
tags: ["DOM", "对象方法"]
categories: ["JavaScript", "DOM", "DOM对象方法"]
---

### DOM对象方法

### （1）DOM对象方法

| 方法                     | 描述                                                         |
| :----------------------- | ------------------------------------------------------------ |
| getElementById()         | 返回带有指定 **ID** 的元素。                                 |
| getElementsByTagName()   | 返回包含带有指定**标签名称**的所有元素的节点列表（集合/节点数组）。 |
| getElementsByClassName() | 返回包含带有指定**类名**的所有元素的节点列表。               |
| appendChild()            | 把新的子节点添加到指定节点。                                 |
| removeChild()            | 删除子节点。                                                 |
| replaceChild()           | 替换子节点。                                                 |
| insertBefore()           | 在指定的子节点前面插入新的子节点。                           |
| createAttribute()        | 创建属性节点。                                               |
| createElement()          | 创建元素节点。                                               |
| createTextNode()         | 创建文本节点。                                               |
| getAttribute()           | 返回指定的属性值。                                           |
| setAttribute()           | 把指定属性设置或修改为指定的值。                             |

<!--more-->

### （2）常用方法

#### 一些常用的 HTML DOM 方法：

##### a.getElementById(id) - 获取带有指定 id 的节点（元素）

##### b.appendChild(node) - 插入新的子节点（元素）

###### 语法：

```js
var child = node.appendChild(child);//这里的child等于括号中的child
```

- node` 是要插入子节点的父节点.
- child `即是参数又是这个方法的返回值.

###### 示例：

```js
// 创建一个新的段落p元素,然后添加到body的最尾部
var p = document.createElement("p");
father.appendChild(p);//将p插入到father后面
```

###### 注意：

如果被插入的结点已经存在于文档树中，则那个结点会先将原来添加的移除，再插入到新的位置。

##### c.removeChild(node) - 删除子节点（元素）

###### 语法

```
var p1 = document.getElementById("p1");
var oldp1 = div1.removeChild(p1);

//OR

oldp1.removeChild(child);
```

- p1是要移除的那个子节点.
- div1是p1的父节点.
- oldp1保存对删除的子节点的引用. oldp1=== child.

被移除的这个子节点仍然存在于内存中,只是没有添加到当前文档的DOM树中,因此,你还可以把这个节点重

新添加回文档中,当然,实现要用另外一个变量比如上例中的oldp1.