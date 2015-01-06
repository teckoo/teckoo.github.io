---
layout: post
title: "TemplateView and RedirectView in Django 1.3"
excerpt: "Introduce django.views.generic.base.TemplateView and django.views.generic.base.RedirectView in Django 1.3"
categories: [blog, django]
tags: [django]
---

TemplateView
========================
目的很简单: 给定一个URL和一些简单参数, [TemplateView][tempvw]返回一个静态页面. 如果没有其它的CMS, 这是一个快速返回静态页面的方法. 例如: 你有一个"Terms of Service"页面, 里面的内容是固定的. 最好的办法应该是在WWW server一级就返回. 如果非要在Django这一层实现的话, 可以这样做:

in `urls.py`, 

    # urls.py
    from django.conf.urls.defaults import *
    from some_app.viems import TosView

    urlpatterns = patterns('',
        (r'^tos/', TosViewView.as_view()),
    )

How to specify template name
------------------------------
in `urls.py`

    from django.conf.urls.defaults import *
    from django.views.generic import TemplateView

    urlpatterns = patterns('',
        (r'^about/', TemplateView.as_view(template_name="about.html")),
    )

in class view definition

    # some_app/views.py
    from django.views.generic import TemplateView

    class AboutView(TemplateView):
        template_name = "about.html"

How to pass parameters
-----------------------
in `urls.py`

    (r'^template/simple/(?P<foo>\w+)/$',
        TemplateView.as_view(template_name='generic_views/about.html')),

在`about.html`里就可以得到`foo`的值. 如果想在view里添加更多的变量, 

    class CustomTemplateView(generic.TemplateView):
        def get_context_data(self, **kwargs):
            return {
                'params': kwargs,
                'key': 'value'
            }

    (r'^template/custom/(?P<foo>\w+)/$',
        views.CustomTemplateView.as_view(
            template_name='generic_views/about.html')),

这样在`about.html`可以得到`foo`, `key`, `params`的值. 

RedirectView
=====================
[RedirectView][rv]一般两个作用:

1. 用户访问一个URL, 然后被服务器重定向到另一个URL
2. 处理完一个POST request之后, 需要返回一个redirect

        #simple case
        from django.views.generic import RedirectView
        (r'^source_url/$', RedirectView.as_view(url='dest_url')),

        # with args
        (r'^source_url/(?P<foo>\w+)/$', RedirectView.as_view(
            url='dest_url', query_string=True)),
        In response['Location'], the parameter will be there like 
        dest_url/<foo>.

        # you can also change the URL content
        (r'^source_url/200/$', RedirectView.as_view(
            url='dest_url/%(object_id)d/', object_id=100)),

Related
=========
 * [Generic views in my KB](/knowledge/entry/django-generic-views.html)
 * [TemplateView, RedirectView](/blog/django/generic-views-base.html)
 * [ListView/DetailView](/blog/django/generic-views-list.html)
 * [CreateView/UpdateView/DeleteView](/blog/django/generic-views-edit.html)



[tempvw]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/#django.views.generic.base.TemplateView
[rv]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/#django.views.generic.base.RedirectView
