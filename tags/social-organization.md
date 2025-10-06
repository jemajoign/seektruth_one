---

---
## Posts tagged with social organization

{% for post in site.tags["social organization"] %}
* <a href="{{ post.url }}">{{ post.title }}</a><br>{{ post.author }} - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
  