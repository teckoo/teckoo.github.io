---
layout: post
title: "最简单的方法进行301重定位"
categories: [blog, website]
tags: [website]
---

我决定把目前的子域名c2.teckoo.com转移到主域名上. 但是还想保留原来的外部链接.
于是要找一个最简单的办法进行域名转移. 

我用的是Apache, 只需要在`/c2`下加一个文件`.htaccess`:

    Redirect 301 / http://teckoo.com/

Done.


更复杂的方法还有

    Options +FollowSymLinks
    RewriteEngine on
    RewriteRule (.*) http://teckoo.com/$1 [R=301,L] 


