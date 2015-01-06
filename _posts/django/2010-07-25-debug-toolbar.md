---
layout: post
title: "Django编程利器：debug-toolbar"
excerpt: "No 1 Django programming utility"
categories: [blog, django]
tags: [django]
---

我平常用Java做web app时，经常在debug时感觉不是很方便。很多程序员都是依靠IDE（Eclipse，NetBeans之类的）。
我觉得这样效率不高，基本上就用LOG4J生成文件后读数据。这么做调多进程的程序时很好，但对一些简单的程序反而有些不便。

Django的缺省DEBUG开关对ERROR 500很有帮助，但大多数情况下我们挣扎于网页能显示出来但里面的数据不正确。
这个时候DEBUG_TOOLBAR的作用就显示出来了。

<iframe src="http://player.vimeo.com/video/6640136?title=0&amp;byline=0&amp;portrait=0" width="601" height="338" frameborder="0"></iframe>

Vimeo Link: <http://vimeo.com/6640136>

Amazon上有一本书<a href="http://www.amazon.com/gp/product/1847197566/ref=as_li_ss_tl?ie=UTF8&tag=c2-teckoo-content-20&linkCode=as2&camp=217145&creative=399349&creativeASIN=1847197566">Django 1.1 Testing and Debugging</a><img src="http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=1847197566&camp=217145&creative=399349" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />详细讲了Django debug toolar 的使用. 有点贵, 我跑到图书馆里去看的.

<a href="http://www.amazon.com/gp/product/1847197566/ref=as_li_ss_il?ie=UTF8&tag=c2-teckoo-content-20&linkCode=as2&camp=217145&creative=399349&creativeASIN=1847197566"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=1847197566&MarketPlace=US&ID=AsinImage&WS=1&tag=c2-teckoo-content-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=1847197566&camp=217145&creative=399349" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

