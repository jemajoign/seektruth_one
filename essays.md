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
      <td>{{ post.tags | join: ", " }}</td>
    </tr>
  {% endfor %}
</tbody></table>

<br><br><br><br><br><br>