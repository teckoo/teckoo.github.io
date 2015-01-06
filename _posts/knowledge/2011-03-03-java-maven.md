---
layout: post
title: "Maven"
excerpt: "Maven basic operations"
categories: [knowledge, development]
tags: [development]
---

[Blog entry](/blog/programmer/learning-maven.html)里有详细的安装有使用说明.

Installation
=============
 * go to http://maven.apache.org to download `apache-maven-x.x.x-bin.tar.gz`
 * install Maven to `/opt`

        export mvn=apache-maven-3.0.3
        tar zxf $mvn-bin.tar.gz
        mv $mvn /opt

 * edit `.bashrc`,

        export JAVA_HOME=/opt/jdk1.6.0_30
        export M2_HOME=/opt/apache-maven-3.0.3
        export M2=$M2_HOME/bin
        export MAVEN_OPTS="-Xms256m -Xmx512m"

        export PATH=.:$HOME/bin:$M2:$PATH

 * `source .bashrc`, then test `mvn --version`
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

运行测试,

    java -cp  target/maven-example-1.0-SNAPSHOT.jar \
      com.teckoo.app.App

Basic operations
==================
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

