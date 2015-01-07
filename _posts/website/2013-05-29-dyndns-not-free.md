---
layout: post
title: "Free Dyndns hostservice"
categories: [blog, website]
tags: [website]
---

不知从什么时候起 dyndns.org
不再给新用户免费的服务了。今天我意识到家有的hostname联不上，就到网站上看了一下。发现原有的用户其实还是有两个免费host
service的。只要重新加上就可以了。贴图如下：

点击"Add Hostname"

<img src="http://farm3.staticflickr.com/2808/8878749121_489a689ab8_z.jpg"
width="640" height="528" alt="dyndns-account">

注意到"Hostname" 不是在PRO Package里面。
<img src="http://farm4.staticflickr.com/3732/8879368674_dd337e86f7_z.jpg" width="640" height="310" alt="dyndns-service">

如果以后Hostname也收费就要考虑交费或转用其它服务了。 

 * DynDNS.com  - See http://www.dyndns.com for details on obtaining a free
account.

 * Hammernode  - See http://www.hn.org for details on obtaining a free account.

 * Zoneedit    - See http://www.zoneedit.com for details.

 * EasyDNS     - See http://www.easydns.com for details.

 * NameCheap   - See http://www.namecheap.com for details

 * ConCont     - See http://www.dydns.za.net for details

 * DnsPark     - See http://www.dnspark.com for details

 * DslReports  - See http://www.dslreports.com for details

 * Sitelutions - see http://www.sitelutions.com for details

 * Loopia      - See http://www.loopia.se for details



DYN Update client
=====================

[ddclient](http://dyn.com/support/clients/linux/ddclient/)

inadyn

    inadyn --username $USER --password ******  --update_period_sec 86400 \
      --alias yoursite.dyndns.org


