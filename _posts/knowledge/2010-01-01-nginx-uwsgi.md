---
layout: post
title: "Nginx+uWSGI下配置多个virutalenv环境"
excerpt: "VPS里Nginx+uWSGI下配置多个站点, 每个server有自己独立的virtualenv"
categories: [knowledge, linux]
tags: [linux, nginx]
---

调试 Nginx+uWSGI的时候碰到了很多的麻烦, 可真调试成功以后才发现原来文件这么简单. 
可是很多参数都是要亲自试才行. "纸上得来终觉浅"啊. 

这里列举了两种情况, 一种是只运行一个站点.
我最开始只想在自己的VPS上运行这种情况. 但是后来有朋友想借用一下空间,
而且负载很轻. 
于是我就查了一下如何用一套Nginx+uWSGI支持两个站点. 


One master website
=====================
Nginx.conf
------------

    server {
            listen       80;
            server_name  localhost;

            access_log /var/log/nginx/access.log;
            error_log /var/log/nginx/error.log;

            location / {
               include        uwsgi_params;
               uwsgi_pass     127.0.0.1:9001;
               uwsgi_param UWSGI_PYHOME /home/c2/sites/myvirtualenv;
               uwsgi_param UWSGI_CHDIR /home/c2/workspace/blog-app;
               uwsgi_param UWSGI_SCRIPT conf.dispatch;
            }
        }

uwsgi
--------

     NAME=uwsgi
     DESC=uwsgi
     HOME=/home/c2/sites/myvirtualenv
     PYTHONPATH=/home/c2/sites/myvirtualenv/conf
     MODULE=dispatch

     test -x $DAEMON || exit 0

     DAEMON_OPTS="-s 127.0.0.1:9001 -M 4 -t 30 -A 4 -p 4 
       -d /var/log/nginx/uwsgi.log 
       --pythonpath $PYTHONPATH 
       --virtualenv $HOME
       --module $MODULE"


Single Nginx+uWSGI, multiple websites
======================================
nginx.conf
------------

    server {
            listen       80;
            server_name  site1;

            access_log /var/log/nginx/site1_access.log;
            error_log /var/log/nginx/site1_error.log;

            location / {
               include        uwsgi_params;
               uwsgi_pass     127.0.0.1:9001;
               uwsgi_param UWSGI_PYHOME /home/c2/sites/site1;
               uwsgi_param UWSGI_CHDIR /home/c2/workspace/blog-app;
               uwsgi_param UWSGI_SCRIPT conf.dispatch;
            }
        }

    server {
            listen       80;
            server_name  site2;

            access_log /var/log/nginx/site2_access.log;
            error_log /var/log/nginx/site2_error.log;

            location / {
               include        uwsgi_params;
               uwsgi_pass     127.0.0.1:9001;
               uwsgi_param UWSGI_PYHOME /home/c2/sites/site2;
               uwsgi_param UWSGI_CHDIR /home/c2/workspace/another-prj;
               uwsgi_param UWSGI_SCRIPT conf.dispatch;
            }
        }

uwsgi
--------
所有的配置都体现在`nginx.conf`里, uwsgi就变得很简单.
但我有一个没弄明白的问题是如何设置log文件. 目前所有的log都放在一起了. 

`/etc/init.d/uwsgi`

    LOG=/var/log/nginx/uwsgi.log
    NAME=uwsgi
    DESC=uwsgi

    test -x $DAEMON || exit 0

    DAEMON_OPTS="-s 127.0.0.1:9001 -M 4 -t 30 -A 4 -p 4 
      --vhost --no-site -d $LOG"




conf/dispatch.py
=====================

    import sys,os
    import django.core.handlers.wsgi

    sys.path.append('/home/c2/workspace')
    sys.path.append('/home/c2/workspace/django_test')

    os.environ['DJANGO_SETTINGS_MODULE'] = 'django_test.settings'

    application = django.core.handlers.wsgi.WSGIHandler()

