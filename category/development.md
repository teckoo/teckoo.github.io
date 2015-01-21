---
layout: post
title: All Development Articles 
---
<ul>
{% for post in site.categories['development'] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

