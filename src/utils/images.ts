/**
 * Image CDN URL Builder
 * Automatically uses R2 CDN URL in production, local path in development
 */

const CDN_BASE_URL = import.meta.env.PUBLIC_CDN_URL || '';

export function getImageUrl(path: string): string {
  // In production with CDN
  if (CDN_BASE_URL && import.meta.env.PROD) {
    return `${CDN_BASE_URL}${path}`;
  }
  // Fallback to local path
  return path;
}

// Pre-configured image paths
export const imagePaths = {
  news: {
    factory: '/images/news/fabletech-factory.jpg',
    certification: '/images/news/fabletech-certification.jpg',
    sustainableSteel: '/images/news/fabletech-sustainable-steel.jpg',
    shipping: '/images/news/fabletech-shipping.jpg',
    rdLab: '/images/news/fabletech-rd-lab.jpg',
    awards: '/images/news/fabletech-awards.jpg',
    support: '/images/news/fabletech-support.jpg',
    southeastAsia: '/images/news/fabletech-southeast-asia.jpg',
    erp: '/images/news/fabletech-erp.jpg',
    qualityAward: '/images/news/fabletech-quality-award.jpg',
    carbonNeutral: '/images/news/fabletech-carbon-neutral.jpg',
    training: '/images/news/fabletech-training.jpg',
    portal: '/images/news/fabletech-portal.jpg',
    hannover: '/images/news/fabletech-hannover.jpg',
    successCenter: '/images/news/fabletech-success-center.jpg',
    europe: '/images/news/fabletech-europe.jpg',
    sustainability: '/images/news/fabletech-sustainability.jpg',
    aiQuality: '/images/news/fabletech-ai-quality.jpg',
    globalAward: '/images/news/fabletech-global-award.jpg',
    greenEnergy: '/images/news/fabletech-green-energy.jpg',
    catalog: '/images/news/fabletech-catalog.jpg',
    dubai: '/images/news/fabletech-dubai.jpg',
    safety: '/images/news/fabletech-safety.jpg',
    donation: '/images/news/fabletech-donation.jpg',
    newProducts: '/images/news/fabletech-new-products.jpg',
    steel: '/images/news/fabletech-steel.jpg',
    aluminum: '/images/news/fabletech-aluminum.jpg',
    copper: '/images/news/fabletech-copper.jpg',
    titanium: '/images/news/fabletech-titanium.jpg',
  },
  products: {
    prod001: '/images/products/prod-001.svg',
    prod002: '/images/products/prod-002.svg',
    prod003: '/images/products/prod-003.svg',
    prod004: '/images/products/prod-004.svg',
    prod005: '/images/products/prod-005.svg',
    prod006: '/images/products/prod-006.svg',
    prod007: '/images/products/prod-007.svg',
    prod008: '/images/products/prod-008.svg',
    prod009: '/images/products/prod-009.svg',
    prod010: '/images/products/prod-010.svg',
    prod011: '/images/products/prod-011.svg',
    prod012: '/images/products/prod-012.svg',
  },
  about: {
    factory: '/images/about-factory.svg',
    engineering: '/images/about-engineering.svg',
  },
  service: {
    logistics: '/images/service-logistics.svg',
    support: '/images/service-support.svg',
  }
};
