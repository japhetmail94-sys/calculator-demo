import { test, expect } from '@playwright/test';

test.describe('contact list', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

    });

    test('add a new contact', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' }).fill('testingdemo@yopmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('testing');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'Add a New Contact' }).click();
        await page.getByRole('textbox', { name: '* First Name:' }).fill('sam');
        await page.getByRole('textbox', { name: '* Last Name:' }).fill('test');
        await page.getByRole('textbox', { name: 'Date of Birth:' }).fill('2090-07-07');
        await page.getByRole('textbox', { name: 'Email:' }).fill('testingdemo@yopmail.com');
        await page.getByRole('textbox', { name: 'Phone:' }).fill('146748383');
        await page.getByRole('paragraph').filter({ hasText: 'Street Address 2:' }).click();
        await page.getByRole('textbox', { name: 'Street Address 1:' }).fill('gbagada lagos');
        await page.getByRole('textbox', { name: 'Street Address 2:' }).fill('ikeja lagos');
        await page.getByRole('textbox', { name: 'City:' }).fill('eko');
        await page.getByRole('textbox', { name: 'State or Province:' }).fill('ikeja');
        await page.getByRole('textbox', { name: 'Postal Code:' }).fill('100001');
        await page.getByRole('textbox', { name: 'Country:' }).fill('9ja');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'Logout' }).click();

    });

    test('delete a contact', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' }).fill('testingdemo@yopmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('testing');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('cell', { name: 'testingdemo@yopmail.com' }).nth(5).click();
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => { });
        });
        await page.getByRole('button', { name: 'Delete Contact' }).click();
        await page.getByRole('button', { name: 'Logout' }).click();
    });





});
