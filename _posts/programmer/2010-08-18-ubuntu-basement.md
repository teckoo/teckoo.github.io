---
layout: post
title: "安装Ubuntu LTS 10.04 Lucid basement 之后要做的事"
categories: [blog, programmer]
tags: [programmer]
---

先说明这是一台放在地下室的机器, 就是为了下载和存放数据文件, 
虽然是整天开着, 不是真正的服务器, 我管它叫basement machine (类似于别人叫的下载机).

 * 小抄 - [Ubuntu setup](/knowledge/entry/ubuntu.html)
 * [配置Ubuntu LTS 10.04 desktop](./ubuntu-desktop.html)里记录了如何设置一个工作环境.

![](http://www.myextralife.com/strips/05-03-2007.jpg)

mplayer, ffmpeg 为了命令行播放和转换格式
==========================================
为了用cron播放作息表

    sudo aptitude install mplayer ffmpeg libavcodec-extra-52

vim
==========================================
到哪儿都得带个编辑器

    sudo aptitude install vim-gtk vim-runtime vim-python ctags

sshd
==========================================
为了远程登录

    sudo aptitude install openssh-server

amule
==========================================
为了下载文件

    sudo aptitude install amule amule-gnome-support amule-utils-gui amule-daemon

    sudo vi /etc/default/amule-daemon
    AMULED_USER="c2"
    AMULED_HOME="/home/c2"

    sudo /etc/init.d/amule-daemon start

NFS server
==========================================
为了其它机器能读取这里的文件

    1. sudo aptitude install nfs-kernel-server nfs-common portmap
    2. edit /etc/exports
        /home/media 192.168.1.0/24(rw,no_root_squash,async)
    3. sudo /etc/init.d/nfs-kernel-server restart

NX server
==========================================
远程图形界面登录

    sudo dpkg -i nxclient_3.x_i386.deb
        sudo chmod 755 /usr/lib/cups/backend/ipp
    sudo dpkg -i nxnode_3.x_i386.deb
        /usr/NX/scripts/setup/nxnode --nxprintsetup <pathname>
         to specify the location of the CUPS root path. 
    sudo dpkg -i nxserver_3.x_i386.deb

    /usr/NX/etc/node.cfg
    SSHDPort = "2022"
    SSHAuthorizedKeys = ".ssh/authorized_keys"

    /usr/NX/etc/server.cfg 
    SSHDPort = "2022"
    SSHDAuthPort = "2022"

    /etc/ssh/sshd_config 
    AllowUsers situ nx

如果碰到了错误"The NX service is not available or NX access was disabled on host"

    /usr/NX/bin/nxserver --status 

    NX> 900 Connecting to server ... 
    NX> 204 Authentication to NX server failed. 
    NX> 110 NX Server is stopped. 
    NX> 999 Bye. 

这种情况下需要重新启动nxserver

    /usr/NX/bin/nxserver --start

UPnP/DLNA
==========================================
目前还没有电视, NFS 就足够了. 这个还没配置.

    ushare  - lightweight UPnP A/V Media Server
    
    minidlna is very good a very low resource light weight app
    http://sourceforge.net/projects/minidlna/

我选择装了`minidlan`, 从上面链接下载文件以后, 解压运行

    指定目录
    media_dir=/home/storage/media
    media_dir=/home/media
    path/to/minidlna -f $path/to/minidlna.conf
    
然后在运行UPnP/DLNA的客户端就应该能看到目录了. 

SAMBA
==========
SAMBA一般不是我的首选, 因为它的速度比NFS慢. 它的好处是为和Windows系统分享文件而设计, Windows客户端不用做任何设置. 而且很多media player device也在硬件上已经实现支持SAMBA, 所以在这里咱先记下设置. 

    sudo aptitude install samba
    sudo smbpasswd -a $USERNAME
    sudo gedit /etc/samba/smb.conf
    [media]
    path = /home/$USERNAME/your_shared_folder
    available = yes
    valid users = $USERNAME
    read only = no
    browsable = yes
    public = yes
    writable = yes

上面是最简单的设置, 让目录和文件可以从客房端直接读写. 改完配置文件后, 重启SAMBA.

    sudo restart smbd

重启后, 在SERVER上测试一下    

    sudo testparm

测试成功后, 就可以用一台客户机读写SAMBA目录了.


