---
layout: post
title: "用CSS来实现圆角边框"
excerpt: "Mozilla/Webkit/Opera下的实现方式"
categories: [blog, website]
tags: [website]
---

对一个网页而言, 我很反感有人用很多资源去实现一个圆角边框. 一大堆的table嵌套, 再加上好几个图片. 就为了那几个圆角. 这几个圆圈能不能提高用户体验不好说, 增加服务器负担是肯定的. 

有一天我看Mozilla的网站, 看见他们也用了圆角, 心想看看你们是怎么省资源的. 我不是一个web designer, 学HTML/CSS 全靠看人家的网站. 我爱人说怎么人家看网站都是看中间的内容, 就我总是看边边角角. 我只好承认是有职业病啊.

![](https://sites.google.com/site/c2teckoo/website/images/browsers.png)

不管怎么说, 这回学会的是 

    -moz-border-radius-topright
    -moz-border-radius-bottomright
    -moz-border-radius-bottomleft
    -moz-border-radius-topleft
    -moz-border-radius

于是在很长一段时间里我只用这种方式来定义圆角. 我从来不在乎在IE下会是什么样. 
最近做这个网站时我发现新出的Webkit系浏览器也不支持这些属性. 例如首页在Firefox下是下面这个样子.

![Firefox](https://sites.google.com/site/c2teckoo/website/css-round-border/round-corner-chrome.png)

但在Chrome下就是这个样子.

![Chrome](https://sites.google.com/site/c2teckoo/website/css-round-border/round-corner-firefox.png)

又去查了一下, 发现原来webkit用了自己的属性.

    -webkit-border-top-right-radius
    -webkit-border-bottom-right-radius
    -webkit-border-bottom-left-radius
    -webkit-border-top-left-radius
    -webkit-border-radius

相比之下, 人家Opera做得最好. 他家完全按照W3C的标准实现的. 

    border-top-left-radius
    border-top-right-radius
    border-bottom-left-radius
    border-bottom-right-radius
    border-radius

那么为了在webkit下实现圆角就要在CSS里加上对应的定义. 如我现在的div就要写成

    #homewrap{
      -moz-border-radius:10px;
      -webkit-border-radius:10px;
      border-radius:10px;
    }

等CSS3普及以后这个问题就会得到解决. 到时把这些moz/webkit去掉大概就成了. 
而CSS3到现在还没定稿呢. 这是链接: [W3C's CSS Backgrounds and Borders Module Level 3](http://www.w3.org/TR/css3-background/)

从这事儿得到的体会是

 * 小公司为了争取用户只能跟随标准, 象Opera这样的船小好掉头, 虽然发展晚, 但直接跟最新标准, 没有包袱, 和大公司也有一拼. 这也是中国公司要学习的. 
 * Mozilla和Webkit这样的也赞一下, W3C那些人为了严谨, 一点小事儿也论证好几年. Mozilla和Webkit这样已经有庞大用户群的就"你们先聊, 我先走了", 争取做成事实标准. 
 * 再大点儿的象MS, 根本不管这一套. 反正我家最大, 我比电信, 石油, CNTV都牛. IE6/7/8都慢怎么了? 我还出9呢. 压不死你, 小样儿的.
 

