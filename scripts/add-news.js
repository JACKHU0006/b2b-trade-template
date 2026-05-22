import fs from 'fs';
import path from 'path';

const categories = ['Partnership', 'New Products', 'Certification', 'Company News', 'Recognition', 'Technology', 'Customer Service'];

function generateNewsItem(index) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  const date = `${year}-${month}-${day}`;
  const category = categories[Math.floor(Math.random() * categories.length)];
  const uniqueId = `news-${Date.now()}-${index}`;

  return {
    id: uniqueId,
    slug: uniqueId,
    title: {
      en: `New FableTech News Update',
      de: `Neues FableTech-News-Update`,
      fr: `Nouvelle mise à jour des actualités FableTech`,
      es: `Novedades de FableTech`,
      ar: `تحديث أخبار FableTech الجديد`
    },
    summary: {
      en: `Latest news from FableTech Group about our products and services`,
      de: `Neuigkeiten von der FableTech-Gruppe zu unseren Produkten und Dienstleistungen`,
      fr: `Dernières nouvelles du groupe FableTech sur nos produits et services`,
      es: `Últimas noticias del grupo FableTech sobre nuestros productos y servicios`,
      ar: `آخر الأخبار من مجموعة FableTech حول منتجاتنا وخدماتنا`
    },
    content: {
      en: 'FableTech Group is committed to providing exceptional quality and service to our global customers. We continue to innovate and expand our product offerings.',
      de: 'Die FableTech-Gruppe setzt sich für herausragende Qualität und Service für unsere globalen Kunden ein. Wir setzen wir weiter und erweitern wir unsere Produktpalette.',
      fr: 'Le groupe FableTech s engage à fournir une qualité et un service exceptionnels à nos clients mondiaux. Nous continuons à innover et à étendre nos offres de produits.',
      es: 'El grupo FableTech se compromete a proporcionar calidad y servicio excepcionales a nuestros clientes globales. Continuamos innovando y expandiendo nuestras ofertas de productos.',
      ar: 'تلتزم مجموعة FableTech بتقديم جودة وخدمة استثنائية لعملائنا العالميين. نواصل الابتكار وتوسيع عروض منتجاتنا.'
    },
    date: date,
    category: category,
    image: `/images/news/fabletech-news.jpg'
  };
}

function main() {
  const count = Math.floor(Math.random() * 2) + 2;
  console.log(`Adding ${count} news items...`);

  const newsPath = path.join(path.dirname(import.meta.url).replace('file://', ''), '../src/data/news.ts');
  let content = fs.readFileSync(newsPath, 'utf-8');

  const newItems = [];
  for (let i = 0; i < count; i++) {
    newItems.push(generateNewsItem(i));
  }

  const itemsText = newItems.map(item => {
    const titleStr = Object.entries(item.title).map(([lang, value) => {
      return `    ${lang}: '${value.replace(/'/g, "''")}'`;
    }).join(',\n');
    const summaryStr = Object.entries(item.summary).map(([lang, value]) => {
      return `    ${lang}: '${value.replace(/'/g, "''")}'`;
    }).join(',\n');
    const contentStr = Object.entries(item.content).map(([lang, value]) => {
      return `    ${lang}: '${value.replace(/'/g, "''")}'`;
    }).join(',\n');
    
    return `  {\n    id: '${item.id}',\n    slug: '${item.slug}',\n    title: {\n${titleStr}\n    },\n    summary: {\n${summaryStr}\n    },\n    content: {\n${contentStr}\n    },\n    date: '${item.date}',\n    category: '${item.category}',\n    image: '${item.image}'\n  }`;
  }).join(',\n');

  content = content.replace(/export const news: News\[\] = \[([\s\S]*?)\];/s, (match, items) => {
    return `export const news: News[] = [${items},\n${itemsText}\n];`;
  });

  fs.writeFileSync(newsPath, content);
  console.log('Done! Added news items.');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
