---
layout: post
title: "SonarQube Setup"
excerpt: "sonar install and setup"
categories: [blog, programmer]
tags: [programmer, sonar]
---

SonarQube is an open platform to manage code quality. SonarQube will be used
locally to measure the quality of the code being written. The code quality will
be measured based on 

1. Java code violations. SonarQube has a set of rules that determine the code
violation. These are based upon
  
  * Java coding rules 
  * Static code analysis to identify bugs - based on FindBugs (an open source
  * project). 

2. Unit test coverage. While Eclips gives unit test code coverage measurements,
it does not retain history of the resutls. SonarQube retains history of the
code coverage results, allowing the develpers to focus on improving code
coverage on a regular or daily basis. 

Add a project to SonarQube local server report
=================================================

Maven build goal: `mvn clean install sonar:sonar`

Command shortcut
====================

In Windows, `C:\app\sonarqube-x.x\bin\windows-x86-64\StartSonar.bat`

SonarQube console
====================

http://localhost:9000

Default login: admin/admin


Resource
=============

http://www.sonarqube.org/downloads/
