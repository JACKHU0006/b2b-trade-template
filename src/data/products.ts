export interface Product {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  category: string;
  images: string[];
  specs: Record<string, string>;
  isPrivate: boolean;
}

export const products: Product[] = [
  {
    id: 'prod-001',
    name: {
      en: 'Industrial Steel Pipe',
      de: 'Industrie-Stahlrohr',
      fr: 'Tube d\'acier industriel',
      es: 'Tubo de acero industrial',
      ar: 'أنبوب فولاذي صناعي'
    },
    description: {
      en: 'High-quality industrial steel pipe for construction and manufacturing applications. Made from premium carbon steel with excellent corrosion resistance and durability. Ideal for structural, plumbing, and industrial piping systems.',
      de: 'Hochwertiges Industrie-Stahlrohr für Bau- und Fertigungsanwendungen. Aus premium Kohlenstoffstahl gefertigt mit ausgezeichneter Korrosionsbeständigkeit und Haltbarkeit. Ideal für strukturelle, Sanitär- und industrielle Rohrleitungssysteme.',
      fr: 'Tube d\'acier industriel de haute qualité pour applications de construction et de fabrication. Fabriqué en acier carbone premium avec excellente résistance à la corrosion et durabilité. Idéal pour les systèmes de tuyauterie structuraux, de plomberie et industriels.',
      es: 'Tubo de acero industrial de alta calidad para aplicaciones de construcción y fabricación. Fabricado con acero carbono premium con excelente resistencia a la corrosión y durabilidad. Ideal para sistemas de tuberías estructurales, de fontanería e industriales.',
      ar: 'أنبوب فولاذي صناعي عالي الجودة لمتطلبات البناء والتصنيع. مصنوع من الفولاذ الكربوني الممتاز مع مقاومة ممتازة للتآكل والمتانة. مثالي لأنظمة الأنابيب الهيكلية والسباكة والصناعية.'
    },
    price: 125.00,
    category: 'Steel Products',
    images: ['/images/products/fabletech-steel-pipe.jpg'],
    specs: {
      material: 'Carbon Steel',
      diameter: '50mm',
      length: '6m',
      grade: 'A36',
      standard: 'ASTM A53',
      tolerance: '±0.5mm'
    },
    isPrivate: false
  },
  {
    id: 'prod-002',
    name: {
      en: 'Stainless Steel Valve',
      de: 'Edelstahlventil',
      fr: 'Vanne en acier inoxydable',
      es: 'Válvula de acero inoxidable',
      ar: 'صمام فولاذي مقاوم للصدأ'
    },
    description: {
      en: 'Premium stainless steel valve for industrial fluid control systems. 316-grade stainless steel construction ensures corrosion resistance in harsh environments. Perfect for chemical, petrochemical, and food processing applications.',
      de: 'Premium-Edelstahlventil für industrielle Fluid-Steuersysteme. 316-Edelstahlkonstruktion sorgt für Korrosionsbeständigkeit in rauen Umgebungen. Perfekt für chemische, petrochemische und Lebensmittelverarbeitungsanwendungen.',
      fr: 'Vanne en acier inoxydable premium pour systèmes de contrôle de fluides industriels. Construction en acier inoxydable de grade 316 garantit la résistance à la corrosion dans les environnements difficiles. Parfait pour les applications chimiques, pétrochimiques et de transformation alimentaire.',
      es: 'Válvula de acero inoxidable premium para sistemas de control de fluidos industriales. Construcción de acero inoxidable de grado 316 garantiza resistencia a la corrosión en entornos agresivos. Perfecta para aplicaciones químicas, petroquímicas y de procesamiento de alimentos.',
      ar: 'صمام فولاذي مقاوم للصدأ عالي الجودة لنظم تحكم السوائل الصناعية. تصميم من الفولاذ المقاوم للصدأ من الدرجة 316 يضمن مقاومة للتآكل في البيئات القاسية. مثالي لمتطلبات الصناعات الكيميائية والبتروكيماوية وتصنيع الأغذية.'
    },
    price: 285.00,
    category: 'Valves',
    images: ['/images/products/fabletech-stainless-steel-valve.jpg'],
    specs: {
      material: '316 Stainless Steel',
      pressure: 'PN40',
      size: 'DN50',
      type: 'Ball Valve',
      temperature: '-20°C to +200°C',
      certification: 'CE, API 6D'
    },
    isPrivate: true
  },
  {
    id: 'prod-003',
    name: {
      en: 'Aluminum Extrusion Profile',
      de: 'Aluminium-Extrusionsprofil',
      fr: 'Profil d\'extrusion en aluminium',
      es: 'Perfil de extrusión de aluminio',
      ar: 'ملفح الألومنيوم المقذوف'
    },
    description: {
      en: 'Precision-engineered aluminum extrusion profiles for architectural and industrial use. 6063-T5 alloy offers excellent strength-to-weight ratio and corrosion resistance. Custom shapes and finishes available upon request.',
      de: 'Präzisionsgefertigte Aluminium-Extrusionsprofile für architektonische und industrielle Verwendung. 6063-T5-Legierung bietet ausgezeichnetes Festigkeits-Gewichts-Verhältnis und Korrosionsbeständigkeit. Sonderformen und Oberflächen auf Anfrage verfügbar.',
      fr: 'Profils d\'extrusion en aluminium de précision pour usage architectural et industriel. L\'alliage 6063-T5 offre un excellent rapport résistance/poids et résistance à la corrosion. Formes et finitions personnalisées disponibles sur demande.',
      es: 'Perfiles de extrusión de aluminio de precisión para uso arquitectónico e industrial. La aleación 6063-T5 ofrece una excelente relación resistencia-peso y resistencia a la corrosión. Formas y acabados personalizados disponibles bajo solicitud.',
      ar: 'ملفاتح الألومنيوم المقذوفة عالية الدقة للاستخدام المعماري والصناعي. سبيكة 6063-T5 توفر نسبة ممتازة بين القوة والوزن ومقاومة للتآكل. الأشكال واللمسات المخصصة متاحة عند الطلب.'
    },
    price: 89.00,
    category: 'Aluminum',
    images: ['/images/products/fabletech-aluminum-profile.jpg'],
    specs: {
      material: '6063 T5',
      width: '80mm',
      height: '40mm',
      length: '6m',
      finish: 'Anodized Clear',
      tolerance: '±0.2mm'
    },
    isPrivate: false
  },
  {
    id: 'prod-004',
    name: {
      en: 'Copper Wire Bundle',
      de: 'Kupferdrahtbündel',
      fr: 'Faisceau de fil de cuivre',
      es: 'Paquete de alambre de cobre',
      ar: 'حزمة سلك نحاسي'
    },
    description: {
      en: 'High-conductivity copper wire bundle for electrical applications. 99.9% pure copper ensures maximum conductivity. PVC insulation provides excellent electrical resistance and durability. Ideal for residential, commercial, and industrial wiring.',
      de: 'Hochleitfähiges Kupferdrahtbündel für elektrische Anwendungen. 99,9% reines Kupfer sorgt für maximale Leitfähigkeit. PVC-Isolierung bietet hervorragende elektrische Beständigkeit und Haltbarkeit. Ideal für Haushalts-, Gewerbe- und Industrieverdrahtung.',
      fr: 'Faisceau de fil de cuivre à haute conductivité pour applications électriques. 99,9% de cuivre pur garantit une conductivité maximale. L\'isolation PVC offre une excellente résistance électrique et durabilité. Idéal pour le câblage résidentiel, commercial et industriel.',
      es: 'Paquete de alambre de cobre de alta conductividad para aplicaciones eléctricas. 99,9% de cobre puro garantiza máxima conductividad. El aislamiento PVC ofrece excelente resistencia eléctrica y durabilidad. Ideal para cableado residencial, comercial e industrial.',
      ar: 'حزمة سلك نحاسي عالي التوصيل لمتطلبات الكهرباء. نحاس نقي بنسبة 99.9% يضمن توصيلًاً عاليًاً جدًاً. عزل PVC يوفر مقاومة كهربائية ممتازة والمتانة. مثالي للأسلاك السكنية والتجارية والصناعية.'
    },
    price: 45.00,
    category: 'Copper',
    images: ['/images/products/fabletech-copper-wire.jpg'],
    specs: {
      material: 'Pure Copper',
      gauge: '14 AWG',
      length: '100m',
      insulation: 'PVC',
      purity: '99.9%',
      voltage: '600V'
    },
    isPrivate: false
  },
  {
    id: 'prod-005',
    name: {
      en: 'Brass Fitting Set',
      de: 'Messingarmaturensatz',
      fr: 'Kit de raccords en laiton',
      es: 'Juego de accesorios de latón',
      ar: 'مجموعة ملحقات نحاسية'
    },
    description: {
      en: 'Complete brass fitting set for plumbing and industrial applications. C360 brass construction provides excellent machinability and corrosion resistance. Polished finish for professional appearance. Includes 25 pieces of various fittings for comprehensive installation.',
      de: 'Kompletter Messingarmaturensatz für Sanitär- und Industrieanwendungen. C360-Messingkonstruktion bietet hervorragende Bearbeitbarkeit und Korrosionsbeständigkeit. Polierte Oberfläche für professionelles Erscheinungsbild. Enthält 25 Stück verschiedener Armaturen für umfassende Installation.',
      fr: 'Kit complet de raccords en laiton pour applications plomberie et industrielles. Construction en laiton C360 offre une excellente usinabilité et résistance à la corrosion. Finition polie pour une apparence professionnelle. Inclut 25 pièces de divers raccords pour une installation complète.',
      es: 'Juego completo de accesorios de latón para aplicaciones de fontanería e industriales. Construcción de latón C360 ofrece excelente maquinabilidad y resistencia a la corrosión. Acabado pulido para apariencia profesional. Incluye 25 piezas de diversos accesorios para instalación completa.',
      ar: 'مجموعة ملحقات نحاسية كاملة لمتطلبات السباكة والصناعة. تصميم من النحاس الأصفر C360 يوفر قابلةً للتصنيع الممتازة ومقاومة للتآكل. لمسة مصقولة لمظهر احترافي. تشمل 25 قطعة من الملحقات المختلفة للتثبيت الشامل.'
    },
    price: 165.00,
    category: 'Brass',
    images: ['/images/products/fabletech-brass-fitting.jpg'],
    specs: {
      material: 'C360 Brass',
      thread: 'NPT 1/2"',
      quantity: '25 pieces',
      finish: 'Polished',
      pressure: 'PN25',
      temperature: '-10°C to +120°C'
    },
    isPrivate: true
  },
  {
    id: 'prod-006',
    name: {
      en: 'Titanium Sheet',
      de: 'Titanblech',
      fr: 'Feuille de titane',
      es: 'Hoja de titanio',
      ar: 'ورقة التيتانيوم'
    },
    description: {
      en: 'High-strength titanium sheet for aerospace and medical applications. Grade 2 titanium offers excellent biocompatibility and corrosion resistance. Precision-rolled to tight tolerances. Ideal for surgical implants, aerospace components, and chemical processing equipment.',
      de: 'Hochfester Titanblech für Luft- und Raumfahrt- sowie medizinische Anwendungen. Grade 2-Titan bietet hervorragende Biokompatibilität und Korrosionsbeständigkeit. Präzisionsgewalzt mit engen Toleranzen. Ideal für chirurgische Implantate, Luft- und Raumfahrtkomponenten und chemische Verarbeitungsanlagen.',
      fr: 'Feuille de titane haute résistance pour applications aéronautiques et médicales. Le titane de grade 2 offre une excellente biocompatibilité et résistance à la corrosion. Laminé de précision avec des tolérances serrées. Idéal pour les implants chirurgicaux, les composants aéronautiques et les équipements de traitement chimique.',
      es: 'Hoja de titanio de alta resistencia para aplicaciones aeroespaciales y médicas. El titanio de grado 2 ofrece excelente biocompatibilidad y resistencia a la corrosión. Laminado de precisión con tolerancias ajustadas. Ideal para implantes quirúrgicos, componentes aeroespaciales y equipos de procesamiento químico.',
      ar: 'ورقة التيتانيوم عالية القوة لمتطلبات الطيران والفضاء والطب. التيتانيوم من الدرجة 2 يوفر توافقًاً حيويًاً ممتازًاً ومقاومة للتآكل. مطحون بدقة إلى تحملات ضيقة. مثالي للغرسات الجراحية ومكونات الطيران والفضاء ومعدات المعالجة الكيميائية.'
    },
    price: 850.00,
    category: 'Titanium',
    images: ['/images/products/fabletech-titanium-sheet.jpg'],
    specs: {
      material: 'Grade 2',
      thickness: '2mm',
      width: '1000mm',
      length: '2000mm',
      finish: 'Mill Finish',
      certification: 'ASTM B265'
    },
    isPrivate: true
  },
  {
    id: 'prod-007',
    name: {
      en: 'Hot Rolled Steel Plate',
      de: 'Warmgewalztes Stahlblech',
      fr: 'Plaque d\'acier laminée à chaud',
      es: 'Placa de acero laminada en caliente',
      ar: 'صفيحة فولاذية مسحوبة ساخنة'
    },
    description: {
      en: 'Premium hot rolled steel plate for structural applications. Q235B grade provides excellent weldability and mechanical properties. Available in various thicknesses and sizes. Ideal for construction, bridges, machinery, and shipbuilding.',
      de: 'Premium warmgewalztes Stahlblech für strukturelle Anwendungen. Q235B-Grade bietet hervorragende Schweißbarkeit und mechanische Eigenschaften. In verschiedenen Dicken und Größen verfügbar. Ideal für Konstruktion, Brücken, Maschinenbau und Schiffbau.',
      fr: 'Plaque d\'acier laminée à chaud premium pour applications structurales. Le grade Q235B offre une excellente soudabilité et propriétés mécaniques. Disponible en diverses épaisseurs et tailles. Idéal pour la construction, les ponts, les machines et la construction navale.',
      es: 'Placa de acero laminada en caliente premium para aplicaciones estructurales. El grado Q235B ofrece excelente soldabilidad y propiedades mecánicas. Disponible en diversos espesores y tamaños. Ideal para construcción, puentes, maquinaria y construcción naval.',
      ar: 'صفيحة فولاذية مسحوبة ساخنة عالية الجودة لمتطلبات الهيكلية. الدرجة Q235B توفر قابليةً لحامًاً ممتازةً وخواص ميكانيكية. متاحة بسموك وأحجام مختلفة. مثالية للبناء والجسور والآلات وبناء السفن.'
    },
    price: 345.00,
    category: 'Steel Products',
    images: ['/images/products/fabletech-steel-plate.jpg'],
    specs: {
      material: 'Q235B',
      thickness: '12mm',
      width: '2000mm',
      length: '6000mm',
      standard: 'GB/T 700',
      yieldStrength: '235 MPa'
    },
    isPrivate: false
  },
  {
    id: 'prod-008',
    name: {
      en: 'Aluminum Sheet Metal',
      de: 'Aluminiumblech',
      fr: 'Feuille de métal en aluminium',
      es: 'Hoja de metal de aluminio',
      ar: 'صفيحة معدنية من الألومنيوم'
    },
    description: {
      en: 'High-quality aluminum sheet metal for versatile applications. 5052-H32 alloy offers excellent corrosion resistance and formability. Perfect for automotive, aerospace, marine, and construction uses.',
      de: 'Hochwertiges Aluminiumblech für vielseitige Anwendungen. 5052-H32-Legierung bietet hervorragende Korrosionsbeständigkeit und Umformbarkeit. Perfekt für Automobil-, Luft- und Raumfahrt-, Schiffbau- und Bauanwendungen.',
      fr: 'Feuille de métal en aluminium de haute qualité pour applications polyvalentes. L\'alliage 5052-H32 offre une excellente résistance à la corrosion et formabilité. Parfait pour les applications automobiles, aéronautiques, marines et de construction.',
      es: 'Hoja de metal de aluminio de alta calidad para aplicaciones versátiles. La aleación 5052-H32 ofrece excelente resistencia a la corrosión y formabilidad. Perfecta para aplicaciones automotrices, aeroespaciales, marinas y de construcción.',
      ar: 'صفيحة معدنية من الألومنيوم عالية الجودة لمتطلبات متعددة. سبيكة 5052-H32 توفر مقاومة ممتازة للتآكل وقابلية للتشكيل. مثالية للاستخدام في السيارات والطيران والفضاء والبحرية والبناء.'
    },
    price: 78.00,
    category: 'Aluminum',
    images: ['/images/products/fabletech-aluminum-sheet.jpg'],
    specs: {
      material: '5052 H32',
      thickness: '3mm',
      width: '1250mm',
      length: '2500mm',
      finish: 'Mill Finish',
      temper: 'H32'
    },
    isPrivate: false
  },
  {
    id: 'prod-009',
    name: {
      en: 'Copper Tube',
      de: 'Kupferrohr',
      fr: 'Tube en cuivre',
      es: 'Tubo de cobre',
      ar: 'أنبوب نحاسي'
    },
    description: {
      en: 'Seamless copper tube for plumbing, HVAC, and refrigeration systems. Type L copper tube for superior strength and durability. Excellent thermal conductivity makes it ideal for heating and cooling applications.',
      de: 'Nahtloses Kupferrohr für Sanitär-, HVAC- und Kältesysteme. Typ L-Kupferrohr für überlegene Festigkeit und Haltbarkeit. Hervorragende Wärmeleitfähigkeit macht es ideal für Heiz- und Kühlanwendungen.',
      fr: 'Tube en cuivre sans soudure pour systèmes de plomberie, HVAC et de réfrigération. Tube en cuivre de type L pour une résistance et durabilité supérieures. Excellente conductivité thermique le rend idéal pour les applications de chauffage et de refroidissement.',
      es: 'Tubo de cobre sin costura para sistemas de fontanería, HVAC y refrigeración. Tubo de cobre de tipo L para resistencia y durabilidad superiores. Excelente conductividad térmica lo hace ideal para aplicaciones de calefacción y refrigeración.',
      ar: 'أنبوب نحاسي بلا دrabes لأنظمة السباكة والتهوية والتكييف والتبريد. أنبوب نحاسي من النوع L لقوة ومتانة فائقة. موصلة حرارية ممتازة تجعله مثاليًاً لمتطلبات التسخين والتبريد.'
    },
    price: 156.00,
    category: 'Copper',
    images: ['/images/products/fabletech-copper-tube.jpg'],
    specs: {
      material: 'Type L Copper',
      diameter: '22mm',
      length: '6m',
      thickness: '1.0mm',
      standard: 'ASTM B88',
      maxPressure: '250 psi'
    },
    isPrivate: false
  },
  {
    id: 'prod-010',
    name: {
      en: 'Gate Valve',
      de: 'Schieberventil',
      fr: 'Vanne à vanne',
      es: 'Válvula de compuerta',
      ar: 'صمام بوابة'
    },
    description: {
      en: 'Cast iron gate valve for industrial piping systems. Rising stem design for visual position indication. Full port design minimizes pressure drop. Suitable for water, oil, gas, and steam applications.',
      de: 'Gusseisen-Schieberventil für industrielle Rohrleitungssysteme. Aufsteigendes Spindeldesign für visuelle Positionsanzeige. Vollbohrungsdesign minimiert Druckabfall. Geeignet für Wasser-, Öl-, Gas- und Dampfanwendungen.',
      fr: 'Vanne à vanne en fonte pour systèmes de tuyauterie industriels. Conception de tige montante pour indication visuelle de position. Conception à portée complète minimise la perte de charge. Adapté pour les applications eau, huile, gaz et vapeur.',
      es: 'Válvula de compuerta de hierro fundido para sistemas de tuberías industriales. Diseño de vástago ascendente para indicación visual de posición. Diseño de puerto completo minimiza la caída de presión. Adecuada para aplicaciones de agua, aceite, gas y vapor.',
      ar: 'صمام بوابة من الحديد المصبوب لأنظمة الأنابيب الصناعية. تصميم ساق صاعدة لظهور موقع مرئي. تصميم منفذ كامل يقلل من انخفاض الضغط. مناسب لمتطلبات الماء والزيت والغاز والبخار.'
    },
    price: 245.00,
    category: 'Valves',
    images: ['/images/products/fabletech-gate-valve.jpg'],
    specs: {
      material: 'Cast Iron GG25',
      size: 'DN100',
      pressure: 'PN16',
      type: 'Rising Stem',
      connection: 'Flanged',
      temperature: '0°C to +120°C'
    },
    isPrivate: false
  },
  {
    id: 'prod-011',
    name: {
      en: 'Titanium Bar',
      de: 'Titanstab',
      fr: 'Barre de titane',
      es: 'Barra de titanio',
      ar: 'قضيب التيتانيوم'
    },
    description: {
      en: 'Precision titanium bar for aerospace, medical, and industrial applications. Grade 5 titanium (Ti-6Al-4V) offers excellent strength-to-weight ratio and heat resistance. Perfect for critical components in demanding environments.',
      de: 'Präzisions-Titanstab für Luft- und Raumfahrt-, medizinische und industrielle Anwendungen. Grade 5-Titan (Ti-6Al-4V) bietet hervorragendes Festigkeits-Gewichts-Verhältnis und Hitzeresistenz. Perfekt für kritische Komponenten in anspruchsvollen Umgebungen.',
      fr: 'Barre de titane de précision pour applications aéronautiques, médicales et industrielles. Le titane de grade 5 (Ti-6Al-4V) offre un excellent rapport résistance/poids et résistance à la chaleur. Parfait pour les composants critiques dans des environnements exigeants.',
      es: 'Barra de titanio de precisión para aplicaciones aeroespaciales, médicas e industriales. El titanio de grado 5 (Ti-6Al-4V) ofrece una excelente relación resistencia-peso y resistencia al calor. Perfecta para componentes críticos en entornos exigentes.',
      ar: 'قضيب التيتانيوم الدقيق لمتطلبات الطيران والفضاء والطب والصناعة. التيتانيوم من الدرجة 5 (Ti-6Al-4V) يوفر نسبة ممتازة بين القوة والوزن ومقاومة للحرارة. مثالي للمكونات الحاسمة في بيئات صعبة.'
    },
    price: 1250.00,
    category: 'Titanium',
    images: ['/images/products/fabletech-titanium-bar.jpg'],
    specs: {
      material: 'Grade 5 (Ti-6Al-4V)',
      diameter: '25mm',
      length: '2000mm',
      tolerance: 'h9',
      condition: 'Annealed',
      certification: 'AMS 4928'
    },
    isPrivate: true
  },
  {
    id: 'prod-012',
    name: {
      en: 'Brass Ball Valve',
      de: 'Messingkugelhahn',
      fr: 'Vanne à bille en laiton',
      es: 'Válvula de bola de latón',
      ar: 'صمام كرة من النحاس الأصفر'
    },
    description: {
      en: 'High-performance brass ball valve for general purpose applications. Quarter-turn operation for quick and easy control. Chrome-plated ball for smooth operation and long life. Ideal for plumbing, HVAC, and industrial systems.',
      de: 'Hochleistungs-Messingkugelhahn für allgemeine Anwendungen. Vierteldrehungs-Betrieb für schnelle und einfache Steuerung. Verchromte Kugel für sanften Betrieb und lange Lebensdauer. Ideal für Sanitär-, HVAC- und industrielle Systeme.',
      fr: 'Vanne à bille en laiton haute performance pour applications polyvalentes. Fonctionnement quart de tour pour contrôle rapide et facile. Bille chromée pour fonctionnement fluide et longue durée de vie. Idéal pour les systèmes de plomberie, HVAC et industriels.',
      es: 'Válvula de bola de latón de alto rendimiento para aplicaciones de propósito general. Operación de cuarto de vuelta para control rápido y fácil. Bola cromada para funcionamiento suave y vida larga. Ideal para sistemas de fontanería, HVAC e industriales.',
      ar: 'صمام كرة من النحاس الأصفر عالي الأداء لمتطلبات الأغراض العامة. تشغيل ربع دورة لتحكم سريع وسهل. كرة مطليّة بالكروم لتفعيل سلس وحياة طويلة. مثالي لأنظمة السباكة والتهوية والتكييف والصناعية.'
    },
    price: 42.00,
    category: 'Brass',
    images: ['/images/products/fabletech-brass-ball-valve.jpg'],
    specs: {
      material: 'Brass CW617N',
      size: 'DN25',
      pressure: 'PN40',
      connection: 'Threaded',
      temperature: '-20°C to +150°C',
      certification: 'DVGW'
    },
    isPrivate: false
  }
];

export function getProducts(locale: string = 'en'): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductCategories(): string[] {
  return [...new Set(products.map(p => p.category))];
}
