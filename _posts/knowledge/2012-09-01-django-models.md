---
layout: post
title: "Django models"
excerpt: "models相关事项"
categories: [knowledge, django]
tags: [django]
---

常用的声明
---------------

    from django.db import models
    from django.conf import settings
    from django.contrib.auth.models import User
    from django.contrib.sites.models import Site
    from django.utils.translation import ugettext_lazy as _

    from datetime import datetime
    from tagging.fields import TagField

in class
-------------

    tags = TagField()

Meta
----------

    class Meta:
        verbose_name_plural = _('News')
        ordering = ('-publish_at', 'title')
 
