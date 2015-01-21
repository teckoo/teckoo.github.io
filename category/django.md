---
layout: post
title: All Django Posts
---

<ul>
{% for post in site.categories['django']%}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

