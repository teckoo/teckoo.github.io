---
layout: post
title: "Django 开始一个新项目"
excerpt: "startproject and startapp"
categories: [knowledge, django]
tags: [django]
---

设置环境
==============
 1. 添加路径(add path to your shell) `django-admin.py`
 
        ln -s /opt/django_src/django/bin/django-admin.py .

 2. 增加`bash complete`功能, in your ~/.bashrc, add

        #enble django bash completion
        if [ -f /opt/django_src/extras/django_bash_completion ]; then
           . /opt/django_src/extras/django_bash_completion
        fi

开始一个新项目
=================

start a new project
---------------------

    /opt/django_src/django/bin/django-admin.py startproject django-headline 

start a new application 
------------------------

    
    django-admin.py startproject django-headline 
    
    or 

    manage.py startapp headline

