---
title: localStorage 和 sessionStorage 
tags: ["H5","新特性", "localStorage 和 sessionStorage "]
categories: ["H5", "新特性", "localStorage 和 sessionStorage "]
---

<!--more-->

## localStorage

用于长期存储的数据，保存的数据没有过期时间，直到手动删除。

### 方法

- 保存数据：localStorage.setItem(key,value);
- 读取数据：localStorage.getItem(key);
- 删除单个数据：localStorage.removeItem(key);
- 删除所有数据：localStorage.clear();
- 得到某个索引的key：localStorage.key(index);

## sessionStorage

零时保存的数据，关闭窗口后被删除。

- 保存数据：sessionStorage.setItem(key,value);
- 读取数据：sessionStorage.getItem(key);
- 删除单个数据：sessionStorage.removeItem(key);
- 删除所有数据：sessionStorage.clear();
- 得到某个索引的key：sessionStorage.key(index);

## 实例

```html
<body>
    <div style="border: 2px dashed #ccc;width:320px;text-align:center;">
        <label for="sitename">网站名(key)：</label>
        <input type="text" id="sitename" name="sitename" class="text" />
        <br />
        <label for="siteurl">网 址(value)：</label>
        <input type="text" id="siteurl" name="siteurl" />
        <br />
        <input type="button" onclick="save()" value="新增记录" />
        <hr />
        <label for="search_phone">输入网站名：</label>
        <input type="text" id="search_site" name="search_site" />
        <input type="button" onclick="find()" value="查找网站" />
        <p id="find_result"><br /></p>

        <input type="button" onclick="creatTable()" value="查看所有" />
    </div>
</body>

<script>
    function save() {
        let siteName = document.getElementById("sitename").value
        let siteUrl = document.getElementById("siteurl").value
        localStorage.setItem(siteName, siteUrl)
    }

    function find() {
        let searchSite = document.getElementById("search_site").value

        let storageSite = localStorage.getItem(searchSite)
        console.log(storageSite)
        if (storageSite) {
            let find_result = document.getElementById("find_result")
            find_result.innerHTML = storageSite
        }   
    }


    function creatTable() {
        let table = document.createElement("table")
        table.border = 1
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.innerHTML = "key"
        td2.innerHTML = "value"
        tr.append(td1)
        tr.append(td2)
        table.append(tr)

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let _tr = document.createElement("tr")
            let _td1 = document.createElement("td")
            let _td2 = document.createElement("td")
            _td1.innerHTML = key
            _td2.innerHTML = localStorage.getItem(key)
            _tr.append(_td1)
            _tr.append(_td2)
            table.append(_tr)
        }
        let body = document.getElementsByTagName("body")[0]
        body.append(table)
    }

</script>
```

