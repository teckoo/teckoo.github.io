---
layout: post
title: "如何点击div的任何一处就进入下一个页面"
excerpt: "cursor, div也支持onclick()"
categories: [blog, website]
tags: [website]
---

俺家领导最近看了一眼这个网站首页, 问了一句:"非得要点击这四个标题才能进到下一级吗?". 
我没注意还有这样的需求, 点div上的任何一个地方都可以让用户进到下一个页面. 于是趁机学习一下CSS来实现这个需求.

步骤
------
1. 我从来没注意`div` 也支持`onclick()`. 现在加上马上就实现了.

        <div id="story" onclick="top.location.href = 'blog/story.html'">

2. 这么做有一个不完美的地方, 就是鼠标放在`div`上没有任何变化, 这样用户不知道文字和其它空白的地方都可以点击. 这需要给`div`加上`cursor`属性. 

        #story{
         cursor:pointer;
        }

大功告成, 把它加到[我的小抄](/knowledge/entry/html-css.html)里去, 下回好用.

![](http://lh3.google.co.uk/Dikiwinky/Rwv9sNQP9JI/AAAAAAAAAFg/1r7V7axngME/s800/cc0041.gif)

