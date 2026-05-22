import { test, expect } from '@playwright/test';

test.describe('FableTech Website Tests', () => {
  test('Homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/FableTech/);
  });

  test('Navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=Products');
    await expect(page).toHaveURL(/\/products/);
    
    await page.click('text=News');
    await expect(page).toHaveURL(/\/news/);
    
    await page.click('text=About');
    await expect(page).toHaveURL(/\/about/);
  });

  test('Products page displays products', async ({ page }) => {
    await page.goto('/products');
    
    const products = page.locator('[id^="product-card-"]');
    await expect(products.first()).toBeVisible();
  });

  test('News page displays articles', async ({ page }) => {
    await page.goto('/news');
    
    const articles = page.locator('article');
    await expect(articles.first()).toBeVisible();
  });

  test('Search functionality works', async ({ page }) => {
    await page.goto('/search?q=steel');
    
    await expect(page.locator('text=Found')).toBeVisible();
  });

  test('Contact page loads', async ({ page }) => {
    await page.goto('/contact');
    
    await expect(page.locator('text=Contact')).toBeVisible();
  });

  test('FAQ page loads with questions', async ({ page }) => {
    await page.goto('/faq');
    
    await expect(page.locator('text=FAQ')).toBeVisible();
  });

  test('Footer links are present', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('text=Privacy Policy')).toBeVisible();
    await expect(page.locator('text=Terms of Service')).toBeVisible();
  });

  test('Language selector is present', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('text=EN')).toBeVisible();
  });

  test('Back to top button appears on scroll', async ({ page }) => {
    await page.goto('/');
    
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);
    
    const backToTop = page.locator('button:has-text("↑")');
    await expect(backToTop).toBeVisible();
  });
});
