---
layout: post
title: "选一款jquery slider plugin做topline"
excerpt: "做首页的featured content"
categories: [blog, website]
tags: [website]
---


最近要给一个网站首页加上"featured content"的功能.
做了一些功课, google search "jquery slider". 得到一大堆如"25 jquery slider/image gallery plugins"的结果. 挑选一番后(此处省略好几个小时), 把范围锁定在下面的5个. 

![](http://webdeveloperplus.com/wp-content/uploads/2009/06/FeaturedContentSliderjQuery.jpg)

挑选条件
----------
1. 我对jquery仅限于是一个使用者, 不会花时间改写javascript程序. 所以只挑拿来就能用的. 
1. 要有auto-play
1. description部分要能加HTML
1. 要能看到列表

候选列表
----------
* [MSN][]: 我最喜欢这个. 它的优点是每一页内部都能单独布局. 
    对于大网站有很多素材的情况下可以呈现更多的内容. 
    我要做的网站没有那么多的内容好展示, 只好略过 
* [Yahoo style][] 教程和演示在同一页. 我喜欢它的mouse-over功能, 还有下面的thumbnail也可以slide, 这样可以放多于一屏的内容. 缺点是没有auto-play. 我也不想花时间加上这个功能.
* [jquery cycle][] ([demo](http://www.django-cms.org/)) 我在别处用过这个. Jquery.cycle和jquery.cycle.trans组合真是很棒. 但是对我这样大傻来说还不够傻瓜. 
* [DesignM][]
    ([demo](http://designm.ag/tutorials/image-rotator-css-jquery))
    简洁, 我都想选这个了, 但是它没有auto-play功能. 更象一个"feature list"
* [webdeveloper+][]
    ([demo](http://demo.webdeveloperplus.com/featured-content-slider/))
    最后定的是这个. 简洁, 还有教程. 有auto-play, 有HTML description. 没有[Yahoo style]那样的mouse-over, 和thumbnail slider, 但那个功能不是必须的.

小结
-------
最后说一下为什么我这样看重auto-play功能. "featured content"本身就是一个页面的重点. 主页上广告闪来闪去那叫讨厌, 而你的重点内容自动播放那叫"重点突出". 
还有网站用户刚来访问时不知道你有什么内容可看, 即使你的列表放在最上面他也不愿意点. 自动播放相当于你主动上前给人家介绍你今天的特色菜是什么. 有图有文字简介, 用户可以在短时间内有个大概了解. 就算人家很快走了, 他也有一个印象是来里扫一下的时间成本不高. 那么下回的可能也会大些.

[MSN]: http://msn.com
[jquery cycle]: http://jquery.malsup.com/cycle/
[Yahoo style]: http://www.micc.unifi.it/ferracani/blog/web-applications/yahoo-style-news-slider-jquery-plugin/ 
[webdeveloper+]: http://webdeveloperplus.com/jquery/featured-content-slider-using-jquery-ui/ 
[DesignM]: http://designm.ag/tutorials/image-rotator-css-jquery

