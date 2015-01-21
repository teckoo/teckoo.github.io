---
layout: post
title: All Blog Posts
---

<ul>
{% for post in site.categories['blog']%}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

