---
layout: post
title: "Linux VPS 命令行检查系统状态"
excerpt: "如何用CLI检查系统状态"
categories: [blog, website]
tags: [website]
---

最近要设置一台Linux VPS, 顺便总结一下在命令行下查看系统状态相关的命令. 

有些需要安装工具包, 如:

    aptitute install mount sysstat htop procinfo

CPU
==================
检查CPU和系统进程状态.

 * top/htop
 * sar

        sar -u 5 5
        sar -w

 * uptime
 * procinfo

Memory/VirtualMemory
====================
检查内存和虚拟内存状态

 * free -m 
 * swapon -s

I/O, network
==============
检查磁盘和网络状态

 * iostat
 * netstat -r -i


