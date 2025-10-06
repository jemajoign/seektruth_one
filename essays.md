---

---
<table><tbody>
<tr>
    <td>title</td>
    <td>author</td>
    <td>tags</td>
</tr>
  {% for post in site.posts %}
    <tr>
      <td><a href="{{ post.url }}">{{ post.title }}</a></td>
      <td>{{ post.author }}</td>
      <td>{% for tag in post.tags %}
          {% assign tag_posts = site.tags[tag] %}
          {% if tag_posts.size > 1 %}
            <a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
          {% else %}
            {{ tag }}{% unless forloop.last %}, {% endunless %}
          {% endif %}
        {% endfor %}
      </td>
    </tr>
  {% endfor %}
</tbody></table>

<br><br><br><br><br><br>