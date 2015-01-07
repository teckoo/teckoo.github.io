---
layout: post
title: Programmer Tag Index
---
<ul>
{% for post in site.tags['programmer'] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

