---
layout: leetcode
title: All algorithm templates
---

<ul>
{% for post in site.categories['template']%}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

