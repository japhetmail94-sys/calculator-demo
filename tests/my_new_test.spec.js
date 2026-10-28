const { test, expect } = require('@playwright/test');

test('Verify Facebook homepage loads', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  await expect(page).toHaveTitle(/Facebook/);
});