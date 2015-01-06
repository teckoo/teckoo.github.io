---
layout: post
title: "Handle static files in Django 1.3"
excerpt: "Dajngo 1.3 learns from django-staticfiles to handle static files such as css/image/javascript"
categories: [blog, django]
tags: [django]
---

Django 在ver 1.3里把坊间流行的'staticfiles'加到了发行版里, 
原因是要把static files 进一步和media分开. 
原来的目的是把静态文件用高速的www server如nginx处理, 减少Django的开销.
这个目的已经达到了. 后来发现用户上传的文件
会和系统原有的静态文件混在一起, 当文件多了以后不好进行load balance.
所以就把media进一步分成media(实际上是user media)和static. 

[Django dev doc](https://docs.djangoproject.com/en/dev/howto/static-files/)

Before Django 1.3, you can do things like this:

    if settings.DEBUG:
        urlpatterns+= patterns('',
            url(r'^media/(?P<path>.*)$', 'django.views.static.serve', 
                {'document_root': settings.MEDIA_ROOT, 'show_indexes': True})
            )

Now you can this:

 * in `settings.py`, 

        # step 1:
        #you can specify, 'static' is the default value?
        STATIC_URL='/static/'
        STATIC_ROOT='/absolute/path/to/your_site/static/'
        STATICFILES_DIRS=(
            os.path.join(PROJECT_DIR, 'site_media'),
        ) 

        # step 2:
        INSTALLED_APPS=(
            ...
            'django.contrib.staticfiles',
        )

        # step 4:
        TEMPLATE_CONTEXT_PROCESSORS = (
            'django.core.context_processors.media',
            'django.core.context_processors.static',
        )


 * in `urls.py`

        # step 5:
        if settings.DEBUG:
          from django.contrib.staticfiles.urls import staticfiles_urlpatterns
          urlpatterns += staticfiles_urlpatterns()

 * you can define `STATICFILES_DIRS` similar to `TEMPLATE_DIRS`

 * in each app, you can put its own static files under `static` folder

 * run `manage collectstatic` to put all found static files to `STATIC_ROOT`

这里面有一个地方把我绊了一下, 在用`manage.py runserver`时, dev
server并不查找`STATIC_ROOT`. 这点我开始没有理解,
结果遇到的错误是每个小app里图片之类的文件能看到, 但整体的css却看不到.
后来才注意到人家明确说了`static_root`主要是为了让`manage
collectstatic`准备文件用的, 应该把总的文件放在另一个地方.
于是解决的办法之一是再建一个目录`site_media`(向pinax学习),
然后在`STATICFILES_DIRS`里定义文件位置. 
另一个办法是把`media`目录也放在这里. 总之感觉这里Django做得很奇怪,
或者说设计得不好. 也许以后会被改过. 

