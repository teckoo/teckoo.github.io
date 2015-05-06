---
layout: post
title: "Virtualenv cheetsheet"
excerpt: "Djang testing basics"
categories: [knowledge, django]
tags: [django]
---

[My blog](/blog/django/virtualenv.html)

Virtualenv
==============

Install package
----------------

    sudo aptitude install python-virtualenv  

Generate an environment
--------------------------

    virtualenv --system-site-packages $site

Install packages
------------------
    pip install html5lib markdown pygments web.py=0.36

## requirements.txt

    pip freeze > requirements.txt
    pip install -r requirements.txt

virtualenvwrapper
========================

Install package

     sudo aptitude install virtualenvwrapper

