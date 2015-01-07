---
layout: post
title: "Tweak UHost U1A Android TV"
categories: [blog, programmer]
tags: [programmer]
---

    adb install pps.apk
    error: insufficient permissions for device

    adb kill-server

    sudo -s
    export PATH=/opt/android-sdk-linux/platform-tools/:$PATH
    adb start-server
    adb install YouTube_4.1.47.apk
    adb install pps.apk


