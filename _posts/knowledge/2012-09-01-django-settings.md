---
layout: post
title: "Django settings"
categories: [knowledge, django]
tags: [django]
---

用`manage.py startapp`建起来的`app`缺了不少常用的代码. 下面可以copy/paste

    PROJECT_DIR = os.path.dirname(__file__)
    MEDIA_ROOT = os.path.join(PROJECT_DIR, 'media/')

    ADMINS = (
     ('c2', 'c2.programmer@email-domain.com'),
    )

    TEMPLATE_CONTEXT_PROCESSORS = (
        "django.core.context_processors.auth",
        "django.core.context_processors.i18n",
        "django.core.context_processors.debug",
        "django.core.context_processors.request",
        "django.core.context_processors.media",
    )

    INTERNAL_IPS = ('127.0.0.1',)

    MIDDLEWARE_CLASSES = (

        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.locale.LocaleMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.middleware.doc.XViewMiddleware',

    )

    INSTALLED_APPS = (
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.sites',
        'django.contrib.admin',

        'tagging',
    )

    try:
        from local_settings import *
    except ImportError:
        pass


