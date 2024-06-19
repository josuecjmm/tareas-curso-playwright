const { test, expect } = require('@playwright/test');
const { USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO } = process.env;

test.describe('Add To Cart', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        await page.locator('[data-test="username"]').fill(USER_SAUCE_DEMO);
        await page.locator('[data-test="password"]').fill(PASSWORD_SAUCE_DEMO);
        await page.locator('[data-test="login-button"]').click();
        const pageLogo = page.locator('.app_logo')
        await pageLogo.waitFor({ state: "visible" })
        await expect(pageLogo).toBeVisible()
    })

    test('Verify I can add an item to the Cart', async ({ page }) => {
        const elementToFind = 'Sauce Labs Fleece Jacket'
        const titlesList = page.locator('.inventory_item_name')
        let elementFound;
        for (const element of await titlesList.all()) {
            const elementText = await element.textContent()
            if (elementText === elementToFind) {
                console.log(elementText, ' found!!')
                elementFound = element;
            } else {
                console.log(elementText, ' is not ', elementToFind)
            }
        }
        await elementFound.click()
        await page.locator('[data-test="add-to-cart"]').click()
        await expect(page.locator('[data-test="remove"]')).toBeVisible()
        await page.locator('[data-test="shopping-cart-link"]').click()
        await expect(page.locator('.cart_list')).toContainText(elementToFind)
    })
})
