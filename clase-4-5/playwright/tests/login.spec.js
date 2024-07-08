const { expect } = require('@playwright/test');
const {test} = require('../utils/fixtures')
const { USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO } = process.env;
const { faker } = require('@faker-js/faker');
const { getItem, setItem } = require('../utils/cache');

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
    })

    test('Positive Login', async ({loginPage, productListPage}) => {
        await loginPage.login(USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO)
        await productListPage.waitForProductsPage()
        await expect(productListPage.titlePage).toHaveText('Swag Labs')
        await productListPage.verifyPageLoaded()
    })

    test('Negative Login', async ({loginPage, productListPage}) => {
        const fakeUser = getItem('fakeUser')
        await loginPage.login(
            fakeUser.username,
            fakeUser.password
        )
        await loginPage.waitForBannerError()
        await expect(productListPage.titlePage).not.toBeVisible()
        await expect(loginPage.bannerError).toContainText('Username and password do not match any user in this service')
    })
})