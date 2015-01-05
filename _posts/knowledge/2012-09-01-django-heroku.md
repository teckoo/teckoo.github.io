---
layout: post
title: "Heroku"
excerpt: "free Django cloud hosting platform"
categories: [knowledge, django]
tags: [django]
---

Setup
=========
Before doing anything, install
[Heroku toolbelt](https://toolbelt.herokuapp.com/)

Login in Heroku CLI

    heroku login

Click "Create an app", give it a unique name, e.g. teckoo-dev

    git clone git@heroku.com:teckoo-dev.git -o heroku

Deploy to Heroku

    git push heroku master
    git push heroku yourbranch:master

To add PostgreSQL add-on

choose 'White' in Heroku Postgres (no monthly cost)

    heroku addons:add heroku-postgresql


Django at Heroku
==================
[Getting
started](https://devcenter.heroku.com/articles/getting-started-with-django)


    workon wcec
    pip install -r requirements.txt
        
settings.py

    import dj_database_url
    DATABASES = {'default':
    dj_database_url.config(default='postgres://foo:bar@localhost:5432/db')}

    or 

    import dj_database_url
    DATABASES['default'] = dj_database_url.config()

Use the Heroku CLI’s config, config:set, config:get and config:unset to manage
your config vars:

    heroku config:set GITHUB_USERNAME=joesmith

Cookbook
==============
## Add an external submodule

    git submodule add https://github.com/myusername/FooBar lib/FooBar

## run manage.py command

    heroku run python manage.py syncdb

## reset PostgreSQL database

    heroku pg:reset DATABASE_URL

## set environment variables

Use the Heroku CLI

 * `heroku config --app $your_app_name` ##list all env vars
 * `heroku config:set
   DATABASE_URL=postgres://user_name:pwd@hostname:port/dbname`
 * `config:get DATABASE_URL`
 * `config:unset $your_env_var`

## collectstatic

    heroku run python manage.py collectstatic --noinput

Resource 
==============

* [Heroku website](http://heroku.com)
* [Getting Started with Django on
Heroku](https://devcenter.heroku.com/articles/getting-started-with-django)



