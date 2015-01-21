---
layout: post
title: All Website Posts
---

<ul>
{% for post in site.categories['website']%}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

