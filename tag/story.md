---
layout: post
title: Story Tag Index
---
<ul>
{% for post in site.tags['story'] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

