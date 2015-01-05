---
layout: post
title: "Django permission"
categories: [knowledge, django]
tags: [django]
---

Template
==============

display logged in user name
-----------------------------

    {% raw %}
      {% if user.is_authenticated %}
        {{ user.username }} <a href=".">Logout</a>
      {% else %}
        <a href="."> Login </a>
      {% endif %}
    {% endraw %}

check if has permission on some tables
---------------------------------------
Display a link based on user permission to 'song' table, in app 'hymn'.

    {% raw %}
    {% if perms.hymn %}
      <a href="{% url admin:hymn_song_change song.pk %}"> Edit this song </a>
    {% endif %}
    {% endraw %}
