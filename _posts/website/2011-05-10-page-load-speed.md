---
layout: post
title: "如何测试网页下载速度"
categories: [blog, website]
tags: [website]
---

Google在四月九号正式宣布了[网站速度会影响搜索排名][gsrc]. 尽管权重不到1%, 但程序员在设计实现网站时就应该考虑更多的因素. 我在[实现这个博客网站][teckoo]时就选择了要尽快显示内容, 为此省略了很多功能, 为的是要在2秒之内让访客看到内容.

下面提供的工具中前三个是Google官方博客里提到的. 前两个现在对Firefox和Chrome都提供了支持. 

* [Page Speed](http://code.google.com/speed/page-speed/), evaluates the performance of web pages and gives suggestions for improvement.
including [Firefox](http://code.google.com/speed/page-speed/docs/using_firefox.html),
[Chrome](http://code.google.com/speed/page-speed/docs/using_chrome.html) and 
[Online](http://pagespeed.googlelabs.com/) version. 
* [YSlow](http://developer.yahoo.com/yslow/), a free tool from Yahoo! that suggests ways to improve website speed, 
* [WebPagetest](http://www.webpagetest.org/) shows a waterfall view of your pages' load performance plus an optimization checklist.
* [Pingdom Tools](http://tools.pingdom.com/): Every test also shows general statistics about the loaded page such as the total number of objects, total load time, and size including all objects.
* [Webpage Analyzer](http://www.websiteoptimization.com/services/analyze/): Their script calculates the size of individual elements and sums up each type of web page component

五月四号, Google 在[Google Analytics加入测量报告][analytics-blog]. 不过这个选项的缺省值是关闭的. 要按照[Google 的说明来设置][analytics].

[teckoo]: http://c2.teckoo.com/blog/website/make-website-geeky-way.html#_1
[gsrc]: http://googlewebmastercentral.blogspot.com/2010/04/using-site-speed-in-web-search-ranking.html
[analytics-blog]: http://analytics.blogspot.com/2011/05/measure-page-load-time-with-site-speed.html
[analytics]: http://www.google.com/support/analyticshelp/bin/answer.py?hl=en&answer=1205784&topic=1120718&utm_source=gablog&utm_medium=blog&utm_campaign=newga-blog&utm_content=sitespeed

