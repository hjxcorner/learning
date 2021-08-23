---
title: flex布局
tags: ["css", "flex布局"]
categories: ["CSS", "flex布局"]
---

<!--more-->

## 简介

felx布局是2009年提出的一个布局方案，它可以以一种简单、完整、响应式的方式进行布局。

## 基本概念

采用flex布局的元素成为flex容器，而它的子元素即为flex项目。

容器默认存在两根轴：主轴和交叉轴。（默认情况下主轴为x轴方向，交叉轴为y轴方向）

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

## 容器属性

- `flex-direction`：row | row-reverse | column | column-reverse; （主轴方向）向右/向左/向下/向上

- `flex-wrap`：nowrap | wrap | wrap-reverse; （换行方式）不换行/换行/换行但前面的在下面

- `flex-flow`：row nowrap （前面两个属性的缩写） 

- `justify-content`：flex-start | flex-end | center | space-between | space-around;（主轴上的排列方式）

  左对齐/右对齐/居中/两端对齐/两端有空隙

- `align-items`： flex-start | flex-end | center | baseline | stretch; （交叉轴上的排列方式）起点对齐/终点对齐/居中对齐/项目第一行文字基准线对其/如果项目未设置高度或设为auto，将占满整个容器的高度。 

- `align-content`：flex-start | flex-end | center | space-between | space-around | stretch;（定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 ）

## 项目属性

- `order`：属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。 

- `flex-grow`：属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

- `flex-shrink`：属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 

- `flex-basis`：属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。 

- `flex `：`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。 

- `align-self` ：属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。 

