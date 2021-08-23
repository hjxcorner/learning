---
title: BFC
tags: ["css", "BFC"]
categories: ["CSS", "BFC"]
---

## BFC是什么？

BFC（Block Formatting Context）格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。 

可以把它理解成一个隔离了的独立容器，容器里面的元素的布局不会影响到外面的元素。

## 特性

- 内部的Box会在垂直方向上一个接一个的放置。      
- 垂直方向上的距离由margin决定       
- bfc的区域不会与float的元素区域重叠。       
- 计算bfc的高度时，浮动元素也参与计算      
- bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。 

## 如何产生

触发条件：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

<!--more-->

## 作用

- 防止上下外边距合并

  给box加上overflow: hidden;使两个p标签置于不同的BFC中

  ```html
  <style>
      *{
          margin: 0;
          padding: 0;
      }
      p {
          color: #f55;
          background: yellow;
          width: 200px;
          line-height: 100px;
          text-align:center;
          margin: 30px;
      }
       .box{
          overflow: hidden;
          background-color: coral;
      }
  
      .box{
          overflow: hidden;
          background-color: red;
      }
  </style>
  <body>
      <div class="box">
          <p>看看我的 margin是多少</p>
      </div>
      
      <p>看看我的 margin是多少</p>
  </body>
  ```

- 防止浮动元素高度塌陷

  给父元素加上overflow: hidden;让big-box成为一个BFC，这样它里面的子元素就不会影响外面的元素布局，从而不会产生高度塌陷

  ```html
  <style>
      *{
          margin: 0;
          padding: 0;
      }
      .box1,.box2{
          width: 100px;
          height: 100px;
          float: left;
          background-color: royalblue;
          margin-left: 10px;
      }
  
  
      .big-box{
          border: red 1px solid;
          overflow: hidden;
      }
  </style>
  <body>
      <div class="big-box">
          <div class="box1"></div>
          <div class="box2"></div>
      </div>
  </body>
  ```

  