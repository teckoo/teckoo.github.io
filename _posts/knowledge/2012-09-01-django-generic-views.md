---
layout: post
title: "Django generic views"
excerpt: "Django 1.3 引入了class based generic views. 这简化了generic view, 也增加了灵活性. 我这也算是一个中文教程和演示吧, 例子不多, 但我都自己实践过."
categories: [knowledge, django]
tags: [django]
---

我个人觉得Django里的generic views和generic field是其最大亮点. 这两个特点很好地诠释了Django的原则--"make easy things easier, make hard things possible". 在官方的[Topic guide][guide]和[Reference][ref]里有很好的解释,
还有一个[migration的帮助文档](http://docs.djangoproject.com/en/dev/topics/generic-views-migration/).

在[Tutorial part 4](http://docs.djangoproject.com/en/1.3/intro/tutorial04/#use-generic-views-less-code-is-better) 部分有例子说明`ListView`和`DetailView`.
但关于create/update/delete views的文档说明却很少. 
还有一个问题是我还不理解[Class-based generic views](http://docs.djangoproject.com/en/1.3/ref/class-based-views/)比function-based generic views好在哪里. 

这个slide解释了一些

<div style="width:425px" id="__ss_1269074"> <strong style="display:block;margin:12px 0 4px"><a href="http://www.slideshare.net/simon/classbased-views-with-django" title="Class-based views with Django">Class-based views with Django</a></strong> <iframe src="http://www.slideshare.net/slideshow/embed_code/1269074" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe> <div style="padding:5px 0 12px"> View more <a href="http://www.slideshare.net/">presentations</a> from <a href="http://www.slideshare.net/simon">Simon Willison</a> </div> </div>

在[StackOverflow也有讨论](http://stackoverflow.com/questions/4370650/what-is-the-advantage-of-class-based-views), 总结一下就是单写一`view/template`不省时间和代码, 当给不同template传不同参数时, 通过`subclass`可以使代码更加清晰和短小. 

Built-in views
================
    django.views.generic.base.TemplateView
    django.views.generic.base.RedirectView
    django.views.generic.list.ListView
    django.views.generic.detail.DetailView
    django.views.generic.edit.CreateView
    django.views.generic.edit.UpdateView
    django.views.generic.edit.DeleteView
    django.views.generic.dates.ArchiveIndexView
    django.views.generic.dates.YearArchiveView
    django.views.generic.dates.MonthArchiveView
    django.views.generic.dates.WeekArchiveView
    django.views.generic.dates.DayArchiveView
    django.views.generic.dates.TodayArchiveView
    django.views.generic.dates.DateDetailView

How to access parameters in URL
-------------------------
    in urls.py, 
    (r'^categories/(\w+)/P<pk>/$', CategoryListView.as_view()),

    then, in views.py, get the parameters such as 
    self.kwargs['pk'] and self.args[0]
     
    for request.user
    self.request.user

How to add decorator
-------------------------
in `urls.py`

    from django.contrib.auth.decorators import login_required
    from django.views.generic import TemplateView

    urlpatterns = patterns('',
        (r'^about/',login_required(TemplateView.as_view(template_name="secret.html"))),
    )


in class view definition

    from django.contrib.auth.decorators import login_required
    from django.utils.decorators import method_decorator
    from django.views.generic import TemplateView

    class ProtectedView(TemplateView):
        template_name = 'secret.html'

        @method_decorator(login_required)
        def dispatch(self, *args, **kwargs):
            return super(ProtectedView, self).dispatch(*args, **kwargs)

work on as_view(), 

    from django.contrib.auth.decorators import login_required
    from django.utils.decorators import classonlymethod
    from django.views.generic import TemplateView

    class ProtectedView(TemplateView):

        @classonlymethod
        def as_view(cls, **initargs):
            return login_required(super(ProtectedView, cls).as_view(**initargs))

also, try `view_decorator()`, 
[source code](https://github.com/lqc/django/blob/0eb2de3c156d8e6d1c31f46e0734af0ff06f93c4/django/utils/decorators.py#L46)

How to add extra content
-------------------------
 * `self.object` is the instance in `DetailView`.
 * `self.object_list` is the instance in `ListView`.
 * Use `self.kwargs['key_string']` to get parameters in URL.
 * To add extra contect to templates,

        class SongDetailView(DetailView):
          model=Song
          def get_context_data(self, **kwargs):
            context = super(DetailView, self).get_context_data(**kwargs)
            context['tags'] = Tag.objects.get_for_object(self.object)
            return context

Related blogs
===============
关于每个类的小抄

 * [TemplateView, RedirectView](/blog/django/generic-views-base.html)
 * [ListView/DetailView](/blog/django/generic-views-list.html)
 * [CreateView/UpdateView/DeleteView](/blog/django/generic-views-edit.html)

[guide]: http://docs.djangoproject.com/en/1.3/topics/class-based-views/
[ref]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/
