const { test, expect } = require('@playwright/test');
const { USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO } = process.env;
const LoginPage = require('../pageObjects/login.page')

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Positive Login', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login(USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO)
        await page.pause()
        const pageLogo = page.locator('.app_logo')
        await pageLogo.waitFor({ state: "visible" })
        await expect(pageLogo).toBeVisible()
        await expect(pageLogo).toHaveText('Swag Labs')
        await page.pause()
    })

    test.only('Negative Login', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login('asdasdas', 'asadasda')
        const errorBanner = page.locator('[data-test="error"]')
        await errorBanner.waitFor({ state: "visible" })
        const pageLogo = page.locator('.app_logo')
        await expect(pageLogo).not.toBeVisible()
        await expect(errorBanner).toContainText('Username and password do not match any user in this service')
    })
})