---
layout: post
title: "Arch Linux"
categories: [knowledge, linux]
tags: [linux]
---


Before Installation
====================
If UNetBootin can not do the job, try this basic command:

    dd if=archlinux2010.iso of=/dev/sdb bs=4M

 * archlinux2010.iso 是你下载的文件
 * 假定`/dev/sdb`是你的USB drive. 注意可别弄错了
 * 用`dd`时不要`mount /dev/sdb`

Post Installation
==================
 * edit /etc/pacman.d/mirror.list, choose the repositories close to you, 
    put the default one at the last line
 * `pacman -Syu` to update database
 * add a user to a group: `gpasswd -a your_username audio`

pacman
----------
 * search: `pacman -Ss string1 string2`
 * install: `pacman -S string`
 * remove old version: `pacman -Sc`
 * keep a major version, edit `/etc/pacman.conf`.
    This will upgrade 9.0.3 to 9.0.4, but won't do 9.0.x to 9.1.x

        IgnorePkg = postgresql nginx
 * install packages from AUR
    1. get tar.gz source file, make sure there is PKGBUILD in the folder
    2. `makepkg`
    3. `pacman -U your_compiled_package.tar.gz`

Setup
=========
Xorg
----

    pacman -S xorg-server xorg-xinit xorg-utils xorg-server-utils \
        openbox obmenu obconf pypanel wqy-bitmapfont

Nvidia
--------

    pacman -S nvidia nvidia-utils nvidia-settings pkg-config

run

    nvidia-xconfig

    #For multiple monitors on a single card
    nvidia-xconfig --twinview

    under section Device:
    Option "NoLogo" "1"

    under section Monitor: 
    Option "DPMS" "1"

Under 64 bit systems, installing `lib32-nvidia-utils` that corresponds to the same version installed for the 64 bit driver fixes the issue. 

openbox
------------
Start from a shell:

    xinit /usr/bin/openbox-session

Automatic login to console
---------------------------
[Use mingetty](https://wiki.archlinux.org/index.php/Automatic_login_to_virtual_console)


Start X at boot
-----------------
~/.bash_profile

    if [[ ! $DISPLAY && $(tty) = /dev/tty1 ]]; then
      exec startx
      # Could use xinit instead of startx
      #exec xinit -- /usr/bin/X -nolisten tcp vt7
    fi

Wireless
-----------
[Arch wiki](https://wiki.archlinux.org/index.php/Wireless_Setup)

    lspci | grep -i net
    Mine is Broadcom4312 0x14e4 0x4315
    lspci -n | grep 14e4

 * compile Broadcom-wl for 4312
    
        pacman -S kernel26-headers
        get source code
        makepkg
        pacman -U the_compiled_pkg.tar.gz
 
 * test the module

        modprobe wl
        #if it works, add it to /etc/rc.conf MODULES=(... wl ...)
        # use iwconfig to find the wireless card wlan0 or eth1
        iwconfig
        ip link set eth1 up
        iwlist eth1 scan
        iwconfig eth1 essid "MyNet"
        dhcpcd eth1
        # use ifconfig to verify IP address

 * Automatic way

        pacman -S dhclient wicd wicd-gtk|wicd-kde

 * run `wicd-client` [Wicd wiki](https://wiki.archlinux.org/index.php/Wicd)

Key bindings 
-------------------

    pacman -S xbindkeys

    in .xinitrc
    xbindkeys &

run `xbindkeys -k` to show to a window to show a map, then add 
the following lines to `.xbindkeysrc`

    # Increase volume
    "amixer set Master playback 1+"
        m:0x0 + c:123
        XF86AudioRaiseVolume

    # Decrease volume
    "amixer set Master playback 1-"
        m:0x0 + c:122
        XF86AudioLowerVolume

    # Toggle mute
    "amixer set Master toggle"
        m:0x0 + c:121
        XF86AudioMute 

ibus
--------
Follow [Arch wiki ibus](https://wiki.archlinux.org/index.php/Ibus). 
For wnwb, follow [万能五笔和极点五笔](/blog/programmer/wubi.html).


webcam
-----------
Follow [Arch wiki webcam](https://wiki.archlinux.org/index.php/Webcam).

Mplayer: 

    mplayer tv:// -tv driver=v4l2:width=640:height=480:device=/dev/video0 \
        -fps 15 -vf screenshot

USB mouse
-----------
我的机器上外接USB 鼠标在电池状态下不工作, 解决如下:

    lsusb #找到mouse的USBID, 0461:4d15
    sudo vi /etc/laptop-mode/conf.d/usb-autosusp
    AUTOSUSPEND_USBID_BLACKLIST="0461:4d15"

