---
title: CSS3动画
tags: ["css3", "动画"]
categories: ["CSS", "CSS3动画"]
---

| 属性                      | 描述                                                     |
| ------------------------- | -------------------------------------------------------- |
| @keyframes                | 规定动画。                                               |
| animation                 | 所有动画属性的简写属性，除了 animation-play-state 属性。 |
| animation-name            | 规定 @keyframes 动画的名称。                             |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。         |
| animation-timing-function | 规定动画的速度曲线。默认是 "ease"。                      |
| animation-delay           | 规定动画何时开始。默认是 0。                             |
| animation-iteration-count | 规定动画被播放的次数。默认是 1。                         |
| animation-direction       | 规定动画是否在下一周期逆向地播放。默认是 "normal"。      |
| animation-play-state      | 规定动画是否正在运行或暂停。默认是 "running"。           |
| animation-fill-mode       | 规定动画时间之外的状态（播放前/后）                      |

<!--more-->

## 属性的值

**animation 属性是一个简写属性，用于设置8个动画属性：**

- animation-name（默认none）
- animation-duration（默认0）
- animation-timing-function（默认ease）
- animation-delay（默认0）
- animation-iteration-count（默认1）
- animation-direction（默认normal）
- animation-play-state（默认running）
- animation-fill-mode（none）

**animation-timing-function速度曲线：**

- linear ：动画从头到尾的速度是相同的。 
- ease ：默认。动画以低速开始，然后加快，在结束前变慢。 
- ease-in ：动画以低速开始。 
- ease-out ：动画以低速结束。 
- ease-in-out ：动画以低速开始和结束。 
- cubic-bezier(x1,y1,x2,y2) ：在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。 
- steps(n)：动画分n步播完（是不连续的）

**animation-delay动画开始时间：**

- time：动画的开始时间。为正数时，表示等待多长时间开始，为负数时动画将跳过一段时间开始执行。

**animation-iteration-count动画执行次数：**

- n：执行次数
- infinite：重复播放

**animation-direction动画播放规则：**

- normal：正常播放
- reverse：反向播放
- alternate：在奇数次正向播放，在偶数次反向播放
- alternate-reverse：在奇数次反向播放，在偶数次正向播放

**animation-play-state动画播放状态：**

- paused ：动画已暂停
- running ：动画正在播放（默认值）

**animation-fill-mode动画时间之外的状态：**

- none ：不改变默认行为
- forwards ：动画播完之后保持最后一个属性值
- backwards ：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。 
- both ：向前和向后填充模式都被应用。 

### cubic-bezier(x1,y1,x2,y2)

![](https://images2015.cnblogs.com/blog/1044952/201611/1044952-20161130172404584-1510385710.jpg)

图中 横坐标为时间，纵坐标为动画执行速度。

 p0 和 p3 分别为起点和终点，p1，p2 的坐标分别为(x1,y1)，(x2,y2)。

```
 ease: cubic-bezier(0.25, 0.1, 0.25, 1.0)
 linear: cubic-bezier(0.0, 0.0, 1.0, 1.0)
 ease-in: cubic-bezier(0.42, 0, 1.0, 1.0)
 ease-out: cubic-bezier(0, 0, 0.58, 1.0)
 ease-in-out: cubic-bezier(0.42, 0, 0.58, 1.0)
```

## 实例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
        background-color: #f1efef;
    }

    .box {
        position: absolute;
        width: 200px;
        height: 100px;
        background: url("../../image/20200421114717490.png") no-repeat;
        animation: run 1s steps(8)  infinite ,
                   move 5s   linear forwards;
    }

    @keyframes run {
        0% {
            background-position: 0 0;
        }

        100% {
            background-position: -1600px 0;
        }
    }

    @keyframes move {
        0% {
            left: 0;
        }

        100% {
            left: 50%;
            transform: translate(-50%,0);
        }
    }
</style>

<body>
    <div class="box">

    </div>
</body>

</html>
```



注意：

- 定义多个动画要用","隔开
- 当使用复合属性animation时注意书写顺序