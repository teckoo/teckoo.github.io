---
layout: post
title: "如何用CSS3做一个半透明的背景"
excerpt: "不用图片, 只用CSS做一个半透明的背景. How to make a semi-transparent background color in div"
categories: [blog, website]
tags: [website]
---

今天顺手学了一个小技巧, 用CSS3里的特性做一个半透明的背景. 现在正文里用暗青色区域下面也能显示出周围的黑色纹理了. 

以前如果要做到这点的话就只能得用PNG的透明特性, 我一向不喜欢用图片的, 现在终于用CSS3也可以了. 其限制是只能在支持CSS3的浏览器里看得到, 如Firefox3+, Webkit系列, 我才不在乎IE6/7/8里是什么样呢. 呵呵. 

看看这代码多简洁啊. 

    #content-main {background-color:rgba(20,64,64,0.4);} 

这是[css3.info的解释](http://www.css3.info/opacity_rgba_and_compromise/).

