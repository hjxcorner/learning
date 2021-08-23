---
title: JavaScriptDOM导航
tags: ["DOM","导航", "JavaScript"]
categories: ["JavaScript", "DOM", "DOM导航"]
---

## DOM导航

#### （1）父子节点

parentNode：父**节点**

firstChild：第一个子**节点**

lastChild：最后一个子**节点**

childNodes：子**节点**列表

<!--more-->

#### （2）子元素

children：子**元素**列表

firstElementChild：第一个子**元素**

lastElementChild：最后一个子**元素**

#### （3）兄弟节点

#### （4）兄弟元素

#### （5）DOM 根节点

这里有两个特殊的属性，可以访问全部文档：

- document.documentElement - 全部文档
- document.body - 文档的主体

#### （6）childNodes和children

childNodes：子节点列表

children：子元素列表

```html
<div id="div">
   <span>1</span>
   <p>2</p>
   <button>3</button>
   <!--这里是注释-->
</div>
```

```js
       var div = document.getElementById("div");
       console.dir(div);
       console.log(div.childNodes);
       console.log(div.children);
```

