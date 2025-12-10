---

---
## Posts tagged with quantum

{% for post in site.tags["quantum"] %}
* <a href="{{ post.url }}">{{ post.title }}</a><br>{{ post.author }} - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
  