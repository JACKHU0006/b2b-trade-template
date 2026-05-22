# Testing Guide

This directory contains end-to-end tests for the FableTech website.

## Prerequisites

- Node.js 22.12.0 or higher
- npm install (dependencies)

## Running Tests

### Install Playwright

```bash
npm install -D @playwright/test
npx playwright install --with-deps
```

### Run All Tests

```bash
npm run test
```

Or use the test script:

```bash
chmod +x run-tests.sh
./run-tests.sh
```

### Run Specific Test

```bash
npx playwright test tests/e2e.spec.ts
```

### Run in UI Mode

```bash
npx playwright test --ui
```

## Test Coverage

The tests cover:

- Homepage loading
- Navigation between pages
- Products page functionality
- News page functionality
- Search functionality
- Contact page
- FAQ page
- Footer links
- Language selector
- Back to top button

## Configuration

See `playwright.config.ts` for test configuration including:

- Browser support (Chromium, Firefox, Safari)
- Mobile device testing
- Test retries and timeouts
- Reporter settings
