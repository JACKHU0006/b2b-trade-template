export interface News {
  id: string;
  title: Record<string, string>;
  content: Record<string, string>;
  summary: Record<string, string>;
  date: string;
  category: string;
  image: string;
}

export const news: News[] = [
  {
    id: 'news-001',
    title: {
      en: 'New Production Facility Expansion',
      de: 'Erweiterung der neuen Produktionsstätte',
      fr: 'Extension de la nouvelle usine de production',
      es: 'Expansión de la nueva planta de producción',
      ar: 'توسيع منشأة الإنتاج الجديدة'
    },
    content: {
      en: 'We are excited to announce the expansion of our production facility. This $5M investment will increase our manufacturing capacity by 40%, allowing us to better serve our global customers. The new facility will feature state-of-the-art automation technology.',
      de: 'Wir freuen uns, die Erweiterung unserer Produktionsstätte ankündigen zu können. Diese 5-Millionen-Dollar-Investition wird unsere Produktionskapazität um 40% erhöhen und es uns ermöglichen, unsere globalen Kunden besser zu bedienen. Die neue Anlage wird mit modernster Automatisierungstechnologie ausgestattet sein.',
      fr: 'Nous avons le plaisir d\'annoncer l\'extension de notre usine de production. Cet investissement de 5 millions de dollars augmentera notre capacité de production de 40%, nous permettant de mieux servir nos clients mondiaux. La nouvelle usine sera équipée de technologies d\'automatisation de pointe.',
      es: 'Nos complace anunciar la expansión de nuestra planta de producción. Esta inversión de $5M aumentará nuestra capacidad de fabricación en un 40%, lo que nos permitirá servir mejor a nuestros clientes globales. La nueva planta contará con tecnología de automatización de última generación.',
      ar: 'يسعدنا أن نعلن عن توسيع منشأة الإنتاج لدينا. ستؤدي هذه الاستثمارية بقيمة 5 ملايين دولار إلى زيادة سعة التصنيع لدينا بنسبة 40%، مما سيسمح لنا بخدمة عملائنا العالميين بشكل أفضل. ستتميز المنشأة الجديدة بتقنيات الأتمتة المتطورة.'
    },
    summary: {
      en: 'Our production facility expansion project is underway, with completion expected by Q4.',
      de: 'Unser Projekt zur Erweiterung der Produktionsstätte läuft, die Fertigstellung wird voraussichtlich im vierten Quartal erfolgen.',
      fr: 'Notre projet d\'extension de l\'usine de production est en cours, avec une prévision de finition au quatrième trimestre.',
      es: 'Nuestro proyecto de expansión de la planta de producción está en marcha, con previsión de finalización para el cuarto trimestre.',
      ar: 'مشروع توسيع منشأة الإنتاج لدينا قيد التنفيذ، ومن المتوقع إكماله بحلول الربع الرابع.'
    },
    date: '2024-01-15',
    category: 'Company News',
    image: '/images/news/fabletech-factory.jpg'
  },
  {
    id: 'news-002',
    title: {
      en: 'ISO 9001:2015 Certification Renewed',
      de: 'ISO 9001:2015-Zertifizierung erneuert',
      fr: 'Certification ISO 9001:2015 renouvelée',
      es: 'Certificación ISO 9001:2015 renovada',
      ar: 'إعادة تأكيد شهادة ISO 9001:2015'
    },
    content: {
      en: 'We are proud to announce that our company has successfully renewed its ISO 9001:2015 quality management certification. This achievement demonstrates our commitment to delivering the highest quality products and services to our customers worldwide.',
      de: 'Wir sind stolz zu verkünden, dass unser Unternehmen seine ISO 9001:2015-Qualitätsmanagementzertifizierung erfolgreich erneuert hat. Diese Errungenschaft zeigt unser Engagement für die Lieferung von Produkten und Dienstleistungen höchster Qualität an unsere Kunden weltweit.',
      fr: 'Nous avons le plaisir d\'annoncer que notre entreprise a renouvelé avec succès sa certification de gestion de la qualité ISO 9001:2015. Cette réalisation démontre notre engagement à fournir les produits et services de la plus haute qualité à nos clients du monde entier.',
      es: 'Nos enorgullece anunciar que nuestra empresa ha renovado con éxito su certificación de gestión de calidad ISO 9001:2015. Este logro demuestra nuestro compromiso de entregar productos y servicios de la más alta calidad a nuestros clientes de todo el mundo.',
      ar: 'نحن فخورون بأن نعلن أن شركتنا أتمت إعادة تأكيد شهادة إدارة الجودة ISO 9001:2015 بنجاح. هذا الإنجاز يظهر التزامنا بتقديم منتجات وخدمات ذات جودة عالية لأعملائنا في جميع أنحاء العالم.'
    },
    summary: {
      en: 'Quality management certification renewed for another 3 years.',
      de: 'Qualitätsmanagementzertifizierung für weitere 3 Jahre erneuert.',
      fr: 'Certification de gestion de la qualité renouvelée pour 3 années supplémentaires.',
      es: 'Certificación de gestión de calidad renovada por 3 años más.',
      ar: 'تم تجديد شهادة إدارة الجودة لمدة 3 سنوات أخرى.'
    },
    date: '2024-01-10',
    category: 'Certification',
    image: '/images/news/fabletech-certification.jpg'
  },
  {
    id: 'news-003',
    title: {
      en: 'New Product Line: Sustainable Steel Solutions',
      de: 'Neue Produktlinie: Nachhaltige Stahl-Lösungen',
      fr: 'Nouvelle gamme de produits : solutions d\'acier durables',
      es: 'Nueva línea de productos: soluciones de acero sostenibles',
      ar: 'خط منتجات جديد: حلول فولاذ مستدامة'
    },
    content: {
      en: 'Introducing our new sustainable steel product line, manufactured using 100% recycled materials. These eco-friendly products meet the highest industry standards while reducing environmental impact. Available now for pre-order.',
      de: 'Vorstellung unserer neuen nachhaltigen Stahlproduktlinie, die unter Verwendung von 100% recycelten Materialien hergestellt wird. Diese umweltfreundlichen Produkte erfüllen die höchsten Branchenstandards und reduzieren gleichzeitig die Umweltauswirkungen. Jetzt zur Vorbestellung verfügbar.',
      fr: 'Présentation de notre nouvelle gamme de produits en acier durable, fabriqués à partir de matériaux 100% recyclés. Ces produits écologiques répondent aux normes industrielles les plus strictes tout en réduisant l\'impact environnemental. Disponibles maintenant en précommande.',
      es: 'Presentamos nuestra nueva línea de productos de acero sostenible, fabricados con materiales 100% reciclados. Estos productos ecológicos cumplen con los estándares industriales más altos mientras reducen el impacto ambiental. Disponibles ahora para pre-pedido.',
      ar: 'نقدم لكم خط منتجات فولاذ مستدام جديد، مصنوع باستخدام مواد مستعادة بنسبة 100%. هذه المنتجات الصديقة للبيئة تلبي أعلى معايير الصناعة مع تقليل التأثير البيئي. متاحة الآن للحجز المسبق.'
    },
    summary: {
      en: 'Eco-friendly steel products now available.',
      de: 'Umweltfreundliche Stahlprodukte jetzt verfügbar.',
      fr: 'Produits d\'acier écologiques maintenant disponibles.',
      es: 'Productos de acero ecológicos ahora disponibles.',
      ar: 'المنتجات الفولاذية الصديقة للبيئة متاحة الآن.'
    },
    date: '2024-01-05',
    category: 'New Products',
    image: '/images/news/fabletech-sustainable-steel.jpg'
  }
];

export function getNews(locale: string = 'en'): News[] {
  return news;
}

export function getNewsById(id: string): News | undefined {
  return news.find(n => n.id === id);
}

export function getNewsCategories(): string[] {
  return [...new Set(news.map(n => n.category))];
}
