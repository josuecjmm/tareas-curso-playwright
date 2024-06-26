const { test, expect } = require('@playwright/test');
const { USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO } = process.env;
const LoginPage = require('../pageObjects/login.page')
const { faker } = require('@faker-js/faker');
const { getItem, setItem } = require('../utils/cache');
const ProductListPage = require('../pageObjects/products.page');

let loginPage;
let productsListPage;

test.describe('Login', () => {
    test.beforeAll(() => {
        const fakeUser = {
            username: `automation-user-${faker.person.firstName()}${faker.number.int({ max: 99 })}`,
            password: `automation-password-${faker.person.firstName()}${faker.number.int({ max: 99 })}`
        }

        setItem('fakeUser', fakeUser)
    })

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        loginPage = new LoginPage(page)
        productsListPage = new ProductListPage(page)
    })

    test('Positive Login', async () => {
        await loginPage.login(USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO)
        await productsListPage.waitForProductsPage()
        await expect(productsListPage.titlePage).toHaveText('Swag Labs')
        await productsListPage.verifyPageLoaded()
    })

    test('Negative Login', async () => {
        const fakeUser = getItem('fakeUser')
        await loginPage.login(
            fakeUser.username,
            fakeUser.password
        )
        await loginPage.waitForBannerError()
        await expect(productsListPage.titlePage).not.toBeVisible()
        await expect(loginPage.bannerError).toContainText('Username and password do not match any user in this service')
    })
})