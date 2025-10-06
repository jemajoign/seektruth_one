---

---
## Posts tagged with freedom

{% for post in site.tags["freedom"] %}
* <a href="{{ post.url }}">{{ post.title }}</a><br>{{ post.author }} - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
  