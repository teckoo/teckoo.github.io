---
layout: post
title: "Admin related in Django"
categories: [knowledge, django]
tags: [django]
---

为什么会有admin
-----------------
Django最早是将model和admin放在一起的. 优点是简洁, 缺点是当然是代码绑定在一起了. 
没想到开源以后, admin受到大家热烈欢迎, 人们纷纷给admin提出各种期望. 这时候问题就来了. 
不同的人对admin的要求不一样. 如果你想自定义admin, 势必要改造整个类定义, 这么做就不够DRY. 
所以就出现了目前的方法, 多写点代码, 你就能可着劲地造了. 

HowTo
============
admin.py
----------
先声明要管理的model, 写一个python文件起名叫"admin.py"

    from models import News
    from django.contrib import admin

还要定义`admin class`

    class NewsAdmin(admin.ModelAdmin):
        list_display=('title', 'publish_at', 'expire_at', 'is_published')
        list_filter =('title', 'publish_at', 'expire_at', 'is_published')

        # user custom form
        form=SomeModelForm
        inlines=[SomeOhterModelInline]

最后还要注册

    admin.site.register(News, NewsAdmin)

settings.py
----------------
    INSTALLED_APPS = (
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.admin',
        )

urls.py
------------
    from django.conf.urls.defaults import *
    from django.contrib import admin

    admin.autodiscover()

    urlpatterns = patterns('',
        (r'^admin/', include(admin.site.urls)),
        )

如果要对同一个model实现不同的admin功能, 例如给不同用户看不同的数据和界面, 可以注册不同的admin.py, 如:

    # urls.py
    from django.conf.urls.defaults import *
    from myproject.admin import basic_site, advanced_site

    urlpatterns = patterns('',
        (r'^basic-admin/', include(basic_site.urls)),
        (r'^advanced-admin/', include(advanced_site.urls)),
    )

template
----------
这个可用于在public view里加上进入admin的链接. 

    { % url admin:app_mode_[add|change|delete] object_pk % }

Resources
============
 * [admin site](http://docs.djangoproject.com/en/1.3/ref/contrib/admin/)
