---
layout: post
title: "Responsive design 中文示例"
excerpt: "最近我把文章页用CSS3改写了一下, 学习了responsive design 最基本的概念."
categories: [blog, website]
tags: [website]
---


最近我root新买的Nook Touch, 装上Opera Mini简单看看网页.
发现自己的这个博客在Opera下利用它的AutoZoom看着还成, 但是用Dolphin Mini就很惨.
于是趁机学习了最近很流行的responsive design, 改造一下页面.

参考资料
===================
我参考了以下几个资源
 
 * [Web designer
 wall](http://webdesignerwall.com/tutorials/responsive-design-in-3-steps)
 * [A List Apart: Articles: Responsive Web
 Design](http://www.alistapart.com/articles/responsive-web-design/)
 * [Smashing
 Magazine](http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/)


示例
=========
我要做的是保持工具栏的宽度不变(235px). 在宽屏上显示是, 文章宽度可变.
当浏览器宽度缩小到小于600px时, 把右边的工具栏挪到下方显示. 下面是最小实现代码.

HTML
--------

    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--[if lt IE 9]>
        <script
        src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
      <![endif]-->
    </head>
    <body>
    <div id="head"></div>
    <div id="columnwrap">
      <div id="content-main"/>
    </div>
    <div id="content-related" />
    <div id="footer"/>
    </body>
    </html>

CSS
-------
    #columnwrap {float:left; margin-right:-235px; width:100%; }
    #content-main { 
        margin-right:235px;
    }
    #content-related { float:right; width:235px;}


    @media screen and (max-width: 600px) {
       #content-main { width: auto; float: none; clear:both; margin-right:0px;}
       #content-related {width: auto; float: none; clear:both;}
    } 


