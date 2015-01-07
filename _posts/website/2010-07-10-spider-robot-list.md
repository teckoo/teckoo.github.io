---
layout: post
title: "各大spider/robot/蜘蛛列表和一个小经验"
excerpt: "几个主要搜索引擎蜘蛛的字符串特征, favicon.ico, robots.txt "
categories: [blog, website]
tags: [website]
---


列几个主要搜索引擎蜘蛛的字符串特征.  我注意Baidu的搜索次序和其它两个不太一样. Google和Yahoo都是先"/"然后是"/robots.txt", Baidu是"/robots.txt"然后是"/". 如果大家都照规矩来尊重robots.txt的话, 就没什么区别. 

 * Google: 
    "GET /robots.txt HTTP/1.1" 301 0 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
 * Baidu:
    "GET / HTTP/1.1" 200 4087 "-" "Baiduspider+(+http://www.baidu.com/search/spider.htm)"
 * Yahoo:
    "GET /robots.txt HTTP/1.0" 301 0 "-" "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"

![](https://sites.google.com/site/c2teckoo/website/images/seo_spider.jpg)

小经验
=======
如果有人象我这样同时用Nginx和Apache进行分级配置, 有一点值得注意. 我在log里看到这样的信息:

    In nginx_access.log,
    [28/Jun/2010:17:34:40 +0000] "GET /favicon.ico HTTP/1.1" 301 0 ... 
    [28/Jun/2010:17:34:40 +0000] "GET /favicon.ico/ HTTP/1.1" 404 1179 ...

    In apache2_access.log
    [28/Jun/2010:17:34:40 +0000] "GET /favicon.ico HTTP/1.0" 301 ...
    [28/Jun/2010:17:34:40 +0000] "GET /favicon.ico/ HTTP/1.0" 404 ...

"favicon.ico"和"robots.txt"本来是可有可无的东西, 但即便还没有做, 也就应该放一个空文件. 这样的话Nginx可以直接把空文件传回去交差了. 否则它会把这个request传给Apache. Apache会空忙一番, 最后还得传一个404错误文件. 这不折腾嘛. 咱的原则是**"简单, 再简单一些"**.

如果定义`favicon.ico`的话, nginx sample:

      location /favicon.ico {
            alias /path/to/your_folder/favicon.ico;
      }

如果不定义, 但不想让错误信息出现在log文件里, 

      location = /favicon.ico {
          return 204;
          access_log     off;
          log_not_found  off;
      }

要不要做sitemap.xml? 至少从我的观察来看, google是看的, baidu就不管. 访问量小的时候, 大家都不看. 所以当网站刚起步时如果没有时间和精力做每个细节的话, sitemap.xml可以先放放.

没什么可多提的了. 有时候看spider一天来好几回也挺不好意思的. 哥没的给你吃啊, 您请回吧.


