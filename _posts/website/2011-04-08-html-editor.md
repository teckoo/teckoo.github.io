---
layout: post
title: "Linux下的免费HTML编辑器"
excerpt: "Free HTML editor under Linux. 列举了两个不错的HTML editor, 简单分析了一下为什么Linux下没有好的编辑器.  "
categories: [blog, website]
tags: [website]
---


我最早学HTML时就用的是Windows Notepad. 后来是盗版的再后来是买学生版的Dreamweaver, 这是我觉得Windows下最好用的HTML editor了. 一直没有机会摸索Linux下的HTML编辑器.
又过了几年Dreamweaver的东家Macromedia被Adobe收购以后我就不再用它家的产品了. 
一个原因是我一直不喜欢Adobe, 主要是不喜欢Flash, 厌屋及乌, 它家的其它产品我也不用. 另一个原因是那时我已经基本上转到Solaris和Linux下干活了, Windows下的程序用得越来越少. 

我平时绝大多数情况下都是用vim来写网页的. Vim写HTML/CSS/Javascript都很方便, 但有时我定位Div layout时就觉得不太方便.  作为补充, 下面列几个Ubuntu Linux下的免费HTML编辑器. 

 * [Kompozer][kompozer], 一开始我还以为是KDE app呢, 其实还是基于gtk的. 其实真基于KDE的是[Quanta Plus][qplus], 我大概是在快十年前用过吧, 那时真是难用啊. 这些editor真让我伤不起, 后来我就痛下决心用Emacs和vi写网页了. 
 
    最近试了试[Kompozer][kompozer], 优点是方便, 速度快, 已经很象Dreamweaver当年的情形了, 但是还不是一个量级的东西. 呵呵. 

 * [Bulefish][bluefish] auto-completion做得很好. 它更多强调的是code editor. 但我已经习惯了vim做code editor了. 没有更多需要改用这个. 但它的确是个给程序员用的优秀编辑器.

个人感想: Linux下的HTML开发环境还是不适合web designer, 连个象样的drag&drop都还没做好. 大概是开发者实在无法兼顾gtk/qt造成的. 现有的这几个编辑器的优点是CSS的属性很全, 用来当作CSS reference倒是很不错. 

为什么会有这种现象? 我胡乱联想了一下, 可能有以下几个原因:

1. 绝大多数web designer都在Windows和Mac OS上面工作. 他们所依靠的Photoshop/Dreamweaver之类的软件在这两个平台上已经做得很好了, 他们没有转向Linux的需求. 

1. 在Linux上折腾的都是些程序员, 他们的工作多是些提供MVC里的View这部分. 现在的网页生成技术让程序员只操心每一页生成的一小部分数据, 而不用管整个页面的情况. 整体的布局/字体/颜色之类都由designer在template/css里搞定. 对于每一小块的更新来说, vim做得很好, 而且比那些GUI editor做得更好. GUI editor所擅长的"所见即所得"在这里派不上用场, 还是要直接修改代码. 

1. 那些所谓的"所见即所得"的HTML editor不靠谱, 关键是其"所见"不是真正的"所得", 改完了参数后还是要到真正的浏览器上来检查, 那还不如vim+firefox来得方便. 

总结以上原因, Linux下没什么优秀的HTML GUI editor是因为没有需求, 没有市场, 没有动力, 现有的产品已经很好地满足当前使用者的需求. 迎合新的使用者难度也很大. 所以从短期看也看不到有什么killer app出现的可能.  

[kompozer]: http://kompozer.sourceforge.net/
[qplus]: http://quanta.kdewebdev.org/
[bluefish]: http://bluefish.openoffice.nl/

