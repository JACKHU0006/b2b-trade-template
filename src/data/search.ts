import { products } from './products';
import { news } from './news';

export interface SearchResult {
  type: 'page' | 'product' | 'news';
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  url: string;
  category?: string;
}

const pages: SearchResult[] = [
  {
    type: 'page',
    id: 'home',
    title: {
      en: 'Home',
      de: 'Startseite',
      fr: 'Accueil',
      es: 'Inicio',
      ar: 'الرئيسية'
    },
    description: {
      en: 'FableTech Group - Leading B2B industrial metal products supplier with global reach.',
      de: 'FableTech Group - Führender B2B-Lieferant für industrielle Metallprodukte mit globaler Reichweite.',
      fr: 'FableTech Group - Fournisseur B2B leader de produits métalliques industriels avec portée mondiale.',
      es: 'FableTech Group - Proveedor líder B2B de productos metálicos industrieles con alcance global.',
      ar: 'مجموعة FableTech - المورد الرائد للمنتجات المعدنية الصناعية للتجارة بين الشركات مع انتشار عالمي.'
    },
    url: '/'
  },
  {
    type: 'page',
    id: 'about',
    title: {
      en: 'About Us',
      de: 'Über uns',
      fr: 'À propos',
      es: 'Sobre nosotros',
      ar: 'عن الشركة'
    },
    description: {
      en: 'Learn about FableTech Group, our history, mission, and values.',
      de: 'Erfahren Sie mehr über die FableTech Group, unsere Geschichte, Mission und Werte.',
      fr: 'Découvrez FableTech Group, notre histoire, notre mission et nos valeurs.',
      es: 'Conozca FableTech Group, nuestra historia, misión y valores.',
      ar: 'تعرف على مجموعة FableTech، تاريخنا ورسالتنا وقيمنا.'
    },
    url: '/about'
  },
  {
    type: 'page',
    id: 'products',
    title: {
      en: 'Products',
      de: 'Produkte',
      fr: 'Produits',
      es: 'Productos',
      ar: 'المنتجات'
    },
    description: {
      en: 'Browse our complete catalog of industrial metal products.',
      de: 'Durchsuchen Sie unseren vollständigen Katalog an industriellen Metallprodukten.',
      fr: 'Parcourez notre catalogue complet de produits métalliques industriels.',
      es: 'Navegue por nuestro catálogo completo de productos metálicos industriales.',
      ar: 'تصفح كتالوجنا الكامل للمنتجات المعدنية الصناعية.'
    },
    url: '/products'
  },
  {
    type: 'page',
    id: 'news',
    title: {
      en: 'News',
      de: 'Nachrichten',
      fr: 'Nouvelles',
      es: 'Noticias',
      ar: 'الأخبار'
    },
    description: {
      en: 'Latest news and updates from FableTech Group.',
      de: 'Aktuelle Nachrichten und Updates von der FableTech Group.',
      fr: 'Dernières nouvelles et mises à jour de FableTech Group.',
      es: 'Últimas noticias y actualizaciones de FableTech Group.',
      ar: 'آخر الأخبار والتحديثات من مجموعة FableTech.'
    },
    url: '/news'
  },
  {
    type: 'page',
    id: 'factory',
    title: {
      en: 'Factory',
      de: 'Fabrik',
      fr: 'Usine',
      es: 'Fábrica',
      ar: 'المصنع'
    },
    description: {
      en: 'Take a virtual tour of our manufacturing facilities.',
      de: 'Machen Sie eine virtuelle Tour durch unsere Produktionsanlagen.',
      fr: 'Faites une visite virtuelle de nos installations de fabrication.',
      es: 'Realice una visita virtual a nuestras instalaciones de fabricación.',
      ar: 'قم بجولة افتراضية في منشآت التصنيع لدينا.'
    },
    url: '/factory'
  },
  {
    type: 'page',
    id: 'service',
    title: {
      en: 'Service',
      de: 'Dienstleistung',
      fr: 'Service',
      es: 'Servicio',
      ar: 'الخدمات'
    },
    description: {
      en: 'Our comprehensive customer service and support offerings.',
      de: 'Unsere umfassenden Kundenservice- und Supportangebote.',
      fr: 'Nos offres complètes de service client et de support.',
      es: 'Nuestras completas ofertas de servicio al cliente y soporte.',
      ar: 'عروضنا الشاملة لخدمة العملاء والدعم.'
    },
    url: '/service'
  },
  {
    type: 'page',
    id: 'faq',
    title: {
      en: 'FAQ',
      de: 'FAQ',
      fr: 'FAQ',
      es: 'FAQ',
      ar: 'أسئلة شائعة'
    },
    description: {
      en: 'Frequently asked questions about our products and services.',
      de: 'Häufig gestellte Fragen zu unseren Produkten und Dienstleistungen.',
      fr: 'Foire aux questions sur nos produits et services.',
      es: 'Preguntas frecuentes sobre nuestros productos y servicios.',
      ar: 'أسئلة متكررة حول منتجاتنا وخدماتنا.'
    },
    url: '/faq'
  },
  {
    type: 'page',
    id: 'contact',
    title: {
      en: 'Contact',
      de: 'Kontakt',
      fr: 'Contact',
      es: 'Contacto',
      ar: 'اتصل بنا'
    },
    description: {
      en: 'Get in touch with our team for inquiries and quotes.',
      de: 'Kontaktieren Sie unser Team für Anfragen und Angebote.',
      fr: 'Contactez notre équipe pour les demandes de renseignements et les devis.',
      es: 'Póngase en contacto con nuestro equipo para consultas y cotizaciones.',
      ar: 'تواصل مع فريقنا للاستفسارات والعروض التسعيرية.'
    },
    url: '/contact'
  }
];

const productResults: SearchResult[] = products.map(product => ({
  type: 'product',
  id: product.id,
  title: product.name,
  description: product.description,
  url: `/products/${product.id}`,
  category: product.category
}));

const newsResults: SearchResult[] = news.map(item => ({
  type: 'news',
  id: item.id,
  title: item.title,
  description: item.summary,
  url: `/news/${item.id}`,
  category: item.category
}));

export const searchData: SearchResult[] = [...pages, ...productResults, ...newsResults];

export function search(query: string, locale: string = 'en'): SearchResult[] {
  const searchQuery = query.toLowerCase().trim();
  
  if (!searchQuery) {
    return [];
  }

  return searchData.filter(item => {
    const title = item.title[locale] || item.title['en'] || '';
    const description = item.description[locale] || item.description['en'] || '';
    const category = item.category || '';
    
    return (
      title.toLowerCase().includes(searchQuery) ||
      description.toLowerCase().includes(searchQuery) ||
      category.toLowerCase().includes(searchQuery)
    );
  }).slice(0, 10);
}
