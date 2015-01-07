---
layout: post
title: All Programmer Posts
---

<ul>
{% for post in site.categories['programmer']%}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

