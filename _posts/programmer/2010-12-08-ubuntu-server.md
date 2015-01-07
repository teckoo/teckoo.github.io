---
layout: post
title: "安装Ubuntu LTS 10.04 Lucid Server"
categories: [blog, programmer]
tags: [programmer]
---

 * 小抄 - [Ubuntu setup](/knowledge/entry/ubuntu.html)
 * [配置Ubuntu LTS 10.04 desktop](./ubuntu-desktop.html)里记录了如何设置一个工作环境.
 * [配置Ubuntu LTS 10.04 basement](./ubuntu-basement.html)里记录了如何设置一个备份环境.

subversion
==============
这是我升级到10.04以上的主要原因. SVN 1.6以上才基本解决了merge时会出现的复杂情况. 

    sudo aptitude install subversion

vim
==========================================
到哪儿都得带个编辑器

    sudo aptitude install vim ctags

sshd
==========================================
为了远程登录

    sudo aptitude install openssh-server

java
=======

    sudo add-apt-repository "deb http://archive.canonical.com/ lucid partner"
    sudo aptitude update
    sudo aptitude install sun-java6-jdk sun-java6-plugin sun-java6-fonts ant

如果出错说没有 add-apt-repository, 还要先装 `aptitude install python-software-properties`. 我就遇到这个问题. 还有一回连`aptitude`都没有. 

编译环境
==========

    sudo aptitude install git-core mercurial build-essential rsync


