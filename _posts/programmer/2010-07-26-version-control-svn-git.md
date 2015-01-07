---
layout: post
title: "Version Control"
excerpt: "which one do you need, svn, git or mercurial?"
categories: [blog, programmer]
tags: [programmer]
---

在计算机世界的"old golden time"里面好象只有美好回忆, 从来没什么完美软件. 
一个软件限于当时的软硬件及网络环境, 总是在实现上有各种限制. 然后就是不停地升级, 
或者人在相同的概念上开发出新的软件. Version control software就是这样一个例子.
我最早接触version control还是用的是MS SourceSafe. 从那里我学会了
check-in/check-out的概念. 后来离开了微软的盗版世界, 我就不记得SourceSafe了. 
另一个原因是我听说微软内部都不用SourceSafe, 你自己都做不到"eating your own dog food", 还指望有什么忠实用户么?

[TOC]

[常用命令](/knowledge/entry/version-control.html)

Subversion (SVN)
==================
 * [The online manual](http://svnbook.red-bean.com/en/1.4/index.html)
 * [Subversion Tips for CVS Users](http://www.onlamp.com/pub/a/onlamp/2004/08/19/subversiontips.html)
 * [Eclipse plugin](http://subclipse.tigris.org/install.html)

The big three in DVCS
======================
 * [Git][git]
 * [Mercurial][hg]
 * [Bazaar][bzr]

[Linus Torvalds on git at Google talk](http://www.youtube.com/watch?v=4XpnKHJAok8)
这家伙也忒不厚道了. 

"I hate it with a passion (CVS)."

"If there are any Subversion or CVS users out there in the audience, you might want to leave."

"I see Subversion as the most pointless project ever started."

"I'm not going force you to switch over to decentralized, I just call you ugly and stupid!"

"...the designers of Subversion were complete morons". Strong opinions, that's me! [...] Your stupid!.

"Merging in Subversion is a complete disaster! The Subversion people kind of acknowledge this and they have a plan and their plan sucks too. It is incredible how stupid these people are!"

"I would never ever trust Google to maintain my sourcecode for me. I'm sorry. You're just not that trustworthy. (Google code uses Subversion)". The talk was held at Google :) 

[git]: http://git.or.cz/
[hg]: http://www.selenic.com/mercurial/
[bzr]: http://bazaar-vcs.org/

关于CVS的回忆
===============
来到美国后最早用的是`CVS`. 那时用的是系里CVS server, 到现在只记得一个字儿--"难". 
其实`CVS`的评价不应该这么低. 只是那时候几个原因都赶上了. 

 * 俺刚到美国学计算机, 英文还不灵光, 大篇的技术文档都看不懂
 * 刚学Solaris还不怎么会用, 系里管制也很多, 从微软的GUI到命令行CLI真是"由奢返简难"啊
 * 自己学Linux也是有一搭无一搭, 连个server都玩不转, 整天`kernel panic`, 都顾不上在自己的机器上整个CVS.

后来买了这本书啃了几天, 基本命令就都会使了. 学了`CVS`对我的帮助是我有了一些基本概念. 以后的诸多版本控制软件都拿`CVS`当靶子, 主要是SVN, 我知道人家说得到底是怎么回事, 有没有道理. 到后来SVN成为别人的靶子也是同样一回事.

  <iframe src="http://rcm.amazon.com/e/cm?lt1=_blank&bc1=000000&IS2=1&npa=1&bg1=464444&fc1=E3E3E3&lc1=EBDD5E&t=c2-teckoo-content-20&o=1&p=8&l=as1&m=amazon&f=ifr&md=10FE9736YVPPT7A0FBG2&asins=0596527039" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

资源
---------
 * [CVS commands](http://ximbiot.com/cvs/wiki/index.php?title=CVS--Concurrent_Versions_System_v1.12.12.1:_Guide_to_CVS_commands)


