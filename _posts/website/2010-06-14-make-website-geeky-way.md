---
layout: post
title: "以程序员的方式建博客网站"
excerpt: "把每篇网文当成一个程序来写, 介绍这个网站是怎么做出来的"
categories: [blog, website]
tags: [website]
---


关于网站的设计在[这里][design]提过了. 这篇讲具体实现.

花了两天时间, 摸索了一个Django程序, 并用它改写这个网站. 下面分享一下自己的学习经验.
我以前做网站用的是一个Django CMS程序, 其实现在给别人做简单的网站还是用那个. 如今想起给自己做一个网站, 那么可以趁机尝试一些新的东西了. 这次我用的叫[Hyde][]. 

Hyde是一个静态网站生成程序. 也就是说您现在看到每个页面都是一个简单的静态HTML页面. 有人该不屑了, "都什么年代了, 还用静态HTML?" 各人喜好不同, 我先说说静态HTML的好处, 再讲怎么制作出这个网站, 然后讲讲这么做的优缺点.


静态网页的优点
==============
当下有一个被滥用的词叫"用户体验", 俺现在不再想多提这个了. 其实静态HTML有很多好处, 现在很多大型网站都在想怎么进行静态化. 

对用户
-------
针对我这个网站的用户特点, 他们来这里不会是看各种花哨的网页效果, 所以内容显示越快越好. Google有一个说法是从多少秒之后, 每多等一秒, 用户数量就会流失10% (对不起我记不清具体数字了, 也懒得找). 
我读过一个文章说 2001年用户打开一个页面可以等待8秒, 2008年能等5秒, 2009年这个数字降到2秒. 
为了能尽快地显示内容, 静态网页是显示最快的方式了吧. 对于一众多小网站而言, 用户有太多的理由离开, 所以要尽快上菜. 另一方面, 人家不喜欢也还可以快点离开, 对大家都好是吧. 

对自己
-------
 * 省钱: 用户发过来一个http request, www server (Apache/Nginx)返回一个HTML就完了. 不经过PHP/PYTHON/JAVA这些动态模块. 这样最省资源. 用dedicated server的可以转到VPS, 用VPS的可以降到share hosting. 程序员很穷的, 省下钱来也好买点儿书, 或者穿着长衫站在柜台前喝点小酒.
 * 省时间: 不知道其他程序员有什么体会, 我反正不喜欢开个浏览器, 等着Javascript打开一个小小的编辑框然后在里面敲字儿. 还得指望着网站能象Google/Yahoo/MS auto save. 我喜欢随时开个term, 用vi写两句, 有功夫的时候再上传.
 * 数据维护: 对于程序员来说, 网站经常是代码/数据两个部分. 进行备份的话往往两个都要做. 要是能把代码和数据一起备份不是很好吗? 
 另外代码能做version control, 把自己写的文章也进行version control才够geeky. 
 * 专注: 我最早用的是自己写的BLOG程序, 没事总想着DEBUG. 后来用人家写的CMS, 又想着再加个功能吧. 总之经常是写一会儿就想着改程序去了. 现在好了, 不用浏览器, 只需要用vim写字儿, 然后编译上传, 再也不操心功能上的事了.

对地球
------
在整个网页生成过程中, 这种方式消耗资源最少. 这个才叫把低碳减排真正做到了实处. 呵呵. 

综合以上的优点, 我决定把这个网站做成静态的, 减少不需要的功能, 踏踏实实地写好内容. 

初始化
=========
建一个目录:

    $make myblog
    $cd myblog
    $path/to/hyde/hyde.py --init

修改模板
=========
所有要改动的文件都在`layout`里面. 实际上我只改了几个文件:

    layout/skeleton/_base.html
    layout/skeleton/_categorylisting.html
    layout/skeleton/_atom.xml
    layout/_post.html
    layout/_splash.html

做评论 comments
================
评论部分外包给[Disqus](http://disqus.com).

RSS
=========
这部分外包给[Google feedburner](http://feedburner.google.com)

上传和在本地浏览时遇到的问题
=============================
略

settings里的一些参数
======================
略

这种实现方式的缺点
=====================
 * `hyde`每次都要扫描编译目录下所有的文件. 当你的文件数目变大以后, 很多文件没有被改动也要被"过堂". 
 如果你每做一些改动进行编译时就不得不多等一些时间. 
 对此`hyde`的开发者提出的对策是开一个后台进程对目录进行监控并编译. 
 这相当于用资源换时间, 是对本地资源的一种浪费. 
 * 是不是有点儿过于geeky了? 
   1. 非程序员用这个工具有难度,
   1. 一般程序员也要对markup, template, rsync, version control有了解才能体会到它的优点,
   1. search不太方便, 无论是本地还是在服务器端. 本地就用grep,
   网站就外包给google search. 

Notes
=========
 * Dr. Jekyll and Mr. Hyde ( 化身博士和海德先生)
https://a248.e.akamai.net/camo.github.com/d45f789576b29ce361c9bce96eb98028267b63f4/687474703a2f2f696d672e736b697463682e636f6d2f32303039303230362d713236746d65736e6563726a776932626a6d65636d31717969352e706e67
 * https://github.com/blog/342-hyde-the-python-static-site-generator

[design]: /blog/2010/06/c2-website-design.html
[Hyde]: http://github.com/lakshmivyas/hyde/
[wiki]: http://wiki.github.com/lakshmivyas/hyde/

