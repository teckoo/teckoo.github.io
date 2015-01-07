---
layout: post
title: "Maven, a java project management tool"
excerpt: "学习Maven, 一个Java项目管理工具, 包括安装及使用."
categories: [blog, programmer]
tags: [programmer]
---

[Knowledge Base](/knowledge/entry/java-maven.html)里有常用命令. 

在很长的时间里我都不愿意学Maven. 原因是我很喜欢用Ant的简洁, 快速.
象`configure/make/make install`一样简单易懂. 但是Ant是一个build tool,
它在deployment/version/branches方面做得不够好. 说白了,
Maven在这些方面做得好一些, 但是learning cost也高. 我现在对两个都没有强烈的偏向,
不会主动把ant转化成maven, 那样花的功夫可能还更多些. 

Installation
=============
通常我把常用的开发工具安装到`/opt`. 这样不会受到系统升级的影响. 

 * download `apache-maven-x.x.x-bin.tar.gz`
 * install Maven to `/opt`

        export mvn=apache-maven-3.0.3
        tar zxf $mvn-bin.tar.gz
        mv $mvn /opt

 * edit `.bashrc`, 注意Eclipse 3.6在Java 7下安装m2e会出错, 使用Java
 6就不会有问题. 原因是Java 7里改变了Array.sort()的实现. Eclipse
 3.7.1里做出了相应的改动. 所以可以升级Eclipse到3.7.1, 或是把Java降到6.   

        export JAVA_HOME=/opt/jdk1.6.0_30
        export M2_HOME=/opt/apache-maven-3.0.3
        export M2=$M2_HOME/bin
        export MAVEN_OPTS="-Xms256m -Xmx512m"

        export PATH=.:$HOME/bin:$M2:$PATH

 * 测试: `source .bashrc`, then test `mvn --version`
 * 可以通过'Eclipse Marketplace'安装'Maven Integration for Eclipse', 或者直接装Eclipse plug-in, in 'Help/Install new features', add

        http://download.eclipse.org/technology/m2e/releases

First project
===============
首先建立一个project, `dir_name = maven-example`, `package_name=com.teckoo.app`. 

    mvn archetype:generate -DgroupId=com.teckoo.app \
       -DartifactId=maven-example
       -DarchetypeArtifactId=maven-archetype-quickstart \
       -DinteractiveMode=false

Build the project, 

    mvn package

当你第一次运行这个命令时, 会发现Maven狂下载了许多工具包.
但这些工具包不在你的project里. 我在安装目录里`/opt/apache-maven`里没看到.
实际上它们被装在用户目录里`~/.m2/repository`. 


运行测试,

    java -cp  target/maven-example-1.0-SNAPSHOT.jar \
      com.teckoo.app.App

Basic operations
==================
这些是最常用的命令. 

 * `mvn compile` 相当于`ant compile | make`
 * `mvn package` 编译并生成jar
 * `mvn clean` 清理当前环境
 * `mvn test` junit 测试
 * `mvn integration-test` 集成测试
 * `mvn install` 部署到local repository
 * `mvn deploy` | `mvn site-deploy` | `mvn tomcat:deploy` 部署到远程环境
 * `mvn site` 生成文档

Resource      
===========   
 * [Official site](http://maven.apache.org/index.html)




