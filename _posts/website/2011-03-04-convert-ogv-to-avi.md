---
layout: post
title: "Convert ogv to avi"
excerpt: "How to convert ogv to avi. 如何把ovg格式转换成avi. "
categories: [blog, website]
tags: [website]
---


今天小小地郁闷了一下.　昨天晚上做了一个很短的视频上传到youtube上,　结果三分钟的视频被当成两个小时,　以超长为由被据了. 原因大概是我用的是ogv格式,　youtube 支持得不好.　以前Google得哈着Apple支持H.264. 现在两贼想摸同一个口袋了,　Google宣布推WebM(号称是开源,　其实是自己主导), Microsoft也跟着起哄架秧子.　这下连ogv也跟着倒霉.　

![youtube does not recognize ogv format](/media/content/youtube-not-decode-ogv.png)

解决方法是上传之前自己先转换成比较通用的格式.　查了一下,　还是`ffmpeg`和`mencoder`两个工具好使.

最简单的命令
-----------------

    ffmpeg -i input.ogv output.avi

调整参数
----------

    mencoder -idx input.ogv -ovc lavc -oac mp3lame -o output.avi     

GUI clients
------------
 * winff  (for ffmpeg)
 * devede (for mencoder)


