const { test, expect } = require('@playwright/test');
const {USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO} = process.env; 

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Positive Login', async ({ page }) => {
        await page.locator('[data-test="username"]').fill(USER_SAUCE_DEMO);
        await page.locator('[data-test="password"]').fill(PASSWORD_SAUCE_DEMO);
        await page.locator('[data-test="login-button"]').click();
        const pageLogo = page.locator('.app_logo')
        await pageLogo.waitFor({ state: "visible" })
        await expect(pageLogo).toBeVisible()
        await expect(pageLogo).toHaveText('Swag Labs')
    })

    test('Negative Login', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('iasfhsdifhsdiu');
        await page.locator('[data-test="password"]').fill('sdfhsdifuhsd');
        await page.locator('[data-test="login-button"]').click();
        const errorBanner = page.locator('[data-test="error"]')
        await errorBanner.waitFor({ state: "visible" })
        const pageLogo = page.locator('.app_logo')
        await expect(pageLogo).not.toBeVisible()
        await expect(errorBanner).toContainText('Username and password do not match any user in this service')
    })
})