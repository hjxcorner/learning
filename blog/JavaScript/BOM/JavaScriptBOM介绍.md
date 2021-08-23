---
title: JavaScriptBOM介绍
tags: ["js", "BOM", "介绍"]
categories: ["JavaScript", "BOM", "介绍"]
---

## 介绍

### （1）

### （2）对话框（一般不用）

a. alert：纯文本

b. prompt：输入框

c. confirm：是否删除

### （3）js加载

a. onload

window，标签 都可以调用，页面所有元素加载完成执行

b. onunload

页面卸载的时候调用，所有对话框都不能在里面使用

<!--more-->

### （4）定时器

a.setTimeout（定时炸弹）

隔一段事件执行，且只执行一次

b.setInterval（闹钟）：

隔一段时间就执行，且重复执行

### （5）location

a.location.href:浏览器地址栏的地址

b.location.replace:替换掉地址栏中的地址不记录历史

c.location.reload(boolean):true强制从服务器获取页面，false 如果浏览器有缓存的话，直接从缓存获取页面

### （6）URL组成

![](http://q2pswj36a.bkt.clouddn.com/timg.gif)

### （7）history

对应导航栏的历史

前进：forward()，go(1)

后退：back()，go(-1)

### （8）userAgent

通过navigator.userAgent判断客户使用的是pc端还是移动端