---
layout: post
title: "Set transparency"
excerpt: "set transparency for various applications, including urxvt"
categories: [knowledge, linux]
tags: [linux]
---

这里我们不讨论Compiz/KDE那些复杂的window manager.
看看象openbox/fluxbox这些轻量级的window manager怎么实现透明效果.

Any applications
=================
Ubuntu:
  
    sudo aptitude install xcompmgr transset-df

Arch Linux:    

    sudo pacman -S xcompmgr transset-df

如果用openbox, 在`.config/openbox/autostart.sh`里加上

    xcompmgr -c -C &

可以用`transset-df -i 0.8`来用鼠标点一个窗口来看看效果, 找到自己喜爱的参数. 
然后在`rc.xml/menu.xml`来设置. 

    sh -c 'urxvt &amp; sleep .1s &amp;&amp; transset-df -a 0.95'

Urxvt
=======
我一般只喜欢把term做成半透明, 因为写程序时要看一下被盖住的窗口里面的内容.
其它application没有这个必要. Urxvt的设置还有点复杂, 我试了好长一段时间才成功. 

`.Xdefaults`

    # RXVT-unicode setting
    # Next three lines are for transparency
    URxvt*transparent:          True
    URxvt*depth:                32
    URxvt*background: rgba:0000/0000/0000/dddd

其中有两个参数可能会导致失败

    #URxvt.tintColor:            grey
    URxvt*inheritPixmap:        False

`URxvt*inheritPixmap:True`时, urxvt是把wallpaper来贴到背景里, 并不是真正的透明,
因为你看不到被盖住的窗口. 你可以试试这个参数, 看看自己喜欢哪个.
如果还有问题的话, 直接试这个命令, 

    urxvt -depth 32 -bg rgba:0000/0000/0000/4444 -fg "[80]pink"

如果错误信息是`unknown or malformed option.`,
有可能是urxvt编译时没有打开这个选项,
或根本就是你装的是`rxvt-unicode-lite`而不是`rxvt-unicode`.

Gnome terminal
=================
 * in menu 'Edit', click 'Current Profile...'
 * choose 'Effects' tab,
 * check 'Transparent background'

Konsole
=========
KDE 做得更花哨一些, 还可以指定每个TAB用不同的trans background

 * in menu 'Settings', click 'Edit current profile...'
 * in 'Appearance' tab, choose a scheme e.g. 'Linux Colors', click 'Edit'
 * set 'Background transparency', e.g. 20%

