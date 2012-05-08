---
layout: page
title: A personal web log
---
{% for post in site.posts %}
<h2><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h2>
<p>{{ post.date | date_to_string }}</p>
<p>{{ post.content }}</p>
{% endfor %}
