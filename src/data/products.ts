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
      en: 'High-quality industrial steel pipe for construction and manufacturing applications.',
      de: 'Hochwertiges Industrie-Stahlrohr für Bau- und Fertigungsanwendungen.',
      fr: 'Tube d\'acier industriel de haute qualité pour applications de construction et de fabrication.',
      es: 'Tubo de acero industrial de alta calidad para aplicaciones de construcción y fabricación.',
      ar: 'أنبوب فولاذي صناعي عالي الجودة لمتطلبات البناء والتصنيع.'
    },
    price: 125.00,
    category: 'Steel Products',
    images: ['/images/products/fabletech-steel-pipe.jpg'],
    specs: {
      material: 'Carbon Steel',
      diameter: '50mm',
      length: '6m',
      grade: 'A36'
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
      en: 'Premium stainless steel valve for industrial fluid control systems.',
      de: 'Premium-Edelstahlventil für industrielle Fluid-Steuersysteme.',
      fr: 'Vanne en acier inoxydable premium pour systèmes de contrôle de fluides industriels.',
      es: 'Válvula de acero inoxidable premium para sistemas de control de fluidos industriales.',
      ar: 'صمام فولاذي مقاوم للصدأ عالي الجودة لنظم تحكم السوائل الصناعية.'
    },
    price: 285.00,
    category: 'Valves',
    images: ['/images/products/fabletech-stainless-steel-valve.jpg'],
    specs: {
      material: '316 Stainless Steel',
      pressure: 'PN40',
      size: 'DN50',
      type: 'Ball Valve'
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
      en: 'Precision-engineered aluminum extrusion profiles for architectural and industrial use.',
      de: 'Präzisionsgefertigte Aluminium-Extrusionsprofile für architektonische und industrielle Verwendung.',
      fr: 'Profils d\'extrusion en aluminium de précision pour usage architectural et industriel.',
      es: 'Perfiles de extrusión de aluminio de precisión para uso arquitectónico e industrial.',
      ar: 'ملفاتح الألومنيوم المقذوفة عالية الدقة للاستخدام المعماري والصناعي.'
    },
    price: 89.00,
    category: 'Aluminum',
    images: ['/images/products/fabletech-aluminum-profile.jpg'],
    specs: {
      material: '6063 T5',
      width: '80mm',
      height: '40mm',
      length: '6m'
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
      en: 'High-conductivity copper wire bundle for electrical applications.',
      de: 'Hochleitfähiges Kupferdrahtbündel für elektrische Anwendungen.',
      fr: 'Faisceau de fil de cuivre à haute conductivité pour applications électriques.',
      es: 'Paquete de alambre de cobre de alta conductividad para aplicaciones eléctricas.',
      ar: 'حزمة سلك نحاسي عالي التوصيل لمتطلبات الكهرباء.'
    },
    price: 45.00,
    category: 'Copper',
    images: ['/images/products/fabletech-copper-wire.jpg'],
    specs: {
      material: 'Pure Copper',
      gauge: '14 AWG',
      length: '100m',
      insulation: 'PVC'
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
      en: 'Complete brass fitting set for plumbing and industrial applications.',
      de: 'Kompletter Messingarmaturensatz für Sanitär- und Industrieanwendungen.',
      fr: 'Kit complet de raccords en laiton pour applications plomberie et industrielles.',
      es: 'Juego completo de accesorios de latón para aplicaciones de fontanería e industriales.',
      ar: 'مجموعة ملحقات نحاسية كاملة لمتطلبات السباكة والصناعة.'
    },
    price: 165.00,
    category: 'Brass',
    images: ['/images/products/fabletech-brass-fitting.jpg'],
    specs: {
      material: 'C360 Brass',
      thread: 'NPT 1/2"',
      quantity: '25 pieces',
      finish: 'Polished'
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
      en: 'High-strength titanium sheet for aerospace and medical applications.',
      de: 'Hochfester Titanblech für Luft- und Raumfahrt- sowie medizinische Anwendungen.',
      fr: 'Feuille de titane haute résistance pour applications aéronautiques et médicales.',
      es: 'Hoja de titanio de alta resistencia para aplicaciones aeroespaciales y médicas.',
      ar: 'ورقة التيتانيوم عالية القوة لمتطلبات الطيران والفضاء والطب.'
    },
    price: 850.00,
    category: 'Titanium',
    images: ['/images/products/fabletech-titanium-sheet.jpg'],
    specs: {
      material: 'Grade 2',
      thickness: '2mm',
      width: '1000mm',
      length: '2000mm'
    },
    isPrivate: true
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
