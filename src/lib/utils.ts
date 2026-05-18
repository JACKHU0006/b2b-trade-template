export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(typeof date === 'string' ? new Date(date) : date);
}

export function getLocaleFromUrl(url: URL): string {
  const pathname = url.pathname;
  const locales = ['en', 'de', 'fr', 'es', 'ar'];
  const firstSegment = pathname.split('/')[1];
  return locales.includes(firstSegment) ? firstSegment : 'en';
}

export function getLocalizedUrl(url: string, locale: string): string {
  if (locale === 'en') return url;
  return `/${locale}${url}`;
}
