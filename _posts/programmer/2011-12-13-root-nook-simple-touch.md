---
layout: post
title: "Root Nook Simple Touch"
excerpt: "Root Nook Simple Touch, export annotations, install Android apps"
categories: [blog, programmer]
tags: [programmer]
---

http://www.hi-pda.com/forum/viewthread.php?tid=884843

sudo fdisk -l

sudo umount /dev/sdb1

sudo dd if=noogie.img of=/dev/sdb bs=1M
Note: not 'sdb1', but 'sdb'

"Rooted Forever"

`userdata/data/com.bn.nook.reader.activities/databases/{annotations.db,bookmarks.db}`

## install superuser and su ##

    adb connect yourNSTip
    adb install Superuser.apk
    adb push su /data/local/
    adb shell
    cd /system/bin
    mount -o remount,rw /dev/block/mmcblk0p5 /system
    cat /data/local/su > su
    chmod 6755 su
    reboot

## install busybox ##

    cd C:/android-sdk-windows/platform-tools
    adb connect yourNSTip
    adb shell
    su
    mount -o remount,rw /dev/block/mmcblk0p5 /system
    exit
    exit
    adb push busybox /data/local
    adb shell
    su
    cd /system
    mkdir /system/xbin
    cd /data/local
    chmod 755 busybox
    /data/local/busybox cp /data/local/busybox /system/xbin/busybox
    cd /system/xbin
    chmod 755 busybox
    ./busybox --install -s /system/xbin
    rm /data/local/busybox
    reboot


## remove apk ##
    su
    mount -o remount,rw /dev/block/mmcblk0p5 /system
    rm -r /system/app/[AppName].apk
    mount -o remount,ro /dev/block/mmcblk0p5 /system

## side load apps ##
    cd C:/android-sdk-windows/platform-tools
    adb connect yourNSTip
    adb shell
    mount -o rw,remount -t ext2 /dev/block/mmcblk0p5 /system
    exit
    adb pull /data/data/com.android.providers.settings/databases/settings.db settings.db
    sqlite3 settings.db "update secure set value=1 where name='install_non_market_apps';"
    adb push settings.db /data/data/com.android.providers.settings/databases/settings.db

## install 3rd-parth apk ##
    cd /tmp
    /opt/android-sdk-linux/platform-tools/adb connect 192.168.1.9
    /opt/android-sdk-linux/platform-tools/adb install  

## install Nooktouchtools ##
[Link in xda](http://forum.xda-developers.com/showthread.php?t=1289894)

    adb connec NookIP
    adb shell
    su
    mount -o remount,rw /dev/block/mmcblk0p5 /system
    exit
    exit
    adb push android.policy.jar /system/framework/
    adb push services.jar /system/framework/

## turn off auto upgrade ##
    cd C:/android-sdk-windows/platform-tools
    adb connect yourNSTip
    adb pull /data/data/com.bn.devicemanager/databases/devicemanager.db devicemanager.db
    sqlite3 devicemanager.db
    sqlite> update registry set value='manual' where name='com.bn.device.fota.mode';
    sqlite> .q
    adb push devicemanager.db /data/data/com.bn.devicemanager/databases/devicemanager.db
    adb reboot


