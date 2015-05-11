---
layout: post
title: "Setup PyCharm for Django project"
categories: [blog, django]
tags: [django, pycharm]
---


Virtualenv
------------

 * 如果你已经有了一个设置好的virtualenv, 就要在PyCharm里指定
    "Settings/Project: ${your_project}/Project Intepreter" 
    "Add Local"
 * 若要在PyCharm里面运行, "Run/Edit configurations.../"

   1. Run broswer: http://127.0.0.1:8000
   2. Environment variables: DJANGO_SETTINGS_MODULE=${your_project}.settings
   3. Working directory: absolute path to your project.
