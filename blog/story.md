---
layout: post
title: All Stories
---

<ul>
{% for post in site.categories['story'] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

