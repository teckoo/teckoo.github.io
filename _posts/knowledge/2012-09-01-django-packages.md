---
layout: post
title: "Django packages" 
excerpt: "要实现某个特定功能最好先看看有没有现在工具包, 从而避免'reinvent the wheel'. "
categories: [knowledge, django]
tags: [django]
---

Resources
============
每选用一个app/package之前最好自己都要先做一番功课, 不用盲从别人的意见.  
 
 * <http://pypi.python.org/> 这里是首选, 因为最新最全, 还可以选取不同版本号. 缺点是没有评测, 完全依靠作者写文档的水平.

        pip search your_keywords

 * <http://djangopackages.com/> 是一个目录列表, 可以从下载数量间接推测是质量和受欢迎的程度. 没有什么评测, 当然这个见仁见智. 
 * <http://djangosnippets.org>: 这里不是app列表, 但我从这里学了很多技巧, 从而省却安装app的必要. 
 * <http://django-apps.com>, 有简介, 没有象djangopackages那样的功能比较
 * <http://code.djangoproject.com/wiki/DjangoResources> 有一句话简介, 也不是很全, 也不常更新. 


Pagination
============
 * django-pagination: 这个最常用, 使用也很方便.  
 * django-endless-pagination: with twitter-style and digg-style, using ajax
 * django-sorting: 这个可以sort on columns. 还没仔细看, 不知道是sort current data in the table, or do a new query to sort the whole list. Jquery里有一个plug-in, 可以实现sorting, 但那个只是针对当前表格数据的排序. 

Tagging
==========
 * django-tagging: most popular app
 * django-tagging-ext: Adds in new features to supplement django-tagging
 * django-tagging-ng: Enhanced tagging application for Django, based on django-tagging
 * django-tagging-autocomplete
 * django-taggit: django-taggit is a reusable Django application for simple tagging.
 * supertagging: An interface to the Open Calais service for semantic markup.
 * django-antichaos: Django application for easy tag manipulation.It is addon to django-tagging or django-taggin-ng applications. Using jquery, admin interface. Use BeautifulSoup in the example app.

Testing
==========
 * <https://docs.djangoproject.com/en/dev/topics/testing/>
 * nose
 * twill
 * coverage
 * [funkload](http://funkload.nuxeo.org/) for load testing web applications
 * [Selenium](http://seleniumhq.org/) to program UI tests
 * [Token Testing Talk](http://ericholscher.com/blog/2009/sep/8/token-testing-talk-slides-djangocon-2009/) is worth watching. 
 
