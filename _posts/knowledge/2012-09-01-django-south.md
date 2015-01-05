---
layout: post
title: "South"
excerpt: "database migration tool"
categories: [knowledge, django]
tags: [django]
---

Basic usage
=============
Fresh install
-----------------
    python manage.py syncdb --all
    python manage.py migrate --fake

Upgrade
-----------
    python manage.py syncdb --all
    python manage.py migrate --fake

1. instead of `manage.py syncdb`, run 

        manage.py schemamigration --initial $app_name

2. Run the migration using `manage.py migrate`

3. Whenever data models.py changes, to create a new migration file,

        manage.py schemamigration --auto $app_name

   next to apply the new changes.
    
        manage.py migrate $app_name
    
    
For existing projects
-----------------------

    manage.py convert_to_south $app_name
    manage.py schemamigration --auto $app_name
    manage.py migrate $app_name

Installation
================

    pip install South

Then, add `south` to the list of INSTALLED_APPS in your `settings.py`.


Resources
=============
* <http://south.aeracode.org/docs/index.html>
* <http://south.aeracode.org/docs/about.html>
* <http://south.aeracode.org/docs/tutorial/index.html>
* <http://south.aeracode.org/docs/convertinganapp.html#converting-an-app>
* <http://www.djangopro.com/2011/01/django-database-migration-tool-south-explained/>
