---

---
## Posts tagged with synergy

{% for post in site.tags["synergy"] %}
* <a href="{{ post.url }}">{{ post.title }}</a><br>{{ post.author }} - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
  