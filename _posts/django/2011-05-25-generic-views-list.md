---
layout: post
title: "Class based generic view: ListView in Django 1.3"
excerpt: "Introduce django.views.generic.list.ListView"
categories: [blog, django]
tags: [django]
---

Resources
==========
 * 在[官方教程04里有初步解释](https://docs.djangoproject.com/en/1.3/intro/tutorial04/#use-generic-views-less-code-is-better)
 * [官方文档拿DetailView和ListView说事比较多](https://docs.djangoproject.com/en/1.3/topics/class-based-views/)

Default naming
==================
 * default template called `<app name>/<model name>_list.html`, 可以修改
    `template_name`来指定不同的文件
 * default context variable is `object_list`, 可以通过修改`context_object_name`来取更有意义的名字

演示代码
==========

In `urls.py`

    from django.conf.urls.defaults import *
    from django.contrib.auth.decorators import login_required
    from django.views.generic import DetailView, ListView
    from polls.models import Poll

    urlpatterns = patterns('',
        (r'^$',
            login_required(ListView.as_view(
                queryset=Poll.objects.order_by('-pub_date')[:5],
                context_object_name='latest_poll_list',
                template_name='polls/index.html')),
        )
    )

in `views.py`, you can get parameters from URL, do filtering, and add to context to templates.

    from django.contrib.auth.decorators import login_required
    from django.utils.decorators import method_decorator
    from django.views.generic import ListView
    from books.models import Book

    urlpatterns = patterns('',
        (r'^books/(\w+)/$', PublisherBookListView.as_view()),
    )

    class AcmeBookListView(ListView):

        context_object_name = "book_list"
        template_name = "books/acme_list.html"

        def get_queryset(self):
            publisher = get_object_or_404(Publisher, 
                name__iexact=self.args[0])
            return Book.objects.filter(publisher=publisher)

        def get_context_data(self, **kwargs):
            # Call the base implementation first to get a context
            context = super(PublisherBookListView, self)
                .get_context_data(**kwargs)
            # Add in the publisher
            context['publisher'] = self.publisher
            return context

        @method_decorator(login_required)
        def dispatch(self, *args, **kwargs):
            return super(ProtectedView, self).dispatch(*args, **kwargs)

Related
=========
 * [Generic views in my KB](/knowledge/entry/django-generic-views.html)
 * [TemplateView, RedirectView](/blog/django/generic-views-base.html)
 * [ListView/DetailView](/blog/django/generic-views-list.html)
 * [CreateView/UpdateView/DeleteView](/blog/django/generic-views-edit.html)


[createvw]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/#django.views.generic.base.CreateView
[upvw]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/#django.views.generic.base.UpdateView
[delvw]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/#django.views.generic.base.DeleteView
