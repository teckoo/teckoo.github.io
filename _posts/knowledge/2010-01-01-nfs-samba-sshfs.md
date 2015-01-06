---
layout: post
title: "NFS, samba and sshfs"
excerpt: "setup nfs, samba and sshfs on Ubuntu"
categories: [knowledge, linux]
tags: [linux]
---

到目前为止, NFS还是传输最快的协议. 奇怪的是Ubuntu的network工具里没有这个选项, 和samba太亲了吧. 也难怪, 必竟Windows用户太多了. 

[TOC]

NFS
=========
* <https://help.ubuntu.com/community/SettingUpNFSHowTo>
* <http://ubuntuforums.org/showthread.php?t=249889>

NFS server
---------------
为了其它机器能读取这里的文件

    1. sudo aptitude install nfs-kernel-server nfs-common portmap
    2. edit /etc/exports
        /home/media 192.168.1.0/24(rw,no_root_squash,async)
    3. sudo /etc/init.d/nfs-kernel-server restart

NFS client
-----------

    sudo apt-get install portmap nfs-common

manually mount

    sudo mount server.mydomain.com:/home/media /home/nas 

auto mount at boot, `/etc/fstab` was like this:

    * server.mydomain.com:/home/media /home/nas nfs rsize=8192,wsize=8192,timeo=14,intr


sshfs, fuse
================

    $ apt-get install sshfs 
    $ mkdir ~/remote_machine-opt
    $ chown user_name:user_name /home/user_name/remote_machine-opt
    $ adduser user_name fuse
    $sshfs remote_machine:/home/user_name/opt /home/user_name/remote_machine-opt

    To unmount the directory once your work is done, use the command:
    $fusermount -u /home/user_name/remote_machine-opt

SAMBA
===========

    export USERNAME=your_id_name
    sudo useradd $USERNAME
    sudo smbpasswd -a $USERNAME
    sudo vi /etc/samba/smb.conf

sample `smb.conf` setup:

    [media]
    path = /home/media
    available = yes
    valid users = $smb_user
    force group = dev
    read only = no
    browsable = yes
    public = yes
    writable = yes
    create mode = 0664
    directory mode = 0775


今天刚好碰到中文目录，显示?号，于是加上iocharset=utf8参数就可以了，挂接的方法如下：记录在此，以备后用。

直接用mount命令
mount -t smbfs -o iocharset=utf8,username=Windows共享用户名,password=密码 -l //IP地址/共享文件夹名 Linux中的挂接点

或者通过smbmount来挂接
apt-get install smbfs

smbmount //IP地址/共享文件夹名 /Linux中的挂接点 -o iocharset=utf8,username=用户名,password=密码

    e.g.  sudo smbmount //192.168.1.7/download /tmp/s -o user=$USER

Common
===========
* How do you mount vfat/ntfs/samba filesystems that contain 8-bit encoded characters?

    Options for mount command are following:

        Filesystem type	Option to enable utf-8 support
        ntfs	nls=utf8
        vfat	utf8
        smbfs	iocharset=utf8,codepage=unicode,unicode
