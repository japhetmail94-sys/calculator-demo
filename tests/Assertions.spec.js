import test, {page, expect} from '@playwright/test'

test('Assertions demo', async ({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    // ASSERTIONS
    // Assert that the header is present
    const items = page.locator('h1:has-text("The Kitchen")')
    await expect(items).toHaveCount(1)
    
    // Assertion to check page title 
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle("The Kitchen")

    // Assertion for visual validation with screenshot 
    await expect(page).toHaveScreenshot()
}) 