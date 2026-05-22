import fs from 'fs';
import path from 'path';

const newsPath = path.join(path.dirname(import.meta.url).replace('file://', ''), '../src/data/news.ts');
const content = fs.readFileSync(newsPath, 'utf-8');

const match = content.match(/export const news: News\[\] = (\[.*?\]);/s);
if (!match) {
  throw new Error('Could not parse news file');
}

const newsJson = match[1]
  .replace(/(\w+):/g, '"$1":')
  .replace(/:\s*'([^']*)'/g, ': "$1"')
  .replace(/"en": "([^"]*?)"/g, (m, p1) => `"en": "${p1.replace(/"/g, '\\"')}"`)
  .replace(/"de": "([^"]*?)"/g, (m, p1) => `"de": "${p1.replace(/"/g, '\\"')}"`)
  .replace(/"fr": "([^"]*?)"/g, (m, p1) => `"fr": "${p1.replace(/"/g, '\\"')}"`)
  .replace(/"es": "([^"]*?)"/g, (m, p1) => `"es": "${p1.replace(/"/g, '\\"')}"`)
  .replace(/"ar": "([^"]*?)"/g, (m, p1) => `"ar": "${p1.replace(/"/g, '\\"')}"`);

const news = JSON.parse(newsJson);
news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const newsStr = JSON.stringify(news, null, 2)
  .replace(/"([^"]+)":/g, '$1:')
  .replace(/": "/g, '": "')
  .replace(/": \[/g, '": [')
  .replace(/],/g, '],')
  .replace(/},/g, '},')
  .replace(/"([^"]+)"/g, (match, p1) => {
    if (p1.match(/^(id|slug|date|category|image)$/)) return match;
    return `'${p1}'`;
  });

const newContent = content.replace(/export const news: News\[\] = \[.*?\];/s, `export const news: News[] = ${newsStr};`);

fs.writeFileSync(newsPath, newContent);

console.log(`Sorted ${news.length} news items by date descending`);
