---
layout: post
title: "配置Ubuntu LTS 10.04 Lucid desktop"
categories: [blog, programmer]
tags: [programmer]
---

我从Ubuntu 6.06一路用上来, 对Ubuntu 10.04是又爱又恨. 喜欢的原因是配置方便, 启动飞快. 烦恼的地方是它对显卡的支持太糟糕. 我的笔记本用的是很大路的Nvidia 9400M, 结果死机的次数比过去四年里的总和还多一倍不止. 唉. 


 * [setup basement machine](ubuntu-basement.html)
 * [My note on ubuntu](/knowledge/entry/ubuntu.html)

[TOC] 

Configurations
====================
1. check "Additional Drivers"

    * make sure wireless card driver is installed (Broadcom STA wireless driver)
    * remove the beta version of Video card, "activate" (post-release updates)

1. map CAPS LOCK to ESC: Kubuntu/System Settings/Input
Devices/Keyboard/Advanced/check "Configure keyboard options"/"Make Caps Lock an
additional ESC"

1. Disable screen lock: Kubuntu/System Settings/Power Management/Advanced
settings/uncheck "Lock screen on resume"

1. Change Windows theme: Kubuntu/System Settings/Workspace Appearance/choose
"B II preview", this theme saves space in title bars.

1. Change titlebar double-click action: Kubuntu/System Settings/Window
Behavior/Window Behavior/Titlebar Actions/Titlebar double-click: to "Maximize
vertical only"

1. Change Workspace Behavior: Kubuntu/System Settings/Workspace Behavior/
    * do not use "Virtual Desktops"
    * uncheck "Maximize windows by dragging them to the top of the screen"
    * Screen Edges: bottom left, "Show Desktop"

1. copy .profile .bahsrc .bash_profile from backup drive

1. sudo vi /etc/hosts

1. [Setup SSD](/knowledge/entry/ssd.html)

Software Installation
========================
Development
--------------
Vim
  
    sudo aptitude install vim exuberant-ctags

copy .vim* from backup drive

Java

    sudo add-apt-repository ppa:webupd8team/java
    sudo apt-get update
    sudo apt-get install oracle-java7-installer

source control

    sudo aptitude install subversion git

skype

    sudo add-apt-repository \
    "deb http://archive.canonical.com/ $(lsb_release -sc) partner"

    sudo apt-get update && sudo apt-get install skype

python packages

    sudo aptitude install python-virtualenv python-imaging python-psycopg2 \
    python-nose python-django-nose python-twill python-coverage libpq-dev \
    python-dev


node.js 
      sudo aptitude install build-essential curl
      sudo aptitude install libssl-doc libssl-dev 

restricted fonts and programs
-------------------------------
flash, rar, msfonts, codec etc

    sudo aptitude install kubuntu-restricted-extras 
    sudo aptitude install xfonts-wqy


播放.mov and H.264:
--------------------
    sudo aptitude install gstreamer0.10-ffmpeg gstreamer0.10-plugins-bad mplayer vlc

NFS client
---------------

    sudo apt-get install portmap nfs-common

    in Ubuntu 12.04, change to 
    sudo apt-get install rpcbind nfs-common

manually mount

    sudo mount server.mydomain.com:/home/media /home/nas 

auto mount at boot
In this example my `/etc/fstab` was like this:

    server.mydomain.com:/home/media /home/nas nfs rsize=8192,wsize=8192,timeo=14,intr
    192.168.1.7:/home/storage /home/storage nfs rsize=8192,wsize=8192,timeo=14,intr

multimedia applications
-------------------------
Graphics

    sudo aptitude install gimp inkscape

2D animation

    sudo aptitude install synfig

Music apps

    sudo aptitude install rosegarden audacity lilypond

video taking

    sudo aptitude install recordmydesktop recorditnow

    #for KDE recorditnow
    #for GNOME gtk-recordmydesktop

MIDI play
------------

    sudo aptitude install fluidsynth vlc-plugin-fluidsynth tuxguitar-fluidsynth  

Extra for KDE
--------------
`yakuake` is a very nice app to have.


Post-Installation setup
=========================

    sudo addgroup dev
    sudo adduser $USER dev
    sudo chown $USER:dev /opt

    #copy backup /opt folders
    rsync -a /media/data/backup/14z/opt/{adt,db,Django-1.5*,dropbox,javalib,public} /opt/
    cd /opt
    ln -s Django-1.5.* django_src

If virtualenv has problem:
    virtualenv --system-site-packages dev
    wo dev
    pip install html5lib markdown pygments web.py


