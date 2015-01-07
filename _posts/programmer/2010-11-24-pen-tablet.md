---
layout: post
title: "Pen tablet 绘图板的安装"
excerpt: "pen tablet在Ubuntu 10.04下的安装 "
categories: [blog, programmer]
tags: [programmer]
---

这个星期放假, 光陪着孩子玩了. 顺便买了一个画图板(Genius pen tablet), 结果又是我玩得比孩子们还高兴. 下面写一下安装的方法. 我买的是大路货, Ubuntu 10.04下安装已经非常容易了. 不需要任何折腾, 装上就能画画了.


<https://help.ubuntu.com/community/TabletSetupWizardpen>

先加源
    
    ppa:doctormo/xorg-wizardpen 

    sudo add-apt-repository ppa:doctormo/xorg-wizardpen

装驱动

    sudo apt-get update
    sudo apt-get install xserver-xorg-input-wizardpen
    
重启机器, 就成功了. 

软件我用的是`mypaint` 和 `inkscape`. 
    

