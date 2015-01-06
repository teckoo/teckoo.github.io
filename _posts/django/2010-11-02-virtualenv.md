---
layout: post
title: "Virtualenv: 一个Python环境管理工具"
excerpt: "virtual在python的角色相当于Java里的Maven/ant. 它可以建立一个相对独立的虚拟环境, 你可以有指定工具库的版本而不受其它安装的影响."
categories: [blog, django]
tags: [django]
---

[virtualenv][virtualenv]是一个python工具. 它可以创建一个独立的python环境. 这样做的好处是你的python程序运行在这个环境里, 不受其它的
python library的版本问题影响. 比如说你想用最新的Django 1.3开发新的项目, 但是现有的Pinax 0.7只支持到Django 1.1. 传统的做法是在环境变量`PYTHONPATH`里明确地规定程序包的目录. 这么做没什么不好, 而且很清晰. 问题出在以后如果你有需要写别的程序时调用了新的版本, 或者是别的程序员升级了包, 很容易把你的程序也搞垮. 

其实我对virtualenv一开始没什么兴趣. 为什么呢? 
首先我认为virtualenv也不是完美的解决方案, 它只是一个以空间换时间的方法. 可能是受了ant/maven的影响, 我觉得那样更省事一些. 
更主要的原因是我很懒, 又不肯学新的东西. 因为学新的东西是要时间的, 
学了一样的新知识后还没怎么用更新的东西就又出来了. 这不是学了白学嘛. 
所以我把这些工具分成两类. 一种是可以解决新的问题, 另一种是改进当前的解决方法. 
我对前一种的态度是没碰到那类问题就不仔细学习, 了解一下就好. 对后一种就要小心一些, 因为这类方法往往有可能存在过度设计的问题, 也就是说理论上它有可能解决得更好一些, 但学习的时间成本更高, 复杂度也更高, 有可能会得不偿失. 所以我会先看看它是不是足够简单, 否则就不学. 

virtualenv充分利用了pip. 对于pip, 我以前读James Bennett的文章 "[On packaging](http://www.b-list.org/weblog/2008/dec/14/packaging/)" 时就不大以为然. 虽然我一直特尊敬James, 他的博客曾是我学Django的最大帮助, 
但这篇文章我觉得只是个人喜好. pip和setuptools相比带来的好处实在有限. 

但是virtualenv比pip更进了一步. 它的定位相当于Java里的Maven
和最新的ant. 我以前对版本问题不是很在意, 因为我自己只是一个人写程序, 也一直用最新的程序版本. 但是最近的Django1.2出来以后出现了版本不兼容的问题, 而且我用了不少别人的库, 这些程序也出现了版本不兼容的问题. 我在开发机器上测试新的东西出现问题还能接受, 但是到了production环境上就不行了. 全面升级时总是麻烦事. 所以我觉得现在是到了用virtualenv的时候了. 

Installation
=============
要是你的Linux repository已经有了`virtualenv`, 那当然可以直接安装, 例如Ubuntu 10.04,

	sudo aptitude install python-virtualenv

要是没有, 如Ubuntu 8.04, 

    sudo easy_install virtualenv

    Installing virtualenv script to /usr/bin
    Installed /usr/lib/python2.5/site-packages/virtualenv-1.5.1-py2.5.egg

如果在share hosting上, 要麻烦一些:

    1. #need to setup python in your own folder
    under your home folder, 
    mkdir -p python2.6/{bin,include,share,lib/python2.6/site-packages}
    2. # get virtualenv package
    wget http://pypi.python.org/packages/source/v/virtualenv/virtualenv-1.6.4.tar.gz
    tar zxvf virtualenv-1.6.4.tar.gz 
    cd virtualenv-1.6.4
    /usr/local/bin/python2.6 setup.py install \
      --prefix=/home/your_user_name/python2.6/
    

Setup
========
创建一个工作环境`mysite`
--------------------------
  # for virtualenv 1.4 (Ubuntu 10.04)
	virtualenv mysite
  # for virtualenv 1.8 and above
	virtualenv --system-site-packages mysite

	cd mysite
	source bin/activate

这时你就发现多了一个环境变量`VIRTUAL_ENV`. virtualenv还修改了`$PATH`, 增加了`bin/python`, 这样以后的pythonpath就优先指定到当前目录环境里. 
virtualenv还在`ENV/bin`里安装了`pip`. 以后再安装新的python包就都装到这下面了, 如`pip install html5lib`. 

清除工作环境
--------------------------

    virtualenv --clear mysite


相关工具
=========
## alias        
一开始我觉得virtualenvwrapper没什么用, 基本上是个overkill.
但是因为alias不支持参数, 我一直用下面这个alias+script, 

define an alias

     #!/bin/bash
     # in .bashrc, add
     alias wo="source workon"

in ~/bin/workon

    echo "work on $1"
    source ~/sites/$1/bin/activate

## virtualenvwrapper

[virtualenvwrapper](http://www.doughellmann.com/projects/virtualenvwrapper/) 的作用是管理多个不同的虚拟环境, 让创建/删除/拷贝/切换不同工作环境更加方便一些.

* installation: `sudo pip install virtualenvwrapper`
  

* [virtualenvwrapper doc](http://www.doughellmann.com/docs/virtualenvwrapper/)
* quick tips:

        export WORKON_HOME=~/sites
        # post-install 
        source /usr/local/bin/virtualenvwrapper.sh
        mkvirtualenv env1
        mkvirtualenv env2

        # list all available env
        workon

        # switch to an env
        workon hyde

        setvirtualenvproject # set project for current dir

        cdvirtualenv  # go to virtualenv folder
        lssitepackages # list current installed packages
        cdsitepackages # cd site-packages folder directly

        workon env1
        echo $VIRTUAL_ENV

        deactivate # exit current env
        
[Tutorial on Youtube](http://www.youtube.com/watch?v=UcbUXq0wd-8&list=UUd-EhXGbXSozuzsAAdPIn3A)

[My notes](/knowledge/entry/virtualenv.html)

[virtualenv]: http://www.virtualenv.org/
