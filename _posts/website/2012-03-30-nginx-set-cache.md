---
layout: post
title: "Nginx set cache control"
excerpt: "在Nginx里如何对media files设置cache."
categories: [blog, website]
tags: [website]
---

对于HTML页面, 我们可以在<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />里加上META信息设置缓存. 例如页面缓存保留一天: 

    <meta http-equiv="Refresh" content="86400">

那如果要对静态文件如JS/CSS有图像文件进行设置就要在
web server里做文章. 在Nginx里可以如下设置

	location ~*\.(js|css|png|jpg|jpeg|gif|ico)$ {
		expires 7d;	
	}

`reload`后, 用`curl -I URL`来检查一下.
看`Expires` and `Cache-Control`是否被设置成功.

如果得到`404`错误, 有可能是在其他地方定义了`location /{root ...}`,
对应修改是要明确定义出一个`root`, 如

	root path/to/your/root/dir;
	
	location ~*\.(js|css|png|jpg|jpeg|gif|ico)$ {
		expires 7d;	
	}


