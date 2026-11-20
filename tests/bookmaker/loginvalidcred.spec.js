import { test, expect } from '@playwright/test';

const email = process.env.BOOKMAKER_EMAIL;
const password = process.env.BOOKMAKER_PASSWORD;

test('test', async ({ page }) => {
  test.skip(!email || !password, 'Set BOOKMAKER_EMAIL and BOOKMAKER_PASSWORD to run this test.');

  await page.goto('https://bookmaker.celartech.com/');
  await page.getByRole('banner').getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Reject analytics' }).click();
  await page.getByRole('button', { name: /Account: jeff/i }).click();
  await expect(
    page.getByRole('menuitem', { name: /Sign out/i })
  ).toBeVisible();
  await page.getByRole('menuitem', { name: /Sign out/i }).click();
});