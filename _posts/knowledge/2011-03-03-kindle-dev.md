---
layout: post
title: "Kindle active content 开发"
categories: [knowledge, development]
tags: [development, agile]
---

Amazon显然还没准备好, KDK已经一年了, 还没放出release版, 又去忽悠tablet去了. Focus, focus, focus呀. 不能看着人家Nook color赚钱就眼红. 不过话又说回来这年头出版业太难了. 也到了有大创新的时候了.  

KDK
=========
 * [Kindle development kit sign-up page][signup]
 * [KDK Java doc][kdk]
 * [FAQ][faq]

使用技巧
============
Kindle 如何阅读中文
---------------------
安装多看对于大多数人来说还是太麻烦. 我平时看中文杂志和网站不多, 看中文书用不着折腾多看. 

1. 先按"Home"键回到主页面
2. 按"Del" 就会看见 search box, (其实按什么键都行)
    ;debugOn <enter>
    ~changelocale zh-CN.utf8 <enter>
    ;debugOff <enter>

3. 重启: 按"Menu"键, 选"Settings", 再按"Menu", 选"Restart". 重启后就应该可以看中文了. 

Shortcuts
----------
  * you can have simple calculations in "search box", like sin(38)
  * alt + top row of letters on keyboard = numbers 1-0
  * alt + shift + G = screenshot = alt + shift + H
  * alt + G = screen refresh
  * alt-t = show time
  * shift + alt + m = play minesweeper
  * press G in minesweeper screen, to play Go
  * alt + home = Kindle Store
  * press "Menu" to check time and free memory

In reading, 

  * alt + B = add/remove bookmarks
  * use arrow keys to set the position, then 
  * shift + Sym = Turn text to speech on and off

Music controls, 

  * alt + space = turn music on and off
  * alt + f = skip to next track
  * alt + p = play/stop

Picture controls,
  * make a folder called "pictures" at the root level of Kindle
  * in Home screen, press alt + z to reload the folders
  * f = full-screen
  * q = zoom in
  * w= zoom out
  * e = reset zoom
  * c = actual size
  * r = rotate
  * nav controller = pan
  * Alt-Shift-0 set current picture as screensaver

Standby/Shutdown/Reset
-----------------------
  * standby: switch power slide within 1 second
  * restart: Alt-Shift-R, or "Home/Menu/Settings/Restart". Alt-Shift-G make screenshot
  * shutdown: switch and hold power slide 7 seconds
  * reset to factory: switch and hold pwer slide 15 seconds, or "Home/Menu/Settings/Reset to factory mode"

debug
---------
click Home/Menu/Settings, then type

  * 411 show diagnostics data
  * 511 run loopback call test
  * 611 diagnostic data service call
  * 126 Lab126 team members
  * ;dumpMessages dump current debug log into the “documents” directory
  * ;debugOn set log level=2 and enable private commands
  * ;debugOff set log level=1 and disable private commands

[signup]: https://kdk.amazon.com/gp/vendor/sign-in?ie=UTF8&originatingURI=/gp/vendor/members/kindlepubs/kdk/home
[kdk]: http://kdk-javadocs.s3.amazonaws.com/index.html
[faq]: https://kdk.amazon.com/gp/vendor/kindlepubs/kdk/get-content?id=200436000
