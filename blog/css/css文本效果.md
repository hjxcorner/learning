---
title: css文本效果
tags: ["css", "文本效果"]
categories: ["CSS", "文本效果"]
---

## 换行

css默认情况下是**先换行但不分裂单词**的，如果一个单词过长会出现溢出父元素的现象（中文一个字就是一个单词）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
.box{
    width: 100px;
    height: 300px;
    border: solid red 1px;
    text-align: center;
}
</style>
<body>
    <div class="box">
        My name is hjx, wo diaosssss ni ma 我叼你妈的 eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    </div>
</body>
</html>
```
<!--more-->
### word-wrap:break-word 

当遇到一个很长的单词的时候，而这一行放不下它了，它会**先换行**，如果还是放不下，那它就**再截断单词**强制换行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
.box{
    width: 100px;
    height: 300px;
    border: solid red 1px;
    text-align: center;
    word-wrap:break-word;
}
</style>
<body>
    <div class="box">
        My name is hjx, wo diaosssss ni ma deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    </div>
</body>
</html>
```

### word-break: break-all

当遇到一个很长的单词，而这一行又放不下它，它会**先把单词截断**，剩下的部分放到下一行，再放不下，再截断再放到一行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
.box{
    width: 100px;
    height: 300px;
    border: solid red 1px;
    text-align: center;
    word-break: break-all;
}
</style>
<body>
    <div class="box">
        My name is hjx, wo diaosssss ni ma deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    </div>
</body>
</html>
```

### word-break: keep-all 

如果一个单词太长，会先放到下一行，如果下一行也放不下，那么会出现溢出。如果单词用连字符连接，那么会在连字符处换行。

只能在半角空格或连字符处换行。 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
.box{
    width: 100px;
    height: 300px;
    border: solid red 1px;
    text-align: center;
    word-break: keep-all;
}
</style>
<body>
    <div class="box">
        My name is hjx, wo diaosssss ni ma 灌灌灌灌灌灌灌灌灌灌灌灌灌灌灌灌灌灌灌灌-eeeeeeee
    </div>
</body>
</html>
```

## 对溢出部分的处理

overflow:

​	hidden：内容会被修剪，并且其余内容是不可见的 

​	scroll：内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 

​	auto：如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 

​	inherit：规定应该从父元素继承 overflow 属性的值。 

text-overflow:

​	ellipsis：溢出部分显示...

​	clip：溢出部分直接截断

### 单行溢出隐藏效果

overflow + text-overflow 只有在文本不换行的情况下text-overflow才会生效

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>
    <style>
        div.test {
            white-space: nowrap;
            width: 12em;
            overflow: hidden;
            border: 1px solid #000000;
        }
    </style>
</head>

<body>

    <p>以下 div 容器内的文本无法完全显示，可以看到它被裁剪了。</p>
    
    <p>div 使用 &quot;text-overflow:ellipsis&quot;:</p>
    <div class="test" style="text-overflow:ellipsis;">
        This is some long text that will not fit in the box
    </div>

    <p>div 使用 &quot;text-overflow:clip&quot;:</p>
    <div class="test" style="text-overflow:clip;">
        This is some long text that will not fit in the box
    </div>

    <p>div 使用自定义字符串 &quot;text-overflow: &gt;&gt;&quot;(只在 Firefox 浏览器下有效):</p>
    <div class="test" style="text-overflow:'>>';">
        This is some long text that will not fit in the box
    </div>
</body>

</html>
```

### 多行溢出隐藏效果

由于文本会自动换行，而超出父元素的部分可通过overflow属性实现多种隐藏方式

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
div.ex1 {
    background-color: lightblue;
    width: 110px;
    height: 110px;
    overflow: scroll;
}

div.ex2 {
    background-color: lightblue;
    width: 110px;
    height: 110px;
    overflow: hidden;
}

div.ex3 {
    background-color: lightblue;
    width: 110px;
    height: 110px;
    overflow: auto;
}

div.ex4 {
    background-color: lightblue;
    width: 110px;
    height: 110px;
    overflow: visible;
}
</style>
</head>
<body>
<h1>overflow 属性</h1>

<p>如果元素中的内容超出了给定的宽度和高度属性，overflow 属性可以确定是否显示滚动条等行为。</p>

<h2>overflow: scroll:</h2>
<div class="ex1">菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！</div>

<h2>overflow: hidden:</h2>
<div class="ex2">菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！</div>

<h2>overflow: auto:</h2>
<div class="ex3">菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！</div>

<h2>overflow: visible (默认):</h2>
<div class="ex4">菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！菜鸟教程 -- 学的不仅是技术，更是梦想！！！</div>

</body>
</html>
```

### 多行文本溢出用省略号显示

只有在文本不换行的情况下text-overflow才会生效所以如何实现多行文本溢出用省略号显示呢？

`-webkit-line-clamp`：用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。 

`display: -webkit-box;` 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。

`-webkit-box-orient` 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

`text-overflow: ellipsis;`，可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .box {
        width: 10em;
        border: solid red 1px;
        text-align: center;
        word-break: break-all;


        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
</style>

<body>
    <div class="box">
        My name is hjx, wo diaosssss ni ma 我叼你妈的 eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee 哈哈哈哈水水水水水水水水水水水水水水水水水水水水水水水
    </div>
</body>

</html>
```

