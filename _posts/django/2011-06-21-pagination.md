---
layout: post
title: "Pagination for class based generic views in Django 1.3"
excerpt: "Django 1.3学习了`Django-pagination`的优点, 在`class based generic view`里提供了简单明了的API"
categories: [blog, django]
tags: [django]
---

在Django 1.3以前已经有了[好几个做得相当不错的Django pagination package][pg_kb].
Django 1.3学习了`Django-pagination`的优点, 在`class based generic view`里提供了[简单明了的API](https://docs.djangoproject.com/en/1.3/ref/class-based-views/#multipleobjectmixin). 不足之处是在官方文档里没有一处列是一个简单的举例说明. 下面是我东查西找的一个最简单的教程. 

比如说我想在`Category`列表里每10个分一页, 只要在`view`里定义`paginate_by`,

`views.py`

    class MyCategoryListView(ListView):
        model = Category
        context_object_name="categories"
        paginate_by=10

主要功课在`template`里, 这里有几个默认参数:

 * object_list: 这和generic view里定义的一致, 当然可以通过`context_object_name`来代换
 * is_paginated: 定义有没有开启pagination功能
 * paginator: An instance of django.core.paginator.Paginator. 
 * page_obj: An instance of django.core.paginator.Page. 

举例
======

![Pagination in tempalte](/media/content/django-pagination-template.png)

其实上面这段代码具有通用性, 完全可以做成一个simple tag 放在`template_utils`里. 等写到`tag`相关的地方时我会用这个当例子的. 

[pg_kb]: http://c2.teckoo.com/knowledge/entry/django-packages.html#pagination
