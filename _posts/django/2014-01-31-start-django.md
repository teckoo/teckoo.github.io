---
layout: post
title: "Start a real Django application"
categories: [blog, django]
tags: [django, heroku]
---

Basic commands
================

1. create a virtual environment first. 

      cd $HOME/sites
      virtualenv --system-site-packages $prj_name
      workon $prj_name
      cd $HOME/workspace/
      django-admin startproject $prj_name
      ./manage.py startapp $app_name

2. create initial tables. `migrate` looks for `INSTALLED_APPS` setting and
create necessary tables. 

      ./manage.py migrate

3. if you want to view the changes only before taking any migration action.
  
      ./manage.py makemigrations $modified_app_name

4. to make the actual changes to migration files.

      ./manage.py sqlmigrate $modified_app_name 0001

5. make all migrations to the database.  

      ./manage.py migrate

6. use shell command. 

      ./manage.py shell 

Resource
=========
[How to deploy to Heroku](http://www.deploydjango.com/django_project_structure/index.html#step-3-heroku-best-practices)

[Deploy Django Book](http://www.deploydjango.com/index.html)

