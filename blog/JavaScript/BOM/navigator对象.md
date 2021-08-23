---
title: navigator对象
tags: ["js", "BOM", "navigator对象"]
categories: ["JavaScript", "BOM", "navigator对象"]
---

## 检测插件

```js
    function hasPlugin(name) {
        name = name.toLowerCase()
        for (let i = 0; i < navigator.plugins.length; i++) {
            if (navigator.plugins[i].name.toLowerCase().indexOf(name) > 1) {
                return true
            }
        }
        return false
    }
```

<!--more-->