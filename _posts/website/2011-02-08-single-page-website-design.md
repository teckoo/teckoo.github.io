---
layout: post
title: "单页面网页设计"
excerpt: "single page website design, 单页面设计适合小公司和个人网站, 非常能体现你的不同点. "
categories: [blog, website]
tags: [website]
---


最近看了看Javascript, 忽然喜欢上了单布面布局的网站.　好多事其实没必要做得那么复杂. 单页面的好处是所有的信息都在一个页面上, 对搜索引擎索引信息有好处. 用户看一回后就能把内容存到cache里, 以后再看很容易. 有个缺点是第一次要下载所有的信息, 如果内容太多下载时间过长人家不会等那么久. 

List
=======
下面列几个我收集的链接, 按时间顺序列在下面.　

 * 2009-06-10 <a href="http://www.instantshift.com/2009/06/10/88-single-page-website-designs-for-design-inspiration/">Single Page Website Designs For Design Inspiration – Part I</a>, <a href="http://www.instantshift.com/2010/03/04/70-fresh-and-inspirational-single-page-website-designs/">Part II</a>
 * 2009-10-29 [15 Inspirational Single-Page Websites](http://www.webdo.me/examples-of-single-page-websites/) 这里面列出来的都很棒.　
 * 2010-05-05 [77 Latest Examples Of Creative Single Page Website Designs](http://www.instantshift.com/2010/05/05/77-latest-examples-of-creative-single-page-website-designs/)　I like 25, 34, 43, then 27, 35, 46, 48, 59
 * 2010-07-19 [40 Excellent Examples of Single Page Websites](http://webdesignledger.com/inspiration/40-excellent-examples-of-single-page-websites)
 * 2010-07-27 [Creative Single Page Website Design: 70+ Latest Designs](http://www.instantshift.com/2010/07/27/creative-single-page-website-design-70-latest-designs/)

我把上面的每一个网站都看了一遍, 并且试了试简单的操作, 基本形成了自己的喜好, 总结如下.

我对单页面的理解
=================
 * 文件大小一定不能太大. 如果人家等了好长时间还什么都看不到, 那可能永远也不会再来了. 根据这个原则, 我会把内容压缩在500KB以下, 包括HTML/CSS/Images, 不要Flash/Applet/Silverlight. 可以有第三方Javascirpt, 但一定是异步读取, 不能影响加载时间. 测试标准是象手机的网速下也能只花2秒就能看到全部内容.
    jquery and mootools are OK
 * 如果想做得花哨一点的话可以在布局上花心思, 利用CSS做不规则定位. 这是大网站不会做的东西. 我也不知道大公司为什么不这么做, 原因可能是这样不能充分利用空间. 但是小网站内容不多, 这么做反而有发挥的余地.
 * 用户来源: 一般是从广告, email的链接里点过来看网站的. 让他们搜索和凭记忆找过来几乎不可能. 那他们既然有过来看的兴趣, 就有两点好处:

    1. 他们有心理预期你的网站不会太大, 等待时间多一两秒没关系(不能再长了)
    2. 他心理可能已经有要看的东西了, 你的网站要把人家要找的内容尽快展示出来. 

 * 做网页最主要的目的是联系客户, 应该把电话放到每个页面上. 
 * 不要用mouse-over效果, 这影响手机界面.
 * 尽量不让人scroll down/up, 可以用fixed top or left navigation menu. 我倾向是fixed top menu, 那样比left menu省空间. 

The ones I like
================
 * <http://www.teamviget.com/> irregular layout
 * <http://www.melissahie.com/> this page uses mootools
 * <http://www.salon-lafolie.com/> similar to above, but using jquery.fancybox.js and scrollTo.js>
 * <http://www.farmhousefare.co.uk/> rich images
 * <http://www.jasonreedwebdesign.com/> good for web designers
 * <http://www.alexcohaniuc.com/> for a really simple and few content
 * for my future website:

     * <http://fuelbrandinc.com> elegant color theme
     * <http://www.arcinspirations.com/kobe/> this page is cool, I like jquery flash effect

Simple and clean
-------------------
 * <http://www.sonnylangers.com/>
 * <http://www.catalytic-design.com/>
 * <http://carrotcreative.com/> fixed top menu
 * <http://www.edit-studios.com/> 
    top menu, dynamic quote in the middle, blog to more content

Fancy for inspiration
-----------------------
 * <http://www.contrast.ie/>
 * <http://www.kinoz.com/> pictures are funny, it should provide back-to-up btn at least.
 * <http://jameslaicreative.com/> use jquery.reflection.js
 * <http://www.panic.com/coda/> has a similar effect, pretty icons
 * <http://www.rzmota.com/> fancy, but I am not an apple fan
 * <http://www.engageinteractive.co.uk/> the menu combines two scroll directions for main/sub menu. good on iphone too.
 * <http://www.volll.com/> menu with each slide, cool image background with animation

### Good for photographer 
 * <http://missscha.com/> 一图胜千言. 
 * <http://www.fashionphotographer.it/index.html> 真敢往上码图啊.

