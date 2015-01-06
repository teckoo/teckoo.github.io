---
layout: post
title: "关于Django中文设置的一些简单问题"
excerpt: "我学Django时遇到最早有关中文的问题"
categories: [blog, django]
tags: [django]
---

我在学Django时因为读的都是官方文档和英文博客, 没遇到中文的问题, 后来开始写第一个中文网站时就碰到了语言问题. 
其实不难, 但也花时间试了几次才解决的. 写在这儿给自己提个醒, 初学者看了也省些时间.

[TOC]

终极解决之道
================
**使用UTF-8编码**

不要纠缠于GB2312, GB18030之类的问题, 徒增烦恼.

Python源代码
================
如果要在Python源代码中写中文注释或变量内容里出现中文的话, 需要在Python文件的第一行进行声明, 加下这面这行代码:

    # -*- coding: utf-8 -*-

我接触Python是从1.x开始, 真正用是从2.x. 从Python3.0开始String才是真正的unicode. 
而在Python2.x中如果出现非ASCII字符就必须加上UTF-8的声明. 

文件的保存方式
================
无论你是用UltraEdit, Notepad+还是其它文本编辑器, 都要将文件编码设定为UNICODE. 
例如我用vim, 相应的, 我在.vimrc里也加上了一行

    set encoding=utf-8

这样我就不用操心源代码中的中文问题了. 

HTML template
==================
在HTML template中任何地方都可以直接写中文而不会出任何问题. 为了正确显示中文, 
在`head`要加上一行

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

我发现`charset`用gb2312和utf-8会影响浏览器显示各个单元的间距. 
如果转换以前的网页, 就要多加点小心看看有什么地方要修改间距. 
这是个苦活, 没法写test. 所以我很尊重前端设计师和测试人员. 这活儿我做不来, 会哭的.

Database
================
sqlite
------------
很简单, 用`manage.py syncdb`直接生成就行了

PostgreSQL
------------
`sudo -u postgres createdb -E utf8 database_name `

MySQL
------------
`CREATE DATABASE database_name DEFAULT CHARACTER SET utf8;`

settings.py
==============
在官方文档里并没有明确写明简体中文的代号是什么, 我看locale里生成的目录名是zh_CN, 我就跟着用了. 而且好象在ver 0.96里还管用. 到了ver 1.x里就不灵了. 后来才发现应该是

    LANGUAGE_CODE = 'zh-cn'

在 'startproject' 生成的缺省settings.py里, 提到在这里有列表

    http://www.i18nguy.com/unicode/language-identifiers.html

我没去看过, 也没机会用到其它语种.
