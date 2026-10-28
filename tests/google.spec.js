import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.locator('div').filter({ hasText: 'What\'s on your mind?Get help' }).nth(1).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('boy');
  await page.locator('iframe[name="a-mj87vzeop2dd"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-mj87vzeop2dd"]').contentFrame().locator('[id="10"]').click();
  await page.locator('iframe[name="c-mj87vzeop2dd"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-mj87vzeop2dd"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-mj87vzeop2dd"]').contentFrame().locator('[id="11"]').click();
  await page.locator('div:nth-child(2) > div').first().click();
  await page.locator('body').click();
});