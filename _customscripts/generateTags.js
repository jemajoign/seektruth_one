import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, extname, basename } from 'path';
import matter from 'gray-matter';

let currentDir = import.meta.dirname;
if(basename(currentDir)==="_customscripts") {
    currentDir = join(currentDir, "../");
}
const postsDir = join(currentDir, '_posts');
const tagsDir = join(currentDir, 'tags');

// Create tags directory if it doesn't exist
if (!existsSync(tagsDir)) {
  mkdirSync(tagsDir, { recursive: true });
}

// Object to hold posts grouped by tag
const tagsMap = {};

// Read all files in _posts
readdirSync(postsDir).forEach(filename => {
  if (extname(filename) !== '.md') return;

  const filePath = join(postsDir, filename);
  const content = readFileSync(filePath, 'utf8');
  const { data } = matter(content); // Parse front matter

  const tags = data.tags || [];
  const author = data.author || "";
  const date = data.date || basename(filename, '.md').substring(0,10);
  const title = data.title || filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/-/g, ' ').replace(/\.[^.]+$/, '');
  const slug = filename.replace(/\.[^.]+$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const url = `/${slug}.html`;

  tags.forEach(tag => {
    if (!tagsMap[tag]) {
      tagsMap[tag] = [];
    }
    tagsMap[tag].push({
      title,
      date,
      url,
      author
    });
  });
});

// Generate HTML for each tag
Object.entries(tagsMap).forEach(([tag, posts]) => {
  // Sort posts by date descending (assuming date is YYYY-MM-DD)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  let md = `---

---
## Posts tagged with ${tag}\n
{% for post in site.tags["${tag}"] %}
* <a href="{{ post.url }}">{{ post.title }}</a><br>{{ post.author }} - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
  `;

  const tagFilePath = join(tagsDir, `${tag.toLowerCase().replace(/\s+/g, '-')}.md`);
  writeFileSync(tagFilePath, md);
  console.log(`Generated ${tagFilePath}`);
});

console.log('Tag pages generated successfully!');