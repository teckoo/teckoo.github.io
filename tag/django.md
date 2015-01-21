---
layout: post
title: Django Tag Index
---
<ul>
{% for post in site.tags['django'] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

