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
      en: 'FableTech Group Announces Production Facility Expansion',
      de: 'FableTech Group kündigt Erweiterung der Produktionsstätte an',
      fr: 'FableTech Group annonce l\'extension de son usine de production',
      es: 'FableTech Group anuncia la expansión de su planta de producción',
      ar: 'توسع FableTech Group منشأة الإنتاج'
    },
    content: {
      en: 'FableTech Group is excited to announce a major expansion of our production facility. This $5M investment will increase FableTech manufacturing capacity by 40%, allowing us to better serve our global customers. The new FableTech facility will feature state-of-the-art automation technology, including robotic welding systems and AI-powered quality control. This expansion will create 50 new jobs and strengthen FableTech position as a leading metal products manufacturer. FableTech Group remains committed to innovation and excellence in everything we do.',
      de: 'FableTech Group freut sich, eine bedeutende Erweiterung unserer Produktionsstätte anzukündigen. Diese 5-Millionen-Dollar-Investition wird die Produktionskapazität von FableTech um 40% erhöhen und es uns ermöglichen, unsere globalen Kunden besser zu bedienen. Die neue FableTech-Anlage wird mit modernster Automatisierungstechnologie ausgestattet sein, einschließlich robotischer Schweißsysteme und KI-gesteuerter Qualitätskontrolle.',
      fr: 'FableTech Group a le plaisir d\'annoncer une extension majeure de notre usine de production. Cet investissement de 5 millions de dollars augmentera la capacité de fabrication de FableTech de 40%, nous permettant de mieux servir nos clients mondiaux. La nouvelle installation de FableTech disposera de technologies d\'automatisation de pointe.',
      es: 'FableTech Group se complace en anunciar una importante expansión de nuestra planta de producción. Esta inversión de $5M aumentará la capacidad de fabricación de FableTech en un 40%, lo que nos permitirá servir mejor a nuestros clientes globales.',
      ar: 'يسعد FableTech Group أن تعلن عن توسع كبير لمنشأة الإنتاج لدينا. ستؤدي هذه الاستثمارية بقيمة 5 ملايين دولار إلى زيادة سعة تصنيع FableTech بنسبة 40%.'
    },
    summary: {
      en: 'FableTech Group production facility expansion project underway with $5M investment.',
      de: 'Projekt zur Erweiterung der Produktionsstätte von FableTech Group läuft mit 5-Millionen-Dollar-Investition.',
      fr: 'Projet d\'extension de l\'usine de production de FableTech Group en cours avec un investissement de 5 millions de dollars.',
      es: 'Proyecto de expansión de planta de producción de FableTech Group en marcha con inversión de $5M.',
      ar: 'مشروع توسع منشأة الإنتاج FableTech Group قيد التنفيذ مع استثمار 5 ملايين دولار.'
    },
    date: '2024-01-15',
    category: 'Company News',
    image: '/images/news/fabletech-factory.jpg'
  },
  {
    id: 'news-002',
    slug: 'iso-9001-2015-certification-renewed',
    title: {
      en: 'FableTech Group Successfully Renews ISO 9001:2015 Certification',
      de: 'FableTech Group erneuert erfolgreich ISO 9001:2015-Zertifizierung',
      fr: 'FableTech Group renouvelle avec succès sa certification ISO 9001:2015',
      es: 'FableTech Group renueva con éxito su certificación ISO 9001:2015',
      ar: 'تجدد FableTech Group شهادة ISO 9001:2015 بنجاح'
    },
    content: {
      en: 'FableTech Group is proud to announce that our company has successfully renewed our ISO 9001:2015 quality management certification. This achievement demonstrates FableTech commitment to delivering the highest quality products and services to our customers worldwide. The rigorous audit process covered all aspects of FableTech operations, from raw material sourcing to final product delivery. FableTech Group has maintained this prestigious certification continuously, reflecting our dedication to quality excellence.',
      de: 'FableTech Group ist stolz zu verkünden, dass unser Unternehmen seine ISO 9001:2015-Qualitätsmanagementzertifizierung erfolgreich erneuert hat. Diese Errungenschaft zeigt das Engagement von FableTech für die Lieferung von Produkten und Dienstleistungen höchster Qualität an unsere Kunden weltweit.',
      fr: 'FableTech Group est fière d\'annoncer que notre entreprise a renouvelé avec succès sa certification de gestion de la qualité ISO 9001:2015. Cette réalisation démontre l\'engagement de FableTech envers la fourniture de produits et services de la plus haute qualité.',
      es: 'FableTech Group se enorgullece en anunciar que nuestra empresa ha renovado con éxito su certificación de gestión de calidad ISO 9001:2015. Este logro demuestra el compromiso de FableTech con la entrega de productos y servicios de la más alta calidad.',
      ar: 'تفخر FableTech Group بأن تعلن أن شركتنا أتمت إعادة تأكيد شهادة إدارة الجودة ISO 9001:2015 بنجاح. يظهر هذا الإنجاز التزام FableTech بتقديم منتجات وخدمات ذات جودة عالية.'
    },
    summary: {
      en: 'FableTech Group maintains ISO 9001:2015 quality certification.',
      de: 'FableTech Group behält die ISO 9001:2015-Qualitätszertifizierung bei.',
      fr: 'FableTech Group maintient sa certification qualité ISO 9001:2015.',
      es: 'FableTech Group mantiene su certificación de calidad ISO 9001:2015.',
      ar: 'تحتفظ FableTech Group بثمارة الجودة ISO 9001:2015.'
    },
    date: '2024-01-10',
    category: 'Certification',
    image: '/images/news/fabletech-certification.jpg'
  },
  {
    id: 'news-003',
    slug: 'sustainable-steel-product-line-launch',
    title: {
      en: 'FableTech Group Launches Sustainable Steel Product Line',
      de: 'FableTech Group lanciert nachhaltige Stahlproduktlinie',
      fr: 'FableTech Group lance une gamme de produits en acier durable',
      es: 'FableTech Group lanza línea de productos de acero sostenible',
      ar: 'تطلق FableTech Group خط منتجات الفولاذ المستدام'
    },
    content: {
      en: 'FableTech Group is proud to introduce our new sustainable steel product line, manufactured using 100% recycled materials. These eco-friendly products meet the highest industry standards while reducing environmental impact. Available now for pre-order. All products in this FableTech line carry our Green Manufacturing certification and help our customers reduce their carbon footprint. FableTech Group is committed to sustainability and innovation.',
      de: 'FableTech Group ist stolz, unsere neue nachhaltige Stahlproduktlinie vorzustellen, die unter Verwendung von 100% recycelten Materialien hergestellt wird. Diese umweltfreundlichen Produkte erfüllen die höchsten Branchenstandards und reduzieren gleichzeitig die Umweltauswirkungen.',
      fr: 'FableTech Group est fière de présenter notre nouvelle gamme de produits en acier durable, fabriquée à partir de matériaux 100% recyclés. Ces produits écologiques répondent aux normes industrielles les plus strictes.',
      es: 'FableTech Group se enorgullece en presentar nuestra nueva línea de productos de acero sostenible, fabricada con materiales 100% reciclados. Estos productos ecológicos cumplen con los estándares industriales más altos.',
      ar: 'تفخر FableTech Group بأن تقدم خط المنتجات الفولاذية المستدامة الجديدة لدينا، المصنوعة باستخدام مواد مستعادة بنسبة 100%. تحمل جميع المنتجات في هذا الخط شهادة التصنيع الأخضر من FableTech.'
    },
    summary: {
      en: 'FableTech Group launches eco-friendly steel product line.',
      de: 'FableTech Group lanciert umweltfreundliche Stahlproduktlinie.',
      fr: 'FableTech Group lance une gamme de produits en acier écologiques.',
      es: 'FableTech Group lanza línea de productos de acero ecológicos.',
      ar: 'تطلق FableTech Group خط منتجات الفولاذ الصديق للبيئة.'
    },
    date: '2024-01-05',
    category: 'New Products',
    image: '/images/news/fabletech-sustainable-steel.jpg'
  },
  {
    id: 'news-004',
    slug: 'global-shipping-partnership-announcement',
    title: {
      en: 'FableTech Group Forms Global Shipping Partnership',
      de: 'FableTech Group schließt globale Versandpartnerschaft',
      fr: 'FableTech Group forme un partenariat d\'expédition mondial',
      es: 'FableTech Group forma alianza de envíos global',
      ar: 'تنشئ FableTech Group شراكة شحن عالمية'
    },
    content: {
      en: 'FableTech Group is pleased to announce a new strategic partnership with OceanLink Logistics, a leading global shipping provider. This partnership will enable FableTech to offer faster, more reliable international shipping to our customers in over 60 countries. FableTech customers will benefit from reduced delivery times by up to 30% and improved tracking capabilities through real-time GPS monitoring.',
      de: 'FableTech Group freut sich, eine neue strategische Partnerschaft mit OceanLink Logistics, einem führenden globalen Versandanbieter, zu ankündigen. Diese Partnerschaft wird es FableTech ermöglichen, schnelleren und zuverlässigeren internationalen Versand an unsere Kunden in über 60 Ländern anzubieten.',
      fr: 'FableTech Group a le plaisir d\'annoncer un nouveau partenariat stratégique avec OceanLink Logistics, un fournisseur de transport maritime mondial de premier plan. Ce partenariat permettra à FableTech d\'offrir un envoi international plus rapide et plus fiable.',
      es: 'FableTech Group se complace en anunciar una nueva alianza estratégica con OceanLink Logistics, un proveedor de envíos global de primer nivel. Esta alianza permitirá a FableTech ofrecer envíos internacionales más rápidos y fiables.',
      ar: 'يسعد FableTech Group أن تعلن عن شراكة استراتيجية جديدة مع OceanLink Logistics، وهي مورد شحن عالمي رائد. ستسمح هذه الشراكة لـ FableTech بتقديم شحن دولي أسرع وأكثر موثوقية.'
    },
    summary: {
      en: 'FableTech Group partners with leading logistics provider.',
      de: 'FableTech Group arbeitet mit führendem Logistikanbieter zusammen.',
      fr: 'FableTech Group s\'associe à un fournisseur logistique de premier plan.',
      es: 'FableTech Group se asocia con proveedor logístico de primer nivel.',
      ar: 'تعاون FableTech Group مع مورد لوجستي رائد.'
    },
    date: '2024-01-20',
    category: 'Partnership',
    image: '/images/news/fabletech-shipping.jpg'
  },
  {
    id: 'news-005',
    slug: 'advanced-rd-laboratory-grand-opening',
    title: {
      en: 'FableTech Group Opens Advanced R&D Laboratory',
      de: 'FableTech Group eröffnet fortschrittliches F&E-Labor',
      fr: 'FableTech Group inaugure un laboratoire de R&D avancé',
      es: 'FableTech Group inaugura laboratorio de I+D avanzado',
      ar: 'تفتح FableTech Group مختبر بحث وتطوير متقدم'
    },
    content: {
      en: 'FableTech Group new $2M R&D laboratory is now operational, focusing on developing new metal alloys and manufacturing processes. The FableTech facility features cutting-edge material testing equipment and a team of 15 materials scientists. FableTech Group aims to introduce 3 new product innovations this year as a result of this investment. This lab represents FableTech commitment to innovation and technological leadership.',
      de: 'Das neue 2-Millionen-Dollar-F&E-Labor von FableTech Group ist jetzt betriebsbereit und konzentriert sich auf die Entwicklung neuer Metalllegierungen und Herstellungsverfahren. Die FableTech-Anlage verfügt über hochmoderne Werkstoffprüfanlagen.',
      fr: 'Le nouveau laboratoire de R&D de 2 millions de dollars de FableTech Group est maintenant opérationnel, se concentrant sur le développement de nouveaux alliages métalliques et procédés de fabrication. L\'installation de FableTech dispose d\'équipements d\'essai de matériaux de pointe.',
      es: 'El nuevo laboratorio de I+D de $2M de FableTech Group está ahora operativo, enfocado en el desarrollo de nuevas aleaciones metálicas y procesos de fabricación. La instalación de FableTech cuenta con equipos de prueba de materiales de vanguardia.',
      ar: 'أصبح مختبر البحث والتطوير الجديد بقيمة 2 ملايين دولار من FableTech Group الآن تشغيل، مع التركيز على تطوير سبيكات معدنية جديدة وعمليات تصنيع. تتميز منشأة FableTech بأجهزة اختبار المواد المتطورة.'
    },
    summary: {
      en: 'FableTech Group invests $2M in research and development.',
      de: 'FableTech Group investiert 2 Millionen Dollar in Forschung und Entwicklung.',
      fr: 'FableTech Group investit 2 millions de dollars en recherche et développement.',
      es: 'FableTech Group invierte $2M en investigación y desarrollo.',
      ar: 'تستثمر FableTech Group 2 ملايين دولار في البحث والتطوير.'
    },
    date: '2024-02-01',
    category: 'Technology',
    image: '/images/news/fabletech-rd-lab.jpg'
  },
  {
    id: 'news-006',
    slug: 'industry-awards-for-excellence-recognition',
    title: {
      en: 'FableTech Group Receives Multiple Industry Awards',
      de: 'FableTech Group erhält mehrere Branchenpreise',
      fr: 'FableTech Group reçoit plusieurs prix de l\'industrie',
      es: 'FableTech Group recibe varios premios de la industria',
      ar: 'تتلقي FableTech Group عدة جوائز صناعية'
    },
    content: {
      en: 'FableTech Group is honored to receive two prestigious industry awards: "Best Manufacturer 2024" and "Sustainability Innovation Award." These recognitions highlight FableTech dedication to quality, innovation, and environmental responsibility across all our operations. FableTech Group thanks our customers and partners for their continued support.',
      de: 'FableTech Group ist geehrt, zwei renommierte Branchenpreise zu erhalten: "Beste Herstellerin 2024" und "Nachhaltigkeitsinnovationspreis". Diese Anerkennungen unterstreichen das Engagement von FableTech für Qualität, Innovation und Umweltverantwortung in allen unseren Betrieben.',
      fr: 'FableTech Group est honorée de recevoir deux prix industriels prestigieux: "Meilleure Fabricante 2024" et "Prix d\'Innovation en Durabilité". Ces récompenses mettent en évidence le dévouement de FableTech envers la qualité, l\'innovation et la responsabilité environnementale.',
      es: 'FableTech Group se siente honrada en recibir dos premios industriales prestigiosos: "Mejor Fabricante 2024" y "Premio a la Innovación en Sostenibilidad". Estos reconocimientos destacan la dedicación de FableTech a la calidad, la innovación y la responsabilidad ambiental.',
      ar: 'تتشرف FableTech Group بأن تتلقى جائزتين صناعيتين مرموقتين: "أفضل مصنع 2024" و"جائزة الابتكار في الاستدامة". تسلط هذه التقديرات التزام FableTech بالجودة والابتكار والمسؤولية البيئية.'
    },
    summary: {
      en: 'FableTech Group recognized with industry excellence awards.',
      de: 'FableTech Group ausgezeichnet mit Branchenauszeichnungen für Exzellenz.',
      fr: 'FableTech Group reconnue avec des prix d\'excellence industrielle.',
      es: 'FableTech Group reconocida con premios de excelencia industrial.',
      ar: 'تعترف FableTech Group بجوائز التميز الصناعي.'
    },
    date: '2024-02-10',
    category: 'Recognition',
    image: '/images/news/fabletech-awards.jpg'
  },
  {
    id: 'news-007',
    slug: '24-7-customer-support-expansion',
    title: {
      en: 'FableTech Group Expands 24/7 Customer Support',
      de: 'FableTech Group erweitert 24/7-Kundenbetreuung',
      fr: 'FableTech Group étend le support client 24h/24 et 7j/7',
      es: 'FableTech Group amplía el soporte al cliente 24/7',
      ar: 'توسع FableTech Group دعم العملاء 24/7'
    },
    content: {
      en: 'To better serve our global customers, FableTech Group is expanding our customer support to 24/7 availability. Our multilingual FableTech support team now covers all time zones, ensuring that our customers receive assistance whenever they need it. Additionally, FableTech has launched a new online portal for easier order tracking and management.',
      de: 'Um unsere globalen Kunden besser zu bedienen, erweitert FableTech Group unsere Kundenbetreuung auf 24/7-Verfügbarkeit. Unser mehrsprachiges FableTech-Supportteam deckt jetzt alle Zeitzonen ab und stellt sicher, dass unsere Kunden Hilfe erhalten, wann immer sie sie brauchen.',
      fr: 'Pour mieux servir nos clients mondiaux, FableTech Group étend notre support client à une disponibilité 24h/24 et 7j/7. Notre équipe de support multilingue de FableTech couvre maintenant tous les fuseaux horaires, garantissant que nos clients reçoivent de l\'aide quand ils en ont besoin.',
      es: 'Para servir mejor a nuestros clientes globales, FableTech Group amplía nuestro soporte al cliente a disponibilidad 24/7. Nuestro equipo de soporte multilingüe de FableTech ahora cubre todas las zonas horarias, garantizando que nuestros clientes reciben asistencia siempre que la necesiten.',
      ar: 'لخدمة عملائنا العالميين بشكل أفضل، تُوسع FableTech Group دعم العملاء لدينا إلى توفر 24/7. يغطي فريق الدعم متعدد اللغات لدينا في FableTech الآن جميع المناطق الزمنية.'
    },
    summary: {
      en: 'FableTech Group launches 24/7 multilingual customer support.',
      de: 'FableTech Group lanciert 24/7 mehrsprachigen Kundensupport.',
      fr: 'FableTech Group lance le support client multilingue 24/7.',
      es: 'FableTech Group lanza soporte al cliente multilingüe 24/7.',
      ar: 'تطلق FableTech Group دعم عملاء متعدد اللغات 24/7.'
    },
    date: '2024-02-15',
    category: 'Customer Service',
    image: '/images/news/fabletech-support.jpg'
  },
  {
    id: 'news-008',
    slug: 'southeast-asia-market-expansion',
    title: {
      en: 'FableTech Group Expands to Southeast Asia Markets',
      de: 'FableTech Group expandiert nach Südostasien-Märkten',
      fr: 'FableTech Group s\'étend aux marchés d\'Asie du Sud-Est',
      es: 'FableTech Group se expande a mercados del sudeste asiático',
      ar: 'توسع FableTech Group إلى أسواق جنوب شرق آسيا'
    },
    content: {
      en: 'FableTech Group is excited to announce our expansion into Southeast Asian markets. Starting this quarter, FableTech will be establishing distribution partnerships in Vietnam, Thailand, Indonesia, and Malaysia. This strategic move allows FableTech to better serve the rapidly growing industrial sector in the region with our high-quality metal products.',
      de: 'FableTech Group freut sich, unsere Expansion in die südostasiatischen Märkte ankündigen zu können. Ab diesem Quartal wird FableTech Vertriebspartnerschaften in Vietnam, Thailand, Indonesien und Malaysia aufbauen.',
      fr: 'FableTech Group a le plaisir d\'annoncer notre expansion sur les marchés d\'Asie du Sud-Est. À partir de ce trimestre, FableTech établira des partenariats de distribution au Vietnam, en Thaïlande, en Indonésie et en Malaisie.',
      es: 'FableTech Group se complace en anunciar nuestra expansión a los mercados del sudeste asiático. A partir de este trimestre, FableTech establecerá alianzas de distribución en Vietnam, Tailandia, Indonesia y Malasia.',
      ar: 'يسعد FableTech Group أن تعلن عن توسعنا إلى أسواق جنوب شرق آسيا. بدءًا من هذا الربع، ستقوم FableTech بإنشاء شراكات توزيع في فيتنام وتايلاند وإندونيسيا وماليزيا.'
    },
    summary: {
      en: 'FableTech Group enters new markets in Southeast Asia.',
      de: 'FableTech Group tritt in neue Märkte in Südostasien ein.',
      fr: 'FableTech Group entre dans de nouveaux marchés en Asie du Sud-Est.',
      es: 'FableTech Group entra en nuevos mercados en el sudeste asiático.',
      ar: 'تدخل FableTech Group أسواق جديدة في جنوب شرق آسيا.'
    },
    date: '2024-02-20',
    category: 'Partnership',
    image: '/images/news/fabletech-southeast-asia.jpg'
  },
  {
    id: 'news-009',
    slug: 'erp-system-digital-transformation',
    title: {
      en: 'FableTech Group Implements New ERP System',
      de: 'FableTech Group implementiert neues ERP-System',
      fr: 'FableTech Group implémente un nouveau système ERP',
      es: 'FableTech Group implementa nuevo sistema ERP',
      ar: 'تنفذ FableTech Group نظام ERP جديد'
    },
    content: {
      en: 'FableTech Group has successfully implemented a new enterprise resource planning (ERP) system to enhance operational efficiency and customer service. This digital transformation will streamline FableTech production scheduling, inventory management, and order processing. FableTech customers will benefit from improved tracking, faster response times, and real-time visibility into their orders.',
      de: 'FableTech Group hat erfolgreich ein neues Enterprise-Resource-Planning-System (ERP) implementiert, um die betriebliche Effizienz und den Kundenservice zu verbessern. Diese digitale Transformation wird die Produktionsplanung, Bestandsverwaltung und Auftragsabwicklung von FableTech rationalisieren.',
      fr: 'FableTech Group a réussi à implémenter un nouveau système de planification des ressources d\'entreprise (ERP) pour améliorer l\'efficacité opérationnelle et le service client. Cette transformation numérique rationalisera la planification de la production, la gestion des stocks et le traitement des commandes de FableTech.',
      es: 'FableTech Group ha implementado con éxito un nuevo sistema de planificación de recursos empresariales (ERP) para mejorar la eficiencia operativa y el servicio al cliente. Esta transformación digital optimizará la programación de producción, la gestión de inventario y el procesamiento de pedidos de FableTech.',
      ar: 'نجحت FableTech Group بتنفيذ نظام جديد لتخطيط موارد المؤسسات (ERP) لتعزيز الكفاءة التشغيلية وخدمة العملاء. ستقوم هذه التحول الرقمي بتبسيط جدولة الإنتاج وإدارة المخزون ومعالجة الطلبات لـ FableTech.'
    },
    summary: {
      en: 'FableTech Group completes major digital transformation.',
      de: 'FableTech Group schließt bedeutende digitale Transformation ab.',
      fr: 'FableTech Group termine une transformation numérique majeure.',
      es: 'FableTech Group completa una transformación digital importante.',
      ar: 'تكمل FableTech Group تحولًا رقميًا كبيرًا.'
    },
    date: '2024-02-25',
    category: 'Technology',
    image: '/images/news/fabletech-erp.jpg'
  },
  {
    id: 'news-010',
    slug: 'quality-excellence-award-third-consecutive-year',
    title: {
      en: 'FableTech Group Wins Quality Excellence Award',
      de: 'FableTech Group gewinnt Qualitätsexzellenzpreis',
      fr: 'FableTech Group remporte le prix d\'excellence en qualité',
      es: 'FableTech Group gana el premio a la excelencia en calidad',
      ar: 'تفوز FableTech Group بجائزة التميز في الجودة'
    },
    content: {
      en: 'FableTech Group is honored to receive the Quality Excellence Award from the China Metal Industry Association for the third consecutive year. This prestigious recognition reflects FableTech unwavering commitment to quality, innovation, and customer satisfaction. Our FableTech quality management systems and continuous improvement initiatives have set new standards in the industry.',
      de: 'FableTech Group ist geehrt, den Qualitätsexzellenzpreis der China Metal Industry Association zum dritten Mal in Folge zu erhalten. Diese renommierte Anerkennung spiegelt das unerschütterliche Engagement von FableTech für Qualität, Innovation und Kundenzufriedenheit wider.',
      fr: 'FableTech Group est honorée de recevoir le Prix d\'Excellence en Qualité de l\'Association Chinoise de l\'Industrie Métallurgique pour la troisième année consécutive. Cette reconnaissance prestigieuse reflète l\'engagement inébranlable de FableTech envers la qualité, l\'innovation et la satisfaction client.',
      es: 'FableTech Group se siente honrada en recibir el Premio a la Excelencia en Calidad de la Asociación de la Industria Metalúrgica de China por tercer año consecutivo. Este reconocimiento prestigioso refleja el compromiso inquebrantable de FableTech con la calidad, la innovación y la satisfacción del cliente.',
      ar: 'تتشرف FableTech Group بأن تتلقى جائزة التميز في الجودة من جمعية صناعة المعادن الصينية للسنة الثالثة على التوالي. يعكس هذا التقدير المرموق التزام FableTech الثابت بالجودة والابتكار ورضا العملاء.'
    },
    summary: {
      en: 'FableTech Group quality recognized for third straight year.',
      de: 'Qualität von FableTech Group zum dritten Mal in Folge anerkannt.',
      fr: 'Qualité de FableTech Group reconnue pour la troisième année consécutive.',
      es: 'Calidad de FableTech Group reconocida por tercer año consecutivo.',
      ar: 'تم الاعتراف بجودة FableTech Group للسنة الثالثة على التوالي.'
    },
    date: '2024-03-01',
    category: 'Recognition',
    image: '/images/news/fabletech-quality-award.jpg'
  },
  {
    id: 'news-011',
    slug: 'carbon-neutral-initiative-sustainability',
    title: {
      en: 'FableTech Group Launches Carbon Neutral Initiative',
      de: 'FableTech Group lanciert CO2-neutralitätsinitiative',
      fr: 'FableTech Group lance une initiative carbone neutre',
      es: 'FableTech Group lanza iniciativa de neutralidad de carbono',
      ar: 'تطلق FableTech Group مبادرة الحياد الكربوني'
    },
    content: {
      en: 'FableTech Group has launched our Carbon Neutral Initiative, committing to achieve carbon neutrality by 2030. Our comprehensive FableTech sustainability strategy includes investing in renewable energy, improving energy efficiency, implementing circular economy practices, and offsetting remaining emissions through verified carbon credit programs. FableTech believes sustainable manufacturing is not just responsibility—it is the future of our industry.',
      de: 'FableTech Group hat unsere CO2-Neutralitätsinitiative gestartet und verpflichtet sich, bis 2030 CO2-Neutralität zu erreichen. Unsere umfassende FableTech-Nachhaltigkeitsstrategie umfasst Investitionen in erneuerbare Energien.',
      fr: 'FableTech Group a lancé notre Initiative Carbone Neutre, nous engageant à atteindre la neutralité carbone d\'ici 2030. Notre stratégie de durabilité complète de FableTech comprend des investissements dans les énergies renouvelables.',
      es: 'FableTech Group ha lanzado nuestra Iniciativa Carbono Neutral, comprometiéndonos a lograr la neutralidad de carbono para 2030. Nuestra estrategia integral de sostenibilidad de FableTech incluye invertir en energías renovables.',
      ar: 'أطلقت FableTech Group مبادرة الحياد الكربونية لدينا، والتزامنا بتحقيق الحياد الكربوني بحلول عام 2030. تشمل استراتيجية الاستدامة الشاملة لدينا في FableTech الاستثمار في الطاقة المتجددة.'
    },
    summary: {
      en: 'FableTech Group commits to carbon neutrality by 2030.',
      de: 'FableTech Group verpflichtet sich zur CO2-Neutralität bis 2030.',
      fr: 'FableTech Group s\'engage à la neutralité carbone d\'ici 2030.',
      es: 'FableTech Group se compromete a la neutralidad de carbono para 2030.',
      ar: 'تلتزم FableTech Group بالحياد الكربوني بحلول عام 2030.'
    },
    date: '2024-03-05',
    category: 'New Products',
    image: '/images/news/fabletech-carbon-neutral.jpg'
  },
  {
    id: 'news-012',
    slug: 'employee-training-skills-development-program',
    title: {
      en: 'FableTech Group Invests in Employee Training',
      de: 'FableTech Group investiert in Mitarbeiterschulung',
      fr: 'FableTech Group investit dans la formation des employés',
      es: 'FableTech Group invierte en la capacitación de empleados',
      ar: 'تستثمر FableTech Group في تدريب الموظفين'
    },
    content: {
      en: 'FableTech Group is investing heavily in our workforce with a comprehensive skills development program. This year, over 200 FableTech employees will participate in advanced technical training, professional development courses, and safety certification programs. Our investment in human capital ensures that the FableTech team stays at the forefront of industry best practices and maintains our competitive edge.',
      de: 'FableTech Group investiert stark in unsere Belegschaft mit einem umfassenden Kompetenzentwicklungsprogramm. In diesem Jahr werden über 200 FableTech-Mitarbeiter an technischen Schulungen, beruflichen Weiterbildungslehrgängen und Sicherheitszertifizierungsprogrammen teilnehmen.',
      fr: 'FableTech Group investit massivement dans notre main-d\'œuvre avec un programme complet de développement des compétences. Cette année, plus de 200 employés de FableTech participeront à des formations techniques avancées, des cours de développement professionnel et des programmes de certification de sécurité.',
      es: 'FableTech Group invierte fuertemente en nuestra fuerza laboral con un programa integral de desarrollo de habilidades. Este año, más de 200 empleados de FableTech participarán en capacitación técnica avanzada, cursos de desarrollo profesional y programas de certificación de seguridad.',
      ar: 'تستثمر FableTech Group بكثافة في قوتنا العاملة من خلال برنامج شامل لتطوير المهارات. هذا العام، سيشارك أكثر من 200 موظف من FableTech في التدريب التقني المتقدم ودورات التطوير المهني وبرامج شهادة السلامة.'
    },
    summary: {
      en: 'FableTech Group invests in employee development programs.',
      de: 'FableTech Group investiert in Mitarbeiterentwicklungsprogramme.',
      fr: 'FableTech Group investit dans des programmes de développement des employés.',
      es: 'FableTech Group invierte en programas de desarrollo de empleados.',
      ar: 'تستثمر FableTech Group في برامج تطوير الموظفين.'
    },
    date: '2024-03-10',
    category: 'Company News',
    image: '/images/news/fabletech-training.jpg'
  },
  {
    id: 'news-013',
    slug: 'technical-documentation-portal-launch',
    title: {
      en: 'FableTech Group Launches Enhanced Documentation Portal',
      de: 'FableTech Group lanciert verbessertes Dokumentationsportal',
      fr: 'FableTech Group lance un portail de documentation amélioré',
      es: 'FableTech Group lanza portal de documentación mejorado',
      ar: 'تطلق FableTech Group بوابة وثائق محسنة'
    },
    content: {
      en: 'FableTech Group has launched a new technical documentation portal providing customers with easy access to product specifications, material data sheets, installation guides, and CAD drawings. The FableTech portal features advanced search capabilities, multilingual support, and regularly updated content. FableTech customers can now download all necessary documentation instantly from our website.',
      de: 'FableTech Group hat ein neues technisches Dokumentationsportal gestartet, das Kunden einfachen Zugang zu Produktspezifikationen, Materialdatenblättern, Installationsanleitungen und CAD-Zeichnungen bietet. Das FableTech-Portal verfügt über erweiterte Suchfunktionen.',
      fr: 'FableTech Group a lancé un nouveau portail de documentation technique offrant aux clients un accès facile aux spécifications des produits, fiches de données matériaux, guides d\'installation et dessins CAO. Le portail de FableTech dispose de capacités de recherche avancées.',
      es: 'FableTech Group ha lanzado un nuevo portal de documentación técnica que proporciona a los clientes fácil acceso a especificaciones de productos, hojas de datos de materiales, guías de instalación y dibujos CAD. El portal de FableTech cuenta con capacidades de búsqueda avanzadas.',
      ar: 'أطلقت FableTech Group بوابة وثائق تقنية جديدة توفر للعملاء وصولاً سهلاً إلى مواصفات المنتجات وأوراق بيانات المواد وأدلة التثبيت ورسومات CAD. تتميز بوابة FableTech بقدرات بحث متقدمة.'
    },
    summary: {
      en: 'FableTech Group improves customer access to technical resources.',
      de: 'FableTech Group verbessert den Kundenzugang zu technischen Ressourcen.',
      fr: 'FableTech Group améliore l\'accès des clients aux ressources techniques.',
      es: 'FableTech Group mejora el acceso de clientes a recursos técnicos.',
      ar: 'تحسن FableTech Group وصول العملاء إلى الموارد التقنية.'
    },
    date: '2024-03-15',
    category: 'Customer Service',
    image: '/images/news/fabletech-portal.jpg'
  },
  {
    id: 'news-014',
    slug: 'hannover-messe-2024-invitation',
    title: {
      en: 'FableTech Group Exhibits at Hannover Messe 2024',
      de: 'FableTech Group auf der Hannover Messe 2024 vertreten',
      fr: 'FableTech Group expose à la Hannover Messe 2024',
      es: 'FableTech Group expone en la Hannover Messe 2024',
      ar: 'تعرض FableTech Group في هانوفر ميسي 2024'
    },
    content: {
      en: 'FableTech Group is proud to participate in Hannover Messe 2024, the world\'s leading industrial trade fair. Visit the FableTech booth to discover our latest innovations in metal products, discuss custom solutions with our engineering team, and explore partnership opportunities. FableTech will be showcasing our new sustainable product line and advanced manufacturing capabilities.',
      de: 'FableTech Group ist stolz, auf der Hannover Messe 2024 vertreten zu sein, der weltweit führenden Industriemesse. Besuchen Sie den FableTech-Stand, um unsere neuesten Innovationen bei Metallprodukten zu entdecken.',
      fr: 'FableTech Group est fière de participer à la Hannover Messe 2024, le premier salon industriel mondial. Visitez le stand de FableTech pour découvrir nos dernières innovations en produits métalliques.',
      es: 'FableTech Group se enorgullece en participar en la Hannover Messe 2024, la feria industrial líder mundial. Visite el stand de FableTech para descubrir nuestras últimas innovaciones en productos metálicos.',
      ar: 'تفخر FableTech Group بالمشاركة في هانوفر ميسي 2024، المعرض الصناعي الرائد عالمياً. قم بزيارة جناح FableTech لاكتشاف أحدث ابتكاراتنا في المنتجات المعدنية.'
    },
    summary: {
      en: 'FableTech Group participates in leading industry trade show.',
      de: 'FableTech Group nimmt an führender Industriemesse teil.',
      fr: 'FableTech Group participe au salon industriel de référence.',
      es: 'FableTech Group participa en la feria industrial líder.',
      ar: 'تشارك FableTech Group في المعرض الصناعي الرائد.'
    },
    date: '2024-03-20',
    category: 'Company News',
    image: '/images/news/fabletech-hannover.jpg'
  },
  {
    id: 'news-015',
    slug: 'new-aluminum-alloy-product-launch',
    title: {
      en: 'FableTech Group Introduces New High-Strength Aluminum Alloy',
      de: 'FableTech Group stellt neue hochfeste Aluminiumlegierung vor',
      fr: 'FableTech Group présente un nouvel alliage d\'aluminium à haute résistance',
      es: 'FableTech Group presenta una nueva aleación de aluminio de alta resistencia',
      ar: 'تقدم FableTech Group سبيكة ألومنيوم عالية القوة جديدة'
    },
    content: {
      en: 'FableTech Group is excited to introduce our latest innovation in metal materials: the FT-700 high-strength aluminum alloy. Developed in our FableTech R&D laboratory, this new alloy offers 25% higher tensile strength while maintaining excellent corrosion resistance. The FT-700 is ideal for aerospace, automotive, and renewable energy applications. FableTech Group continues to lead in material science innovation.',
      de: 'FableTech Group freut sich, unsere neueste Innovation in metallischen Werkstoffen vorzustellen: die hochfeste Aluminiumlegierung FT-700. Entwickelt in unserem FableTech-F&E-Labor, bietet diese neue Legierung 25% höhere Zugfestigkeit bei gleichzeitiger ausgezeichneter Korrosionsbeständigkeit.',
      fr: 'FableTech Group a le plaisir de présenter notre dernière innovation en matériaux métalliques: l\'alliage d\'aluminium à haute résistance FT-700. Développé dans notre laboratoire de R&D de FableTech, ce nouvel alliage offre une résistance à la traction 25% supérieure.',
      es: 'FableTech Group se complace en presentar nuestra última innovación en materiales metálicos: la aleación de aluminio de alta resistencia FT-700. Desarrollada en nuestro laboratorio de I+D de FableTech, esta nueva aleación ofrece una resistencia a la tracción un 25% mayor.',
      ar: 'يسعد FableTech Group أن تقدم أحدث ابتكاراتنا في المواد المعدنية: سبيكة الألومنيوم عالية القوة FT-700. تم تطوير هذه السبيكة الجديدة في مختبر البحث والتطوير لدينا في FableTech.'
    },
    summary: {
      en: 'FableTech Group launches innovative aluminum alloy material.',
      de: 'FableTech Group lanciert innovatives Aluminiumlegierungsmaterial.',
      fr: 'FableTech Group lance un matériau d\'alliage d\'aluminium innovant.',
      es: 'FableTech Group lanza material innovador de aleación de aluminio.',
      ar: 'تطلق FableTech Group مادة سبيكة ألومنيوم ابتكارية.'
    },
    date: '2024-03-25',
    category: 'New Products',
    image: '/images/news/fabletech-aluminum.jpg'
  },
  {
    id: 'news-016',
    slug: 'new-customer-success-center-opening',
    title: {
      en: 'FableTech Group Opens Customer Success Center',
      de: 'FableTech Group eröffnet Customer Success Center',
      fr: 'FableTech Group ouvre un centre de succès client',
      es: 'FableTech Group abre centro de éxito del cliente',
      ar: 'تفتح FableTech Group مركز نجاح العملاء'
    },
    content: {
      en: 'FableTech Group has opened our new Customer Success Center, dedicated to providing exceptional support and training for our clients. The FableTech center offers hands-on workshops, technical demonstrations, and personalized consulting services. Our goal is to ensure every FableTech customer achieves maximum value from our products and services. The center is now open for business by appointment.',
      de: 'FableTech Group hat unser neues Customer Success Center eröffnet, das unserem Kunden herausragenden Support und Schulung bietet. Das FableTech-Center bietet praxisorientierte Workshops, technische Demonstrationen und personalisierte Beratungsdienstleistungen.',
      fr: 'FableTech Group a ouvert notre nouveau Centre de Succès Client, dédié à fournir un support et une formation exceptionnels à nos clients. Le centre de FableTech propose des ateliers pratiques, des démonstrations techniques et des services de conseil personnalisés.',
      es: 'FableTech Group ha abierto nuestro nuevo Centro de Éxito del Cliente, dedicado a proporcionar soporte y capacitación excepcionales a nuestros clientes. El centro de FableTech ofrece talleres prácticos, demostraciones técnicas y servicios de consultoría personalizados.',
      ar: 'افتتحت FableTech Group مركز نجاح العملاء الجديد لدينا، المكرس لتقديم دعم و تدريب استثنائي لعملائنا. يوفر مركز FableTech ورش عمل عملية وتوضيحات تقنية وخدمات استشارات مخصصة.'
    },
    summary: {
      en: 'FableTech Group launches dedicated customer support center.',
      de: 'FableTech Group lanciert dediziertes Kundenbetreuungszentrum.',
      fr: 'FableTech Group lance un centre de support client dédié.',
      es: 'FableTech Group lanza centro de soporte al cliente dedicado.',
      ar: 'تطلق FableTech Group مركز دعم العملاء المخصص.'
    },
    date: '2024-03-30',
    category: 'Customer Service',
    image: '/images/news/fabletech-success-center.jpg'
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
