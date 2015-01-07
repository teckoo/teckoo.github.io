---
layout: post
title: "在SSD上安装配置Arch Linux"
excerpt: "Arch Linux installation"
categories: [blog, programmer]
tags: [programmer]
---

最近趁着SSD降价, $65进了一个Kingston 64G SSD. 真是便宜啊. 
去年我是$70进了OCZ Vertex 30G. 摩尔定律不余欺也. 

由于最近听说Ubuntu升级11.04出了很多问题我也就没有跟进, 决定利用这个机会尝试一下Arch Linux. 下面把安装过程写下来, 配置也是挺有意思的. 又有点回到当年折腾Slackware的时候了. 
呵呵. 我总是提醒自己不要老花时间折腾这些配置, 抓紧时间开发是正道. 可到时候还是忍不住玩起来. 
我爱人问我"你老折腾这些有意思么". 我答"有人打枪打炮打电话打游戏, 我不抽烟不喝酒不找女人不打麻将不上网, 有点儿时间仅仅是换个kernel配个server写写code, 够让你放心的了". 
真是白天不懂夜的黑. 不过这几年下来连kernel都不看了, 只剩下server和code了. 
扯远了. 


我先在VirtualBox里试了一下基本安装和openbox, 顺利完成. 不满的地方有两个

 1. Arch Linux不顺带把网卡设置拷下来, 还要自己做
 2. 安装之后比Ubuntu server要大

后来我又在家里的一台式机上装了i686和KDE base, 也还算顺利, 让我对Kubuntu又增加了些好感. 虽说老有人骂Kubuntu的配置不好, 但毕竟人家也是花了功夫配声卡网卡和多媒体了. 不象Arch Linux都要自己撸袖子上.  

 1. pacman 搜索KDE widget包挺费劲
 2. drviers 如video, audio之类的还要自己东查西找的

由于对Arch Linux不熟, 我现在有个问题不知道怎么解决. 
开始我觉得Rolling release这个概念很好, 但是我的机器都很旧, 将来的包有可能要求大内存快CPU. 我的机器不会一直跟着升级的, 那我到一个什么程度停下来呢. 
比如KDE在这一年里从4.4一路升到了4.7, 越来越吃内存, Gnome更甚. 我如果想升到中间某一个版本就很麻烦了. 
在这一点上别的Distro就做得很好. 象我十年旧的笔记本就装了Debian 4.0. Debian把security patch管理得很好. 而Ach Linux就要自己来做这些事, 这可不太好吧. 
所以我目前的想法是到时把吃内存的东西如WM/DE/App都加到IgnorePkg. 只升级低层库. 将来看看这样做的效果怎么样. Ubuntu把security patch都标记出来, 不知道Arch是怎么做的. 


Pre-Installation
====================
因为SSD要做alignment, fdisk在这方面做得不好, 我选了GPT(gdisk). 

SSD partition
---------------
[Arch Wiki SSD](https://wiki.archlinux.org/index.php/Solid_State_Drives#Partition_Alignment)
道理讲得很清楚, 我基本是照着做的. 做了两个小的改动:

 1. sector 1-2047, 不留空白而是做一个partition, set code to 'EF02' (BIOS boot partition). 理由是GRUB 不支持GPT, 要用GRUB 2. 而GRUB 2不推荐MBR. 这个多余的partition刚好可以用来做BIOS boot. 
 2. sector 2048 往后都用来做"/", set code to '8300'. Windows可以放在VirtualBox里, SSD只用一个分区就可以了. `mkfs.ext4 /dev/sda2`. 希望以后不用再重装了, 数据常备份, 重装也不可怕.  

后来测试结果达到255MB/sec. 心里那个美啊, 就象解放区的天. 

Installation
================
安装过程很平静, 只有两点要注意:

 1. 要选Manual partition, 设置root"/", 忽略关于/boot和/swap的warning message
 2. Skip 'Install Bootloader', [安装GRUB 2](https://wiki.archlinux.org/index.php/GRUB2), WIKI里解释得很多, 这里只备份一下用得着的命令:

        aif -p partial-configure-network
        cp /etc/resolv.conf /mnt/etc/resolv.conf
        modprobe dm-mod
        mount -o bind /dev /mnt/dev
        chroot /mnt bash
        pacman-db-upgrade
        pacman -Syy
        pacman -S grub2-bios
        grub_bios-install --boot-directory=/boot --no-floppy \
          --recheck /dev/sda
        cp /usr/share/grub/{unicode.pf2,ascii.pf2} /boot/grub/
        grub-mkconfig -o /boot/grub/grub.cfg



Post-installation
====================
安装之后我测了一下启动时间, 进入到shell居然要20多秒. 我大怒, 前一块OCZ Vertex进到KDE里还只要13秒. 是可忍孰不可忍? 于是动手优化以下两大块

SSD优化
-------
[Arch Wiki on SSD](https://wiki.archlinux.org/index.php/Solid_State_Drives)写得详细, 但不如我的[SSD在Ubuntu下的优化](/knowledge/entry/ssd.html)可操作性好. 

  * /etc/fstab
        
        UUID=xxxx / ext4 defaults,noatime,nodiratime,discard 0 1
        shm  /dev/shm  tmpfs   nodev,nosuid,size=2G   0  0

  * `cat /sys/block/sdX/queue/scheduler`

        noop deadline [cfq]

  * `/etc/default/grub`

        GRUB_CMDLINE_LINUX="elevator=noop rootflags=data=writeback"

  * `/etc/sysctl.conf`

        vm.swappiness=1
        vm.vfs_cache_pressure=50

  * 把 /tmp /var/lock /var/log 都放到tmpfs/ramfs上, 注意这里/var/tmp由于reboot时会用到, 所以不用放在tmpfs上. 
    
        ln -sf /dev/shm /tmp
        ln -sf /run /var/run
        ln -sf /run/lock /var/lock
        ln -sf $HOME/.cache /tmp

优化启动过程
-----------------
[Improve Boot Performance](https://wiki.archlinux.org/index.php/Improve_Boot_Performance), 照着这个效果很明显. 我的情况是配置DHCP花了最长的时间, 所以这里面最关键的一句是 

        DAEMONS=(... @network)


最后测试结果是"**6秒进入shell**", 太幸福了, 继续唱"解放区的天是晴朗的天..."

Setup working environment
===========================
Basic working tools

    pacman -S python2 jdk vim rxvt-unicode w3m screen virtualenv \
        abs base-devel kernel26-headers

Xorg

    pacman -S xorg-server xorg-xinit xorg-utils xorg-server-utils \
        openbox obmenu obconf pypanel wqy-bitmapfont

Video driver

    pacman -S nvidia nvidia-utils nvidia-settings pkg-config

Other settings
=================
我把Arch官方wiki和我的配置文件都放在自己的[Arch in KB](/knowledge/archlinux.html)里了. 

