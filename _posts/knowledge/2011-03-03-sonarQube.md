---
layout: post
title: "SonarQube: QA management tool"
excerpt: "An open source code quality management platform."
categories: [knowledge, development]
tags: [development]
---

SonarQube (previous called Sonar) is an open source code quality management
plat form. SonarQube supports more than 20 programming languages including
Java. It internally uses Checkstyle & PMD for code quality; we can add more
custom rules as required.

Features

* Architecture & Design
* Duplications
* UnitTests
* Complexisty
* Potential Bugs
* Coding Rules
* Comments


Getting started

1. download and unzip sonarQube
2. start the server
3. verify in console
4. open URL as http://localhost:9000

Analyze the code in 2 ways. 

1. Using Sonar Runner
2. Using Ant script
    * setup Apache ant in your local env
    * setup required env vars like $PATH, $ANT_HOME, $JAVA_HOME
    * download `sonar-ant-task-2.1.jar` and place it in apache-ant-$ver/lib
    * write an ant script that does the analysis
    * place the above XML in your code base root
    * go to command and navigate to the code base and run ant with above file
    as input
    * `ant -f build.xml`

Resource
=========
 * 
 * 
