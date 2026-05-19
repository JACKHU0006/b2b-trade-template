export interface News {
  id: string;
  slug: string;
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
    slug: 'new-production-facility-expansion',
    title: {
      en: 'New Production Facility Expansion',
      de: 'Erweiterung der neuen Produktionsstätte',
      fr: 'Extension de la nouvelle usine de production',
      es: 'Expansión de la nueva planta de producción',
      ar: 'توسيع منشأة الإنتاج الجديدة'
    },
    content: {
      en: 'We are excited to announce the expansion of our production facility. This $5M investment will increase our manufacturing capacity by 40%, allowing us to better serve our global customers. The new facility will feature state-of-the-art automation technology, including robotic welding systems and AI-powered quality control. This expansion will create 50 new jobs and strengthen our position as a leading metal products manufacturer.',
      de: 'Wir freuen uns, die Erweiterung unserer Produktionsstätte ankündigen zu können. Diese 5-Millionen-Dollar-Investition wird unsere Produktionskapazität um 40% erhöhen und es uns ermöglichen, unsere globalen Kunden besser zu bedienen. Die neue Anlage wird mit modernster Automatisierungstechnologie ausgestattet sein, einschließlich robotischer Schweißsysteme und KI-gesteuerter Qualitätskontrolle. Diese Erweiterung wird 50 neue Arbeitsplätze schaffen und unsere Position als führender Metallprodukthersteller stärken.',
      fr: 'Nous avons le plaisir d\'annoncer l\'extension de notre usine de production. Cet investissement de 5 millions de dollars augmentera notre capacité de production de 40%, nous permettant de mieux servir nos clients mondiaux. La nouvelle usine sera équipée de technologies d\'automatisation de pointe, y compris des systèmes de soudage robotisés et un contrôle de qualité alimenté par l\'IA. Cette extension créera 50 nouveaux emplois et renforcera notre position en tant que fabricant leader de produits métalliques.',
      es: 'Nos complace anunciar la expansión de nuestra planta de producción. Esta inversión de $5M aumentará nuestra capacidad de fabricación en un 40%, lo que nos permitirá servir mejor a nuestros clientes globales. La nueva planta contará con tecnología de automatización de última generación, incluyendo sistemas de soldadura robótica y control de calidad impulsado por IA. Esta expansión creará 50 nuevos empleos y fortalecerá nuestra posición como fabricante líder de productos metálicos.',
      ar: 'يسعدنا أن نعلن عن توسيع منشأة الإنتاج لدينا. ستؤدي هذه الاستثمارية بقيمة 5 ملايين دولار إلى زيادة سعة التصنيع لدينا بنسبة 40%، مما سيسمح لنا بخدمة عملائنا العالميين بشكل أفضل. ستتميز المنشأة الجديدة بتقنيات الأتمتة المتطورة، بما في ذلك أنظمة اللحام الروبوتية والتحكم في الجودة المدعوم بالذكاء الاصطناعي. ستخلق هذا التوسعة 50 فرص عمل جديدة وستقوي موقعنا كمنتج رائد للمنتجات المعدنية.'
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
    slug: 'iso-9001-2015-certification-renewed',
    title: {
      en: 'ISO 9001:2015 Certification Renewed',
      de: 'ISO 9001:2015-Zertifizierung erneuert',
      fr: 'Certification ISO 9001:2015 renouvelée',
      es: 'Certificación ISO 9001:2015 renovada',
      ar: 'إعادة تأكيد شهادة ISO 9001:2015'
    },
    content: {
      en: 'We are proud to announce that our company has successfully renewed its ISO 9001:2015 quality management certification. This achievement demonstrates our commitment to delivering the highest quality products and services to our customers worldwide. The rigorous audit process covered all aspects of our operations, from raw material sourcing to final product delivery.',
      de: 'Wir sind stolz zu verkünden, dass unser Unternehmen seine ISO 9001:2015-Qualitätsmanagementzertifizierung erfolgreich erneuert hat. Diese Errungenschaft zeigt unser Engagement für die Lieferung von Produkten und Dienstleistungen höchster Qualität an unsere Kunden weltweit. Der strenge Auditprozess deckte alle Aspekte unserer Betriebe ab, von der Rohmaterialbeschaffung bis zur endgültigen Produktlieferung.',
      fr: 'Nous avons le plaisir d\'annoncer que notre entreprise a renouvelé avec succès sa certification de gestion de la qualité ISO 9001:2015. Cette réalisation démontre notre engagement à fournir les produits et services de la plus haute qualité à nos clients du monde entier. Le processus d\'audit rigoureux a couvert tous les aspects de nos opérations, de l\'approvisionnement en matières premières jusqu\'à la livraison finale du produit.',
      es: 'Nos enorgullece anunciar que nuestra empresa ha renovado con éxito su certificación de gestión de calidad ISO 9001:2015. Este logro demuestra nuestro compromiso de entregar productos y servicios de la más alta calidad a nuestros clientes de todo el mundo. El riguroso proceso de auditoría cubrió todos los aspectos de nuestras operaciones, desde el abastecimiento de materias primas hasta la entrega final del producto.',
      ar: 'نحن فخورين بأن نعلن أن شركتنا أتمت إعادة تأكيد شهادة إدارة الجودة ISO 9001:2015 بنجاح. هذا الإنجاز يظهر التزامنا بتقديم منتجات وخدمات ذات جودة عالية لأعملائنا في جميع أنحاء العالم. غطت عملية التدقيق الصارمة جميع جوانب عملياتنا، من توفير المواد الخام حتى تسليم المنتج النهائي.'
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
    slug: 'sustainable-steel-product-line-launch',
    title: {
      en: 'New Product Line: Sustainable Steel Solutions',
      de: 'Neue Produktlinie: Nachhaltige Stahl-Lösungen',
      fr: 'Nouvelle gamme de produits: solutions d\'acier durables',
      es: 'Nueva línea de productos: soluciones de acero sostenibles',
      ar: 'خط منتجات جديد: حلول فولاذ مستدامة'
    },
    content: {
      en: 'Introducing our new sustainable steel product line, manufactured using 100% recycled materials. These eco-friendly products meet the highest industry standards while reducing environmental impact. Available now for pre-order. All products in this line carry our Green Manufacturing certification and help our customers reduce their carbon footprint.',
      de: 'Vorstellung unserer neuen nachhaltigen Stahlproduktlinie, die unter Verwendung von 100% recycelten Materialien hergestellt wird. Diese umweltfreundlichen Produkte erfüllen die höchsten Branchenstandards und reduzieren gleichzeitig die Umweltauswirkungen. Jetzt zur Vorbestellung verfügbar. Alle Produkte dieser Linie tragen unsere Green-Manufacturing-Zertifizierung und helfen unseren Kunden, ihren CO2-Fußabdruck zu reduzieren.',
      fr: 'Présentation de notre nouvelle gamme de produits en acier durable, fabriqués à partir de matériaux 100% recyclés. Ces produits écologiques répondent aux normes industrielles les plus strictes tout en réduisant l\'impact environnemental. Disponibles maintenant en précommande. Tous les produits de cette gamme portent notre certification Green Manufacturing et aident nos clients à réduire leur empreinte carbone.',
      es: 'Presentamos nuestra nueva línea de productos de acero sostenible, fabricados con materiales 100% reciclados. Estos productos ecológicos cumplen con los estándares industriales más altos mientras reducen el impacto ambiental. Disponibles ahora para pre-pedido. Todos los productos de esta línea llevan nuestra certificación Green Manufacturing y ayudan a nuestros clientes a reducir su huella de carbono.',
      ar: 'نقدم لكم خط منتجات فولاذ مستدام جديد، مصنوع باستخدام مواد مستعادة بنسبة 100%. هذه المنتجات الصديقة للبيئة تلبي أعلى معايير الصناعة مع تقليل التأثير البيئي. متاحة الآن للحجز المسبق. تحمل جميع منتجات هذا الخط شهادة التصنيع الأخضر لدينا وتساعد عملائنا على تقليل بصمتهم الكربونية.'
    },
    summary: {
      en: 'Eco-friendly steel products now available.',
      de: 'Umweltfreundliche Stahlprodukte jetzt verfügbar.',
      fr: 'Produits d\'acier écologiques maintenant disponibles.',
      es: 'Productos de acero écologiques ahora disponibles.',
      ar: 'المنتجات الفولاذية الصديقة للبيئة متاحة الآن.'
    },
    date: '2024-01-05',
    category: 'New Products',
    image: '/images/news/fabletech-sustainable-steel.jpg'
  },
  {
    id: 'news-004',
    slug: 'global-shipping-partnership-announcement',
    title: {
      en: 'Partnership with Global Shipping Provider',
      de: 'Partnerschaft mit globalem Spediteur',
      fr: 'Partenariat avec un fournisseur de transport maritime mondial',
      es: 'Alianza con proveedor de envíos global',
      ar: 'شراكة مع مورد شحن عالمي'
    },
    content: {
      en: 'We are pleased to announce a new strategic partnership with OceanLink Logistics, a leading global shipping provider. This partnership will enable us to offer faster, more reliable international shipping to our customers in over 60 countries. We expect to reduce delivery times by up to 30% and improve tracking capabilities through real-time GPS monitoring.',
      de: 'Wir freuen uns, eine neue strategische Partnerschaft mit OceanLink Logistics, einem führenden globalen Spediteur, ankündigen zu können. Diese Partnerschaft wird es uns ermöglichen, schnelleren und zuverlässigeren internationalen Versand an unsere Kunden in über 60 Ländern anzubieten. Wir erwarten, Lieferzeiten um bis zu 30% zu reduzieren und die Verfolgungsfähigkeiten durch Echtzeit-GPS-Überwachung zu verbessern.',
      fr: 'Nous avons le plaisir d\'annoncer un nouveau partenariat stratégique avec OceanLink Logistics, un fournisseur de transport maritime mondial de premier plan. Ce partenariat nous permettra d\'offrir un envoi international plus rapide et plus fiable à nos clients dans plus de 60 pays. Nous nous attendons à réduire les délais de livraison jusqu\'à 30% et à améliorer les capacités de suivi grâce à la surveillance GPS en temps réel.',
      es: 'Nos complace anunciar una nueva alianza estratégica con OceanLink Logistics, un proveedor de envíos global de primer nivel. Esta alianza nos permitirá ofrecer envíos internacionales más rápidos y fiables a nuestros clientes en más de 60 países. Esperamos reducir los tiempos de entrega hasta en un 30% y mejorar las capacidades de seguimiento mediante monitoreo GPS en tiempo real.',
      ar: 'يسعدنا أن نعلن عن شراكة إستراتيجية جديدة مع OceanLink Logistics، وهي مورد شحن عالمي رائد. ستسمح لنا هذه الشراكة بتقديم شحن دولي أسرع وأكثر موثوقًا لأعمالنا في أكثر من 60 دولة. نتوقع تقليل أوقات التسليم بنسبة تصل إلى 30% وتحسين قدرات التتبع من خلال مراقبة GPS في الوقت الحقيقي.'
    },
    summary: {
      en: 'New shipping partnership improves delivery times and reliability.',
      de: 'Neue Versandpartnerschaft verbessert Lieferzeiten und Zuverlässigkeit.',
      fr: 'Nouveau partenariat d\'expédition améliore les délais et la fiabilité.',
      es: 'Nueva alianza de envíos mejora tiempos y fiabilidad.',
      ar: 'شراكة شحن جديدة تحسن أوقات التسليم والموثوقية.'
    },
    date: '2024-01-20',
    category: 'Partnership',
    image: '/images/news/fabletech-shipping.jpg'
  },
  {
    id: 'news-005',
    slug: 'advanced-rd-laboratory-grand-opening',
    title: {
      en: 'Advanced R&D Laboratory Opens',
      de: 'Hochentwickeltes Forschungslabor eröffnet',
      fr: 'Laboratoire de R&D avancé inauguré',
      es: 'Inaugurado laboratorio de I+D avanzado',
      ar: 'فتح مختبر بحث وتطوير متقدم'
    },
    content: {
      en: 'Our new $2M R&D laboratory is now operational, focusing on developing new metal alloys and manufacturing processes. The lab features cutting-edge material testing equipment and a team of 15 materials scientists. We aim to introduce 3 new product innovations this year as a result of this investment.',
      de: 'Unser neues 2-Millionen-Dollar-Forschungslabor ist jetzt betriebsbereit und konzentriert sich auf die Entwicklung neuer Metalllegierungen und Herstellungsverfahren. Das Labor verfügt über hochmoderne Werkstoffprüfanlagen und ein Team von 15 Werkstoffwissenschaftlern. Wir wollen als Ergebnis dieser Investition in diesem Jahr 3 neue Produktinnovationen vorstellen.',
      fr: 'Notre nouveau laboratoire de R&D de 2 millions de dollars est maintenant opérationnel, se concentrant sur le développement de nouveaux alliages métalliques et procédés de fabrication. Le laboratoire dispose d\'équipements d\'essai de matériaux de pointe et d\'une équipe de 15 scientifiques des matériaux. Nous visons à introduire 3 innovations produits cette année grâce à cet investissement.',
      es: 'Nuestro nuevo laboratorio de I+D de $2 millones está ahora operativo, enfocado en el desarrollo de nuevas aleaciones metálicas y procesos de fabricación. El laboratorio cuenta con equipos de prueba de materiales de vanguardia y un equipo de 15 científicos de materiales. Nuestro objetivo es presentar 3 innovaciones de productos este año como resultado de esta inversión.',
      ar: 'مختبر البحث والتطوير الجديد لدينا بقيمة 2 مليون دولار أصبح الآن تشغيلًا، مع التركيز على تطوير سبيكات معدنية جديدة وعمليات تصنيع. يتميز المختبر بأجهزة اختبار المواد المتطورة وفريق من 15 عالمًا في المواد. نهدف إلى تقديم 3 ابتكارات منتجات جديدة هذا العام كنتيجة لهذا الاستثمار.'
    },
    summary: {
      en: 'New R&D lab focuses on innovative metal alloys and manufacturing.',
      de: 'Neues Forschungslabor konzentriert sich auf innovative Metalllegierungen und Fertigung.',
      fr: 'Nouveau labo R&D se concentre sur alliages et fabrication innovants.',
      es: 'Nuevo laboratorio de I+D se centra en aleaciones y fabricación innovadoras.',
      ar: 'مختبر بحث وتطوير جديد يركز على السبيكات المعدنية والتصنيع الابتكاري.'
    },
    date: '2024-02-01',
    category: 'Technology',
    image: '/images/news/fabletech-rd-lab.jpg'
  },
  {
    id: 'news-006',
    slug: 'industry-awards-for-excellence-recognition',
    title: {
      en: 'Industry Awards for Excellence',
      de: 'Industriepreise für Exzellenz',
      fr: 'Prix de l\'industrie pour l\'excellence',
      es: 'Premios industriales por excelencia',
      ar: 'جوائز الصناعة للتميز'
    },
    content: {
      en: 'We are honored to receive two prestigious industry awards: "Best Manufacturer 2024" and "Sustainability Innovation Award." These recognitions highlight our dedication to quality, innovation, and environmental responsibility across all our operations.',
      de: 'Wir sind geehrt, zwei renommierte Industriepreise zu erhalten: "Beste Hersteller 2024" und "Nachhaltigkeitsinnovationspreis". Diese Anerkennungen unterstreichen unser Engagement für Qualität, Innovation und Umweltverantwortung in all unseren Betrieben.',
      fr: 'Nous sommes honorés de recevoir deux prix industriels prestigieux: "Meilleur Fabricant 2024" et "Prix d\'Innovation en Durabilité". Ces reconnaissances mettent en évidence notre dévouement à la qualité, à l\'innovation et à la responsabilité environnementale dans toutes nos opérations.',
      es: 'Nos sentimos honrados de recibir dos premios industriales prestigiosos: "Mejor Fabricante 2024" y "Premio a la Innovación en Sostenibilidad". Estos reconocimientos destacan nuestra dedicación a la calidad, la innovación y la responsabilidad ambiental en todas nuestras operaciones.',
      ar: 'نحن فخورون بقبول جائزتين صناعيتين مرموقتين: "أفضل منتج 2024" و"جائزة الابتكار في الاستدامة". هذه التقديرات تبرز التزامنا بالجودة والابتكار والمسؤولية البيئية في جميع عملياتنا.'
    },
    summary: {
      en: 'Two major industry awards recognize our quality and sustainability efforts.',
      de: 'Zwei bedeutende Industriepreise erkennen unsere Qualitäts- und Nachhaltigkeitsbemühungen an.',
      fr: 'Deux prix industriels majeurs reconnaissent nos efforts qualité et durabilité.',
      es: 'Dos grandes premios industriales reconocen nuestros esfuerzos calidad y sostenibilidad.',
      ar: 'جائزتان صناعيتان كبيرتان تعترف بجهودنا في الجودة والاستدامة.'
    },
    date: '2024-02-10',
    category: 'Recognition',
    image: '/images/news/fabletech-awards.jpg'
  },
  {
    id: 'news-007',
    slug: '24-7-customer-support-expansion',
    title: {
      en: 'Expanded Customer Support Hours',
      de: 'Erweiterte Kundenbetreuungszeiten',
      fr: 'Horaires étendus du support client',
      es: 'Horarios extendidos del soporte al cliente',
      ar: 'ساعات دعم العميل الموسعة'
    },
    content: {
      en: 'To better serve our global customers, we are expanding our customer support to 24/7 availability. Our multilingual support team now covers all time zones, ensuring that our customers receive assistance whenever they need it. Additionally, we have launched a new online portal for easier order tracking and management.',
      de: 'Um unsere globalen Kunden besser zu bedienen, erweitern wir unsere Kundenbetreuung auf 24/7-Verfügbarkeit. Unser mehrsprachiges Supportteam deckt jetzt alle Zeitzonen ab und stellt sicher, dass unsere Kunden Hilfe erhalten, wann immer sie sie brauchen. Darüber hinaus haben wir ein neues Online-Portal für einfachere Auftragsverfolgung und -verwaltung eingeführt.',
      fr: 'Pour mieux servir nos clients mondiaux, nous étendons notre support client à une disponibilité 24h/24 et 7j/7. Notre équipe de support multilingue couvre maintenant tous les fuseaux horaires, garantissant que nos clients reçoivent de l\'aide quand ils en ont besoin. De plus, nous avons lancé un nouveau portail en ligne pour un suivi et une gestion des commandes plus faciles.',
      es: 'Para servir mejor a nuestros clientes globales, estamos extendiendo nuestro soporte al cliente a disponibilidad 24/7. Nuestro equipo de soporte multilingüe ahora cubre todas las zonas horarias, garantizando que nuestros clientes reciben asistencia siempre que la necesiten. Además, hemos lanzado un nuevo portal en línea para un seguimiento y gestión de pedidos más fáciles.',
      ar: 'لخدمة عملائنا العالميين بشكل أفضل، نحن نوسع دعم عملائنا إلى توفر 24/7. يغطي فريق الدعم متعدد اللغات لدينا الآن جميع المناطق الزمنية، مما يضمن استلام عملائنا للمساعدة متى احتاجوها. علاوة على ذلك، لقد أطلقنا بوابة عبر الإنترنت جديدة للتتبع والإدارة الطلبات بسهولة.'
    },
    summary: {
      en: '24/7 customer support now available with multilingual team.',
      de: '24/7-Kundenbetreuung jetzt mit mehrsprachigem Team verfügbar.',
      fr: 'Support client 24/7 disponible avec équipe multilingue.',
      es: 'Soporte al cliente 24/7 disponible con equipo multilingüe.',
      ar: 'دعم العميل 24/7 متاح الآن مع فريق متعدد اللغات.'
    },
    date: '2024-02-15',
    category: 'Customer Service',
    image: '/images/news/fabletech-support.jpg'
  },
  {
    id: 'news-008',
    slug: 'southeast-asia-market-expansion',
    title: {
      en: 'New Export Market Expansion: Southeast Asia',
      de: 'Neue Exportmarktexpansion: Südostasien',
      fr: 'Nouvelle expansion du marché d\'exportation: Asie du Sud-Est',
      es: 'Nueva expansión del mercado de exportación: Sudeste Asiático',
      ar: 'توسيع جديد لسوق التصدير: جنوب شرق آسيا'
    },
    content: {
      en: 'We are excited to announce our expansion into Southeast Asian markets. Starting this quarter, we will be establishing distribution partnerships in Vietnam, Thailand, Indonesia, and Malaysia. This strategic move allows us to better serve the rapidly growing industrial sector in the region with our high-quality metal products.',
      de: 'Wir freuen uns, unsere Expansion in die südostasiatischen Märkte ankündigen zu können. Ab diesem Quartal werden wir Vertriebspartnerschaften in Vietnam, Thailand, Indonesien und Malaysia aufbauen. Dieser strategische Schritt ermöglicht es uns, das rasch wachsende Industriesektor in der Region besser mit unseren hochwertigen Metallprodukten zu bedienen.',
      fr: 'Nous avons le plaisir d\'annoncer notre expansion sur les marchés d\'Asie du Sud-Est. À partir de ce trimestre, nous établirons des partenariats de distribution au Vietnam, en Thaïlande, en Indonésie et en Malaisie. Ce mouvement stratégique nous permet de mieux servir le secteur industriel en croissance rapide dans la région avec nos produits métalliques de haute qualité.',
      es: 'Nos complace anunciar nuestra expansión a los mercados del sudeste asiático. A partir de este trimestre, estableceremos alianzas de distribución en Vietnam, Tailandia, Indonesia y Malasia. Este movimiento estratégico nos permite servir mejor al sector industrial en rápido crecimiento en la región con nuestros productos metálicos de alta calidad.',
      ar: 'يسعدنا أن نعلن عن توسعنا في أسواق جنوب شرق آسيا. بدءً من هذا الربع، سنقوم بإنشاء شراكات توزيع في فيتنام وتايلاند وإندونيسيا وماليزيا. تتيح لنا هذه الخطوة الاستراتيجية خدمة القطاع الصناعي سريع النمو في المنطقة بشكل أفضل بمنتجاتنا المعدنية عالية الجودة.'
    },
    summary: {
      en: 'Strategic expansion into Vietnam, Thailand, Indonesia, and Malaysia.',
      de: 'Strategische Expansion nach Vietnam, Thailand, Indonesien und Malaysia.',
      fr: 'Expansion stratégique au Vietnam, en Thaïlande, en Indonésie et en Malaisie.',
      es: 'Expansión estratégica a Vietnam, Tailandia, Indonesia y Malasia.',
      ar: 'توسع استراتيجي إلى فيتنام وتايلاند وإندونيسيا وماليزيا.'
    },
    date: '2024-02-20',
    category: 'Partnership',
    image: '/images/news/fabletech-southeast-asia.jpg'
  },
  {
    id: 'news-009',
    slug: 'erp-system-digital-transformation',
    title: {
      en: 'Digital Transformation: New ERP System Launch',
      de: 'Digitale Transformation: Neues ERP-System gestartet',
      fr: 'Transformation numérique: Lancement du nouveau système ERP',
      es: 'Transformación digital: Lanzamiento del nuevo sistema ERP',
      ar: 'التحول الرقمي: إطلاق نظام تخطيط موارد المؤسسات جديد'
    },
    content: {
      en: 'Our company has successfully implemented a new enterprise resource planning (ERP) system to enhance operational efficiency and customer service. This digital transformation will streamline our production scheduling, inventory management, and order processing. Customers will benefit from improved tracking, faster response times, and real-time visibility into their orders.',
      de: 'Unser Unternehmen hat erfolgreich ein neues Enterprise-Resource-Planning-System (ERP) implementiert, um die betriebliche Effizienz und den Kundenservice zu verbessern. Diese digitale Transformation wird unsere Produktionsplanung, Bestandsverwaltung und Auftragsabwicklung rationalisieren. Kunden werden von verbesserter Verfolgung, schnelleren Reaktionszeiten und Echtzeit-Einblicken in ihre Aufträge profitieren.',
      fr: 'Notre entreprise a réussi à implémenter un nouveau système de planification des ressources d\'entreprise (ERP) pour améliorer l\'efficacité opérationnelle et le service client. Cette transformation numérique rationalisera notre planification de la production, la gestion des stocks et le traitement des commandes. Les clients bénéficieront d\'un meilleur suivi, de délais de réponse plus rapides et d\'une visibilité en temps réel sur leurs commandes.',
      es: 'Nuestra empresa ha implementado con éxito un nuevo sistema de planificación de recursos empresariales (ERP) para mejorar la eficiencia operativa y el servicio al cliente. Esta transformación digital optimizará nuestra programación de producción, gestión de inventario y procesamiento de pedidos. Los clientes se beneficiarán de un mejor seguimiento, tiempos de respuesta más rápidos y visibilidad en tiempo real de sus pedidos.',
      ar: 'نجحت شركتنا في تطبيق نظام جديد لتخطيط موارد المؤسسات (ERP) لتعزيز الكفاءة التشغيلية وخدمة العملاء. سيقوم هذا التحول الرقمي بتبسيط جدولة الإنتاج وإدارة المخزون ومعالجة الطلبات. سيستفيد العملاء من التتبع المحسن وأوقات الاستجابة الأسرع والرؤية في الوقت الحقيقي لطلباتهم.'
    },
    summary: {
      en: 'New ERP system improves operational efficiency and customer service.',
      de: 'Neues ERP-System verbessert betriebliche Effizienz und Kundenservice.',
      fr: 'Nouveau système ERP améliore l\'efficacité opérationnelle et le service client.',
      es: 'Nuevo sistema ERP mejora eficiencia operativa y servicio al cliente.',
      ar: 'نظام ERP جديد يحسن الكفاءة التشغيلية وخدمة العملاء.'
    },
    date: '2024-02-25',
    category: 'Technology',
    image: '/images/news/fabletech-erp.jpg'
  },
  {
    id: 'news-010',
    slug: 'quality-excellence-award-third-consecutive-year',
    title: {
      en: 'Quality Excellence Award from Industry Association',
      de: 'Qualitäts Excellence Award vom Branchenverband',
      fr: 'Prix d\'Excellence en Qualité de l\'Association Industrielle',
      es: 'Premio a la Excelencia en Calidad de la Asociación Industrial',
      ar: 'جائزة التميز في الجودة من الجمعية الصناعية'
    },
    content: {
      en: 'We are honored to receive the Quality Excellence Award from the China Metal Industry Association for the third consecutive year. This prestigious recognition reflects our unwavering commitment to quality, innovation, and customer satisfaction. Our quality management systems and continuous improvement initiatives have set new standards in the industry.',
      de: 'Wir sind geehrt, den Quality Excellence Award des China Metal Industry Association zum dritten Mal in Folge zu erhalten. Diese renommierte Anerkennung spiegelt unser unerschütterliches Engagement für Qualität, Innovation und Kundenzufriedenheit wider. Unsere Qualitätsmanagementsysteme und kontinuierlichen Verbesserungsinitiativen haben neue Standards in der Branche gesetzt.',
      fr: 'Nous sommes honorés de recevoir le Prix d\'Excellence en Qualité de l\'Association Chinoise de l\'Industrie Métallurgique pour la troisième année consécutive. Cette reconnaissance prestigieuse reflète notre engagement inébranlable envers la qualité, l\'innovation et la satisfaction client. Nos systèmes de gestion de la qualité et nos initiatives d\'amélioration continue ont établi de nouvelles normes dans l\'industrie.',
      es: 'Nos sentimos honrados de recibir el Premio a la Excelencia en Calidad de la Asociación de la Industria Metalúrgica de China por tercer año consecutivo. Este reconocimiento prestigieux refleja nuestro compromiso inquebrantable con la calidad, la innovación y la satisfacción del cliente. Nuestros sistemas de gestión de calidad e iniciativas de mejora continua han establecido nuevos estándares en la industria.',
      ar: 'نحن فخورون بقبول جائزة التميز في الجودة من جمعية صناعة المعادن الصينية للسنة الثالثة على التوالي. يعكس هذا التقدير المرموق التزامنا الثابت بالجودة والابتكار ورضا العملاء. لقد حددت أنظمة إدارة الجودة ومبادرات التحسين المستمر لدينا معايير جديدة في الصناعة.'
    },
    summary: {
      en: 'Third consecutive year receiving quality excellence recognition.',
      de: 'Drittes Jahr in Folge Auszeichnung für Qualitätsexzellenz.',
      fr: 'Troisième année consécutive de reconnaissance d\'excellence en qualité.',
      es: 'Tercer año consecutivo recibiendo reconocimiento de excelencia en calidad.',
      ar: 'السنة الثالثة على التوالي للحصول على تقدير التميز في الجودة.'
    },
    date: '2024-03-01',
    category: 'Recognition',
    image: '/images/news/fabletech-quality-award.jpg'
  },
  {
    id: 'news-011',
    slug: 'carbon-neutral-initiative-sustainability',
    title: {
      en: 'Sustainable Manufacturing: Carbon Neutral Initiative',
      de: 'Nachhaltige Fertigung: CO2-Neutral-Initiative',
      fr: 'Fabrication durable: Initiative Carbon Neutre',
      es: 'Fabricación sostenible: Iniciativa Carbono Neutral',
      ar: 'التصنيع المستدام: مبادرة الحياد الكربوني'
    },
    content: {
      en: 'We have launched our Carbon Neutral Initiative, committing to achieve carbon neutrality by 2030. Our comprehensive sustainability strategy includes investing in renewable energy, improving energy efficiency, implementing circular economy practices, and offsetting remaining emissions through verified carbon credit programs. We believe sustainable manufacturing is not just responsibility—it is the future of our industry.',
      de: 'Wir haben unsere CO2-Neutral-Initiative gestartet und verpflichten uns, bis 2030 CO2-Neutralität zu erreichen. Unsere umfassende Nachhaltigkeitsstrategie umfasst Investitionen in erneuerbare Energien, Verbesserung der Energieeffizienz, Umsetzung von Kreislaufwirtschaftspraktiken und Kompensation verbleibender Emissionen durch verifizierte CO2-Zertifikatsprogramme. Wir glauben, dass nachhaltige Fertigung nicht nur Verantwortung ist – es ist die Zukunft unserer Branche.',
      fr: 'Nous avons lancé notre Initiative Carbone Neutre, nous engageant à atteindre la neutralité carbone d\'ici 2030. Notre stratégie de durabilité complète comprend des investissements dans les énergies renouvelables, l\'amélioration de l\'efficacité énergétique, la mise en œuvre de pratiques d\'économie circulaire et la compensation des émissions restantes par des programmes de crédits carbone vérifiés. Nous croyons que la fabrication durable n\'est pas seulement une responsabilité – c\'est l\'avenir de notre industrie.',
      es: 'Hemos lanzado nuestra Iniciativa Carbono Neutral, comprometiéndonos a lograr la neutralidad de carbono para 2030. Nuestra estrategia integral de sostenibilidad incluye invertir en energías renovables, mejorar la eficiencia energética, implementar prácticas de economía circular y compensar las emisiones restantes a través de programas verificados de créditos de carbono. Creemos que la fabricación sostenible no es solo responsabilidad — es el futuro de nuestra industria.',
      ar: 'أطلقنا مبادرتنا للحياد الكربوني، والتزمنا بتحقيق الحياد الكربوني بحلول عام 2030. تتضمن استراتيجيتنا الشاملة للاستدامة الاستثمار في الطاقة المتجددة وتحسين كفاءة الطاقة وتنفيذ ممارسات الاقتصاد الدائري وتعويض الانبعاثات المتبقية من خلال برامج الائتمان الكربوني الموثقة. نؤمن بأن التصنيع المستدام ليس مجرد مسؤولية – إنه مستقبل صناعتنا.'
    },
    summary: {
      en: 'Committed to achieving carbon neutrality by 2030.',
      de: 'Verpflichtung zur CO2-Neutralität bis 2030.',
      fr: 'Engagement à atteindre la neutralité carbone d\'ici 2030.',
      es: 'Compromiso de lograr neutralidad de carbono para 2030.',
      ar: 'الالتزام بتحقيق الحياد الكربوني بحلول عام 2030.'
    },
    date: '2024-03-05',
    category: 'New Products',
    image: '/images/news/fabletech-carbon-neutral.jpg'
  },
  {
    id: 'news-012',
    slug: 'employee-training-skills-development-program',
    title: {
      en: 'Employee Training Program: Skills Development',
      de: 'Mitarbeiterschulungsprogramm: Kompetenzentwicklung',
      fr: 'Programme de formation des employés: Développement des compétences',
      es: 'Programa de capacitación de empleados: Desarrollo de habilidades',
      ar: 'برنامج تدريب الموظفين: تطوير المهارات'
    },
    content: {
      en: 'We are investing heavily in our workforce with a comprehensive skills development program. This year, over 200 employees will participate in advanced technical training, professional development courses, and safety certification programs. Our investment in human capital ensures that our team stays at the forefront of industry best practices and maintains our competitive edge.',
      de: 'Wir investieren stark in unsere Belegschaft mit einem umfassenden Kompetenzentwicklungsprogramm. In diesem Jahr werden über 200 Mitarbeiter an technischen Schulungen, beruflichen Weiterbildungslehrgängen und Sicherheitszertifizierungsprogrammen teilnehmen. Unsere Investition in Humankapital stellt sicher, dass unser Team an der Spitze der Branchen-Best Practices bleibt und unseren Wettbewerbsvorteil behält.',
      fr: 'Nous investissons massivement dans notre main-d\'œuvre avec un programme complet de développement des compétences. Cette année, plus de 200 employés participeront à des formations techniques avancées, des cours de développement professionnel et des programmes de certification de sécurité. Notre investissement dans le capital humain garantit que notre équipe reste à la pointe des meilleures pratiques de l\'industrie et maintient notre avantage concurrentiel.',
      es: 'Estamos invirtiendo fuertemente en nuestra fuerza laboral con un programa integral de desarrollo de habilidades. Este año, más de 200 empleados participarán en capacitación técnica avanzada, cursos de desarrollo profesional y programas de certificación de seguridad. Nuestra inversión en capital humano asegura que nuestro equipo se mantenga a la vanguardia de las mejores prácticas de la industria y mantenga nuestra ventaja competitiva.',
      ar: 'نحن نستثمر بكثافة في قوتنا العاملة من خلال برنامج شامل لتطوير المهارات. هذا العام، سيشارك أكثر من 200 موظف في التدريب التقني المتقدم ودورات التطوير المهني وبرامج شهادة السلامة. يضمن استثمارنا في رأس المال البشري أن فريقنا يبقى في طليعة أفضل الممارسات الصناعية ويحافظ على ميزتنا التنافسية.'
    },
    summary: {
      en: '200+ employees enrolled in advanced training programs this year.',
      de: 'Über 200 Mitarbeiter in diesem Jahr in Schulungsprogrammen eingeschrieben.',
      fr: 'Plus de 200 employés inscrits à des programmes de formation avancés cette année.',
      es: 'Más de 200 empleados inscritos en programas de capacitación avanzados este año.',
      ar: 'أكثر من 200 موظف مسجلون في برامج التدريب المتقدم هذا العام.'
    },
    date: '2024-03-10',
    category: 'Company News',
    image: '/images/news/fabletech-training.jpg'
  },
  {
    id: 'news-013',
    slug: 'technical-documentation-portal-launch',
    title: {
      en: 'Enhanced Technical Documentation Portal',
      de: 'Verbessertes technisches Dokumentationsportal',
      fr: 'Portail de documentation technique amélioré',
      es: 'Portal de documentación técnica mejorado',
      ar: 'بوابة الوثائق التقنية المحسنة'
    },
    content: {
      en: 'We have launched a new technical documentation portal providing customers with easy access to product specifications, material data sheets, installation guides, and CAD drawings. The portal features advanced search capabilities, multilingual support, and regularly updated content. Customers can now download all necessary documentation instantly from our website.',
      de: 'Wir haben ein neues technisches Dokumentationsportal gestartet, das Kunden einfachen Zugang zu Produktspezifikationen, Materialdatenblättern, Installationsanleitungen und CAD-Zeichnungen bietet. Das Portal verfügt über erweiterte Suchfunktionen, mehrsprachige Unterstützung und regelmäßig aktualisierte Inhalte. Kunden können jetzt alle erforderlichen Dokumentationen sofort von unserer Website herunterladen.',
      fr: 'Nous avons lancé un nouveau portail de documentation technique offrant aux clients un accès facile aux spécifications des produits, fiches de données matériaux, guides d\'installation et dessins CAO. Le portail dispose de capacités de recherche avancées, d\'un support multilingue et de contenus régulièrement mis à jour. Les clients peuvent désormais télécharger instantanément toute la documentation nécessaire depuis notre site Web.',
      es: 'Hemos lanzado un nuevo portal de documentación técnica que proporciona a los clientes fácil acceso a especificaciones de productos, hojas de datos de materiales, guías de instalación y dibujos CAD. El portal cuenta con capacidades de búsqueda avanzadas, soporte multilingüe y contenido actualizado regularmente. Los clientes ahora pueden descargar toda la documentación necesaria instantáneamente desde nuestro sitio web.',
      ar: 'أطلقنا بوابة جديدة للوثائق التقنية توفر للعملاء وصولاً سهلاً إلى مواصفات المنتجات وأوراق بيانات المواد وأدلة التثبيت ورسومات CAD. تتميز البوابة بقدرات بحث متقدمة ودعم متعدد اللغات ومحتوى محدث بانتظام. يمكن للعملاء الآن تحميل جميع الوثائق اللازمة فورًا من موقعنا على الويب.'
    },
    summary: {
      en: 'New portal provides instant access to technical documentation.',
      de: 'Neues Portal für sofortigen Zugang zu technischer Dokumentation.',
      fr: 'Nouveau portail pour accès instantané à la documentation technique.',
      es: 'Nuevo portal proporciona acceso instantáneo a documentación técnica.',
      ar: 'بوابة جديدة توفر وصولاً فوريًا إلى الوثائق التقنية.'
    },
    date: '2024-03-15',
    category: 'Customer Service',
    image: '/images/news/fabletech-portal.jpg'
  },
  {
    id: 'news-014',
    slug: 'hannover-messe-2024-invitation',
    title: {
      en: 'International Trade Show: Hannover Messe 2024',
      de: 'Internationale Fachmesse: Hannover Messe 2024',
      fr: 'Salon international: Hannover Messe 2024',
      es: 'Feria internacional: Hannover Messe 2024',
      ar: 'معرض تجاري دولي: هانوفر ميسي 2024'
    },
    content: {
      en: 'We are proud to participate in Hannover Messe 2024, the world\'s leading industrial trade fair. Visit our booth to discover our latest innovations in metal products, discuss custom solutions with our engineering team, and explore partnership opportunities. We will be showcasing our new sustainable product line and advanced manufacturing capabilities.',
      de: 'Wir sind stolz, an der Hannover Messe 2024 teilzunehmen, der weltweit führenden Industriemesse. Besuchen Sie unseren Stand, um unsere neuesten Innovationen bei Metallprodukten zu entdecken, mit unserem Ingenieurteam kundenspezifische Lösungen zu besprechen und Partnerschaftsmöglichkeiten zu erkunden. Wir präsentieren unsere neue nachhaltige Produktlinie und fortschrittliche Fertigungskapazitäten.',
      fr: 'Nous sommes impatients de participer à la Hannover Messe 2024, le premier salon industriel mondial. Visitez notre stand pour découvrir nos dernières innovations en produits métalliques, discuter de solutions personnalisées avec notre équipe d\'ingénierie et explorer les opportunités de partenariat. Nous présenterons notre nouvelle ligne de produits durables et nos capacités de fabrication avancées.',
      es: 'Nos orgullece participar en Hannover Messe 2024, la feria industrial líder mundial. Visite nuestro stand para descubrir nuestras últimas innovaciones en productos metálicos, discutir soluciones personalizadas con nuestro equipo de ingeniería y explorar oportunidades de asociación. Presentaremos nuestra nueva línea de productos sostenibles y capacidades de fabricación avanzadas.',
      ar: 'نحن فخورون بالمشاركة في هانوفر ميسي 2024، المعرض الصناعي الرائد عالمياً. قم بزيارة جناحنا لاكتشاف أحدث ابتكاراتنا في المنتجات المعدنية، ومناقشة الحلول المخصصة مع فريق الهندسة لدينا، واستكشاف فرص الشراكة. سنعرض خط منتجاتنا الجديد المستدام وقدرات التصنيع المتقدمة.'
    },
    summary: {
      en: 'Join us at the world\'s leading industrial trade fair.',
      de: 'Besuchen Sie uns auf der weltweit führenden Industriemesse.',
      fr: 'Rejoignez-nous au premier salon industriel mondial.',
      es: 'Visítenos en la feria industrial líder mundial.',
      ar: 'انضم إلينا في المعرض الصناعي الرائد عالمياً.'
    },
    date: '2024-03-20',
    category: 'Company News',
    image: '/images/news/fabletech-hannover.jpg'
  }
];

export function getNews(locale: string = 'en'): News[] {
  return news;
}

export function getNewsById(id: string): News | undefined {
  return news.find(n => n.id === id);
}

export function getNewsBySlug(slug: string): News | undefined {
  return news.find(n => n.slug === slug);
}

export function getNewsCategories(): string[] {
  return [...new Set(news.map(n => n.category))];
}