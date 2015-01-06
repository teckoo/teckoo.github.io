---
layout: post
title: "CreateView, UpdateView and DeleteView in Django 1.3"
excerpt: "Introduce django.views.generic.edit.CreateView, UpdateView and DeleteView in Django 1.3"
categories: [blog, django]
tags: [django]
---

Django的官方文档里关于CreateView/UpdateView/DeleteView的generic views的资料实在是语焉不详. 我对着django test case来总结一下基本的使用情况. 
后来发现[stackoverflow上这帖子写得很好](http://stackoverflow.com/questions/5773724/how-do-i-use-createview-with-a-modelform)

CreateView
==============
[CreateView的文档][createvw]里讲CreateView有两个Mixin, 我还不太明白怎么用ProcessFormview.

* django.views.generic.edit.ModelFormMixin
* django.views.generic.edit.ProcessFormView

下面是一个最简单的CreateView的使用例子:
要定义一个view, 就要先有Model, ModelForm, template, 然后才能定义view.

    # in views.py
    from django.views.generic.edit import CreateView
    class AuthorCreateView(CreateView):
        # form_class告诉CreateView怎么处理model class
        # AuthorForm是一个ModelForm, 里面关联了Author
        form_class = AuthorForm 

        # template_name告诉CreateView用哪个html显示
        template_name = 'author_new.html'

        # success_url 是处理完form后的redirect
        success_url = 'success'

    # in urls.py
    ('^authors/create/$', Author.AuthorCreateView.as_view()),

这里有一个值得注意的是`success_url`, 在Django 1.3里如果直接用`reverse`来调用`urls.py`里的名字的话会出错`ViewDoesNotExist`, 解决办法是 

    reverse_lazy = lambda name=None, *args : lazy(reverse, str)(name, args=args)

[出处](http://djangosnippets.org/snippets/2445/)

UpateView
=============
如果有了Model/ModelForm/Template, UpdateView和CreateView很相似. 

    in urls.py
    url(r'^category/edit/(?P<pk>\d+)/$',                                      
        login_required(CategoryUpdateView.as_view()),                         
        name='channel_blog_category_edit'), 

    in views.py
    class CategoryUpdateView(UpdateView):
        model=Category
        form_class = CategoryForm
        template_name = 'channel_blog/category_form.html'
        success_url = reverse_lazy('channel_blog_my_categories')
                 
DeleteView
===========
Basic example:

    from django.views.generic import DeleteView
    from django.http import Http404

    class MyDeleteView(DeleteView):
        def get_object(self, queryset=None):
            obj = super(MyDeleteView, self).get_object()
            if not obj.owner == self.request.user:
                raise Http404
            return obj

这里要注意的几个地方:

 * DeleteView需要POST request, 你要用Javascript或是一个提示来提交一个POST.
 * 在我的代码`get_object`里有一个偷懒的地方是没有提示错误信息, 可以先加到`context`里再转到`Http404`
 * 还可以override `delete()`, 

下面是我的另一个例子

    class CategoryDeleteView(DeleteView):
        model=Category
        form_class = CategoryForm 
        success_url = reverse_lazy('channel_blog_my_categories')

        def get_object(self):
            """
            * The DeleteView won't delete on GET requests; this is your opportunity to provide a confirmation template (you can provide the name in the template_name class attribute) with a "Yes I'm sure" button which POSTs to this view
            * You may prefer an error message to a 404? In this case, override the delete method instead, check permissions after the get_object call and return a customised response.
            * Don't forget to provide a template which matches the (optionally customisable) success_url class attribute so that the user can confirm that the object has been deleted.
            """
            category= get_object_or_404(Category, pk=self.kwargs['pk'],
                user=self.request.user)
            return category

Related
=========
 * [Generic views in my KB](/knowledge/entry/django-generic-views.html)
 * [TemplateView, RedirectView](/blog/django/generic-views-base.html)
 * [ListView/DetailView](/blog/django/generic-views-list.html)
 * [CreateView/UpdateView/DeleteView](/blog/django/generic-views-edit.html)


[createvw]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/#django.views.generic.base.CreateView
[upvw]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/#django.views.generic.base.UpdateView
[delvw]: http://docs.djangoproject.com/en/1.3/ref/class-based-views/#django.views.generic.base.DeleteView
